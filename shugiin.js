ShugiinChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
ShugiinChar.prototype = Object.create(Char.prototype);
ShugiinChar.dict = {};
Char.catalog["shugiin"] = ShugiinChar.dict;

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
  this.dp = p(7 + 2, 0);

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  switch (_name) {
    case "ShugiinIn":
      this.dp = p(7 + 2, 1);
      return;
  }

  //switch (_model) {}

  //switch (_head) {}
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

    case "ShugiinHar":
      this.dp = p(7.5 - 0, -3);
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
  this.dp = p(-0.357092, 6.9689422 + 2);

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  switch (_name) {
    case "ShugiinIn":
      this.dp = p(-0.357092 + 2, 6.9689422);
      return;

  }

  //switch (_model) {}

  switch (_head) {
    case "NER":
      this.dp = p(-0.357092 + 2, 6.9689422);
      return;
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
  this.dp = p(0 + 1.5, 7 - 2);

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  switch (_name) {
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

    case "ShugiinIn":
      this.dp = p(0 + 1.5, 7 - 1);
      return;
  }

  //switch (_model) {}

  //switch (_head) {}
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
  this.dp = p(7 + 1.41, 0 + 1.41);

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  switch (_name) {
    case "ShugiinIn":
      this.dp = p(7 + 1.1, 0 + 1.1);
      return;
  }

  //switch (_model) {}

  //switch (_head) {}


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


ShugiinYama = function() { ShugiinChar.call(this, "ShugiinYama", "やま", "NER14", "NER", "NER", "black", false, p(0.0, 4.4)); };
ShugiinYama.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["やま"] = ShugiinYama;

ShugiinYama.prototype.setPaths = function() {
  switch (this.getPrevTailType()) {
    case "SR":
      this.dp = pp(16.46, 22.3);
      this.paths = ["m 0,0 c 2.2794596,-3.6912402 5.0869467,-7.1022 8.0660867,-8.19349 4.5388403,-1.66262 6.9670363,1.01541 7.1621363,1.94396"];
      return;

    case "SW3(-105)":
      this.dp = p(13.6496, -5.74733);
      this.paths = ["m 0 0 c 2.25291 -3.90216 4.03745 -6.6 7.01659 -7.69129 c 4.53884 -1.66262 6.43787 1.01541 6.63297 1.94396"];
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
    case "NEF":
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

ShugiinOh = function() { ShugiinChar.call(this, "ShugiinOh", "おー", "SW3", "SW", "SW", "black", false, p(2.1, -1.1)); };
ShugiinOh.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["おー"] = ShugiinOh;
ShugiinChar.dict["おう"] = ShugiinOh;
ShugiinChar.dict["おお"] = ShugiinOh;
ShugiinOh.prototype.setPaths = ShugiinO.prototype.setPaths;
ShugiinOh.prototype.setPathsExtra = function() { this.pathsExtra = ["m -1.51516 0.3537 v 0.1"]; };

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
    case "NER":
      this.dp = p(0.6, 17 + 1.5);
      this.paths = ["m 0 0 v 17"];
      break;

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

ShugiinKakar = function() { ShugiinChar.call(this, "ShugiinKakar", "かかＲ", "UWR3E17F", "WR", "EF", "black", false, p(1.2, 0.5)); };
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

ShugiinI = function() { ShugiinChar.call(this, "ShugiinI", "い", "C1", "C", "C", "black", false, p(0.0, 0.0)); };
ShugiinI.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["い"] = ShugiinI;

ShugiinI.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();

  const _name = this.getNextName();
  const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) {
    case "ShugiinSa_ShugiinMo":
      this.dp = p(-0.177101, -0.754);
      this.paths = ["m 0 0 c -0.218576 0.26599 -0.616914 0.51838 -0.732898 0.42453 c -0.24879 -0.20133 0.17792 -0.81542 0.555797 -1.17853"];
      return;

    case "ShugiinSa_ShugiinWa":
      this.tail = "SRCR1";
      this.dp = p(-0.576851, 0.21418);
      this.paths = ["m 0 0 c -0.541048 0.54105 -0.976127 0.036 -0.892868 -0.27617 c 0.08135 -0.30478 0.461129 -0.34952 0.687252 -0.24169 c 0.236318 0.11269 0.232508 0.38808 0.131986 0.49972 c -0.187493 0.20824 -0.324296 0.23232 -0.503221 0.23232"];
      return;

    case "ShugiinDan_ShugiinO":
    case "ShugiinDan_ShugiinWo":
      this.tail = "ShugiinDan_CR1";
      this.dp = p(0.118877, -0.44366);
      this.paths = ["m 0 0 c -0.677453 0.01 -0.918562 -0.35552 -0.760011 -0.66991 c 0.1041 -0.20642 0.451183 -0.344 0.653512 -0.23217 c 0.209325 0.11569 0.260365 0.32784 0.225376 0.45842"];
      return;

    case "ShugiinO_ShugiinE":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0 0 -0.451393 0.497458 -0.725258 0.432471 c -0.315806 -0.074941 -0.476729 -0.827498 -0.188593 -1.02287 c 0.300163 -0.20353 0.64672 0.323271 0.913851 0.590402"];
      return;
  }

  switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _head) {
    case "ShugiinSa_E":
      this.dp = p(0.615012, -0.74596);
      this.paths = ["m 0 0 c -0.541048 0.54104 -0.925923 0.0196 -0.919867 -0.30317 c 0.00999 -0.5324 1.21468 -0.44279 1.53488 -0.44279"];
      return;

    case "ShugiinSa_SEL":
      this.dp = p(0, -0.51474);
      this.paths = ["m 0 0 c -0.28107 0 -0.64582 0.0755 -0.8369 -0.26317 c -0.14287 -0.25322 -0.0457 -0.55801 0.1579 -0.64476 c 0.2406 -0.10254 0.679 -0.10433 0.679 0.39319"];
      return;

    case "ShugiinO_S":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c -0.198746 0.198746 -0.554571 0.143857 -0.720593 -0.097017 c -0.157607 -0.228667 0.072837 -0.738661 0.348532 -0.772144 c 0.509514 -0.06188 0.372061 0.586865 0.372061 0.869161"];
      return;
  }

  switch (name_ + "_") {
    case "ShugiinWa_":
      this.dp = p(-0.235621, 0.17282);
      this.paths = ["m 0 0 c 0.145018 -0.14502 0.291705 -0.29887 0.216002 -0.58404 c -0.147216 -0.55455 -0.776542 -0.28056 -0.844546 0.038 c -0.09517 0.44576 0.183671 0.49195 0.392923 0.71886"];
      return;

    case "ShugiinYa_":
      this.tailType = "NER7CR1";
      this.dp = p(-0.92178, -0.032755);
      this.paths = ["m 0 0 c 0.391922 0.050845 0.539463 0.385642 0.435823 0.609936 c -0.103641 0.224295 -0.369076 0.320162 -0.566468 0.312099 c -0.350438 -0.014314 -0.579972 -0.42165 -0.791135 -0.95479"];
      return;

    case "ShugiinE_":
      this.dp = p(-0.430596, -0.470866);
      this.paths = ["m 0 0 c 0.142909 0.142909 0.339092 0.228805 0.541308 0.17039 c 0.177973 -0.05141 0.29167 -0.384466 0.23678 -0.588746 c -0.0462 -0.171939 -0.245145 -0.300023 -0.420824 -0.328915 c -0.274623 -0.04517 -0.78786 0.276405 -0.78786 0.276405"];
      return;

    case "ShugiinO_":
      this.dp = p(0.403773, -0.403773);
      this.paths = ["m 0 0 c -0.170338 0.170338 -0.391976 0.259247 -0.572012 0.140744 c -0.319813 -0.210506 -0.28771 -0.777781 0.081359 -0.844879 c 0.449115 -0.08165 0.720323 0.187712 0.894426 0.300362"];
      return;

    case "ShugiinRa_":
      this.dp = p(-0.009126, -0.626543);
      this.paths = ["m 0 0 c -0.00801 0.205065 -0.099826 0.512023 -0.390879 0.543836 c -0.284723 0.031122 -0.53417 -0.259302 -0.519196 -0.498835 c 0.02337 -0.373834 0.438809 -0.543136 0.900949 -0.671544"];
      return;
  }

  switch (model_ + "_" + _name) {}

  switch (model_ + "_" + _model) {}

  switch (model_ + "_" + _head) {}

  switch (model_ + "_") {
    case "EL3_":
      this.dp = p(-0.253132, 0.215048);
      this.paths = ["m 0 0 c 0 0 0.190812 -0.223261 0.14784 -0.474924 c -0.073004 -0.42755 -0.703355 -0.447503 -0.858007 -0.084825 c -0.117615 0.275821 0.00866 0.549594 0.457035 0.774797"];
      return;

    case "SR7_":
      this.tailType = "SR7CR1";
      this.dp = p(0.305748, -0.394047);
      this.paths = ["m 0 0 c -0.276261 0.336181 -0.632238 0.149227 -0.809639 -0.05498 c -0.143601 -0.165298 -0.132516 -0.530576 0.047546 -0.655164 c 0.305266 -0.211217 0.844103 -0.02394 1.06784 0.316097"];
      return;
  }

  switch (tail_ + "_" + _name) {
    case "E_ShugiinMo":
    case "E_ShugiinYa":
    case "E_ShugiinYama":
    case "E_ShugiinYar":
      this.dp = p(0.231884, -0.087087);
      this.paths = ["m 0 0 c 0.531938 0 0.463582 -0.871055 0.15213 -0.958428 c -0.363037 -0.101846 -0.697224 0.164938 -0.690248 0.437202 c 0.0075 0.294556 0.392251 0.434139 0.770002 0.434139"];
      return;

    case "S_ShugiinNoJoshi":
      this.dp = p(0.02864, -1.16057);
      this.paths = ["m 0 0 c 0 0.15331 0.0262 0.27166 -0.0858 0.35757 c -0.22186 0.17028 -0.68715 0.003 -0.76611 -0.2547 c -0.11535 -0.37579 0.53563 -0.91851 0.88055 -1.26344"];
      return;

    case "S_ShugiinWa":
    case "S_ShugiinWan":
      this.dp = p(0.728996, 0.427119);
      this.paths = ["m 0 0 c 0 0.421238 -0.063047 0.892053 0.134591 1.16285 c 0.135415 0.185541 0.519631 0.188835 0.686635 -0.05829 c 0.152743 -0.226022 0.04513 -0.522534 -0.09223 -0.67744"];
      return;

    case "E_ShugiinWa":
      this.tailType = "ECL1";
      this.dp = p(-0.72889, 0);
      this.paths = ["m 0 0 c 0.14967 0 0.37718 -0.205179 0.39297 -0.388761 c 0.021 -0.244533 -0.13387 -0.609218 -0.42732 -0.599618 c -0.2424 0.0079 -0.69454 0.988379 -0.69454 0.988379"];
      return;

    case "S_ShugiinE":
      this.dp = p(-0.029, -0.53967);
      this.paths = ["m 0 0 c 0 0.286715 -0.215249 0.456396 -0.417957 0.443439 c -0.249683 -0.015961 -0.506441 -0.257004 -0.441078 -0.607304 c 0.074443 -0.398965 0.479926 -0.725914 0.830035 -0.375805"];
      return;

    case "EF_ShugiinNode":
      this.tailType = "EFCR1";
      break;  // not return

    case "S_ShugiinO":
      this.dp = p(-0, -0.149163);
      this.paths = ["m 0 0 c 0 0.524578 0.411141 0.66794 0.751252 0.377188 c 0.195799 -0.167384 0.325998 -0.771563 0.062151 -0.944701 c -0.25491 -0.167275 -0.340795 -0.054258 -0.813403 0.41835"];
      return;
  }

  switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "E_S":
      this.dp = p(-0.48609, 0);
      this.paths = ["m 0 0 c 0 0 0.44189 -0.07579 0.45641 -0.404876 c 0.0339 -0.769002 -0.92248 -0.750414 -0.9294 -0.353434 c -0.006 0.347058 -0.0131 0.75831 -0.0131 0.75831"];
      return;

    case "E_SW":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0 0 -0.394201 0.471 -0.743971 0.4044 c -0.409765 -0.078 -0.553299 -0.65228 -0.235375 -0.91059 c 0.317924 -0.25831 0.778264 0.10696 0.979346 0.50619"];
      return;

    case "E_SW3(-105)":
      this.dp = p(0, -0);
      this.paths = ["m 0 0 c 0 0 -0.166765 0.424431 -0.586489 0.215671 c -0.426086 -0.211925 -0.363193 -0.719452 -0.109296 -0.851343 c 0.278777 -0.144815 0.739301 -0.082882 0.695785 0.635672"];
      return

    case "SE_S":
        this.dp = p(-0.230276, -0.230275);
        this.paths = ["m 0 0 c 0.113783 0.113783 0.547556 0.153511 0.671533 -0.033193 c 0.167187 -0.251775 -0.013468 -0.794088 -0.310094 -0.85201 c -0.28876 -0.056386 -0.5775 0.132473 -0.591715 0.654928"];
        return;

    case "SE_SE":
        this.dp = p(0, 0);
        this.paths = ["m 0 0 c 0 0 0.270652 0.238868 0.396643 0.169571 c 0.265747 -0.146164 0.342449 -0.667074 0.14594 -0.898093 c -0.140624 -0.16532 -0.48747 -0.163648 -0.651117 0 c -0.257196 0.257196 -0.135013 0.484975 0.108534 0.728522"];
        return;

    case "S_E":
        this.dp = p(0, -0.67654);
        this.paths = ["m 0 0 c 0 0.369198 -0.356193 0.511223 -0.604386 0.460615 c -0.294778 -0.060107 -0.55366 -0.503403 -0.446324 -0.784448 c 0.131811 -0.345129 0.565089 -0.352707 1.05071 -0.352707"];
        return;

    case "S_S":
        this.dp = p(-0.007735, 0.020084);
        this.paths = ["m 0 0 c 0 0.41522 0.201078 0.491145 0.422933 0.522395 c 0.234208 0.03299 0.52145 -0.177905 0.581445 -0.406688 c 0.065225 -0.248726 -0.081781 -0.644457 -0.333812 -0.695442 c -0.29583 -0.059845 -0.678301 -0.103774 -0.678301 0.599819"];
        return;

    case "W_SE":
        this.dp = p(0.733521, -2e-06);
        this.paths = ["m 0 0 c 0 0 -0.316611 0.00912 -0.457383 0.00912 c -0.223564 0 -0.494178 -0.322107 -0.336107 -0.615939 c 0.158071 -0.293832 0.573724 -0.346469 1.52701 0.606817"];
        return;
  }

  switch (tail_ + "_") {
    case "E_":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0 0 0.43798 -0.076 0.45641 -0.40487 c 0.0339 -0.60503 -0.50935 -0.68205 -0.74905 -0.50101 c -0.25322 0.19125 -0.19097 0.7408 0.29264 0.90588"];
      return;

    case "S_":
      this.tailType = "SCR1";
      this.dp = p(-0.029, -0.53967);
      this.paths = ["m 0 0 c 0 0.16603 -0.204068 0.40356 -0.39382 0.43137 c -0.178306 0.0261 -0.333684 -0.0237 -0.465215 -0.28296 c -0.139922 -0.27567 0.01049 -0.89397 0.830035 -0.68808"];
      return;
  }

  switch ("_" + _name) {
    case "_ShugiinO":
      this.dp = p(0.2318, -0.2318);
      this.paths = ["m 0 0 c -0.52286 -0.189956 -0.56294 -0.505401 -0.46542 -0.797264 c 0.0657 -0.19649 0.37607 -0.304735 0.57306 -0.240572 c 0.17053 0.05555 0.26715 0.281501 0.27826 0.460506 c 0.008 0.12587 -0.0939 0.285286 -0.1541 0.34553"];
      return;

    case "_ShugiinMa":
      this.dp = p(-0.47718, 0.488032);
      this.paths = ["m 0 0 c 0.230852 0.162954 0.487822 0.703732 0.287574 0.978429 c -0.134369 0.184326 -0.508759 0.16309 -0.684094 0.01718 c -0.131684 -0.109582 -0.22267 -0.337257 -0.08066 -0.507577"];
      return;

    case "_ShugiinYa":
      this.dp = p(-0.021124, 0.775046);
      this.paths = ["m 0 0 c 0 0 0.897129 0.285185 0.92401 0.663395 c 0.02007 0.282433 -0.245278 0.647803 -0.613014 0.58801 c -0.316895 -0.05153 -0.33212 -0.476359 -0.33212 -0.476359"];
      return;

    case "_ShugiinWa":
    case "_ShugiinWan":
      this.dp = p(0.207821, 0.192747);
      this.paths = ["m 0 0 c -0.466061 0.272883 -0.584222 0.657681 -0.386584 0.928477 c 0.135415 0.185541 0.519631 0.188835 0.686635 -0.05829 c 0.152743 -0.226022 0.04513 -0.522534 -0.09223 -0.67744"];
      return;

    case "_ShugiinNaka":
      this.dp = p(0.251928, 0.085957);
      this.paths = ["m 0 0 c -0.278796 0.23402 -0.530635 0.485385 -0.32243 0.812397 c 0.210965 0.331347 0.61042 0.141188 0.754771 -0.06604 c 0.130432 -0.18725 0.07686 -0.557258 -0.180413 -0.6604"];
      return;

    case "_ShugiinSa":
      this.dp = p(-1.05553, -0.807372);
      this.paths = ["m 0 0 c -0.417828 0.132827 -0.890307 0.202654 -1.08949 -0.02803 c -0.169937 -0.196813 -0.164378 -0.611183 0.03396 -0.779342"];
      return;

    case "_ShugiinSa":
    case "_ShugiinSan":
      this.dp = p(-0.510915, -0.741282);
      this.paths = ["m 0 0 c -0.417828 0.132827 -0.890307 0.202654 -1.08949 -0.02803 c -0.169937 -0.196813 -0.164378 -0.611183 0.03396 -0.779342 c 0.139483 -0.118262 0.394332 -0.12217 0.544614 0.06609"];
      return;

    case "_ShugiinA":
    case "_ShugiinAruiwa":
      this.dp = p(-0.423619, -0.429879);
      this.paths = ["m 0 0 c 0.29907 -0.320073 0.510338 -0.562221 0.39126 -0.85075 c -0.09077 -0.219935 -0.459964 -0.363382 -0.668807 -0.249385 c -0.200708 0.109557 -0.338361 0.404327 -0.146072 0.670256"];
      return;

    case "_ShugiinNo":
      this.dp = p(-0.452214, 0.0573);
      this.paths = ["m 0 0 c 0.128968 -0.15406 0.02815 -0.94444 -0.384077 -0.8884 c -0.279379 0.038 -0.500855 0.37854 -0.463648 0.63908 c 0.02358 0.16514 0.152969 0.31493 0.395511 0.30662"];
      return;
  }

  switch ("_" + _model.replace(/[COF].*/, "")) {
    case "_SER7":
      this.dp = p(-0.468311, 0.03851);
      this.paths = ["m 0 0 c 0.193886 0.269213 0.02673 0.901073 -0.307291 0.992085 c -0.248109 0.0676 -0.560721 -0.262302 -0.570539 -0.519269 c -0.0076 -0.198832 0.199576 -0.4069 0.409519 -0.434306"];
      return;
  }

  switch ("_" + _head) {
    case "_E":
      this.dp = p(-0.32498, 0);
      this.paths = ["m 0 0 c 0.114894 -0.2784 0.194674 -1.00327 -0.42469 -1.04932 c -0.305888 -0.02275 -0.662286 0.368694 -0.609515 0.689387 c 0.073705 0.447908 0.709225 0.359934 0.709225 0.359934"];
      return;

    case "_SE":
      this.dp = p(-0.16359, -0.163591);
      this.paths = ["m 0 0 c 0.062312 0.371346 -0.030336 0.762122 -0.313115 0.794342 c -0.314572 0.03584 -0.649537 -0.486264 -0.538177 -0.782641 c 0.083206 -0.221448 0.475601 -0.387393 0.687702 -0.175292"];
      return;

    case "_S":
      this.dp = p(0, -0.51474);
      this.paths = ["m 0 0 c -0.28107 0 -0.64582 0.0755 -0.8369 -0.26317 c -0.14287 -0.25322 -0.0457 -0.55801 0.1579 -0.64476 c 0.2406 -0.10254 0.679 -0.10433 0.679 0.39319"];
      return;
  }

  this.dp = p(0, 0);
  this.paths = ["m 0 0 c -0.0019 -0.239338 0.260415 -0.524292 0.499607 -0.515722 c 0.217215 0.0078 0.421049 0.28226 0.419024 0.499605 c -0.002 0.220837 -0.214426 0.492005 -0.435141 0.499607 c -0.227784 0.0078 -0.481681 -0.255578 -0.48349 -0.48349"];
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

