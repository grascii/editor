function Point(x, y) { return {x: x, y: y}; }
function PPoint(r, deg) { return {x: r * Math.cos(deg * Math.PI / 180), y: r * Math.sin(deg * Math.PI / 180)}; }
p = Point;
pp = PPoint;

function Char(name, kana, model, headType, tailType, color, bold, offset, right) {
  this.name           = name
  this.model          = model;
  this.kana           = kana;
  this.paths          = [];
  this.pathsExtra     = [];
  this.pos            = [];
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
}

Char.dict = {};
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
};
Char.prototype.getPaths = function() { return this.paths; };
Char.prototype.updatePenPos = function(pos) {
  pos.x += this.dp.x;
  pos.y += this.dp.y;
};
Char.prototype.getNextHeadType = function() { return this.next ? this.next.headType : ""; };
Char.prototype.getPrevTailType = function() { return this.prev ? this.prev.tailType : ""; };
Char.prototype.getNextModel    = function() { return this.next ? this.next.model    : ""; };
Char.prototype.getPrevModel    = function() { return this.prev ? this.prev.model    : ""; };
Char.prototype.getNextName     = function() { return this.next ? this.next.name     : ""; };
Char.prototype.getPrevName     = function() { return this.prev ? this.prev.name     : ""; };
Char.prototype.getNextOffset   = function() { return this.next ? this.next.offset   : p(1, 0); };
Char.prototype.getPrevOffset   = function() { return this.prev ? this.prev.offset   : p(1, 0); };
Char.prototype.createElement   = function(pos) {
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const style = "stroke-width:" + this.thickness + ";" + "stroke:" + this.color + ";";
  const transform = "translate(" + pos.x + " " + pos.y+ ")";
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = this.name;

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
    g.appendChild(path);
  });
  this.updatePenPos(pos);
  return g;
};
Char.prototype.createElementExtra = function() {
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

CharFullWidthSpace = function() { Char.call(this, "CharFullWidthSpace", "空白", "", "", "", "black"); };
CharFullWidthSpace.prototype = Object.create(Char.prototype);
CharFullWidthSpace.prototype.setPaths = function() {};
CharFullWidthSpace.prototype.updatePenPos = function(pos) {
  //pos.x += 5;
  pos.x = pos.right + 5;
  pos.y  = pos.row;
};
Char.dict["\u3040"] = CharFullWidthSpace;

CharUp = function(mm) {
  Char.call(this, "CharUp", "上", "", "", "", "black", false, p(0, 0));
  this.mm = mm;
};
CharUp.prototype = Object.create(Char.prototype);
CharUp.prototype.setPaths = function() { this.dp = this.mm ? p(0, -this.mm) : p(0, -1); };
Char.dict["↑"] = CharUp;

CharDown = function(mm) {
  Char.call(this, "CharDown", "下", "", "", "", "black", false, p(0, 0));
  this.mm = mm;
};
CharDown.prototype = Object.create(Char.prototype);
CharDown.prototype.setPaths = function() { this.dp = this.mm ? p(0, this.mm) : p(0, 1); };
Char.dict["↓"] = CharDown;

CharLeft = function(mm) {
  Char.call(this, "CharLeft", "左", "", "", "", "black", false, p(0, 0));
  this.mm = mm;
};
CharLeft.prototype = Object.create(Char.prototype);
CharLeft.prototype.setPaths = function() { this.dp = this.mm ? p(-this.mm, 0) : p(1, 0); };
Char.dict["←"] = CharLeft;

CharRight = function(mm) {
  Char.call(this, "CharRight", "右", "", "", "", "black", false, p(0, 0));
  this.mm = mm;
};
CharRight.prototype = Object.create(Char.prototype);
CharRight.prototype.setPaths = function() { this.dp = this.mm ? p(this.mm, 0) : p(1, 0); };
Char.dict["→"] = CharRight;


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


CharDottedLine = function() { Char.call(this, "CharDottedLine", "点線", "E", "E", "E", "black"); };
CharDottedLine.prototype = Object.create(Char.prototype);
Char.dict["…"] = CharDottedLine;
CharDottedLine.prototype.setPaths = function() {
  this.dp = p(10, 0);
  this.paths = [
    "m0,0h1",
    "m2,0h1",
    "m4,0h1",
    "m6,0h1",
    "m8,0h1",
    "m8.5,0h0.5"
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


WasedaChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
WasedaChar.prototype = Object.create(Char.prototype);
WasedaChar.dict = {};

WasedaA = function() { WasedaChar.call(this, "WasedaA", "あ", "EL4", "EL", "EL", "black", false, p(0.0, -0.2)); };
WasedaA.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["あ"] = WasedaA;

WasedaA.prototype.setPaths = function() {
  switch (this.getNextModel()) {
    case "SEL":
    case "XNE":
    case "ER4":
      this.dp = p(4, 0);
      this.paths = ["m 0,0 c 1.04821,0.5574 2.97476,0.5919 4,0"];
      break;

    case "ER8":
    case "ER8CR1":
    case "ER8CR4":
      this.dp = p(4, 0);
      this.paths = ["m 0,0 c 1.0298,0.5475 2.9223,0.4575 4,0"];
      break;

    case "ER16":
    case "ER16CR1":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.02161 0.5432 2.89547 0.3589 4 0"];
      break;

    default:
      this.dp = p(4, 0);
      this.paths = ["m 0 0c 1.45511 0.773700000000002 3.78509 1.2188 4 0"];
      break;
  }

  switch (this.getNextHeadType()) {
    case "E":
    case "NEL":
      this.dp = p(3.99995, 0);
      this.paths = ["m 0 0 c 1.4551 0.7737 4.4424 1.65126 3.99995 0"];
      break;

    case "WL":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.0195 0.5421 2.8872 0.3191 4 0"];
      break;
  }
};

WasedaI = function() { WasedaChar.call(this, "WasedaI", "い", "ER4", "ER", "ER", "black", false, p(0.0, 0.4)); };
WasedaI.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["い"] = WasedaI;

WasedaI.prototype.setPaths = function() {
  switch (this.getNextModel()) {
    case "EL4":
      this.dp = p(4, 0);
      this.paths = ["m 0,0 c 1.0252,-0.5919 2.9518,-0.5573 4,0"];
      break;

    case "EL8":
    case "EL8CL1":
    case "EL8CL4":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.00556 -0.5805 2.88958 -0.3608 4 0"];
      break;

    default:
      this.dp = p(4, 0);
      this.paths = ["m 0,0 c 1.57891,-0.9116 4.00001,-1.2364 4,0"];
      break;
  }

  switch (this.getNextHeadType()) {
    case "E":
    case "NEL":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.41 -0.8141 4.60079 -1.88614 4 0"];
      break;
  }
};

WasedaKa = function() { WasedaChar.call(this, "WasedaKa", "か", "E8", "E", "E", "black"); };
WasedaKa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["か"] = WasedaKa;

WasedaKa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "E": 
      this.dp = p(7.5076, 0.2);
      this.paths = ["m 0 0 l 8.00001 0 l -0.4024 0.2"];
      break;

    default:
      this.dp = p(8, 0);
      this.paths = ["m 0 0 l 8 0"];
      break;
  }
};

WasedaGa = function() {
  WasedaChar.call(this, "WasedaGa", "が", "E8", "E", "E", "black");
  this.thicknessExtra = this.thickness * 1.5;
};
WasedaGa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["が"] = WasedaGa;
WasedaGa.prototype.setPaths = WasedaKa.prototype.setPaths; 
WasedaGa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 4,1 0,0"];
};


WasedaNa = function() { WasedaChar.call(this, "WasedaNa", "な", "EL8", "EL", "EL", "black"); };
WasedaNa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["な"] = WasedaNa;

WasedaNa.prototype.setPaths = function() {
  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "ER4":
      this.dp = p(8, 0);
      this.paths = ["m 0 0c 2.665 0.8659 5.5867 1.3934 8 0"];
      break;

    case "ER8":
      this.dp = p(8, 0);
      this.paths = ["m 0 0c 2.6214 0.851800000000001 5.465 1.0761 8 0"];
      break;

    case "ER16":
      this.dp = p(8.0001, 0);
      this.paths = ["m 0 0 c 2.5998 0.845 5.4003 0.845 8.0001 0"];
      break;

    case "UWL4":
      this.dp = p(8.00001, 0);
      this.paths = ["m 0 0 c 1.52541 0.4956 5.35892 1.39161 8.00001 0"];
      break;
    
    default:
      this.dp = p(8, 0);
      this.paths = ["m 0 0c 2.04073 0.6631 7.67821 1.825 8 0"];
      break;
  }

  switch (this.getNextHeadType()) {
    //case "E":
    //  this.dp = p(8, 0);
    //  this.paths = ["m 0 0 c 2.1847 0.7099 8.49877 1.86144 8 0"];
    //  break;

    case "E":
    case "NEL":
      this.dp = p(8, 0);
      this.paths = ["m 0 0 c 2.1847 0.7099 8.64983 2.42522 8 0"];
      break;
  }
};

WasedaKya = function() { WasedaChar.call(this, "WasedaKya", "きゃ", "SL8", "SL", "SL", "black"); };
WasedaKya.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["きゃ"] = WasedaKya;

WasedaKya.prototype.setPaths = function() {
  switch (this.getNextModel()) {

    default:
      this.dp = p(0, 8);
      this.paths = ["m 0 0c -1.20973 2.0953 -1.81809 6.9503 0 8"];
      break;
  }
};

WasedaTa = function() { WasedaChar.call(this, "WasedaTa", "た", "SW8/NE8", "SW/NE", "SW/NE", "black"); };
WasedaTa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["た"] = WasedaTa;

WasedaTa.prototype.setPaths = function() {
  if (this.toReverse()) {
      this.model = "NE8";
      this.headType = this.tailType = "NE";
      
      switch (this.getNextHeadType()) {
        //case "NE":
        //  this.dp = p(6.6323, -4.4736);
        //  this.paths = ["m 0 0l 6.6323 -4.4736"];
        //  break;

        default:
          this.dp = p(6.63226, -4.4736);
          this.paths = ["m 0 0l 6.63226 -4.4736"];
          break;
      }
  } else {
      this.model = "SW8";
      this.headType = this.tailType = "SW";

      switch (this.getNextHeadType()) {
        case "SW":
          this.dp = p(-2.48616, 7.0846);
          this.paths = ["m 0 0l -2.73616 7.5176l 0.25 -0.433"];
          break;

        default:
          this.dp = p(-2.73616, 7.5176);
          this.paths = ["m 0 0l -2.73616 7.5176"];
          break;
      }
  }
};

WasedaTa.prototype.toReverse = function() {
  return /^(SWR|SW|SR|S|SER)$/.test(this.getPrevTailType());
};

WasedaSa = function() { WasedaChar.call(this, "WasedaSa", "さ", "NEL8/SWR8", "NEL/SWR", "NEL/SWR", "black", false, p(0.0, 2.5)); };
WasedaSa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["さ"] = WasedaSa;

WasedaSa.prototype.setPaths = function() {
  if (this.toReverse()) {
    this.model = "SWR8";
    this.headType = this.tailType = "SWR";

    switch (this.getNextHeadType()) {

      case "NEL":
        this.dp = p(-2.80001, 6.5818);
        this.paths = ["m 0 0c 0 2.5891 -0.601299999999999 5.3124 -2.80001 6.5818"];
        break;

      default:
        this.dp = p(-3.8, 6.5818);
        this.paths = ["m 0 0c 0 3.2179 -1.0078 6.5818 -3.8 6.5818"];
        break;
    }
  } else {
    this.model = "NEL8";
    this.headType = this.tailType = "NEL";

    switch (this.getNextModel()) {
      case "SW4":
      case "UWL4":
        this.dp = p(5.6479, -5.0854);
        this.paths = ["m 0 0 c 2.0164 -1.1641 4.50785 -3.11078 5.6479 -5.0854"];
        return;
    }

    switch (this.getNextHeadType()) {
      case "E":
      case "ER":
      case "NEL":
        this.dp = p(5.6479, -5.0854);
        this.paths = ["m 0 0 c 1.8711 -1.0803 6.6855 -3.2882 5.6479 -5.0854"];
        break;

      default:
        this.dp = p(5.6479, -5.0854);
        this.paths = ["m 0 0c 2.01641 -1.1642 5.6479 -2.7837 5.6479 -5.0854"];
        break;
    }
  }
};

WasedaSa.prototype.toReverse = function() {
  return (this.getPrevModel() !== "ER4") && /^(E|ER|NE|NER)$/.test(this.getPrevTailType());
};

WasedaMa = function() { WasedaChar.call(this, "WasedaMa", "ま", "ER8", "ER", "ER", "black"); };
WasedaMa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ま"] = WasedaMa;

WasedaMa.prototype.setPaths = function() {
  switch (this.getNextModel()) {
    case "EL4":
      this.dp = p(8, 0);
      this.paths = ["m 0 0 c 1.7244 -0.7319 6.3524 -0.876 8 0"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "SE":
    case "E":
      this.dp = p(8, 0);
      this.paths = ["m 0 0 c 3.1159 -1.322 9.4622 -2.088 8 0"];
      break;

    default:
      this.dp = p(8.00001, 0);
      this.paths = ["m 0 0c 2.52091 -1.07 8.00001 -2.0823 8.00001 0"];
      break;
  }
};

WasedaU = function() { WasedaChar.call(this, "WasedaU", "う", "S4", "S", "S", "black", false, p(0.0, -2.0)); };
WasedaU.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["う"] = WasedaU;

WasedaU.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "S":
    case "SEL":
    //case "EL":
      this.dp = p(0.2, 3.5076);
      this.paths = ["m 0 0l 0 4l 0.2 -0.4924"];

     case "SW":
      this.dp = p(0, 4);
      this.paths = ["m 0 0 c 0.01249 1.35832 -0.369724 3.50766 0 4"];
      break;     break;

    default:
      this.dp = p(0, 4);
      this.paths = ["m 0 0l 0 4"];
      break;
  }
};

WasedaE = function() { WasedaChar.call(this, "WasedaE", "え", "SE4", "SE", "SE", "black", false, p(0.0, -1.4)); };
WasedaE.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["え"] = WasedaE;

WasedaE.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "SE":
    case "EL":
      this.dp = p(2.41885, 2.5417);
      this.paths = ["m 0 0l 2.82843 2.8284l -0.40958 -0.2867"];
      break;

    default:
      this.dp = p(2.82843, 2.8284);
      this.paths = ["m 0 0l 2.82843 2.8284"];
      break;
  }
};

WasedaO = function() { WasedaChar.call(this, "WasedaO", "お", "SW4", "SW", "SW", "black", false, p(1.4, -1.9)); };
WasedaO.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["お"] = WasedaO;

WasedaO.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "SW":
      this.dp = p(-1.1181, 3.3258);
      this.paths = ["m 0 0l -1.3681 3.7588l 0.25 -0.433"];
      break;

    default:
      this.dp = p(-1.3681, 3.7587);
      this.paths = ["m 0 0l -1.3681 3.7587"];
      break;
  }
};

WasedaLtsu = function() { WasedaChar.call(this, "WasedaLtsu", "っ", "P/X", "P/X", "P/X", "black"); };
WasedaLtsu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["っ"] = WasedaLtsu;

WasedaLtsu.prototype.setPaths = function() {
  switch (this.getPrevModel() + "_" + this.getNextHeadType()) {
    case "E8_EL":
    case "E8_ER":
    case "E8_E":
      this.dp = p(-4, 2);
      return;

    case "EL4_EL":
    case "EL4_ER":
    case "EL4_E":
      this.dp = p(-2, 2);
      return;

    case "EL8_EL":
    case "EL8_ER":
    case "EL8_E":
      this.dp = p(-4, 2.5);
      return;

    case "ER8_EL":
    case "ER8_ER":
    case "ER8_E":
      this.dp = p(-4, 2);
      return;

    case "NEL8_E":
      this.dp = p(-4, 2.5);
      return;
    
    case "NEL8_NEL":
      this.dp = p(-2, 4.5);
      return;

    default:
      this.dp = p(5, 0);
      return;
  }
  switch (this.getPrevTailType() + "_" + this.getNextHeadType()) {

    default:
      return;
  }
};

WasedaPointAru = function() { 
  WasedaChar.call(this, "WasedaPointAru", "加点ある", "P", "P", "P", "black");
  this.thickness = 0.7;
};
WasedaPointAru.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["あるｐ"] = WasedaPointAru;

WasedaPointAru.prototype.setPaths = function() {

  switch (this.getPrevTailType()) {

    default:
      this.dp = p(2, 0);
      this.paths = ["m2 0 0 0"];
      break;
  }

  if (this.getNextHeadType() !== "") {
    this.paths = [];
  }
};

WasedaKai = function() { WasedaChar.call(this, "WasedaKai", "かい", "E4", "E", "E", "black"); };
WasedaKai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["かい"] = WasedaKai;

WasedaKai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "E": 
      this.dp = p(3.5076, 0.3);
      this.paths = ["m 0 0 l 4 0 l -0.4024 0.3"];
      break;

    default:
      this.dp = p(4, 0);
      this.paths = ["m 0 0 4 0"];
      break;
  }
};

WasedaNihon = function() { WasedaChar.call(this, "WasedaNihon", "にほん", "E4,E4", "E", "E", "black"); };
WasedaNihon.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["にほん"] = WasedaNihon;

WasedaNihon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "E": 
      this.dp = p(3.5076, 2.3);
      this.paths = ["m 0,0 4,0", "m 0,2 4,0 -0.4024,0.3"];
      break;

    default:
      this.dp = p(4, 2);
      this.paths = ["m 0,0 4,0", "m 0,2 4,0"];
      break;
  }
};


NakaneChar = function(name, kana, model, headType, tailType, color, bold, offset) { Char.apply(this, arguments); };
NakaneChar.prototype = Object.create(Char.prototype);
NakaneChar.dict = {};

NakaneA = function() { NakaneChar.call(this, "NakaneA", "あ", "NEL7", "NEL", "NEL", "black", false, p(0.0, 1.7)); };
NakaneA.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["あ"] = NakaneA;

NakaneA.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.167382,-3.309328);
      this.paths = ["m 0,0 c 2.382943,0 4.889984,-1.096809 6.167382,-3.309328"];
      break;
  }
};

NakaneKa = function() { NakaneChar.call(this, "NakaneKa", "か", "E7", "E", "E", "black", false, p(0.0, 0.0)); };
NakaneKa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["か"] = NakaneKa;

NakaneKa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7, 0);
      this.paths = ["m0,0h7"];
      break;
  }
};

NakaneKa.prototype.setPathsExtra = function() {
  switch (this.getNextHeadType()) {
    case "E":
      this.pathsExtra = ["m 7,-1 0,2"];
      break;

    default:
      break;
  }
};


NakaneGa = function() { NakaneChar.call(this, "NakaneGa", "が", "E7", "E", "E", "black", true); };
NakaneGa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["が"] = NakaneGa;
NakaneGa.prototype.setPaths = NakaneKa.prototype.setPaths;
NakaneGa.prototype.setPathsExtra = NakaneKa.prototype.setPathsExtra;



SvsdChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
SvsdChar.prototype = Object.create(Char.prototype);
SvsdChar.dict = {};

SvsdA = function() { SvsdChar.call(this, "SvsdA", "あ", "NE10", "NE", "NE", "black", false, p(0, 2.5)); };
SvsdA.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["あ"] = SvsdA;

SvsdA.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.66025, -5);
      this.paths = ["m 0,0 8.66025,-5"];
      break;
  }
};

ShugiinChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
ShugiinChar.prototype = Object.create(Char.prototype);
ShugiinChar.dict = {};

ShugiinA = function() { ShugiinChar.call(this, "ShugiinA", "あ", "EL3", "EL", "EL", "black"); };
ShugiinA.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["あ"] = ShugiinA;
ShugiinChar.dict["ある"] = ShugiinA;
ShugiinChar.dict["R"] = ShugiinA;
ShugiinChar.dict["r"] = ShugiinA;
ShugiinChar.dict["Ｒ"] = ShugiinA;
ShugiinChar.dict["ｒ"] = ShugiinA;

ShugiinA.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3, 0);
      this.paths = ["m 0,0 c 0.7856029,1.084656 2.3420729,1.035708 3,0"];
      break;
  }
};

ShugiinAn = function() { ShugiinChar.call(this, "ShugiinAn", "あん", "EL3F", "EL", "ELF", "black"); };
ShugiinAn.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["あん"] = ShugiinAn;

ShugiinAn.prototype.setPaths = function() {
  this.paths = ["m 0,0 c 0.7856029,1.084656 2.3420729,1.035708 3,0"];

  switch (this.getNextName()) {
    case "ShugiinWa":
      this.dp = p(3 + 3, 0 + 0.5);
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3+1.3, 0-0.7);
      break;
  }
};

ShugiinKa = function() { ShugiinChar.call(this, "ShugiinKa", "か", "E7", "E", "E", "black", false, p(0, 0)); };
ShugiinKa.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["か"] = ShugiinKa;
ShugiinChar.dict["が"] = ShugiinKa;

ShugiinKa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(7, 0.5);
      this.paths = ["m 0 0l 7 0 0 0.5"];
      break;

    default:
      this.dp = p(7, 0);
      this.paths = ["m 0 0l 7 0"];
      break;
  }
};

ShugiinKan = function() { ShugiinChar.call(this, "ShugiinKan", "かん", "E7F", "E", "EF", "black", false, p(0, 0)); };
ShugiinKan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["かん"] = ShugiinKan;

ShugiinKan.prototype.setPaths = function() {
  this.paths = ["m 0 0l 7 0"];

  switch (this.getNextHeadType()) {
    default:
      this.dp = p(7 + 2, 0);
      break;
  }
};

ShugiinGan = function() { ShugiinChar.call(this, "ShugiinGan", "がん", "E7F", "E", "EF", "black", false, p(0, 0)); };
ShugiinGan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["がん"] = ShugiinGan;

ShugiinGan.prototype.setPaths = function() {
  this.paths = ["m 0 0l 7 0"];

  switch (this.getNextName()) {
    case "ShugiinO":
    case "ShugiinWo":
      this.dp = p(7 - 0, -3);
      return;

    case "ShugiinWa":
      this.dp = p(7 - 0, -3);
      return;
  }

  switch (this.getNextHeadType()) {
    case "S":
    case "SEL":
      this.dp = p(7 + 2, -2);
      break;

    case "SE":
      this.dp = p(7 - 1, -2.5);
      break;

    default:
      this.dp = p(7 - 1, -2);
      break;
  }
};

WasedaKi = function() { WasedaChar.call(this, "WasedaKi", "き", "E8CL1", "E", "ECL1", "black"); };
WasedaKi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["き"] = WasedaKi;

WasedaKi.prototype.setPaths = function() {
  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "ER8":
      this.dp = p(8.2482, -0.363);
      this.paths = ["m 0 0 c 2.6674 0 5.3362 -0.1396 8.0002 0 c 0.446 0.0078 0.461 -1.1763 -0.476 -1.1763 c -0.403 0 -0.702 0.3953 -0.552 0.7017 c 0.206 0.4228 0.788 0.3391 1.276 0.1116"];
      return;

    case "ER16":
      this.dp = p(8.27177, -0.49129);
      this.paths = ["m 0 0 c 2.667 0 5.336 -0.139 8 0 c 0.446 0.008 0.461 -1.176 -0.475 -1.176 c -0.404 0 -0.68217 0.41373 -0.55762 0.67871 c 0.18496 0.3935 0.81739 0.16354 1.30439 0.006"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(8.00999, -0.0971000000000011);
      this.paths = ["m 0 0c 2.82603 -0.148099999999999 5.33402 -0.0930999999999997 8.00001 0c 0.36049 0.0125999999999991 0.32671 -0.7575 -0.45519 -0.7575c -0.728569999999999 0 -0.89727 0.679400000000001 -0.53484 0.660399999999999c 0.333410000000001 -0.00579999999999714 0.667050000000001 -0.0173999999999985 1.00001 0"];
      break;

    case "SW":
      this.dp = p(7.0633, -0.0203);
      this.paths = ["m 0 0 c 2.489 -0.1305 4.9857 -0.1739 7.472 0 c 0.262 0.0091 0.4643 -0.2189 0.4931 -0.4932 c 0.0648 -0.5277 -0.494 -0.6474 -0.5951 -0.3696 c -0.1022 0.2808 -0.2044 0.5617 -0.3067 0.8425"];
      break;

    case "SEL":
      this.dp = p(7.1897, -0.0156);
      this.paths = ["m 0 0 c 2.4983 -0.1309 5.0044 -0.1745 7.5 0 c 0.2567 0.0135 0.4381 -0.2273 0.495 -0.4949 c 0.1591 -0.689 -0.5687 -0.8506 -0.6661 -0.5109 c -0.0924 0.322 -0.1392 0.6553 -0.1392 0.9902"];
      break;

    default:
      this.dp = p(6.8, 0);
      this.paths = ["m 0 0l 7.5 0c 0.58408 0 0.63639 -0.844999999999999 0.0713499999999998 -0.9192c -0.46945 -0.0616999999999983 -0.49342 0.588000000000001 -0.77135 0.9192"];
      break;
  }

  switch (this.getNextModel()) {
    case "EL8":
    case "EL8CL1":
    case "EL8CL4":
      this.dp = p(7.8538, -0.1336);
      this.paths = ["m 0 0 c 2.4983 -0.131 5.0044 -0.1745 7.5 0 c 0.2576 0.0135 0.4426 -0.2257 0.495 -0.495 c 0.241 -1.1339 -1.6417 -0.7453 -1.0399 -0.0769 c 0.229 0.2456 1.2199 0.5365 0.8987 0.4383"];
      break;
  }
};

ShugiinSa = function() { ShugiinChar.call(this, "ShugiinSa", "さ", "SR7", "SR", "SR", "black", false, p(0.4, -3.5)); };
ShugiinSa.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["さ"] = ShugiinSa;
ShugiinChar.dict["ざ"] = ShugiinSa;

ShugiinSa.prototype.setPaths = function() {
  switch (this.getPrevTailType()) {
    case "SE":
      this.dp = p(-0.357092, 6.96894);
      this.paths = ["m 0 0 c 2.37837 0 1.3803 4.85472 -0.357092 6.96894"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "SW":
      this.dp = p(-0.357092, 6.96894);
      this.paths = ["m 0 0 c 1.86555 2.33801 1.15834 7.68836 -0.357092 6.96894"];
      break;

    default:
      this.dp = p(-0.357092, 6.9689422);
      this.paths = ["m 0 0c 1.865545 2.3380102 1.380297 4.8547172 -0.357092 6.9689422"];
      break;
  }
};

ShugiinSan = function() { ShugiinChar.call(this, "ShugiinSan", "さん", "SR7F", "SR", "SRF", "black", false, p(0.4, -3.5)); };
ShugiinSan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["さん"] = ShugiinSan;

ShugiinSan.prototype.setPaths = function() {
  this.paths = ["m 0 0c 1.865545 2.3380102 1.380297 4.8547172 -0.357092 6.9689422"];

  switch (this.getNextHeadType()) {
    case "NER":
      this.dp = p(-0.357092 + 2, 6.9689422);
      break;

    default:
      this.dp = p(-0.357092, 6.9689422 + 2);
      break;
  }
};

ShugiinZan = function() { ShugiinChar.call(this, "ShugiinZan", "ざん", "SR7F", "SR", "SRF", "black", false, p(0.4, -3.5)); };
ShugiinZan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["ざん"] = ShugiinZan;

ShugiinZan.prototype.setPaths = function() {
  this.paths = ["m 0 0c 1.865545 2.3380102 1.380297 4.8547172 -0.357092 6.9689422"];

  switch (this.getNextName()) {
    case "ShugiinWa":
      this.dp = p(-0.357092 + 3.5, 6.9689422 - 1);
      return;
  }

  switch (this.getNextHeadType()) {
    default:
      this.dp = p(-0.357092 + 2.5, 6.9689422 - 1.41);
      break;
  }
};

ShugiinTa = function() { ShugiinChar.call(this, "ShugiinTa", "た", "S7", "S", "S", "black", false, p(0.0, -3.5)); };
ShugiinTa.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["た"] = ShugiinTa;
ShugiinChar.dict["だ"] = ShugiinTa;

ShugiinTa.prototype.setPaths = function() {
  switch (this.getNextModel()) {
    case "UWR3ER7":
      this.dp = p(1, 7.4);
      this.paths = ["m 0,0 0,7.0"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "S":
    case "SEL":
      this.dp = p(0.5, 7);
      this.paths = ["m 0,0 0,7.0 0.5,0"];
      break;

    default:
      this.dp = p(0, 7);
      this.paths = ["m 0,0 0,7.0"];
      break;
  }
};

ShugiinTan = function() { ShugiinChar.call(this, "ShugiinTan", "たん", "S7F", "S", "SF", "black", false, p(0.0, -3.5)); };
ShugiinTan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["たん"] = ShugiinTan;

ShugiinTan.prototype.setPaths = function() {
  this.paths = ["m 0,0 0,7.0"];

  //switch (this.getNextModel()) {
  //  case "UWR3ER7":
  //    this.dp = p(1, 7.4);
  //    return;
  //}

  switch (this.getNextHeadType()) {
    default:
      this.dp = p(0, 9);
      break;
  }
};

ShugiinDan = function() { ShugiinChar.call(this, "ShugiinDan", "だん", "S7F", "S", "SF", "black", false, p(0.0, -3.5)); };
ShugiinDan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["だん"] = ShugiinDan;

ShugiinDan.prototype.setPaths = function() {
  this.paths = ["m 0,0 0,7.0"];

  //switch (this.getNextModel()) {
  //  case "UWR3ER7":
  //    this.dp = p(1, 7.4);
  //    return;
  //}

  switch (this.getNextName()) {
    case "ShugiinWa":
      this.dp = p(0 + 3.5, 7 - 1);
      return;

    case "ShugiinI":
      this.dp = p(0 + 2, 6);
      return;

    case "ShugiinO":
    case "ShugiinWo":
      this.dp = p(0 + 2, 7 - 1);
      return;
  }


  switch (this.getNextHeadType()) {
    default:
      this.dp = p(0 + 1.5, 7 - 2);
      break;
  }
};

ShugiinNa = function() { ShugiinChar.call(this, "ShugiinNa", "な", "EL7", "EL", "EL", "black", false, p(0.0, -0.5)); };
ShugiinNa.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["な"] = ShugiinNa;

ShugiinNa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "NE":
      this.dp = p(7, 0);
      this.paths = ["m 0 0 c 1.78641 1.18957 7.74202 1.28521 7 0"];
      break;

    case "NEL":
      this.dp = p(7, 0);
      this.paths = ["m 0 0 c 1.78641 1.18957 6.61364 1.44193 7 0"];
      break;

    default:
      this.dp = p(7, 0);
      this.paths = ["m 0 0c 1.786412 1.189574 4.533101 1.425728 7 0"];
      break;
  }
};

ShugiinNan = function() { ShugiinChar.call(this, "ShugiinNan", "なん", "EL7F", "EL", "ELF", "black"); };
ShugiinNan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["なん"] = ShugiinNan;

ShugiinNan.prototype.setPaths = function() {
  this.paths = ["m 0 0c 1.786412 1.189574 4.533101 1.425728 7 0"];

  switch (this.getNextHeadType()) {
    case "SW":
      this.dp = p(7 + 1.5, 0);
      break;

    default:
      this.dp = p(7 + 1.41, -1.41);
      break;
  }
};

ShugiinHa = function() { ShugiinChar.call(this, "ShugiinHa", "は", "SEL7", "SEL", "SEL", "black", false, p(0.2, -2.7)); };
ShugiinHa.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["は"] = ShugiinHa;
ShugiinChar.dict["ば"] = ShugiinHa;
ShugiinChar.dict["ぱ"] = ShugiinHa;

ShugiinHa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.53396, 5.32792);
      this.paths = ["m 0 0c -0.83754 2.7196949 1.486433 5.6089279 4.533958 5.3279249"];
      break;
  }
};

ShugiinHan = function() { ShugiinChar.call(this, "ShugiinHan", "はん", "SEL7F", "SEL", "SEL7", "black", false, p(0.2, -2.7)); };
ShugiinHan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["はん"] = ShugiinHan;
ShugiinChar.dict["ぱん"] = ShugiinHan;

ShugiinHan.prototype.setPaths = function() {
  this.paths = ["m 0 0c -0.83754 2.7196949 1.486433 5.6089279 4.533958 5.3279249"];

  switch (this.getNextModel()) {
    case "UWL3":
      this.dp = p(4.53396 + 1, 5.32792 + 1.5);
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.53396 + 2, 5.32792);
      break;
  }
};

ShugiinBan = function() { ShugiinChar.call(this, "ShugiinBan", "ばん", "SEL7F", "SEL", "SEL7", "black", false, p(0.2, -2.7)); };
ShugiinBan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["ばん"] = ShugiinBan;

ShugiinBan.prototype.setPaths = function() {
  this.paths = ["m 0 0c -0.83754 2.7196949 1.486433 5.6089279 4.533958 5.3279249"];

  switch (this.getNextName()) {
    case "ShugiinWa":
      this.dp = p(4.53396, 5.32792 - 3);
      return;

    case "ShugiinO":
    case "ShugiinWo":
      this.dp = p(4.53396 + 1, 5.32792 - 3);
      return;
  }

  switch (this.getNextHeadType()) {
    case "S":
    case "SEL":
      this.dp = p(4.53396 + 1.41, 5.32792 - 1.41);
      break;

    case "SE":
      this.dp = p(4.53396 - 1, 5.32792 - 3);
      break;

    default:
      this.dp = p(4.53396 - 1, 5.32792 - 1.5);
      break;
  }
};

ShugiinMa = function() { ShugiinChar.call(this, "ShugiinMa", "ま", "ER7", "ER", "ER", "black"); };
ShugiinMa.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["ま"] = ShugiinMa;

ShugiinMa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "SR":
    case "SE":
      this.dp = p(7, 0);
      this.paths = ["m 0,0 c 1.661847,-2.001066 7.5567301,-1.6027563 7,0"];
      break;

    default:
      this.dp = p(7, 0);
      this.paths = ["m 0 0c 1.661847 -2.001066 5.296682 -2.489993 7 0"];
      break;
  }
};

ShugiinMan = function() { ShugiinChar.call(this, "ShugiinMan", "まん", "ER7F", "ER", "ERF", "black"); };
ShugiinMan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["まん"] = ShugiinMan;

ShugiinMan.prototype.setPaths = function() {
  this.paths = ["m 0 0c 1.661847 -2.001066 5.296682 -2.489993 7 0"];

  switch (this.getNextHeadType()) {
    default:
      this.dp = p(7 + 1.41, 0 + 1.41);
      break;
  }
};

ShugiinYa = function() { ShugiinChar.call(this, "ShugiinYa", "や", "NER7", "NER", "NER", "black", false, p(0.0, 2.4)); };
ShugiinYa.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["や"] = ShugiinYa;

ShugiinYa.prototype.setPaths = function() {
  switch (this.getPrevModel()) {
    case "UWL3":
    case "SW3":
      this.dp = p(6.453801,-4.762448);
      this.paths = ["m 0,0 c 1.783505,-2.585641 4.020085,-4.658954 6.453801,-4.762448"];
      return; 
  }

  switch (this.getPrevTailType()) {
    case "SR":
      this.dp = p(5.0699, -4.83282);
      this.paths = ["m 0,0 c 1.783505,-2.585641 4.020085,-4.658954 6.453801,-4.762448"];
      return; 
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.0699, -4.83282);
      this.paths = ["m 0 0c -0.12547 -3.161679 2.287875 -5.1937337 5.069899 -4.832816"];
      break;
  }
};

ShugiinYan = function() { ShugiinChar.call(this, "ShugiinYan", "やん", "NER7F", "NER", "NERF", "black", false, p(0.0, 2.4)); };
ShugiinYan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["やん"] = ShugiinYan;

ShugiinYan.prototype.setPaths = function() {
  switch (this.getPrevModel()) {
    case "UWL3":
      this.dp = p(6.453801 + 2, -4.762448);
      this.paths = ["m 0,0 c 1.783505,-2.585641 4.020085,-4.658954 6.453801,-4.762448"];
      return; 
  }

  switch (this.getPrevTailType()) {
    case "SR":
      this.dp = p(5.0699 + 2, -4.83282);
      this.paths = ["m 0,0 c 1.783505,-2.585641 4.020085,-4.658954 6.453801,-4.762448"];
      return; 
  }

  switch (this.getNextName()) {
    case "ShugiinWa":
      this.dp = p(5.0699 + 3, -4.83282 + 1);
      this.paths = ["m 0 0c -0.12547 -3.161679 2.287875 -5.1937337 5.069899 -4.832816"];
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.0699 + 2, -4.83282);
      this.paths = ["m 0 0c -0.12547 -3.161679 2.287875 -5.1937337 5.069899 -4.832816"];
      break;
  }
};

ShugiinRa = function() { ShugiinChar.call(this, "ShugiinRa", "ら", "SER7", "SER", "SER", "black", false, p(0.0, -2.4)); };
ShugiinRa.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["ら"] = ShugiinRa;

ShugiinRa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "S":
      this.dp = p(5.0699 + 0.5, 4.83282);
      this.paths = ["m 0 0c 2.782024 -0.360919 5.195369 1.671137 5.069899 4.832816 h0.5"];
      break;

    default:
      this.dp = p(5.0699, 4.83282);
      this.paths = ["m 0 0c 2.782024 -0.360919 5.195369 1.671137 5.069899 4.832816"];
      break;
  }
};

ShugiinRan = function() { ShugiinChar.call(this, "ShugiinRan", "らん", "SER7F", "SER", "SERF", "black", false, p(0.0, -2.4)); };
ShugiinRan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["らん"] = ShugiinRan;

ShugiinRan.prototype.setPaths = function() {
  this.paths = ["m 0 0c 2.782024 -0.360919 5.195369 1.671137 5.069899 4.832816"];

  switch (this.getNextHeadType()) {
    default:
      this.dp = p(5.0699, 4.83282 + 2);
      break;
  }
};

ShugiinWa = function() { ShugiinChar.call(this, "ShugiinWa", "わ", "UWL3", "WL", "EL", "black", false, p(2.3, -0.8)); };
ShugiinWa.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["わ"] = ShugiinWa;
ShugiinChar.dict["わｒ"] = ShugiinWa;
ShugiinChar.dict["わＲ"] = ShugiinWa;
ShugiinChar.dict["わかる"] = ShugiinWa;

