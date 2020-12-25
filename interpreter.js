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