ShugiinUh = function() { ShugiinChar.call(this, "ShugiinU", "うー", "S3", "S", "S", "black", false, p(3.7 - 5, -7)); };
ShugiinUh.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["うー"] = ShugiinUh;
ShugiinChar.dict["うう"] = ShugiinUh;
ShugiinUh.prototype.setPaths = ShugiinU.prototype.setPaths;
ShugiinUh.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m0,-2v0.1"];
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

ShugiinEh = function() { ShugiinChar.call(this, "ShugiinEh", "えー", "SE3", "SE", "SE", "black", false, p(0.0, -1.1)); };
ShugiinEh.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["えー"] = ShugiinEh;
ShugiinChar.dict["えい"] = ShugiinEh;
ShugiinEh.prototype.setPaths = ShugiinE.prototype.setPaths;
ShugiinEh.prototype.setPathsExtra = function() { this.pathsExtra = ["m 1.6575 0.342332 v 0.1"]; };

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
  const that = this;
  function jog() {
    if (that.getNextHeadType() == "E") {
      that.dp.y += 0.5;
      that.paths[0] += "v0.5";
    }
  }

  switch (this.getPrevName()) {
    case "CharDottedCircle":
      this.dp = p(3, 0);
      this.paths = ["m 0 0 h 3"];
      jog();
      return;

    case "ShugiinGan":
      this.dp = p(3 + 1 - 1, - 2 + 5);
      this.paths = ["m0,3h3"];
      jog();
      return;

    case "ShugiinHa":
      this.dp = p(3 - 3.1, - 1);
      this.paths = ["m-3.1,-1h3"];
      jog();
      return;

    case "ShugiinYa":
      this.dp = p(3 - 3.1, + 0.7);
      this.paths = ["m-3.1,+0.7h3"];
      jog();
      return;

    case "ShugiinWa":
      this.dp = p(3 - 1.4, + 0.5);
      this.paths = ["m-1.4,0.5h3"];
      jog();
      return;
  }

  switch (this.getPrevModel().replace(/[CO].*/, "")) {
    case "SR7":
      this.dp = p(3 + 1.1, 0 - 1.8);
      this.paths = ["m 1.1 -1.8 h 3"];
      jog();
      return;

    case "SR7F":
      this.dp = p(3 + 1.1, 0 - 3.8);
      this.paths = ["m 1.1,-3.8 h 3"];
      jog();
      return;

    case "EL7":
      this.dp = p(3 - 2.2, 0 + 0.9);
      this.paths = ["m-2.2,0.9 h 3"];
      jog();
      return;
  }

  switch (this.getPrevTailType()) {
    case "S":
    case "SER":
      this.dp = p(3, -2);
      this.paths = ["m 0 -2 h 3"];
      jog();
      return;

    case "E":
      this.dp = p(2, 1);
      this.paths = ["m-1,1h3"];
      jog();
      return;

    case "SR7CR1":
      this.dp = p(3 + 1.1, 0 - 1.8);
      this.paths = ["m 1.1 -1.8 h 3"];
      jog();
      return;
  }

  this.dp = p(3, 0);
  this.paths = ["m 0 0 h 3"];
  jog();
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

    case "ShugiinKar_ShugiinWa":
    case "ShugiinKakar_ShugiinWa":
      this.dp = p(-2, -0.8);
      return;

    case "ShugiinNaru_ShugiinWa":
      this.dp = p(4, -2);
      return;

    case "ShugiinIh_ShugiinWa":
      this.dp = p(3, -2);
      return;

    case "CharDottedCircle_ShugiinMo":
      this.dp = p(-1, 0);
      return;

    case "ShugiinSar_ShugiinMo":
      this.dp = p(0.5, -2);
      return;

    case "ShugiinTar_ShugiinMo":
      this.dp = p(-2, -2);
      return;

    case "ShugiinHar_ShugiinMo":
      this.dp = p(-5, 0.5);
      return;

    case "CharDottedCircle_ShugiinA":
      this.dp = p(-1, 0);
      return;

    case "ShugiinMar_ShugiinA":
      this.dp = p(-3.5, -2.1);
      return;
  }

  switch (this.getPrevTailType() + "_" + nextName) {
    case "SCR1_ShugiinA": 
      this.dp = p(-1.5, -2);
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
      return;

    case "ShugiinIh":
      this.dp = p(3.76592, 3.29054 - 1);
      this.paths = ["m0,-1 l 2.29813 1.92836"];
      return;

    case "ShugiinTa":
      this.dp = p(3.76592 - 1.1, 3.29054 - 1.9);
      this.paths = ["m-1.1,-1.9 l 2.29813 1.92836"];
      return;

    case "ShugiinYar":
      this.dp = p(3.76592 - 2 - 2.6, 3.29054 - 0.5);
      this.paths = ["m-4.6,-0.5 l 2.29813 1.92836"];
      return;

    case "ShugiinNaru":
      this.dp = p(3.76592 - 1, 3.29054 - 0);
      this.paths = ["m-1,0 l 2.29813 1.92836"];
      return;
  }

  switch (this.getPrevTailType()) {
    case "EFCR1":
      this.dp = p(3.76592 - 5, 3.29054 - 1);
      this.paths = ["m-5,-1 l 2.29813 1.92836"];
      return;

    case "NER7CR1":
      this.dp = p(3.76592 - 2, 3.29054 - 0.5);
      this.paths = ["m-2,-0.5 l 2.29813 1.92836"];
      return;
  }

  this.dp = p(3.76592 - 2, 3.29054 - 1);
  //this.paths = ["m 0 0 l 2.29813 1.92836", "m 3.83022 3.21394 l -0.0643 0.0766"];
  this.paths = ["m-2,-1 l 2.29813 1.92836"];
};