ShugiinWa.prototype.setPaths = function() {
  switch (this.getPrevModel()) {
    case "SE2":
    case "UWL3":
      this.dp = p(0.3234, 2.55847);
      this.paths = ["m 0 0 c -0.939676 0 -2.00377 1.31535 -1.71961 2.19124 c 0.249345 0.768581 1.43474 1.05742 2.04301 0.367225"];
      return;

    case "NEL3":
      this.dp = p(1.32824, 2.90299);
      this.paths = ["m 0 0 c 0 0 -1.18529 2.12349 -0.646301 3.02336 c 0.33883 0.56569 1.36627 0.476693 1.97454 -0.120372"];
      return;
  }

  switch (this.getPrevTailType()) {
    case "E":
    case "SEL":
    case "NER":
      switch (this.getNextHeadType()) {
        case "NE":
          this.dp = p(0.171177, 2.14515);
          this.paths = ["m 0 0 c -1.41399 0 -2.04518 0.594028 -2.26136 1.32939 c -0.459904 1.56441 2.47301 2.31718 2.43254 0.815765"];
          return;

        default:
          this.dp = p(-0.112137, 2.14516);
          this.paths = ["m 0 0 c -1.41399 0 -2.31491 0.564783 -2.26136 1.32939 c 0.088303 1.26088 1.62107 1.31255 2.14923 0.815765"];
          return;
      }
    case "EL":
    case "NEL":
      this.dp = p(0.3234, 2.55847);
      this.paths = ["m 0 0c -0.79061 0.681958 -2.19013 1.778974 -1.65114 2.678842c 0.33883 0.56569 1.36627 0.476693 1.97454 -0.120372"];
      return;

    case "ECL1":
      this.dp = p(1.32824, 2.90299);
      this.paths = ["m 0 0 c 0 0 -1.18529 2.12349 -0.646301 3.02336 c 0.33883 0.56569 1.36627 0.476693 1.97454 -0.120372"];
      return;

    case "SRCR1":
      this.dp = p(0.3234, 2.55847);
      this.paths = ["m 0 0 c -0.939676 0 -2.00377 1.31535 -1.71961 2.19124 c 0.249345 0.768581 1.43474 1.05742 2.04301 0.367225"];
      return;
  }
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.141189, 1.63153);
      this.paths = ["m 0 0c -0.849758 -0.958061 -2.373777 -0.252475 -2.290416 0.815765c 0.11455 1.467918 1.621072 1.312545 2.149227 0.815765"];
      break;
  }
};

ShugiinWan = function() { ShugiinChar.call(this, "ShugiinWan", "わん", "UWL3F", "WL", "ELF", "black", false, p(2.3, -0.8)); };
ShugiinWan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["わん"] = ShugiinWan;

ShugiinWan.prototype.setPaths = function() {
  switch (this.getPrevModel()) {
    case "UWL3":
      this.dp = p(0.3234 + 1.41, 2.55847 - 0.5);
      this.paths = ["m 0 0 c -0.939676 0 -2.00377 1.31535 -1.71961 2.19124 c 0.249345 0.768581 1.43474 1.05742 2.04301 0.367225"];
      return;
  }

  switch (this.getPrevTailType()) {
    case "E":
    case "SEL":
    case "NER":
      switch (this.getNextHeadType()) {
        case "NE":
          this.dp = p(0.171177 + 1.41, 2.14515 - 0.5);
          this.paths = ["m 0 0 c -1.41399 0 -2.04518 0.594028 -2.26136 1.32939 c -0.459904 1.56441 2.47301 2.31718 2.43254 0.815765"];
          return;

        default:
          this.dp = p(-0.112137 + 1.41, 2.14516 - 0.5);
          this.paths = ["m 0 0 c -1.41399 0 -2.31491 0.564783 -2.26136 1.32939 c 0.088303 1.26088 1.62107 1.31255 2.14923 0.815765"];
          return;
      }
    case "EL":
      this.dp = p(0.3234 + 1.41, 2.55847 - 0.5);
      this.paths = ["m 0 0c -0.79061 0.681958 -2.19013 1.778974 -1.65114 2.678842c 0.33883 0.56569 1.36627 0.476693 1.97454 -0.120372"];
      return;
  }
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.141189 + 1.41, 1.63153 - 0.5);
      this.paths = ["m 0 0c -0.849758 -0.958061 -2.373777 -0.252475 -2.290416 0.815765c 0.11455 1.467918 1.621072 1.312545 2.149227 0.815765"];
      break;
  }
};


NakaneI = function() { NakaneChar.call(this, "NakaneI", "い", "NER7", "NER", "NER", "black", false, p(0.0, 2.1)); };
NakaneI.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["い"] = NakaneI;

NakaneI.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.52541, -4.2968);
      this.paths = ["m 0 0c 1.249775 -2.164673 4.090949 -4.2968 5.525411 -4.2968"];
      break;
  }
};

NakaneU = function() { NakaneChar.call(this, "NakaneU", "う", "NEL17,P", "NEL", "NEL", "black", false ,p(0.0, 4.1)); };
NakaneU.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["う"] = NakaneU;

NakaneU.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.9235, -8.1401);
      this.paths = ["m 0 0c 4.266161 0 12.513341 -3.965562 14.923511 -8.140102"];
      break;
  }
};

NakaneU.prototype.setPathsExtra = function() {
    this.pathsExtra = ["m 8.5,-4.0 v0.1"];
};

NakaneE = function() { NakaneChar.call(this, "NakaneE", "え", "NER17", "NER", "NER", "black", false, p(0.0, 4.8)); };
NakaneE.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["え"] = NakaneE;

NakaneE.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.0344, -9.59827);
      this.paths = ["m 0 0c 2.77984 -4.814825 10.48553 -9.598268 14.03444 -9.598268"];
      break;
  }
};

NakaneO = function() { NakaneChar.call(this, "NakaneO", "お", "NEL17", "NEL", "NEL", "black", false, p(0.0, 4.9)); };
NakaneO.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["お"] = NakaneO;

NakaneO.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(13.9523, -9.71262);
      this.paths = ["m 0 0c 5.42463 -1.453523 10.772 -4.20423 13.95227 -9.712621"];
      break;
  }
};

NakaneKi = function() { NakaneChar.call(this, "NakaneKi", "き", "SW7", "SW", "SW", "black", false, p(3.5, -3.0)); };
NakaneKi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["き"] = NakaneKi;

NakaneKi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-3.502234, 6.06604);
      this.paths = ["m 0 0l -3.502234 6.06604"];
      break;
  }
};

NakaneKi.prototype.setPathsExtra = function() {
  switch (this.getNextHeadType()) {
    case "SW":
      this.pathsExtra = ["m -4.2, 6.06604 l 0.949553 0.54822"];
      break;

    default:
      break;
  }
};

NakaneGi = function() { NakaneChar.call(this, "NakaneGi", "ぎ", "SW7", "SW", "SW", "black", true, p(6, -3.5)); };
NakaneGi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぎ"] = NakaneGi;
NakaneGi.prototype.setPaths = NakaneKi.prototype.setPaths
NakaneGi.prototype.setPathsExtra = NakaneKi.prototype.setPathsExtra 

NakaneKu = function() { NakaneChar.call(this, "NakaneKu", "く", "S7", "S", "S", "black", true, p(3, -3.5)); };
NakaneKu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["く"] = NakaneKu;

NakaneKu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 7);
      this.paths = ["m0,0 v7"];
      break;
  }
};

NakaneGu = function() { NakaneChar.call(this, "NakaneGu", "ぐ", "S7", "S", "S", "black", true, p(3, -3.5)); };
NakaneGu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぐ"] = NakaneGu;
NakaneGu.prototype.setPaths = NakaneKu.prototype.setPaths;
NakaneGu.prototype.setPathsExtra = function() { this.pathsExtra = ["m -1.5,3.5 v0.1"]; }

NakaneKe = function() { NakaneChar.call(this, "NakaneKe", "け", "SW17", "SW", "SW", "black", false, p(8.5, -7.4)); };
NakaneKe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["け"] = NakaneKe;

NakaneKe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-8.5, 14.7224);
      this.paths = ["m 0 0l -8.5 14.7224"];
      break;
  }
};

NakaneKe.prototype.setPathsExtra = function() {
  switch (this.getNextHeadType()) {
    case "SW":
      this.pathsExtra = ["m -9.2, 14.7224 l 0.949553 0.54822"];
      break;

    default:
      break;
  }
};

NakaneGe = function() { NakaneChar.call(this, "NakaneGe", "げ", "SW17", "SW", "SW", "black", true, p(11, -6)); };
NakaneGe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["げ"] = NakaneGe;
NakaneGe.prototype.setPaths = NakaneKe.prototype.setPaths;

NakaneKo = function() { NakaneChar.call(this, "NakaneKo", "こ", "E17", "E", "E", "black"); };
NakaneKo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["こ"] = NakaneKo;

NakaneKo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17, 0);
      this.paths = ["m 0 0 h17"];
      break;
  }
};

NakaneGo = function() { NakaneChar.call(this, "NakaneGo", "ご", "E17", "E", "E", "black", true); };
NakaneGo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ご"] = NakaneGo;
NakaneGo.prototype.setPaths = NakaneKo.prototype.setPaths;

NakaneKo.prototype.setPathsExtra = function() {
  switch (this.getNextHeadType()) {
    case "E":
      this.pathsExtra = ["m 17 -0.75 v1.5"];
      break;

    default:
      break;
  }
};

NakaneSa = function() { NakaneChar.call(this, "NakaneSa", "さ", "SER7", "SER", "SER", "black", false, p(0.0, -1.7)); };
NakaneSa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["さ"] = NakaneSa;

NakaneSa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.05971, 3.49858);
      this.paths = ["m 0 0c 2.577952 0 5.627576 1.88584 6.059707 3.49858"];
      break;
  }
};

NakaneZa = function() { NakaneChar.call(this, "NakaneZa", "ざ", "SER7", "SER", "SER", "black", true, p(0.0, -1.7)); };
NakaneZa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ざ"] = NakaneZa;
NakaneZa.prototype.setPaths = NakaneSa.prototype.setPaths;

NakaneShi = function() { NakaneChar.call(this, "NakaneShi", "し", "SEL7", "SEL", "SEL", "black", false, p(0.0, -1.8)); };
NakaneShi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["し"] = NakaneShi;

NakaneShi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.06029, 3.49871);
      this.paths = ["m 0 0c 0.471737 1.06103 3.891974 3.84098 6.060287 3.49871"];
      //this.dp = p(5.44066, 4.40083);
      //this.paths = ["m 0 0c 0.300535 1.12161 3.245501 4.40083 5.440661 4.40083"];
      break;
  }
};

NakaneZi = function() { NakaneChar.call(this, "NakaneZi", "じ", "SEL7", "SEL", "SEL", "black", true, p(0.0, -1.8)); };
NakaneZi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["じ"] = NakaneZi;
NakaneChar.dict["ぢ"] = NakaneZi;
NakaneZi.prototype.setPaths = NakaneShi.prototype.setPaths;

NakaneSu = function() { NakaneChar.call(this, "NakaneSu", "す", "SER17,P", "SER", "SER", "black", false, p(0.0, -4.3)); };
NakaneSu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["す"] = NakaneSu;

NakaneSu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.7241, 8.50165);
      this.paths = ["m 0 0c 5.728549 0 12.899335 5.34101 14.724135 8.50165"];
      break;
  }
};

NakaneSu.prototype.setPathsExtra = function() {
  
  switch (this.getPrevName()) {
    case "NakaneSu":
    case "NakaneMu":
      this.pathsExtra = [];
      return; 
  }

  switch (this.getNextName()) {
    case "NakaneSu":
      if (this.next && this.next.next) {
        const name = this.next.next.name;
        if (name == "NakaneMu") {
          this.pathsExtra = ["m 23,9 v0.1"];
        } else {
          this.pathsExtra = ["m 14.7241,6 v0.1"];
        }
      } else {
        this.pathsExtra = ["m 12,8.50165 v0.1"];
      }
      break;

    case "NakaneRu":
      this.pathsExtra = ["m 12,8.50165 v0.1"];
      break;

    default:
      this.pathsExtra = ["m 7,4 v0.1"];
      break;
  }
};


NakaneSe = function() { NakaneChar.call(this, "NakaneSe", "せ", "SEL17", "SEL", "SEL", "black", false, p(0.0, -4.3)); };
NakaneSe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["せ"] = NakaneSe;

NakaneSe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.7251, 8.5);
      this.paths = ["m 0 0c 4.38343 4.51145 10.86376 8.67331 14.72513 8.5"];
      break;
  }
};

NakaneZe = function() { NakaneChar.call(this, "NakaneZe", "ぜ", "SEL7", "SEL", "SEL", "black", true, p(0.0, -4.3)); };
NakaneZe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぜ"] = NakaneZe;
NakaneZe.prototype.setPaths = NakaneSe.prototype.setPaths;

NakaneSo = function() { NakaneChar.call(this, "NakaneSo", "そ", "SER17", "SER", "SER", "black", false, p(0.0, -4.3)); };
NakaneSo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["そ"] = NakaneSo;

NakaneSo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.7252, 8.50215);
      this.paths = ["m 0 0c 7.22081 1.6256 12.44847 4.8403 14.72515 8.50215"];
      break;
  }
};

NakaneZo = function() { NakaneChar.call(this, "NakaneZo", "ぞ", "SER17", "SER", "SER", "black", true, p(0.0, -4.3)); };
NakaneZo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぞ"] = NakaneZo;
NakaneZo.prototype.setPaths = NakaneSo.prototype.setPaths;

NakaneTa = function() { NakaneChar.call(this, "NakaneTa", "た", "SE7", "SE", "SE", "black", false, p(0.0, -1.8)); };
NakaneTa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["た"] = NakaneTa;

NakaneTa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.06218, 3.5);
      this.paths = ["m 0 0l 6.06218 3.5"];
      break;
  }
};

NakaneDa = function() { NakaneChar.call(this, "NakaneDa", "だ", "SE7", "SE", "SE", "black", true, p(0.0, -1.8)); };
NakaneDa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["だ"] = NakaneDa;
NakaneDa.prototype.setPaths = NakaneTa.prototype.setPaths;

NakaneChi = function() { NakaneChar.call(this, "NakaneChi", "ち", "S7", "S", "S", "black", false, p(0.0, -3.5)); };
NakaneChi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ち"] = NakaneChi;

NakaneChi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 7);
      this.paths = ["m 0 0l 0 7"];
      break;
  }
};

NakaneTsu = function() { NakaneChar.call(this, "NakaneTsu", "つ", "NE17", "NE", "NE", "black", false, p(0.0, 4.2)); };
NakaneTsu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["つ"] = NakaneTsu;

NakaneTsu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.7224, -8.5);
      this.paths = ["m 0 0l 14.7224 -8.5"];
      break;
  }
};

NakaneDu = function() { NakaneChar.call(this, "NakaneDu", "づ", "NE17", "NE", "NE", "black", true, p(0.0, 4.2)); };
NakaneDu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["づ"] = NakaneDu;
NakaneChar.dict["ず"] = NakaneDu;
NakaneDu.prototype.setPaths = NakaneTsu.prototype.setPaths;

NakaneTe = function() { NakaneChar.call(this, "NakaneTe", "て", "S17", "S", "S", "black", false, p(0.0, -8.5)); };
NakaneTe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["て"] = NakaneTe;

NakaneTe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 17);
      this.paths = ["m 0 0l 0 17"];
      break;
  }
};

NakaneDe = function() { NakaneChar.call(this, "NakaneDe", "で", "S17", "S", "S", "black", true, p(0.0, -8.5)); };
NakaneDe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["で"] = NakaneDe;
NakaneDe.prototype.setPaths = NakaneTe.prototype.setPaths;

NakaneTo = function() { NakaneChar.call(this, "NakaneTo", "と", "SE17", "SE", "SE", "black", false, p(0.0, -4.2)); };
NakaneTo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["と"] = NakaneTo;

NakaneTo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.7224, 8.5);
      this.paths = ["m 0 0l 14.7224 8.5"];
      break;
  }
};

NakaneDo = function() { NakaneChar.call(this, "NakaneDo", "ど", "SE17", "SE", "SE", "black", true, p(0.0, -4.2)); };
NakaneDo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ど"] = NakaneDo;
NakaneDo.prototype.setPaths = NakaneTo.prototype.setPaths;

NakaneNa = function() { NakaneChar.call(this, "NakaneNa", "な", "EL7", "EL", "EL", "black", false, p(0.0, -0.6)); };
NakaneNa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["な"] = NakaneNa;

NakaneNa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7, 0);
      this.paths = ["m 0 0c 1.83861 1.60059 5.898 1.33884 7 0"];
      break;
  }
};

NakaneNi = function() { NakaneChar.call(this, "NakaneNi", "に", "EL7", "EL", "EL", "black", true, p(0.0, -0.6)); };
NakaneNi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["に"] = NakaneNi;

NakaneNi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7, 0);
      this.paths = ["m 0 0c 1.83861 1.60059 5.898 1.33884 7 0"];
      break;
  }
};

NakaneNu = function() { NakaneChar.call(this, "NakaneNu", "ぬ", "EL17,P", "EL", "EL", "black", false, p(0.0, -1.2)); };
NakaneNu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぬ"] = NakaneNu;

NakaneNu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17, 0);
      this.paths = ["m 0 0c 5.45119 4.16377 13.3 1.92354 17 0"];
      break;
  }
};

NakaneNu.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 8.5,0 v0.1"];
};

NakaneNe = function() { NakaneChar.call(this, "NakaneNe", "ね", "EL17", "EL", "EL", "black", true, p(0.0, -1.2)); };
NakaneNe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ね"] = NakaneNe;

NakaneNe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17, 0);
      this.paths = ["m 0 0c 5.45119 4.16377 13.3 1.92354 17 0"];
      break;
  }
};

NakaneNo = function() { NakaneChar.call(this, "NakaneNo", "の", "EL17", "EL", "EL", "black", false, p(0.0, -1.2)); };
NakaneNo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["の"] = NakaneNo;

NakaneNo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17, 0);
      this.paths = ["m 0 0c 5.45119 4.16377 13.3 1.92354 17 0"];
      break;
  }
};

NakaneLtsu = function() { NakaneChar.call(this, "NakaneLtsu", "っ", "P/X", "P/X", "P/X", "black"); };
NakaneLtsu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["っ"] = NakaneLtsu;

NakaneLtsu.prototype.setPaths = function() {
  switch (this.getPrevModel() + "_" + this.getNextHeadType()) {
    case "SER17_SW":
      this.dp = p(0, -3.5);
      return;

  }

  switch (this.getPrevTailType() + "_" + this.getNextModel()) {
    case "SEL_CR1SW17":
    case "SEL_SW17":
      this.dp = p(-1, -2);
      return;
  }

  switch (this.getPrevTailType() + "_" + this.getNextHeadType()) {
    case "E_E":
      this.dp = p(-2, 2);
      break;

    case "SR_SR":
      this.dp = p(0, -3);
      break;

    case "SER_SER":
      this.dp = p(-3, -1.8);
      break;

    default:
      this.dp = p(5, 0);
      break;
  }
};

NakaneHa = function() { NakaneChar.call(this, "NakaneHa", "は", "SR7", "SR", "SR", "black", false, p(0.0, -3.5)); };
NakaneHa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["は"] = NakaneHa;

NakaneHa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 7);
      this.paths = ["m 0 0c 1.22423 2.26167 1.03842 4.78703 0 7"];
      break;
  }
};

NakanePa = function() { NakaneChar.call(this, "NakanePa", "ぱ", "SR7", "SR", "SR", "black", false, p(0.0, -3.5)); };
NakanePa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぱ"] = NakanePa;
NakanePa.prototype.setPaths = NakaneHa.prototype.setPaths;
NakanePa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m -0.5,3.5 v0.1"];
};

NakaneBa = function() { NakaneChar.call(this, "NakaneBa", "ば", "SR7", "SR", "SR", "black", true, p(0.0, -3.5)); };
NakaneBa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ば"] = NakaneBa;
NakaneBa.prototype.setPaths = NakaneHa.prototype.setPaths;

NakaneHi = function() { NakaneChar.call(this, "NakaneHi", "ひ", "SL7", "SL", "SL", "black", false, p(0.8, -3.5)); };
NakaneHi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ひ"] = NakaneHi;

NakaneHi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 7);
      this.paths = ["m 0 0c -1.22423 2.26167 -1.03842 4.78703 0 7"];
      break;
  }
};

NakanePi = function() { NakaneChar.call(this, "NakanePi", "ぴ", "SL7", "SL", "SL", "black", false, p(0.8, -3.5)); };
NakanePi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぴ"] = NakanePi;
NakanePi.prototype.setPaths = NakaneHi.prototype.setPaths;
NakanePi.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m-2,3.5 v0.1"];
};

NakaneBi = function() { NakaneChar.call(this, "NakaneBi", "び", "SL7", "SL", "SL", "black", true, p(0.8, -3.5)); };
NakaneBi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["び"] = NakaneBi;
NakaneBi.prototype.setPaths = NakaneHi.prototype.setPaths;

NakaneHu = function() { NakaneChar.call(this, "NakaneHu", "ふ", "NE7", "NE", "NE", "black", false, p(0.0, 2.5)); };
NakaneHu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ふ"] = NakaneHu;

NakaneHu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.94975, -4.94975);
      this.paths = ["m 0 0l 4.94975 -4.94975"];
      break;
  }
};

NakanePu = function() { NakaneChar.call(this, "NakanePu", "ぷ", "NE7", "NE", "NE", "black", false, p(0.0, 2.5)); };
NakanePu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぷ"] = NakanePu;
NakanePu.prototype.setPaths = NakaneHu.prototype.setPaths;
NakanePu.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m2,-3.5 v0.1"];
};

NakaneBu = function() { NakaneChar.call(this, "NakaneBu", "ぶ", "NE7", "NE", "NE", "black", true, p(0.0, 2.5)); };
NakaneBu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぶ"] = NakaneBu;
NakaneBu.prototype.setPaths = NakaneHu.prototype.setPaths;

NakaneHe = function() { NakaneChar.call(this, "NakaneHe", "へ", "SL17", "SL", "SL", "black", false, p(3.1, -8.5)); };
NakaneHe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["へ"] = NakaneHe;

NakaneHe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 17);
      this.paths = ["m 0 0c -3.2163 2.7288 -4.86135 13.7644 0 17"];
      break;
  }
};

NakanePe = function() { NakaneChar.call(this, "NakanePe", "ぺ", "SL17", "SL", "SL", "black", false, p(3.1, -8.5)); };
NakanePe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぺ"] = NakanePe;
NakanePe.prototype.setPaths = NakaneHe.prototype.setPaths;
NakanePe.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m -4,8.5 v0.1"];
};


NakaneBe = function() { NakaneChar.call(this, "NakaneBe", "べ", "SL17", "SL", "SL", "black", true, p(3.1, -8.5)); };
NakaneBe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["べ"] = NakaneBe;
NakaneBe.prototype.setPaths = NakaneHe.prototype.setPaths;

NakaneHo = function() { NakaneChar.call(this, "NakaneHo", "ほ", "SR17", "SR", "SR", "black", false, p(0.0, -8.5)); };
NakaneHo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ほ"] = NakaneHo;

NakaneHo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 17);
      this.paths = ["m 0 0c 3.2163 2.7288 4.86135 13.7644 0 17"];
      break;
  }
};

NakanePo = function() { NakaneChar.call(this, "NakanePo", "ぽ", "SR17", "SR", "SR", "black", false, p(0.0, -8.5)); };
NakanePo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぽ"] = NakanePo;
NakanePo.prototype.setPaths = NakaneHo.prototype.setPaths;
NakanePo.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 1,8.5 v0.1"];
};

NakaneBo = function() { NakaneChar.call(this, "NakaneBo", "ぼ", "SR17", "SR", "SR", "black", true, p(0.0, -8.5)); };
NakaneBo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぼ"] = NakaneBo;
NakaneBo.prototype.setPaths = NakaneHo.prototype.setPaths;

NakaneMa = function() { NakaneChar.call(this, "NakaneMa", "ま", "ER7", "ER", "ER", "black", false, p(0.0, 0.6)); };
NakaneMa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ま"] = NakaneMa;

NakaneMa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7, 0);
      this.paths = ["m 0 0c 1.83861 -1.60059 5.898 -1.33884 7 0"];
      break;
  }
};

NakaneMi = function() { NakaneChar.call(this, "NakaneMi", "み", "ER7", "ER", "ER", "black", true, p(0.0, 0.6)); };
NakaneMi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["み"] = NakaneMi;

NakaneMi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7, 0);
      this.paths = ["m 0 0c 1.83861 -1.60059 5.898 -1.33884 7 0"];
      break;
  }
};

NakaneMu = function() { NakaneChar.call(this, "NakaneMu", "む", "ER17,P", "ER", "ER", "black", false, p(0.0, 1.2)); };
NakaneMu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["む"] = NakaneMu;

NakaneMu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17, 0);
      this.paths = ["m 0 0c 5.451187 -4.16377 13.300002 -1.92354 17.000002 0"];
      break;
  }
};

NakaneMu.prototype.setPathsExtra = function() {
  switch (this.getPrevName()) {
    case "NakaneSu":
      this.pathsExtra = [];
      return;
  }

  switch (this.getNextName()) {
    case "NakaneSu":
      this.pathsExtra = ["m 17,-2 v0.1"];
      break;

    default:
      this.pathsExtra = ["m 8.5,-4 v0.1"];
      break;
  }
};

NakaneMe = function() { NakaneChar.call(this, "NakaneMe", "め", "ER17", "ER", "ER", "black", true, p(0.0, 1.2)); };
NakaneMe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["め"] = NakaneMe;

NakaneMe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17, 0);
      this.paths = ["m 0 0c 5.45119 -4.16377 13.3 -1.92354 17 0"];
      break;
  }
};

NakaneMo = function() { NakaneChar.call(this, "NakaneMo", "も", "ER17", "ER", "ER", "black", false, p(0.0, 1.2)); };
NakaneMo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["も"] = NakaneMo;

NakaneMo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17, 0);
      this.paths = ["m 0 0c 5.45119 -4.16377 13.3 -1.92354 17 0"];
      break;
  }
};

NakaneYa = function() { NakaneChar.call(this, "NakaneYa", "や", "SWL7", "SWL", "SWL", "black", false, p(6.1, -1.8)); };
NakaneYa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["や"] = NakaneYa;

NakaneYa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-6.06218, 3.5);
      this.paths = ["m 0 0c -2.20426 0.377368 -4.31077 1.36606 -6.06218 3.5"];
      break;
  }
};

NakaneYu = function() { NakaneChar.call(this, "NakaneYu", "ゆ", "SWL7", "SWL", "SWL", "black", true, p(6.1, -1.8)); };
NakaneYu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ゆ"] = NakaneYu;

NakaneYu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-6.06218, 3.5);
      this.paths = ["m 0 0c -2.20426 0.37737 -4.31077 1.36606 -6.06218 3.5"];
      break;
  }
};

NakaneYo = function() { NakaneChar.call(this, "NakaneYo", "よ", "SWL17", "SWL", "SWL", "black", false, p(14.7, -4.3)); };
NakaneYo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["よ"] = NakaneYo;

NakaneYo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-14.7224, 8.50002);
      this.paths = ["m 0 0c -3.95675 0.825336 -10.8572 3.30792 -14.7224 8.50002"];
      break;
  }
};

NakaneRa = function() { NakaneChar.call(this, "NakaneRa", "ら", "SWR7", "SWR", "SWR", "black", false, p(4.5, -2.7)); };
NakaneRa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ら"] = NakaneRa;

NakaneRa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-4.49951, 5.36232);
      this.paths = ["m 0 0c -0.37738 2.03117 -2.11106 4.2048 -4.49951 5.36232"];
      break;
  }
};

NakaneRi = function() { NakaneChar.call(this, "NakaneRi", "り", "SWR7", "SWR", "SWR", "black", true, p(4.5, -2.7)); };
NakaneRi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["り"] = NakaneRi;

NakaneRi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-4.49951, 5.36232);
      this.paths = ["m 0 0c -0.37738 2.03117 -2.11106 4.2048 -4.49951 5.36232"];
      break;
  }
};

NakaneRu = function() { NakaneChar.call(this, "NakaneRu", "る", "SWL17,P", "SWL", "SWL", "black", false, p(13.0, -5.5)); };
NakaneRu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["る"] = NakaneRu;

NakaneRu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-13.0228, 10.9274);
      this.paths = ["m 0 0c -2.26592 4.09699 -5.12905 8.0632 -13.0228 10.9274"];
      break;
  }
};

NakaneRu.prototype.setPathsExtra = function() {
  switch (this.getPrevName()) {
    case "NakaneSu":
      this.pathsExtra = [];
      break;
      
    default:
      this.pathsExtra = ["m -6,4 v0.1"];
      break;
  }
};

NakaneRe = function() { NakaneChar.call(this, "NakaneRe", "れ", "SWL17", "SWL", "SWL", "black", true, p(13.0, -5.5)); };
NakaneRe.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["れ"] = NakaneRe;

NakaneRe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-13.0228, 10.9274);
      this.paths = ["m 0 0c -2.26592 4.09699 -5.12905 8.0632 -13.0228 10.9274"];
      break;
  }
};

NakaneRo = function() { NakaneChar.call(this, "NakaneRo", "ろ", "SWL17", "SWL", "SWL", "black", false, p(13.0, -5.5)); };
NakaneRo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ろ"] = NakaneRo;

NakaneRo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-13.0228, 10.9274);
      this.paths = ["m 0 0c -2.26592 4.09699 -5.12905 8.0632 -13.02281 10.92741"];
      break;
  }
};

NakaneWo = function() { NakaneChar.call(this, "NakaneWo", "を", "URNE3", "NER", "SWR", "black", false, p(0.0, 0.8)); };
NakaneWo.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["を"] = NakaneWo;

NakaneWo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.97397, 0.79149);
      this.paths = ["m 0 0c 0.3434 -0.93209 1.49746 -2.81027 2.23462 -2.36494c 0.73716 0.44533 -0.26065 3.15643 -0.26065 3.15643"];
      break;
  }
};

NakaneWa = function() { NakaneChar.call(this, "NakaneWa", "わ", "SWL17", "SWL", "SWL", "black", true, p(14.7, -4.3)); };
NakaneWa.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["わ"] = NakaneWa;

NakaneWa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-14.7224, 8.50002);
      this.paths = ["m 0 0c -3.95675 0.82534 -10.8572 3.30792 -14.7224 8.50002"];
      break;
  }
};

SvsdI = function() { SvsdChar.call(this, "SvsdI", "い", "SW10", "SW", "SW", "black", false, p(5, -4.33011)); };
SvsdI.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["い"] = SvsdI;

SvsdI.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-5, 8.66022);
      this.paths = ["m 0 0l -5 8.66022"];
      break;
  }
};

SvsdU = function() { SvsdChar.call(this, "SvsdU", "う", "SE10", "SE", "SE", "black", false, p(0, -2.5)); };
SvsdU.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["う"] = SvsdU;

SvsdU.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.66025, 5);
      this.paths = ["m 0 0l 8.66025 5"];
      break;
  }
};

SvsdE = function() { SvsdChar.call(this, "SvsdE", "え", "S10", "S", "S", "black", false, p(0, -5)); };
SvsdE.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["え"] = SvsdE;

SvsdE.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 10);
      this.paths = ["m 0 0l 0 10"];
      break;
  }
};

SvsdO = function() { SvsdChar.call(this, "SvsdO", "お", "E10", "E", "E", "black", false, p(0, 0.0)); };
SvsdO.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["お"] = SvsdO;

SvsdO.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(10, 0);
      this.paths = ["m 0 0l 10 0"];
      break;
  }
};

SvsdKa = function() { SvsdChar.call(this, "SvsdKa", "か", "NEL10", "NEL", "NEL", "black", false, p(0, 2.3)); };
SvsdKa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["か"] = SvsdKa;

SvsdKa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.66026, -5);
      this.paths = ["m 0 0c 3.62505 1.61147 7.71149 -2.45594 8.66026 -5"];
      break;
  }
};

SvsdKi = function() { SvsdChar.call(this, "SvsdKi", "き", "SWL10", "SWL", "SWL", "black", false, p(5, -4.330124999999999)); };
SvsdKi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["き"] = SvsdKi;

SvsdKi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-5, 8.66025);
      this.paths = ["m 0 0c -1.62303 1.15063 -5.83226 4.37216 -5 8.66025"];
      break;
  }
};

SvsdKu = function() { SvsdChar.call(this, "SvsdKu", "く", "SEL10", "SEL", "SEL", "black", false, p(0.0, -2.6)); };
SvsdKu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["く"] = SvsdKu;

SvsdKu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.66026, 5);
      this.paths = ["m 0 0c 0.364894 3.93136 4.76838 5.95772 8.66026 5"];
      break;
  }
};

SvsdKe = function() { SvsdChar.call(this, "SvsdKe", "け", "SL10", "SL", "SL", "black", false, p(1.5, -5.0)); };
SvsdKe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["け"] = SvsdKe;

SvsdKe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 10);
      this.paths = ["m 0 0c -1.84278 2.84986 -2.18359 6.96162 0 10"];
      break;
  }
};

SvsdKo = function() { SvsdChar.call(this, "SvsdKo", "こ", "EL10", "EL", "EL", "black", false, p(0.0, -0.9)); };
SvsdKo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["こ"] = SvsdKo;

SvsdKo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(10, 0);
      this.paths = ["m 0 0c 2.74956 3.12248 7.3269 1.33355 10 0"];
      break;
  }
};

SvsdSa = function() { SvsdChar.call(this, "SvsdSa", "さ", "NEL5", "NEL", "NEL", "black", false, p(0.0, 1.1)); };
SvsdSa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["さ"] = SvsdSa;

SvsdSa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.33013, -2.5);
      this.paths = ["m 0 0c 1.59137 0.954753 3.42881 -1.15288 4.33013 -2.5"];
      break;
  }
};

SvsdShi = function() { SvsdChar.call(this, "SvsdShi", "し", "SWL5", "SWL", "SWL", "black", false, p(2.6, -2.2)); };
SvsdShi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["し"] = SvsdShi;

SvsdShi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-2.5, 4.33013);
      this.paths = ["m 0 0c -1.11689 0.391995 -3.19039 2.15145 -2.5 4.33013"];
      break;
  }
};

SvsdSu = function() { SvsdChar.call(this, "SvsdSu", "す", "SEL5", "SEL", "SEL", "black", false, p(0.0, -1.3)); };
SvsdSu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["す"] = SvsdSu;

SvsdSu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.20152, 2.53215);
      this.paths = ["m 0 0c 0.40822 1.261113 1.10359 3.190304 4.20152 2.532154"];
      break;
  }
};

SvsdSe = function() { SvsdChar.call(this, "SvsdSe", "せ", "SL5", "SL", "SL", "black", false, p(0.7, -2.5)); };
SvsdSe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["せ"] = SvsdSe;

SvsdSe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 5);
      this.paths = ["m 0 0c -0.526006 1.45593 -1.3705 3.54409 0 5"];
      break;
  }
};

SvsdSo = function() { SvsdChar.call(this, "SvsdSo", "そ", "EL5", "EL", "EL", "black", false, p(0.0, -0.5)); };
SvsdSo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["そ"] = SvsdSo;

SvsdSo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5, 0);
      this.paths = ["m 0 0c 1.26737 1.679 3.71345 1.0347 5 0"];
      break;
  }
};

SvsdTa = function() { SvsdChar.call(this, "SvsdTa", "た", "NE5", "NE", "NE", "black", false, p(0.0, 1.2)); };
SvsdTa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["た"] = SvsdTa;

SvsdTa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.33013, -2.5);
      this.paths = ["m 0 0l 4.33013 -2.5"];
      break;
  }
};

SvsdChi = function() { SvsdChar.call(this, "SvsdChi", "ち", "SW5", "SW", "SW", "black", false, p(2.5, -2.2)); };
SvsdChi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ち"] = SvsdChi;

SvsdChi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-2.5, 4.33012);
      this.paths = ["m 0 0l -2.5 4.33012"];
      break;
  }
};

SvsdTsu = function() { SvsdChar.call(this, "SvsdTsu", "つ", "SE5", "SE", "SE", "black", false, p(0.0, -1.2)); };
SvsdTsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["つ"] = SvsdTsu;

SvsdTsu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.33013, 2.5);
      this.paths = ["m 0 0l 4.33013 2.5"];
      break;
  }
};

SvsdTe = function() { SvsdChar.call(this, "SvsdTe", "て", "S5", "S", "S", "black", false, p(0.0, -2.5)); };
SvsdTe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["て"] = SvsdTe;

SvsdTe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 5);
      this.paths = ["m 0 0l 0 5"];
      break;
  }
};

SvsdTo = function() { SvsdChar.call(this, "SvsdTo", "と", "E5", "E", "E", "black", false, p(0.0, 0.0)); };
SvsdTo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["と"] = SvsdTo;

SvsdTo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5, 0);
      this.paths = ["m 0 0 h5"];
      break;
  }
};

SvsdNa = function() { SvsdChar.call(this, "SvsdNa", "な", "NER10", "NER", "NER", "black", false, p(0.0, 2.5)); };
SvsdNa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["な"] = SvsdNa;

SvsdNa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.66025, -5);
      this.paths = ["m 0 0c 0.338036 -1.74353 4.2163 -5.71161 8.66025 -5"];
      break;
  }
};

SvsdNi = function() { SvsdChar.call(this, "SvsdNi", "に", "SWR10", "SWR", "SWR", "black", false, p(5.0, -4.3)); };
SvsdNi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["に"] = SvsdNi;

SvsdNi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-5, 8.66025);
      this.paths = ["m 0 0c 0.722009 2.68537 -0.707116 7.21951 -5 8.66025"];
      break;
  }
};

SvsdNu = function() { SvsdChar.call(this, "SvsdNu", "ぬ", "SER10", "SER", "SER", "black", false, p(0.0, -2.5)); };
SvsdNu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぬ"] = SvsdNu;

SvsdNu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.66025, 5);
      this.paths = ["m 0 0 c 2.5641,-0.0716 7.28949,-0.0932 8.66025,5"];
      break;
  }
};

SvsdNe = function() { SvsdChar.call(this, "SvsdNe", "ね", "SR10", "SR", "SR", "black", false, p(0.0, -5.0)); };
SvsdNe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ね"] = SvsdNe;

SvsdNe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 10);
      this.paths = ["m 0 0c 3.06633 2.75966 2.35567 7.77508 0 10"];
      break;
  }
};

SvsdNo = function() { SvsdChar.call(this, "SvsdNo", "の", "ER10", "ER", "ER", "black", false, p(0.0, 0.9)); };
SvsdNo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["の"] = SvsdNo;

SvsdNo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(10, 0);
      this.paths = ["m 0 0c 2.61216 -1.76308 7.32951 -2.88933 10 0"];
      break;
  }
};

SvsdHa = function() { SvsdChar.call(this, "SvsdHa", "は", "NEL20", "NEL", "NEL", "black", false, p(0.0, 5.0)); };
SvsdHa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["は"] = SvsdHa;

SvsdHa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17.3205, -10);
      this.paths = ["m 0 0c 7.567754 0 13.370745 -5.36129 17.3205 -10"];
      break;
  }
};

SvsdHi = function() { SvsdChar.call(this, "SvsdHi", "ひ", "SWL20", "SWL", "SWL", "black", false, p(10.2, -8.7)); };
SvsdHi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ひ"] = SvsdHi;

SvsdHi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-10, 17.3205);
      this.paths = ["m 0 0c -4.58414 4.24962 -11.55 12.3153 -10 17.3205"];
      break;
  }
};

SvsdHu = function() { SvsdChar.call(this, "SvsdHu", "ふ", "SEL20", "SEL", "SEL", "black", false, p(0.0, -5.1)); };
SvsdHu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ふ"] = SvsdHu;

SvsdHu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17.3205, 10);
      this.paths = ["m 0 0c 0.556334 7.36507 11.3581 11.1114 17.3205 10"];
      break;
  }
};

SvsdHe = function() { SvsdChar.call(this, "SvsdHe", "へ", "UWL5", "SWL", "SEL", "black", false, p(2.8, -2.6)); };
SvsdHe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["へ"] = SvsdHe;

SvsdHe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0.00028, 4.99854);
      this.paths = ["m 0 0c -1.54618 0.81314 -3.06762 1.9439 -2.80689 3.38677c 0.19187 1.06179 1.19064 2.09764 2.80717 1.61177"];
      break;
  }
};

SvsdHo = function() { SvsdChar.call(this, "SvsdHo", "ほ", "EL20", "EL", "EL", "black", false, p(0.0, -1.3)); };
SvsdHo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ほ"] = SvsdHo;

