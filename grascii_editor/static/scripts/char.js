function Char(name, kana, model, headType, tailType, color, bold, offset, right) {
  this.name           = name
  this.model          = model;
  this.kana           = kana;
  this.paths          = [];
  this.pathsExtra     = [];
  this.pos            = [];
  this.pdp            = p(0, 0);
  this.dp             = p(0, 0);
  this.offset         = offset || p(1, 0);
  this.right          = right || 0;
  this.headType       = headType;
  this.tailType       = tailType;
  this.prev           = null;
  this.next           = null;
  this.color          = color;
  this.thickness      = 0.3543307 * 1.2 * (bold ? 1.8 : 1);
  this.thicknessExtra = this.thickness;
  this.description    = "";
  this.speedFactor    = 1.0;
  this.speed          = 0.03;
  this.timingFunction = "linear";
}

Char.dict = {};
Char.catalog = {};
Char.connectChars = function(chars) {
  for (var i = 1; i < chars.length; i++) {
    chars[i - 1].next = chars[i];
    chars[i].prev = chars[i - 1];
  }
  for (var i = 0; i < 2; i++) {
    chars.forEach(function(c) {
      c.setPaths();
      c.setPathsExtra();
    });
  }
};
Char.createElements = function(chars, pos) {
  if (!pos) pos = {x: 5, y: 10, left: 5, right: 5, bottom: 10, row: 10}

  if (chars.length > 0) {
    pos.x += chars[0].offset.x;
    pos.y += chars[0].offset.y;
  }

  Char.connectChars(chars);

  const groups = document.createDocumentFragment();

  for (var i = 0, j = 0; i < chars.length; i++) {
    const c = chars[i];
    groups.append(c.createElement(pos));
    if (["CharNewline", "CharSpace", "CharFullWidthSpace"].includes(c.name) || i + 1 == chars.length) {
      do {
        const cx = chars[j];
        if (cx.pathsExtra.length > 0) {
          groups.append(cx.createElementExtra());
        }
      } while (++j <= i);
    }
  }

  return groups;
}
Char.createElements = function(chars, pos, groupTop) {
  if (!pos) pos = {x: 5, y: 10, left: 5, right: 5, bottom: 10, row: 10}

  if (chars.length > 0) {
    pos.x += chars[0].offset.x;
    pos.y += chars[0].offset.y;
  }

  Char.connectChars(chars);

  const groups = document.createDocumentFragment();

  for (var i = 0, j = 0; i < chars.length; i++) {
    const c = chars[i];
    groups.append(c.createElement(pos));
    if (["CharNewline", "CharSpace", "CharFullWidthSpace"].includes(c.name) || i + 1 == chars.length) {
      do {
        const cx = chars[j];
        if (cx.pathsExtra.length > 0) {
          groups.append(cx.createElementExtra());
        }
      } while (++j <= i);
    }
  }

  return groups;
};
Char.createElementList = function(charsArray, pos) {
  if (!pos) pos = {x: 5, y: 10, left: 5, right: 5, bottom: 10, row: 10}
  const charsFlat = charsArray.flat();
  const groupList = []; 

  if (charsFlat.length > 0) {
    pos.x += charsFlat[0].offset.x;
    pos.y += charsFlat[0].offset.y;
  }

  Char.connectChars(charsFlat);

  charsArray.forEach(function(chars) {
    const groups = document.createDocumentFragment();
    for (var i = 0, j = 0; i < chars.length; i++) {
      const c = chars[i];
      groups.append(c.createElement(pos));
      if (["CharNewline", "CharSpace", "CharFullWidthSpace"].includes(c.name) || i + 1 == chars.length) {
        do {
          const cx = chars[j];
          if (cx.pathsExtra.length > 0) {
            groups.append(cx.createElementExtra());
          }
        } while (++j <= i);
      }
    }
    groupList.push(groups);
  });
  return groupList;
};
Char.prototype.getPaths = function() { return this.paths; };
Char.prototype.updatePenPos = function(pos) {
  pos.x += this.dp.x + this.pdp.x;
  pos.y += this.dp.y + this.pdp.y;
};
Char.prototype.getNextHeadType  = function() { return this.next ? this.next.headType : ""; };
Char.prototype.getPrevTailType  = function() { return this.prev ? this.prev.tailType : ""; };
Char.prototype.getNextModel     = function() { return this.next ? this.next.model : ""; };
Char.prototype.getNextHeadModel = function() { return this.next ? this.next.model.replace(/(\D+\d*).*/, "$1") : ""; };
Char.prototype.getPrevModel     = function() { return this.prev ? this.prev.model : ""; };
Char.prototype.getPrevTailModel = function() { return this.prev ? this.prev.model.replace(/.*?(\D+\d*)$/, "$1") : ""; };
Char.prototype.getNextName      = function() { return this.next ? this.next.name : ""; };
Char.prototype.getPrevName      = function() { return this.prev ? this.prev.name : ""; };
Char.prototype.getNextOffset    = function() { return this.next ? this.next.offset : p(1, 0); };
Char.prototype.getPrevOffset    = function() { return this.prev ? this.prev.offset : p(1, 0); };
Char.prototype.createElement    = function(pos) {
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const style = "stroke-width:" + this.thickness + ";" + "stroke:" + this.color + ";";
  const transform = "translate(" + (this.pdp.x + pos.x) + " " + (this.pdp.y + pos.y) + ")";
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  const me = this;
  title.textContent = me.name;

  g.appendChild(title);
  g.setAttribute("style", style);
  g.setAttribute("transform", transform); 

  this.pos.x = pos.x;
  this.pos.y = pos.y;
  pos.right  = pos.right  < pos.x + this.right ? pos.x + this.right : pos.right;
  pos.bottom = pos.bottom < pos.y ? pos.y : pos.bottom;

  this.paths.forEach(function(d) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("data-char", me.name);
    path.setAttribute("data-head", me.headType);
    path.setAttribute("data-tail", me.tailType);
    path.setAttribute("data-kana", me.kana);
    path.setAttribute("data-model", me.model);
    path.setAttribute("data-key", "");
    path.setAttribute("data-speed-factor", me.speedFactor);
    path.setAttribute("data-scroll-y", me.scrollY || "0");
    path.setAttribute("data-speed", pos.speed);
    g.appendChild(path);
  });
  this.updatePenPos(pos);
  return g;
};
Char.prototype.createElementExtra = function() {
  const that = this;
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const style = "stroke-width:" + this.thicknessExtra + ";" + "stroke:" + this.color + ";";
  const transform = "translate(" + this.pos.x + " " + this.pos.y + ")";
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = this.name;

  g.appendChild(title);
  g.setAttribute("style", style);
  g.setAttribute("transform", transform); 

  this.pathsExtra.forEach(function(d) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("data-speed", that.speed);
    g.appendChild(path);
  });
  return g;
};
Char.prototype.setPaths      = function() {};
Char.prototype.setPathsExtra = function() {};