ShugiinIh = function() { ShugiinChar.call(this, "ShugiinIh", "いー", "C3", "C", "C", "black", false, p(3.0, -0.0)); };
ShugiinIh.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["いー"] = ShugiinIh;

ShugiinIh.prototype.setPaths = function() {
  switch (this.getNextName()) {
    case "ShugiinKakar":
      this.dp = p(1, 1);
      this.paths = ["m 0 0 c -0.82843 0 -1.5 -0.67157 -1.5 -1.5 c 0 -0.82843 0.67157 -1.5 1.5 -1.5 c 0.82843 0 1.5 0.67157 1.5 1.5 c 0 0.82843 -0.67157 1.5 -1.5 1.5"];
      return;
  }

  switch (this.getNextHeadType()) {
    default:
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c -0.82843 0 -1.5 -0.67157 -1.5 -1.5 c 0 -0.82843 0.67157 -1.5 1.5 -1.5 c 0.82843 0 1.5 0.67157 1.5 1.5 c 0 0.82843 -0.67157 1.5 -1.5 1.5"];
      break;
  }
};



ShugiinIi = function() { ShugiinChar.call(this, "ShugiinIi", "いい", "CL1CL1", "CL", "CL", "black", false, p(0.8, 0.6)); };
ShugiinIi.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["いい"] = ShugiinIi;