SvsdHo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(20, 0);
      this.paths = ["m 0 0c 5.15578 3.98468 13.0748 2.97834 20 0"];
      break;
  }
};

SvsdMa = function() { SvsdChar.call(this, "SvsdMa", "ま", "NER20", "NER", "NER", "black", false, p(0.0, 5.0)); };
SvsdMa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ま"] = SvsdMa;

SvsdMa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17.3205, -10);
      this.paths = ["m 0 0c 4.56521 -6.44915 10.8638 -9.78096 17.3205 -10"];
      break;
  }
};

SvsdMi = function() { SvsdChar.call(this, "SvsdMi", "み", "SWR20", "SWR", "SWR", "black", false, p(10.0, -8.7)); };
SvsdMi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["み"] = SvsdMi;

SvsdMi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-9.99999, 17.3206);
      this.paths = ["m 0 0c 1.75914 4.78201 -3.60044 13.4217 -9.99999 17.3206"];
      break;
  }
};

SvsdMu = function() { SvsdChar.call(this, "SvsdMu", "む", "SER20", "SER", "SER", "black", false, p(0.0, -5.0)); };
SvsdMu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["む"] = SvsdMu;

SvsdMu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17.3205, 10);
      this.paths = ["m 0 0c 6.05327 -0.272634 16.7009 3.22004 17.3205 10"];
      break;
  }
};

SvsdMe = function() { SvsdChar.call(this, "SvsdMe", "め", "UER5", "SER", "SWR", "black", false, p(0.0, -2.5)); };
SvsdMe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["め"] = SvsdMe;

SvsdMe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 5.00001);
      this.paths = ["m 0 0c 1.96459 0.169174 2.87771 0.486323 3.07622 1.62962c 0.260213 1.49864 -1.92679 2.77673 -3.07622 3.37039"];
      break;
  }
};

SvsdMo = function() { SvsdChar.call(this, "SvsdMo", "も", "ER20", "ER", "ER", "black", false, p(0.0, 1.3)); };
SvsdMo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["も"] = SvsdMo;

SvsdMo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(20, 0);
      this.paths = ["m 0 0c 6.69402 -2.71754 16.4988 -4.16702 20 0"];
      break;
  }
};

SvsdYa = function() { SvsdChar.call(this, "SvsdYa", "や", "NE20", "NE", "NE", "black", false, p(0.0, 5.0)); };
SvsdYa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["や"] = SvsdYa;

SvsdYa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17.3205, -10);
      this.paths = ["m 0 0l 17.3205 -10"];
      break;
  }
};

SvsdYu = function() { SvsdChar.call(this, "SvsdYu", "ゆ", "SE20", "SE", "SE", "black", false, p(0.0, -5.0)); };
SvsdYu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ゆ"] = SvsdYu;

SvsdYu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17.3205, 10);
      this.paths = ["m 0 0l 17.3205 10"];
      break;
  }
};

SvsdYo = function() { SvsdChar.call(this, "SvsdYo", "よ", "E20", "E", "E", "black", false, p(0.0, 0.0)); };
SvsdYo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["よ"] = SvsdYo;

SvsdYo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(20, 0);
      this.paths = ["m 0 0l 20 0"];
      break;
  }
};

SvsdRa = function() { SvsdChar.call(this, "SvsdRa", "ら", "NER5", "NER", "NER", "black", false, p(0.0, 1.3)); };
SvsdRa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ら"] = SvsdRa;

SvsdRa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.33013, -2.5);
      this.paths = ["m 0 0c 0.541772 -0.951162 1.94507 -2.71942 4.33013 -2.5"];
      break;
  }
};

SvsdRi = function() { SvsdChar.call(this, "SvsdRi", "り", "SWR5", "SWR", "SWR", "black", false, p(2.5, -2.2)); };
SvsdRi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["り"] = SvsdRi;

SvsdRi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-2.5, 4.33013);
      this.paths = ["m 0 0c 1.23682 1.79842 -0.379269 3.56029 -2.5 4.33013"];
      break;
  }
};

SvsdRu = function() { SvsdChar.call(this, "SvsdRu", "る", "SER5", "SER", "SER", "black",false, p(0.0, -1.2)); };
SvsdRu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["る"] = SvsdRu;

SvsdRu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.33013, 2.5);
      this.paths = ["m 0 0c 1.48073 0.0776674 4.60895 0.194056 4.33013 2.5"];
      break;
  }
};

SvsdRe = function() { SvsdChar.call(this, "SvsdRe", "れ", "SR5", "SR", "SR", "black", false, p(0.0, -2.5)); };
SvsdRe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["れ"] = SvsdRe;

SvsdRe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 5);
      this.paths = ["m 0 0c 1.1321 2.05387 1.03538 3.75447 0 5"];
      break;
  }
};

SvsdRo = function() { SvsdChar.call(this, "SvsdRo", "ろ", "ER5", "ER", "ER", "black", false, p(0.0, 0.4)); };
SvsdRo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ろ"] = SvsdRo;

SvsdRo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5, 0);
      this.paths = ["m 0 0c 1.72594 -0.816378 3.59517 -1.20627 5 0"];
      break;
  }
};

SvsdWa = function() { SvsdChar.call(this, "SvsdWa", "わ", "USL5", "SEL", "NEL", "black", false, p(0.0, -1.4)); };
SvsdWa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["わ"] = SvsdWa;

SvsdWa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5, 0);
      this.paths = ["m 0 0c 0.0192241 1.2306 0.514416 2.96936 1.65244 2.87958c 1.10088 -0.086848 2.53023 -1.40929 3.34756 -2.87958"];
      break;
  }
};

TakusariChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
TakusariChar.prototype = Object.create(Char.prototype);
TakusariChar.dict = {};

TakusariA = function() { TakusariChar.call(this, "TakusariA", "あ", "E3", "E", "E", "black"); };
TakusariA.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["あ"] = TakusariA;

TakusariA.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.9724, 0);
      this.paths = ["m 0 0 h 2.9724"];
      break;
  }
}

TakusariI = function() { TakusariChar.call(this, "TakusariI", "y", "SE2", "SE", "SE", "black"); };
TakusariI.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["い"] = TakusariI;

TakusariI.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.12003, 1.12003);
      this.paths = ["m 0 0 l 1.12003 1.12003"];
      break;
  }
}

TakusariU = function() { TakusariChar.call(this, "TakusariU", "う", "S3", "S", "S", "black"); };
TakusariU.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["う"] = TakusariU;

TakusariU.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 2.6714);
      this.paths = ["m 0 0 v 2.6714"];
      break;
  }
}

TakusariE = function() { TakusariChar.call(this, "TakusariE", "え", "SE3", "SE", "SE", "black"); };
TakusariE.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["え"] = TakusariE;

TakusariE.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.66348, 1.66348);
      this.paths = ["m 0 0 l 1.66348 1.66348"];
      break;
  }
}

TakusariO = function() { TakusariChar.call(this, "TakusariO", "お", "SW3", "SW", "SW", "black"); };
TakusariO.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["お"] = TakusariO;

TakusariO.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-2.00764, 2.00765);
      this.paths = ["m 0 0 l -2.00764 2.00765"];
      break;
  }
}

TakusariKa = function() { TakusariChar.call(this, "TakusariKa", "か", "E9", "E", "E", "black"); };
TakusariKa.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["か"] = TakusariKa;

TakusariKa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(9.00424, 0);
      this.paths = ["m 0 0 h 9.00424"];
      break;
  }
}

TakusariKi = function() { TakusariChar.call(this, "TakusariKi", "き", "E9NW2", "E", "NW", "black"); };
TakusariKi.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["き"] = TakusariKi;

TakusariKi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.83654, -1.0639);
      this.paths = ["m 0 0 h 8.90045 l -1.0639 -1.0639"];
      //this.dp = p(7.83654, -1.0639);
      //this.paths = ["m 0 0 h 8.90045 l 7.83654 -1.0639"];
      //this.dp = p(16.737, -1.0639);
      //this.paths = ["m 0 0 h 8.90045 l 7.83654 -1.0639"];
      break;
  }
}

TakusariKu = function() { TakusariChar.call(this, "TakusariKu", "く", "E9N2", "E", "N", "black"); };
TakusariKu.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["く"] = TakusariKu;

TakusariKu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(9.00709, -2.22679);
      this.paths = ["m 0 0 h 9.00709 v -2.22679"];
      break;
  }
}

TakusariKe = function() { TakusariChar.call(this, "TakusariKe", "け", "E9NW3", "E", "NW", "black"); };
TakusariKe.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["け"] = TakusariKe;

TakusariKe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.57372, -1.42699);
      this.paths = ["m 0 0 h 9.00071 l -1.42699 -1.42699"];
      break;
  }
}

TakusariKo = function() { TakusariChar.call(this, "TakusariKo", "こ", "E9NE3", "E", "NE", "black"); };
TakusariKo.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["こ"] = TakusariKo;

TakusariKo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(10.0059, -1.63139);
      this.paths = ["m 0 0 l 9.00624 0.100028 l 0.999635 -1.73142"];
      break;
  }
}

TakusariSa = function() { TakusariChar.call(this, "TakusariSa", "さ", "SR7", "SR", "SR", "black"); };
TakusariSa.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["さ"] = TakusariSa;

TakusariSa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.151885, 7.35122);
      this.paths = ["m 0 0 c 1.38526 1.05473 1.71903 5.47967 -0.151885 7.35122"];
      break;
  }
}

TakusariShi = function() { TakusariChar.call(this, "TakusariShi", "し", "SR7NW1", "SR", "NW", "black"); };
TakusariShi.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["し"] = TakusariShi;

TakusariShi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-1.15432, 6.89557);
      this.paths = ["m 0 0 c 1.19869 2.39225 1.048 6.27643 -0.303769 7.65499 l -0.850555 -0.759425"];
      break;
  }
}

TakusariSu = function() { TakusariChar.call(this, "TakusariSu", "す", "SR7N2", "SR", "N", "black"); };
TakusariSu.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["す"] = TakusariSu;

TakusariSu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.182265, 4.70843);
      this.paths = ["m 0 0 c 1.65725 2.33278 1.44935 5.43283 -0.182264 7.22971 l -1e-06 -2.52129"];
      break;
  }
}


NakaneAn = function() { NakaneChar.call(this, "NakaneAn", "あん", "CL1NEL7", "C", "NEL", "black", false, p(1.4, 1.5)); };
NakaneAn.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["あん"] = NakaneAn;

NakaneAn.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.24388, -3.00062);
      this.paths = ["m 0 0 c -0.02492 -1.17664 -1.17719 -1.287 -1.38649 -0.66039 c -0.184343 0.551891 0.548205 0.937461 1.38649 0.66039 c 1.69005 -0.558596 3.30617 -1.37645 4.24388 -3.00062"];
      break;
  }
}

NakaneIn = function() { NakaneChar.call(this, "NakaneIn", "いん", "CR1NER7", "C", "NER", "black", false, p(0.5, 0.9)); };
NakaneIn.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["いん"] = NakaneIn;

NakaneIn.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.662, -3.06646);
      this.paths = ["m 0 0 c 1.23903 0.46983 0.793476 1.2456 0.389482 1.34959 c -0.326126 0.08395 -0.673306 -0.216925 -0.742295 -0.508877 c -0.100716 -0.426218 0.409386 -0.900078 0.636519 -1.14939 c 1.39782 -1.5343 3.29166 -2.75779 4.37829 -2.75779"];
      break;
  }
}

NakaneUn = function() { NakaneChar.call(this, "NakaneUn", "うん", "CL1NEL17", "C", "NEL", "black", false, p(0.9, 4.0)); };
NakaneUn.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["うん"] = NakaneUn;

NakaneUn.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(13.1785, -7.96145);
      this.paths = ["m 0 0 c 0.23789 -0.94394 -0.31576 -1.2225 -0.72883 -1.13865 c -0.31784 0.0645 -0.72117 0.86178 -0.32209 1.07707 c 0.37994 0.20497 1.07804 0.0584 1.31435 -0.0151 c 4.95144 -1.53925 9.6925 -4.27169 12.6099 -9.32478"];
      break;
  }
};


NakaneUn.prototype.setPathsExtra = function() {
    this.pathsExtra = ["m 6,-4.0 v0.1"];
};

NakaneEn = function() { NakaneChar.call(this, "NakaneEn", "えん", "CR1NER17", "C", "NER", "black", false, p(0.4, 3.6)); };
NakaneEn.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["えん"] = NakaneEn;

NakaneEn.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(13.3393, -8.53826);
      this.paths = ["m 0 0 c 1.18973 0.62725 0.72813 1.39657 0.47231 1.50302 c -0.26196 0.109 -0.72678 0.0968 -0.8516 -0.29748 c -0.11204 -0.35389 0.2483 -1.03199 0.38226 -1.21709 c 3.20473 -4.42817 10.0513 -8.52671 13.3364 -8.52671"];
      break;

  }
};

NakaneOn = function() { NakaneChar.call(this, "NakaneOn", "おん", "CL1NEL17", "C", "NEL", "black", false, p(1.2, 4.7)); };
NakaneOn.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["おん"] = NakaneOn;

NakaneOn.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(12.8733, -9.40146);
      this.paths = ["m 0 0 c 0.23789 -0.94394 -0.31576 -1.2225 -0.72883 -1.13865 c -0.31784 0.0645 -0.72117 0.86178 -0.32209 1.07707 c 0.37994 0.20497 1.07804 0.0584 1.31435 -0.0151 c 4.95144 -1.53925 9.6925 -4.27169 12.6099 -9.32478"];
      break;
  }
};

NakaneKan = function() { NakaneChar.call(this, "NakaneKan", "かん", "CL1E7", "C", "E", "black", false, p(1.1, 0)); };
NakaneKan.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["かん"] = NakaneKan;
NakaneChar.dict["から"] = NakaneKan;

NakaneKan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.89798, 0.02238);
      this.paths = ["m 0 0 c 0.484613 -0.72432 0.08681 -1.03795 -0.424345 -0.98699 c -0.595043 0.0593 -0.906903 1.00337 -0.227406 1.00337 c 2.16601 0 4.27941 0.006 6.54973 0.006"];
      break;
  }
};

NakaneKin = function() { NakaneChar.call(this, "NakaneKin", "きん", "CR1SW7", "C", "SW", "black", false, p(2.9, -1.8)); };
NakaneKin.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["きん"] = NakaneKin;

NakaneKin.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-2.86156, 4.95636);
      this.paths = ["m 0 0 c -1.88206 -0.17139 -0.679964 -1.57779 0.129227 -1.22096 c 0.585143 0.25804 -0.129227 1.22096 -0.129227 1.22096 l -2.86156 4.95636"];
      break;
  }
};

NakaneKun = function() { NakaneChar.call(this, "NakaneKun", "くん", "CR1S7", "C", "S", "black", true, p(1.0, -2.3)); };
NakaneKun.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["くん"] = NakaneKun;

NakaneKun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0.016133, 5.80887);
      this.paths = ["m 0,0 c -1.1221982,0.88785216 -1.5670959,0.16681665 -1.6443572,-0.44369222 -0.043385,-0.34282477 0.604067,-0.93379058 1.2540592,-0.69140778 0.49630989,0.18918054 0.430502,0.50729 0.406431,1.29485 v 5.64912"];
      break;
  }
};

NakaneKen = function() { NakaneChar.call(this, "NakaneKen", "けん", "CR1SW17", "C", "SW", "black", false, p(8.1, -6.4)); };
NakaneKen.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["けん"] = NakaneKen;

NakaneKen.prototype.setPaths = function() {
  switch (this.getPrevTailType()) {
    case "E":
      this.dp = p(-7.86364, 13.6202);
      this.paths = ["m 0 0 c 0.695304 0 1.11646 0.233633 1.5463 -0.375317 c 0.384163 -0.677656 -0.243854 -1.00987 -0.640214 -0.892382 c -0.464482 0.137678 -0.906087 1.2677 -0.906087 1.2677 l -7.86364 13.6202"];
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-8.05012, 13.9055);
      this.paths = ["m 0 0 c -0.42265 0.36576 -1.15044 -0.21539 -0.7206 -0.82434 c 0.15545 -0.22023 0.49272 -0.41245 0.80231 -0.2106 c 0.52999 0.34556 -0.26819 1.32019 -0.26819 1.32019 l -7.86364 13.6202"];
      break;
  }
};

NakaneGen = function() { NakaneChar.call(this, "NakaneGen", "げん", "CR1SW17", "C", "SW", "black", true, p(8.1, -6.4)); };
NakaneGen.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["げん"] = NakaneGen;

NakaneGen.prototype.setPaths = NakaneKen.prototype.setPaths;

NakaneKon = function() { NakaneChar.call(this, "NakaneKon", "こん", "CL1E17", "C", "E", "black", false, p(1.2, 0)); };
NakaneKon.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["こん"] = NakaneKon;

NakaneKon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(15.7998, 0.04139);
      this.paths = ["m 0 0 c 0.18891 -0.39882 0.12148 -0.95587 -0.40057 -0.96225 c -0.75107 -0.009 -1.1373 0.98294 -0.52768 0.98294 c 0.2939 0 1.20021 0.0207 1.20021 0.0207 h 15.5278"];
      break;
  }
};

SvsdAn = function() { SvsdChar.call(this, "SvsdAn", "あん", "NE10CL1", "NE", "CL", "black", false, p(0.0, 2.5)); };
SvsdAn.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["あん"] = SvsdAn;

SvsdAn.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.50277, -4.33173);
      this.paths = ["m 0 0 l 7.50277 -4.33173 l 0.862841 -0.50456 c 0.453489 -0.27451 -0.07577 -1.0977 -0.582858 -1.06324 c -0.432651 0.0294 -0.810198 0.78944 -0.279983 1.5678"];
      break;
  }
};

SvsdKan = function() { SvsdChar.call(this, "SvsdKan", "かん", "NEL10CL1", "NEL", "CL", "black", false, p(0, 2.3)); };
SvsdKan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["かん"] = SvsdKan;

SvsdKan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.96521, -3.6709);
      this.paths = ["m 0 0 c 3.03636 1.34978 6.39642 -1.28465 7.96521 -3.6709 c 0.131668 -0.20027 0.627511 -0.77622 0.472515 -1.16584 c -0.119981 -0.3016 -0.502465 -0.61366 -0.885737 -0.4046 c -0.475203 0.2592 -0.593013 1.1011 0.413222 1.57044"];
      break;
  }
};

SvsdSan = function() { SvsdChar.call(this, "SvsdSan", "さん", "NEL5CL1", "NEL", "CL", "black", false, p(0.0, 1.4)); };
SvsdSan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["さん"] = SvsdSan;

SvsdSan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.83808, -1.78056);
      this.paths = ["m 0 0 c 1.22256 0.73349 2.59036 -0.34046 3.56736 -1.48845 c 0.12228 -0.14368 0.40963 -0.36964 0.53461 -0.75453 c 0.13299 -0.40954 -0.36164 -0.92704 -0.70525 -0.81595 c -0.69755 0.22553 -0.85838 0.81263 0.44136 1.27837"];
      break;
  }
};

SvsdTan = function() { SvsdChar.call(this, "SvsdTan", "たん", "NE5CL1", "NE", "CL", "black", false, p(0.0, 1.7)); };
SvsdTan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["たん"] = SvsdTan;

SvsdTan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.14884, -1.81798);
      this.paths = ["m 0 0 l 3.14884 -1.81798 c 0 0 0.88269 -0.36606 0.94421 -0.76682 c 0.0506 -0.32954 -0.18911 -0.6722 -0.55149 -0.83442 c -0.64959 -0.2908 -0.71368 0.77775 -0.39272 1.60124"];
      break;
  }
};

SvsdNan = function() { SvsdChar.call(this, "SvsdNan", "なん", "NER10CR1", "NER", "CR", "black", false, p(0.0, 2.6)); };
SvsdNan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["なん"] = SvsdNan;

SvsdNan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.8924, -5.04873);
      this.paths = ["m 0 0 c 0.29223 -1.50729 3.2303 -4.67736 6.8924 -5.04869 c 0.3211 -0.0326 0.79657 -0.11558 1.11657 -0.0302 c 0.59742 0.15947 0.61071 0.66128 0.42635 0.97213 c -0.51357 0.86592 -1.22155 -0.56813 -1.54292 -0.94197"];
      break;
  }
};

SvsdOn = function() { SvsdChar.call(this, "SvsdOn", "おん", "E10CL1", "E", "CL", "black", false, p(0.0, 0.6)); };
SvsdOn.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["おん"] = SvsdOn;

SvsdOn.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.71068, 0);
      this.paths = ["m 0 0 h 8.71068 c 0.715134 0 1.29478 0.21311 1.31863 -0.90043 c 0.0053 -0.24819 -0.207752 -0.39396 -0.387816 -0.37878 c -0.52548 0.0443 -0.930817 1.27921 -0.930817 1.27921"];
      break;
  }
};

SvsdKon = function() { SvsdChar.call(this, "SvsdKon", "こん", "EL10CL1", "EL", "CL", "black", false, p(0.0, -0.2)); };
SvsdKon.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["こん"] = SvsdKon;

SvsdKon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.60646, 0.59829);
      this.paths = ["m 0 0 c 2.70023 1.86067 6.02664 1.53794 8.60646 0.59829 c 0.296171 -0.10787 1.16343 -0.36988 1.19347 -0.85914 c 0.0206 -0.33549 -0.425929 -0.77701 -0.740148 -0.68483 c -0.360731 0.10583 -0.531969 0.80038 -0.453327 1.54397"];
      break;
  }
};

SvsdSon = function() { SvsdChar.call(this, "SvsdSon", "そん", "EL5CL1", "EL", "CL", "black", false, p(0.0, -0.1)); };
SvsdSon.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["そん"] = SvsdSon;

SvsdSon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.87482, 0.66396);
      this.paths = ["m 0 0 c 0.9556 1.26596 2.5813 1.2111 3.87482 0.66396 c 0.20807 -0.088 1.02833 -0.45494 1.04824 -0.91925 c 0.0123 -0.28659 -0.21015 -0.6317 -0.59606 -0.6207 c -0.33353 0.009 -0.70817 0.82796 -0.45218 1.53995"];
      break;
  }
};

SvsdTon = function() { SvsdChar.call(this, "SvsdTon", "とん", "E5CL1", "E", "CL", "black", false, p(0.0, 0.6)); };
SvsdTon.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["とん"] = SvsdTon;

SvsdTon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.71068, 0);
      this.paths = ["m 0 0 h 3.71068 c 0.71513 0 1.29478 0.21311 1.31863 -0.90043 c 0.005 -0.24819 -0.20775 -0.39396 -0.38781 -0.37878 c -0.52548 0.0443 -0.93082 1.27921 -0.93082 1.27921"];
      break;
  }
};

SvsdNon = function() { SvsdChar.call(this, "SvsdNon", "のん", "ER10CR1", "ER", "CR", "black", false, p(0.0, 0.5)); };
SvsdNon.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["のん"] = SvsdNon;

SvsdNon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.73364, -1.00721);
      this.paths = ["m 0 0 c 2.23662 -1.50961 6.01662 -2.55232 8.73364 -1.00721 c 0.26023 0.14799 1.09415 0.59065 1.10738 1.1141 c 0.007 0.28679 -0.22769 0.65699 -0.57514 0.64027 c -0.59193 -0.0285 -0.81987 -0.99448 -0.53224 -1.75437"];
      break;
  }
};

NakaneSan = function() { NakaneChar.call(this, "NakaneSan", "さん", "CR1SER7", "C", "SER", "black", false, p(1.5, -1.6)); };
NakaneSan.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["さん"] = NakaneSan;

NakaneSan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.76019, 3.35451);
      this.paths = ["m 0 0 c -0.584978 1.14861 -1.17679 1.07187 -1.4528 0.72574 c -0.201503 -0.25269 0.112244 -0.89032 0.726985 -0.82274 c 0.235326 0.0259 0.488711 0.0467 0.725816 0.097 c 2.2128 0.47001 4.39929 2.00763 4.76019 3.35451"];
      break;
  }
};

NakaneShin = function() { NakaneChar.call(this, "NakaneShin", "しん", "CL1SEL7", "C", "SEL", "black", false, p(0.5, -0.5)); };
NakaneShin.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["しん"] = NakaneShin;

NakaneShin.prototype.setPaths = function() {
  switch (this.getPrevTailType()) {
    case "NER":
      this.dp = p(6.30353, 3.21105);
      this.paths = ["m 0 0 c 2.33316 0 0.412767 1.73879 -0.138139 1.34755 c -0.744267 -0.528563 0.193006 -1.51977 0.768252 -1.03771 c 0.180119 0.15094 0.254195 0.25402 0.473812 0.463769 c 1.267 1.21006 3.58178 2.69282 5.1996 2.43744"];
      return;

    case "S":
      this.dp = p(5.19983, 2.45104);
      this.paths = ["m 0 0 c 0 0.366779 0.919746 -0.080396 1.09209 -0.391439 c 0.145859 -0.263244 0.153906 -0.715042 -0.33469 -0.938694 c -0.333099 -0.152474 -0.680755 0.116174 -0.762318 0.513188 c -0.047292 0.230195 0.00515 0.52686 0.00515 0.830549 c 0 1.48947 3.58178 2.69282 5.1996 2.43744"];
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.19961, 2.43744);
      this.paths = ["m 0 0 c 1.24485 -0.7309 0.670914 -1.2693 0.434536 -1.3994 c -0.320934 -0.17665 -1.25469 0.27372 -0.908345 0.93563 c 0.108952 0.20822 0.254195 0.25402 0.473812 0.46377 c 1.267 1.21006 3.58178 2.69282 5.1996 2.43744"];
      break;
  }
};

NakaneZin = function() { NakaneChar.call(this, "NakaneZin", "じん", "CL1SEL7", "C", "SEL", "black", true, p(0.5, -0.5)); };
NakaneZin.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["じん"] = NakaneZin;
NakaneZin.prototype.setPaths = NakaneShin.prototype.setPaths;

NakaneSun = function() { NakaneChar.call(this, "NakaneSun", "すん", "CR1NER17", "C", "NER", "black", false, p(1.4, -4.2)); };
NakaneSun.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["すん"] = NakaneSun;

NakaneSun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(13.3551, 8.43844);
      this.paths = ["m 0 0 c -0.47664 1.19616 -0.750848 1.28748 -1.01203 1.16221 c -0.336621 -0.16146 -0.658969 -0.87501 0.08285 -1.12465 c 0.435266 -0.14648 0.663618 -0.0742 0.929177 -0.0376 c 5.43552 0.75501 11.6793 5.53592 13.3551 8.43848"];
      break;
  }
};

NakaneSun.prototype.setPathsExtra = function() {
  
  switch (this.getPrevName()) {
    case "NakaneSu":
    case "NakaneMu":
      this.pathsExtra = [];
      return; 
  }

  switch (this.getNextName()) {
    case "NakaneSu":
      if (this.next && this.next.next) {
        const name = this.next.next.name;
        if (name == "NakaneMu") {
          this.pathsExtra = ["m 23,9 v0.1"];
        } else {
          this.pathsExtra = ["m 14.7241,6 v0.1"];
        }
      } else {
        this.pathsExtra = ["m 12,8.50165 v0.1"];
      }
      break;

    case "NakaneRu":
      this.pathsExtra = ["m 12,8.50165 v0.1"];
      break;

    default:
      this.pathsExtra = ["m 7,4 v0.1"];
      break;
  }
};

NakaneSen = function() { NakaneChar.call(this, "NakaneSen", "せん", "CL1SEL17", "C", "SEL", "black", false, p(0.4, -3.0)); };
NakaneSen.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["せん"] = NakaneSen;

NakaneSen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(13.7984, 7.58106);
      this.paths = ["m 0 0 c 0.68897 -0.6576 0.75102 -1.16259 0.25641 -1.57231 c -0.31467 -0.26066 -0.7595 0.19427 -0.69637 0.84797 c 0.0216 0.2242 0.31393 0.60381 0.43996 0.72434 c 4.33035 4.14121 10.201 7.74252 13.7984 7.58106"];
      break;
  }
};

NakaneSon = function() { NakaneChar.call(this, "NakaneSon", "そん", "CR1SER17", "C", "SER", "black", false, p(1.2, -4.1)); };
NakaneSon.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["そん"] = NakaneSon;

NakaneSon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(13.3551, 8.43844);
      this.paths = ["m 0 0 c -0.47664 1.19616 -0.750848 1.28748 -1.01203 1.16221 c -0.336621 -0.16146 -0.658969 -0.87501 0.08285 -1.12465 c 0.435266 -0.14648 0.663618 -0.0742 0.929177 -0.0376 c 5.43552 0.75501 11.6793 5.53592 13.3551 8.43848"];
      break;
  }
};

ShugiinYama = function() { ShugiinChar.call(this, "ShugiinYama", "やま", "NER14", "NER", "NER", "black", false, p(0.0, 4.4)); };
ShugiinYama.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["やま"] = ShugiinYama;

ShugiinYama.prototype.setPaths = function() {
  switch (this.getPrevTailType()) {
    case "SR":
      this.dp = pp(16.46, 22.3);
      this.paths = ["m 0,0 c 2.2794596,-3.6912402 5.0869467,-7.1022 8.0660867,-8.19349 4.5388403,-1.66262 6.9670363,1.01541 7.1621363,1.94396"];
      return;
  }


  switch (this.getNextHeadType()) {
    case "SE":
      this.dp = p(12.5824, -6.24953);
      this.paths = ["m 0 0 c 0.969553 -4.40028 2.97028 -7.1022 5.94942 -8.19349 c 4.53884 -1.66262 7.45684 1.12009 6.63297 1.94396"];
      break;

    default:
      this.dp = p(12.5824, -6.24953);
      this.paths = ["m 0 0 c 0.969553 -4.40028 2.97028 -7.1022 5.94942 -8.19349 c 4.53884 -1.66262 6.43787 1.01541 6.63297 1.94396"];
      break;
  }
};


NakaneTan = function() { NakaneChar.call(this, "NakaneTan", "たん", "CR1SE7", "C", "SE", "black", false, p(1.4, -1.3)); };
NakaneTan.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["たん"] = NakaneTan;

NakaneTan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.1381, 2.96648);
      this.paths = ["m 0 0 c -0.565124 1.20604 -1.4152 1.00913 -1.42397 0.38676 c -0.0048 -0.33803 0.205595 -0.64766 0.485899 -0.73899 c 0.317576 -0.10348 0.938076 0.35223 0.938076 0.35223 l 5.1381 2.96648"];
      break;
  }
};

NakaneChin = function() { NakaneChar.call(this, "NakaneChin", "ちん", "CR1S7", "C", "S", "black", false, p(1.0, -2.3)); };
NakaneChin.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ちん"] = NakaneChin;

NakaneChin.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0.016133, 5.80887);
      this.paths = ["m 0 0 c -0.764301 0.23713 -0.981446 -0.0284 -0.993635 -0.37862 c -0.01202 -0.34535 0.311242 -0.77111 0.603337 -0.75648 c 0.528846 0.0265 0.430502 0.50729 0.406431 1.29485 v 5.64912"];
      break;
  }
};

NakaneTsun = function() { NakaneChar.call(this, "NakaneTsun", "つん", "CL1NE17", "C", "NE", "black", false, p(1.2, 3.8)); };
NakaneTsun.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["つん"] = NakaneTsun;

NakaneTsun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(13.7795, -7.95559);
      this.paths = ["m 0 0 c 0.376378 -1.10396 -0.661145 -0.82666 -0.978769 -0.58849 c -0.210489 0.15784 -0.386326 0.73695 -0.144527 0.94398 c 0.298319 0.25544 1.1233 -0.35549 1.1233 -0.35549 l 13.7795 -7.95559"];
      break;
  }
};

NakaneTen = function() { NakaneChar.call(this, "NakaneTen", "てん", "CR1S17", "C", "S", "black", false, p(1.0, -7.4)); };
NakaneTen.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["てん"] = NakaneTen;

NakaneTen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0.01613, 15.863);
      this.paths = ["m 0 0 c -0.76431 0.23713 -0.98145 -0.0284 -0.99364 -0.37862 c -0.012 -0.34535 0.31124 -0.77111 0.60334 -0.75648 c 0.52884 0.0265 0.4305 0.50729 0.40643 1.29485 v 15.7033"];
      break;
  }
};

NakaneTon = function() { NakaneChar.call(this, "NakaneTon", "とん", "CR1SE17", "C", "SE", "black", false, p(1.4, -3.8)); };
NakaneTon.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["とん"] = NakaneTon;

NakaneTon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(13.71, 7.93925);
      this.paths = ["m 0 0 c -0.56513 1.20604 -1.4152 1.00913 -1.42398 0.38676 c -0.005 -0.33803 0.2056 -0.64766 0.4859 -0.73899 c 0.31758 -0.10348 0.93808 0.35223 0.93808 0.35223 l 13.71 7.93925"];
      break;
  }
};

SvsdUn = function() { SvsdChar.call(this, "SvsdUn", "うん", "SE10CL1", "SE", "CL", "black", false, p(0.0, -2.4)); };
SvsdUn.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["うん"] = SvsdUn;

SvsdUn.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.23341, 4.17582);
      this.paths = ["m 0 0 l 7.23341 4.17621 c 0.300429 0.18732 0.855586 0.6616 1.22842 0.5314 c 0.251425 -0.0878 0.463564 -0.31919 0.523453 -0.60359 c 0.10794 -0.51259 -0.828177 -0.8515 -1.75187 0.0718"];
      break;
  }
};

SvsdKun = function() { SvsdChar.call(this, "SvsdKun", "くん", "SEL10CL1", "SEL", "CL", "black", false, p(0.0, -2.6)); };
SvsdKun.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["くん"] = SvsdKun;

SvsdKun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.287, 5.21489);
      this.paths = ["m 0 0 c 0.322402 3.47355 3.79757 5.45994 7.287 5.21489 c 0.277989 -0.0195 1.2392 -0.21278 1.38604 -0.5511 c 0.208261 -0.47987 -0.251779 -0.77023 -0.379153 -0.7641 c -0.32067 0.0154 -0.75152 0.26713 -1.00689 1.3152"];
      break;
  }
};

SvsdSun = function() { SvsdChar.call(this, "SvsdSun", "すん", "SEL5CL1", "SEL", "CL", "black", false, p(0.0, -1.3)); };
SvsdSun.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["すん"] = SvsdSun;

SvsdSun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.81235, 2.65909);
      this.paths = ["m 0 0 c 0.338408 1.04544 0.874149 2.55 2.81235 2.65909 c 0.231118 0.013 1.16839 -0.0193 1.38092 -0.3116 c 0.287052 -0.39473 -0.02316 -0.88905 -0.347275 -0.84667 c -0.286778 0.0375 -0.705286 0.31201 -1.03365 1.15827"];
      break;
  }
};

SvsdTsun = function() { SvsdChar.call(this, "SvsdTsun", "つん", "SE5CL1", "SE", "CL", "black", false, p(0.0, -1.1)); };
SvsdTsun.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["つん"] = SvsdTsun;

SvsdTsun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.07253, 1.73028);
      this.paths = ["m 0 0 l 3.07253 1.73067 c 0.30043 0.18732 0.85559 0.6616 1.22842 0.5314 c 0.25143 -0.0878 0.46357 -0.31919 0.52345 -0.60359 c 0.10794 -0.51259 -0.82817 -0.8515 -1.75187 0.0718"];
      break;
  }
};

SvsdNun = function() { SvsdChar.call(this, "SvsdNun", "ぬん", "SER10CR1", "SER", "CR", "black", false, p(0.0, -2.6)); };
SvsdNun.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぬん"] = SvsdNun;

SvsdNun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.99032, 3.30273);
      this.paths = ["m 0 0 c 2.23981 -0.0625 6.12876 -0.0869 7.99033 3.30273 c 0.15668 0.28529 0.34994 0.57988 0.42476 0.93044 c 0.0674 0.31561 0.0229 0.76323 -0.32507 0.87329 c -0.35016 0.11076 -1.5027 -0.51882 -0.0997 -1.80373"];
      break;
  }
};

WasedaWa = function() { WasedaChar.call(this, "WasedaWa", "わ", "UWL4", "WL", "EL", "black", false, p(1.8, -1.7)); };
WasedaWa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["わ"] = WasedaWa;

WasedaWa.prototype.setPaths = function() {
  switch (this.getPrevModel()) {
    case "EL8CL1":
      switch (this.getNextHeadType()) {
        case "E":
          switch (this.getNextModel()) {
            case "NEL8":
            case "NEL8CL1":
            case "NEL8CL4":
              this.dp = p(1.33575, 3.39331);
              this.paths = ["m 0 0 c -0.634071 0.83077 -1.18484 1.69014 -0.927046 2.44396 c 0.294368 0.86077 1.29725 0.94935 2.2628 0.94935"];
              return;


            default:
              this.dp = p(1.33575, 3.39331);
              this.paths = ["m 0 0 c -0.634071 0.83077 -1.18484 1.69014 -0.927046 2.44396 c 0.294368 0.86077 1.29725 0.94935 2.2628 0.94935"];
              return;
          }

        default:
          this.dp = p(1.33575, 3.241);
          this.paths = ["m 0 0 c -0.634071 0.83077 -1.18484 1.69014 -0.927046 2.44396 c 0.294368 0.86077 1.38284 1.25889 2.2628 0.79704"];
          return;
      }
    case "E":
      switch (this.getNextModel()) {
        default:
          this.dp = p(0.4109, 3.203);
          this.paths = ["m 0 0 c -0.9756 0.375 -2.0108 1.195 -1.8331 2.109 c 0.1735 0.893 1.2531 1.094 2.244 1.094"];
          return;
      }

    case "NEL8":
    case "NEL16":
    case "E8CL4":
      switch (this.getNextModel()) {
        case "NEL8":
        case "NEL8CL1":
        case "NEL8CL4":
          this.dp = p(0.78537, 4.5337);
          this.paths = ["m 0 0 c -0.5364 0.75686 -1.8874 2.64166 -1.60679 3.58882 c 0.23382 0.78918 1.34674 0.94488 2.39216 0.94488"];
          return;

        default:
          this.dp = p(0.78537, 4.01609);
          this.paths = ["m 0 0 c -0.5364 0.75686 -1.8874 2.64166 -1.60679 3.58882 c 0.23382 0.78918 1.35116 0.91327 2.39216 0.42727"];
          return;
      }
  }

  switch (this.getNextModel()) {
    case "NEL16":
    case "NEL16CL1":
    case "NEL16CL8":
      this.dp = p(0.4109, 3.203);
      this.paths = ["m 0 0 c -0.9755 0.375 -2.15574 1.72647 -1.97805 2.64047 c 0.1735 0.893 1.0456 1.33239 2.38895 0.56253"];
      return;

    case "NEL8":
    case "NEL8CL1":
    case "NEL8CL4":
      this.dp = p(0.4109, 3.203);
      this.paths = ["m 0 0 c -0.9756 0.375 -2.0108 1.195 -1.8331 2.109 c 0.1735 0.893 1.2531 1.094 2.244 1.094"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(0.411, 3.2032);
      this.paths = ["m 0 0 c -0.9753 0.3745 -2.0295 1.2338 -1.8517 2.1481 c 0.1736 0.8931 1.2689 1.0551 2.2627 1.0551"];
      break;

    case "EL":
      this.dp = p(0.96477, 2.28926);
      this.paths = ["m 0 0 c -0.975 0.3745 -1.833 1.0997 -1.833 2.1089 c 0 1.7052 2.34522 1.5649 2.79777 0.180359"];
      break;

    default:
      this.dp = p(0.410938, 3.2034);
      this.paths = ["m 0 0 c -0.975201 0.2797 -1.83318 1.0997 -1.83318 2.1089 c 0 0.9992 1.20263 1.5802 2.24412 1.0945"];
      break;
  }
};

WasedaKu = function() { WasedaChar.call(this, "WasedaKu", "く", "E8CL4", "E", "CL", "black", false, p(0.0, 0.9)); };
WasedaKu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["く"] = WasedaKu;

WasedaKu.prototype.setPaths = function() {
  this.right = 8;

  switch (this.getNextHeadType()) {
    case "S":
      this.dp = p(5.0004, -0.0872);
      this.paths = ["m 0 0 c 2.5002 -0.0873 5.0017 -0.1309 7.5001 0 c 0.27 0.0142 0.4901 -0.2163 0.495 -0.4949 c 0.0699 -2.0024 -3.1828 -2.3955 -3.1828 -1.3825 c 0 0.6017 0.1881 1.1885 0.1881 1.7902"];
      return;

    default:
      this.dp = p(3.88904, -0.053282);
      this.paths = ["m 0 0 c 2.132 -0.0745 4.267 -0.0745 6.4 0 c 1.847 0.0645 1.25233 -3.1924 0.21129 -2.4637 c -0.684 0.4789 -2.13225 1.82002 -2.72225 2.41042"];
      //this.dp = p(4.4802, -0.047);
      //this.paths = ["m 0 0 c 2.1327 -0.0745 4.2673 -0.0745 6.4 0 c 1.8468 0.0645 1.0359 -2.3826 -0.0047 -1.6539 c -0.6839 0.4789 -1.3248 1.0166 -1.9151 1.6069"];
      break;
  }

  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "EL8":
      this.dp = p(7.3, -0.0108);
      this.paths = ["m 0 0 c 2.498 -0.131 5.004 -0.1745 7.499 0 c 0.255 0.0133 0.429 -0.2262 0.504 -0.4864 c 0.971 -3.1761 -5.329 -2.3279 -2.573 -0.096 c 0.519 0.4198 1.238 0.3785 1.87 0.5716"];
      break;

    case "ER8":
      this.dp = p(8.70691, -0.921319);
      this.paths = ["m 0 0 c 2.6653 -0.1864 5.3383 -0.23291 7.9999 0 c 1.0615 0.09289 1.1318 -2.241 -1.1418 -2.241 c -1.0213 0 -1.9973 0.6793 -1.8511 1.4317 c 0.2131 1.0964 2.09277 0.537313 3.69991 -0.112019"];
      break;

    case "UWL4":
      this.dp = p(3.23545, -0.0699);
      this.paths = ["m 0 0 c 2.1327 -0.074 4.2691 -0.112 6.4001 0 c 0.8966 0.031 0.5759 -1.4556 0.07654 -1.77228 c -1.03059 -0.65357 -2.71257 1.00977 -3.24119 1.70238"];
      break;
  }
};

