SvsdChar = function(name, kana, model, headType, tailType, color) {
  Char.apply(this, arguments);
  this.posKoto   = pp(2, 45);
  this.posNode   = p(2, 0);
  this.posWakede = p(0, -2);
  this.posMono   = pp(2, 135);
};
SvsdChar.prototype = Object.create(Char.prototype);
SvsdChar.dict = {};
Char.catalog["svsd"] = SvsdChar.dict;

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

SvsdI = function() { SvsdChar.call(this, "SvsdI", "い", "SW10", "SW", "SW", "black", false, p(5, -4.33011)); };
SvsdI.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["い"] = SvsdI;

SvsdI.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
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

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "SW":
      this.dp = p(-4.29289, 7.95309);
      this.paths = ["m 0 0 l -5 8.66021 l 0.707107 -0.707117"];
      return;
  }

  this.dp = p(-5, 8.66022);
  this.paths = ["m 0 0l -5 8.66022"];
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
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
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

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "E":
      this.dp = p(9.05199, 0.194069);
      this.paths = ["m 0 0 h 10 l -0.948014 0.194069"];
      return;
  }

  this.dp = p(10, 0);
  this.paths = ["m 0 0l 10 0"];
};

SvsdKa = function() { SvsdChar.call(this, "SvsdKa", "か", "NEL10", "NEL", "NEL", "black", false, p(0, 2.3)); };
SvsdKa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["か"] = SvsdKa;

SvsdKa.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  switch (model_.replace(/(\D+\d+).*/, "$1") + "_" + _head) {
    case "SWL10_SW":
      this.dp = p(8.66026, -5);
      this.paths = ["m 0 0 c 2.35702 2.35702 7.30481 -2.65228 8.66026 -5"];
      return;
  }

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  switch (_model.replace(/(\D+\d+).*/, "$1")) {
    case "SWL":
      this.dp = p(8.66026, -5);
      this.paths = ["m 0 0 c 2.35702 2.35702 7.71149 -2.45594 8.66026 -5"];
      return;
  }

  switch (_head) {
    case "SW":
      this.dp = p(8.66026, -5);
      this.paths = ["m 0 0 c 3.62505 1.61147 7.87213 -3.63491 8.66026 -5"];
      return;

    case "SWL":
      this.dp = p(9.06652, -4.64799);
      this.paths = ["m 0 0 c 3.62505 1.61147 7.34568 -2.92715 9.06652 -4.64799"];
      return;
  }

  this.dp = p(8.66026, -5);
  this.paths = ["m 0 0c 3.62505 1.61147 7.71149 -2.45594 8.66026 -5"];
};

SvsdKi = function() { SvsdChar.call(this, "SvsdKi", "き", "SWL10", "SWL", "SWL", "black", false, p(5, -4.330124999999999)); };
SvsdKi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["き"] = SvsdKi;

SvsdKi.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_.replace(/(\D+\d+).*/, "$1")) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "NEL":
      this.dp = p(-4.34173, 9.24988);
      this.paths = ["m 0 0 c -1.42813 1.42813 -5.17399 4.96179 -4.34173 9.24988"];
      return;
  }

  switch (_name) {
    case "SvsdHu":
    case "SvsdHun":
    case "SvsdHutsu":
      this.dp = p(-5, 8.66025);
      this.paths = ["m 0 0 c -1.62303 1.15063 -5.37354 3.71513 -5 8.66025"];
      return;
  }

  switch (_headModel) {
    case "NEL5":
      this.dp = p(-5, 8.66025);
      this.paths = ["m 0 0 c -2.3816 1.37502 -7.38464 7.22955 -5 8.66025"];
      return;

    case "NEL10":
      this.dp = p(-5, 8.66025);
      this.paths = ["m 0 0 c -1.62303 1.15063 -7.24646 6.19762 -5 8.66025"];
      return;

    case "EL5":
      this.dp = p(-5, 8.66025);
      this.paths = ["m 0 0 c -2.71933 1.57001 -6.54789 6.60916 -5 8.66025"];
      return;
  }

  switch (_head) {
    case "SL":
      this.dp = p(-5, 8.66025);
      this.paths = ["m 0 0 c -1.62303 1.15063 -8.3064 6.91744 -5 8.66025"];
      return;
  }

  this.dp = p(-5, 8.66025);
  this.paths = ["m 0 0c -1.62303 1.15063 -5.83226 4.37216 -5 8.66025"];
};

SvsdKu = function() { SvsdChar.call(this, "SvsdKu", "く", "SEL10", "SEL", "SEL", "black", false, p(0.0, -2.6)); };
SvsdKu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["く"] = SvsdKu;

SvsdKu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
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

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "NEL":
      this.dp = p(8.66026, 5);
      this.paths = ["m 0 0 c 0.364894 3.93136 6.18041 7.47435 8.66026 5"];
      return;
  }

  this.dp = p(8.66026, 5);
  this.paths = ["m 0 0c 0.364894 3.93136 4.76838 5.95772 8.66026 5"];
};

SvsdKe = function() { SvsdChar.call(this, "SvsdKe", "け", "SL10", "SL", "SL", "black", false, p(1.5, -5.0)); };
SvsdKe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["け"] = SvsdKe;

SvsdKe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "EL":
      this.dp = p(0.117975, 9.82898);
      this.paths = ["m 0 0 c -1.63643 2.53073 -2.08843 6.05658 -0.640023 8.94219 c 0.10036 0.19995 0.497655 0.96122 0.924712 0.90349 c 0.346799 -0.0469 0.584922 -0.209356 0.601396 -0.461508 c 0.015002 -0.229621 -0.284019 -0.439125 -0.488323 -0.487955 c -0.315715 -0.075458 -0.744045 0.405538 -0.279787 0.932763"];
      return;

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
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

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

  switch (tail_) {
    case "NEL":
      this.dp = p(-1.99598, 4.62796);
      this.paths = ["m 0 0 c -0.815275 0.815275 -2.68637 2.44928 -1.99598 4.62796"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
  
  this.dp = p(-2.5, 4.33013);
  this.paths = ["m 0 0c -1.11689 0.391995 -3.19039 2.15145 -2.5 4.33013"];
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

SvsdAn = function() { SvsdChar.call(this, "SvsdAn", "あん", "NE10CL1", "NE", "CL", "black", false, p(0.0, 2.5)); };
SvsdAn.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["あん"] = SvsdAn;

SvsdAn.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
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

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "SW":
      this.dp = p(6.66497, -3.84803);
      this.paths = ["m 0 0 l 7.50277 -4.33173 l 0.862841 -0.50456 c 0.453489 -0.27451 0.508453 -1.00696 0.150327 -1.16644 c -0.86497 -0.385177 -1.10034 0.802285 -1.85096 2.1547"];
      return;
  }


  this.dp = p(7.50277, -4.33173);
  this.paths = ["m 0 0 l 7.50277 -4.33173 l 0.862841 -0.50456 c 0.453489 -0.27451 -0.07577 -1.0977 -0.582858 -1.06324 c -0.432651 0.0294 -0.810198 0.78944 -0.279983 1.5678"];
};

SvsdKan = function() { SvsdChar.call(this, "SvsdKan", "かん", "NEL10CL1", "NEL", "CL", "black", false, p(0, 2.3)); };
SvsdKan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["かん"] = SvsdKan;

SvsdKan.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_.replace(/(\D+\d+).*/, "$1")) {
    case "SWL10":
      this.dp = p(7.96521, -3.6709);
      this.paths = ["m 0 0 c 1.97024 2.15982 6.39642 -1.28465 7.96521 -3.6709 c 0.131668 -0.20027 0.627511 -0.77622 0.472515 -1.16584 c -0.119981 -0.3016 -0.502465 -0.61366 -0.885737 -0.4046 c -0.475203 0.2592 -0.593013 1.1011 0.413222 1.57044"];
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  switch (_name) {
    case "SvsdNi":
    case "SvsdNin":
      this.dp = p(7.77747, -3.39625);
      this.paths = ["m 0 0 c 3.03636 1.34978 6.39642 -1.28465 7.96521 -3.6709 c 0.131668 -0.20027 0.627511 -0.77622 0.472515 -1.16584 c -0.119981 -0.3016 -0.502465 -0.61366 -0.885737 -0.4046 c -0.475203 0.2592 0.0057 1.02785 0.225478 1.84509"];
      return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "SL5":
      this.dp = p(6.50809, -1.92234);
      this.paths = ["m 0 0 c 3.03636 1.34978 6.39642 -1.28465 7.96521 -3.6709 c 0.959847 -1.46 -0.00365 -1.65797 -0.371262 -1.00397 c -0.468226 0.832995 -0.645405 1.53341 -1.08586 2.75254"];
      return;
  }

  //switch (_head) {}

  this.dp = p(7.96521, -3.6709);
  this.paths = ["m 0 0 c 3.03636 1.34978 6.39642 -1.28465 7.96521 -3.6709 c 0.131668 -0.20027 0.627511 -0.77622 0.472515 -1.16584 c -0.119981 -0.3016 -0.502465 -0.61366 -0.885737 -0.4046 c -0.475203 0.2592 -0.593013 1.1011 0.413222 1.57044"];
};

SvsdSan = function() { SvsdChar.call(this, "SvsdSan", "さん", "NEL5CL1", "NEL", "NELCL", "black", false, p(0.0, 1.4)); };
SvsdSan.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["さん"] = SvsdSan;

SvsdSan.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

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

  switch (_headModel) {
    case "SWL5":
      this.dp = p(2.34056, -0.203629);
      this.paths = ["m 0 0 c 1.22256 0.73349 2.70882 -0.236807 3.68582 -1.3848 c 0.12228 -0.14368 0.532099 -0.77822 0.280329 -0.974601 c -0.548032 -0.427467 -1.44751 1.84342 -1.62558 2.15577"];
      return;
  }

  //switch (_head) {}

  this.dp = p(3.83808, -1.78056);
  this.paths = ["m 0 0 c 1.22256 0.73349 2.59036 -0.34046 3.56736 -1.48845 c 0.12228 -0.14368 0.40963 -0.36964 0.53461 -0.75453 c 0.13299 -0.40954 -0.36164 -0.92704 -0.70525 -0.81595 c -0.69755 0.22553 -0.85838 0.81263 0.44136 1.27837"];
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

SvsdUn = function() { SvsdChar.call(this, "SvsdUn", "うん", "SE10CL1", "SE", "CL", "black", false, p(0.0, -2.4)); };
SvsdUn.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["うん"] = SvsdUn;