ShugiinIi.prototype.setPaths = function() {
  switch (this.getPrevName()) {
    case "ShugiinWa":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0.21319 -0.20053 0.19568 -1.02878 -0.17234 -1.17074 c -0.40085 -0.15461 -0.6242 0.14512 -0.67216 0.37782 c -0.0653 0.3169 0.22867 0.51713 0.47264 0.65835 c 0.33947 0.19651 0.8281 0.2127 1.1763 0.0321 c 0.21477 -0.1114 0.29865 -0.23486 0.30059 -0.40223 c 0.003 -0.22998 -0.0516 -0.54147 -0.4001 -0.56214 c -0.42279 -0.0251 -0.49382 0.54875 -0.70493 1.06684"];
      return;
  }

  switch (this.getPrevTailType()) {
    case "S":
    case "SER":
      this.dp = p(-0.012314, -0.22177);
      this.paths = ["m 0 0 c 0 0.42629 0.395684 0.50492 0.723982 0.29156 c 0.283966 -0.18454 0.127363 -0.64928 -0.07307 -0.80607 c -0.558213 -0.43666 -1.31438 -0.19641 -1.50946 0.10366 c -0.195087 0.30007 -0.160316 0.69394 0.08626 0.79654 c 0.299421 0.12459 0.559185 -0.17772 0.759978 -0.60746"];
      break;

    default:
      this.dp = p(0.220836, 0.0231);
      this.paths = ["m 0 0 c -0.0041 -0.56454 0.176797 -0.98718 -0.172338 -1.17074 c -0.210551 -0.1107 -0.574163 0.0862 -0.640546 0.3146 c -0.07867 0.2707 0.197061 0.58035 0.441026 0.72157 c 0.339472 0.19651 0.828102 0.2127 1.1763 0.0321 c 0.214774 -0.1114 0.43254 -0.36454 0.401745 -0.60452 c -0.02815 -0.2194 -0.279202 -0.4909 -0.494932 -0.44203 c -0.41306 0.0936 -0.42814 0.62504 -0.490415 1.17212"];
      break;
  }
};