WasedaKe = function() { WasedaChar.call(this, "WasedaKe", "け", "E16CL1", "E", "CL", "black", false, p(0.0, 0.5)); };
WasedaKe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["け"] = WasedaKe;

WasedaKe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "SW":
      this.dp = p(14.4715, -0.0563);
      this.paths = ["m 0 0 c 5.0002 -0.1746 10.0087 -0.3491 15 0 c 0.2628 0.0091 0.4708 -0.219 0.495 -0.495 c 0.0236 -0.225 -0.128964 -0.668934 -0.364864 -0.587734 c -0.3122 0.1075 -0.544736 0.713534 -0.658636 1.02643"];
      break;

    default:
      this.dp = p(14.0904, -0.0448);
      this.paths = ["m 0 0 c 4.9965 -0.2618 10.0034 -0.2618 15 0 c 0.2699 0.0142 0.4853 -0.2165 0.495 -0.495 c 0.0127 -0.3655 -0.3393 -0.5802 -0.5561 -0.3983 c -0.307 0.2576 -0.5909 0.5415 -0.8485 0.8485"];
      break;
  }

  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "ER8":
      this.dp = p(15.495, -0.495);
      this.paths = ["m 0 0 c 4.99656 -0.262 10.0034 -0.262 15 0 c 0.2699 0.014 0.561845 -0.22395 0.495 -0.495 c -0.145958 -0.59184 -0.435556 -0.69907 -0.698982 -0.62394 c -0.262078 0.0747 -0.498252 0.33 -0.541307 0.46811 c -0.07713 0.24743 0.246543 0.67314 1.24029 0.15583"];
      break;

    case "EL8":
      this.dp = p(15.3539, -0.133);
      this.paths = ["m 0 0 c 4.9963 -0.262 10.0033 -0.262 15 0 c 0.2576 0.014 0.4425 -0.225 0.4949 -0.495 c 0.120228 -1.36625 -2.03115 -1.1534 -1.30929 -0.22083 c 0.208395 0.26923 0.845094 0.47783 1.16829 0.58283"];
  }
};

WasedaKo = function() { WasedaChar.call(this, "WasedaKo", "こ", "E16", "E", "E", "black", false, p(0.0, 0.0)); };
WasedaKo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["こ"] = WasedaKo;

WasedaKo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16, 0);
      this.paths = ["m 0 0 l 16 0"];
      break;
  }
};

WasedaNi = function() { WasedaChar.call(this, "WasedaNi", "に", "EL8CL1", "EL", "CL", "black", false, p(0.0, -0.1)); };
WasedaNi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["に"] = WasedaNi;

WasedaNi.prototype.setPaths = function() {
  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "NEL8":
      this.dp = p(7.9375, -2e-06);
      this.paths = ["m 0 0 c 2.198 0.6302 7.9375 1.913 7.9375 0 c 0 -0.4872 -0.249561 -0.723292 -0.559841 -0.747084 c -0.373313 -0.02862 -0.949046 0.441014 -0.802738 0.785652 c 0.177557 0.418246 1.00498 0.159589 1.36258 -0.03857"];
      return;

    case "ER16":
      this.dp = p(7.87948, 0.31394);
      this.paths = ["m 0 0 c 2.192 0.628 7.941 1.913 7.941 0 c 0 -0.39779 -0.25124 -0.45017 -0.46881 -0.45432 c -0.40384 -0.008 -1.05207 0.43459 -0.9017 0.80946 c 0.16253 0.40516 0.77899 0.13085 1.30899 -0.0412"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "SW":
      this.dp = p(6.9736, 0.8815);
      this.paths = ["m 0 0 c 2.1916 0.6285 7.9404 1.9127 7.9404 0 c 0 -0.8314 -0.4079 -0.787 -0.5701 -0.316 c -0.1369 0.3977 -0.2528 0.8023 -0.3967 1.1975"];
      break;

    case "E":
      this.dp = p(7.919, 0.1906);
      this.paths = ["m 0 0 c 2.192 0.6285 7.941 1.9127 7.941 0 c -0.11 -0.6925 -1.116 -0.5097 -1.333 -0.0644 c -0.286 0.587 0.656 0.255 1.311 0.255"];
      break;

    default:
      this.dp = p(7.684, 0.6098);
      this.paths = ["m 0 0 c 2.189 0.6692 7.97 1.9201 7.97 0 c 0 -0.4888 -0.335 -0.7721 -0.644 -0.8549 c -0.307 -0.0881 -0.569 0.0282 -0.417 0.3028 c 0.233 0.4034 0.481 0.7998 0.775 1.1619"];
      break;
  }

  switch (this.getNextModel()) {
    case "EL4":
      this.dp = p(7.7294, 0.522);
      this.paths = ["m 0 0 c 2.2021 0.5901 7.94 1.9126 7.94 0 c 0 -0.4871 -0.3989 -0.7351 -0.7537 -0.7537 c -0.244 -0.0171 -0.4489 0.0391 -0.4489 0.2837 c 0 0.5033 0.5349 0.7489 0.992 0.992"];
      break;

    case "EL8":
    case "EL8CL1":
    case "EL8CL4":
      this.dp = p(7.7293, 0.522);
      this.paths = ["m 0 0 c 2.202 0.5901 7.9399 1.9126 7.9399 0 c 0 -0.4871 -0.3988 -0.7351 -0.7537 -0.7537 c -0.244 -0.0171 -0.606 0.2264 -0.606 0.471 c 0 0.5154 0.6321 0.6367 1.1491 0.8047"];
      break;

    case "SE4":
      this.dp = p(7.6548, 0.6077);
      this.paths = ["m 0 0 c 2.1804 0.6666 7.9404 1.913 7.9404 0 c 0 -0.5019 -0.334 -0.7692 -0.6417 -0.8516 c -0.3064 -0.0879 -0.8002 0.2086 -0.6172 0.4514 c 0.2817 0.3739 0.6425 0.6772 0.9733 1.0079"];
      break;

    case "UWL4":
      this.dp = p(6.6457, 0.97086);
      this.paths = ["m 0 0 c 2.1942 0.588 8.17049 1.9049 8.2352 0 c 0.03699 -1.08907 -1.06087 0.27825 -1.5895 0.97086"];
      break;
  }
};

WasedaNe = function() { WasedaChar.call(this, "WasedaNe", "ね", "EL16CL1", "EL", "CL", "black", false, p(0.0, -0.3)); };
WasedaNe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ね"] = WasedaNe;

WasedaNe.prototype.setPaths = function() {
  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "ER16":
      this.dp = p(15.8002, 0.183);
      this.paths = ["m 0 0 c 2.87009 0.558 15.821 2.736 15.821 0 c 0 -0.355 -0.514445 -0.51219 -0.831831 -0.47592 c -0.362513 0.0414 -0.945034 0.40784 -0.802969 0.74392 c 0.209763 0.49623 1.0014 0.114 1.614 -0.085"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(15.7121, 0.40028);
      this.paths = ["m 0 0 c 2.87017 0.558 15.8213 2.735 15.8213 0 c 0 -0.343 -0.30605 -0.63581 -0.6056 -0.6735 c -0.419686 -0.0528 -1.1064 0.291 -1.0558 0.704 c 0.06 0.488 1.01544 0.36978 1.55224 0.36978"];
      break;

    case "SW":
      this.dp = p(14.6141, 1.062);
      this.paths = ["m 0 0 c 2.8794 0.508 15.8213 2.735 15.8213 0 c 0 -0.703 -0.4304 -0.498 -0.6282 -0.126 c -0.2069 0.39 -0.4281 0.773 -0.579 1.188"];
      break;

    default:
      this.dp = p(15.461, 0.723);
      this.paths = ["m 0 0 c 2.881 0.56 15.881 2.746 15.881 0 c 0 -0.211 -0.054 -0.418 -0.182 -0.56 c -0.12 -0.148 -0.291 -0.251 -0.493 -0.251 c -0.764 0 -0.074 0.964 0.255 1.534"];
      break;
  }
};

WasedaNu = function() { WasedaChar.call(this, "WasedaNu", "ぬ", "EL8CL4", "EL", "CL", "black", false, p(0.0, 0.6)); };
WasedaNu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぬ"] = WasedaNu;

WasedaNu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(7.411, 0.204);
      this.paths = ["m 0 0 c 2.1804 0.6666 7.9407 1.3575 7.9407 -0.5553 c 0 -0.6526 -0.6922 -1.1997 -1.2952 -1.2952 c -0.973 -0.1891 -2.8135 0.2503 -2.7617 1.2402 c 0.0746 1.4221 1.9804 0.8683 3.5272 0.8143"];
      break;

    default:
      this.dp = p(7.411, 0.204);
      this.paths = ["m 0 0 c 2.1804 0.6666 7.9407 1.3575 7.9407 -0.5553 c 0 -0.6526 -0.6922 -1.1997 -1.2952 -1.2952 c -0.973 -0.1891 -2.8135 0.2503 -2.7617 1.2402 c 0.0746 1.4221 1.9804 0.8683 3.5272 0.8143"];
      break;
  }
};

SvsdEn = function() { SvsdChar.call(this, "SvsdEn", "えん", "S10CR1", "S", "CR", "black", false, p(1.0, -5.0)); };
SvsdEn.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["えん"] = SvsdEn;

SvsdEn.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-1e-06, 8.41646);
      this.paths = ["m 0 0 v 8.41643 c 0 0 0.0258 0.92612 -0.04305 1.20913 c -0.12549 0.51585 -1.02291 0.40942 -1.12269 0.0435 c -0.149656 -0.54884 0.254705 -0.80597 1.16574 -1.2526"];
      break;
  }
};

SvsdKen = function() { SvsdChar.call(this, "SvsdKen", "けん", "SL10CL1", "SL", "CL", "black", false, p(1.5, -4.9)); };
SvsdKen.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["けん"] = SvsdKen;

SvsdKen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.582933, 9.05614);
      this.paths = ["m 0 0 c -1.63643 2.53073 -2.08843 6.05658 -0.640023 8.94219 c 0.10036 0.19995 0.497655 0.96122 0.924712 0.90349 c 0.346799 -0.0469 0.75273 -0.57082 0.529199 -0.90672 c -0.273963 -0.4117 -1.09938 -0.12136 -1.39682 0.11718"];
      break;
  }
};

SvsdSen = function() { SvsdChar.call(this, "SvsdSen", "せん", "SL5CL1", "SL", "CL", "black", false, p(0.7, -2.4)); };
SvsdSen.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["せん"] = SvsdSen;

SvsdSen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.50385, 4.24487);
      this.paths = ["m 0 0 c -0.44045 1.21912 -1.10421 2.88152 -0.50385 4.24483 c 0.0653 0.1484 0.40419 0.60941 0.73201 0.5805 c 0.2464 -0.0217 0.58101 -0.17179 0.57401 -0.59356 c -0.0109 -0.6562 -0.94649 -0.42145 -1.30602 0.0131"];
      break;
  }
};

SvsdTen = function() { SvsdChar.call(this, "SvsdTen", "てん", "S5CR1", "S", "CR", "black", false, p(1.2, -2.5)); };
SvsdTen.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["てん"] = SvsdTen;

SvsdTen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.00495, 3.43805);
      this.paths = ["m 0 0 l -0.005 3.43802 c 0 0 0.0258 0.92612 -0.043 1.20913 c -0.12549 0.51585 -1.0229 0.40942 -1.12269 0.0435 c -0.14966 -0.54884 0.2547 -0.80597 1.16574 -1.2526"];
      break;
  }
};

SvsdNen = function() { SvsdChar.call(this, "SvsdNen", "sr10cr1", "SR10CR1", "SR", "CR", "black", false, p(0.8, -4.9)); };
SvsdNen.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ねん"] = SvsdNen;

SvsdNen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0.65674, 9.25179);
      this.paths = ["m 0 0 c 2.75892 2.483 2.4602 6.79214 0.65674 9.25179 c -0.10124 0.13806 -0.49885 0.66368 -0.8343 0.59713 c -0.32255 -0.064 -0.75711 -0.53316 -0.52228 -0.83689 c 0.38043 -0.49206 1.14563 -0.26439 1.35658 0.23976"];
      break;
  }
};

NakaneNan = function() { NakaneChar.call(this, "NakaneNan", "なん", "CL1EL7", "CL", "EL", "black", false, p(0.7, 0.4)); };
NakaneNan.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["なん"] = NakaneNan;
NakaneChar.dict["なら"] = NakaneNan;

NakaneNan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.11113, -0.56503);
      this.paths = ["m 0 0 c 0.74728 -0.75698 0.512533 -1.29231 0.205499 -1.3666 c -0.337191 -0.0816 -0.876787 0.0783 -0.915211 0.60518 c -0.02626 0.36011 0.522454 0.67455 0.709712 0.76142 c 2.02869 0.94113 5.16345 0.58632 6.11113 -0.56503"];
      break;
  }
};

NakaneNin = function() { NakaneChar.call(this, "NakaneNin", "にん", "CL1EL7", "CL", "EL", "black", true, p(0.7, 0.4)); };
NakaneNin.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["にん"] = NakaneNin;
NakaneNin.prototype.setPaths = NakaneNan.prototype.setPaths;

NakaneNun = function() { NakaneChar.call(this, "NakaneNun", "ぬん", "CL1EL17", "C", "EL", "black", false, p(0.5, -0.2)); };
NakaneNun.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぬん"] = NakaneNun;

NakaneNun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.167, -0.57623);
      this.paths = ["m 0 0 c 0.829034 -0.48509 0.648481 -0.9732 0.404567 -1.2159 c -0.211707 -0.21065 -0.965879 0.0572 -0.938587 0.5118 c 0.02014 0.33549 0.377248 0.60625 0.53402 0.7041 c 5.39104 3.36479 12.6516 1.25134 16.167 -0.57623"];
      break;
  }
};

NakaneNun.prototype.setPathsExtra = NakaneNu.prototype.setPathsExtra;

NakaneNen = function() { NakaneChar.call(this, "NakaneNen", "ねん", "CL1EL17", "C", "EL", "black", true, p(0.5, -0.2)); };
NakaneNen.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ねん"] = NakaneNen;

NakaneNen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.167, -0.57623);
      this.paths = ["m 0 0 c 0.829034 -0.48509 0.648481 -0.9732 0.404567 -1.2159 c -0.211707 -0.21065 -0.965879 0.0572 -0.938587 0.5118 c 0.02014 0.33549 0.377248 0.60625 0.53402 0.7041 c 5.39104 3.36479 12.6516 1.25134 16.167 -0.57623"];
      break;
  }
};

NakaneNun.prototype.setPathsExtra = NakaneNu.prototype.setPathsExtra;

NakaneNen = function() { NakaneChar.call(this, "NakaneNen", "ねん", "CL1EL17", "C", "EL", "black", true, p(0.5, -0.2)); };
NakaneNen.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ねん"] = NakaneNen;

NakaneNen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.167, -0.57623);
      this.paths = ["m 0 0 c 0.829034 -0.48509 0.648481 -0.9732 0.404567 -1.2159 c -0.211707 -0.21065 -0.965879 0.0572 -0.938587 0.5118 c 0.02014 0.33549 0.377248 0.60625 0.53402 0.7041 c 5.39104 3.36479 12.6516 1.25134 16.167 -0.57623"];
      break;
  }
};

NakaneNon = function() { NakaneChar.call(this, "NakaneNon", "のん", "CL1EL17", "C", "EL", "black", false, p(0.5, -0.2)); };
NakaneNon.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["のん"] = NakaneNon;

NakaneNon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.167, -0.57623);
      this.paths = ["m 0 0 c 0.829034 -0.48509 0.648481 -0.9732 0.404567 -1.2159 c -0.211707 -0.21065 -0.965879 0.0572 -0.938587 0.5118 c 0.02014 0.33549 0.377248 0.60625 0.53402 0.7041 c 5.39104 3.36479 12.6516 1.25134 16.167 -0.57623"];
      break;
  }
};

ShugiinO = function() { ShugiinChar.call(this, "ShugiinO", "を", "SW3", "SW", "SW", "black", false, p(2.1, -1.1)); };
ShugiinO.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["お"] = ShugiinO;
ShugiinChar.dict["私"] = ShugiinO;

ShugiinO.prototype.setPaths = function() {
  switch (this.getPrevName()) {
    case "ShugiinDan":
      this.tailType = "SW3(-105)";
      this.dp = p(-0.776457, 2.89778);
      this.paths = ["m 0 0 l -0.776457 2.89778"];
      return;
  }

  switch (this.getPrevModel()) {
    case "NEL3":
    case "EL3":
      this.tailType = "SW3(-105)";
      this.dp = p(-0.776457, 2.89778);
      this.paths = ["m 0 0 l -0.776457 2.89778"];
      return;
  }

  switch (this.getPrevTailType()) {
    case "NEL":
    case "ShugiinDan_CR1":
      this.tailType = "SW3(-105)";
      this.dp = p(-0.776457, 2.89778);
      this.paths = ["m 0 0 l -0.776457 2.89778"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "SW":
      this.dp = p(-1.76382, 2.47882);
      this.paths = ["m 0 0 l -2.12132 2.12132 l 0.357506 0.357505"];
      break;

    case "NER":
      this.tailType = "SW3(-105)";
      this.dp = p(-0.776457, 2.89778);
      this.paths = ["m 0 0 l -0.776457 2.89778"];
      break;

    default:
      this.dp = p(-2.12132, 2.12132);
      this.paths = ["m 0 0 l -2.12132 2.12132"];
      break;
  }
};

ShugiinWo = function() { ShugiinChar.call(this, "ShugiinWo", "を", "SW3", "SW", "SW", "black", false, p(2.1, -1.1)); };
ShugiinWo.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["を"] = ShugiinWo;
ShugiinWo.prototype.setPaths = ShugiinO.prototype.setPaths;

ShugiinNoJoshi = function() { ShugiinChar.call(this, "ShugiinNoJoshi", "の", "NE2F", "NE", "NEF", "black", false, p(0.0, 0.7)); };
ShugiinNoJoshi.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["〜の"] = ShugiinNoJoshi;

ShugiinNoJoshi.prototype.setPaths = function() {
  switch (this.getPrevModel()) {
    case "SW3":
      this.dp = p(3.5141, -1.9134);
      this.paths = ["m 0 0 l 1.73205 -1"];
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.89913, -2.75772);
      this.paths = ["m 0 0 l 1.41421 -1.41421"];
      break;
  }
};

ShugiinMo = function() { ShugiinChar.call(this, "ShugiinMo", "も", "UNER3", "NER", "SWR", "black", false, p(0.0, 0.4)); };
ShugiinMo.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["も"] = ShugiinMo;

ShugiinMo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.88521, 0.90446);
      this.paths = ["m 0 0 c 0.440595 -0.4406 2.13369 -2.16957 2.92702 -1.64287 c 1.08243 0.71864 -0.558675 2.10811 -1.04182 2.54733"];
      break;
  }
};

ShugiinKaraJoshi = function() { ShugiinChar.call(this, "ShugiinKaraJoshi", "〜から", "E7SWR7", "E", "SWR", "black", false, p(0.0, -2.5)); };
ShugiinKaraJoshi.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["〜から"] = ShugiinKaraJoshi;
ShugiinChar.dict["から"] = ShugiinKaraJoshi;
ShugiinChar.dict["がら"] = ShugiinKaraJoshi;

ShugiinKaraJoshi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.33108, 5.00458 + 1.5);
      this.paths = ["m 0 0 c 3.85426 0.0368 7.18976 -0.38274 8.11998 0.7002 c 1.42948 1.66415 -0.2185 3.98369 -1.7889 4.30438"];
      break;
  }
};

ShugiinKaramoJoshi = function() { ShugiinChar.call(this, "ShugiinKaramoJoshi", "〜からも", "E7SWR7UNER3", "E", "SWR", "black", false, p(0.0, -3.0)); };
ShugiinKaramoJoshi.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["〜からも"] = ShugiinKaramoJoshi;
ShugiinChar.dict["からも"] = ShugiinKaramoJoshi;

ShugiinKaramoJoshi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.64485, 5.14541);
      this.paths = ["m 0 0 c 3.79242 0.0362 7.07441 -0.3766 7.98971 0.68897 c 0.77146 0.89811 0.43059 2.93821 -0.8885 4.08373 c -0.57487 0.49924 -2.88463 1.77933 -3.92481 1.09113 c -0.50683 -0.33532 -0.24982 -2.19739 1.6214 -2.55995 c 0.47807 -0.0926 1.06412 0.63196 -0.15295 1.84153"];
      break;
  }
};

ShugiinKaranoJoshi = function() { ShugiinChar.call(this, "ShugiinKaranoJoshi", "〜からの", "E7SWR7NE3F", "E", "NEF", "black", false, p(0.0, -2.7)); };
ShugiinKaranoJoshi.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["〜からの"] = ShugiinKaranoJoshi;
ShugiinChar.dict["からの"] = ShugiinKaranoJoshi;

ShugiinKaranoJoshi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.75326 + 0.5, 4.01901 - 1);
      this.paths = ["m 0 0 c 3.44299 0.0329 6.42257 -0.34189 7.25354 0.62549 c 0.70038 0.81536 0.17815 2.782 -0.80664 3.70746 c -0.98479 0.92546 -2.99327 1.19789 -3.80568 0.97074 l 1.11204 -1.28468"];
      break;
  }
};

ShugiinKaradaJoshi = function() { ShugiinChar.call(this, "ShugiinKaradaJoshi", "〜からだ", "E7SWR7S7", "E", "S", "black", false, p(0.0, -6.0)); };
ShugiinKaradaJoshi.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["〜からだ"] = ShugiinKaradaJoshi;
ShugiinChar.dict["からだ"] = ShugiinKaradaJoshi;

ShugiinKaradaJoshi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.74358, 12.0046);
      this.paths = ["m 0 0 c 3.85426 0.0368 7.18976 -0.38274 8.11998 0.7002 c 1.42948 1.66415 -1.806 3.98369 -3.3764 4.30438 v 7"];
      break;
  }
};

WasedaShi = function() { WasedaChar.call(this, "WasedaShi", "し", "NEL8CL1", "NEL", "CL", "black", false, p(0.0, 2.5)); };
WasedaShi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["し"] = WasedaShi;

WasedaShi.prototype.setPaths = function() {
  switch (this.getPrevTailType()) {
    case "SEL":
      this.dp = p(5.5418, -4.0334);
      this.paths = ["m 0 0 c 2.3283 0 5.8218 -2.584 5.8218 -4.8855 c 0 -1.0555 -1.2555 -0.8817 -0.9606 -0.3496 c 0.2937 0.5087 0.4635 0.8256 0.6806 1.2017"];
      return;
  }


  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "ER8":
      this.dp = p(5.65226, -4.45345);
      this.paths = ["m 0 0 c 2.0483 -1.089 5.7144 -2.675 5.7144 -4.968 c 0 -1.051 -1.85423 0.39838 -1.48776 0.84133 c 0.270309 0.32672 0.946121 -0.13381 1.42562 -0.32678"];
      return;

    case "ER16":
      this.dp = p(5.521, -4.0181);
      this.paths = ["m 0 0 c 2.048 -1.0891 5.714 -2.6744 5.714 -4.9675 c 0 -1.0513 -1.76858 0.481566 -1.48458 1.01677 c 0.217 0.4067 0.60465 0.182666 1.29158 -0.06737"];
      return;

    case "EL8":
      this.dp = p(5.64632, -4.43216);
      this.paths = ["m 0 0 c 2.0287 -1.125 5.714 -2.674 5.714 -4.967 c 0 -0.783 -1.09944 -0.73983 -1.288 -0.338 c -0.21246 0.45274 0.52932 0.67484 1.22032 0.87284"];
      return;

    case "SW4":
      this.dp = p(3.96713, -2.64214);
      this.paths = ["m 0 0 c 2.051 -1.0904 5.90172 -3.66043 5.47632 -4.90729 c -0.29744 -0.87182 -0.66854 0.15315 -1.50919 2.26515"];
      return;

    case "SE4":
      this.dp = p(5.53659, -4.07069);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7357 -2.6844 5.7357 -4.986 c 0 -1.0553 -1.6709 -0.490506 -1.22223 -0.05835 c 0.429694 0.413884 0.715952 0.666501 1.02312 0.973662"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(5.70949, -4.6511);
      this.paths = ["m 0 0 c 2.03644 -1.1288 5.73582 -2.6844 5.73582 -4.9861 c 0 -1.4267 -2.31267 0.3404 -1.32461 0.3404 c 0.39983 -0.0209 0.89846 0.01561 1.29828 -0.0054"];
      break;

    case "SEL":
      this.dp = p(4.93961, -3.18064);
      this.paths = ["m 0 0 c 2.029 -1.1246 5.714 -2.6746 5.714 -4.9675 c 0 -1.0512 -0.76039 -0.798144 -0.78139 -0.192244 c -0.023 0.6595 0.007 1.3193 0.007 1.9791"];
      break;

    default:
      this.dp = p(5.5418, -4.0331);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -1.2616 -0.865 -0.9666 -0.3328 c 0.2937 0.5087 0.5554 0.9095 0.7726 1.2857"];
      break;
  }
};

WasedaSu = function() { WasedaChar.call(this, "WasedaSu", "す", "NEL8CL4", "NEL", "CL", "black", false, p(0.0, 2.5)); };
WasedaSu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["す"] = WasedaSu;

WasedaSu.prototype.setPaths = function() {
  switch (this.getPrevModel()) {
    case "UWL4":
      switch (this.getNextModel()) {
        default:
          this.dp = p(4.9106, -2.814);
          this.paths = ["m 0 0 c 2.3202 0 5.8001 -2.573 5.8001 -4.867 c 0 -2.169 -2.4502 -1.883 -2.2468 -0.73 c 0.1692 0.96 0.7703 2.004 1.3573 2.783"];
          return;
      }

    case "SEL8":
      switch (this.getNextModel()) {
        case "EL16":
        case "EL16CL1":
        case "EL16CL8":
          this.dp = p(5.20419, -3.10779);
          this.paths = ["m 0 0 c 0.617619 0 1.3211 -0.18243 2.02 -0.493405 c 0.65574 -0.291775 1.30744 -0.696711 1.88037 -1.1703 c 1.1105 -0.917941 1.9251 -2.0938 1.89973 -3.20349 c -0.04193 -1.83419 -3.9967 -0.810832 -3.26888 0.594788 c 0.337159 0.651149 1.49979 0.893757 2.67297 1.16463"];
          return;

        default:
          this.dp = p(4.9106, -2.814);
          this.paths = ["m 0 0 c 2.3202 0 5.8001 -2.574 5.8001 -4.867 c 0 -2.17 -2.4503 -1.884 -2.2469 -0.73 c 0.1692 0.959 0.7704 2.004 1.3574 2.783"];
          return;
      }
  }

  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "EL8":
      this.dp = p(5.12678, -3.06292);
      this.paths = ["m 0 0 c 2.05895 -1.0491 5.86209 -2.4626 5.86209 -4.7471 c 0 -1.0867 -1.9661 -1.3883 -3.09921 -0.7602 c -1.06108 0.5881 0.524317 1.84668 2.3639 2.44438"];
      return;

    case "EL16":
      this.dp = p(5.05454, -2.98447);
      this.paths = ["m 0 0 c 2.0589 -1.0491 5.8621 -2.4625 5.8621 -4.747 c 0 -1.0868 -2.1644 -1.1935 -3.2975 -0.5654 c -1.0814 0.5994 0.537436 1.87722 2.48994 2.32793"];
      return;

    case "ER8":
      this.dp = p(4.60122, -2.824);
      this.paths = ["m 0 0 c 2.05919 -1.049 5.69296 -2.664 5.69296 -4.949 c 0 -1.465 -3.81386 0.95805 -3.38938 2.245 c 0.240228 0.72833 1.38768 0.248 2.29764 -0.12"];
      return;

    case "ER16":
      this.dp = p(4.6012, -2.824);
      this.paths = ["m 0 0 c 2.0592 -1.0493 5.693 -2.6644 5.693 -4.9489 c 0 -1.4652 -3.9652 0.7979 -3.3922 2.0848 c 0.3507 0.7876 1.50678 0.412554 2.3004 0.0401"];
      return;

    case "SE4":
      this.dp = p(4.66099, -2.88831);
      this.paths = ["m 0 0 c 2.029 -1.1246 5.714 -2.6743 5.714 -4.9674 c 0 -2.1677 -3.74701 -0.993312 -2.6591 0.295885 c 0.63414 0.751478 1.20769 1.38487 1.60609 1.7832"];
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.6145, -2.9915);
      this.paths = ["m 0 0 c 2.0288 -1.1246 5.7144 -2.6743 5.7144 -4.9674 c 0 -2.1677 -2.4742 -1.8055 -2.2707 -0.6511 c 0.169 0.9584 0.5711 1.8606 1.1708 2.627"];
      break;
  }
};

WasedaSe = function() { WasedaChar.call(this, "WasedaSe", "せ", "NEL16", "NEL", "NEL", "black", false, p(0.0, 5.7)); };
WasedaSe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["せ"] = WasedaSe;

WasedaSe.prototype.setPaths = function() {
  switch (this.getNextModel()) {
    case "EL8":
      this.dp = p(11.018, -9.1428);
      this.paths = ["m 0 0 c 2.989 -1.7958 11.402 -6.6898 11.402 -9.9113 c 0 -1.043 -1.127 -0.658 -1.404 -0.3501 c -0.375 0.4161 0.272 0.8755 1.02 1.1186"];
      return;
  }

  switch (this.getNextHeadType()) {
    default:
      this.dp = p(11.2422, -9.02036);
      this.paths = ["m 0 0 c 3.0001 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.0469 -1.4523 -1.0345 -1.1326 -0.5228 c 0.3245 0.5068 0.734315 1.07264 0.930315 1.45094"];
      break;
  }
};

WasedaSo = function() { WasedaChar.call(this, "WasedaSo", "そ", "NEL16", "NEL", "NEL", "black", false, p(0.0, 5.7)); };
WasedaSo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["そ"] = WasedaSo;

WasedaSo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(11.314, -11.3137);
      this.paths = ["m 0 0 c 3.677 -2.4798 13.483 -7.5566 11.314 -11.3137"];
      break;

    default:
      this.dp = p(11.3137, -11.3137);
      this.paths = ["m 0 0 c 3.0032 -2.0256 11.3137 -7.7072 11.3137 -11.3137"];
      break;
  }
};

NakaneHan = function() { NakaneChar.call(this, "NakaneHan", "はん", "CR1SR7", "C", "SR", "black", false, p(1.2, -2.9)); };
NakaneHan.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["はん"] = NakaneHan;

NakaneHan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.321694, 6.39292);
      this.paths = ["m 0 0 c -0.276566 1.09318 -0.945768 0.68485 -1.05215 0.53783 c -0.374547 -0.51774 0.01624 -1.09017 0.428056 -1.03995 c 0.425912 0.0519 0.756742 0.59015 0.827038 0.79103 c 0.692616 1.97925 0.358335 4.22232 -0.524633 6.10401"];
      break;
  }
};

NakaneHin = function() { NakaneChar.call(this, "NakaneHin", "ひん", "CL1SL7", "C", "SL", "black", false, p(0.3, -2.1)); };
NakaneHin.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ひん"] = NakaneHin;

NakaneHin.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0.584648, 5.5642);
      this.paths = ["m 0 0 c 0.612681 -0.0731 1.56712 -0.23631 1.5311 -0.81305 c -0.02058 -0.3295 -0.460955 -0.65717 -0.925749 -0.35204 c -0.365865 0.24018 -0.529868 0.89815 -0.605349 1.16509 c -0.525872 1.85975 -0.238447 3.81011 0.584648 5.5642"];
      break;
  }
};

NakaneHun = function() { NakaneChar.call(this, "NakaneHun", "ふん", "CL1NE7", "C", "NE", "black", false, p(1.2, 1.7)); };
NakaneHun.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ふん"] = NakaneHun;

NakaneHun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.06887, -4.1129);
      this.paths = ["m 0 0 c 0.376378 -1.10396 -0.415546 -0.88902 -0.737323 -0.69197 c -0.377517 0.23119 -0.614979 1.20337 -0.185343 1.33726 c 0.342429 0.10672 0.922666 -0.64529 0.922666 -0.64529 l 4.06887 -4.1129"];
      break;
  }
};

NakaneHen = function() { NakaneChar.call(this, "NakaneHen", "へん", "CL1SL17", "C", "SL", "black", false, p(2.0, -7.3)); };
NakaneHen.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["へん"] = NakaneHen;

NakaneHen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.02739, 15.7731);
      this.paths = ["m 0 0 c 0.8915 -0.0535 1.77395 -0.20748 1.73667 -0.77062 c -0.0306 -0.46223 -0.52502 -0.45903 -0.78905 -0.3133 c -0.44422 0.24518 -0.75322 0.77747 -0.94762 1.08392 c -2.47846 3.90697 -3.28209 12.9048 1.02739 15.7731"];
      break;
  }
};

NakaneHon = function() { NakaneChar.call(this, "NakaneHon", "ほん", "CR1SR17", "C", "SR", "black", false, p(1.4, -7.7)); };
NakaneHon.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ほん"] = NakaneHon;

NakaneHon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.77609, 16.1436);
      this.paths = ["m 0 0 c -0.51075 0.75295 -1.17059 0.81223 -1.33892 0.14704 c -0.0974 -0.38466 0.16356 -0.8641 0.56449 -0.79987 c 0.2753 0.0441 0.63994 0.46776 0.77443 0.65283 c 2.67111 3.67555 3.67593 13.1805 -0.77609 16.1436"];
      break;
  }
};

SvsdIn = function() { SvsdChar.call(this, "SvsdIn", "いん", "SW10CR1", "SW", "CR", "black", false, p(6.1, -4.3)); };
SvsdIn.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["いん"] = SvsdIn;

SvsdIn.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-4.43551, 7.68567);
      this.paths = ["m 0 0 l -4.27499 7.40446 c 0 0 -0.559482 1.06452 -0.9101 1.09497 c -0.450685 0.0391 -0.855976 -0.50991 -0.698994 -0.83806 c 0.208405 -0.43564 1.44857 0.0243 1.44857 0.0243"];
      break;
  }
};

SvsdKin = function() { SvsdChar.call(this, "SvsdKin", "きん", "SWL10CL1", "SWL", "CL", "black", false, p(5.1, -4.3)); };
SvsdKin.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["きん"] = SvsdKin;

SvsdKin.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-5.10719, 7.63149);
      this.paths = ["m 0 0 c -1.49047 1.05666 -5.16196 3.85976 -5.10719 7.63149 c 0.0016 0.11057 -0.01655 0.79328 0.388776 0.91254 c 0.362273 0.10659 0.893703 -0.22748 0.865118 -0.52645 c -0.04612 -0.48233 -0.88782 -0.77548 -1.25389 -0.38609"];
      break;
  }
};

SvsdShin = function() { SvsdChar.call(this, "SvsdShin", "しん", "SWL5CL1", "SWL", "CL", "black", false, p(2.6, -2.2)); };
SvsdShin.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["しん"] = SvsdShin;

SvsdShin.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-2.598, 2.98683);
      this.paths = ["m 0 0 c -0.87569 0.30734 -2.33943 1.45529 -2.59805 2.98683 c -0.0372 0.22021 -0.0843 0.69238 0.0917 1.01999 c 0.19475 0.36253 0.86414 0.50436 1.06358 -0.0685 c 0.16652 -0.4783 -0.19905 -0.79724 -1.15523 -0.95149"];
      break;
  }
};

SvsdChin = function() { SvsdChar.call(this, "SvsdChin", "ちん", "SW5CR1", "SW", "CR", "black", false, p(3.3, -2.1)); };
SvsdChin.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ちん"] = SvsdChin;

SvsdChin.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-1.95859, 3.40708);
      this.paths = ["m 0 0 l -1.79806 3.12587 c 0 0 -0.52815 0.98144 -0.79763 1.10903 c -0.40887 0.19358 -0.96504 -0.38914 -0.84271 -0.74312 c 0.16139 -0.46697 1.47981 -0.0847 1.47981 -0.0847"];
      break;
  }
};

SvsdNin = function() { SvsdChar.call(this, "SvsdNin", "にん", "SWR10CR1", "SWR", "CR", "black", false, p(5.3, -4.2)); };
SvsdNin.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["にん"] = SvsdNin;

SvsdNin.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-3.94381, 8.21708);
      this.paths = ["m 0 0 c 0.65918 2.45167 -0.47466 6.44433 -3.94381 8.21708 c -0.18803 0.0961 -0.52726 0.3142 -0.86349 0.27555 c -0.46476 -0.0534 -0.71045 -0.58591 -0.19938 -0.91183 c 0.45833 -0.29229 1.02845 -0.0945 1.06287 0.63628"];
      break;
  }
};

