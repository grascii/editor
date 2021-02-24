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

function parseInputText(text) {
  const lexer = new Lexer(text);
  const parser = new Parser(lexer);
  const items = parser.parse(); 
  const chars = [];
  var shorthand = "none";
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
        } else {
          var entry;
          switch (shorthand) {
            case "waseda":
              entry = WasedaChar.dict[tok];
              break;
            case "nakane":
              entry = NakaneChar.dict[tok];
              break;

            case "svsd":
              entry = SvsdChar.dict[tok];
              break;

            case "shugiin":
              entry = ShugiinChar.dict[tok];
              break;

            case "takusari": 
              entry = TakusariChar.dict[tok];
              break;

            case "gregg":
              entry = GreggChar.dict[tok];
              break;

            default:
              chars.push(new CharText("\u25A1"));
              break;
          }

          if (entry) {
            if (Array.isArray(entry)) {
              entry.forEach(function(ctor) { chars.push(new ctor()); });
            } else {
              chars.push(new entry());
            }
          } else {
            chars.push(new CharText("\u25A1"));
            //chars.push(new CharText(tok));
          }
        }
      }
    } else {
      items[i] = items[i].substring(1);
      switch (items[i]) {
        case "waseda":
        case "svsd":
        case "nakane":
        case "shugiin":
        case "gregg":
        case "takusari":
        case "none":
          shorthand = items[i];
          break;
            
        default:
          var match;
          if ((match = items[i].match(/^([hv])sp(?:ace)?{(-?\d+(?:\.\d+)?)}/)) !== null) {
            if (match[1] == "h") {
              chars.push(new CharRight(parseFloat(match[2])));
            } else if (match[1] == "v") {
              chars.push(new CharUp(parseFloat(match[2])));
            }
          } else if ((match = items[i].match(/^sp(?:ace)?{(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)}/)) !== null) {
            chars.push(new CharMove(parseFloat(match[1]), -parseFloat(match[2])));
          } else if ((match = items[i].match(/newpage|pb/)) !== null) {
            chars.push(new CharNewpage());
          } else if ((match = items[i].match(/^scroll{(-?\d+(?:\.\d+)?)/))) {
            chars.push(new CharScroll(parseFloat(match[1])));
          } else if ((match = items[i].match(/^speed{(\d+(?:\.\d+)?)/))) {
            chars.push(new CharSpeed(parseFloat(match[1]) / 1000));
          } else if ((match = items[i].match(/^br{(\d+)/))) {
            const n = parseInt(match[1]);
            for (var i = 0; i < n; i++) {
              chars.push(new CharNewline());
            }
          }
          break;
      }
    }
  }
  return chars;
}


function parseInputTexts(texts) {
  const charsArray = [];
  var shorthand = "none";

  texts.forEach(function(text) {
    const lexer = new Lexer(text);
    const parser = new Parser(lexer);
    const items = parser.parse(); 
    console.log(items);
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
            var entry;
            switch (shorthand) {
              case "waseda":
                entry = WasedaChar.dict[tok];
                break;
              case "nakane":
                entry = NakaneChar.dict[tok];
                break;

              case "svsd":
                entry = SvsdChar.dict[tok];
                break;

              case "shugiin":
                entry = ShugiinChar.dict[tok];
                break;

              case "takusari": 
                entry = TakusariChar.dict[tok];
                break;

              case "gregg":
                entry = GreggChar.dict[tok];
                break;

              default:
                chars.push(new CharText("\u25A1"));
                break;
            }

            if (entry) {
              if (Array.isArray(entry)) {
                entry.forEach(function(ctor) { chars.push(new ctor()); });
              } else {
                chars.push(new entry());
              }
            } else {
              chars.push(new CharText("\u25A1"));
              //chars.push(new CharText(tok));
            }
          }
        }
      } else {
        items[i] = items[i].substring(1);
        switch (items[i]) {
          case "waseda":
          case "svsd":
          case "nakane":
          case "shugiin":
          case "gregg":
          case "takusari":
          case "none":
            shorthand = items[i];
            break;
              
          default:
            var match;
            if ((match = items[i].match(/^([hv])sp(?:ace)?{(-?\d+(?:\.\d+)?)}/)) !== null) {
              if (match[1] == "h") {
                chars.push(new CharRight(parseFloat(match[2])));
              } else if (match[1] == "v") {
                chars.push(new CharUp(parseFloat(match[2])));
              }
            } else if ((match = items[i].match(/^sp(?:ace)?{(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)}/)) !== null) {
              chars.push(new CharMove(parseFloat(match[1]), -parseFloat(match[2])));
            } else if ((match = items[i].match(/newpage|pb/)) !== null) {
              chars.push(new CharNewpage());
            } else if ((match = items[i].match(/^scroll{(-?\d+(?:\.\d+)?)/))) {
              chars.push(new CharScroll(parseFloat(match[1])));
            } else if ((match = items[i].match(/^speed{(\d+(?:\.\d+)?)/))) {
              chars.push(new CharSpeed(parseFloat(match[1]) / 1000));
            } else if ((match = items[i].match(/^br{(\d+)/))) {
              const n = parseInt(match[1]);
              for (var i = 0; i < n; i++) {
                chars.push(new CharNewline());
              }
            }
            break;
        }
      }
    }
    charsArray.push(chars);
  });
  return charsArray;
}