SvsdUn.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
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

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "SW":
      this.dp = p(7.23341, 4.17582);
      this.paths = ["m 0 0 l 7.23341 4.17621 c 0.30661 0.177021 0.93637 0.330917 1.24449 -0.018261 c 0.158163 -0.179237 0.257953 -0.995764 -0.095505 -1.12543 c -0.507243 -0.186084 -0.913747 0.735816 -1.14899 1.1433"];
      return;

    case "E":
      this.dp = p(6.19802, 3.57843);
      this.paths = ["m 0 0 l 7.23341 4.17621 c 0.300429 0.18732 0.80113 0.491204 1.22842 0.421616 c 0.207809 -0.033844 0.397166 -0.09716 0.501496 -0.384022 c 0.202043 -0.55553 -1.62124 -0.635375 -2.7653 -0.635375"];
      return;
  }

  this.dp = p(7.23341, 4.17582);
  this.paths = ["m 0 0 l 7.23341 4.17621 c 0.300429 0.18732 0.855586 0.6616 1.22842 0.5314 c 0.251425 -0.0878 0.463564 -0.31919 0.523453 -0.60359 c 0.10794 -0.51259 -0.828177 -0.8515 -1.75187 0.0718"];
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

SvsdEn = function() { SvsdChar.call(this, "SvsdEn", "えん", "S10CR1", "S", "CR", "black", false, p(1.0, -5.0)); };
SvsdEn.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["えん"] = SvsdEn;

SvsdEn.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
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

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "SW":
      this.dp = p(0, 7.93958);
      this.paths = ["m 0 0 v 8.41643 c 0 0 0.0258 0.92612 -0.04305 1.20913 c -0.12549 0.51585 -0.384672 0.551463 -0.577778 0.414136 c -0.594896 -0.423056 0.155247 -1.29371 0.620828 -2.10011"];
      return;

    case "S":
      this.dp = p(-0.04305, 9.62556);
      this.paths = ["m 0 0 v 8.41643 c 0 0 0.0258 0.92612 -0.04305 1.20913 c -0.12549 0.51585 -0.974068 0.387258 -1.12269 0.0435 c -0.138831 -0.321111 -0.000595 -0.861725 0.335927 -1.05064 c 0.498242 -0.279695 0.786763 0.162013 0.786763 1.00714"];
      return;
  }

  this.dp = p(-1e-06, 8.41646);
  this.paths = ["m 0 0 v 8.41643 c 0 0 0.0258 0.92612 -0.04305 1.20913 c -0.12549 0.51585 -1.02291 0.40942 -1.12269 0.0435 c -0.149656 -0.54884 0.254705 -0.80597 1.16574 -1.2526"];
};

SvsdKen = function() { SvsdChar.call(this, "SvsdKen", "けん", "SL10CL1", "SL", "CL", "black", false, p(1.5, -4.9)); };
SvsdKen.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["けん"] = SvsdKen;

SvsdKen.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

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

  switch (_headModel) {
    case "EL5":
      this.dp = p(0.284689, 9.84568);
      this.paths = ["m 0 0 c -1.63643 2.53073 -2.08843 6.05658 -0.640023 8.94219 c 0.10036 0.19995 0.497655 0.96122 0.924712 0.90349 c 0.346799 -0.0469 0.6757 -0.101526 0.708248 -0.365134 c 0.041044 -0.332424 -0.452266 -0.808626 -0.754317 -0.663866 c -0.309622 0.148389 -0.390404 0.480778 0.046069 1.029"];
      return;

    case "NEL5":
      this.dp = p(0.284689, 9.84568);
      this.paths = ["m 0 0 c -1.63643 2.53073 -2.08843 6.05658 -0.640023 8.94219 c 0.10036 0.19995 0.497655 0.96122 0.924712 0.90349 c 0.346799 -0.0469 0.647377 -0.338106 0.58272 -0.612356 c -0.097575 -0.413875 -0.706517 -0.452614 -0.891618 -0.133708 c -0.135118 0.23279 0.068099 0.601595 0.308898 0.746064"];
      return;
  }

  //switch (_head) {}

  this.dp = p(-0.582933, 9.05614);
  this.paths = ["m 0 0 c -1.63643 2.53073 -2.08843 6.05658 -0.640023 8.94219 c 0.10036 0.19995 0.497655 0.96122 0.924712 0.90349 c 0.346799 -0.0469 0.75273 -0.57082 0.529199 -0.90672 c -0.273963 -0.4117 -1.09938 -0.12136 -1.39682 0.11718"];
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
    case "SvsdKa":
    case "SvsdKan":
    case "SvsdKa":
      this.dp = p(-0.000631, 3.71813);
      this.paths = ["m 0 0 l -0.005 3.43802 c 0 0 0.0258 0.92612 -0.043 1.20913 c -0.07213 0.296494 -0.719466 0.19258 -0.979071 -0.0052 c -0.228397 -0.174003 -0.397798 -0.594049 -0.233098 -0.829242 c 0.241507 -0.344875 0.654204 -0.363673 1.25954 -0.094578"];
      return;
  }

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-0.00495, 3.43805);
  this.paths = ["m 0 0 l -0.005 3.43802 c 0 0 0.0258 0.92612 -0.043 1.20913 c -0.12549 0.51585 -1.0229 0.40942 -1.12269 0.0435 c -0.14966 -0.54884 0.2547 -0.80597 1.16574 -1.2526"];
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
    case "NEL":
      this.dp = p(-5.09997, 7.24792);
      this.paths = ["m 0 0 c -1.49047 1.05666 -5.16196 3.85976 -5.10719 7.63149 c 0.0016 0.11057 -0.01655 0.79328 0.388776 0.91254 c 0.362273 0.10659 0.893703 -0.22748 0.865118 -0.52645 c -0.04612 -0.48233 -0.84481 -0.537647 -1.24667 -0.769663"];
      return;

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
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

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

  switch (tail_) {
    case "NELCL":
      this.dp = p(-1.34081, 3.68914);
      this.paths = ["m 0 0 c -0.483624 0.837661 -1.08224 2.1576 -1.34086 3.68914 c -0.0372 0.22021 -0.0843 0.69238 0.0917 1.01999 c 0.19475 0.36253 0.86414 0.50436 1.06358 -0.0685 c 0.16652 -0.4783 -0.19905 -0.79724 -1.15523 -0.95149"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "SL10":
      this.dp = p(-2.598, 2.98683);
      this.paths = ["m 0 0 c -0.87569 0.30734 -2.33943 1.45529 -2.59805 2.98683 c -0.0372 0.22021 -0.0843 0.69238 0.0917 1.01999 c 0.19475 0.36253 0.682822 0.121577 0.882262 -0.451283 c 0.16652 -0.4783 -0.567135 -1.19779 -0.973912 -0.568707"];
      return;
  }

  //switch (_head) {}

  this.dp = p(-2.598, 2.98683);
  this.paths = ["m 0 0 c -0.87569 0.30734 -2.33943 1.45529 -2.59805 2.98683 c -0.0372 0.22021 -0.0843 0.69238 0.0917 1.01999 c 0.19475 0.36253 0.86414 0.50436 1.06358 -0.0685 c 0.16652 -0.4783 -0.19905 -0.79724 -1.15523 -0.95149"];
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
    case "SvsdRu":
      this.dp = p(-3.06845, 7.69071);
      this.paths = ["m 0 0 c 0.65918 2.45167 -0.474666 6.44432 -3.94381 8.21708 c -0.188036 0.096088 -0.311653 0.176512 -0.663675 0.27555 c -0.435271 0.122459 -0.76379 -0.218972 -0.632312 -0.545503 c 0.202155 -0.502061 1.86827 -0.272315 2.17134 -0.256418"];
      return;
  }

  //switch (_model) {}

  //switch (_head) {}
  
  this.dp = p(-3.94381, 8.21708);
  this.paths = ["m 0 0 c 0.65918 2.45167 -0.47466 6.44433 -3.94381 8.21708 c -0.18803 0.0961 -0.52726 0.3142 -0.86349 0.27555 c -0.46476 -0.0534 -0.71045 -0.58591 -0.19938 -0.91183 c 0.45833 -0.29229 1.02845 -0.0945 1.06287 0.63628"];
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
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
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

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "S":
    case "S":
      this.dp = p(16.1197, 10.1766);
      this.paths = ["m 0 0 c 0.510129 6.75338 9.63454 10.4642 15.7434 10.1771 c 0.335215 -0.01575 1.09645 0.06791 1.40163 -0.237273 c 0.498649 -0.498649 -0.203453 -1.13831 -0.619562 -1.09243 c -0.460453 0.050766 -0.404322 0.335235 -0.405768 1.32917"];
      return;
  }

  this.dp = p(15.7434, 10.1771);
  this.paths = ["m 0 0 c 0.510129 6.75338 9.63454 10.4642 15.7434 10.1771 c 0.335215 -0.01575 1.07906 0.04946 1.40163 -0.237273 c 0.267763 -0.238011 0.272161 -0.684509 -0.05429 -0.910193 c -0.525879 -0.363549 -0.997442 0.217155 -1.34734 1.14747"];
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

SvsdGya = function() { SvsdChar.call(this, "SvsdGya", "ぎゃ", "HNEL10", "HNEL", "NEL", "black", false, p(1.0, 0.5)); };
SvsdGya.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぎゃ"] = SvsdGya;
SvsdGya.prototype.setPaths = SvsdKya.prototype.setPaths;
SvsdGya.prototype.setPathsExtra = function() { this.pathsExtra = ["m 3.81629 -0.01509 l 0.599564 0.98706"]; };

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

SvsdGyu = function() { SvsdChar.call(this, "SvsdKyu", "ぎゅ", "HSEL10", "HSEL", "SEL", "black", false, p(1.3, -2.6)); };
SvsdGyu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぎゅ"] = SvsdGyu;
SvsdGyu.prototype.setPaths = SvsdKyu.prototype.setPaths;
SvsdGyu.prototype.setPathsExtra = function() { this.pathsExtra = ["m 2.33574 3.70743 l -1.06066 1.06066"]; };

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

SvsdGa = function() { SvsdChar.call(this, "SvsdGa", "が", "NEL10", "NEL", "NEL", "black", false, p(0.0, 2.3)); };
SvsdGa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["が"] = SvsdGa;
SvsdGa.prototype.setPaths = SvsdKa.prototype.setPaths;
SvsdGa.prototype.setPathsExtra = function() {
  if (this.getNextHeadType() == "SW") {
    this.pathsExtra = ["m 4.6752 -1.59443 l 0.599564 0.98706"]; 
  } else {
    this.pathsExtra = ["m 4.8752 -1.39443 l 0.599564 0.98706"]; 
  }
};

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