ShugiinSaka = function() { ShugiinChar.call(this, "ShugiinSaka", "さか", "UNWR3SR7", "NWR", "SR", "black", false, p(0.2, -1.9)); };
ShugiinSaka.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["さか"] = ShugiinSaka;
ShugiinChar.dict["ざか"] = ShugiinSaka;
ShugiinChar.dict["さが"] = ShugiinSaka;

ShugiinSaka.prototype.setPaths = function() {
  switch (this.getNextName()) {
    case "ShugiinMaka":
      this.dp = p(0.253292, 4.67364);
      this.paths = ["m 0 0 c -0.584166 -1.49311 0.45806 -1.6098 0.966648 -0.824252 c 1.07227 1.65621 0.39023 4.91946 -0.713356 5.49789"];
      return;
  }


  switch (this.getNextHeadType()) {
    case "SW":
      this.dp = p(0.591986, 5.78813);
      this.paths = ["m 0 0 c -0.691561 -1.71645 0.542272 -1.8506 1.14436 -0.947544 c 1.2694 1.90395 1.24453 7.19903 -0.552374 6.73567"];
      break;

    default:
      this.dp = p(0.299858, 5.37273);
      this.paths = ["m 0 0 c -0.691561 -1.71645 0.542272 -1.8506 1.14436 -0.947544 c 1.2694 1.90395 0.833761 4.278 -0.844503 6.32027"];
      break;
  }
};

ShugiinSaka = function() { ShugiinChar.call(this, "ShugiinSakan", "さかん", "UNWR3SR7F", "NWR", "SRF", "black", false, p(0.2, -1.9)); };
ShugiinSaka.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["さかん"] = ShugiinSaka;

ShugiinSaka.prototype.setPaths = function() {
  switch (this.getNextName()) {
    case "ShugiinMaka":
      this.dp = p(0.253292, 4.67364 + 2);
      this.paths = ["m 0 0 c -0.584166 -1.49311 0.45806 -1.6098 0.966648 -0.824252 c 1.07227 1.65621 0.39023 4.91946 -0.713356 5.49789"];
      return;
  }


  switch (this.getNextHeadType()) {
    default:
      this.dp = p(0.299858, 5.37273 + 2);
      this.paths = ["m 0 0 c -0.691561 -1.71645 0.542272 -1.8506 1.14436 -0.947544 c 1.2694 1.90395 0.833761 4.278 -0.844503 6.32027"];
      break;
  }
};


ShugiinNaka = function() { ShugiinChar.call(this, "ShugiinNaka", "なか", "UWL3EL7", "WL", "EL", "black", false, p(1.6, -0.8)); };
ShugiinNaka.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["なか"] = ShugiinNaka;

ShugiinNaka.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.43482, 0.658512);
      this.paths = ["m 0 0 c -0.68464 -0.273613 -1.45428 -0.23755 -1.58987 0.127459 c -0.129451 0.348515 0.519157 0.903823 0.629973 0.96733 c 1.77327 1.01626 4.19461 1.06648 6.39472 -0.436277"];
      break;
  }
};

ShugiinNaga = function() { ShugiinChar.call(this, "ShugiinNaga", "なが", "UWL3NEL7", "UWL", "NEL", "black", false, p(0.8, 0.9)); };
ShugiinNaga.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["なが"] = ShugiinNaga;

ShugiinNaga.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "SW":
      this.dp = p(4.96362, -3.11452);
      this.paths = ["m 0 0 c -0.288046 0 -0.820691 0.261478 -0.836487 0.605286 c -0.01587 0.345474 0.256245 0.682728 0.781231 0.682728 c 2.07634 0 4.57935 -2.7622 5.01888 -4.40253"];
      break;

    default:
      this.dp = p(4.96363, -3.11451);
      this.paths = ["m 0 0 c -0.288046 0 -0.820691 0.261478 -0.836487 0.605286 c -0.01587 0.345474 0.256245 0.682728 0.781231 0.682728 c 2.07634 0 4.83725 -1.16203 5.01888 -4.40253"];
      break;
  }
};

ShugiinNakan = function() { ShugiinChar.call(this, "ShugiinNakan", "なかん", "UWL3EL7F", "WL", "ELF", "black", false, p(1.6, -0.8)); };
ShugiinNakan.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["なかん"] = ShugiinNakan;

ShugiinNakan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.43482 + 1.41, 0.658512 - 1.41);
      this.paths = ["m 0 0 c -0.68464 -0.273613 -1.45428 -0.23755 -1.58987 0.127459 c -0.129451 0.348515 0.519157 0.903823 0.629973 0.96733 c 1.77327 1.01626 4.19461 1.06648 6.39472 -0.436277"];
      break;
  }
};

ShugiinMaka = function() { ShugiinChar.call(this, "ShugiinMaka", "まか", "UWR3ER7", "WR", "ER", "black", false, p(1.2, 0.9)); };
ShugiinMaka.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["まか"] = ShugiinMaka;
ShugiinChar.dict["まが"] = ShugiinMaka;
ShugiinChar.dict["さま"] = ShugiinMaka;
ShugiinChar.dict["ざま"] = ShugiinMaka;

ShugiinMaka.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.67367, -0.315797);
      this.paths = ["m 0 0 c -1.1356 0.577981 -1.44764 -0.264407 -0.95576 -0.700562 c 1.75677 -1.55775 4.981 -2.025 6.62943 0.384765"];
      break;
  }
};

ShugiinHana = function() { ShugiinChar.call(this, "ShugiinHana", "はな", "UNL3SEL7", "NWL", "SEL", "black", false, p(1.4, -1.8)); };
ShugiinHana.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["はな"] = ShugiinHana;
ShugiinChar.dict["ばな"] = ShugiinHana;
ShugiinChar.dict["ぱな"] = ShugiinHana;
ShugiinChar.dict["話"] = ShugiinHana;

ShugiinHana.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.45406, 4.55364);
      this.paths = ["m 0 0 c 0.16516 -0.730427 -0.44379 -1.07006 -0.7275 -1.02408 c -0.54522 0.08836 -0.65108 0.862596 -0.64558 0.981218 c 0.12166 2.62235 2.39857 4.832 4.82714 4.5965"];
      break;
  }
};

TakusariSe = function() { TakusariChar.call(this, "TakusariSe", "せ", "SR9NE3", "SR", "NE", "black", false, p(1.2, -3.7)); };
TakusariSe.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["せ"] = TakusariSe;

TakusariSe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-1.1847, 6.47029);
      this.paths = ["m 0 0 c 1.53287 1.02624 1.68248 6.18504 0.151884 7.44235 l -1.33658 -0.972063"];
      break;
  }
};

TakusariSo = function() { TakusariChar.call(this, "TakusariSo", "そ", "SR9W3", "SR", "W", "black", false, p(2.3, -3.7)); };
TakusariSo.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["そ"] = TakusariSo;

TakusariSo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-2.30865, 7.32084);
      this.paths = ["m 0 0 c 0.936077 2.07576 1.51939 4.88056 -0.364525 7.32084 h -1.94412"];
      break;
  }
};

TakusariNa = function() { TakusariChar.call(this, "TakusariNa", "な", "EL9", "EL", "EL", "black", false, p(0.0, -0.7)); };
TakusariNa.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["な"] = TakusariNa;

TakusariNa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.27304, 0.51068);
      this.paths = ["m 0 0 c 3.30385 2.01645 6.02756 1.64796 8.27304 0.51068"];
      break;
  }
};

TakusariNi = function() { TakusariChar.call(this, "TakusariNi", "に", "EL9NW2", "EL", "NW", "black", false, p(0.0, -0.3)); };
TakusariNi.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["に"] = TakusariNi;

TakusariNi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.95785, -0.466281);
      this.paths = ["m 0 0 c 3.28353 1.5366 6.28763 1.28175 8.57955 0.373022 l -0.621707 -0.839303"];
      break;
  }
};

TakusariNu = function() { TakusariChar.call(this, "TakusariNu", "ぬ", "EL9N3", "EL", "N", "black", false, p(0.0, -0.1)); };
TakusariNu.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["ぬ"] = TakusariNu;

TakusariNu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(9.44994, -1.61644);
      this.paths = ["m 0 0 c 3.79114 2.74013 7.43968 1.75831 9.44994 0.404108 v -2.02055"];
      break;
  }
};

TakusariNe = function() { TakusariChar.call(this, "TakusariNe", "ね", "EL9NW3", "EL", "NW", "black", false, p(0.0, 0.2)); };
TakusariNe.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["ね"] = TakusariNe;

TakusariNe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.34223, -1.59452);
      this.paths = ["m 0 0 c 3.68339 1.96138 6.36242 1.34387 8.97384 0.296656 l -1.63161 -1.89118"];
      break;
  }
};

TakusariNo = function() { TakusariChar.call(this, "TakusariNo", "の", "EL9W3", "EL", "W", "black", false, p(0.0, -0.7)); };
TakusariNo.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["の"] = TakusariNo;

TakusariNo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.63646, 0.07416);
      this.paths = ["m 0 0 c 3.52153 1.89453 6.48935 1.63575 9.12217 0.07416 h -3.48571"];
      break;
  }
};

TakusariHa = function() { TakusariChar.call(this, "TakusariHa", "は", "SEL9", "SEL", "SEL", "black", false, p(0.0, -3.1)); };
TakusariHa.prototype = Object.create(TakusariChar.prototype);
TakusariChar.dict["は"] = TakusariHa;

TakusariHa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.34317, 6.28165);
      this.paths = ["m 0 0 c 0 2.4443 3.34038 5.7809 5.34317 6.28165"];
      break;
  }
};

WasedaNo = function() { WasedaChar.call(this, "WasedaNo", "の", "EL16", "EL", "EL", "black", false, p(0.0, -0.7)); };
WasedaNo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["の"] = WasedaNo;

WasedaNo.prototype.setPaths = function() {
  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "ER8":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 5.355 1.2363 11.017 2.3238 16 0"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
    case "NEL":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 2.881 0.6652 17.5774 3.555 16 0"];
      break;

    default:
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 2.8811 0.665 16 2.766 16 0"];
      break;
  }
};

NakaneMan = function() { NakaneChar.call(this, "NakaneMan", "まん", "CR1ER7", "C", "ER", "black", false, p(0.6, -0.4)); };
NakaneMan.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["まん"] = NakaneMan;

NakaneMan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.23474, 0.50537);
      this.paths = ["m 0 0 c 0.677358 -0.004 0.795881 0.99996 0.36706 1.35399 c -0.340538 0.28114 -0.948956 0.01 -0.998638 -0.50967 c -0.05025 -0.52507 0.49364 -0.7751 0.631578 -0.84432 c 2.02257 -1.01503 5.26759 -0.66963 6.23474 0.50537"];
      break;
  }
};

NakaneMin = function() { NakaneChar.call(this, "NakaneMin", "まん", "CR1ER7", "C", "ER", "black", true, p(0.6, -0.4)); };
NakaneMin.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["みん"] = NakaneMin;
NakaneMin.prototype.setPaths = NakaneMan.prototype.setPaths;

NakaneMun = function() { NakaneChar.call(this, "NakaneMun", "むん", "CR1ER17", "C", "ER", "black", false, p(0.6, 0.2)); };
NakaneMun.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["むん"] = NakaneMun;

NakaneMun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.2415, 0.5293);
      this.paths = ["m 0 0 c 0.919325 0.77026 0.397714 1.50702 -0.08577 1.50476 c -0.263009 -0.001 -0.576846 -0.16077 -0.556324 -0.70913 c 0.01193 -0.31884 0.497076 -0.70345 0.642097 -0.79563 c 5.39847 -3.43123 12.7099 -1.3067 16.2415 0.5293"];
      break;
  }
};

NakaneMun.prototype.setPathsExtra = function() {
  switch (this.getPrevName()) {
    case "NakaneSu":
      this.pathsExtra = [];
      return;
  }

  switch (this.getNextName()) {
    case "NakaneSu":
      this.pathsExtra = ["m 17,-2 v0.1"];
      break;

    default:
      this.pathsExtra = ["m 8.5,-4 v0.1"];
      break;
  }
};

NakaneMen = function() { NakaneChar.call(this, "NakaneMen", "めん", "CR1ER17", "C", "ER", "black", true, p(0.6, 0.2)); };
NakaneMen.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["めん"] = NakaneMen;

NakaneMen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.2415, 0.5293);
      this.paths = ["m 0 0 c 0.91932 0.77026 0.39771 1.50702 -0.0858 1.50476 c -0.26301 -0.001 -0.57685 -0.16077 -0.55633 -0.70913 c 0.0119 -0.31884 0.49708 -0.70345 0.6421 -0.79563 c 5.39847 -3.43123 12.7099 -1.3067 16.2415 0.5293"];
      break;
  }
};

NakaneMon = function() { NakaneChar.call(this, "NakaneMon", "もん", "CR1ER17", "C", "ER", "black", false, p(0.6, 0.2)); };
NakaneMon.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["もん"] = NakaneMon;

NakaneMon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.2415, 0.5293);
      this.paths = ["m 0 0 c 0.91932 0.77026 0.39771 1.50702 -0.0858 1.50476 c -0.26301 -0.001 -0.57685 -0.16077 -0.55633 -0.70914 c 0.0119 -0.31883 0.49708 -0.70344 0.6421 -0.79562 c 5.39847 -3.43123 12.7099 -1.3067 16.2415 0.5293"];
      break;
  }
};

SvsdHan = function() { SvsdChar.call(this, "SvsdHan", "はん", "NEL20CL1", "NEL", "CL", "black", false, p(0.0, 5.3)); };
SvsdHan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["はん"] = SvsdHan;

SvsdHan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.3611, -8.90272);
      this.paths = ["m 0 0 c 6.97665 0 12.4535 -4.55648 16.3611 -8.90272 c 0.182811 -0.20333 0.493318 -0.515184 0.624212 -0.841307 c 0.321764 -0.801678 -0.37241 -0.870587 -0.683443 -0.742481 c -0.488487 0.201195 -0.371155 1.22447 0.05923 1.58379"];
      break;
  }
};

SvsdYan = function() { SvsdChar.call(this, "SvsdYan", "やん", "NE20CL1", "NE", "CL", "black", false, p(0.0, 5.5)); };
SvsdYan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["やん"] = SvsdYan;

SvsdYan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.2135, -9.3962);
      this.paths = ["m 0 0 l 16.2135 -9.3962 c 0 0 0.88269 -0.36606 0.94421 -0.76682 c 0.0506 -0.32954 -0.18911 -0.6722 -0.55149 -0.83442 c -0.64959 -0.2908 -0.71368 0.77775 -0.39272 1.60124"];
      break;
  }
};

SvsdMan = function() { SvsdChar.call(this, "SvsdMan", "まん", "NER20CSR1", "NER", "CSR", "black", false, p(0.0, 5.0)); };
SvsdMan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["まん"] = SvsdMan;

SvsdMan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(15.8911, -9.90031);
      this.paths = ["m 0 0 c 4.22756 -5.97217 9.94158 -9.27106 15.8911 -9.90031 c 0.254669 -0.026935 0.869645 -0.153399 1.20215 0.071506 c 0.268193 0.181405 0.44046 0.725224 0.006 1.09656 c -0.250452 0.214082 -0.702147 -0.00233 -1.20818 -1.16807"];
      break;
  }
};

SvsdRan = function() { SvsdChar.call(this, "SvsdRan", "らん", "NER5CR1", "NER", "CR", "black", false, p(0.0, 1.3)); };
SvsdRan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["らん"] = SvsdRan;

SvsdRan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.91706, -2.39127);
      this.paths = ["m 0 0 c 0.424405 -0.745106 1.37749 -1.99163 2.91706 -2.39127 c 0.253889 -0.065903 1.02184 -0.279378 1.27646 0.033091 c 0.280484 0.344205 0.079119 0.80274 -0.103291 0.86918 c -0.3015 0.109817 -0.857271 0.157655 -1.17317 -0.902271"];
      break;
  }
};

SvsdWan = function() { SvsdChar.call(this, "SvsdWan", "わん", "USL5CL1", "USL", "CL", "black", false, p(0.0, -1.3)); };
SvsdWan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["わん"] = SvsdWan;

SvsdWan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.18945, 1.17722);
      this.paths = ["m 0 0 c 0.019224 1.2306 0.514416 2.96936 1.65244 2.87958 c 0.792399 -0.062512 1.75498 -0.765177 2.53701 -1.70236 c 0.186631 -0.223656 0.608193 -0.679604 0.502827 -1.04994 c -0.143939 -0.505904 -0.707602 -0.522905 -0.937314 -0.290095 c -0.329804 0.334252 0.06131 0.915598 0.434487 1.34003"];
      break;
  }
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

WasedaMasu = function() { WasedaChar.call(this, "WasedaMasu", "ます", "E24F", "E", "EF", "black"); };
WasedaMasu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ます"] = WasedaMasu;

WasedaMasu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(24 + 2, 0);
      this.paths = ["m0,0h24"];
      break;
  }
};


WasedaMashite = function() { WasedaChar.call(this, "WasedaMashite", "まして", "NE24F", "NE", "NEF", "black"); };
WasedaMashite.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["まして"] = WasedaMashite;

WasedaMashite.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(21.298, -14.9129);
      this.paths = ["m0,0l19.6597,-13.7658"];
      break;
  }
};



SvsdHin = function() { SvsdChar.call(this, "SvsdHin", "ひん", "SWL20CL1", "SWL", "CL", "black", false, p(10.2, -8.7)); };
SvsdHin.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ひん"] = SvsdHin;

SvsdHin.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-10.2188, 15.933);
      this.paths = ["m 0 0 c -4.18081 3.87572 -10.3427 10.9255 -10.2188 15.933 c 0.0067 0.270317 0.03095 0.850035 0.228187 1.18752 c 0.221407 0.378845 0.834008 0.266681 0.949693 -0.02814 c 0.201238 -0.512846 -0.161024 -1.22369 -1.17788 -1.15938"];
      break;
  }
};

SvsdMin = function() { SvsdChar.call(this, "SvsdMin", "みん", "SWR20CR1", "SWR", "CR", "black", false, p(10.5, -8.6)); };
SvsdMin.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["みん"] = SvsdMin;

SvsdMin.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-8.89701, 16.5952);
      this.paths = ["m 0 0 c 1.657 4.50436 -3.00208 12.4314 -8.89701 16.5952 c -0.210968 0.149013 -0.628873 0.562525 -0.984401 0.577932 c -0.394648 0.0171 -0.692651 -0.3985 -0.571155 -0.736425 c 0.179337 -0.498805 0.940511 -0.481281 1.55556 0.158493"];
      break;
  }
};

SvsdRin = function() { SvsdChar.call(this, "SvsdRin", "りん", "SWR5CR1", "SWR", "CR", "black", false, p(2.8, -2.1)); };
SvsdRin.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["りん"] = SvsdRin;

SvsdRin.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-1.34017, 3.77724);
      this.paths = ["m 0 0 c 0.996947 1.44963 0.140282 2.87551 -1.34017 3.77724 c -0.226353 0.13787 -0.628375 0.456437 -1.00653 0.43555 c -0.570243 -0.031497 -0.5333 -0.770792 -0.306824 -0.965818 c 0.40724 -0.350687 0.879387 -0.075527 1.31336 0.530268"];
      break;
  }
};

SvsdHun = function() { SvsdChar.call(this, "SvsdHun", "ふん", "SEL20CL1", "SEL", "CL", "black", false, p(0.0, -5.1)); };
SvsdHun.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ふん"] = SvsdHun;

SvsdHun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(15.7434, 10.1771);
      this.paths = ["m 0 0 c 0.510129 6.75338 9.63454 10.4642 15.7434 10.1771 c 0.335215 -0.01575 1.07906 0.04946 1.40163 -0.237273 c 0.267763 -0.238011 0.272161 -0.684509 -0.05429 -0.910193 c -0.525879 -0.363549 -0.997442 0.217155 -1.34734 1.14747"];
      break;
  }
};

SvsdMun = function() { SvsdChar.call(this, "SvsdMun", "むん", "SER20CR1", "SER", "CR", "black", false, p(0.0, -5.1)); };
SvsdMun.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["むん"] = SvsdMun;

SvsdMun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17.058, 8.65728);
      this.paths = ["m 0 0 c 5.63994 -0.254018 15.2682 2.76062 17.058 8.65728 c 0.06841 0.22538 0.363997 1.19993 -0.275106 1.41822 c -0.65533 0.223835 -0.938707 -0.184935 -0.811925 -0.53324 c 0.124193 -0.341193 0.345657 -0.614315 1.08703 -0.884978"];
      break;
  }
};

SvsdYun = function() { SvsdChar.call(this, "SvsdYun", "ゆん", "SE20CL1", "SE", "CL", "black", false, p(0.0, -4.9)); };
SvsdYun.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ゆん"] = SvsdYun;

SvsdYun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.1132, 9.31459);
      this.paths = ["m 0 0 l 16.1132 9.31498 c 0.300429 0.18732 0.855586 0.6616 1.22842 0.5314 c 0.251425 -0.0878 0.463564 -0.31919 0.523453 -0.60359 c 0.10794 -0.51259 -0.828177 -0.8515 -1.75187 0.0718"];
      break;
  }
};

SvsdRun = function() { SvsdChar.call(this, "SvsdRun", "るん", "SER5CR1", "SER", "CR", "black", false, p(0.0, -1.3)); };
SvsdRun.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["るん"] = SvsdRun;

SvsdRun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.73751, 0.905521);
      this.paths = ["m 0 0 c 1.01434 0.053204 2.80178 0.124579 3.73751 0.905521 c 0.263101 0.219578 0.483154 0.489687 0.551187 0.84239 c 0.092554 0.479826 -0.188286 0.776154 -0.540888 0.787693 c -0.500532 0.016381 -0.990173 -0.970206 -0.010299 -1.63008"];
      break;
  }
};

ShugiinKar = function() { ShugiinChar.call(this, "ShugiinKar", "かR", "E17F", "E", "EF", "black", false, p(0.0, 0.0)); };
ShugiinKar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["かＲ"] = ShugiinKar;
ShugiinChar.dict["かｒ"] = ShugiinKar;
ShugiinChar.dict["がＲ"] = ShugiinKar;
ShugiinChar.dict["がｒ"] = ShugiinKar;

ShugiinKar.prototype.setPaths = function() {
  this.paths = ["m 0 0 h 17"];

  switch (this.getNextName()) {
    case "ShugiinWa":
      this.dp = p(18, 1.5);
      return;
  }

  switch (this.getNextHeadType()) {
    default:
      this.dp = p(19, 0);
      break;
  }
};

ShugiinSar = function() { ShugiinChar.call(this, "ShugiinSar", "さR", "SR17F", "SR", "SRF", "black", false, p(0.0, -8.5)); };
ShugiinSar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["さＲ"] = ShugiinSar;
ShugiinChar.dict["ざＲ"] = ShugiinSar;
ShugiinChar.dict["さｒ"] = ShugiinSar;
ShugiinChar.dict["ざｒ"] = ShugiinSar;

ShugiinSar.prototype.setPaths = function() {
  this.paths = ["m 0 0 c 2.83221 4.16396 3.99058 11.519 0 17"];

  switch (this.getNextName()) {
    case "ShugiinNomo":
      this.dp = p(0 + 1, 17 + 1.41);
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0 - 1.41, 17 + 1.41);
      break;
  }
};

ShugiinTar = function() { ShugiinChar.call(this, "ShugiinTar", "たR", "S17F", "S", "SF", "black", false, p(0.0, -8.5)); };
ShugiinTar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["たＲ"] = ShugiinTar;
ShugiinChar.dict["だＲ"] = ShugiinTar;
ShugiinChar.dict["たｒ"] = ShugiinTar;
ShugiinChar.dict["だｒ"] = ShugiinTar;

ShugiinTar.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 17 + 2);
      this.paths = ["m 0 0 v 17"];
      break;
  }
};

ShugiinNara = function() { ShugiinChar.call(this, "ShugiinNara", "なら", "EL17F", "EL", "ELF", "black", false, p(0.0, -1.3)); };
ShugiinNara.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["なら"] = ShugiinNara;
ShugiinChar.dict["なり"] = ShugiinNara;
ShugiinChar.dict["なれ"] = ShugiinNara;

ShugiinNara.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17 + 1.41, 0 - 1.41);
      this.paths = ["m 0 0 c 4.57905 3.27522 12.8026 3.87755 17 0"];
      break;
  }
};

ShugiinNaru = function() { ShugiinChar.call(this, "ShugiinNaru", "なる", "EL7UEL3", "EL", "WL", "black", false, p(0.0, -1.0)); };
ShugiinNaru.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["なる"] = ShugiinNaru;

ShugiinNaru.prototype.setPaths = function() {
  this.paths = ["m 0 0 c 2.22518 1.89138 5.80144 3.26999 8.65419 1.85154 c 2.67376 -1.32947 0.511931 -3.22497 -1.65845 -1.60724"];
  switch (this.getNextName()) {
    case "ShugiinNo":
      this.dp = p(6.99574 + 0.8, 0.2443 + 3.5);
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.99574, 0.2443 + 1.2);
      this.paths = ["m 0 0 c 2.22518 1.89138 5.80144 3.26999 8.65419 1.85154 c 2.67376 -1.32947 0.511931 -3.22497 -1.65845 -1.60724"];
      break;
  }
};

ShugiinHar = function() { ShugiinChar.call(this, "ShugiinHar", "はR", "SEL17F", "SEL", "SELF", "black", false, p(0.0, -6.0)); };
ShugiinHar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["はＲ"] = ShugiinHar;
ShugiinChar.dict["ぱＲ"] = ShugiinHar;
ShugiinChar.dict["ばＲ"] = ShugiinHar;
ShugiinChar.dict["はｒ"] = ShugiinHar;
ShugiinChar.dict["ぱｒ"] = ShugiinHar;
ShugiinChar.dict["ばｒ"] = ShugiinHar;

ShugiinHar.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(12.0208 + 2, 12.0208);
      this.paths = ["m 0 0 c 0.917413 5.61703 6.76627 11.8076 12.0208 12.0208"];
      break;
  }
};

ShugiinMar = function() { ShugiinChar.call(this, "ShugiinMar", "まR", "ER17F", "ER", "ERF", "black", false, p(0.0, 1.2)); };
ShugiinMar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["まＲ"] = ShugiinMar;
ShugiinChar.dict["まｒ"] = ShugiinMar;

ShugiinMar.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(17 + 1.41, 0 + 1.41);
      this.paths = ["m 0 0 c 5.72582 -3.66844 13.317 -2.7792 17 0"];
      break;
  }
};

ShugiinYar = function() { ShugiinChar.call(this, "ShugiinYar", "やR", "NER17F", "NER", "NERF", "black", false, p(0.0, 6.0)); };
ShugiinYar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["やＲ"] = ShugiinYar;
ShugiinChar.dict["やｒ"] = ShugiinYar;

ShugiinYar.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(12.0208 + 2, -12.0208);
      this.paths = ["m 0 0 c 1.55678 -7.43949 6.55035 -11.0499 12.0208 -12.0208"];
      break;
  }
};

ShugiinKakar = function() { ShugiinChar.call(this, "ShugiinKakar", "かかＲ", "UWR3E17", "WR", "E", "black", false, p(1.2, 0.5)); };
ShugiinKakar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["かかＲ"] = ShugiinKakar;
ShugiinChar.dict["がかＲ"] = ShugiinKakar;
ShugiinChar.dict["かかｒ"] = ShugiinKakar;
ShugiinChar.dict["がかｒ"] = ShugiinKakar;

ShugiinKakar.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(15.4715 + 2, -1.01716);
      this.paths = ["m 0 0 c -0.31816 0 -0.87001 -0.0069 -1.0943 -0.266078 c -0.21888 -0.252902 -0.12138 -0.758178 0.45576 -0.758178 l 16.1101 0.0071"];
      break;
  }
};

ShugiinSakar = function() { ShugiinChar.call(this, "ShugiinSakar", "さかＲ", "UNWR3SR17F", "NWR", "SRF", "black", false, p(0.2, -6.4)); };
ShugiinSakar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["さかＲ"] = ShugiinSakar;
ShugiinChar.dict["ざかＲ"] = ShugiinSakar;
ShugiinChar.dict["さかｒ"] = ShugiinSakar;
ShugiinChar.dict["ざかｒ"] = ShugiinSakar;

ShugiinSakar.prototype.setPaths = function() {
  this.paths = ["m 0 0 c -0.30944 -0.487973 -0.14596 -1.61095 0.18774 -1.78436 c 0.33369 -0.173411 0.79422 0.15884 1.04531 0.38468 c 4.0449 4.22905 3.21006 13.1067 0.32927 16.2432"];

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.56232 - 1.41, 14.8435 + 1.41);
      break;
  }
};

ShugiinMakar = function() { ShugiinChar.call(this, "ShugiinMakar", "まかＲ", "UWR3ER17F", "WR", "ERF", "black", false, p(1.6, 1.9)); };
ShugiinMakar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["まかＲ"] = ShugiinMakar;
ShugiinChar.dict["まかｒ"] = ShugiinMakar;
ShugiinChar.dict["まがＲ"] = ShugiinMakar;
ShugiinChar.dict["まがｒ"] = ShugiinMakar;

ShugiinMakar.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(15.2145 + 1.41, -1.29632 + 1.41);
      this.paths = ["m 0 0 c -0.31787 0 -0.50771 -0.01553 -1.07901 -0.07418 c -0.38476 -0.03949 -0.89454 -0.497822 -0.23591 -1.0919 c 5.59722 -5.04859 15.3846 -1.77859 16.5294 -0.130236"];
      break;
  }
};

ShugiinNakar = function() { ShugiinChar.call(this, "ShugiinNakar", "なかＲ", "UWL3EL17F", "WL", "ELF", "black", false, p(1.8, -1.7)); };
ShugiinNakar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["なかＲ"] = ShugiinNakar;
ShugiinChar.dict["なかｒ"] = ShugiinNakar;

ShugiinNakar.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.9747 + 1.41, 0.87494 - 1.41);
      this.paths = ["m 0 0 c -0.722481 -0.2477 -1.36714 -0.0678 -1.56002 0.1063 c -0.249188 0.22487 -0.317813 0.49088 0.165846 0.98835 c 3.28908 3.38299 12.6816 3.30053 16.3689 -0.21971"];
      break;
  }
};

ShugiinNagar = function() { ShugiinChar.call(this, "ShugiinNagar", "ながＲ", "UWL3NEL17F", "SWL", "NELF", "black", false, p(1.0, 2.5)); };
ShugiinNagar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["ながＲ"] = ShugiinNagar;
ShugiinChar.dict["ながｒ"] = ShugiinNagar;
ShugiinChar.dict["ながら"] = ShugiinNagar;

ShugiinNagar.prototype.setPaths = function() {
  this.paths = ["m 0 0 c -0.523293 0.20932 -1.09054 0.92025 -0.920988 1.47434 c 0.115139 0.37626 0.590393 0.45457 1.07858 0.47974 c 4.86827 0.25094 12.5864 -3.51756 13.7416 -8.8564"];

  switch (this.getNextName()) {
    case "ShugiinWa":
      this.dp = p(13.8992 + 3, -6.90232 - 1);
      return;
  }

  switch (this.getNextHeadType()) {
    default:
      this.dp = p(13.8992 + 0.333599, -6.90232 - 2.00187);
      break;
  }
};

ShugiinHanar = function() { ShugiinChar.call(this, "ShugiinHanar", "はなＲ", "UNL3SEL17", "NWL", "SEL", "black", false, p(2.4, -4.4)); };
ShugiinHanar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["はなＲ"] = ShugiinHanar;
ShugiinChar.dict["はなｒ"] = ShugiinHanar;
ShugiinChar.dict["ばなＲ"] = ShugiinHanar;
ShugiinChar.dict["ばなｒ"] = ShugiinHanar;
ShugiinChar.dict["ぱなＲ"] = ShugiinHanar;
ShugiinChar.dict["ぱなｒ"] = ShugiinHanar;

ShugiinHanar.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(11.3105 + 1.93713, 9.62821 - 0.49521);
      this.paths = ["m 0 0 c -0.400771 -0.85499 -1.09844 -1.09878 -1.76871 -0.83963 c -0.670269 0.25915 -0.725987 1.31461 -0.610011 1.80676 c 1.19175 5.05718 7.9245 9.79156 13.6892 8.66108"];
      break;
  }
};

ShugiinHakar = function() { ShugiinChar.call(this, "ShugiinHakar", "はかＲ", "SEL7E17F", "SEL", "EF", "black", false, p(0.0, -2.7)); };
ShugiinHakar.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["はかＲ"] = ShugiinHakar;
ShugiinChar.dict["はかｒ"] = ShugiinHakar;
ShugiinChar.dict["〜ばかり"] = ShugiinHakar;
ShugiinChar.dict["ばかり"] = ShugiinHakar;

ShugiinHakar.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(19.5806 + 2, 5.34209);
      this.paths = ["m 0 0 c 0.063 3.58498 2.4218 5.38939 4.4641 5.38939 c 4.64828 0 15.1165 -0.0473 15.1165 -0.0473"];
      break;
  }
};

SvsdHen = function() { SvsdChar.call(this, "SvsdHen", "へん", "UWL5CL1", "SWL", "CL", "black", false, p(2.8, -2.5)); };
SvsdHen.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["へん"] = SvsdHen;

SvsdHen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-1.54649, 4.98254);
      this.paths = ["m 0 0 c -1.54618 0.81314 -3.06762 1.9439 -2.80689 3.38677 c 0.119989 0.664008 0.555543 1.31787 1.2604 1.59577 c 0.275956 0.108797 0.952742 0.196911 1.30922 -0.058803 c 0.388983 -0.27903 0.283244 -0.975982 -0.114738 -0.995982 c -0.642244 -0.032275 -0.906897 0.646813 -1.19448 1.05478"];
      break;
  }
};

SvsdMen = function() { SvsdChar.call(this, "SvsdMen", "めん", "UER5CR1", "SER", "CR", "black", false, p(0.4, -2.4)); };
SvsdMen.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["めん"] = SvsdMen;

SvsdMen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.08915, 4.37873);
      this.paths = ["m 0 0 c 1.96459 0.169174 2.87771 0.486324 3.07622 1.62962 c 0.189968 1.09408 -0.924359 2.07061 -1.98707 2.74911 c -0.226992 0.144924 -0.678897 0.511886 -1.06051 0.463467 c -0.492592 -0.0625 -0.558086 -0.763341 -0.280114 -1.01928 c 0.277972 -0.255938 0.77527 -0.10462 1.34062 0.555812"];
      break;
  }
};

SvsdRen = function() { SvsdChar.call(this, "SvsdRen", "れん", "SR5CR1", "SR", "CR", "black", false, p(0.8, -2.5)); };
SvsdRen.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["れん"] = SvsdRen;

SvsdRen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0.629899, 3.88704);
      this.paths = ["m 0 0 c 0.824764 1.4963 0.997332 2.8051 0.629899 3.88704 c -0.084408 0.248545 -0.420098 1.01408 -0.785919 1.01533 c -0.529194 0.00181 -0.799028 -0.731561 -0.572617 -1.00307 c 0.270397 -0.324255 1.07722 -0.130765 1.35854 -0.012258"];
      break;
  }
};

SvsdHon = function() { SvsdChar.call(this, "SvsdHon", "ほん", "EL20CL1", "EL", "CL", "black", false, p(0.0, -0.8)); };
SvsdHon.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ほん"] = SvsdHon;

SvsdHon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(18.6888, 0.535348);
      this.paths = ["m 0 0 c 4.83307 3.73527 12.0943 3.08477 18.6888 0.535348 c 0.265164 -0.102511 0.979122 -0.305347 1.16089 -0.643284 c 0.238258 -0.442975 -0.252649 -0.957274 -0.656664 -0.803045 c -0.493835 0.188516 -0.503113 0.767966 -0.504221 1.44633"];
      break;
  }
};

SvsdMon = function() { SvsdChar.call(this, "SvsdMon", "もん", "ER20CR1", "ER", "CR", "black", false, p(0.0, 1.0)); };
SvsdMon.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["もん"] = SvsdMon;

SvsdMon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(18.7128, -1.12334);
      this.paths = ["m 0 0 c 5.99742 -2.43474 14.4918 -3.85161 18.7128 -1.12334 c 0.27895 0.180305 0.773613 0.513951 0.937816 0.892871 c 0.26892 0.620568 -0.275207 0.869237 -0.498682 0.835661 c -0.424906 -0.063839 -0.591755 -1.08493 -0.439134 -1.72853"];
      break;
  }
};

SvsdRon = function() { SvsdChar.call(this, "SvsdRon", "ろん", "ER5CR1", "ER", "CR", "black", false, p(0.0, -0.0)); };
SvsdRon.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ろん"] = SvsdRon;

SvsdRon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.63185, -0.685131);
      this.paths = ["m 0 0 c 1.20999 -0.57233 2.4904 -0.935049 3.63185 -0.685131 c 0.319967 0.070056 1.14508 0.201426 1.25349 0.628533 c 0.027486 0.108287 0.060225 0.876497 -0.610666 0.862486 c -0.413469 -0.008635 -0.607159 -0.690937 -0.642821 -1.49102"];
      break;
  }
};

NakaneYan = function() { NakaneChar.call(this, "NakaneYan", "やん", "CL1SWL7", "C", "SWL", "black", false, p(4.9, -1.5)); };
NakaneYan.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["やん"] = NakaneYan;

NakaneYan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-4.86827, 3.22952);
      this.paths = ["m 0 0 c -0.256385 0.86587 0.26101 0.9851 0.569911 1.03473 c 0.332442 0.0534 0.978479 -0.31504 0.77237 -0.81443 c -0.271949 -0.65891 -1.11355 -0.28573 -1.34228 -0.2203 c -1.7664 0.50532 -3.43606 1.4845 -4.86827 3.22952"];
      break;
  }
};

NakaneYun = function() { NakaneChar.call(this, "NakaneYun", "ゆん", "CL1SWL7", "C", "SWL", "black", true, p(4.9, -1.5)); };
NakaneYun.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ゆん"] = NakaneYun;
NakaneYun.prototype.setPaths = NakaneYan.prototype.setPaths;

NakaneYon = function() { NakaneChar.call(this, "NakaneYon", "よん", "CL1SWL17", "C", "SWL", "black", false, p(13.1, -3.9)); };
NakaneYon.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["よん"] = NakaneYon;

NakaneYon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-13.079, 8.10161);
      this.paths = ["m 0 0 c 0.3831 0.48841 0.88696 1.18541 1.46518 0.94893 c 0.39003 -0.15952 0.37458 -0.91954 0.0481 -1.112 c -0.35235 -0.20771 -1.1863 0.0736 -1.51328 0.16302 c -4.02247 1.10358 -9.70627 3.57109 -13.079 8.10166"];
      break;
  }
};

NakaneWan = function() { NakaneChar.call(this, "NakaneWan", "わん", "CL1SWL17", "C", "SWL", "black", true, p(13.1, -3.9)); };
NakaneWan.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["わん"] = NakaneWan;

NakaneWan.prototype.setPaths = NakaneYon.prototype.setPaths;

NakaneRan = function() { NakaneChar.call(this, "NakaneRan", "らん", "CR1SWR7", "C", "SWR", "black", false, p(4.1, -1.4)); };
NakaneRan.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["らん"] = NakaneRan;

NakaneRan.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-4.14535, 4.2042);
      this.paths = ["m 0 0 c -1.37742 -0.36217 -1.00855 -1.07763 -0.810247 -1.22312 c 0.31837 -0.23359 0.712645 -0.21233 0.976507 0.12039 c 0.276609 0.34878 -0.07959 0.89788 -0.16626 1.10273 c -0.701331 1.65774 -2.20793 3.26526 -4.14535 4.2042"];
      break;
  }
};