CharSpace = function() { Char.call(this, "CharSpace", "空白", "", "", "", "black"); };
CharSpace.prototype = Object.create(Char.prototype);
CharSpace.prototype.setPaths = function() {};
CharSpace.prototype.updatePenPos = function(pos) {
  //pos.x += 1;
  //pos.x = pos.right + 1;
  //pos.y  = pos.row;
  const nextName = this.getNextName();
  const prevName = this.getPrevName();
  const offset = this.getNextOffset();
  pos.x = pos.right + offset.x + (((prevName === "CharSpace") || (prevName === "CharNewline")) ? 1 : 5);
  pos.y = pos.row + offset.y;
};
Char.dict["\u0020"] = CharSpace;
Char.dict["\u3000"] = CharSpace;

CharFullWidthSpace = function() { Char.call(this, "CharFullWidthSpace", "空白", "", "", "", "black"); };
CharFullWidthSpace.prototype = Object.create(Char.prototype);
CharFullWidthSpace.prototype.setPaths = function() {};
CharFullWidthSpace.prototype.updatePenPos = function(pos) {
  //pos.x += 5;
  pos.x = pos.right + 5;
  pos.y = pos.row;
};
Char.dict["\u3040"] = CharFullWidthSpace;

CharUp = function(mm) {
  Char.call(this, "CharUp", "上", "", "", "", "black", false, p(0, 0));
  this.mm = mm;
};
CharUp.prototype = Object.create(Char.prototype);
CharUp.prototype.setPaths = function() { this.dp = (typeof(this.mm) != 'undefined') ? p(0, -this.mm) : p(0, -1); };
Char.dict["↑"] = CharUp;