SvsdAku = function() { SvsdChar.call(this, "SvsdAku", "あく", "NE10CL4", "NE", "CL", "black", false, p(0.0, 3.8)); };
SvsdAku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["あく"] = SvsdAku;

SvsdAku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(5.44838, -3.13523);
  this.paths = ["m 0 0 l 7.98774 -4.54366 c 0.848967 -0.482917 1.24621 -1.7047 0.41486 -2.67464 c -0.354328 -0.413398 -1.19087 -0.341461 -1.63323 -0.02402 c -1.16839 0.838454 -1.32099 4.10709 -1.32099 4.10709"];
};

SvsdIku = function() { SvsdChar.call(this, "SvsdIku", "いく", "SW10CR4", "SW", "CR", "black", false, p(6.5, -4.1)); };
SvsdIku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["いく"] = SvsdIku;

SvsdIku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-2.7447, 4.74768);
  this.paths = ["m 0 0 l -4.37395 7.56591 c -0.713947 1.23496 -0.967199 1.08174 -1.51729 0.882444 c -0.748382 -0.271131 -1.15159 -1.5222 -0.816264 -2.2441 c 0.592879 -1.27636 3.17579 -1.50494 3.96281 -1.45657"];
};

SvsdUku = function() { SvsdChar.call(this, "SvsdUku", "うく", "SE10CL4", "SE", "CL", "black", false, p(0.0, -2.6)); };
SvsdUku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["うく"] = SvsdUku;

SvsdUku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(5.65852, 3.30026);
  this.paths = ["m 0 0 l 8.80787 5.13708 c 0.48895 0.285174 1.34425 0.07787 1.65082 -0.397961 c 0.37594 -0.583489 0.17165 -1.64043 -0.39234 -2.04503 c -1.20509 -0.864501 -2.68672 -0.785417 -4.40783 0.60617"];
};

SvsdEki = function() { SvsdChar.call(this, "SvsdEki", "えき", "S10CR4", "S", "CR", "black", false, p(2.8, -4.9)); };
SvsdEki.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["えき"] = SvsdEki;

SvsdEki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(0, 5.32736);
  this.paths = ["m 0 0 v 8.35761 c 0 1.02644 0.004 1.27522 -0.47419 1.43953 c -0.88331 0.303805 -2.29615 -0.906813 -2.32845 -1.55923 c -0.0665 -1.3427 1.69235 -2.61306 2.80264 -2.91056"];
};

SvsdOku = function() { SvsdChar.call(this, "SvsdOku", "おく", "E10CL4", "E", "CL", "black", false, p(0.0, 1.3)); };
SvsdOku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["おく"] = SvsdOku;

SvsdOku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(5.73856, 0);
  this.paths = ["m 0 0 h 9.36118 c 0.29823 0 0.7635 -0.293335 0.84579 -0.636433 c 0.17167 -0.715717 -0.25461 -1.81103 -0.97013 -1.98352 c -1.4163 -0.341414 -2.96057 1.68861 -3.49828 2.61995"];
};

SvsdKaku = function() { SvsdChar.call(this, "SvsdKaku", "かく", "NEL10CL4", "NEL", "CL", "black", false, p(0.0, 3.8)); };
SvsdKaku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["かく"] = SvsdKaku;

SvsdKaku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(6.31873, -2.77214);
  this.paths = ["m 0 0 c 3.27118 0 6.18114 -2.21671 8.04046 -4.48854 c 0.641501 -0.783822 0.887327 -1.46803 0.562964 -2.12515 c -0.314524 -0.637188 -1.3635 -1.19378 -1.96778 -0.819907 c -1.32441 0.819423 -0.576795 3.69156 -0.316911 4.66146"];
};

SvsdKiku = function() { SvsdChar.call(this, "SvsdKiku", "きく", "SWL10CL4", "SWL", "CL", "black", false, p(5.0, -4.6)); };
SvsdKiku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["きく"] = SvsdKiku;

SvsdKiku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-4.43232, 4.75243);
  this.paths = ["m 0 0 c -1.81741 1.04928 -5.45548 4.66288 -4.99867 7.43644 c 0.119503 0.725562 0.401708 1.56797 1.05883 1.77293 c 0.585583 0.182647 1.44885 -0.192921 1.67443 -0.763342 c 0.532044 -1.34537 -1.0555 -3.3958 -2.16691 -3.6936"];
};

SvsdKuku = function() { SvsdChar.call(this, "SvsdKuku", "くく", "SEL10CL4", "SEL", "CL", "black", false, p(0.0, -2.5)); };
SvsdKuku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["くく"] = SvsdKuku;

SvsdKuku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(5.2476, 4.74307);
  this.paths = ["m 0 0 c 0.52036 2.17606 2.98485 4.08038 5.24764 4.74307 c 1.17821 0.345052 2.84977 0.339923 3.63298 -0.605499 c 0.48834 -0.589467 0.64403 -1.97393 -0.0505 -2.29584 c -1.39417 -0.646244 -3.07902 1.96432 -3.58252 2.90134"];
};

SvsdKeki = function() { SvsdChar.call(this, "SvsdKeki", "けき", "SL10CL4", "SL", "CL", "black", false, p(2.2, -4.9)); };
SvsdKeki.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["けき"] = SvsdKeki;

SvsdKeki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-2.21462, 6.80601);
  this.paths = ["m 0 0 c -0.87814 0.878133 -2.87124 5.33426 -2.01512 7.92053 c 0.3022 0.912916 1.27747 1.80541 2.23901 1.8192 c 0.55227 0.0079 1.36495 -0.457464 1.31542 -1.00756 c -0.12609 -1.40076 -2.06116 -1.92616 -3.75393 -1.92616"];
};

SvsdKoku = function() { SvsdChar.call(this, "SvsdKoku", "こく", "EL10CL4", "EL", "CL", "black", false, p(0.0, 0.2)); };
SvsdKoku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["こく"] = SvsdKoku;

SvsdKoku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(6.90002, 1.75993);
  this.paths = ["m 0 0 c 1.85508 1.85507 4.54438 2.05161 6.90004 1.75993 c 1.1454 -0.141825 2.46293 -0.651554 3.04496 -1.64819 c 0.2677 -0.458408 0.24941 -1.13968 -0.028 -1.59231 c -0.259 -0.422677 -0.8451 -0.862212 -1.31296 -0.698384 c -1.35018 0.472784 -1.70402 3.09899 -1.70402 3.93889"];
};

SvsdSaku = function() { SvsdChar.call(this, "SvsdSaku", "さく", "NEL5CL4", "NEL", "CL", "black", false, p(0.0, 2.2)); };
SvsdSaku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["さく"] = SvsdSaku;

SvsdSaku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.4894, -0.5073);
  this.paths = ["m 0 0 c 1.12351 0.30105 2.29201 -0.27997 3.14533 -0.96955 c 0.458932 -0.37087 0.85221 -0.95458 0.864874 -1.54449 c 0.01593 -0.74193 -0.271883 -2.11244 -1.00336 -1.98737 c -1.32329 0.22627 -1.13039 2.93246 -0.517446 3.99411"];
};

SvsdShiku = function() { SvsdChar.call(this, "SvsdShiku", "しく", "SWL5CL4", "SWL", "CL", "black", false, p(2.5, -2.4)); };
SvsdShiku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["しく"] = SvsdShiku;

SvsdShiku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-1.35881, 1.51275);
  this.paths = ["m 0 0 c -0.850954 0.77861 -2.13203 2.03922 -2.4429 3.20959 c -0.09813 0.36946 -0.07647 0.85571 0.188538 1.13122 c 0.322548 0.33534 1.02919 0.60287 1.36689 0.28281 c 0.761231 -0.72145 0.566243 -2.07328 -0.471344 -3.11087"];
};

SvsdSuku = function() { SvsdChar.call(this, "SvsdSuku", "すく", "SEL5CL4", "SEL", "CL", "black", false, p(0.0, -1.1)); };
SvsdSuku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["すく"] = SvsdSuku;

SvsdSuku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.18652, 1.46314);
  this.paths = ["m 0 0 c 0.64103 1.19599 1.84277 2.26722 3.11107 2.35905 c 0.73364 0.0531 1.59144 -0.56342 1.80688 -1.26672 c 0.11118 -0.36294 -0.0566 -0.91623 -0.40634 -1.0638 c -1.11216 -0.46931 -2.38785 0.49737 -3.32509 1.43461"];
};

SvsdSeki = function() { SvsdChar.call(this, "SvsdSeki", "せき", "SL5CL4", "SL", "CL", "black", false, p(1.3, -2.6)); };
SvsdSeki.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["せき"] = SvsdSeki;

SvsdSeki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-1.2209, 2.14982);
  this.paths = ["m 0 0 c -0.87814 0.87813 -1.52537 2.32282 -1.27688 3.5582 c 0.13957 0.69387 0.73025 1.4916 1.43412 1.56581 c 0.584 0.0616 1.43836 -0.43524 1.43466 -1.02247 c -0.007 -1.14118 -2.35718 -1.95172 -2.8128 -1.95172"];
};

SvsdSoku = function() { SvsdChar.call(this, "SvsdSoku", "そく", "EL5CL4", "EL", "CL", "black", false, p(0.0, 0.4)); };
SvsdSoku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["そく"] = SvsdSoku;

SvsdSoku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.97139, 0.91846);
  this.paths = ["m 0 0 c 0.40054 0.40054 1.24726 0.88482 1.97144 0.91846 c 1.05973 0.0492 2.37292 -0.21294 2.99708 -1.07077 c 0.2218 -0.30483 0.23422 -0.8108 0.0343 -1.13043 c -0.16861 -0.26961 -0.56016 -0.46277 -0.87002 -0.39133 c -1.09636 0.25275 -1.95189 1.81059 -2.16141 2.59253"];
};

SvsdTaku = function() { SvsdChar.call(this, "SvsdTaku", "たく", "NE5CL4", "NE", "CL", "black", false, p(0.0, 2.1)); };
SvsdTaku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["たく"] = SvsdTaku;

SvsdTaku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.10506, -1.23819);
  this.paths = ["m 0 0 l 3.54834 -2.01335 c 1.13623 -0.64471 0.509654 -1.51336 0.0495 -1.99264 c -0.348968 -0.36347 -1.15351 -0.37865 -1.51144 -0.024 c -0.661067 0.65502 -0.59462 1.72957 0.01866 2.7918"];
};