NakaneRin = function() { NakaneChar.call(this, "NakaneRin", "りん", "CR1SWR7", "C", "SWR", "black", true, p(4.1, -1.4)); };
NakaneRin.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["りん"] = NakaneRin;

NakaneRin.prototype.setPaths = NakaneRan.prototype.setPaths;

NakaneRun = function() { NakaneChar.call(this, "NakaneRun", "るん", "CR1CWR17", "C", "CWR", "black", false, p(12.4, -4.3)); };
NakaneRun.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["るん"] = NakaneRun;

NakaneRun.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-12.4485, 9.9186);
      this.paths = ["m 0 0 c -1.19954 -0.34621 -0.979031 -1.09474 -0.66258 -1.26304 c 0.351572 -0.18698 0.816185 -0.16868 0.976339 0.0257 c 0.332736 0.40387 -0.203821 1.05051 -0.313759 1.23733 c -2.19718 3.73386 -5.20467 7.29024 -12.4485 9.91861"];
      break;
  }
};

NakaneRun.prototype.setPathsExtra = function() {
  switch (this.getPrevName()) {
    case "NakaneSu":
      this.pathsExtra = [];
      break;
      
    default:
      this.pathsExtra = ["m -6,4 v0.1"];
      break;
  }
};

NakaneRen = function() { NakaneChar.call(this, "NakaneRen", "れん", "CR1CWR17", "C", "CWR", "black", true, p(12.4, -4.3)); };
NakaneRen.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["れん"] = NakaneRen;
NakaneRen.prototype.setPaths = NakaneRun.prototype.setPaths;

NakaneRon = function() { NakaneChar.call(this, "NakaneRon", "ろん", "CR1CWR17", "C", "CWR", "black", false, p(12.4, -4.3)); };
NakaneRon.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ろん"] = NakaneRon;
NakaneRon.prototype.setPaths = NakaneRun.prototype.setPaths;

NakaneNiJoshi = function() { NakaneChar.call(this, "NakaneNiJoshi", "〜に", "USWL3", "SWL", "NEL", "black", true, p(1.6, -1.2)); };
NakaneNiJoshi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["〜に"] = NakaneNiJoshi;

NakaneNiJoshi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0.99842, 1.11823);
      this.paths = ["m 0 0 c 0 0 -2.08429 1.64949 -1.43236 2.30829 c 0.65117 0.65805 2.43078 -1.19006 2.43078 -1.19006"];
      break;
  }
};

NakaneKurikaeshi = function() { NakaneChar.call(this, "NakaneKurikaeshi", "々", "TS2", "T", "S", "black", true, p(0.0, -1)); };
NakaneKurikaeshi.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["々"] = NakaneKurikaeshi;

NakaneKurikaeshi.prototype.setPaths = function() {
  switch (this.getPrevTailType()) {
    case "S":
      this.dp = p(1, 1);
      this.paths = ["m1,-1v2"];
      break;
      
    default:
      this.dp = p(0, 1);
      this.paths = ["m0,-1v2"];
      break;
  }
};

WasedaHi = function() { WasedaChar.call(this, "WasedaHi", "ひ", "SEL8CL1", "SEL", "CL", "black", false, p(0.0, -2.9)); };
WasedaHi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ひ"] = WasedaHi;

WasedaHi.prototype.setPaths = function() {
  switch (this.getNextName()) {
    case "WasedaWa":
      this.dp = p(2.58596, 5.38593);
      this.paths = ["m 0 0 c 0 3.707 1.0848 5.646 4.411 5.646 c 0.3891 0 0.527567 -0.25784 0.446365 -0.45584 c -0.269576 -0.6573 -1.74425 0.0445 -2.27141 0.19577"];
      return;
  }

  switch (this.getNextModel()) {
    case "EL16":
    case "EL16CL1":
    case "EL16CL8":
      this.dp = p(5.0592, 5.35871);
      this.paths = ["m 0 0 c 0 3.7202 1.0887 5.667 4.4275 5.667 c 0.598501 0 0.776526 -0.511535 0.776526 -0.725935 c 0 -0.3932 -0.790948 -0.849394 -1.26847 -0.192815 c -0.267796 0.368214 0.461641 0.457555 1.12364 0.610455"];
      return;

    case "EL8":
    case "EL8CL1":
    case "EL8CL4":
      this.dp = p(4.92477, 5.45748);
      this.paths = ["m 0 0 c 0 3.7202 1.08867 5.6669 4.42754 5.6669 c 0.649137 0 0.63491 -0.581588 0.63491 -0.796088 c 0 -0.493789 -0.790957 -0.595672 -1.09393 -0.263239 c -0.28726 0.315189 0.325161 0.644908 0.956251 0.849908"];
      return;

    case "NEL16":
    case "NEL16CL1":
    case "NEL16CL8":
      this.dp = p(5.48531, 4.76323);
      this.paths = ["m 0 0 c 0 3.7202 1.0885 5.667 4.4275 5.667 c 0.3901 0 0.730452 -0.101222 0.905224 -0.436174 c 0.400375 -0.767321 -0.06285 -0.978685 -0.437432 -1.07334 c -0.372691 -0.09418 -1.03549 0.377026 -0.890322 0.732968 c 0.187033 0.458591 1.07783 0.144176 1.48034 -0.127224"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(5.45112, 4.90528);
      this.paths = ["m 0 0 c 0 3.7201 1.18678 5.5886 4.52557 5.5886 c 0.5132 0 0.742235 -0.09266 0.88951 -0.379396 c 0.151419 -0.294803 0.074323 -0.810136 -0.21567 -0.970575 c -0.319428 -0.176723 -1.04426 0.01365 -1.03193 0.366745 c 0.01743 0.4992 0.748749 0.299907 1.28364 0.299907"];
      break;

    default:
      this.dp = p(3.3474, 5.6955);
      this.paths = ["m 0 0 c 0 3.7342 0.9929 5.765 4.3442 5.765 c 0.3919 0 0.585112 -0.476203 0.549706 -0.688227 c -0.0558 -0.334177 -0.321131 -0.651399 -0.692405 -0.386917 c -0.387966 0.276374 -0.621814 0.700078 -0.854101 1.00564"];
      break;
  }
};

WasedaHa = function() { WasedaChar.call(this, "WasedaHa", "は", "SEL8", "SEL", "SEL", "black", false, p(0.0, -3.0)); };
WasedaHa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["は"] = WasedaHa;

WasedaHa.prototype.setPaths = function() {

  switch (this.getNextHeadType()) {
    case "E":
    case "SEL":
    case "EL":
    case "SE":
      this.dp = p(4.18711, 4.5799);
      this.paths = ["m 0 0 c 0 5.4461 2.79955 6.9832 4.18711 4.5799"];
      break;

    case "NEL":
      this.dp = p(4.5, 6.125);
      this.paths = ["m 0 0 c 0 2.082 2.6089 6.125 4.5 6.125"];
      break;

    default:
      this.dp = p(4.18711, 5.9798);
      this.paths = ["m 0 0 c 0 3.7764 0.797901 5.9798 4.18711 5.9798"];
      break;
  }
};

WasedaHu = function() { WasedaChar.call(this, "WasedaHu", "ふ", "SEL8CL4", "SEL", "CL", "black", false, p(0.0, -2.9)); };
WasedaHu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ふ"] = WasedaHu;

WasedaHu.prototype.setPaths = function() {
  switch (this.getNextName()) {
    case "WasedaWa":
      this.dp = p(0.92649, 4.62699);
      this.paths = ["m 0 0 c 0 1.867 0.307 3.31 0.765 4.3381 c 0.493 1.0114 1.382 1.4475 2.722 1.4475 c 0.628 0 1.34865 -0.166261 1.32745 -0.660206 c -0.0512 -1.19284 -2.61931 -0.871696 -3.88796 -0.498401"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "EL":
      this.dp = p(0.349, 3.1511);
      this.paths = ["m 0 0 c 0 1.867 0.354 3.3083 0.687 4.3331 c 0.367 1.0094 0.996 1.4914 1.979 1.4914 c 0.46 0 0.855 -0.0783 0.855 -0.4361 c 0 -0.3631 -0.654 -0.8706 -1.387 -1.2934 c -0.724 -0.4355 -1.547 -0.8066 -1.785 -0.9439"];
      break;

    default:
      this.dp = p(0.6103, 3.8936);
      this.paths = ["m 0 0 c 0 1.8741 0.2905 3.3309 0.7678 4.3545 c 0.4951 1.0151 1.3611 1.5004 2.7067 1.5004 c 0.6304 0 1.3022 -0.1748 1.3022 -0.7218 c 0 -0.42 -0.7718 -0.8055 -1.6955 -1.0188 c -0.9158 -0.2453 -2.0018 -0.2207 -2.4709 -0.2207"];
      break;
  }
};

WasedaHe = function() { WasedaChar.call(this, "WasedaHe", "へ", "SEL16CL1", "SEL", "CL", "black", false, p(0.0, -7.0)); };
WasedaHe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["へ"] = WasedaHe;

WasedaHe.prototype.setPaths = function() {
  switch (this.getNextModel()) {
    case "NEL8":
    case "NEL8CL1":
      this.dp = p(8.54163, 13.034);
      this.paths = ["m 0 0 c 0 4.132 0.5073 7.8422 1.6478 10.4039 c 1.1851 2.5413 4.1962 4.1966 6.4002 3.261 c 0.584413 -0.236032 0.5781 -0.7769 0.3506 -1.0789 c -0.309355 -0.433043 -0.885546 -0.314146 -1.29955 0.235154 c -0.4077 0.5411 0.45018 0.785831 1.44258 0.212831"];
      return;

    case "NEL16":
    case "NEL16CL1":
    case "NEL16CL8":
      this.dp = p(8.55068, 13.0147);
      this.paths = ["m 0 0 c 0 4.132 0.507 7.8422 1.648 10.4039 c 1.185 2.5413 4.18778 4.17684 6.4 3.261 c 0.61545 -0.254791 0.578 -0.7769 0.351 -1.0789 c -0.39 -0.5366 -1.10954 -0.281369 -1.52354 0.268031 c -0.425 0.564 0.71122 0.81073 1.67522 0.16063"];
      return;
  }

  switch (this.getNextHeadType()) {
    default:
      this.dp = p(6.3301, 13.8713);
      this.paths = ["m 0 0 c 0 8.2946 1.4198 15.0205 7.9403 13.753 c 0.2736 -0.0482 0.3732 -0.3714 0.309 -0.5812 c -0.0492 -0.1716 -0.226 -0.3314 -0.4637 -0.2677 c -0.5609 0.1608 -1.0556 0.5674 -1.4555 0.9672"];
      break;
  }
};

WasedaHo = function() { WasedaChar.call(this, "WasedaHo", "ほ", "SEL16", "SEL", "SEL", "black", false, p(0.0, -6.9)); };
WasedaHo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ほ"] = WasedaHo;

WasedaHo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "E":
    case "SEL":
    case "EL":
    case "SE":
      this.dp = p(8, 11.1564);
      this.paths = ["m 0 0 c 0 10.815 5.0359 16.2904 8 11.1564"];
      break;

    default:
      this.dp = p(8, 13.8564);
      this.paths = ["m 0 0 c 0 7.6983 1.3202 13.8564 8 13.8564"];
      break;
  }
};

SvsdYon = function() { SvsdChar.call(this, "SvsdYon", "よん", "E20CL1", "E", "CL", "black", false, p(0.0, 0.7)); };
SvsdYon.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["よん"] = SvsdYon;

SvsdYon.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(18.6813, -0.0215);
      this.paths = ["m 0 0 l 18.6813 -0.0215 c 0.715134 -0.00082 1.29478 0.21311 1.31863 -0.90043 c 0.0053 -0.24819 -0.207752 -0.39396 -0.387815 -0.37878 c -0.52548 0.0443 -0.930817 1.27921 -0.930817 1.27921"];
      break;
  }
};

SvsdAi = function() { SvsdChar.call(this, "SvsdAi", "あい", "NE10P", "NE", "P", "black", false, p(0.0, 3.0)); };
SvsdAi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["あい"] = SvsdAi;

SvsdAi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(10.4218, -5.91702);
      this.paths = ["m 0 0 l 8.66025 -5", "m 10.4218 -6.01702 v 0.1"];
      break;

    default:
      this.dp = p(10.4218, -5.91702);
      this.paths = ["m 0,0 8.66025,-5"];
      break;
  }
};

SvsdIi = function() { SvsdChar.call(this, "SvsdIi", "いい", "SW10P", "SW", "P", "black", false, p(6.0, -5.3)); };
SvsdIi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["いい"] = SvsdIi;
SvsdChar.dict["いー"] = SvsdIi;

SvsdIi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-6.01374, 10.5161);
      this.paths = ["m 0 0 l -5 8.66022", "m -6.01374 10.4161 v 0.1"];
      break;

    default:
      this.dp = p(-6.01374, 10.5161);
      this.paths = ["m 0 0 l -5 8.66022"];
      break;
  }
};

SvsdUh = function() { SvsdChar.call(this, "SvsdUh", "うー", "SE10P", "SE", "P", "black", false, p(0.0, -3.1)); };
SvsdUh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["うー"] = SvsdUh;
SvsdChar.dict["うう"] = SvsdUh;

SvsdUh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(10.3948, 6.10142);
      this.paths = ["m 0 0 l 8.66025 5", "m 10.3948 6.00142 v 0.099999"];
      break;

    default:
      this.dp = p(10.3948, 6.10142);
      this.paths = ["m 0 0 l 8.66025 5"];
      break;
  }
};

SvsdEh = function() { SvsdChar.call(this, "SvsdEh", "えー", "S10P", "S", "P", "black", false, p(0.0, -6.0)); };
SvsdEh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["えー"] = SvsdEh;
SvsdChar.dict["えい"] = SvsdEh;
SvsdChar.dict["ええ"] = SvsdEh;

SvsdEh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(0, 12.1);
      this.paths = ["m 0 0 l 0 10", "m 0 12 v 0.1"];
      break;

    default:
      this.dp = p(0, 12.1);
      this.paths = ["m 0 0 l 0 10"];
      break;
  }
};

SvsdOh = function() { SvsdChar.call(this, "SvsdOh", "おー", "E10P", "E", "P", "black", false, p(0.0, 0.0)); };
SvsdOh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["おー"] = SvsdOh;
SvsdChar.dict["おう"] = SvsdOh;
SvsdChar.dict["おお"] = SvsdOh;

SvsdOh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(12.1, 0);
      this.paths = ["m 0 0 l 10 0", "m 12 0 h 0.1"];
      break;


    default:
      this.dp = p(12.1, 0);
      this.paths = ["m 0 0 l 10 0"];
      break;
  }
};

SvsdKai = function() { SvsdChar.call(this, "SvsdKai", "かい", "NEL10P", "NEL", "P", "black", false, p(0.0, 3.3)); };
SvsdKai.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["かい"] = SvsdKai;

SvsdKai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(9.35643, -6.84863);
      this.paths = ["m 0 0 c 3.62505 1.61147 7.71149 -2.45594 8.66026 -5", "m 9.35643 -6.94863 v 0.1"];
      break;

    default:
      this.dp = p(9.35643, -6.84863);
      this.paths = ["m 0 0 c 3.62505 1.61147 7.71149 -2.45594 8.66026 -5"];
      break;
  }
};

SvsdKii = function() { SvsdChar.call(this, "SvsdKii", "きい", "SWL10P", "SWL", "P", "black", false, p(5.1, -5.3)); };
SvsdKii.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["きい"] = SvsdKii;
SvsdChar.dict["きー"] = SvsdKii;

SvsdKii.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-4.52326, 10.6979);
      this.paths = ["m 0 0 c -1.62303 1.15063 -5.83226 4.37216 -5 8.66025", "m -4.52326 10.5979 v 0.1"];
      break;

    default:
      this.dp = p(-4.52326, 10.6979);
      this.paths = ["m 0 0 c -1.62303 1.15063 -5.83226 4.37216 -5 8.66025"];
      break;
  }
};

SvsdKuh = function() { SvsdChar.call(this, "SvsdKuh", "くー", "SEL10P", "SEL", "P", "black", false, p(0.0, -2.6)); };
SvsdKuh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["くー"] = SvsdKuh;
SvsdChar.dict["くう"] = SvsdKuh;

SvsdKuh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(10.5562, 4.47513);
      this.paths = ["m 0 0 c 0.364894 3.93136 4.76838 5.95772 8.66026 5", "m 10.5562 4.37513 v 0.1"];
      break;

    default:
      this.dp = p(10.5562, 4.47513);
      this.paths = ["m 0 0 c 0.364894 3.93136 4.76838 5.95772 8.66026 5"];
      break;
  }
};

SvsdKeh = function() { SvsdChar.call(this, "SvsdKeh", "けー", "SL10P", "SL", "P", "black", false, p(1.5, -5.9)); };
SvsdKeh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["けー"] = SvsdKeh;
SvsdChar.dict["けい"] = SvsdKeh;
SvsdChar.dict["けえ"] = SvsdKeh;

SvsdKeh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(1.1871, 11.7144);
      this.paths = ["m 0 0 c -1.84278 2.84986 -2.18359 6.96162 0 10", "m 1.1871 11.6144 v 0.1"];
      break;

    default:
      this.dp = p(1.1871, 11.7144);
      this.paths = ["m 0 0 c -1.84278 2.84986 -2.18359 6.96162 0 10"];
      break;
  }
};

SvsdKoh = function() { SvsdChar.call(this, "SvsdKoh", "こー", "EL10P", "EL", "P", "black", false, p(0.0, -0.5)); };
SvsdKoh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["こー"] = SvsdKoh;
SvsdChar.dict["こう"] = SvsdKoh;
SvsdChar.dict["こお"] = SvsdKoh;

SvsdKoh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(11.8155, -0.717973);
      this.paths = ["m 0 0 c 2.74956 3.12248 7.3269 1.33355 10 0", "m 11.8155 -0.817973 v 0.1"];
      break;

    default:
      this.dp = p(11.8155, -0.717973);
      this.paths = ["m 0 0 c 2.74956 3.12248 7.3269 1.33355 10 0"];
      break;
  }
};

SvsdSai = function() { SvsdChar.call(this, "SvsdSai", "さい", "NEL5P", "NEL", "P", "black", false, p(0.0, 2.0)); };
SvsdSai.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["さい"] = SvsdSai;

SvsdSai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(5.4184, -4.08087);
      this.paths = ["m 0 0 c 1.59137 0.954753 3.42881 -1.15288 4.33013 -2.5", "m 5.4184 -4.18088 v 0.1"];
      break;

    default:
      this.dp = p(5.4184, -4.08087);
      this.paths = ["m 0 0 c 1.59137 0.954753 3.42881 -1.15288 4.33013 -2.5"];
      break;
  }
};

SvsdShii = function() { SvsdChar.call(this, "SvsdShii", "しい", "SWL5P", "SWL", "P", "black", false, p(2.6, -3.2)); };
SvsdShii.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["しい"] = SvsdShii;
SvsdChar.dict["しー"] = SvsdShii;

SvsdShii.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-1.90191, 6.33045);
      this.paths = ["m 0 0 c -1.11689 0.391995 -3.19039 2.15145 -2.5 4.33013", "m -1.90191 6.23045 v 0.099999"];
      break;

    default:
      this.dp = p(-1.90191, 6.33045);
      this.paths = ["m 0 0 c -1.11689 0.391995 -3.19039 2.15145 -2.5 4.33013"];
      break;
  }
};

SvsdSuh = function() { SvsdChar.call(this, "SvsdSuh", "すー", "SEL5P", "SEL", "P", "black", false, p(0.0, -1.3)); };
SvsdSuh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["すー"] = SvsdSuh;
SvsdChar.dict["すう"] = SvsdSuh;

SvsdSuh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(6.15072, 2.19607);
      this.paths = ["m 0 0 c 0.40822 1.26111 1.10359 3.1903 4.20152 2.53215", "m 6.15072 2.09607 v 0.1"];
      break;

    default:
      this.dp = p(6.15072, 2.19607);
      this.paths = ["m 0 0 c 0.40822 1.26111 1.10359 3.1903 4.20152 2.53215"];
      break;
  }
};

SvsdSeh = function() { SvsdChar.call(this, "SvsdSeh", "せー", "SL5P", "SL", "P", "black", false, p(0.7, -3.3)); };
SvsdSeh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["せー"] = SvsdSeh;
SvsdChar.dict["せい"] = SvsdSeh;
SvsdChar.dict["せえ"] = SvsdSeh;

SvsdSeh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(1.36029, 6.56607);
      this.paths = ["m 0 0 c -0.526006 1.45593 -1.3705 3.54409 0 5", "m 1.36029 6.46607 v 0.1"];
      break;

    default:
      this.dp = p(1.36029, 6.56607);
      this.paths = ["m 0 0 c -0.526006 1.45593 -1.3705 3.54409 0 5"];
      break;
  }
};

SvsdSoh = function() { SvsdChar.call(this, "SvsdSoh", "そー", "EL5P", "EL", "P", "black", false, p(0.0, 0.1)); };
SvsdSoh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["そー"] = SvsdSoh;
SvsdChar.dict["そう"] = SvsdSoh;

SvsdSoh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(6.5239, -1.19137);
      this.paths = ["m 0 0 c 1.26737 1.679 3.71345 1.0347 5 0", "m 6.5239 -1.29137 v 0.1"];
      break;

    default:
      this.dp = p(6.5239, -1.19137);
      this.paths = ["m 0 0 c 1.26737 1.679 3.71345 1.0347 5 0"];
      break;
  }
};

SvsdTai = function() { SvsdChar.call(this, "SvsdTai", "たい", "NE5P", "NE", "P", "black", false, p(0.0, -0.0)); };
SvsdTai.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["たい"] = SvsdTai;

SvsdTai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(6.05829, -3.39775);
      this.paths = ["m 0 0 l 4.33013 -2.5", "m 6.05829 -3.49775 v 0.1"];
      break;

    default:
      this.dp = p(6.05829, -3.39775);
      this.paths = ["m 0 0 l 4.33013 -2.5"];
      break;
  }
};

SvsdChii = function() { SvsdChar.call(this, "SvsdChii", "ちい", "SW5P", "SW", "P", "black", false, p(3.5, -3.1)); };
SvsdChii.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ちー"] = SvsdChii;
SvsdChar.dict["ちい"] = SvsdChii;

SvsdChii.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-3.50247, 6.16645);
      this.paths = ["m 0 0 l -2.5 4.33012", "m -3.50247 6.06645 v 0.1"];
      break;

    default:
      this.dp = p(-3.50247, 6.16645);
      this.paths = ["m 0 0 l -2.5 4.33012"];
      break;
  }
};

SvsdTsuh = function() { SvsdChar.call(this, "SvsdTsuh", "つー", "S5P", "S", "P", "black", false, p(0.0, -1.8)); };
SvsdTsuh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["つー"] = SvsdTsuh;
SvsdChar.dict["つう"] = SvsdTsuh;

SvsdTsuh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(6.06001, 3.59875);
      this.paths = ["m 0 0 l 4.33013 2.5", "m 6.06001 3.49875 v 0.1"];
      break;

    default:
      this.dp = p(6.06001, 3.59875);
      this.paths = ["m 0 0 l 4.33013 2.5"];
      break;
  }
};

SvsdToh = function() { SvsdChar.call(this, "SvsdToh", "とー", "E5P", "E", "P", "black", false, p(0.0, -0.1)); };
SvsdToh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["とー"] = SvsdToh;
SvsdChar.dict["とう"] = SvsdToh;
SvsdChar.dict["とお"] = SvsdToh;

SvsdToh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(7, 0.1);
      this.paths = ["m 0 0 h 5", "m 7 0 v 0.1"];
      break;

    default:
      this.dp = p(7, 0.1);
      this.paths = ["m 0 0 h 5"];
      break;
  }
};

SvsdTeh = function() { SvsdChar.call(this, "SvsdTeh", "てー", "S5P", "S", "P", "black", false, p(0.0, -3.5)); };
SvsdTeh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["てー"] = SvsdTeh;
SvsdChar.dict["てい"] = SvsdTeh;
SvsdChar.dict["てえ"] = SvsdTeh;

SvsdTeh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(0, 7.1);
      this.paths = ["m 0 0 v 5", "m 0 7 v 0.1"];
      break;

    default:
      this.dp = p(0, 7.1);
      this.paths = ["m 0 0 v 5"];
      break;
  }
};

SvsdNai = function() { SvsdChar.call(this, "SvsdNai", "ない", "NER10P", "NER", "P", "black", false, p(0.0, 2.5)); };
SvsdNai.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ない"] = SvsdNai;

SvsdNai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(10.628, -4.54252);
      this.paths = ["m 0 0 c 0.338036 -1.74353 4.2163 -5.71161 8.66025 -5", "m 10.628 -4.64252 v 0.1"];
      break;

    default:
      this.dp = p(10.628, -4.54252);
      this.paths = ["m 0 0 c 0.338036 -1.74353 4.2163 -5.71161 8.66025 -5"];
      break;
  }
};

SvsdNii = function() { SvsdChar.call(this, "SvsdNii", "にい", "SWR10P", "SWR", "P", "black", false, p(6.9, -4.7)); };
SvsdNii.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["にい"] = SvsdNii;
SvsdChar.dict["にー"] = SvsdNii;

SvsdNii.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-6.89396, 9.40316);
      this.paths = ["m 0 0 c 0.722009 2.68537 -0.707116 7.21951 -5 8.66025", "m -6.89396 9.30316 v 0.1"];
      break;

    default:
      this.dp = p(-6.89396, 9.40316);
      this.paths = ["m 0 0 c 0.722009 2.68537 -0.707116 7.21951 -5 8.66025"];
      break;
  }
};

SvsdNuh = function() { SvsdChar.call(this, "SvsdNuh", "ぬー", "SER10P", "SER", "P", "black", false, p(0.0, -3.5)); };
SvsdNuh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぬー"] = SvsdNuh;
SvsdChar.dict["ぬう"] = SvsdNuh;

SvsdNuh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(9.15718, 7.03542);
      this.paths = ["m 0 0 c 2.5641 -0.0716 7.28949 -0.0932 8.66025 5", "m 9.15718 6.93542 v 0.1"];
      break;

    default:
      this.dp = p(9.15718, 7.03542);
      this.paths = ["m 0 0 c 2.5641 -0.0716 7.28949 -0.0932 8.66025 5"];
      break;
  }
};

SvsdNeh = function() { SvsdChar.call(this, "SvsdNeh", "ねー", "SR10P", "SR", "P", "black", false, p(1.5, -5.7)); };
SvsdNeh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ねー"] = SvsdNeh;
SvsdChar.dict["ねい"] = SvsdNeh;
SvsdChar.dict["ねえ"] = SvsdNeh;

SvsdNeh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-1.51903, 11.4057);
      this.paths = ["m 0 0 c 3.06633 2.75966 2.35567 7.77508 0 10", "m -1.51903 11.3057 v 0.1"];
      break;

    default:
      this.dp = p(-1.51903, 11.4057);
      this.paths = ["m 0 0 c 3.06633 2.75966 2.35567 7.77508 0 10"];
      break;
  }
};

SvsdNoh = function() { SvsdChar.call(this, "SvsdNoh", "のー", "ER10P", "ER", "P", "black", false, p(0.0, 0.1)); };
SvsdNoh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["のー"] = SvsdNoh;
SvsdChar.dict["のう"] = SvsdNoh;

SvsdNoh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(11.3451, 1.57978);
      this.paths = ["m 0 0 c 2.61216 -1.76308 7.32951 -2.88933 10 0", "m 11.3451 1.47978 v 0.1"];
      break;

    default:
      this.dp = p(11.3451, 1.57978);
      this.paths = ["m 0 0 c 2.61216 -1.76308 7.32951 -2.88933 10 0"];
      break;
  }
};

SvsdHai = function() { SvsdChar.call(this, "SvsdHai", "はい", "NEL20P", "NEL", "P", "black", false, p(0.0, 5.8)); };
SvsdHai.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["はい"] = SvsdHai;

SvsdHai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(18.6091, -11.4351);
      this.paths = ["m 0 0 c 7.56775 0 13.3707 -5.36129 17.3205 -10", "m 18.6091 -11.5351 v 0.1"];
      break;

    default:
      this.dp = p(18.6091, -11.4351);
      this.paths = ["m 0 0 c 7.56775 0 13.3707 -5.36129 17.3205 -10"];
      break;
  }
};

SvsdHii = function() { SvsdChar.call(this, "SvsdHii", "ひい", "SWL20P", "SWL", "P", "black", false, p(10.2, -9.7)); };
SvsdHii.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ひい"] = SvsdHii;
SvsdChar.dict["ひー"] = SvsdHii;

SvsdHii.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-9.40564, 19.3264);
      this.paths = ["m 0 0 c -4.58414 4.24962 -11.55 12.3153 -10 17.3205", "m -9.40564 19.2264 v 0.1"];
      break;

    default:
      this.dp = p(-9.40564, 19.3264);
      this.paths = ["m 0 0 c -4.58414 4.24962 -11.55 12.3153 -10 17.3205"];
      break;
  }
};

SvsdHuh = function() { SvsdChar.call(this, "SvsdHuh", "ふー", "SEL20P", "SEL", "P", "black", false, p(0.0, -5.1)); };
SvsdHuh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ふー"] = SvsdHuh;
SvsdChar.dict["ふう"] = SvsdHuh;

SvsdHuh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(19.2818, 9.71556);
      this.paths = ["m 0 0 c 0.556334 7.36507 11.3581 11.1114 17.3205 10", "m 19.2818 9.61556 v 0.1"];
      break;

    default:
      this.dp = p(19.2818, 9.71556);
      this.paths = ["m 0 0 c 0.556334 7.36507 11.3581 11.1114 17.3205 10"];
      break;
  }
};

SvsdHeh = function() { SvsdChar.call(this, "SvsdHeh", "へー", "UWL5P", "SWL", "SEL", "black", false, p(2.8, -2.6)); };
SvsdHeh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["へー"] = SvsdHeh;
SvsdChar.dict["へい"] = SvsdHeh;
SvsdChar.dict["へえ"] = SvsdHeh;

SvsdHeh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(1.90386, 4.50053);
      this.paths = ["m 0 0 c -1.54618 0.81314 -3.06762 1.9439 -2.80689 3.38677 c 0.19187 1.06179 1.19064 2.09764 2.80717 1.61177", "m 1.90386 4.40053 v 0.1"];
      break;

    default:
      this.dp = p(1.90386, 4.50053);
      this.paths = ["m 0 0 c -1.54618 0.81314 -3.06762 1.9439 -2.80689 3.38677 c 0.19187 1.06179 1.19064 2.09764 2.80717 1.61177", "m 1.90386 4.40053 v 0.1"];
      break;
  }
};

SvsdHoh = function() { SvsdChar.call(this, "SvsdHoh", "ほー", "EL20P", "EL", "P", "black", false, p(0.0, -0.9)); };
SvsdHoh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ほー"] = SvsdHoh;
SvsdChar.dict["ほう"] = SvsdHoh;

SvsdHoh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(21.8329, -0.698502);
      this.paths = ["m 0 0 c 5.15578 3.98468 13.0748 2.97834 20 0", "m 21.8329 -0.798502 v 0.1"];
      break;

    default:
      this.dp = p(21.8329, -0.698502);
      this.paths = ["m 0 0 c 5.15578 3.98468 13.0748 2.97834 20 0", "m 21.8329 -0.798502 v 0.1"];
      break;
  }
};

SvsdMai = function() { SvsdChar.call(this, "SvsdMai", "まい", "NER20P", "NER", "P", "black", false, p(0.0, 5.0)); };
SvsdMai.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["まい"] = SvsdMai;

SvsdMai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(19.3224, -9.96921);
      this.paths = ["m 0 0 c 4.56521 -6.44915 10.8638 -9.78096 17.3205 -10", "m 19.3224 -10.0692 v 0.1"];
      break;

    default:
      this.dp = p(19.3224, -9.96921);
      this.paths = ["m 0 0 c 4.56521 -6.44915 10.8638 -9.78096 17.3205 -10"];
      break;
  }
};

SvsdMii = function() { SvsdChar.call(this, "SvsdMii", "みい", "SWR20P", "SWR", "P", "black", false, p(11.7, -9.2)); };
SvsdMii.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["みい"] = SvsdMii;
SvsdChar.dict["みー"] = SvsdMii;

SvsdMii.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-11.7288, 18.428);
      this.paths = ["m 0 0 c 1.75914 4.78201 -3.60044 13.4217 -9.99999 17.3206", "m -11.7288 18.328 v 0.1"];
      break;

    default:
      this.dp = p(-11.7288, 18.428);
      this.paths = ["m 0 0 c 1.75914 4.78201 -3.60044 13.4217 -9.99999 17.3206"];
      break;
  }
};

SvsdMuh = function() { SvsdChar.call(this, "SvsdMuh", "むー", "SER20P", "SER", "P", "black", false, p(0.0, -6.0)); };
SvsdMuh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["むー"] = SvsdMuh;
SvsdChar.dict["むう"] = SvsdMuh;

SvsdMuh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(17.5037, 12.0905);
      this.paths = ["m 0 0 c 6.05327 -0.272634 16.7009 3.22004 17.3205 10", "m 17.5037 11.9905 v 0.1"];
      break;

    default:
      this.dp = p(17.5037, 12.0905);
      this.paths = ["m 0 0 c 6.05327 -0.272634 16.7009 3.22004 17.3205 10"];
      break;
  }
};

SvsdMeh = function() { SvsdChar.call(this, "SvsdMeh", "めー", "UER5P", "SER", "SWR", "black", false, p(1.7, -3.0)); };
SvsdMeh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["めー"] = SvsdMeh;
SvsdChar.dict["めい"] = SvsdMeh;
SvsdChar.dict["めえ"] = SvsdMeh;

SvsdMeh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-1.73901, 6.09635);
      this.paths = ["m 0 0 c 1.96459 0.169174 2.87771 0.486323 3.07622 1.62962 c 0.260213 1.49864 -1.92679 2.77673 -3.07622 3.37039", "m -1.73901 5.99635 v 0.1"];
      break;

    default:
      this.dp = p(-1.73901, 6.09635);
      this.paths = ["m 0 0 c 1.96459 0.169174 2.87771 0.486323 3.07622 1.62962 c 0.260213 1.49864 -1.92679 2.77673 -3.07622 3.37039"];
      break;
  }
};

SvsdMoh = function() { SvsdChar.call(this, "SvsdMoh", "もー", "ER20P", "ER", "P", "black", false, p(0.0, 0.5)); };
SvsdMoh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["もー"] = SvsdMoh;
SvsdChar.dict["もう"] = SvsdMoh;

SvsdMoh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(21.27, 1.64176);
      this.paths = ["m 0 0 c 6.69402 -2.71754 16.4988 -4.16702 20 0", "m 21.27 1.54176 v 0.1"];
      break;

    default:
      this.dp = p(21.27, 1.64176);
      this.paths = ["m 0 0 c 6.69402 -2.71754 16.4988 -4.16702 20 0", "m 21.27 1.54176 v 0.1"];
      break;
  }
};

SvsdYai = function() { SvsdChar.call(this, "SvsdYai", "やい", "NE20P", "NE", "P", "black", false, p(0.0, 5.5)); };
SvsdYai.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["やい"] = SvsdYai;

SvsdYai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(19.0502, -10.8987);
      this.paths = ["m 0 0 l 17.3205 -10", "m 19.0502 -10.9987 v 0.1"];
      break;

    default:
      this.dp = p(19.0502, -10.8987);
      this.paths = ["m 0 0 l 17.3205 -10"];
      break;
  }
};

SvsdYuh = function() { SvsdChar.call(this, "SvsdYuh", "ゆー", "SW20P", "SW", "P", "black", false, p(0.0, -5.5)); };
SvsdYuh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ゆー"] = SvsdYuh;
SvsdChar.dict["ゆう"] = SvsdYuh;

SvsdYuh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(19.0494, 11.0982);
      this.paths = ["m 0 0 l 17.3205 10", "m 19.0494 10.9982 v 0.1"];
      break;

    default:
      this.dp = p(19.0494, 11.0982);
      this.paths = ["m 0 0 l 17.3205 10", "m 19.0494 10.9982 v 0.1"];
      break;
  }
};

SvsdYoh = function() { SvsdChar.call(this, "SvsdYoh", "よー", "E20P", "E", "P", "black", false, p(0.0, -0.1)); };
SvsdYoh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["よー"] = SvsdYoh;
SvsdChar.dict["よう"] = SvsdYoh;

SvsdYoh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(22.0016, 0.1);
      this.paths = ["m 0 0 h 20", "m 22.0016 0 v 0.1"];
      break;

    default:
      this.dp = p(22.0016, 0.1);
      this.paths = ["m 0 0 h 20"];
      break;
  }
};

SvsdRai = function() { SvsdChar.call(this, "SvsdRai", "らい", "NER5P", "NER", "P", "black", false, p(0.0, 1.3)); };
SvsdRai.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["らい"] = SvsdRai;

SvsdRai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(6.30917, -2.14437);
      this.paths = ["m 0 0 c 0.541772 -0.951162 1.94507 -2.71942 4.33013 -2.5", "m 6.30917 -2.24437 v 0.1"];
      break;

    default:
      this.dp = p(6.30917, -2.14437);
      this.paths = ["m 0 0 c 0.541772 -0.951162 1.94507 -2.71942 4.33013 -2.5"];
      break;
  }
};

SvsdRii = function() { SvsdChar.call(this, "SvsdRii", "りい", "SWR5P", "SWR", "P", "black", false, p(4.4, -2.6)); };
SvsdRii.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["りい"] = SvsdRii;
SvsdChar.dict["りー"] = SvsdRii;

SvsdRii.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-4.37926, 5.10856);
      this.paths = ["m 0 0 c 1.23682 1.79842 -0.379269 3.56029 -2.5 4.33013", "m -4.37926 5.00856 v 0.1"];
      break;

    default:
      this.dp = p(-4.37926, 5.10856);
      this.paths = ["m 0 0 c 1.23682 1.79842 -0.379269 3.56029 -2.5 4.33013"];
      break;
  }
};

SvsdRuh = function() { SvsdChar.call(this, "SvsdRuh", "るー", "SER5P", "SER", "P", "black", false, p(0.0, -2.3)); };
SvsdRuh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["るー"] = SvsdRuh;
SvsdChar.dict["るう"] = SvsdRuh;

SvsdRuh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(4.0541, 4.58411);
      this.paths = ["m 0 0 c 1.48073 0.077667 4.60895 0.194056 4.33013 2.5", "m 4.0541 4.48411 v 0.1"];
      break;

    default:
      this.dp = p(4.0541, 4.58411);
      this.paths = ["m 0 0 c 1.48073 0.077667 4.60895 0.194056 4.33013 2.5"];
      break;
  }
};

SvsdReh = function() { SvsdChar.call(this, "SvsdReh", "れー", "SR5P", "SR", "P", "black", false, p(1.3, -3.3)); };
SvsdReh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["れー"] = SvsdReh;
SvsdChar.dict["れい"] = SvsdReh;
SvsdChar.dict["れえ"] = SvsdReh;

SvsdReh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(-1.27182, 6.63792);
      this.paths = ["m 0 0 c 1.1321 2.05387 1.03538 3.75447 0 5", "m -1.27182 6.53792 v 0.1"];
      break;

    default:
      this.dp = p(-1.27182, 6.63792);
      this.paths = ["m 0 0 c 1.1321 2.05387 1.03538 3.75447 0 5"];
      break;
  }
};

