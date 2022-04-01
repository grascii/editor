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

CharScroll = function(dy) {
  Char.call(this, "CharScroll", "スクロール", "", "", "", "black");
  this.scrollY = dy;
};
CharScroll.prototype = Object.create(Char.prototype);
CharScroll.prototype.setPaths = function() { this.paths = ["m0,0"]; };
Char.dict["scroll"] = CharScroll;

CharSpeed = function(speed) {
  Char.call(this, "CharSpeed", "スピード", "", "", "", "black");
  this.speed = speed;
};
CharSpeed.prototype = Object.create(Char.prototype);
CharSpeed.prototype.setPaths = function() { this.paths = ["m0,0"]; };
CharSpeed.prototype.updatePenPos = function(pos) {
  pos.speed = this.speed;
};
Char.dict["scroll"] = CharSpeed;

CharDottedLine = function() { Char.call(this, "CharDottedLine", "点線", "E8", "E", "E", "black"); };
CharDottedLine.prototype = Object.create(Char.prototype);
Char.dict["…"] = CharDottedLine;
CharDottedLine.prototype.setPaths = function() {
  this.dp = p(8, 0);
  this.paths = [
    "m0,0h1.2",
    "m2.3,0h1.2",
    "m4.5,0h1.2",
    "m6.8,0h1.2"
  ];
};

CharTofu = function(inputText) { Char.call(this, "CharTofu", "豆腐", "", "", "", "black"); };
CharTofu.prototype = Object.create(Char.prototype);

CharTofu.prototype.setPaths = function() {
  this.dp = p(6, 0);
  this.paths = ["m 1,2 h 4 v -4 h -4 v 4 l 4 -4 m -4,0 l 4,4"];
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

CharPoint = function() { Char.call(this, "CharPoint", "点", "P", "P", "P", "black", false, p(0.0, -0.1)); };
CharPoint.prototype = Object.create(Char.prototype);
Char.dict["・"] = CharPoint;

CharPoint.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "":
      this.dp = p(0, 0.1);
      this.paths = ["m 0 0 v 0.1"];
      return;
  }

  this.dp = p(0, 0);
  this.paths = [];
};



CharDottedCircle = function() { Char.call(this, "CharDottedCircle", "まる", "C", "C", "C", "black", false, p(6.8, 0.0)); };
CharDottedCircle.prototype = Object.create(Char.prototype);
Char.dict["○"] = CharDottedCircle;

CharDottedCircle.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0 0.29 -0.0364 0.572 -0.1051 0.841", "m -0.4168 1.63 c -0.1371 0.249 -0.3046 0.48 -0.4977 0.686", "m -1.5662 2.858 c -0.2366 0.152 -0.4933 0.274 -0.7651 0.364", "m -3.1649 3.383 c -0.0746 0.005 -0.1499 0.007 -0.2257 0.007 c -0.2117 0 -0.4189 -0.019 -0.6198 -0.056", "m -4.8186 3.076 c -0.2586 -0.12 -0.4996 -0.272 -0.7178 -0.451", "m -6.1206 2.011 c -0.1671 -0.226 -0.3066 -0.474 -0.4138 -0.739", "m -6.7514 0.452 c -0.0197 -0.148 -0.0299 -0.299 -0.0299 -0.452 c 0 -0.134 0.0077 -0.265 0.0227 -0.395", "m -6.5563 -1.217 c 0.1027 -0.267 0.2382 -0.518 0.4015 -0.747", "m -5.5805 -2.589 c 0.2152 -0.182 0.4534 -0.338 0.7097 -0.463", "m -4.0672 -3.323 c 0.2187 -0.045 0.4449 -0.068 0.6766 -0.068 c 0.0567 0 0.113 0.001 0.169 0.004", "m -2.3873 -3.24 c 0.2741 0.085 0.5334 0.203 0.7729 0.351", "m -0.9535 -2.358 c 0.1966 0.204 0.368 0.431 0.5092 0.679", "m -0.1197 -0.897 c 0.0732 0.268 0.1144 0.549 0.1193 0.839"];
      break;
  }
};

CharSmallCircle = function() { Char.call(this, "CharSmallCircle", "小円", "C1", "C", "C", "black", false, p(1.2, 0.0)); };
CharSmallCircle.prototype = Object.create(Char.prototype);
Char.dict["。"] = CharSmallCircle;
CharSmallCircle.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c -1e-06 0.34137 -0.276739 0.61811 -0.618112 0.61811 c -0.341373 0 -0.618111 -0.27674 -0.618112 -0.61811 c 1e-06 -0.34137 0.276739 -0.61811 0.618112 -0.61811 c 0.341373 0 0.618111 0.27674 0.618112 0.61811"];
      break;
  }
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

CharDottedVerticalLine = function() { Char.call(this, "CharDottedVerticalLine", "…↓", "S8", "S", "S", "black", false, p(0.0, 1.5)); };
CharDottedVerticalLine.prototype = Object.create(Char.prototype);
Char.dict["…↓"] = CharDottedVerticalLine;