SvsdChiku = function() { SvsdChar.call(this, "SvsdChiku", "ちく", "SW5CR4", "SW", "CR", "black", false, p(3.5, -2.2)); };
SvsdChiku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ちく"] = SvsdChiku;

SvsdChiku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-0.962932, 1.76839);
  this.paths = ["m 0 0 l -0.414014 0.78358 l -1.30309 2.46627 c -0.288798 0.54658 -0.512632 1.26873 -1.23823 1.01021 c -0.694389 -0.24741 -0.707278 -1.45985 -0.318762 -2.01993 c 0.44815 -0.64606 1.65857 -0.51184 2.31117 -0.47174"];
};


SvsdTsuku = function() { SvsdChar.call(this, "SvsdTsuku", "つく", "SE5CL4", "SE", "CL", "black", false, p(0.0, -0.9)); };
SvsdTsuku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["つく"] = SvsdTsuku;

SvsdTsuku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.35055, 1.33717);
  this.paths = ["m 0 0 l 3.45257 1.97266 c 0.49147 0.28081 1.34578 0.0789 1.65082 -0.39796 c 0.34058 -0.53236 0.21568 -1.62018 -0.36917 -1.85966 c -0.88941 -0.3642 -1.91245 0.96181 -2.38367 1.62213"];
};

SvsdTeki = function() { SvsdChar.call(this, "SvsdTeki", "てき", "S5CR4", "S", "CR", "black", false, p(2.4, -2.5)); };
SvsdTeki.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["てき"] = SvsdTeki;

SvsdTeki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(0, 1.66945);
  this.paths = ["m 0 0 v 3.5287 c 0 1.02644 -0.004 1.25514 -0.47419 1.43953 c -0.68048 0.26676 -1.82876 -0.33619 -1.9186 -1.06155 c -0.1342 -1.08364 1.73613 -2.06128 2.39279 -2.23723"];
};

SvsdToku = function() { SvsdChar.call(this, "SvsdToku", "とく", "E5CL4", "E", "CL", "black", false, p(0.0, 1.1)); };
SvsdToku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["とく"] = SvsdToku;

SvsdToku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.9762, 0);
  this.paths = ["m 0 0 l 4.11588 0 c 0.29823 0 0.74445 -0.29848 0.84579 -0.63644 c 0.16027 -0.53448 -0.0216 -1.44175 -0.56305 -1.57643 c -1.06133 -0.26396 -2.13016 1.12212 -2.42242 2.21287"];
};

SvsdNaku = function() { SvsdChar.call(this, "SvsdNaku", "なく", "NER10CR4", "NER", "CR", "black", false, p(0.0, 3.1)); };
SvsdNaku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["なく"] = SvsdNaku;

SvsdNaku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(4.69017, -5.24388);
  this.paths = ["m 0 0 c 0.668442 -2.49466 4.8196 -6.55009 8.27294 -6.28614 c 0.451689 0.0345 0.895028 0.52683 0.944551 0.97712 c 0.06819 0.62004 -0.382538 1.40736 -0.977118 1.59596 c -1.22841 0.38965 -2.90591 -0.41487 -3.5502 -1.53082"];
};

SvsdNiku = function() { SvsdChar.call(this, "SvsdNiku", "にく", "SWR10CR4", "SWR", "CR", "black", false, p(4.6, -4.4)); };
SvsdNiku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["にく"] = SvsdNiku;

SvsdNiku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-0.080365, 5.61757);
  this.paths = ["m 0 0 c 1.0556 1.0556 0.568933 5.72819 -1.16641 7.37585 c -0.573169 0.54421 -1.65158 1.56807 -2.56017 1.27792 c -0.53851 -0.17197 -1.00399 -0.97042 -0.797546 -1.49668 c 0.572494 -1.45935 2.75084 -1.99313 4.44376 -1.53952"];
};

SvsdNuku = function() { SvsdChar.call(this, "SvsdNuku", "ぬく", "SER10CR4", "SER", "CR", "black", false, p(0.0, -2.2)); };
SvsdNuku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぬく"] = SvsdNuku;

SvsdNuku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(7.24824, 0.05294);
  this.paths = ["m 0 0 c 2.19084 -0.58703 6.83418 -0.92158 9.13961 1.09005 c 0.73391 0.64038 1.05578 1.8307 0.69875 2.68318 c -0.24508 0.58517 -1.07096 1.21165 -1.64905 0.9503 c -1.44713 -0.65423 -0.98442 -3.28024 -0.94107 -4.67059"];
};

SvsdNeki = function() { SvsdChar.call(this, "SvsdNeki", "ねき", "SR10CR4", "SR", "CR", "black", false, p(1.5, -5.0)); };
SvsdNeki.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ねき"] = SvsdNeki;

SvsdNeki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.4643, 5.27244);
  this.paths = ["m 0 0 c 1.84879 1.0674 2.81932 4.6049 2.46429 7.07768 c -0.16348 1.13864 -0.89862 2.49616 -2.00582 2.80815 c -0.65912 0.18573 -1.76422 -0.12942 -1.8912 -0.80233 c -0.33691 -1.78542 3.10928 -3.66336 3.89703 -3.81106"];
};

SvsdNoku = function() { SvsdChar.call(this, "SvsdNoku", "のく", "ER10CR4", "ER", "CR", "black", false, p(0.0, 0.5)); };
SvsdNoku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["のく"] = SvsdNoku;

SvsdNoku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(5.23957, -1.85858);
  this.paths = ["m 0 0 c 1.86137 -1.07466 6.2333 -2.78046 9.04151 -1.56789 c 0.53674 0.23176 1.0326 0.88243 0.96687 1.46337 c -0.0582 0.51423 -0.60681 1.04494 -1.12366 1.07138 c -1.53531 0.0785 -3.07048 -2.25076 -3.64515 -2.82544"];
};

SvsdHaku = function() { SvsdChar.call(this, "SvsdHaku", "はく", "NEL20CL4", "NEL", "CL", "black", false, p(0.0, 6.1)); };
SvsdHaku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["はく"] = SvsdHaku;

SvsdHaku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(15.0996, -7.05464);
  this.paths = ["m 0 0 c 5.0755 0 11.8791 -3.64965 15.8876 -7.83716 c 0.717796 -0.74985 1.66967 -2.15436 1.22489 -3.20956 c -0.33108 -0.78545 -1.65039 -1.50694 -2.34683 -1.0155 c -1.36686 0.96452 -0.937647 3.1001 0.334011 5.00758"];
};

SvsdHiku = function() { SvsdChar.call(this, "SvsdHiku", "ひく", "SWL20CL4", "SWL", "CL", "black", false, p(11.0, -9.0)); };
SvsdHiku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ひく"] = SvsdHiku;

SvsdHiku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-10.3615, 13.3426);
  this.paths = ["m 0 0 c -3.11245 1.79697 -9.55496 9.86919 -10.9196 14.9622 c -0.207048 0.77271 -0.206449 2.24911 0.567442 2.80922 c 0.651187 0.47131 2.03539 0.43404 2.39464 -0.28507 c 0.713652 -1.42853 -0.480105 -3.62825 -2.404 -4.14375"];
};

SvsdHuku = function() { SvsdChar.call(this, "SvsdHuku", "ふく", "SEL20CL4", "SEL", "CL", "black", false, p(0.0, -5.3)); };
SvsdHuku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ふく"] = SvsdHuku;

SvsdHuku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(14.4342, 10.4797);
  this.paths = ["m 0 0 c 1.23164 4.59654 8.60108 9.7523 14.4342 10.4797 c 1.59825 0.19929 3.78006 0.37964 4.74551 -0.90956 c 0.41278 -0.55119 0.42278 -1.75777 -0.19773 -2.05638 c -1.63081 -0.78479 -3.42115 1.00255 -4.54778 2.96594"];
};

SvsdHeki = function() { SvsdChar.call(this, "SvsdHeki", "へき", "UWL5CL4", "SWL", "CL", "black", false, p(2.3, -2.5)); };
SvsdHeki.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["へき"] = SvsdHeki;

SvsdHeki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-2.27664, 3.11551);
  this.paths = ["m 0 0 c -1.02348 0.76912 -2.72857 2.56522 -2.24032 4.01925 c 0.25212 0.75083 1.39331 1.08412 2.17501 0.95664 c 0.72563 -0.11834 1.86348 -0.78557 1.63223 -1.48347 c -0.40491 -1.22199 -3.37562 -0.5023 -3.84356 -0.37691"];
};


SvsdHoku = function() { SvsdChar.call(this, "SvsdHoku", "ほく", "EL20CL4", "EL", "CL", "black", false, p(0.0, 1.1)); };
SvsdHoku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ほく"] = SvsdHoku;

SvsdHoku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(17.7772, 0.23744);
  this.paths = ["m 0 0 c 3.56394 2.8585 11.3939 2.10074 16.7511 0.51708 c 1.90616 -0.56349 5.06861 -1.41437 4.90226 -3.3951 c -0.0762 -0.90761 -1.63823 -1.52051 -2.47432 -1.15923 c -1.37655 0.59482 -1.4054 2.53431 -1.40193 4.27469"];
};


SvsdMaku = function() { SvsdChar.call(this, "SvsdMaku", "まく", "NER20CR4", "NER", "CR", "black", false, p(0.0, 5.7)); };
SvsdMaku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["まく"] = SvsdMaku;

SvsdMaku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(13.7443, -10.4974);
  this.paths = ["m 0 0 c 0.951612 -1.64824 10.9287 -11.2085 18.0425 -11.4151 c 0.601814 -0.0175 1.3606 0.31475 1.57984 0.87548 c 0.181296 0.46368 -0.03226 1.17886 -0.468883 1.41807 c -1.63163 0.8939 -4.78557 -0.29584 -5.4091 -1.37583"];
};


SvsdMiku = function() { SvsdChar.call(this, "SvsdMiku", "みく", "SWR20CR4", "SWR", "CR", "black", false, p(10.1, -8.9)); };
SvsdMiku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["みく"] = SvsdMiku;

SvsdMiku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-4.5305, 14.8068);
  this.paths = ["m 0 0 c 1.03721 3.8709 -1.27457 11.8471 -5.3218 15.6215 c -0.821301 0.76594 -2.98249 2.79106 -4.27717 1.91661 c -0.743178 -0.50196 -0.539865 -2.06386 0.103699 -2.68844 c 1.18763 -1.1526 2.86046 -1.42779 4.96476 -0.0428"];
};


SvsdMuku = function() { SvsdChar.call(this, "SvsdMuku", "むく", "NER20CR4", "NER", "CR", "black", false, p(0.0, -4.5)); };
SvsdMuku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["むく"] = SvsdMuku;