SvsdRoh = function() { SvsdChar.call(this, "SvsdRoh", "ろー", "ER5P", "ER", "P", "black", false, p(0.0, -0.3)); };
SvsdRoh.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ろー"] = SvsdRoh;
SvsdChar.dict["ろう"] = SvsdRoh;

SvsdRoh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(6.51253, 1.40927);
      this.paths = ["m 0 0 c 1.72594 -0.816378 3.59517 -1.20627 5 0", "m 6.51253 1.30927 v 0.1"];
      break;

    default:
      this.dp = p(6.51253, 1.40927);
      this.paths = ["m 0 0 c 1.72594 -0.816378 3.59517 -1.20627 5 0"];
      break;
  }
};

SvsdWai = function() { SvsdChar.call(this, "SvsdWai", "わい", "USL5P", "SEL", "NEL", "black", false, p(0.0, -0.6)); };
SvsdWai.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["わい"] = SvsdWai;

SvsdWai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "":
      this.dp = p(5.95346, -1.65387);
      this.paths = ["m 0 0 c 0.019224 1.2306 0.514416 2.96936 1.65244 2.87958 c 1.10088 -0.086848 2.53023 -1.40929 3.34756 -2.87958", "m 5.95346 -1.75387 v 0.1"];
      break;

    default:
      this.dp = p(5.95346, -1.65387);
      this.paths = ["m 0 0 c 0.019224 1.2306 0.514416 2.96936 1.65244 2.87958 c 1.10088 -0.086848 2.53023 -1.40929 3.34756 -2.87958"];
      break;
  }
};

NakaneAu = function() { NakaneChar.call(this, "NakaneAu", "あう", "USWL2NEL7", "USWL", "NEL", "black", false, p(0.3, -0.5)); };
NakaneAu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["あう"] = NakaneAu;
NakaneChar.dict["あー"] = NakaneAu;

NakaneAu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.58957, -1.10485);
      this.paths = ["m 0 0 c -0.741809 1.68441 0.65145 1.9963 1.48508 1.83762 c 0.712182 -0.13556 4.0281 -1.07811 5.10449 -2.94247"];
      break;
  }
};

NakaneIu = function() { NakaneChar.call(this, "NakaneIu", "いう", "UWR2NER7", "NWR", "NER", "black", false, p(1.8, 2.1)); };
NakaneIu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["いう"] = NakaneIu;

NakaneIu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.43755, -4.3115);
      this.paths = ["m 0 0 c -0.853191 0.08687 -2.16962 -0.202753 -1.7479 -1.45659 c 0.629021 -1.87019 5.18545 -2.85491 5.18545 -2.85491"];
      break;
  }
};

NakaneUu = function() { NakaneChar.call(this, "NakaneUu", "うう", "USWL2NEL17", "SWL", "NEL", "black", false, p(0.7, 1.2)); };
NakaneUu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["うう"] = NakaneUu;
NakaneChar.dict["うー"] = NakaneUu;

NakaneUu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.1062, -5.72733);
      this.paths = ["m 0 0 c -1.1319 0.962885 -1.2127 3.3291 1.69699 3.28791 c 4.95642 -0.0702 11.4258 -5.90117 12.4092 -9.01524"];
      break;
  }
};

NakaneUu.prototype.setPathsExtra = function() {
    this.pathsExtra = ["m 7,-1.3 v0.1"];
};

NakaneEu = function() { NakaneChar.call(this, "NakaneEu", "えう", "USWR2NER17", "NWR", "NER", "black", false, p(3.3, 5.9)); };
NakaneEu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["えう"] = NakaneEu;

NakaneEu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(9.56751, -11.8769);
      this.paths = ["m 0 0 c -1.75549 0.24455 -3.2927 -0.78207 -3.29914 -1.9135 c -0.0309 -5.42434 12.8666 -9.96341 12.8666 -9.96341"];
      break;
  }
};

NakaneOu = function() { NakaneChar.call(this, "NakaneOu", "おう", "USWL2NEL17", "SWL", "NEL", "black", false, p(0.8, 0.8)); };
NakaneOu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["おう"] = NakaneOu;
NakaneChar.dict["おお"] = NakaneOu;
NakaneChar.dict["おー"] = NakaneOu;

NakaneOu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.397, -4.95792);
      this.paths = ["m 0 0 c -0.65208 0.86619 -1.34452 2.85524 -0.0954 3.24172 c 3.88002 1.20044 12.7082 -5.27813 14.4924 -8.19964"];
      break;
  }
};

NakaneKiu = function() { NakaneChar.call(this, "NakaneKiu", "きう", "UNER2SW7", "NER", "SW", "black", false, p(1.3, -2.9)); };
NakaneKiu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["きう"] = NakaneKiu;
NakaneChar.dict["きゅう"] = NakaneKiu;
NakaneChar.dict["きゅー"] = NakaneKiu;

NakaneKiu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-1.26971, 6.17468);
      this.paths = ["m 0 0 c 0.443003 -0.26107 1.3397 -0.40766 1.7387 -0.11202 c 0.340628 0.25235 0.246253 0.866 -0.146897 1.48956 c -1.03845 1.64703 -2.86151 4.79714 -2.86151 4.79714"];
      break;
  }
};

NakaneKiu.prototype.setPathsExtra = function() {
  switch (this.getNextHeadType()) {
    case "SW":
      this.pathsExtra = ["m -0.6486585771480455 6.595151606978889 -1.2421008457039093 -0.8409432139577758"];
      break;

    default:
      break;
  }
};

NakaneKau = function() { NakaneChar.call(this, "NakaneKau", "かう", "UWL2E7", "WL", "E", "black", false, p(0.9, -0.9)); };
NakaneKau.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["かう"] = NakaneKau;
NakaneChar.dict["かー"] = NakaneKau;
NakaneChar.dict["きゃー"] = NakaneKau;

NakaneKau.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.10436, 1.83625);
      this.paths = ["m 0 0 c -0.491414 0.26561 -0.975884 0.94494 -0.896512 1.31048 c 0.07937 0.36554 0.546729 0.47617 1.11984 0.47617 l 5.88103 0.0496"];
      break;
  }
};

NakaneKuu = function() { NakaneChar.call(this, "NakaneKuu", "くう", "UNR2S7", "NER", "S", "black", true, p(0.0, -2.1)); };
NakaneKuu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["くう"] = NakaneKuu;
NakaneChar.dict["くー"] = NakaneKuu;

NakaneKuu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.5029, 5.69501);
      this.paths = ["m 0 0 c 0.398976 -0.7837 1.24545 -1.4609 1.68851 -1.40965 c 0.745407 0.0862 0.814387 1.0267 0.814387 1.51847 v 5.58619"];
      break;
  }
};

NakaneKeu = function() { NakaneChar.call(this, "NakaneKeu", "けう", "UNER2SW17", "NER", "SW", "black", false, p(5.9, -7.1)); };
NakaneKeu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["けう"] = NakaneKeu;
NakaneChar.dict["きょう"] = NakaneKeu;
NakaneChar.dict["きょー"] = NakaneKeu;

NakaneKeu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-5.88606, 14.6219);
      this.paths = ["m 0 0 c 0 0 1.54306 -0.79654 2.03197 -0.31609 c 0.55438 0.54479 -0.22577 1.71589 -0.22577 1.71589 l -7.69226 13.2221"];
      break;
  }
};

NakaneKou = function() { NakaneChar.call(this, "NakaneKou", "こう", "UWL2E17", "WL", "E", "black", false, p(0.9, -1.6)); };
NakaneKou.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["こう"] = NakaneKou;
NakaneChar.dict["こー"] = NakaneKou;
NakaneChar.dict["こお"] = NakaneKou;

NakaneKou.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(15.8308, 3.15909);
      this.paths = ["m 0 0 c -0.25598 0.45506 -1.11754 1.63969 -0.88666 2.48992 c 0.19879 0.73211 1.80087 0.69432 1.81346 0.66917 h 14.904"];
      break;
  }
};

ShugiinNo = function() { ShugiinChar.call(this, "ShugiinNo", "の", "NEL3", "NEL", "NEL", "black", false, p(0.0, 1.1)); };
ShugiinNo.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["の"] = ShugiinNo;

ShugiinNo.prototype.setPaths = function() {
  switch (this.getNextName()) {
    case "ShugiinWa":
    case "ShugiinWo":
    case "ShugiinO":
      this.dp = p(2.14115, -2.1029);
      this.paths = ["m 0 0 c 1.18078 -0.215658 1.75387 -1.32912 2.14115 -2.1029"];
      return;
  }


  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.14115, -2.1029);
      this.paths = ["m 0 0 c 1.26691 -0.0434 2.14115 -1.01348 2.14115 -2.1029"];
      break;
  }
};

ShugiinNomo = function() { ShugiinChar.call(this, "ShugiinNomo", "のも", "NEL3UNEL3", "NEL", "SWL", "black", false, p(0.0, 1.5)); };
ShugiinNomo.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["のも"] = ShugiinNomo;

ShugiinNomo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.11263, -2.12648);
      this.paths = ["m 0 0 c 0.90158 0.26154 2.92745 -0.47857 3.6335 -1.59748 c 0.38247 -0.60612 0.60701 -1.90303 -0.0661 -2.1491 c -0.68168 -0.24919 -1.45477 1.6201 -1.45477 1.6201"];
      break;
  }
};

GreggChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
GreggChar.prototype = Object.create(Char.prototype);
GreggChar.dict = {};


GreggK = function() { GreggChar.call(this, "GreggK", "k", "ER7", "ER", "ER", "black", false, p(0.0, 0.7)); };
GreggK.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["k"] = GreggK;

GreggK.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7, 0);
      this.paths = ["m 0 0 c 2.17775 -1.24421 7.47367 -1.654 7 0"];
      break;
  }
};

GreggG = function() { GreggChar.call(this, "GreggG", "g", "ER16", "ER", "ER", "black", false, p(0.0, 1.3)); };
GreggG.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["g"] = GreggG;

GreggG.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.8883, -0.300773);
      this.paths = ["m 0 0 c 3.86615 -2.10782 16.7769 -4.49967 14.8883 -0.300773"];
      break;
  }
};

GreggR = function() { GreggChar.call(this, "GreggR", "r", "EL7", "EL", "EL", "black", false, p(0.0, -0.6)); };
GreggR.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["r"] = GreggR;

GreggR.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7, 0);
      this.paths = ["m 0 0 c 0.069725 2.37067 4.63395 0.817184 7 0"];
      break;
  }
};

GreggL = function() { GreggChar.call(this, "GreggL", "l", "EL16", "EL", "EL", "black", false, p(0.0, -1.2)); };
GreggL.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["l"] = GreggL;

GreggL.prototype.setPaths = function() {
  switch (this.getPrevName()) {
    case "GreggA":
      this.dp = p(14.8941, -1.22614);
      this.paths = ["m 0 0 c 2.98464 1.3724 11.7938 1.12002 14.8941 -1.22614"];
      break;

    case "GreggE":
      this.dp = p(15.8289, -0.064);
      this.paths = ["m 0 0 c -0.23715 0.63258 0.24374 1.14753 1.4066 1.45911 c 4.3439 1.16394 10.4091 0.99869 14.4223 -1.52311"];
      break;

    default:
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c -0.038258 4.56535 10.6791 1.65963 16 0"];
      break;
  }
};

GreggN = function() { GreggChar.call(this, "GreggN", "n", "E4", "E", "E", "black", false, p(0.0, 0.0)); };
GreggN.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["n"] = GreggN;

GreggN.prototype.setPaths = function() {
  switch (this.getPrevName()) {
    case "GreggA":
      this.dp = p(7.86436, -0.073);
      this.paths = ["m 0 0 c 1.42119 -0.38081 7.86436 -0.073 7.86436 -0.073"];
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4, 0);
      this.paths = ["m 0 0 l 4 0"];
      break;
  }
};

GreggM = function() { GreggChar.call(this, "GreggM", "m", "E10", "E", "E", "black", false, p(0.0, 0.0)); };
GreggM.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["m"] = GreggM;

GreggM.prototype.setPaths = function() {

  switch (this.getPrevName()) {
    case "GreggA":
      this.dp = p(12.8624, -0.073);
      this.paths = ["m 0 0 c 1.42119 -0.38081 12.8624 -0.073 12.8624 -0.073"];
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(10, 0);
      this.paths = ["m 0 0 l 10 0"];
      break;
  }
};

GreggT = function() { GreggChar.call(this, "GreggT", "t", "NE4", "NE", "NE", "black", false, p(0.0, 1.0)); };
GreggT.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["t"] = GreggT;

GreggT.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.4641, -2);
      this.paths = ["m 0 0 l 3.4641 -2"];
      break;
  }
};

GreggD = function() { GreggChar.call(this, "GreggD", "d", "NE10", "NE", "NE", "black", false, p(0.0, 2.5)); };
GreggD.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["d"] = GreggD;

GreggD.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.66025, -5);
      this.paths = ["m 0 0 l 8.66025 -5"];
      break;
  }
};

GreggTh = function() { GreggChar.call(this, "GreggTh", "th", "NER4", "NER", "NER", "black", false, p(0.0, 1.1)); };
GreggTh.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["th"] = GreggTh;

GreggTh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.2766, -2.29431);
      this.paths = ["m 0 0 c -0.084533 -1.22722 2.78425 -2.19996 3.2766 -2.29431"];
      break;
  }
};

GreggThL = function() { GreggChar.call(this, "GreggThL", "Th", "NEL4", "NEL", "NEL", "black", false, p(0.0, 1.1)); };
GreggThL.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["Th"] = GreggThL;

GreggThL.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.27661, -2.29431);
      this.paths = ["m 0 0 c 1.32922 0.043491 2.69759 -1.20187 3.27661 -2.29431"];
      break;
  }
};

GreggP = function() { GreggChar.call(this, "GreggP", "p", "SWL7", "SWL", "SWL", "black", false, p(4.7, -2.9)); };
GreggP.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["p"] = GreggP;

GreggP.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-4.01503, 5.73407);
      this.paths = ["m 0 0 c -2.00147 1.15832 -6.41868 4.61076 -4.01503 5.73407"];
      break;
  }
};

GreggB = function() { GreggChar.call(this, "GreggB", "b", "SWL14", "SWL", "SWL", "black", false, p(11.2, -6.1)); };
GreggB.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["b"] = GreggB;

GreggB.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-9.8995, 9.8995);
      this.paths = ["m 0 0 c -4.22191 0.909691 -13.2433 7.74135 -9.8995 9.8995"];
      break;
  }
};

GreggF = function() { GreggChar.call(this, "GreggF", "f", "SWR7", "SWR", "SWR", "black", false, p(4.0, -2.9)); };
GreggF.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["f"] = GreggF;

GreggF.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-4.01504, 5.73406);
      this.paths = ["m 0 0 c 2.55794 0.627846 -1.67707 4.31762 -4.01504 5.73406"];
      break;
  }
};

GreggV = function() { GreggChar.call(this, "GreggV", "v", "SWR14", "SWR", "SWR", "black", false, p(8.0, -5.7)); };
GreggV.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["v"] = GreggV;

GreggV.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-8.03007, 11.4681);
      this.paths = ["m 0 0 c 4.35631 1.1221 -3.77167 8.9541 -8.03007 11.4681"];
      break;
  }
};

GreggCh = function() { GreggChar.call(this, "GreggCh", "ch", "SW7", "SW", "SW", "black", false, p(4.0, -2.9)); };
GreggCh.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["ch"] = GreggCh;
GreggChar.dict["c"] = GreggCh;

GreggCh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-4.01504, 5.73406);
      this.paths = ["m 0 0 l -4.01504 5.73406"];
      break;
  }
};

GreggJ = function() { GreggChar.call(this, "GreggJ", "j", "SW14", "SW", "SW", "black", false, p(7.0, -6.1)); };
GreggJ.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["j"] = GreggJ;

GreggJ.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-7, 12.1243);
      this.paths = ["m 0 0 l -7 12.1243"];
      break;
  }
};

GreggS = function() { GreggChar.call(this, "GreggS", "s", "SWL3", "SWL", "SWL", "black", false, p(1.8, -1.3)); };
GreggS.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["s"] = GreggS;

GreggS.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-1.5, 2.59808);
      this.paths = ["m 0 0 c -0.771314 0.491248 -2.48487 1.68084 -1.5 2.59808"];
      break;
  }
};

GreggSR = function() { GreggChar.call(this, "GreggSR", "S", "SWR3", "SWR", "SWR", "black", false, p(2.1, -1.1)); };
GreggSR.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["S"] = GreggSR;

GreggSR.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-2.12133, 2.12133);
      this.paths = ["m 0 0 c 0.880428 0.925001 -0.975988 1.91308 -2.12133 2.12133"];
      break;
  }
};

GreggSh = function() { GreggChar.call(this, "GreggSh", "sh", "SW4", "SW", "SW", "black", false, p(2.0, -1.7)); };
GreggSh.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["sh"] = GreggSh;

GreggSh.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-2, 3.4641);
      this.paths = ["m 0 0 l -2 3.4641"];
      break;
  }
};

GreggH = function() { GreggChar.call(this, "GreggH", "h", "P", "P", "P", "black", true, p(0.0, -0.0)); };
GreggH.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["h"] = GreggH;

GreggH.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 0.1);
      this.paths = ["m 0 0 v 0.1"];
      break;
  }
};

GreggNg = function() { GreggChar.call(this, "GreggNg", "ng", "SE5", "SE", "SE", "black", false, p(0.0, -1.2)); };
GreggNg.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["ng"] = GreggNg;

GreggNg.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.33013, 2.5);
      this.paths = ["m 0 0 l 4.33013 2.5"];
      break;
  }
};

GreggNk = function() { GreggChar.call(this, "GreggNk", "nk", "SE10", "SE", "SE", "black", false, p(0.0, -2.5)); };
GreggNk.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["nk"] = GreggNk;

GreggNk.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.66025, 5);
      this.paths = ["m 0 0 l 8.66025 5"];
      break;
  }
};

GreggA = function() { GreggChar.call(this, "GreggA", "a", "C4", "C", "C", "black", false, p(3.1, -1.8)); };
GreggA.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["a"] = GreggA;

GreggA.prototype.setPaths = function() {
  switch (this.getNextName()) {
    case "GreggL":
      this.dp = p(-1.41515, -0.44769 + 3.6);
      this.paths = ["m 0 3.6 c 0.88291 -0.67806 1.62989 -1.36444 1.61416 -2.57541 c -0.0116 -0.89357 -1.19773 -1.41391 -2.50938 -0.9436 c -1.33502 0.47869 -2.33738 2.23562 -0.51993 3.07132"];
      break;

    case "GreggM":
    case "GreggN":
      this.dp = p(-2.86436, 0.17299);
      this.paths = ["m 0 0 c 0.665331 1.77947 -3.19525 2.60409 -4.26711 2.03439 c -1.07186 -0.5697 -0.01844 -1.48059 1.40275 -1.8614"];
      break;

    default:
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c -1.2047 -0.10718 -2.8967 0.74715 -3.06293 1.94513 c -0.0975 0.70262 0.711768 1.51973 1.41794 1.58685 c 1.25154 0.11895 2.94049 -1.03272 2.99782 -2.28859 c 0.02793 -0.61184 -0.74276 -1.18911 -1.35283 -1.24339"];
      break;
  }
};

GreggE = function() { GreggChar.call(this, "GreggE", "e", "C1", "C", "C", "black", false, p(1.0, -0.6)); };
GreggE.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["e"] = GreggE;

GreggE.prototype.setPaths = function() {
  switch (this.getNextName()) {
    case "GreggK":
      this.dp = p(-1.03437, 0.45655);
      this.paths = ["m 0 0 c 0.21019 0.36406 -0.0477 0.95534 -0.743096 1.28304 c -0.414734 0.19545 -1.16244 0.4689 -1.24418 0.0568 c -0.06026 -0.30378 0.568195 -0.6635 0.952903 -0.88329"];
      break;

    case "GreggL":
      this.dp = p(-0.3934, -0.9523);
      this.paths = ["m 0 0 c 0.63894 -0.0982 1.05516 -0.6312 0.83595 -1.05873 c -0.22995 -0.44849 -1.08496 -0.27871 -1.22935 0.10643"];
      break;

    default:
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c -0.405 -0.036 -0.97382 0.25118 -1.02971 0.65392 c -0.0328 0.23621 0.23929 0.51091 0.47668 0.53348 c 0.42076 0.0399 0.98856 -0.34718 1.00783 -0.76939 c 0.009 -0.20569 -0.24971 -0.39976 -0.4548 -0.41801"];
      break;
  }
};

GreggO = function() { GreggChar.call(this, "GreggO", "o", "USW2.5", "SWL", "NEL", "black", false, p(0.8, -0.8)); };
GreggO.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["o"] = GreggO;

GreggO.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.55203, 0.37548);
      this.paths = ["m 0 0 c 0 0 -1.2339 1.20111 -0.62581 1.60208 c 0.69557 0.45865 2.17784 -1.2266 2.17784 -1.2266"];
      break;
  }
};

GreggU = function() { GreggChar.call(this, "GreggU", "u", "UNER2.5", "NER", "SWR", "black", false, p(0.0, 0.5)); };
GreggU.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["u"] = GreggU;

GreggU.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.57581, 0.15373);
      this.paths = ["m 0 0 c 0 0 1.50684 -1.63569 2.128 -1.10768 c 0.40108 0.34093 -0.18201 0.96527 -0.55219 1.26141"];
      break;
  }
};

WasedaMi = function() { WasedaChar.call(this, "WasedaMi", "み", "ER8CR1", "ER", "CR", "black", false, p(0.0, 0.5)); };
WasedaMi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["み"] = WasedaMi;

WasedaMi.prototype.setPaths = function() {
  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "EL4":
      this.dp = p(7.9507, -0.556);
      this.paths = ["m 0 0 c 1.8595 -0.8279 7.9507 -2.1087 7.9507 -0.556 c 0 0.5944 -0.527104 0.73886 -0.8551 0.6141 c -0.314472 -0.119615 -0.471997 -0.760408 -0.2213 -0.9848 c 0.282758 -0.253089 0.6882 0.1643 1.0764 0.3707"];
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.5344, -1.1129);
      this.paths = ["m 0 0 c 1.8517 -0.8635 7.9805 -2.1169 7.9805 -0.558 c 0 0.5964 -1.0114 0.9895 -1.2013 0.8411 c -0.3914 -0.317 0.2804 -0.7426 0.7552 -1.396"];
      break;
  }
};

WasedaMu = function() { WasedaChar.call(this, "WasedaMu", "む", "ER8CR4", "ER", "CR", "black", false, p(0.0, 0.2)); };
WasedaMu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["む"] = WasedaMu;

WasedaMu.prototype.setPaths = function() {
  switch (this.getNextModel()) {
    case "NEL8":
    case "NEL8CL1":
    case "NEL8CL4":
      this.dp = p(5.85932, -1.19414);
      this.paths = ["m 0 0 c 2.036 -0.7814 3.682 -1.2533 5.027 -1.2533 c 1.082 0 2.797 0.3136 2.797 1.5504 c 0 1.4252 -3.9947 0.929334 -4.10017 -0.486666 c -0.0584 -0.784484 1.37449 -0.582574 2.13549 -1.00457"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(7.058, -0.796296);
      this.paths = ["m 0 0 c 2.035 -0.7814 3.682 -1.2533 5.026 -1.2533 c 1.083 0 3.05694 0.572292 2.77 1.5991 c -0.33118 1.18511 -2.44919 1.884 -3.69068 -0.07914 c -0.5709 -0.902749 1.58968 -0.991556 2.95268 -1.06296"];
      break;

    default:
      this.dp = p(3.931, -1.1421);
      this.paths = ["m 0 0 c 2.0293 -0.8199 3.6962 -1.258 5.0456 -1.258 c 1.0861 0 2.78 0.3634 2.78 1.6051 c 0 1.0482 -1.9623 0.4465 -2.6 0 c -0.5764 -0.4036 -0.9162 -0.7134 -1.2946 -1.4892"];
      break;
  }
};

WasedaMe = function() { WasedaChar.call(this, "WasedaMe", "め", "ER16CR1", "ER", "CR", "black", false, p(0.0, 1.0)); };
WasedaMe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["め"] = WasedaMe;

WasedaMe.prototype.setPaths = function() {
  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "NEL8":
      this.dp = p(15.4183, -1.578);
      this.paths = ["m 0 0 c 3.62581 -1.109 15.7619 -2.95 15.8262 -1.107 c 0.0156 0.297 -0.343033 0.62722 -0.653104 0.68374 c -0.302834 0.0552 -0.807321 -0.093 -0.832432 -0.39981 c -0.03578 -0.43713 0.728936 -0.56193 1.07764 -0.75493"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(15.7979, -1.2412);
      this.paths = ["m 0 0 c 3.60605 -1.1717 15.7617 -2.9501 15.8262 -1.1067 c 0.0156 0.297 -0.1078 0.585 -0.3407 0.6985 c -0.3085 0.1573 -0.7972 0.0671 -1.0198 -0.1982 c -0.1039 -0.1283 -0.1983 -0.4099 0.0023 -0.495 c 0.4161 -0.1766 0.8793 -0.1398 1.3299 -0.1398"];
      break;

    default:
      this.dp = p(15.4242, -1.568);
      this.paths = ["m 0 0 c 3.606 -1.1717 15.7617 -2.9503 15.8261 -1.1067 c 0.0156 0.2967 -0.0711 0.6193 -0.2989 0.7788 c -0.2223 0.1615 -0.6803 0.276 -0.8222 0.0575 c -0.2159 -0.374 0.4335 -0.9043 0.7192 -1.2976"];
      break;
  }
};

WasedaMo = function() { WasedaChar.call(this, "WasedaMo", "も", "ER16", "ER", "ER", "black", false, p(0.0, 1.1)); };
WasedaMo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["も"] = WasedaMo;

WasedaMo.prototype.setPaths = function() {
  switch (this.getNextModel().replace(/[CO].*/, "")) {
    case "EL8":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 3.43 -1.249 12.509 -1.067 16 0"];
      return;
  }

  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 4.3601 -1.5869 15.326 -3.8223 16 0"];
      break;
  }
};

SvsdKya = function() { SvsdChar.call(this, "SvsdKya", "きゃ", "HNEL10", "HNEL", "NEL", "black", false, p(1.0, 0.5)); };
SvsdKya.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["きゃ"] = SvsdKya;

SvsdKya.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.10736, -2.82685);
      this.paths = ["m 0 0 c 0 0 -1.16251 0.934725 -0.960347 1.48994 c 0.134752 0.370086 0.737611 0.394521 1.12883 0.349042 c 3.04896 -0.354437 7.13204 -2.90088 7.93888 -4.66583"];
      break;
  }
};

SvsdKyu = function() { SvsdChar.call(this, "SvsdKyu", "きゅ", "HSEL10", "HSEL", "SEL", "black", false, p(1.3, -2.6)); };
SvsdKyu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["きゅ"] = SvsdKyu;

SvsdKyu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.06996, 5.48121);
      this.paths = ["m 0 0 c 0 0 -0.71392 -0.54351 -1.03417 -0.213149 c -0.341141 0.351908 -0.305085 0.994842 -0.211669 1.45504 c 0.609448 3.00236 6.31144 4.23931 8.3158 4.23931"];
      break;
  }
};

SvsdKyo = function() { SvsdChar.call(this, "SvsdKyo", "きょ", "HEL10", "HEL", "EL", "black", false, p(0.8, -1.2)); };
SvsdKyo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["きょ"] = SvsdKyo;

SvsdKyo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(9.42422, 1.33708);
      this.paths = ["m 0 0 c -0.35243 0.18977 -0.736279 0.38466 -0.761113 0.73693 c -0.02742 0.389 0.318683 0.75057 0.717981 0.92364 c 2.80684 1.21654 7.83464 0.87384 9.46736 -0.32349"];
      break;
  }
};

SvsdSha = function() { SvsdChar.call(this, "SvsdSha", "しゃ", "HNEL5", "HNEL", "NEL", "black", false, p(0.6, -0.0)); };
SvsdSha.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["しゃ"] = SvsdSha;

SvsdSha.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.87029, -1.28517);
      this.paths = ["m 0 0 c 0 0 -0.677518 0.687112 -0.546569 1.06359 c 0.07818 0.224781 0.412964 0.317018 0.649973 0.295442 c 1.52735 -0.139041 3.58129 -1.95154 3.76689 -2.64421"];
      break;
  }
};

SvsdShu = function() { SvsdChar.call(this, "SvsdShu", "しゅ", "HSEL5", "HSEL", "SEL", "black", false, p(1.0, -0.9)); };
SvsdShu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["しゅ"] = SvsdShu;

SvsdShu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.35074, 2.22602);
      this.paths = ["m 0 0 c 0 0 -0.501024 -0.566633 -0.85526 -0.374908 c -0.2602 0.14083 -0.02392 0.704146 0.0703 0.902124 c 0.698885 1.46857 3.58272 1.6988 4.13571 1.6988"];
      break;
  }
};

SvsdSho = function() { SvsdChar.call(this, "SvsdSho", "しょ", "HEL5", "HEL", "EL", "black", false, p(0.7, -0.8)); };
SvsdSho.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["しょ"] = SvsdSho;

SvsdSho.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.22764, 0.42276);
      this.paths = ["m 0 0 c -0.349828 0.18949 -0.794533 0.47242 -0.737127 0.8672 c 0.05505 0.37862 0.567774 0.64192 1.00813 0.71545 c 0.955564 0.15955 2.99144 -0.31121 3.95664 -1.15989"];
      break;
  }
};

SvsdCha = function() { SvsdChar.call(this, "SvsdCha", "ちゃ", "BNE5", "BNE", "NE", "black", false, p(0.2, -0.3)); };
SvsdCha.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ちゃ"] = SvsdCha;

SvsdCha.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.16014, -1.00595);
      this.paths = ["m 0 0 c 0.175105 0.567609 -0.03993 1.14964 -0.214011 1.51947 l 4.37415 -2.52542"];
      break;
  }
};

SvsdChu = function() { SvsdChar.call(this, "SvsdChu", "ちゅ", "BSE5", "BSE", "SE", "black", false, p(1.4, -1.4)); };
SvsdChu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ちゅ"] = SvsdChu;

SvsdChu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.88596, 2.72296);
      this.paths = ["m 0 0 l -1.44106 0.224753 l 4.32702 2.49821"];
      break;
  }
};

SvsdCho = function() { SvsdChar.call(this, "SvsdCho", "ちょ", "BE5", "BE", "E", "black", false, p(0.7, -0.6)); };
SvsdCho.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ちょ"] = SvsdCho;

SvsdCho.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.31534, 1.21689);
      this.paths = ["m 0 0 c 0.05701 0.51133 -0.01331 0.9755 -0.685138 1.21689 h 5.00048"];
      break;
  }
};

SvsdNya = function() { SvsdChar.call(this, "SvsdNya", "にゃ", "HNER10", "HNER", "NER", "black", false, p(2.0, 3.7)); };
SvsdNya.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["にゃ"] = SvsdNya;

SvsdNya.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.16322, -5.51296);
      this.paths = ["m 0 0 c -1.62204 0.824997 -1.62645 -0.713151 -1.23316 -1.46891 c 1.43204 -2.65759 5.53253 -4.4211 8.39638 -4.04405"];
      break;
  }
};

SvsdNyu = function() { SvsdChar.call(this, "SvsdNyu", "にゅ", "HSER5", "HSER", "SER", "black", false, p(0.3, -0.7)); };
SvsdNyu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["にゅ"] = SvsdNyu;

SvsdNyu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.91552, 3.108);
      this.paths = ["m 0 0 c -0.712654 -0.37058 -0.213223 -1.776 0.94128 -1.776 c 4.20669 0 7.55693 3.32659 7.97424 4.884"];
      break;
  }
};

SvsdNyo = function() { SvsdChar.call(this, "SvsdNyo", "にょ", "HER10", "HER", "ER", "black", false, p(1.0, 1.0)); };
SvsdNyo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["にょ"] = SvsdNyo;

SvsdNyo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.95008, -1.49168);
      this.paths = ["m 0 0 c -0.408598 0.0908 -1.63705 -0.40273 -0.526477 -0.96521 c 2.77099 -1.40345 8.18462 -1.30163 9.47655 -0.52647"];
      break;
  }
};

SvsdHya = function() { SvsdChar.call(this, "SvsdHya", "ひゃ", "HNEL20", "HNEL", "NEL", "black", false, p(1.1, 3.2)); };
SvsdHya.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ひゃ"] = SvsdHya;

SvsdHya.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.512, -8.03582);
      this.paths = ["m 0 0 c -0.44368 0.21876 -2.23907 1.34031 0.11008 1.54112 c 6.38568 0.545861 15.9754 -7.88468 16.4019 -9.57693"];
      break;
  }
};

SvsdHyu = function() { SvsdChar.call(this, "SvsdHyu", "ひゅ", "HSEL20", "HSEL", "SEL", "black", false, p(1.3, -4.5)); };
SvsdHyu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ひゅ"] = SvsdHyu;

SvsdHyu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.2315, 9.63365);
      this.paths = ["m 0 0 c -0.17014 -0.467883 -1.31373 -1.15625 -1.29528 0.242865 c 0.0699 5.30391 10.9486 9.39078 17.5268 9.39078"];
      break;
  }
};

SvsdHyo = function() { SvsdChar.call(this, "SvsdHyo", "ひょ", "HEL20", "HEL", "EL", "black", false, p(0.9, -0.9)); };
SvsdHyo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ひょ"] = SvsdHyo;

SvsdHyo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(19.1008, -0.40448);
      this.paths = ["m 0 0 c -0.73608 -0.0775 -1.54974 0.74747 0.0449 1.30335 c 5.5211 1.9246 14.2539 0.0905 19.0559 -1.70783"];
      break;
  }
};

SvsdMya = function() { SvsdChar.call(this, "SvsdMya", "みゃ", "HNER20", "HNER", "NER", "black", false, p(1.4, 4.9)); };
SvsdMya.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["みゃ"] = SvsdMya;

SvsdMya.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.0307, -9.98572);
      this.paths = ["m 0 0 c -0.62337 0.381774 -1.92741 0.551066 -1.17219 -0.690083 c 3.47371 -5.70881 12.3661 -8.9155 17.2029 -9.29563"];
      break;
  }
};

SvsdMyu = function() { SvsdChar.call(this, "SvsdMyu", "みゅ", "HSER20", "HSER", "SER", "black", false, p(1.4, -3.3)); };
SvsdMyu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["みゅ"] = SvsdMyu;

SvsdMyu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(16.5672, 8.04594);
      this.paths = ["m 0 0 c -1.5538 0.156942 -1.77983 -1.26306 -0.68009 -1.37345 c 8.73284 -0.876559 15.2965 7.33849 17.2473 9.41939"];
      break;
  }
};

SvsdMyo = function() { SvsdChar.call(this, "SvsdMyo", "みょ", "HER20", "HER", "ER", "black", false, p(1.1, 1.8)); };
SvsdMyo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["みょ"] = SvsdMyo;

SvsdMyo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(18.8285, -2.44639);
      this.paths = ["m 0 0 c -1.45965 -0.17738 -1.23502 -1.32599 -0.44947 -1.69125 c 5.3708 -2.49722 14.441 -2.3491 19.278 -0.75514"];
      break;
  }
};

SvsdRya = function() { SvsdChar.call(this, "SvsdRya", "りゃ", "HNER5", "HNER", "NER", "black", false, p(1.6, 1.2)); };
SvsdRya.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["りゃ"] = SvsdRya;

SvsdRya.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.53439, -2.69789);
      this.paths = ["m 0 0 c -0.36823 0.368227 -2.18891 0.711058 -1.47158 -0.531402 c 0.78417 -1.35824 2.46741 -2.16649 4.00597 -2.16649"];
      break;
  }
};

SvsdRyu = function() { SvsdChar.call(this, "SvsdRyu", "りゅ", "HSER5", "HSER", "SER", "black", false, p(0.6, -0.0)); };
SvsdRyu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["りゅ"] = SvsdRyu;

SvsdRyu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.97901, 1.24447);
      this.paths = ["m 0 0 c -0.70076 -0.220877 -0.9241 -1.09027 0.11462 -1.22809 c 1.05338 -0.139766 3.5647 1.35408 3.86439 2.47256"];
      break;
  }
};

SvsdRyo = function() { SvsdChar.call(this, "SvsdRyo", "りょ", "HER5", "HER", "ER", "black", false, p(1.0, 0.8)); };
SvsdRyo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["りょ"] = SvsdRyo;

SvsdRyo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.0522, -0.5427);
      this.paths = ["m 0 0 c -0.80767 0.12029 -1.40235 -0.61714 -0.49447 -1.04923 c 1.45601 -0.69297 3.80519 -0.72052 4.54667 0.50653"];
      break;
  }
};

NakaneSau = function() { NakaneChar.call(this, "NakaneSau", "さう", "HSER7", "SER", "HSER", "black", false, p(0.1, -0.4)); };
NakaneSau.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["さう"] = NakaneSau;
NakaneChar.dict["さー"] = NakaneSau;
NakaneChar.dict["しゃー"] = NakaneSau;

NakaneSau.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.99247, 2.77592);
      this.paths = ["m 0 0 c -0.433207 -0.73908 0.668051 -1.83528 1.46016 -1.87949 c 2.16239 -0.12069 4.34984 3.12106 4.5323 4.65541"];
      break;
  }
};

NakaneShiu = function() { NakaneChar.call(this, "NakaneShiu", "しう", "HSEL7", "HSEL", "SEL", "black", false, p(2.2, -2.8)); };
NakaneShiu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["しう"] = NakaneShiu;
NakaneChar.dict["しゅう"] = NakaneShiu;
NakaneChar.dict["しゅー"] = NakaneShiu;

NakaneShiu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.47387, 5.77237);
      this.paths = ["m 0 0 c -1.04098 -0.44613 -2.08684 0.27803 -2.22108 1.09204 c -0.359554 2.18034 3.21281 4.35931 4.69495 4.68033"];
      break;
  }
};

NakaneSuu = function() { NakaneChar.call(this, "NakaneSuu", "すう", "HSER17", "HSER", "SER", "black", false, p(0.2, -3.0)); };
NakaneSuu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["すう"] = NakaneSuu;
NakaneChar.dict["すー"] = NakaneSuu;

NakaneSuu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(13.2143, 8.88492);
      this.paths = ["m 0 0 c -0.75026 -2.29816 1.34721 -2.97756 2.68163 -2.97241 c 5.28657 0.0203 9.76573 6.48869 10.5327 11.8573"];
      break;
  }
};

NakaneSuu.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 6.9478 1.19683 v 0.1"];
};

NakaneSeu = function() { NakaneChar.call(this, "NakaneSeu", "せう", "HSEL17", "HSEL", "SEL", "black", false, p(3.0, -4.2)); };
NakaneSeu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["せう"] = NakaneSeu;
NakaneChar.dict["しょう"] = NakaneSeu;
NakaneChar.dict["しょー"] = NakaneSeu;

NakaneSeu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.82898, 8.73353);
      this.paths = ["m 0 0 c -1.03276 -0.91145 -2.78552 0.004 -2.93197 1.02931 c -0.62372 4.3672 8.89978 7.67509 10.7609 7.70422"];
      break;
  }
};

NakaneSou = function() { NakaneChar.call(this, "NakaneSou", "そう", "HSER17", "HSER", "SER", "black", false, p(0.5, -2.2)); };
NakaneSou.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["そう"] = NakaneSou;
NakaneChar.dict["そお"] = NakaneSou;
NakaneChar.dict["そー"] = NakaneSou;

