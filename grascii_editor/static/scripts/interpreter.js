function Lexer(text) {
  this.text = text;
  this.pos = 0;
  this.currentChar = this.text.charAt(this.pos);
}

Lexer.prototype.advance = function() {
  this.pos++;
  if (this.pos < this.text.length) {
    this.currentChar = this.text[this.pos];
  } else {
    this.currentChar = null;
  }
};

Lexer.prototype.error = function() {
  console.error("Invalid character");
};

Lexer.prototype.command = function() {
  var result = this.currentChar;
  this.advance();
  while ((this.currentChar !== null) && /[a-z{}_\d.,-]+/.test(this.currentChar)) {
    result += this.currentChar;
    this.advance();
  }
  //if (/\s/.test(this.currentChar)) this.advance();
  return result;
};

Lexer.prototype.line = function() {
  result = this.currentChar;
  this.advance();
  while ((this.currentChar !== null) && (/[^\n\\]/.test(this.currentChar))) {
    
    result += this.currentChar;
    this.advance();
  }
  return result;
};

Lexer.prototype.peek = function(dp) {
  const peekPos = this.pos + (typeof(dp) == "undefined" ? 1 : dp);
  if (peekPos < this.text.length) {
    return this.text.charAt(peekPos);
  } else {
    null;
  }
};

Lexer.prototype.atomicSequence = function() {
  var result = this.currentChar;
  this.advance();
  while (this.pos < this.text.length && /[ゃゅょぁぃぅぇぉーんャュョァィゥェォン]/.test(this.currentChar)) {
    result += this.currentChar;
    this.advance();
  }
  
  return result;
};

Lexer.prototype.getNextToken = function() {
  if (this.currentChar !== null) {
    if (this.currentChar == "\\") {
      return {type: "COMMAND", value: this.command()};
    }

    if (this.currentChar == "(") {
      this.advance();
      return {type: "LPAREN", value: "("};
    }

    if (this.currentChar == "（") {
      this.advance();
      return {type: "LPAREN", value: "("};
    }

    if (this.currentChar == ")") {
      this.advance();
      return {type: "RPAREN", value: ")"};
    }

    if (this.currentChar == "）") {
      this.advance();
      return {type: "RPAREN", value: ")"};
    }

    return {type: "ATOMIC_SEQUENCE", value: this.atomicSequence()};
  }

  return {type: "EOF", value: null};
};

function Parser(lexer) {
  this.lexer = lexer;
  this.currentToken = this.lexer.getNextToken();
}

Parser.prototype.eat = function(tokenType) {
  if (this.currentToken !== null && this.currentToken.type == tokenType) {
    this.currentToken = this.lexer.getNextToken();
  } else {
    this.currentToken = null;
  }
}

Parser.prototype.command = function() {
  const token = this.currentToken;
  this.eat("COMMAND");
  return token.value;
}

Parser.prototype.factor = function() {
  const token = this.currentToken;
  if (token.type === "LPAREN") {
    this.eat("LPAREN");
    var seq = "";
    while (this.currentToken !== null && this.currentToken.type == "ATOMIC_SEQUENCE") {
      seq += this.currentToken.value;
      this.eat("ATOMIC_SEQUENCE");
    }
    this.eat("RPAREN");
    return seq;
  } else {
    const token = this.currentToken;
    if ((token !== null) ) {
      this.eat("ATOMIC_SEQUENCE");
    }
    return token.value;
  }
};

Parser.prototype.string = function() {
  const factors = [];
  while ((this.currentToken !== null) && (this.currentToken.type != "COMMAND") && (this.currentToken.type != "EOF")) {
    factors.push(this.factor());
  }
  return factors;
};

Parser.prototype.page = function() {
  var token = this.currentToken;
  const result = [];
  if (token.type != "COMMAND") {
    result.push(this.string()); 
  }
  while (this.currentToken !== null && this.currentToken.type == "COMMAND") {
    result.push(this.command()); 
    result.push(this.string()); 
  }
  return result;
};