SvsdMuku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(15.4278, 3.70919);
  this.paths = ["m 0 0 c 4.15127 -0.56444 14.154 1.1352 17.2897 5.4721 c 0.48605 0.67227 0.61548 1.95045 0.13904 2.72531 c -0.33563 0.54585 -1.21237 1.11596 -1.75742 0.77903 c -1.49504 -0.92419 -0.43189 -4.37247 -0.24351 -5.26725"];
};


SvsdMeki = function() { SvsdChar.call(this, "SvsdMeki", "めき", "UER5CR4", "SER", "SWR", "black", false, p(0.7, -2.5)); };
SvsdMeki.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["めき"] = SvsdMeki;

SvsdMeki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.49718, 1.85968);
  this.paths = ["m 0 0 c 2.43632 0.65746 2.43679 1.20845 2.55359 2.36206 c 0.10906 1.07717 -0.81636 2.53352 -1.89391 2.6387 c -0.62931 0.0615 -1.45697 -0.67009 -1.38319 -1.29807 c 0.14432 -1.22846 2.11714 -1.59221 3.22069 -1.84301"];
};

SvsdMoku = function() { SvsdChar.call(this, "SvsdMoku", "もく", "ER20CR4", "ER", "CR", "black", false, p(0.0, 1.0)); };
SvsdMoku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["もく"] = SvsdMoku;

SvsdMoku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(14.9819, -2.95971);
  this.paths = ["m 0 0 c 1.74531 -1.00766 13.4456 -4.56417 18.6607 -2.17839 c 0.72477 0.33156 1.46938 1.20095 1.33154 1.98595 c -0.11423 0.65056 -0.94184 1.24541 -1.59821 1.17146 c -1.72612 -0.1945 -2.97428 -3.18047 -3.41207 -3.93873"];
};

SvsdYaku = function() { SvsdChar.call(this, "SvsdYaku", "やく", "NE20CL4", "NE", "CL", "black", false, p(0.0, 6.1)); };
SvsdYaku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["やく"] = SvsdYaku;

SvsdYaku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(13.7218, -8.11575);
  this.paths = ["m 0 0 l 15.6889 -9.04497 c 1.57301 -0.90688 1.28281 -1.6241 0.912214 -2.39318 c -0.290377 -0.60261 -1.32836 -0.93626 -1.91199 -0.60941 c -1.17759 0.65948 -1.28337 2.75222 -0.967299 3.93181"];
};

SvsdYuku = function() { SvsdChar.call(this, "SvsdYuku", "ゆく", "SE20CL4", "SE", "CL", "black", false, p(0.0, -4.8)); };
SvsdYuku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ゆく"] = SvsdYuku;

SvsdYuku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(13.1709, 7.60424);
  this.paths = ["m 0 0 l 16.3203 9.44107 c 0.48996 0.28343 1.34425 0.0779 1.65082 -0.39797 c 0.37594 -0.58348 0.17165 -1.64043 -0.39234 -2.04503 c -1.20509 -0.8645 -2.68672 -0.78541 -4.40783 0.60617"];
};


SvsdYoku = function() { SvsdChar.call(this, "SvsdYoku", "よく", "E20CL4", "E", "CL", "black", false, p(0.0, 1.3)); };
SvsdYoku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["よく"] = SvsdYoku;

SvsdYoku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(15.4923, 0);
  this.paths = ["m 0 0 h 19.115 c 0.29823 0 0.7635 -0.29333 0.84579 -0.63643 c 0.17167 -0.71572 -0.25461 -1.81103 -0.97013 -1.98352 c -1.4163 -0.34141 -2.96057 1.68862 -3.49828 2.61995"];
};

SvsdRaku = function() { SvsdChar.call(this, "SvsdRaku", "らく", "NER5CR4", "NER", "CR", "black", false, p(0.0, 1.4)); };
SvsdRaku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["らく"] = SvsdRaku;

SvsdRaku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.97828, -2.56857);
  this.paths = ["m 0 0 c 0.180368 -0.67315 1.77155 -2.79064 3.21061 -3.37163 c 0.797659 -0.32204 2.04814 -0.56796 2.57832 0.10945 c 0.267165 0.34136 0.09808 1.02818 -0.258643 1.27445 c -0.987297 0.68161 -2.99833 -0.37154 -3.55201 -0.58084"];
};

SvsdRiku = function() { SvsdChar.call(this, "SvsdRiku", "りく", "SWR5CR4", "SWR", "CR", "black", false, p(3.6, -2.3)); };
SvsdRiku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["りく"] = SvsdRiku;

SvsdRiku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-0.259051, 2.41601);
  this.paths = ["m 0 0 c 0 1.04795 -0.08403 2.76602 -0.903483 3.76177 c -0.4005 0.48667 -1.10859 0.94335 -1.7192 0.78712 c -0.51427 -0.13158 -1.12809 -0.77623 -0.951652 -1.27688 c 0.379348 -1.07645 2.58289 -1.27885 3.31528 -0.856"];
};

SvsdRuku = function() { SvsdChar.call(this, "SvsdRuku", "るく", "SER5CR4", "SER", "CR", "black", false, p(0.0, -1.9)); };
SvsdRuku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["るく"] = SvsdRuku;

SvsdRuku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.49575, 0.34963);
  this.paths = ["m 0 0 c 0.69689 0 2.95056 0.15025 3.92735 1.09426 c 0.45225 0.43708 0.77123 1.20304 0.56962 1.79879 c -0.17018 0.5029 -0.81112 1.1114 -1.30412 0.91438 c -1.09183 -0.43632 -0.756 -2.86881 -0.6971 -3.4578"];
};

SvsdReki = function() { SvsdChar.call(this, "SvsdReki", "れき", "SR5CR4", "SR", "CR", "black", false, p(1.2, -2.7)); };
SvsdReki.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["れき"] = SvsdReki;

SvsdReki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.28269, 2.11468);
  this.paths = ["m 0 0 c 1.29191 0.91995 1.46435 2.4332 1.29482 3.74223 c -0.0875 0.67593 -0.46942 1.56992 -1.13881 1.69825 c -0.55151 0.10573 -1.34577 -0.39313 -1.38921 -0.953 c -0.0892 -1.14931 1.61828 -1.92399 2.51589 -2.3728"];
};

SvsdRoku = function() { SvsdChar.call(this, "SvsdRoku", "ろく", "ER5CR4", "ER", "CR", "black", false, p(0.0, -0.0)); };
SvsdRoku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ろく"] = SvsdRoku;

SvsdRoku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.25105, -0.92044);
  this.paths = ["m 0 0 c 1.74531 -1.00766 4.19201 -1.8445 5.76708 -0.7168 c 0.32253 0.23093 0.38163 0.79414 0.24156 1.16527 c -0.1667 0.44168 -0.6602 0.86453 -1.1321 0.85101 c -1.14559 -0.0328 -2.1877 -1.46166 -2.62549 -2.21992"];
};

SvsdWaku = function() { SvsdChar.call(this, "SvsdWaku", "わく", "USL5CL4", "SEL", "CL", "black", false, p(0.0, -1.2)); };
SvsdWaku.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["わく"] = SvsdWaku;

SvsdWaku.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.00787, 2.92665);
  this.paths = ["m 0 0 c 0 2.17369 0.850081 2.68342 2.00787 2.92665 c 1.1225 0.23581 2.39591 -0.79597 2.9239 -1.81423 c 0.193781 -0.37372 0.207267 -0.94767 -0.07416 -1.26075 c -0.301571 -0.33549 -0.936359 -0.43379 -1.33492 -0.22248 c -1.06867 0.5666 -1.38713 1.89289 -1.51482 3.29746"];
};

SvsdAtsu = function() { SvsdChar.call(this, "SvsdAtsu", "あつ", "NE10OL4", "NE", "OL", "black", false, p(0.0, 2.8)); };
SvsdAtsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["あつ"] = SvsdAtsu;

SvsdAtsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(4.96576, -2.86698);
  this.paths = ["m 0 0 l 7.50277 -4.33173 c 0 0 1.14139 -0.607154 0.998645 -1.07494 c -0.100303 -0.328687 -0.675615 -0.336605 -1.00385 -0.234835 c -1.19586 0.370777 -2.02278 1.89286 -2.53181 2.77452"];
};

SvsdItsu = function() { SvsdChar.call(this, "SvsdItsu", "いつ", "SW10OR4", "SW", "OR", "black", false, p(5.5, -4.2)); };
SvsdItsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["いつ"] = SvsdItsu;

SvsdItsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-2.81907, 4.88337);
  this.paths = ["m 0 0 l -4.63973 8.03723 c -0.14488 0.250971 -0.440188 0.544006 -0.677871 0.42359 c -0.264111 -0.133805 -0.165722 -0.606971 -0.06604 -0.885757 c 0.417252 -1.16692 1.79059 -2.3858 2.56457 -2.69169"];
};

SvsdUtsu = function() { SvsdChar.call(this, "SvsdUtsu", "うつ", "SE10OL4", "SE", "OL", "black", false, p(0.0, -2.4)); };
SvsdUtsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["うつ"] = SvsdUtsu;

SvsdUtsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(4.40929, 2.54571);
  this.paths = ["m 0 0 c 0 0 5.10325 2.96327 7.44967 4.33461 c 0.33673 0.196799 0.79874 0.58105 1.10426 0.351149 c 0.17032 -0.128175 0.096 -0.467085 -0.0302 -0.638796 c -0.86497 -1.1761 -2.33271 -1.17007 -4.11444 -1.50126"];
};

SvsdEtsu = function() { SvsdChar.call(this, "SvsdEtsu", "えつ", "S10OR4", "S", "OR", "black", false, p(1.2, -5.0)); };
SvsdEtsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["えつ"] = SvsdEtsu;

SvsdEtsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(0, 5.39275);
  this.paths = ["m 0 0 v 9.25599 c 0 0 -0.0561 0.659794 -0.31126 0.732366 c -0.2443 0.06949 -0.53124 -0.202393 -0.62251 -0.43942 c -0.51024 -1.32508 -0.0968 -3.12557 0.93377 -4.15618"];
};

SvsdOtsu = function() { SvsdChar.call(this, "SvsdOtsu", "おつ", "E10OL4", "E", "OL", "black", false, p(0.0, 0.5)); };
SvsdOtsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["おつ"] = SvsdOtsu;

SvsdOtsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(5.97713, -0.000598);
  this.paths = ["m 0 0 l 9.14471 -0.000483 c 0.20088 -1.1e-05 0.79637 0.01898 0.85097 -0.273968 c 0.0594 -0.318886 -0.43923 -0.54513 -0.75665 -0.611939 c -1.10252 -0.232048 -3.2619 0.885792 -3.2619 0.885792"];
};

SvsdKatsu = function() { SvsdChar.call(this, "SvsdKatsu", "かつ", "NEL10OL4", "NEL", "OL", "black", false, p(0.0, 2.5)); };
SvsdKatsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["かつ"] = SvsdKatsu;

SvsdKatsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(5.62552, -1.1578);
  this.paths = ["m 0 0 c 3.03636 1.34978 6.39642 -1.28465 7.96521 -3.6709 c 0.42766 -0.666957 0.711197 -0.992339 0.462525 -1.42566 c -0.114534 -0.19958 -0.462736 -0.237573 -0.674419 -0.147348 c -1.37271 0.585085 -1.8438 3.05144 -2.12779 4.08611"];
};

SvsdKitsu = function() { SvsdChar.call(this, "SvsdKitsu", "きつ", "SWL10OL5", "SWL", "OL", "black", false, p(5.1, -4.3)); };
SvsdKitsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["きつ"] = SvsdKitsu;

SvsdKitsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-4.52409, 4.95672);
  this.paths = ["m 0 0 c -1.49047 1.05666 -5.16196 3.85976 -5.10719 7.63149 c 0.0016 0.11057 0.069347 0.827191 0.388776 0.91254 c 0.281674 0.075261 0.590118 -0.255784 0.69849 -0.52645 c 0.384354 -0.959949 -0.222934 -2.4493 -0.50417 -3.06086"];
};

SvsdKutsu = function() { SvsdChar.call(this, "SvsdKutsu", "くつ", "SEL10OL4", "SEL", "OL", "black", false, p(0.0, -2.6)); };
SvsdKutsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["くつ"] = SvsdKutsu;

SvsdKutsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(4.52107, 4.93879);
  this.paths = ["m 0 0 c 0.322402 3.47355 3.79757 5.45994 7.287 5.21489 c 0.277989 -0.0195 1.43047 -0.291581 1.37372 -0.822215 c -0.038168 -0.356889 -0.66115 -0.336492 -1.01997 -0.345104 c -1.08118 -0.025949 -2.58498 0.356517 -3.11968 0.89122"];
};

SvsdKetsu = function() { SvsdChar.call(this, "SvsdKetsu", "けつ", "SL10OL4", "SL", "OL", "black", false, p(1.5, -4.9)); };
SvsdKetsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["けつ"] = SvsdKetsu;

SvsdKetsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-1.37247, 6.73249);
  this.paths = ["m 0 0 c -1.63643 2.53073 -2.08843 6.05658 -0.640023 8.94219 c 0.10036 0.19995 0.536449 1.09047 0.924712 0.90349 c 0.479819 -0.231073 0.065674 -1.10744 -0.160466 -1.5896 c -0.302298 -0.644544 -1.12746 -1.52358 -1.49669 -1.52358"];
};

SvsdKotsu = function() { SvsdChar.call(this, "SvsdKotsu", "こつ", "EL10OL4", "EL", "OL", "black", false, p(0.0, -0.3)); };
SvsdKotsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["こつ"] = SvsdKotsu;

SvsdKotsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(6.95738, 1.08054);
  this.paths = ["m 0 0 c 2.70023 1.86067 6.02664 1.53794 8.60646 0.59829 c 0.296171 -0.10787 1.2137 -0.597397 1.12602 -1.11931 c -0.034941 -0.207969 -0.360642 -0.301766 -0.569808 -0.274898 c -0.957329 0.122973 -1.81874 1.20693 -2.20529 1.87646"];
};

SvsdSatsu = function() { SvsdChar.call(this, "SvsdSatsu", "さつ", "NEL5OL4", "NEL", "OL", "black", false, p(0.0, 1.2)); };
SvsdSatsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["さつ"] = SvsdSatsu;

SvsdSatsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.46035, -0.414344);
  this.paths = ["m 0 0 c 1.22256 0.73349 2.59036 -0.34046 3.56736 -1.48845 c 0.12228 -0.14368 0.685042 -0.667718 0.517866 -1.0057 c -0.08646 -0.174803 -0.402359 -0.191638 -0.575956 -0.102778 c -0.71852 0.367796 -0.85838 1.09729 -1.04892 2.18258"];
};


SvsdShitsu = function() { SvsdChar.call(this, "SvsdShitsu", "しつ", "SWL5OL4", "SWL", "OL", "black", false, p(2.7, -2.1)); };
SvsdShitsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["しつ"] = SvsdShitsu;

SvsdShitsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-1.90771, 1.46861);
  this.paths = ["m 0 0 c -0.87569 0.30734 -2.33943 1.45529 -2.59805 2.98683 c -0.0372 0.22021 -0.293129 1.08587 0.0917 1.23767 c 0.222698 0.087847 0.428316 -0.269346 0.52775 -0.487117 c 0.314263 -0.688276 0.260423 -1.56144 0.070893 -2.26877"];
};

SvsdSutsu = function() { SvsdChar.call(this, "SvsdSutsu", "すつ", "SEL5OL4", "SEL", "OL", "black", false, p(0.0, -1.3)); };
SvsdSutsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["すつ"] = SvsdSutsu;

SvsdSutsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.30888, 2.16218);
  this.paths = ["m 0 0 c 0.338408 1.04544 0.874149 2.55 2.81235 2.65909 c 0.231118 0.013 1.24653 0.140737 1.38092 -0.3116 c 0.065542 -0.2206 -0.263946 -0.419224 -0.481233 -0.495031 c -0.762599 -0.266057 -1.79529 -0.298145 -2.40316 0.309723"];
};

SvsdSetsu = function() { SvsdChar.call(this, "SvsdSetsu", "せつ", "SL5OL4", "SL", "OL", "black", false, p(0.7, -2.4)); };
SvsdSetsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["せつ"] = SvsdSetsu;

SvsdSetsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-0.699, 2.40517);
  this.paths = ["m 0 0 c -0.44045 1.21912 -1.10421 2.88152 -0.50385 4.24483 c 0.0653 0.1484 0.426736 0.642044 0.73201 0.5805 c 0.196331 -0.039581 0.296218 -0.326418 0.28935 -0.526581 c -0.025725 -0.749785 -0.667207 -1.34428 -1.21651 -1.89358"];
};

SvsdSotsu = function() { SvsdChar.call(this, "SvsdSotsu", "そつ", "EL5OL4", "EL", "OL", "black", false, p(0.0, -0.3)); };
SvsdSotsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["そつ"] = SvsdSotsu;

SvsdSotsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.36708, 1.02643);
  this.paths = ["m 0 0 c 0.9556 1.26596 2.5813 1.2111 3.87482 0.66396 c 0.20807 -0.088 0.916685 -0.35362 0.976868 -0.762231 c 0.017085 -0.115998 -0.088252 -0.263804 -0.203153 -0.28715 c -0.876418 -0.178074 -1.8713 0.994559 -2.28145 1.41185"];
};

SvsdLa = function() { SvsdChar.call(this, "SvsdLa", "ぁ", "UN1NE5", "NER", "NE", "black", false, p(0.0, 1.5)); };
SvsdLa.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぁ"] = SvsdLa;
SvsdChar.dict["ァ"] = SvsdLa;

SvsdLa.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(5.40835, -3.03054);
  this.paths = ["m 0 0 c 0.327644 -0.491467 0.664164 -1.08953 1.14228 -0.955786 c 0.347876 0.0973 0.349679 1.02572 0.349679 1.02572 l 3.91639 -3.10048"];
};

SvsdLi = function() { SvsdChar.call(this, "SvsdLi", "ぃ", "UNE1SW5", "NER", "SW", "black", false, p(0.8, -1.6)); };
SvsdLi.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぃ"] = SvsdLi;
SvsdChar.dict["ィ"] = SvsdLi;

SvsdLi.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-0.814274, 3.97657);
  this.paths = ["m 0 0 c 0.211562 -0.366436 0.737666 -0.926442 1.14768 -0.732055 c 0.240544 0.114041 0.222443 0.547861 0.09369 0.793113 l -2.05564 3.91551"];
};

SvsdLu = function() { SvsdChar.call(this, "SvsdLu", "ぅ", "UNER1SE5", "NER", "SE", "black", false, p(0.0, -0.5)); };
SvsdLu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぅ"] = SvsdLu;
SvsdChar.dict["ゥ"] = SvsdLu;

SvsdLu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(5.81834, 2.03369);
  this.paths = ["m 0 0 c 0.148093 -0.325804 0.718636 -1.11771 1.17403 -0.9188 c 0.281638 0.123014 0.07657 0.91881 0.07657 0.91881 l 4.56774 2.03368"];
};

SvsdLe = function() { SvsdChar.call(this, "SvsdLe", "ぇ", "UNR1S5", "NER", "S", "black", false, p(0.0, -1.5)); };
SvsdLe.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぇ"] = SvsdLe;
SvsdChar.dict["ェ"] = SvsdLe;

SvsdLe.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.24482, 4.01439);
  this.paths = ["m 0 0 c 0 -0.452668 0.362397 -1.06647 0.819378 -0.976953 c 0.311195 0.06096 0.425446 0.500898 0.425446 0.850895 l 0 4.14045"];
};

SvsdLo = function() { SvsdChar.call(this, "SvsdLo", "ぉ", "UNR1E5", "NER", "E", "black", false, p(0.0, 0.5)); };
SvsdLo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぉ"] = SvsdLo;
SvsdChar.dict["ォ"] = SvsdLo;

SvsdLo.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(6.49196, 0.069935);
  this.paths = ["m 0 0 c 0.327644 -0.491467 0.664164 -1.08953 1.14228 -0.955786 c 0.347876 0.0973 0.349679 1.02572 0.349679 1.02572 h 5"];
};


SvsdProlong = function() { SvsdChar.call(this, "SvsdProlong", "ー", "UWL1P", "SWL", "P", "black", false, p(1.1, -0.9)); };
SvsdProlong.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ー"] = SvsdProlong;

SvsdProlong.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(0.671, 1.71821);
  this.paths = ["m 0 0 c -0.22027 0.05902 -1.12153 0.553788 -1.08609 1.05794 c 0.0249 0.354198 0.38147 0.629202 0.85953 0.629202", "m 0.671 1.71821 v 0"];
};

SvsdTatsu = function() { SvsdChar.call(this, "SvsdTatsu", "たつ", "NE5OL4", "NE", "OL", "black", false, p(0.0, 1.5)); };
SvsdTatsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["たつ"] = SvsdTatsu;

SvsdTatsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.92878, -1.11358);
  this.paths = ["m 0 0 l 3.38064 -1.95181 c 0.07403 -0.0427 0.702055 -0.38756 0.666455 -0.65464 c -0.03455 -0.25923 -0.45437 -0.39765 -0.708683 -0.33665 c -0.748629 0.17957 -1.00324 0.9757 -1.40963 1.82952"];
};


SvsdChitsu = function() { SvsdChar.call(this, "SvsdChitsu", "ちつ", "SW5OR4", "SW", "OR", "black", false, p(3.0, -2.1)); };
SvsdChitsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ちつ"] = SvsdChitsu;

SvsdChitsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-1.01147, 1.75191);
  this.paths = ["m 0 0 l -2.11204 3.65815 c -0.188808 0.32703 -0.296324 0.59675 -0.552283 0.55092 c -0.251845 -0.0451 -0.373718 -0.44644 -0.321591 -0.69692 c 0.179644 -0.86322 0.840171 -1.57232 1.97444 -1.76024"];
};

SvsdTsutsu = function() { SvsdChar.call(this, "SvsdTsutsu", "つつ", "SE5OL4", "SE", "OL", "black", false, p(0.0, -1.2)); };
SvsdTsutsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["つつ"] = SvsdTsutsu;

SvsdTsutsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.54783, 0.89364);
  this.paths = ["m 0 0 l 3.56761 2.05976 c 0.2278 0.13152 0.47977 0.35076 0.71679 0.25923 c 0.1831 -0.0707 0.35114 -0.33937 0.27541 -0.52045 c -0.40448 -0.96715 -1.99951 -1.05846 -3.01198 -0.9049"];
};

SvsdTetsu = function() { SvsdChar.call(this, "SvsdTetsu", "てつ", "S5OR4", "S", "OR", "black", false, p(0.8, -2.5)); };
SvsdTetsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["てつ"] = SvsdTetsu;

SvsdTetsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-1e-05, 2.25722);
  this.paths = ["m 0 0 v 4.24601 c 0 0.28521 0.0458 0.75153 -0.22858 0.8095 c -0.25809 0.0545 -0.45643 -0.35018 -0.50475 -0.60951 c -0.14092 -0.75643 -0.0292 -1.42631 0.73332 -2.18878"];
};

SvsdTotsu = function() { SvsdChar.call(this, "SvsdTotsu", "とつ", "E5OL4", "E", "OL", "black", false, p(0.0, 0.5)); };
SvsdTotsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["とつ"] = SvsdTotsu;

SvsdTotsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.69966, 0);
  this.paths = ["m 0 0 h 4.07472 c 0 0 0.71711 0.0217 0.87179 -0.23663 c 0.11381 -0.19008 0.0414 -0.53505 -0.14945 -0.64761 c -0.9248 -0.54554 -2.38586 0.22286 -3.0974 0.88424"];
};

SvsdNatsu = function() { SvsdChar.call(this, "SvsdNatsu", "なつ", "NER10OL4", "NER", "OL", "black", false, p(0.0, 2.6)); };
SvsdNatsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["なつ"] = SvsdNatsu;

SvsdNatsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(4.34148, -4.32899);
  this.paths = ["m 0 0 c 0.469945 -1.75386 2.2848 -3.24208 3.96376 -4.16771 c 1.23481 -0.68076 2.80602 -1.2613 4.14811 -0.82887 c 0.203607 0.0656 0.51821 0.27138 0.437517 0.46949 c -0.52969 1.30045 -3.48056 0.29599 -4.20791 0.1981"];
};

SvsdNitsu = function() { SvsdChar.call(this, "SvsdNitsu", "につ", "SWR10OR4", "SWR", "OR", "black", false, p(5.2, -4.2)); };
SvsdNitsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["につ"] = SvsdNitsu;

SvsdNitsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-1.34724, 5.94927);
  this.paths = ["m 0 0 c 0.681879 3.25648 -0.956268 5.74553 -2.33613 7.09253 c -0.593374 0.57924 -1.31931 1.16541 -2.14434 1.31393 c -0.2449 0.0441 -0.599545 0.0667 -0.732576 -0.14356 c -0.641248 -1.01368 3.33213 -2.17063 3.86581 -2.31363"];
};


SvsdNutsu = function() { SvsdChar.call(this, "SvsdNutsu", "ぬつ", "SER10OR4", "SER", "OR", "black", false, p(0.0, -2.6)); };
SvsdNutsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぬつ"] = SvsdNutsu;

SvsdNutsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(6.51115, 2.00189);
  this.paths = ["m 0 0 c 3.60267 0 5.75994 1.04161 7.62038 3.0473 c 0.49408 0.53266 1.32155 1.78938 0.65515 2.07878 c -1.09701 0.47641 -1.56192 -2.36864 -1.76438 -3.12419"];
};

SvsdNetsu = function() { SvsdChar.call(this, "SvsdNetsu", "ねつ", "SR10OR4", "SR", "OR", "black", false, p(0.8, -5.0)); };
SvsdNetsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ねつ"] = SvsdNetsu;

SvsdNetsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.54235, 6.60293);
  this.paths = ["m 0 0 c 1.67165 2.08955 1.9819 5.66169 1.20027 8.36952 c -0.19607 0.67925 -0.69859 1.40578 -1.37357 1.61606 c -0.18585 0.058 -0.4728 0.0205 -0.564 -0.15141 c -0.30072 -0.56701 1.13004 -2.19554 2.27965 -3.23124"];
};

SvsdNotsu = function() { SvsdChar.call(this, "SvsdNotsu", "のつ", "ER10OR4", "ER", "OR", "black", false, p(0.0, 0.9)); };
SvsdNotsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["のつ"] = SvsdNotsu;

SvsdNotsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(6.35916, -1.84556);
  this.paths = ["m 0 0 c 1.66634 -0.96205 5.54517 -2.19039 8.37662 -1.81116 c 0.783 0.16244 1.81553 0.61603 1.61617 1.27195 c -0.11433 0.37616 -0.79231 0.17611 -1.17598 0.0903 c -0.91953 -0.20569 -1.65647 -0.79043 -2.45765 -1.39665"];
};



SvsdHatsu = function() { SvsdChar.call(this, "SvsdHatsu", "はつ", "NEL20OL4", "NEL", "OL", "black", false, p(0.0, 4.7)); };
SvsdHatsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["はつ"] = SvsdHatsu;

SvsdHatsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(12.602, -4.59758);
  this.paths = ["m 0 0 c 7.56775 0 11.1557 -3.07845 15.1441 -6.94247 c 0.643086 -0.62303 1.75598 -1.70634 1.19617 -2.40515 c -0.210479 -0.26274 -0.708956 0.0428 -0.980647 0.24156 c -1.42172 1.04027 -1.88679 3.00014 -2.75763 4.50848"];
};

SvsdHitsu = function() { SvsdChar.call(this, "SvsdHitsu", "ひつ", "SWL20OL4", "SWL", "OL", "black", false, p(10.2, -9.0)); };
SvsdHitsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ひつ"] = SvsdHitsu;

SvsdHitsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-9.49783, 12.4427);
  this.paths = ["m 0 0 c -4.58414 4.24962 -11.55 12.3153 -10 17.3205 c 0 0 0.153617 0.62832 0.40621 0.6408 c 0.275154 0.0136 0.430486 -0.387 0.509133 -0.65103 c 0.464859 -1.56058 -0.183801 -4.40878 -0.413171 -4.86752"];
};

SvsdHutsu = function() { SvsdChar.call(this, "SvsdHutsu", "ふつ", "SEL20OL4", "SEL", "OL", "black", false, p(0.0, -5.1)); };
SvsdHutsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ふつ"] = SvsdHutsu;

SvsdHutsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
  this.dp = p(13.9932, 10.1308);
  this.paths = ["m 0 0 c 0.556334 7.36507 11.3581 11.1114 17.3205 10 c 0.47172 -0.0879 1.07532 -0.20233 1.29483 -0.62902 c 0.11297 -0.2196 0.12193 -0.70926 -0.12412 -0.73041 c -0.64549 -0.0555 -3.80957 1.02736 -4.49806 1.49022"];
};

SvsdHetsu = function() { SvsdChar.call(this, "SvsdHetsu", "へつ", "UWL5OL4", "SWL", "OL", "black", false, p(2.8, -2.6)); };
SvsdHetsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["へつ"] = SvsdHetsu;

SvsdHetsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
  this.dp = p(-2.73121, 3.68515);
  this.paths = ["m 0 0 c -1.54618 0.81314 -3.06762 1.9439 -2.80689 3.38677 c 0.19187 1.06179 1.17672 2.04865 2.80717 1.61177 c 0.31542 -0.0845 0.69931 -0.29432 0.52399 -0.44031 c -0.32634 -0.27174 -2.23988 -0.81054 -3.25548 -0.87308"];
};

SvsdHotsu = function() { SvsdChar.call(this, "SvsdHotsu", "ほつ", "EL20OL4", "EL", "OL", "black", false, p(0.0, -1.0)); };
SvsdHotsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ほつ"] = SvsdHotsu;

SvsdHotsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(14.8901, 2.06092);
  this.paths = ["m 0 0 c 4.81103 3.71824 12.928 3.58775 18.3006 0.68931 c 0.48354 -0.26087 1.22622 -1.00778 0.85261 -1.41062 c -0.49153 -0.52998 -1.36948 0.52869 -1.93491 0.979 c -0.75645 0.60244 -1.60851 1.38776 -2.32814 1.80323"];
};

SvsdMatsu = function() { SvsdChar.call(this, "SvsdMatsu", "まつ", "SER20OR4", "SER", "OR", "black", false, p(0.0, 5.0)); };
SvsdMatsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["まつ"] = SvsdMatsu;

SvsdMatsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
  this.dp = p(13.1173, -9.4962);
  this.paths = ["m 0 0 c 4.56521 -6.44915 10.8601 -10 17.3205 -10 c 0.574961 0 0.492127 0.28512 0.450359 0.50737 c -0.05505 0.29292 -0.502791 0.35318 -0.795826 0.40759 c -1.27147 0.23607 -3.03173 0.002 -3.85774 -0.41116"];
};

SvsdMitsu = function() { SvsdChar.call(this, "SvsdMitsu", "みつ", "SWR20OR4", "SWR", "OR", "black", false, p(10.7, -8.6)); };
SvsdMitsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["みつ"] = SvsdMitsu;

SvsdMitsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-5.90863, 14.0679);
  this.paths = ["m 0 0 c 1.63544 5.6446 -4.02649 12.3735 -7.11992 15.3264 c -0.737515 0.70401 -2.68987 2.58213 -3.4816 1.58293 c -0.280344 -0.35381 0.425106 -0.86744 0.827506 -1.07201 c 0.903274 -0.4592 1.73907 -0.86737 3.86538 -1.76944"];
};

SvsdMutsu = function() { SvsdChar.call(this, "SvsdMutsu", "むつ", "SER20OR4", "SER", "OR", "black", false, p(0.0, -5.1)); };
SvsdMutsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["むつ"] = SvsdMutsu;

SvsdMutsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(14.7079, 5.15406);
  this.paths = ["m 0 0 c 4.88252 -0.30682 12.0548 2.06311 15.8587 6.29053 c 0.91799 1.02018 1.89085 3.18185 1.10717 3.96553 c -0.45799 0.45799 -1.97133 -4.03228 -2.25796 -5.102"];
};

SvsdMetsu = function() { SvsdChar.call(this, "SvsdMetsu", "めつ", "UER5OR4", "SER", "OR", "black", false, p(0.2, -2.3)); };
SvsdMetsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["めつ"] = SvsdMetsu;

SvsdMetsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(3.08934, 1.72309);
  this.paths = ["m 0 0 c 2.94918 0 3.82119 1.62727 2.53956 3.10928 c -0.65953 0.76264 -2.389 1.8536 -2.70554 1.35262 c -0.26278 -0.41589 2.62743 -2.34569 3.25532 -2.73881"];
};

SvsdMotsu = function() { SvsdChar.call(this, "SvsdMotsu", "もつ", "ER20OR4", "ER", "OR", "black", false, p(0.0, 1.1)); };
SvsdMotsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["もつ"] = SvsdMotsu;

SvsdMotsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
  this.dp = p(14.2332, -2.52103);
  this.paths = ["m 0 0 c 6.04386 -2.22628 12.0611 -3.72744 17.6011 -1.7133 c 0.92157 0.33505 2.62112 1.29385 2.06123 2.09889 c -0.41203 0.59245 -3.57782 -1.6567 -5.42905 -2.90662"];
};

SvsdYatsu = function() { SvsdChar.call(this, "SvsdYatsu", "やつ", "NE20OL4", "NE", "OL", "black", false, p(0.0, 5.4)); };
SvsdYatsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["やつ"] = SvsdYatsu;

SvsdYatsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(13.2372, -7.64248);
  this.paths = ["m 0 0 l 15.8775 -9.1669 c 0 0 1.30462 -0.68562 1.27984 -1.29109 c -0.0059 -0.14499 -0.185598 -0.28339 -0.330705 -0.28309 c -1.58064 0.003 -3.02363 2.11847 -3.58951 3.0986"];
};

SvsdYutsu = function() { SvsdChar.call(this, "SvsdYutsu", "ゆつ", "SE20OL4", "SE", "OL", "black", false, p(0.0, -4.9)); };
SvsdYutsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ゆつ"] = SvsdYutsu;

SvsdYutsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(13.4198, 7.74791);
  this.paths = ["m 0 0 l 16.1554 9.32735 c 0 0 1.22323 0.68972 1.4848 0.26066 c 0.13634 -0.22365 -0.26174 -0.47412 -0.47533 -0.62575 c -1.07012 -0.75971 -2.93735 -1.21435 -3.74515 -1.21435"];
};

SvsdYotsu = function() { SvsdChar.call(this, "SvsdYotsu", "よつ", "EL20OL4", "EL", "OL", "black", false, p(0.0, 0.4)); };
SvsdYotsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["よつ"] = SvsdYotsu;

SvsdYotsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(15.4081, 0);
  this.paths = ["m 0 0 c 2.64281 0 13.1193 0 17.9678 0 c 0.71952 0 1.98675 0.15058 2.01639 -0.54504 c 0.014 -0.32819 -0.59801 -0.31875 -0.92598 -0.33714 c -1.24979 -0.0701 -2.72008 0.34519 -3.65016 0.88218"];
};

SvsdRatsu = function() { SvsdChar.call(this, "SvsdRatsu", "らつ", "NER5OR4", "NER", "OR", "black", false, p(0.0, 1.3)); };
SvsdRatsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["らつ"] = SvsdRatsu;

SvsdRatsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.5851, -1.76928);
  this.paths = ["m 0 0 c 0.513252 -0.90109 1.79971 -2.53552 3.96161 -2.51854 c 0.377434 -0.008 0.554628 0.20694 0.533948 0.43573 c -0.03616 0.40001 -0.659862 0.51008 -1.055 0.58207 c -0.614812 0.11202 -1.47777 -0.0505 -1.85547 -0.26854"];
};

SvsdRitsu = function() { SvsdChar.call(this, "SvsdRitsu", "りつ", "SWR5OR4", "SWR", "OR", "black", false, p(2.7, -2.1)); };
SvsdRitsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["りつ"] = SvsdRitsu;

SvsdRitsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(0.331788, 1.89725);
  this.paths = ["m 0 0 c 1.15136 1.67415 -0.169548 3.31663 -2.06838 4.15665 c -0.140949 0.0624 -0.386058 0.16229 -0.523866 0.0536 c -0.124886 -0.0985 -0.131432 -0.32928 -0.06326 -0.47301 c 0.501195 -1.05666 2.37271 -1.65789 2.98729 -1.83999"];
};

SvsdRutsu = function() { SvsdChar.call(this, "SvsdRutsu", "るつ", "SER5OR4", "SER", "OR", "black", false, p(0.0, -1.4)); };
SvsdRutsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["るつ"] = SvsdRutsu;

SvsdRutsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.28119, 0.25799);
  this.paths = ["m 0 0 c 1.35132 0.0709 4.07474 0.17402 4.32854 1.94414 c 0.0243 0.16952 0.14461 0.62662 -0.0752 0.74455 c -0.15597 0.0837 -0.3374 -0.13007 -0.46969 -0.24766 c -0.66025 -0.58686 -1.50246 -2.18304 -1.50246 -2.18304"];
};

SvsdRetsu = function() { SvsdChar.call(this, "SvsdRetsu", "れつ", "SR5OR4", "SR", "OR", "black", false, p(0.3, -2.4)); };
SvsdRetsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["れつ"] = SvsdRetsu;

SvsdRetsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(0.79734, 2.38926);
  this.paths = ["m 0 0 c 1.01264 1.83714 1.04211 3.39163 0.29607 4.59062 c -0.17797 0.28602 -0.36885 0.35728 -0.54144 0.25673 c -0.16726 -0.0974 -0.0856 -0.39051 -0.0423 -0.5792 c 0.16161 -0.70494 0.5966 -1.39048 1.08501 -1.87889"];
};

SvsdRotsu = function() { SvsdChar.call(this, "SvsdRotsu", "ろつ", "ER5OR4", "ER", "OR", "black", false, p(0.0, 0.2)); };
SvsdRotsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ろつ"] = SvsdRotsu;

SvsdRotsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(1.81903, -0.64604);
  this.paths = ["m 0 0 c 1.57424 -0.74463 3.2677 -1.13444 4.61923 -0.28187 c 0.27712 0.15999 0.38361 0.35148 0.29156 0.53131 c -0.12455 0.24335 -0.54342 0.13985 -0.81394 0.10043 c -0.82001 -0.11949 -1.78543 -0.71163 -2.27782 -0.99591"];
};

SvsdWatsu = function() { SvsdChar.call(this, "SvsdWatsu", "わつ", "UNL5OL4", "SEL", "OL", "black", false, p(0.0, -1.3)); };
SvsdWatsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["わつ"] = SvsdWatsu;

SvsdWatsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(2.95593, 2.39463);
  this.paths = ["m 0 0 c 0.0193 1.23 0.514414 2.9679 1.6525 2.879 c 1.1009 -0.086 1.99765 -0.95863 2.63032 -1.81585 c 0.292705 -0.39659 0.877446 -1.17553 0.444122 -1.41046 c -0.427049 -0.23152 -0.731225 0.78795 -0.925996 1.1253 c -0.327678 0.56755 -0.529934 1.07091 -0.845018 1.61664"];
};

SvsdEnd = function() { SvsdChar.call(this, "SvsdEnd", "おわり", "SW8XSE5PCR10", "-", "-", "black", false, p(8.7, -4.2)); };
SvsdEnd.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["〆"] = SvsdEnd;

SvsdEnd.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
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

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(-6.26474, 10.5994);
  this.paths = ["m 0 0 l -4.75585 6.98818", "m -4.36761 2.32939 l 3.78526 2.91174", "m -5.7443 8.64502 c -4.21534 -0.65575 -3.08971 -4.74181 -1.9049 -6.76151 c 1.97567 -3.36783 8.79985 -5.64943 11.3914 -2.72889 c 1.85191 2.08702 -1.04732 5.76824 -2.90456 7.85052 c -1.76614 1.98014 -4.91891 4.09225 -7.10236 3.59425"];
};

SvsdGyo = function() { SvsdChar.call(this, "SvsdGyo", "ぎょ", "HEL10", "HEL", "EL", "black", false, p(0.8, -1.2)); };
SvsdGyo.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["ぎょ"] = SvsdGyo;
SvsdGyo.prototype.setPaths = SvsdKyo.prototype.setPaths;
SvsdGyo.prototype.setPathsExtra = function() { this.pathsExtra = ["m 3.29445 1.882 l 1.06066 1.06066"]; };

SvsdGen = function() { SvsdChar.call(this, "SvsdGen", "げん", "SL10CL1", "SL", "CL", "black", false, p(1.5, -4.9)); };
SvsdGen.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["げん"] = SvsdGen;
SvsdGen.prototype.setPaths = SvsdKen.prototype.setPaths;
SvsdGen.prototype.setPathsExtra = function() { this.pathsExtra = ["m -2.09972 4.40898 l 1.14907 0.96418"]; };

SvsdLtsu = function() { SvsdChar.call(this, "SvsdLtsu", "っ", "P/X", "P/X", "P/X", "black"); };
SvsdLtsu.prototype = Object.create(SvsdChar.prototype);
SvsdChar.dict["っ"] = SvsdLtsu;

SvsdLtsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  switch (model_ + "_" + _head) {
  }

  //switch (model_) {}

  switch (tail_ + "_" + _name) {
  }

  switch (tail_ + "_" + _model) {
  }

  switch (tail_ + "_" + _head) {
    case "NEL_E":
      this.dp = p(-2, 1);
      return;

    case "EL_SWL":
      this.dp = p(-1, -0.5);
      return;
  }

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
  
  this.dp = p(0, 0);
};