NakaneSou.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.3356, 7.14283);
      this.paths = ["m 0 0 c -1.51044 -1.394 0.88853 -2.55226 1.99799 -2.6973 c 5.216 -0.6819 10.514 3.29477 12.3376 9.84013"];
      break;
  }
};

ShugiinI = function() { ShugiinChar.call(this, "ShugiinI", "い", "C1", "C", "C", "black", false, p(0.0, 0.0)); };
ShugiinI.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["い"] = ShugiinI;

ShugiinI.prototype.setPaths = function() {
  switch (this.getPrevName()) {
    case "ShugiinSa":
      switch (this.getNextHeadType()) {
        case "E":
          this.dp = p(0.615012, -0.74596);
          this.paths = ["m 0 0 c -0.541048 0.54104 -0.925923 0.0196 -0.919867 -0.30317 c 0.00999 -0.5324 1.21468 -0.44279 1.53488 -0.44279"];
          return;

        case "SEL":
          this.dp = p(0, -0.51474);
          this.paths = ["m 0 0 c -0.28107 0 -0.64582 0.0755 -0.8369 -0.26317 c -0.14287 -0.25322 -0.0457 -0.55801 0.1579 -0.64476 c 0.2406 -0.10254 0.679 -0.10433 0.679 0.39319"];
          return;
      }
      break;
    case "ShugiinWa":
      this.dp = p(-0.235621, 0.17282);
      this.paths = ["m 0 0 c 0.145018 -0.14502 0.291705 -0.29887 0.216002 -0.58404 c -0.147216 -0.55455 -0.776542 -0.28056 -0.844546 0.038 c -0.09517 0.44576 0.183671 0.49195 0.392923 0.71886"];
      return;
  }


  switch (this.getPrevTailType()) {
    case "SW":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0 0 -0.394201 0.471 -0.743971 0.4044 c -0.409765 -0.078 -0.553299 -0.65228 -0.235375 -0.91059 c 0.317924 -0.25831 0.778264 0.10696 0.979346 0.50619"];
      return;

    case "SW3(-105)":
      this.dp = p(0, -0);
      this.paths = ["m 0 0 c 0 0 -0.166765 0.424431 -0.586489 0.215671 c -0.426086 -0.211925 -0.363193 -0.719452 -0.109296 -0.851343 c 0.278777 -0.144815 0.739301 -0.082882 0.695785 0.635672"];
      return

    case "E":
      switch (this.getNextName()) {
        case "ShugiinMo":
        case "ShugiinYa":
        case "ShugiinYama":
        case "ShugiinYar":
          this.dp = p(0.231884, -0.087087);
          this.paths = ["m 0 0 c 0.531938 0 0.463582 -0.871055 0.15213 -0.958428 c -0.363037 -0.101846 -0.697224 0.164938 -0.690248 0.437202 c 0.0075 0.294556 0.392251 0.434139 0.770002 0.434139"];
          return;

      case "ShugiinWa":
        this.tailType = "ECL1";
        this.dp = p(-0.72889, 0);
        this.paths = ["m 0 0 c 0.14967 0 0.37718 -0.205179 0.39297 -0.388761 c 0.021 -0.244533 -0.13387 -0.609218 -0.42732 -0.599618 c -0.2424 0.0079 -0.69454 0.988379 -0.69454 0.988379"];
        return;
      }
      switch (this.getNextHeadType()) {
        case "S":
          this.dp = p(-0.48609, 0);
          this.paths = ["m 0 0 c 0 0 0.44189 -0.07579 0.45641 -0.404876 c 0.0339 -0.769002 -0.92248 -0.750414 -0.9294 -0.353434 c -0.006 0.347058 -0.0131 0.75831 -0.0131 0.75831"];
          return;

        default:
          this.dp = p(0, 0);
          this.paths = ["m 0 0 c 0 0 0.43798 -0.076 0.45641 -0.40487 c 0.0339 -0.60503 -0.50935 -0.68205 -0.74905 -0.50101 c -0.25322 0.19125 -0.19097 0.7408 0.29264 0.90588"];
          return;
      }
      break;


    case "S":
      switch (this.getNextHeadType()) {
        case "E":
          this.dp = p(0, -0.67654);
          this.paths = ["m 0 0 c 0 0.369198 -0.356193 0.511223 -0.604386 0.460615 c -0.294778 -0.060107 -0.55366 -0.503403 -0.446324 -0.784448 c 0.131811 -0.345129 0.565089 -0.352707 1.05071 -0.352707"];
          return;

      case "S":
        this.dp = p(-0.007735, 0.020084);
        this.paths = ["m 0 0 c 0 0.41522 0.201078 0.491145 0.422933 0.522395 c 0.234208 0.03299 0.52145 -0.177905 0.581445 -0.406688 c 0.065225 -0.248726 -0.081781 -0.644457 -0.333812 -0.695442 c -0.29583 -0.059845 -0.678301 -0.103774 -0.678301 0.599819"];
        return;
      }

      switch (this.getNextName()) {
        case "ShugiinNoJoshi":
          this.dp = p(0.02864, -1.16057);
          this.paths = ["m 0 0 c 0 0.15331 0.0262 0.27166 -0.0858 0.35757 c -0.22186 0.17028 -0.68715 0.003 -0.76611 -0.2547 c -0.11535 -0.37579 0.53563 -0.91851 0.88055 -1.26344"];
          return;

        case "ShugiinWa":
        case "ShugiinWan":
          this.dp = p(0.728996, 0.427119);
          this.paths = ["m 0 0 c 0 0.421238 -0.063047 0.892053 0.134591 1.16285 c 0.135415 0.185541 0.519631 0.188835 0.686635 -0.05829 c 0.152743 -0.226022 0.04513 -0.522534 -0.09223 -0.67744"];
          return;
      }

    case "SE":
      switch (this.getNextHeadType()) {
        case "S":
          this.dp = p(-0.230276, -0.230275);
          this.paths = ["m 0 0 c 0.113783 0.113783 0.547556 0.153511 0.671533 -0.033193 c 0.167187 -0.251775 -0.013468 -0.794088 -0.310094 -0.85201 c -0.28876 -0.056386 -0.5775 0.132473 -0.591715 0.654928"];
          return;

        case "SE":
          this.dp = p(0, 0);
          this.paths = ["m 0 0 c 0 0 0.270652 0.238868 0.396643 0.169571 c 0.265747 -0.146164 0.342449 -0.667074 0.14594 -0.898093 c -0.140624 -0.16532 -0.48747 -0.163648 -0.651117 0 c -0.257196 0.257196 -0.135013 0.484975 0.108534 0.728522"];
          return;
      }

    case "W":
      switch (this.getNextHeadType()) {
        case "SE":
          this.dp = p(0.733521, -2e-06);
          this.paths = ["m 0 0 c 0 0 -0.316611 0.00912 -0.457383 0.00912 c -0.223564 0 -0.494178 -0.322107 -0.336107 -0.615939 c 0.158071 -0.293832 0.573724 -0.346469 1.52701 0.606817"];
          return;
      }
  }

  switch (this.getPrevName() + "_" + this.getNextName()) {
    case "ShugiinSa_ShugiinMo":
      this.dp = p(-0.177101, -0.754);
      this.paths = ["m 0 0 c -0.218576 0.26599 -0.616914 0.51838 -0.732898 0.42453 c -0.24879 -0.20133 0.17792 -0.81542 0.555797 -1.17853"];
      return;

    case "ShugiinSa_ShugiinWa":
      this.tailType = "SRCR1";
      this.dp = p(-0.576851, 0.21418);
      this.paths = ["m 0 0 c -0.541048 0.54105 -0.976127 0.036 -0.892868 -0.27617 c 0.08135 -0.30478 0.461129 -0.34952 0.687252 -0.24169 c 0.236318 0.11269 0.232508 0.38808 0.131986 0.49972 c -0.187493 0.20824 -0.324296 0.23232 -0.503221 0.23232"];
      return;

    case "ShugiinDan_ShugiinO":
    case "ShugiinDan_ShugiinWo":
      this.tailType = "ShugiinDan_CR1";
      this.dp = p(0.118877, -0.44366);
      this.paths = ["m 0 0 c -0.677453 0.01 -0.918562 -0.35552 -0.760011 -0.66991 c 0.1041 -0.20642 0.451183 -0.344 0.653512 -0.23217 c 0.209325 0.11569 0.260365 0.32784 0.225376 0.45842"];
      return;

    case "ShugiinO_ShugiinE":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0 0 -0.451393 0.497458 -0.725258 0.432471 c -0.315806 -0.074941 -0.476729 -0.827498 -0.188593 -1.02287 c 0.300163 -0.20353 0.64672 0.323271 0.913851 0.590402"];
      return;
  }


  switch (this.getNextName()) {
    case "ShugiinMa":
      this.dp = p(-0.47718, 0.488032);
      this.paths = ["m 0 0 c 0.230852 0.162954 0.487822 0.703732 0.287574 0.978429 c -0.134369 0.184326 -0.508759 0.16309 -0.684094 0.01718 c -0.131684 -0.109582 -0.22267 -0.337257 -0.08066 -0.507577"];
      return;

    case "ShugiinYa":
      this.dp = p(-0.021124, 0.775046);
      this.paths = ["m 0 0 c 0 0 0.897129 0.285185 0.92401 0.663395 c 0.02007 0.282433 -0.245278 0.647803 -0.613014 0.58801 c -0.316895 -0.05153 -0.33212 -0.476359 -0.33212 -0.476359"];
      return;

    case "ShugiinWa":
    case "ShugiinWan":
      this.dp = p(0.207821, 0.192747);
      this.paths = ["m 0 0 c -0.466061 0.272883 -0.584222 0.657681 -0.386584 0.928477 c 0.135415 0.185541 0.519631 0.188835 0.686635 -0.05829 c 0.152743 -0.226022 0.04513 -0.522534 -0.09223 -0.67744"];
      return;

    case "ShugiinNaka":
      this.dp = p(0.251928, 0.085957);
      this.paths = ["m 0 0 c -0.278796 0.23402 -0.530635 0.485385 -0.32243 0.812397 c 0.210965 0.331347 0.61042 0.141188 0.754771 -0.06604 c 0.130432 -0.18725 0.07686 -0.557258 -0.180413 -0.6604"];
      return;

     case "ShugiinSa":
      this.dp = p(-1.05553, -0.807372);
      this.paths = ["m 0 0 c -0.417828 0.132827 -0.890307 0.202654 -1.08949 -0.02803 c -0.169937 -0.196813 -0.164378 -0.611183 0.03396 -0.779342"];
       return;

    case "ShugiinSa":
    case "ShugiinSan":
      this.dp = p(-0.510915, -0.741282);
      this.paths = ["m 0 0 c -0.417828 0.132827 -0.890307 0.202654 -1.08949 -0.02803 c -0.169937 -0.196813 -0.164378 -0.611183 0.03396 -0.779342 c 0.139483 -0.118262 0.394332 -0.12217 0.544614 0.06609"];
      return;

    case "ShugiinA":
    case "ShugiinAruiwa":
      this.dp = p(-0.423619, -0.429879);
      this.paths = ["m 0 0 c 0.29907 -0.320073 0.510338 -0.562221 0.39126 -0.85075 c -0.09077 -0.219935 -0.459964 -0.363382 -0.668807 -0.249385 c -0.200708 0.109557 -0.338361 0.404327 -0.146072 0.670256"];
      return;

    case "ShugiinNo":
      this.dp = p(-0.452214, 0.0573);
      this.paths = ["m 0 0 c 0.128968 -0.15406 0.02815 -0.94444 -0.384077 -0.8884 c -0.279379 0.038 -0.500855 0.37854 -0.463648 0.63908 c 0.02358 0.16514 0.152969 0.31493 0.395511 0.30662"];
      return;
  }


  switch (this.getNextModel().replace(/(^[A-Z]+\d+).*/, "$1")) {
    case "SER7":
      this.dp = p(-0.468311, 0.03851);
      this.paths = ["m 0 0 c 0.193886 0.269213 0.02673 0.901073 -0.307291 0.992085 c -0.248109 0.0676 -0.560721 -0.262302 -0.570539 -0.519269 c -0.0076 -0.198832 0.199576 -0.4069 0.409519 -0.434306"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(-0.32498, 0);
      this.paths = ["m 0 0 c 0.114894 -0.2784 0.194674 -1.00327 -0.42469 -1.04932 c -0.305888 -0.02275 -0.662286 0.368694 -0.609515 0.689387 c 0.073705 0.447908 0.709225 0.359934 0.709225 0.359934"];
      break;

    case "SE":
      this.dp = p(-0.16359, -0.163591);
      this.paths = ["m 0 0 c 0.062312 0.371346 -0.030336 0.762122 -0.313115 0.794342 c -0.314572 0.03584 -0.649537 -0.486264 -0.538177 -0.782641 c 0.083206 -0.221448 0.475601 -0.387393 0.687702 -0.175292"];
      break;

    case "S":
      this.dp = p(0, -0.51474);
      this.paths = ["m 0 0 c -0.28107 0 -0.64582 0.0755 -0.8369 -0.26317 c -0.14287 -0.25322 -0.0457 -0.55801 0.1579 -0.64476 c 0.2406 -0.10254 0.679 -0.10433 0.679 0.39319"];
      break;

    default:
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c -0.0019 -0.239338 0.260415 -0.524292 0.499607 -0.515722 c 0.217215 0.0078 0.421049 0.28226 0.419024 0.499605 c -0.002 0.220837 -0.214426 0.492005 -0.435141 0.499607 c -0.227784 0.0078 -0.481681 -0.255578 -0.48349 -0.48349"];
      break;
  }
};

ShugiinU = function() { ShugiinChar.call(this, "ShugiinU", "う", "S3", "S", "S", "black", false, p(3.7 - 5, -7)); };
ShugiinU.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["う"] = ShugiinU;

ShugiinU.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "S":
    case "SEL":
      this.dp = p(0 + 0.5, 3);
      this.paths = ["m0,0v3h0.5"];
      break;

    default:
      this.dp = p(0, 3);
      this.paths = ["m0,0v3"];
      break;
  }
};

ShugiinE = function() { ShugiinChar.call(this, "ShugiinE", "え", "SE3", "SE", "SE", "black", false, p(0.0, -1.1)); };
ShugiinE.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["え"] = ShugiinE;
ShugiinChar.dict["あなた"] = ShugiinE;

ShugiinE.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "SE":
      this.dp = p(2.47487, 1.76777);
      this.paths = ["m 0 0 l 2.12132 2.12132 l 0.353553 -0.353553"];
      break;

    default:
      this.dp = p(2.12132, 2.12132);
      this.paths = ["m 0 0 l 2.12132 2.12132"];
      break;
  }
};

ShugiinAruiwa = function() { ShugiinChar.call(this, "ShugiinAruiwa", "あるいは", "EL3UWL3", "EL", "EL", "black", false, p(0.0, -0.8)); };
ShugiinAruiwa.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["あるいは"] = ShugiinAruiwa;

ShugiinAruiwa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.58978, 1.7229);
      this.paths = ["m 0 0 c 0.785603 1.08466 2.56061 1.14564 3 0 c 0.376304 -0.981145 -1.64281 -0.161104 -1.55945 0.907136 c 0.11455 1.46792 1.62107 1.31255 2.14923 0.815765"];
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

SvsdGa = function() { SvsdChar.call(this, "SvsdGa", "が", "NEL10", "NEL", "NEL", "black", false, p(0.0, 2.3)); };
SvsdGa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["が"] = SvsdGa;
SvsdGa.prototype.setPaths = SvsdKa.prototype.setPaths;
SvsdGa.prototype.setPathsExtra = function() { this.pathsExtra = ["m 4.8752 -1.39443 l 0.599564 0.98706"]; };

SvsdGi = function() { SvsdChar.call(this, "SvsdGi", "ぎ", "SWL10", "SWL", "SWL", "black", false, p(5.1, -4.3)); };
SvsdGi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぎ"] = SvsdGi;
SvsdGi.prototype.setPaths = SvsdKi.prototype.setPaths;
SvsdGi.prototype.setPathsExtra = function() { this.pathsExtra = ["m -4.13682 2.87398 l 1.16572 0.94399"]; };

SvsdGu = function() { SvsdChar.call(this, "SvsdGu", "ぐ", "SEL10", "SEL", "SEL", "black", false, p(0.0, -2.6)); };
SvsdGu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぐ"] = SvsdGu;
SvsdGu.prototype.setPaths = SvsdKu.prototype.setPaths;
SvsdGu.prototype.setPathsExtra = function() { this.pathsExtra = ["m 3.49698 3.77787 l -1.06066 1.06066"]; };

SvsdGe = function() { SvsdChar.call(this, "SvsdGe", "げ", "SL10", "SL", "SL", "black", false, p(2.1, -5.0)); };
SvsdGe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["げ"] = SvsdGe;
SvsdGe.prototype.setPaths = SvsdKe.prototype.setPaths;
SvsdGe.prototype.setPathsExtra = function() { this.pathsExtra = ["m -2.09972 4.40898 l 1.14907 0.96418"]; };

SvsdGo = function() { SvsdChar.call(this, "SvsdGo", "ご", "EL10", "EL", "EL", "black", false, p(0.0, -0.5)); };
SvsdGo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ご"] = SvsdGo;
SvsdGo.prototype.setPaths = SvsdKo.prototype.setPaths;
SvsdGo.prototype.setPathsExtra = function() { this.pathsExtra = ["m 4.15325 1.16892 l 1.06066 1.06066"]; };

SvsdZa = function() { SvsdChar.call(this, "SvsdZa", "ざ", "NEL5", "NEL", "NEL", "black", false, p(0.0, 1.1)); };
SvsdZa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ざ"] = SvsdZa;
SvsdZa.prototype.setPaths = SvsdSa.prototype.setPaths;
SvsdZa.prototype.setPathsExtra = function() { this.pathsExtra = ["m 2.04372 -1.08109 l 1.06066 1.06066"]; };

SvsdJi = function() { SvsdChar.call(this, "SvsdJi", "じ", "SWR5", "SWR", "SWR", "black", false, p(2.6, -2.2)); };
SvsdJi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["じ"] = SvsdJi;
SvsdJi.prototype.setPaths = SvsdShi.prototype.setPaths;
SvsdJi.prototype.setPathsExtra = function() { this.pathsExtra = ["m -2.39211 1.13786 l 1.06066 1.06066"]; };

SvsdZu = function() { SvsdChar.call(this, "SvsdZu", "ず", "SEL5", "SEL", "SEL", "black", false, p(0.0, -1.4)); };
SvsdZu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ず"] = SvsdZu;
SvsdZu.prototype.setPaths = SvsdSu.prototype.setPaths;
SvsdZu.prototype.setPathsExtra = function() { this.pathsExtra = ["m 1.97011 1.67192 l -0.902722 1.19795"]; };

SvsdZe = function() { SvsdChar.call(this, "SvsdZe", "ぜ", "SL5", "SL", "SL", "black", false, p(1.4, -2.5)); };
SvsdZe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぜ"] = SvsdZe;
SvsdZe.prototype.setPaths = SvsdSe.prototype.setPaths;
SvsdZe.prototype.setPathsExtra = function() { this.pathsExtra = ["m -1.40471 2.23215 l 1.29904 0.75"]; };

SvsdZo = function() { SvsdChar.call(this, "SvsdZo", "ぞ", "EL5", "EL", "EL", "black", false, p(0.0, -0.8)); };
SvsdZo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぞ"] = SvsdZo;
SvsdZo.prototype.setPaths = SvsdSo.prototype.setPaths;
SvsdZo.prototype.setPathsExtra = function() { this.pathsExtra = ["m 2.64596 0.37604 l 0.75 1.29904"]; };

SvsdDa = function() { SvsdChar.call(this, "SvsdDa", "だ", "NE5", "NE", "NE", "black", false, p(0.0, 1.2)); };
SvsdDa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["だ"] = SvsdDa;
SvsdDa.prototype.setPaths = SvsdTa.prototype.setPaths;
SvsdDa.prototype.setPathsExtra = function() { this.pathsExtra = ["m 1.71053 -1.8911 l 0.75 1.29904"]; };

SvsdDi = function() { SvsdChar.call(this, "SvsdDi", "ぢ", "SW5", "SW", "SW", "black", false, p(2.5, -2.2)); };
SvsdDi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぢ"] = SvsdDi;
SvsdDi.prototype.setPaths = SvsdChi.prototype.setPaths; 
SvsdDi.prototype.setPathsExtra = function() { this.pathsExtra = ["m -1.91596 1.66735 l 1.29904 0.75"]; };

SvsdDu = function() { SvsdChar.call(this, "SvsdDu", "づ", "SE5", "SE", "SE", "black", false, p(0.0, -1.2)); };
SvsdDu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["づ"] = SvsdDu;
SvsdDu.prototype.setPaths = SvsdTsu.prototype.setPaths;
SvsdDu.prototype.setPathsExtra = function() { this.pathsExtra = ["m 2.60497 0.75888 l -0.75 1.29904"]; };

SvsdDe = function() { SvsdChar.call(this, "SvsdDe", "で", "S5", "S", "S", "black", false, p(0.6, -2.5)); };
SvsdDe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["で"] = SvsdDe;
SvsdDe.prototype.setPaths = SvsdTe.prototype.setPaths;
SvsdDe.prototype.setPathsExtra = function() { this.pathsExtra = ["m -0.62853 2.20516 l 1.22873 0.86037"]; };

SvsdDo = function() { SvsdChar.call(this, "SvsdDo", "ど", "E5", "E", "E", "black", false, p(0.0, 0.0)); };
SvsdDo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ど"] = SvsdDo;
SvsdDo.prototype.setPaths = SvsdTo.prototype.setPaths;
SvsdDo.prototype.setPathsExtra = function() { this.pathsExtra = ["m 2.02082 -0.54013 l 1.06066 1.06066"]; };

SvsdBa = function() { SvsdChar.call(this, "SvsdBa", "ば", "NEL20", "NEL", "NEL", "black", false, p(0.0, 5.0)); };
SvsdBa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ば"] = SvsdBa;
SvsdBa.prototype.setPaths = SvsdHa.prototype.setPaths;
SvsdBa.prototype.setPathsExtra = function() { this.pathsExtra = ["m 8.91412 -3.36897 l 0.860365 1.22873"]; };

SvsdBi = function() { SvsdChar.call(this, "SvsdBi", "び", "SWL20", "SWL", "SWL", "black", false, p(10.2, -8.7)); };
SvsdBi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["び"] = SvsdBi;
SvsdBi.prototype.setPaths =  SvsdHi.prototype.setPaths;
SvsdBi.prototype.setPathsExtra = function() { this.pathsExtra = ["m -7.7257 7.69639 l 0.75 1.29904"]; };

SvsdBu = function() { SvsdChar.call(this, "SvsdBu", "ぶ", "SEL20", "SEL", "SEL", "black", false, p(0.0, -5.1)); };
SvsdBu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぶ"] = SvsdBu;
SvsdBu.prototype.setPaths = SvsdHu.prototype.setPaths;
SvsdBu.prototype.setPathsExtra = function() { this.pathsExtra = ["m 6.63739 7.27088 l -0.75 1.29904"]; };

SvsdBe = function() { SvsdChar.call(this, "SvsdBe", "べ", "UWL5", "SWL", "SEL", "black", false, p(3.4, -2.6)); };
SvsdBe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["べ"] = SvsdBe;
SvsdBe.prototype.setPaths = SvsdHe.prototype.setPaths;
SvsdBe.prototype.setPathsExtra = function() { this.pathsExtra = ["m -3.35943 2.33373 l 1.29904 0.75"]; };

SvsdBo = function() { SvsdChar.call(this, "SvsdBo", "ぼ", "EL20", "EL", "EL", "black", false, p(0.0, -0.6)); };
SvsdBo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぼ"] = SvsdBo;
SvsdBo.prototype.setPaths = SvsdHo.prototype.setPaths; 
SvsdBo.prototype.setPathsExtra = function() { this.pathsExtra = ["m 9.33952 1.9409 l 0.96419 1.14907"]; };

SvsdPa = function() { SvsdChar.call(this, "SvsdPa", "ぱ", "NEL20", "NEL", "NEL", "black", false, p(0.0, 4.7)); };
SvsdPa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぱ"] = SvsdPa;
SvsdPa.prototype.setPaths = SvsdHa.prototype.setPaths;
SvsdPa.prototype.setPathsExtra = function() { this.pathsExtra = ["m 2.06935 -0.90993 v 1.5"]; };

SvsdPi = function() { SvsdChar.call(this, "SvsdPi", "ぴ", "SWL20", "SWL", "SWL", "black", false, p(10.2, -8.7)); };
SvsdPi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぴ"] = SvsdPi;
SvsdPi.prototype.setPaths = SvsdHi.prototype.setPaths; 
SvsdPi.prototype.setPathsExtra = function() { this.pathsExtra = ["m -2.08899 0.99665 l 0.860365 1.22873"]; };

SvsdPu = function() { SvsdChar.call(this, "SvsdPu", "ぷ", "SEL20", "SEL", "SEL", "black", false, p(0.2, -5.1)); };
SvsdPu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぷ"] = SvsdPu;
SvsdPu.prototype.setPaths = SvsdHu.prototype.setPaths;
SvsdPu.prototype.setPathsExtra = function() { this.pathsExtra = ["m 1.06167 1.71053 l -1.29904 0.75"]; };

SvsdPe = function() { SvsdChar.call(this, "SvsdPe", "ぺ", "WL5", "SWL", "SEL", "black", false, p(2.8, -2.6)); };
SvsdPe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぺ"] = SvsdPe;
SvsdPe.prototype.setPaths = SvsdHe.prototype.setPaths; 
SvsdPe.prototype.setPathsExtra = function() { this.pathsExtra = ["m -2.11771 0.5074 l 1.06066 1.06066"]; };

SvsdPo = function() { SvsdChar.call(this, "SvsdPo", "ぽ", "EL20", "EL", "EL", "black", false, p(0.0, -1.3)); };
SvsdPo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぽ"] = SvsdPo;
SvsdPo.prototype.setPaths = SvsdHo.prototype.setPaths;
SvsdPo.prototype.setPathsExtra = function() { this.pathsExtra = ["m 1.86819 0.42815 l -0.75 1.29904"]; };


ShugiinEJoshi = function() { ShugiinChar.call(this, "ShugiinEJoshi", "〜へ", "SE2", "SE", "SE", "black", false, p(0.0, -0.7)); };
ShugiinEJoshi.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["〜へ"] = ShugiinEJoshi;

ShugiinEJoshi.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.41421, 1.41421);
      this.paths = ["m 0 0 l 1.41421 1.41421"];
      break;
  }
};

ShugiinEno = function() { ShugiinChar.call(this, "ShugiinEno", "~への", "SE2NE2F", "SE", "NEF", "black", false, p(0.0, -0.5)); };
ShugiinEno.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["〜への"] = ShugiinEno;

ShugiinEno.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.18658, -0.379418);
      //this.paths = ["m 0 0 l 1.41608 1.41608 l 1.41609 -1.41608", "m 4.18658 -0.479418 v 0.1"];
      this.paths = ["m 0 0 l 1.41608 1.41608 l 1.41609 -1.41608"];
      break;
  }
};

ShugiinTe = function() { ShugiinChar.call(this, "ShugiinTe", "て", "SE7", "SE", "SE", "black", false, p(0.0, -2.5)); };
ShugiinTe.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["て"] = ShugiinTe;
ShugiinChar.dict["で"] = ShugiinTe;

ShugiinTe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(4.94975, 4.94975);
      this.paths = ["m 0 0 l 4.94975 4.94975"];
      break;
  }
};

ShugiinEte = function() { ShugiinChar.call(this, "ShugiinEte", "えて", "SE3W2", "SE", "W", "black", false, p(0.0, -1.1)); };
ShugiinEte.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["えて"] = ShugiinEte;

ShugiinEte.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0.12132, 2.12132);
      this.paths = ["m 0 0 l 2.12132 2.12132 h -2"];
      break;
  }
};

ShugiinMade = function() { ShugiinChar.call(this, "ShugiinMade", "まで", "TE3", "TE", "E", "black", false, p(0.0, 0.0)); };
ShugiinMade.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["まで"] = ShugiinMade;
ShugiinChar.dict["〜まで"] = ShugiinMade;

ShugiinMade.prototype.setPaths = function() {
  switch (this.getPrevName()) {
    case "CharDottedCircle":
      this.dp = p(3, 0);
      this.paths = ["m 0 0 h 3"];
      break;

    default:
      this.dp = p(3, 0);
      this.paths = ["m 0 0 h 3"];
      break;
  }
};

ShugiinNode = function() { ShugiinChar.call(this, "ShugiinNode", "〜ので", "XSE3F|P", "XSE|P", "SEF|P", "black", false, p(0.0, -1.0)); };
ShugiinNode.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["〜ので"] = ShugiinNode;
ShugiinChar.dict["ので"] = ShugiinNode;

ShugiinNode.prototype.setPaths = function() {
  const prevName = this.getPrevName();
  const nextName = this.getNextName();

  switch (prevName + "_" + nextName) {
    case "CharDottedCircle_ShugiinWa":
      this.dp = p(1, -0.5);
      return;

    case "CharDottedCircle_ShugiinMo":
      this.dp = p(-1, 0);
      return;

    case "CharDottedCircle_ShugiinA":
      this.dp = p(-1, 0);
      return;
  }

  switch (nextName) {
    case "ShugiinWa":
      this.dp = p(1, -0.5);
      return;

    case "ShugiinMo":
      this.dp = p(-1, 0);
      return;

    case "ShugiinA":
      this.dp = p(-1, 0);
      return;
  }

  switch (prevName) {
    case "CharDottedCircle":
      this.dp = p(3.76592 - 1.5, 3.29054 + 1);
      this.paths = ["m-1.5,1 l 2.29813 1.92836"];
      break;

    default:
      this.dp = p(3.76592 - 2, 3.29054 - 1);
      //this.paths = ["m 0 0 l 2.29813 1.92836", "m 3.83022 3.21394 l -0.0643 0.0766"];
      this.paths = ["m-2,-1 l 2.29813 1.92836"];
      break;
  }
};


NakaneTau = function() { NakaneChar.call(this, "NakaneTau", "たう", "UNWR2SE7", "NWR", "SE", "black", false, p(0.6, 0.1)); };
NakaneTau.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["たう"] = NakaneTau;
NakaneChar.dict["たー"] = NakaneTau;
NakaneChar.dict["たあ"] = NakaneTau;
NakaneChar.dict["ちゃー"] = NakaneTau;
NakaneChar.dict["ちゃあ"] = NakaneTau;

NakaneTau.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.45556, 1.55943);
      this.paths = ["m 0 0 c -1.61343 -2.09969 0.279789 -2.00573 0.926933 -1.63213 l 5.52862 3.19156"];
      break;
  }
};

NakaneChiu = function() { NakaneChar.call(this, "NakaneChiu", "ちう", "UNR2S7", "NER", "S", "black", false, p(0.0, -2.2)); };
NakaneChiu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ちう"] = NakaneChiu;
NakaneChar.dict["ちゅー"] = NakaneChiu;
NakaneChar.dict["ちゅう"] = NakaneChiu;

NakaneChiu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.25097, 5.70055);
      this.paths = ["m 0 0 c -0.229364 -0.85601 2.25097 -2.47525 2.25097 -0.0584 v 5.75895"];
      break;
  }
};

NakaneTsuu = function() { NakaneChar.call(this, "NakaneTsuu", "つう", "USWL2NE17", "SWL", "NE", "black", false, p(0.4, 1.6)); };
NakaneTsuu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["つー"] = NakaneTsuu;
NakaneChar.dict["つう"] = NakaneTsuu;

NakaneTsuu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.801, -5.56544);
      this.paths = ["m 0 0 c -0.7807 1.55675 -0.329385 3.17154 1.61164 2.0507 l 13.1893 -7.61614"];
      break;
  }
};

NakaneTeu = function() { NakaneChar.call(this, "NakaneTeu", "てう", "UNR2S17", "NER", "S", "black", false, p(0.0, -7.2)); };
NakaneTeu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["てう"] = NakaneTeu;
NakaneChar.dict["ちょう"] = NakaneTeu;
NakaneChar.dict["ちょー"] = NakaneTeu;

NakaneTeu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(2.25096, 15.6776);
      this.paths = ["m 0 0 c -0.22937 -0.85601 2.25452 -2.47525 2.25096 -0.0584 l 0 15.736"];
      break;
  }
};


NakaneTou = function() { NakaneChar.call(this, "NakaneTou", "とう", "UNWR2SE17", "NWR", "SE", "black", false, p(0.4, -1.9)); };
NakaneTou.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["とう"] = NakaneTou;
NakaneChar.dict["とー"] = NakaneTou;
NakaneChar.dict["とお"] = NakaneTou;

NakaneTou.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(15.2987, 6.15951);
      this.paths = ["m 0 0 c -1.03972 -1.7483 0.0789 -2.78181 1.2893 -2.0707 l 14.0094 8.23021"];
      break;
  }
};


GreggTen = function() { GreggChar.call(this, "GreggTen", "tn", "NER9", "NER", "NER", "black", false, p(0.0, 2.7)); };
GreggTen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["tn"] = GreggTen;

GreggTen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(7.39164, -5.32084);
      this.paths = ["m 0 0 c 0 -2.6277 4.99909 -5.32084 7.39164 -5.32084"];
      break;
  }
};

GreggTm = function() { GreggChar.call(this, "GreggTm", "tm", "NER17", "NER", "NER", "black", false, p(0.2, 4.3)); };
GreggTm.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["tm"] = GreggTm;

GreggTm.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(14.7224, -8.5);
      this.paths = ["m 0 0 c -2.04411 -3.54051 11.6218 -9.24816 14.7224 -8.5"];
      break;
  }
};

GreggNt = function() { GreggChar.call(this, "GreggNt", "nt", "NEL10", "NEL", "NEL", "black", false, p(0.0, 2.9)); };
GreggNt.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["nt"] = GreggNt;

GreggNt.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.19152, -5.73577);
      this.paths = ["m 0 0 c 3.13717 0 6.54403 -2.88223 8.19152 -5.73577"];
      break;
  }
};

GreggMt = function() { GreggChar.call(this, "GreggMt", "mt", "NEL15", "NEL", "NEL", "black", false, p(0.0, 4.2)); };
GreggMt.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["mt"] = GreggMt;

GreggMt.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(12.2873, -8.60365);
      this.paths = ["m 0 0 c 4.2672 1.14339 12.2873 -5.77168 12.2873 -8.60365"];
      break;
  }
};

GreggDf = function() { GreggChar.call(this, "GreggDf", "df", "UNER10", "NER", "SWR", "black", false, p(0.4, 3.0)); };
GreggDf.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["df"] = GreggDf;

GreggDf.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(6.28905, 0.75469);
      this.paths = ["m 0 0 c -2.44631 -1.41238 7.57213 -9.02184 10.4194 -6.16259 c 1.89499 1.90292 -1.73645 5.66827 -4.13039 6.91728"];
      break;
  }
};

GreggJnt = function() { GreggChar.call(this, "GreggJnt", "jnt", "USWL9", "SWL", "NEL", "black", false, p(4.1, -4.0)); };
GreggJnt.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["jnt"] = GreggJnt;

GreggJnt.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(5.48515, 1.41858);
      this.paths = ["m 0 0 c -4.84052 2.79467 -4.86817 6.02382 -2.69529 7.61302 c 2.76078 2.01917 9.10396 -2.7478 8.18044 -6.19444"];
      break;
  }
};

GreggPeriod = function() { GreggChar.call(this, "GreggPeriod", "period", "SE3", "SE", "SE", "black", false, p(0.0, 0.0)); };
GreggPeriod.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["."] = GreggPeriod;

GreggPeriod.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.76777, 1.76777);
      this.paths = ["m 0 0 l 1.76777 1.76777"];
      break;
  }
};

GreggParagraph = function() { GreggChar.call(this, "GreggParagraph", ">", "SE3SW3", "SE", "SW", "black", false, p(0.2, -1.5)); };
GreggParagraph.prototype = Object.create(GreggChar.prototype);
GreggChar.dict[">"] = GreggParagraph;

GreggParagraph.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.188166, 3.01068);
      this.paths = ["m 0 0 l 3.01068 1.44262 l -3.19884 1.56806"];
      break;
  }
};

GreggInterrogation = function() { GreggChar.call(this, "GreggInterrogation", "?", "SW3XSE2", "SW", "XSE", "black", false, p(2.7, -0.9)); };
GreggInterrogation.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["?"] = GreggInterrogation;

GreggInterrogation.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.56098, 1.63196);
      this.paths = ["m 0 0 l -2.65193 1.86145", "m -1.68295 -0.0255 l 1.12197 1.65746"];
      break;
  }
};

GreggDash = function() { GreggChar.call(this, "GreggDash", "=", "NE9/NE9", "NE", "NE", "black", false, p(0.0, 0.1)); };
GreggDash.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["="] = GreggDash;

GreggDash.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(8.81902, 0);
      this.paths = ["m 0 0 l 9.26999 -1.15249", "m 0.20043 0.95205 l 8.61859 -0.95205"];
      break;
  }
};

GreggHyphen = function() { GreggChar.call(this, "GreggHyphen", "-", "NE3/NE3", "NE", "NE", "black", false, p(0.0, 0.2)); };
GreggHyphen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["-"] = GreggHyphen;

GreggHyphen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(3.62613, -0.50363);
      this.paths = ["m 0 0 l 2.86062 -0.90653", "m 0.50364 0.54392 l 3.12249 -1.04755"];
      break;
  }
};

GreggLparen = function() { GreggChar.call(this, "GreggLparen", "{", "SWL14XE4", "SWL", "E", "black", false, p(9.6, -6.0)); };
GreggLparen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["{"] = GreggLparen;

GreggLparen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-5.05572 + 1, 7.7858);
      this.paths = ["m 0 0 c -4.3274 2.49843 -11.5186 9.32289 -6.82522 12.0326", "m -9.55531 8.08915 l 4.49959 -0.30335"];
      break;
  }
};

GreggRparen = function() { GreggChar.call(this, "GreggRparen", "}", "SWR14XE4", "SWR", "E", "black", false, p(7.7, -5.9)); };
GreggRparen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["}"] = GreggRparen;

GreggRparen.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(1.01114 + 1, 7.28024);
      this.paths = ["m 0 0 c 4.36948 1.1708 -4.489 11.2391 -7.73525 11.7798", "m -4.09513 7.68469 l 5.10627 -0.40445"];
      break;
  }
};

GreggComma = function() { GreggChar.call(this, "GreggComma", ",", "SWR1", "SWR", "SWR", "black", false, p(0.8, 2)); };
GreggComma.prototype = Object.create(GreggChar.prototype);
GreggChar.dict[","] = GreggComma;

GreggComma.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-0.76722 + 1, 0.9386 + 1);
      this.paths = ["m 1 1 c -0.0503 0.0587 -0.62881 -0.49788 -0.0457 -0.69136 c 0.22191 -0.0736 0.18473 0.18808 0.18546 0.30789 c 0.003 0.53578 -0.69905 1.3394 -0.90698 1.32207"];
      break;
  }
};

GreggIng = function() { GreggChar.call(this, "GreggIng", "ing", "P", "P", "P", "black", true, p(0.0, 0.0)); };
GreggIng.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["ing"] = GreggIng;

GreggIng.prototype.setPaths = function() {
  switch (this.getPrevTailType()) {

    default:
      this.dp = p(0, 2.1);
      break;
  }

  if (this.getNextHeadType() == "") {
    this.paths = ["m 0 2 v 0.1"];
  }
};