CharDown = function(mm) {
  Char.call(this, "CharDown", "下", "", "", "", "black", false, p(0, 0));
  this.mm = mm;
};
CharDown.prototype = Object.create(Char.prototype);
CharDown.prototype.setPaths = function() { this.dp = (typeof(this.mm) != 'undefined') ? p(0, this.mm) : p(0, 1); };
Char.dict["↓"] = CharDown;

CharLeft = function(mm) {
  Char.call(this, "CharLeft", "左", "", "", "", "black", false, p(0, 0));
  this.mm = mm;
};
CharLeft.prototype = Object.create(Char.prototype);
CharLeft.prototype.setPaths = function() { this.dp = (typeof(this.mm) != 'undefined') ? p(-this.mm, 0) : p(1, 0); };
Char.dict["←"] = CharLeft;

CharRight = function(mm) {
  Char.call(this, "CharRight", "右", "", "", "", "black", false, p(0, 0));
  this.mm = mm;
};
CharRight.prototype = Object.create(Char.prototype);
CharRight.prototype.setPaths = function() { this.dp = typeof(this.mm) != 'undefined' ? p(this.mm, 0) : p(1, 0); };
Char.dict["→"] = CharRight;

CharMove = function(x, y) {
  Char.call(this, "CharMove", "移動", "", "", "", "black", false, p(0, 0));
  this.dp = p(x, y);
};
CharMove.prototype = Object.create(Char.prototype);

CtorMove = function(x, y) {
  return function() {
    return new CharMove(x, y);
  }; 
};

CharNewline = function() {Char.call(this, "CharNewline", "改行", "", "", "", "black"); };
CharNewline.prototype = Object.create(Char.prototype);
CharNewline.prototype.setPaths = function() { this.dp = p(5, 5); };
Char.dict["\n"] = CharNewline;

CharNewline.prototype.updatePenPos = function(pos) {
  const offset = this.getNextOffset();
  pos.x   = pos.left + offset.x;
  //pos.y   = pos.row + this.dp.y;
  pos.row = pos.bottom + this.dp.y;
  pos.y   = pos.row + offset.y;
  pos.right = pos.left;
};

CharNewpage = function() {
  Char.call(this, "CharNewpage", "改頁", "", "", "", "black");
  this.scroll_y = 297;
};
CharNewpage.prototype = Object.create(Char.prototype);
CharNewpage.prototype.setPaths = function() { this.paths = ["m0,0"]; };
Char.dict["newpage"] = CharNewpage;

CharNewpage.prototype.updatePenPos = function(pos) {
  const offset = this.getNextOffset();
  pos.left  = 5;
  pos.x     = pos.left + offset.x;
  pos.y     = Math.ceil(pos.y / 297) * 297 + 10;
  pos.row   = pos.bottom = pos.y + 5;
  pos.right = pos.left;
};

CharText = function(inputText) {
  Char.call(this, "CharText", "文字列", "", "", "", "black");
  this.inputText = inputText;
};

CharText.prototype = Object.create(Char.prototype);
CharText.prototype.createElement = function(pos) {
  const p = document.createElementNS("http://www.w3.org/2000/svg", "text");
  var style = "fill: black;"
            + "stroke-width: 0;"
            + "font-family: sans-serif;"
            + "font-size: 5;"
            + "font-weight: lighter;"
            + "white-space: pre";
  p.setAttribute("style", style);
  p.setAttribute("x", pos.x);
  p.setAttribute("y", pos.y + 2.5);
  p.textContent = this.inputText;
  this.updatePenPos(pos);
  return p;
};

CharText.prototype.updatePenPos = function(pos) {
  pos.x += 5 * this.inputText.length;
};


CharSeparator = function() { Char.call(this, "CharSeparator", "", "-", "-", "-", "black", false, p(0, 0)); };
CharSeparator.prototype = Object.create(Char.prototype);
CharSeparator.prototype.setPaths = function() {
  this.paths = [""];
  this.model = this.getNextModel();
  this.headType = this.getNextHeadType();
  this.tailType = this.getPrevTailType();
};
CharSeparator.prototype.updatePenPos = function(pos) {};
Char.dict["/"] = CharSeparator;
Char.dict["／"] = CharSeparator;