ShugiinIn = function() { ShugiinChar.call(this, "ShugiinIn", "いん", "CL1NE1F", "CL", "NEF", "black", false, p(0.9, 1.0)); };
ShugiinIn.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["いん"] = ShugiinIn;

ShugiinIn.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "ShugiinSa":
      this.dp = p(4.28017, -2.45728);
      this.paths = ["m 0 0 c -0.22063 0.26848 -0.42685 0.32018 -0.65424 0.26145 c -0.13946 -0.036 -0.29349 -0.19201 -0.27341 -0.33465 c 0.10313 -0.73279 1.12937 -0.97971 1.82459 -1.26471 l 1.47452 -0.60445"];
      return;

    case "ShugiinNa":
      this.dp = p(2.36343, -2.25641);
      this.paths = ["m 0 0 c 0.21324 -0.124051 0.014 -0.542111 -0.18359 -0.650065 c -0.21231 -0.115995 -0.56209 0.0088 -0.69434 0.211376 c -0.10126 0.155111 -0.0734 0.429484 0.0658 0.551804 c 0.14451 0.127071 0.47996 0.09112 0.57727 -0.0056 c 0.53141 -0.52812 0.69375 -0.685406 1.1356 -1.12725"];
      return;
    case "ShugiinMa":
      this.dp = p(1.81119, -2.67983);
      this.paths = ["m 0 0 c 0.125681 0.183726 0.025345 0.400143 -0.113327 0.500038 c -0.183831 0.132426 -0.561153 0.127657 -0.676331 -0.067443 c -0.170061 -0.288067 -0.033385 -0.502268 0.39525 -0.922446 l 0.791384 -0.77577"];
      return;

    case "ShugiinYa":
      this.dp = p(2.51819, -2.45682);
      this.paths = ["m 0 0 c 0.373056 0.0484 0.455228 0.27031 0.458372 0.49522 c 0.0032 0.23005 -0.227138 0.48426 -0.454503 0.51945 c -0.168016 0.026 -0.393871 -0.0997 -0.436199 -0.26435 c -0.07186 -0.27957 0.236936 -0.56579 0.43233 -0.75032 l 1.10399 -1.04261"];
      return;

    case "ShugiinRa":
      this.dp = p(2.18792, -3.37797);
      this.paths = ["m 0 0 c -0.014182 0.357419 -0.241804 0.499413 -0.47001 0.497811 c -0.193422 -0.00136 -0.377326 -0.234645 -0.392408 -0.427483 c -0.037349 -0.477525 0.795324 -1.19678 0.795324 -1.19678 l 0.840807 -0.837305", "m 2.18792 -3.37797 v 0"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "E":
      this.dp = p(1.16913 + 1.41, -1.12965 - 1.41);
      this.paths = ["m 0 0 c 0.20183 0 0.276983 -0.509276 0.13948 -0.70573 c -0.124329 -0.177634 -0.457659 -0.212941 -0.642733 -0.099985 c -0.212248 0.129543 -0.37702 0.503863 -0.235017 0.707985 c 0.160977 0.231395 0.747823 0.125973 0.845136 0.029293 c 0 0 0.620414 -0.619371 1.06226 -1.06122"];
      return;
  }

  this.paths = ["m 0 0 c 0.06358 -0.237297 -0.116235 -0.651495 -0.376707 -0.69977 c -0.241821 -0.04482 -0.518981 0.238572 -0.55932 0.48118 c -0.03043 0.183033 0.112614 0.403848 0.281796 0.480037 c 0.150915 0.06796 0.389937 0.0011 0.48725 -0.09558 c 0.531415 -0.52812 0.693753 -0.685406 1.1356 -1.12725"];

  switch (_name) {
    case "ShugiinWa":
      this.dp = p(2.3863 + 2, -1);
      return;

    case "ShugiinMade":
      this.dp = p(0.4, -0.4);
      return;
  }

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.3863, -2.37907);
};