CharDottedVerticalLine.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _headModel) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tailModel_ + "_" + _name) {}

  //switch (tailModel_ + "_" + _model) {}

  //switch (tailModel_ + "_" + _headModel) {}

  //switch (tailModel_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(0, 3);
  this.paths = ["m 0 0 l 0 1", "m 0 -2 l 0 1", "m 0 -4 l 0 1", "m 0 -6 l 0 1", "m 0 2 l 0 1"];
};

CharChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
CharChar.prototype = Object.create(Char.prototype);
CharChar.dict = {};


CharDottedLineDownRight = function() { Char.call(this, "CharDottedLineDownRight", "…↓→", "SE8", "SE", "SE", "black", false, p(0.0, -3.3)); };
CharDottedLineDownRight.prototype = Object.create(Char.prototype);
Char.dict["…↓→"] = CharDottedLineDownRight;

CharDottedLineDownRight.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _headModel) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tailModel_ + "_" + _name) {}

  //switch (tailModel_ + "_" + _model) {}

  //switch (tailModel_ + "_" + _headModel) {}

  //switch (tailModel_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(4.5886, 6.5532);
  this.paths = ["m 0 0 c 0 0 0.0803 0.1147 0.2197 0.3139", "m 0.7077 1.0107 c 0.077 0.11 0.1586 0.2266 0.2442 0.3487", "m 1.4394 2.0557 c 0.0798 0.114 0.1612 0.2303 0.2438 0.3482", "m 2.1712 3.1008 c 0.0811 0.1158 0.1624 0.232 0.2435 0.3478", "m 2.9028 4.1457 c 0.0824 0.1176 0.1636 0.2337 0.2433 0.3475", "m 3.6339 5.1898 c 0.0852 0.1216 0.1665 0.2378 0.2433 0.3474", "m 4.3652 6.2342 c 0.1417 0.2023 0.2234 0.319 0.2234 0.319"];
};

CharDottedLineDownLeft = function() { Char.call(this, "CharDottedLineDownLeft", "…↓←", "SW8", "SW", "SW", "black", false, p(2.7, -3.7)); };
CharDottedLineDownLeft.prototype = Object.create(Char.prototype);
Char.dict["…↓←"] = CharDottedLineDownLeft;

CharDottedLineDownLeft.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _headModel) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tailModel_ + "_" + _name) {}

  //switch (tailModel_ + "_" + _model) {}

  //switch (tailModel_ + "_" + _headModel) {}

  //switch (tailModel_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(-2.73616, 7.5176);
  this.paths = ["m 0 0 c 0 0 -0.05336 0.146606 -0.145176 0.398871", "m -0.435722 1.19715 c -0.046001 0.12639 -0.094686 0.26014 -0.14557 0.39995", "m -0.871972 2.39574 c -0.04771 0.13109 -0.096351 0.26473 -0.145648 0.40016", "m -1.30842 3.59489 c -0.04842 0.13304 -0.09695 0.26636 -0.14533 0.39928", "m -1.74467 4.79348 c -0.04937 0.13565 -0.09804 0.26935 -0.1457 0.40032", "m -2.18116 5.99273 c -0.05106 0.14029 -0.09975 0.27406 -0.14555 0.39991", "m -2.61791 7.19271 c -0.07524 0.20672 -0.11825 0.32489 -0.11825 0.32489"];
};

CharChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
CharChar.prototype = Object.create(Char.prototype);
CharChar.dict = {};


CharDottedLineUpRight = function() { Char.call(this, "CharDottedLineUpRight", "…↑→", "NE8", "NE", "NE", "black", false, p(0.0, 3.7)); };
CharDottedLineUpRight.prototype = Object.create(Char.prototype);
Char.dict["…↑→"] = CharDottedLineUpRight;

CharDottedLineUpRight.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _headModel) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tailModel_ + "_" + _name) {}

  //switch (tailModel_ + "_" + _model) {}

  //switch (tailModel_ + "_" + _headModel) {}

  //switch (tailModel_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(2.7362, -7.5176);
  this.paths = ["m 0 0 c 0 0 0.0366 -0.1007 0.1014 -0.2788", "m 0.3922 -1.0777 c 0.0456 -0.1253 0.0943 -0.259 0.1454 -0.3995", "m 0.8281 -2.2754 c 0.0476 -0.1307 0.0962 -0.2643 0.1456 -0.3999", "m 1.2644 -3.4741 c 0.0483 -0.1327 0.0968 -0.2659 0.1452 -0.3988", "m 1.7002 -4.6713 c 0.0492 -0.1352 0.0978 -0.2688 0.1456 -0.4", "m 2.1361 -5.869 c 0.0507 -0.1393 0.0993 -0.2728 0.1453 -0.3993", "m 2.5724 -7.0677 c 0.0697 -0.1915 0.12 -0.3297 0.1453 -0.3991", "m 2.7362 -7.5176"];
};