Parser.prototype.parse = function() {
  return this.page();
};

const jrpc = simple_jsonrpc.connect_xhr(location.origin + "/api");
const interpretationCache = new Map();
async function interpretGrascii(grascii) {
  if (interpretationCache.has(grascii)) {
    return interpretationCache.get(grascii);
  }
  const interpretation = await jrpc.call('grascii.interpret', [grascii]);
  interpretationCache.set(grascii, interpretation);
  return interpretation;
}

async function lexInput(text) {
  const chars = [];
  const shorthand = "gregg";
  const lines = text.split(/\n|\r|\n\r|\r\n/);
  for (const line of lines) {
    const words = line.split(/\s+/);
    for (const word of words) {
      let interpretation = await interpretGrascii(word);
      if (interpretation) {
        for (let item of interpretation) {
          if (typeof item === 'string') {
            let entry = Char.catalog[shorthand][item.toLowerCase()];
            if (Array.isArray(entry)) {
              entry.forEach(function(ctor) { chars.push(new ctor()); });
            } else {
              chars.push(new entry());
            }
          }
        }
        chars.push(new Char.dict[" "]);
      }
    }
    chars.push(new CharNewline());
  }
  return chars
}

function parseInputTexts(texts) {
  const charsArray = [];
  var shorthand = "gregg";

  texts.forEach(function(text) {
    const lexer = new Lexer(text);
    const parser = new Parser(lexer);
    const items = parser.parse(); 
    const chars = [];
    for (var i = 0; i < items.length; i++) {
      if (Array.isArray(items[i])) {
        for (var j = 0; j < items[i].length; j++) {
          const tok = items[i][j];

          if (shorthand == "none") {
            var s = "";
            while (j < items[i].length) {
              if (items[i][j] == "\n") {
                if (s != "") {
                  chars.push(new CharText(s));
                }
                chars.push(new Char.dict["\n"]);
                s = "";
              } else {
                s += items[i][j];
              }
              j++;
            }
            if (s != "") {
              chars.push(new CharText(s));
            }
          } else if (Char.dict[tok]) {
            chars.push(new Char.dict[tok]());
          } else if (tok != "") {
            if (Char.catalog[shorthand]) {
              let entry = Char.catalog[shorthand][tok];
              if (Array.isArray(entry)) {
                entry.forEach(function(ctor) { chars.push(new ctor()); });
              } else {
                chars.push(new entry());
              }
            } else {
                chars.push(new CharText("\u25A1"));
            }
          }
        }
      } else {
        items[i] = items[i].substring(1);
        var match;
        if ((match = items[i].match(/^([hv])sp(?:ace)?{(-?\d+(?:\.\d+)?)}/)) !== null) {
          if (match[1] == "h") {
            chars.push(new CharRight(parseFloat(match[2])));
          } else if (match[1] == "v") {
            chars.push(new CharUp(parseFloat(match[2])));
          }
        } else if ((match = items[i].match(/^sh(?:orthand)?{([a-z]+)}/)) !== null) {
          shorthand = match[1];
        } else if ((match = items[i].match(/^sp(?:ace)?{(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)}/)) !== null) {
          chars.push(new CharMove(parseFloat(match[1]), -parseFloat(match[2])));
        } else if ((match = items[i].match(/newpage|pb/)) !== null) {
          chars.push(new CharNewpage());
        } else if ((match = items[i].match(/^scroll{(-?\d+(?:\.\d+)?)}/))) {
          chars.push(new CharScroll(parseFloat(match[1])));
        } else if ((match = items[i].match(/^speed{(\d+(?:\.\d+)?)}/))) {
          chars.push(new CharSpeed(parseFloat(match[1]) / 1000));
        } else if ((match = items[i].match(/^br{(\d+)}/))) {
          const n = parseInt(match[1]);
          for (var i = 0; i < n; i++) {
            chars.push(new CharNewline());
          }
        }
      }
    }
    charsArray.push(chars);
  });
  return charsArray;
}