ShugiinIin = function() { ShugiinChar.call(this, "ShugiinIin", "いいん", "CL3NE3F", "CL", "NEF", "black", false, p(3.0, -0.5)); };
ShugiinIin.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["いいん"] = ShugiinIin;

ShugiinIin.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "E":
      this.dp = p(2.04269, -2.2008);
      this.paths = ["m 0 0 c 0.185 -0.5569 0.272 -1.9642 -0.1634 -2.4682 c -0.4361 -0.5048 -1.2592 -0.7265 -1.9766 -0.3123 c -0.7175 0.4143 -0.9633 1.4686 -0.5491 2.186 c 0.4143 0.7174 1.861 0.7587 2.7154 0.278 l 2.01639 -1.88431"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(3.12866, -3.12867);
  this.paths = ["m 0 0 c 0.03453 -0.585789 0.01293 -1.55027 -0.53813 -1.92444 c -0.551849 -0.37471 -1.40428 -0.37578 -1.99007 0.21 c -0.585789 0.585793 -0.585789 1.53554 0 2.12132 c 0.585789 0.585785 1.42812 0.693195 2.12132 0 l 2.12132 -2.12132"];
};


ShugiinIinKanji = function() { ShugiinChar.call(this, "ShugiinIinKanji", "委員|医院", "P", "P", "P", "black", false, p(0.0, 0.0)); };
ShugiinIinKanji.prototype = Object.create(ShugiinChar.prototype);
ShugiinChar.dict["委員"] = ShugiinIinKanji;
ShugiinChar.dict["医院"] = ShugiinIinKanji;

ShugiinIinKanji.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) {
    case "CharDottedCircle_CharDottedLine":
      this.dp = p(-7.8, 6.6);
      return;

    case "CharDottedCircle_ShugiinKa":
      this.dp = p(-6.8, 6.6);
      return;
  }

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(0, 0.1);
  this.paths = ["m0,0v0.1"];
};

