WasedaChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
WasedaChar.prototype = Object.create(Char.prototype);
WasedaChar.dict = {};
Char.catalog["waseda"] = WasedaChar.dict;

WasedaA = function() { WasedaChar.call(this, "WasedaA", "あ", "EL4", "EL", "EL", "black", false, p(0.0, -0.2)); };
WasedaA.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["あ"] = WasedaA;

WasedaA.prototype.setPaths = function() {
  switch (this.getNextHeadModel()) {
    case "XNE":
    case "ER4":
      this.dp = p(4, 0);
      this.paths = ["m 0,0 c 1.04821,0.5574 2.97476,0.5919 4,0"];
      return;

    case "ER8":
      this.dp = p(4, 0);
      this.paths = ["m 0,0 c 1.0298,0.5475 2.9223,0.4575 4,0"];
      return;

    case "ER16":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.02161 0.5432 2.89547 0.3589 4 0"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
    case "NEL":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.4551 0.7737 4.4424 1.65126 4 0"];
      return;

    case "WL":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.0195 0.5421 2.8872 0.3191 4 0"];
      return;

    case "SW":
    case "SEL":
    case "SWL":
      this.dp = p(4, 0);
      this.paths = ["m 0,0 c 1.04821,0.5574 2.97476,0.5919 4,0"];
      return;
  }

  this.dp = p(4, 0);
  this.paths = ["m 0 0c 1.45511 0.773700000000002 3.78509 1.2188 4 0"];
};

WasedaI = function() { WasedaChar.call(this, "WasedaI", "い", "ER4", "ER", "ER4", "black", false, p(0.0, 0.4)); };
WasedaI.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["い"] = WasedaI;

WasedaI.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaAi":
    case "WasedaWai":
      this.dp = p(4.41794, -0.108354);
      this.paths = ["m 0 0 c 1.57891 -0.9116 3.00275 -0.925413 4.41794 -0.108354"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "SCR_SW":
      this.dp.set(4, 1.55675);
      this.paths = ["m 0 0 c 1.57891 -0.9116 4.85258 -0.785709 4 1.55675"];
      return;
  }

  //switch (tail_) {}

  switch (_name) { }

  switch (_headModel) {
    case "SWR4":
      this.dp.set(4, 0);
      this.paths = ["m 0 0 c 1.57891 -0.9116 3.36913 -1.17464 4 0"];
      return;

    case "EL4":
      this.dp = p(4, 0);
      this.paths = ["m 0,0 c 1.0252,-0.5919 2.9518,-0.5573 4,0"];
      return;

    case "EL16":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.57891 -0.9116 3.10827 -0.205825 4 0"];
      return;

    case "EL8":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.00556 -0.5805 2.88958 -0.3608 4 0"];
      return;
  }

  switch (_head) {
    case "E":
    case "NEL":
    case "SER":
    case "SR":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.41 -0.8141 4.60079 -1.88614 4 0"];
      return;

    case "SE":
      this.dp.set(4, 0);
      this.paths = ["m 0 0 c 1.57891 -0.9116 4.70024 -2.61331 4 0"];
      return;

    case "SW":
      this.dp = p(4, 0);
      this.paths = ["m 0 0 c 1.57891 -0.9116 4.71182 -1.95571 4 0"];
      return;

  }

  this.dp = p(4, 0);
  this.paths = ["m 0,0 c 1.57891,-0.9116 4.00001,-1.2364 4,0"];
};

WasedaKa = function() { WasedaChar.call(this, "WasedaKa", "か", "E8", "E", "E", "black", false, p(0, 0)); };
WasedaKa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["か"] = WasedaKa;

WasedaKa.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "E": 
    case "SER":
      this.dp = p(7.59761, 0.282788);
      this.paths = ["m 0 0 h 8.00001 l -0.4024 0.282788"];
      break;

    default:
      this.dp = p(8, 0);
      this.paths = ["m 0 0 l 8 0"];
      break;
  }
};

WasedaGa = function() { WasedaChar.call(this, "WasedaGa", "が", "E8", "E", "E", "black", false, p(0, 0)); };
WasedaGa.prototype = Object.create(WasedaKa.prototype);
WasedaChar.dict["が"] = WasedaGa;
WasedaGa.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 4.5,1v0.1"];
};

WasedaKaa = function() { WasedaChar.call(this, "WasedaKaa", "かあ", "E8", "E", "E", "black"); };
WasedaKaa.prototype = Object.create(WasedaKa.prototype);
WasedaChar.dict["かあ"] = WasedaKaa;
WasedaChar.dict["かー"] = WasedaKaa;
WasedaKaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 4.2192449,1.555608 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};


WasedaNa = function() { WasedaChar.call(this, "WasedaNa", "な", "EL8", "EL", "EL", "black"); };
WasedaNa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["な"] = WasedaNa;

WasedaNa.prototype.setPaths = function() {
  switch (this.getNextHeadModel()) {
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
    case "SW":
      this.dp.set(8, 0);
      this.paths = ["m 0 0 c 2.04073 0.6631 7.08295 1.58837 8 0"];
      return;

    case "SWL":
      this.dp = p(8, 0);
      this.paths = ["m 0 0 c 2.04073 0.6631 7.07342 1.60488 8 0"];
      return;

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


WasedaTa = function() { WasedaChar.call(this, "WasedaTa", "た", "SW8", "SW", "SW", "black", false, p(2.9, -3.3)); };
WasedaTa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["た"] = WasedaTa;
WasedaTa.prototype.getFilteredPrevTailType = function() {
  var tail = this.getPrevTailType();
  if (this.getPrevModel() == "ER16SWR4") {
    return tail;
  }
  return tail.replace(/^(?:SWR|SW|SR|S|SER|SWRCR|SCR|SWCR|TAHENKI|SERCR4|SERCR)$/, "R");
};
WasedaTa.prototype.reverse = function() {
  this.model = "NE8";
  this.headType = "NE";
  this.tailType = "NE";
};
WasedaTa.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getFilteredPrevTailType();
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

  switch (model_) {
    case "SER4CR1":
      this.dp = p(6.63226, -4.4736);
      this.paths = ["m 0 0l 6.63226 -4.4736"];
      this.reverse();
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "R":
      this.dp = p(6.63226, -4.4736);
      this.paths = ["m 0 0l 6.63226 -4.4736"];
      this.reverse();
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "SW":
      this.dp.set(-2.34472, 7.17216);
      this.paths = ["m 0 0 l -2.73616 7.5176 l 0.39144 -0.345442"];
      return;
  }

  this.dp = p(-2.73616, 7.5176);
  this.paths = ["m 0 0l -2.73616 7.5176"];
};

WasedaTa.prototype.toReverse = function() {
  return /^(SWR|SW|SR|S|SER|SWRCR|SCR|SWCR|TAHENKI)$/.test(this.getPrevTailType());
};

WasedaTaa = function() { WasedaChar.call(this, "WasedaTa", "たあ", "SW8", "SW", "SW", "black", false, p(2.9, -3.3)); };
WasedaTaa.prototype = Object.create(WasedaTa.prototype);
WasedaChar.dict["たあ"] = WasedaTaa;
WasedaChar.dict["たー"] = WasedaTaa;
WasedaTaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m -3.194426,1.748868 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};

WasedaSa = function() { WasedaChar.call(this, "WasedaSa", "さ", "NEL8", "NEL", "NEL", "black", false, p(0.0, 2.5)); };
WasedaSa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["さ"] = WasedaSa;
WasedaSa.prototype.getFilteredPrevTailType = function() {
  return this.getPrevTailType().replace(/^(?:ELCL4|NELCL4|ECL4|SERCL4|ECL|NE|NEP|E|SEL4|EP|ECL4P|NECLP|NELCL8|ELONL|NWR|ER_P|HENKI_SA|NERB|NEOWLB|NEF?B)$/, "R");
};
WasedaSa.prototype.reverse = function() {
  this.headType = this.tailType = "SWR";
  this.model = "SWR8";
}
WasedaSa.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getFilteredPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaWa":
      this.dp = p(5.6479, -5.0854);
      this.paths = ["m 0 0 c 2.01675 0 5.6479 -2.7837 5.6479 -5.0854"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "R_NE":
      this.dp = p(-3.55714, 7.06752);
      this.paths = ["m 0 0 c 0 3.2179 -3.11162 6.76701 -3.55714 7.06752"];
      this.reverse();
      return;

    case "R_NEL":
      this.dp = p(-2.80001, 6.5818);
      this.paths = ["m 0 0c 0 2.5891 -0.601299999999999 5.3124 -2.80001 6.5818"];
      this.reverse();
      return;

    case "R_ER":
      this.dp = p(-3.8, 6.5818);
      this.paths = ["m 0 0 c 0 3.2179 -3.08981 6.39196 -3.8 6.5818"];
      this.reverse();
      return;

    case "ER_NER":
      this.dp = p(-1.99739, 7.3214);
      this.paths = ["m 0 0 c 1.30093 2.25326 -1.32898 6.16367 -1.99739 7.3214"];
      this.reverse();
      return;
  }

  switch (tail_) {
    case "R":
      this.dp = p(-3.8, 6.5818);
      this.paths = ["m 0 0 c 0 3.2179 -1.8796 6.5818 -3.8 6.5818"];
      this.reverse();
      return;

    case "ER":
      this.dp = p(-3.8, 6.5818);
      this.paths = ["m 0 0 c 1.30093 2.25326 -1.8796 6.5818 -3.8 6.5818"];
      this.reverse();
      return;

    case "NER":
      this.dp = p(-3.8, 6.5818);
      this.paths = ["m 0 0 c 1.99117 1.99117 -1.8796 6.5818 -3.8 6.5818"];
      this.reverse();
      return;
  }

  //switch (_name) {}

  switch (_model) {
    case "SW4":
    case "UWL4":
      this.dp = p(5.6479, -5.0854);
      this.paths = ["m 0 0 c 2.0164 -1.1641 4.50785 -3.11078 5.6479 -5.0854"];
      return;
  }

  switch (_headModel) {
    case "SW16":
      this.dp = p(5.6479, -5.0854);
      this.paths = ["m 0 0 c 2.01641 -1.1642 4.55008 -2.87823 5.6479 -5.0854"];
      return;
  }

  switch (_head) {
    case "SWL":
      this.dp = p(5.6479, -5.0854);
      this.paths = ["m 0 0 c 2.01641 -1.1642 4.50842 -3.11176 5.6479 -5.0854"];
      return;

    case "SL":
      this.dp = p(5.6479, -5.0854);
      this.paths = ["m 0 0 c 1.28214 -0.740262 3.83739 -1.94951 5.6479 -5.0854"];
      return;

    case "NE":
    case "E":
    case "ER":
    case "NEL":
      this.dp = p(5.6479, -5.0854);
      this.paths = ["m 0 0 c 1.8711 -1.0803 6.6855 -3.2882 5.6479 -5.0854"];
      return;

    case "SW":
      this.dp = p(5.6479, -5.0854);
      this.paths = ["m 0 0 c 2.01641 -1.1642 4.84257 -2.87276 5.6479 -5.0854"];
      return;
  }

  this.dp = p(5.6479, -5.0854);
  this.paths = ["m 0 0c 2.01641 -1.1642 5.6479 -2.7837 5.6479 -5.0854"];
};

WasedaSa.prototype.toReverse = function() {
  return (this.getPrevModel() != "ER4") && /^(ECL|E|ER|NE|NER)$/.test(this.getPrevTailType());
};

WasedaSaa = function() { WasedaChar.call(this, "WasedaSaa", "さあ", "NEL8", "NEL", "NEL", "black", false, p(0.0, 2.5)); };
WasedaSaa.prototype = Object.create(WasedaSa.prototype);
WasedaChar.dict["さあ"] = WasedaSaa;
WasedaChar.dict["さー"] = WasedaSaa;
WasedaSaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 2.401228,-3.927299 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};

WasedaMa = function() { WasedaChar.call(this, "WasedaMa", "ま", "ER8", "ER", "ER", "black", false, p(0, 0.5)); };
WasedaMa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ま"] = WasedaMa;

WasedaMa.prototype.setPaths = function() {
  switch (this.getNextHeadModel()) {
    case "EL4":
      this.dp = p(8, 0);
      this.paths = ["m 0 0 c 1.7244 -0.7319 6.3524 -0.876 8 0"];
      return;

    case "EL8":
      this.dp = p(8, 0);
      this.paths = ["m 0 0 c 3.04662 -1.29321 5.3976 -0.845528 8 0"];
      return;

    case "EL16":
      this.dp = p(8, 0);
      this.paths = ["m 0 0 c 1.6813 -0.7137 4.98672 -0.773829 8 0"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "SE":
    case "E":
    case "SER":
      this.dp = p(8, 0);
      this.paths = ["m 0 0 c 3.1159 -1.322 9.4622 -2.088 8 0"];
      break;

    case "SWR":
      this.dp = p(8.00001, 0);
      this.paths = ["m 0 0 c 2.52091 -1.07 6.66667 -2.3094 8.00001 0"];
      return;

    case "SW":
      this.dp = p(7.69679, 0.758043);
      this.paths = ["m 0 0 c 2.52091 -1.07 8.24938 -1.30427 7.69679 0.758043"];
      return;

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
      break;

     case "SW":
      this.dp = p(0, 4);
      this.paths = ["m 0 0 c 0.01249 1.35832 -0.369724 3.50766 0 4"];
      break;

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
//    case "SW":
//      this.dp = p(3.4641, 2);
//      this.paths = ["m 0 0 l 3.4641 2"];
//      return;

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
WasedaChar.dict["を"] = WasedaO;

WasedaO.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    //case "WasedaRi":
    case "WasedaRu":
      this.dp = p(-2.82843, 2.82843);
      this.paths = ["m 0 0 l -2.82843 2.82843"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "_SL":
    case "_SEL":
      this.dp = p(-3.06418, 2.57115);
      this.paths = ["m 0 0 c 0 0 -2.33408 2.37552 -3.06418 2.57115"];
      return;
  }

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "SW":
      this.dp = p(-0.968894, 3.43238);
      this.paths = ["m 0 0 l -1.3681 3.7588 l 0.399206 -0.326424"];
      return;

    case "SEL":
      this.dp = p(-1.84232, 3.60228);
      this.paths = ["m 0 0 c -0.715507 1.96595 -1.08857 3.40031 -1.84232 3.60228"];
      return;
  }

  this.dp = p(-1.3681, 3.7587);
  this.paths = ["m 0 0l -1.3681 3.7587"];
};

WasedaPointAru = function() { 
  WasedaChar.call(this, "WasedaPointAru", "加点ある", "P", "P", "P", "black");
  this.thickness = 0.7;
};
WasedaPointAru.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["あるｐ"] = WasedaPointAru;
WasedaChar.dict["ある"] = WasedaPointAru;

WasedaPointAru.prototype.setPaths = function() {
  if (this.getNextHeadType() !== "") {
    this.paths = [];
  } else {
    this.paths = ["m0,0v0.1"];
  }

  this.pdp = pp(2, -25);

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaNoJoshi":
      this.pdp.set(5.7, 1.2);
      return;

    case "WasedaKotode":
      this.pdp = p(3, 0);
      return;

    case "WasedaSore":
      this.pdp = p(4.7, -1.0);
      return;

    case "WasedaTeJoshi":
      this.pdp = p(3, 0.2);
      return;

    case "WasedaMoJoshi":
      this.pdp = p(3.2, -2.0);
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (tailModel_) {}

  switch (model_) { }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "SERF":
      this.pdp = p(3, -2);
      return;

    case "E":
      this.pdp = p(2, 0);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
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


WasedaKi = function() { WasedaChar.call(this, "WasedaKi", "き", "E8CL1", "E", "ECL", "black"); };
WasedaKi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["き"] = WasedaKi;
WasedaChar.dict["君"] = WasedaKi;

WasedaKi.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_name) {
    case "WasedaWa":
      this.dp = p(6.44856, 0);
      this.paths = ["m 0 0 h 7.5 c 0.58408 0 0.485287 -0.846474 0.186707 -1.02174 c -0.461468 -0.27088 -0.748837 0.26488 -1.23815 1.02174"];
      return;

    case "WasedaSai":
    case "WasedaSei":
     this.dp = p(6.8, 0);
     this.paths = ["m 0 0 h 7.5 c 0.58408 0 0.140431 -0.845 -0.424609 -0.9192 c -0.46945 -0.0617 -1.18963 0.9192 -0.275391 0.9192"];
     return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "SWL4":
    case "SWL8":
      this.dp = p(6.30795, 0);
      this.paths = ["m 0 0 h 7.5 c 0.58408 0 0.934436 -0.734404 0.369395 -0.808604 c -0.46945 -0.0617 -1.14609 0.5688 -1.56145 0.808604"];
      return;

    case "OSEL4":
      this.dp = p(6.8, 0);
      this.paths = ["m 0 0 h 7.5 c 0.58408 0 0.606225 -0.94754 0.041184 -1.02174 c -0.46945 -0.0617 -0.741184 0.28788 -0.741184 1.02174"];
      return;

    case "ER25":
      this.dp = p(7.98285, -0.343164);
      this.paths = ["m 0 0 h 7.5 c 0.58408 0 0.751748 -0.94754 0.186707 -1.02174 c -0.272085 -0.03576 -0.633225 0.157381 -0.721325 0.365435 c -0.151958 0.358855 0.201984 0.78396 1.01746 0.313141"];
      return;

    case "NE25":
      this.dp = p(8.22361, -0.51958);
      this.paths = ["m 0 0 c 2.82603 -0.1481 5.33402 -0.0931 8.00001 0 c 0.36049 0.0126 0.390319 -0.966503 -0.391581 -0.966503 c -0.72857 0 -1.00152 0.776263 -0.4836 0.933208 c 0.237052 0.071834 0.815428 -0.28788 1.09878 -0.486285"];
      return;

    case "EL16":
      this.dp = p(7.81731, -0.133887);
      this.paths = ["m 0 0 c 2.4983 -0.131 5.0044 -0.1745 7.5 0 c 0.2576 0.0135 0.4426 -0.2257 0.495 -0.495 c 0.241 -1.1339 -1.6417 -0.7453 -1.0399 -0.0769 c 0.229 0.2456 0.515808 0.358058 0.86221 0.438013"];
      return;

    case "EL8":
      this.dp = p(7.84507, -0.165008);
      this.paths = ["m 0 0 c 2.4983 -0.131 5.0044 -0.1745 7.5 0 c 0.2576 0.0135 0.4426 -0.2257 0.495 -0.495 c 0.241 -1.1339 -1.6417 -0.7453 -1.0399 -0.0769 c 0.229 0.2456 0.50176 0.280748 0.889974 0.406892"];
      return;

    case "ER4":
      this.dp = p(7.93837, -0.567344);
      this.paths = ["m 0 0 h 7.5 c 0.58408 0 0.131582 -1.45449 -0.60489 -1.19026 c -0.482752 0.1732 -0.646954 0.767602 -0.468136 1.00292 c 0.216324 0.284677 1.03113 -0.10272 1.5114 -0.380008"];
      return;

    case "EL4":
      this.dp = p(7.80371, -0.120257);
      this.paths = ["m 0 0 c 2.4983 -0.131 5.0044 -0.1745 7.5 0 c 0.2576 0.0135 0.4426 -0.2257 0.495 -0.495 c 0.241 -1.1339 -1.61747 -0.850302 -1.01567 -0.181903 c 0.229 0.2456 0.503333 0.385944 0.824375 0.556646"];
      return;

    case "ER8":
      this.dp = p(8.2482, -0.363);
      this.paths = ["m 0 0 c 2.6674 0 5.3362 -0.1396 8.0002 0 c 0.446 0.0078 0.461 -1.1763 -0.476 -1.1763 c -0.403 0 -0.702 0.3953 -0.552 0.7017 c 0.206 0.4228 0.788 0.3391 1.276 0.1116"];
      return;

    case "ER16":
      this.dp = p(8.27177, -0.49129);
      this.paths = ["m 0 0 c 2.667 0 5.336 -0.139 8 0 c 0.446 0.008 0.461 -1.176 -0.475 -1.176 c -0.404 0 -0.68217 0.41373 -0.55762 0.67871 c 0.18496 0.3935 0.81739 0.16354 1.30439 0.006"];
      return;

    case "SER4":
    case "SER8":
      this.dp = p(7.5, -0);
      this.paths = ["m 0 0 h 7.5 c 0.574732 0 0.471236 -0.830049 0.037754 -1.08032 c -0.377426 -0.217907 -1.27396 -0.166828 -1.27396 0.29401 c 0 0.342023 0.584811 0.330195 1.2362 0.78631"];
      return;

    case "SER16":
      this.dp = p(7.77932, -0.09569);
      this.paths = ["m 0 0 c 2.49828 -0.131 5.00439 -0.175 7.50001 0 c 0.25741 0.013 0.499389 -0.2617 0.49497 -0.495 c -0.00558 -0.29484 -0.355773 -0.56817 -0.648782 -0.60144 c -0.250878 -0.0285 -0.657048 0.1248 -0.656819 0.37729 c 0.000379 0.41855 0.77458 0.44146 1.08994 0.62346"];
      return;

    case "SWR4":
    case "SWR8":
    case "SWR16":
      this.dp = p(6.8, 0);
      this.paths = ["m 0 0 h 7.5 c 0.565401 0 0.28981 -0.594014 0.136334 -0.827777 c -0.14898 -0.226915 -0.572172 -0.360131 -0.789907 -0.198029 c -0.274553 0.204402 -0.046427 0.587999 -0.046427 1.02581"];
      return;
  }

  switch (_head) {
    case "BSW":
      this.dp.set(8.61966, -2.00921);
      this.paths = ["m 0 0 h 7.5 c 0.58408 0 0.751748 -0.94754 0.186707 -1.02174 c -1.09628 -0.082723 -1.23006 1.02174 -0.672262 1.02174 c 0.263372 0 0.663361 -0.142052 0.908372 -0.465688 c 0.284006 -0.375144 0.635933 -1.37617 0.696845 -1.54352"];
      return;

    case "E":
      this.dp = p(8.19346, -0.11825);
      this.paths = ["m 0 0 c 2.82603 -0.1481 5.33402 -0.0931 8.00001 0 c 0.36049 0.0126 0.390319 -0.966503 -0.391581 -0.966503 c -0.72857 0 -0.962131 0.922981 -0.598449 0.869403 c 0.305588 0.002287 0.850517 -0.03855 1.18348 -0.02115"];
      return;

    case "SW":
      this.dp = p(6.8, -0);
      this.paths = ["m 0 0 h 7.5 c 0.53582 0 0.666746 -0.743176 0.454977 -1.07903 c -0.231582 -0.367271 -0.672243 -0.247284 -0.799584 0.102585 c -0.118437 0.325406 -0.218884 0.613096 -0.355393 0.976442"];
      return;

    case "SEL":
      this.dp.set(6.88606, -0.03859);
      this.paths = ["m 0 0 c 2.4983 -0.1309 5.0044 -0.1745 7.5 0 c 0.2567 0.0135 0.4381 -0.2273 0.495 -0.4949 c 0.1591 -0.689 -0.527907 -0.597722 -0.683626 -0.40496 c -0.190581 0.235917 -0.352178 0.50629 -0.425318 0.86127"];
      return;

    case "S":
      this.dp = p(6.8, 0);
      this.paths = ["m 0 0 h 7.5 c 0.407467 0 0.283251 -0.447164 0.192383 -0.656213 c -0.110495 -0.254199 -0.497258 -0.501418 -0.743035 -0.373278 c -0.307475 0.160307 -0.149348 0.545765 -0.149348 1.02949"];
      return;

    case "SE":
      this.dp = p(6.8, 0);
      this.paths = ["m 0 0 h 7.5 c 0.600392 0 0.223735 -0.627554 0.032189 -0.825307 c -0.255097 -0.263362 -0.901921 -0.300777 -1.09993 0.007812 c -0.161365 0.251481 0.03599 0.485749 0.36774 0.817495"];
      return;
  }

  this.dp = p(6.8, 0);
  this.paths = ["m 0 0 h 7.5 c 0.58408 0 0.751748 -0.94754 0.186707 -1.02174 c -0.46945 -0.0617 -0.6985 0.652087 -0.886707 1.02174"];
};

WasedaWa = function() { WasedaChar.call(this, "WasedaWa", "わ", "UWL4", "WL", "EL", "black", false, p(1.8, -1.7)); };
WasedaWa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["わ"] = WasedaWa;

WasedaWa.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaSe":
    case "WasedaShi":
      this.dp = p(1.94979, 3.08632);
      this.paths = ["m 0 0 c -0.14818 0.553004 -0.471906 1.5424 -0.271026 2.29209 c 0.247939 0.925324 1.17937 1.27989 2.22081 0.794222"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  switch (model_ + "_" + _headModel) {
    case "NE16_SER16":
      this.dp = p(0.541292, 4.7571);
      this.paths = ["m 0 0 c -0.745013 0.745013 -1.39125 2.16286 -1.39125 2.84135 c 0 0.9992 1.00286 1.40042 1.93254 1.91575"];
      return;

      return;

    case "NEL8_NEL8":
    case "NEL16_NEL8":
    case "E8CL4_NEL8":
      this.dp = p(1.55449, 3.58905);
      this.paths = ["m 0 0 c -0.5364 0.75686 -1.31763 1.85918 -0.837674 2.65251 c 0.419282 0.693045 1.22862 0.936541 2.39216 0.936541"];
      return;
  }

  switch (model_ + "_" + _head) {
    case "EL8CL1_EL":
      this.dp = p(1.69545, 2.69701);
      this.paths = ["m 0 0 c -0.69084 0.90515 -1.28108 2.22721 -0.596457 2.96901 c 0.521773 0.565352 1.44117 0.578741 2.29191 -0.272004"];
      return;

    case "SEL4CL1_E":
    case "SEL4CL1_NEL":
    case "EL8CL1_E":
    case "EL8CL1_NEL":
      this.dp = p(1.33575, 3.43358);
      this.paths = ["m 0 0 c -0.634071 0.83077 -1.18484 1.69014 -0.927046 2.44396 c 0.294368 0.86077 1.26079 0.989621 2.2628 0.989621"];
      return;

    case "SEL4CL1_EL":
      this.dp = p(1.29644, 2.80849);
      this.paths = ["m 0 0 c -0.634071 0.83077 -1.18484 1.69014 -0.927046 2.44396 c 0.294368 0.86077 1.43348 1.15453 2.22348 0.364529"];
      return;

    case "NEL8_E":
      this.dp = p(1.55449, 3.33758);
      this.paths = ["m 0 0 c -0.5364 0.75686 -1.31763 1.85918 -0.837674 2.65251 c 0.419282 0.693045 1.35069 0.685067 2.39216 0.685067"];
      return;
  }

  switch (model_) {
    case "SEL4CL1":
    case "EL8CL1":
      this.dp = p(1.33575, 3.241);
      this.paths = ["m 0 0 c -0.634071 0.83077 -1.18484 1.69014 -0.927046 2.44396 c 0.294368 0.86077 1.38284 1.25889 2.2628 0.79704"];
      return;

    case "NEL8":
    case "NEL16":
    case "E8CL1":
    case "E8CL4":
    case "E16CL1":
      this.dp = p(1.55449, 3.07978);
      this.paths = ["m 0 0 c -0.5364 0.75686 -1.31763 1.85918 -0.837674 2.65251 c 0.419282 0.693045 1.35116 0.91327 2.39216 0.42727"];
      return;

    case "NEL16CL8":
      this.dp = p(1.93729, 3.58864);
      this.paths = ["m 0 0 c -0.22488 0.89047 -0.393661 1.48868 -0.306835 2.49414 c 0.083344 0.965136 1.20263 1.5802 2.24412 1.0945"];
      return;

  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "SLONEL_BE":
      this.dp.set(1.13138, 3.68794);
      this.paths = ["m 0 0 c -0.82696 0.771522 -1.08983 1.40058 -1.08983 2.1091 c 0 0.999293 1.01348 1.57884 2.22121 1.57884"];
      return;
  }

  switch (tail_) {
    case "NE":
      this.dp = p(0.385501, 3.40691);
      this.paths = ["m 0 0 c -0.829292 0.602516 -1.85862 1.79935 -1.85862 2.47784 c 0 0.9992 1.20263 1.41477 2.24412 0.929072"];
      return;
  }

  //switch (_name) {}

  switch (_headModel) {
    case "NEL16":
      this.dp = p(0.4109, 3.203);
      this.paths = ["m 0 0 c -0.9755 0.375 -2.15574 1.72647 -1.97805 2.64047 c 0.1735 0.893 1.0456 1.33239 2.38895 0.56253"];
      return;

    case "SER16":
      this.dp = p(0.290882, 3.68363);
      this.paths = ["m 0 0 c -0.975201 0.2797 -1.83318 1.0997 -1.83318 2.1089 c 0 0.9992 1.07608 0.99382 2.12406 1.57473"];
      return;

    case "NEL8":
      this.dp = p(0.4109, 3.203);
      this.paths = ["m 0 0 c -0.9756 0.375 -2.0108 1.195 -1.8331 2.109 c 0.1735 0.893 1.2531 1.094 2.244 1.094"];
      return;

    case "SER4":
    case "SER8":
      this.dp = p(0.476898, 4.18281);
      this.paths = ["m 0 0 c -0.975201 0.2797 -1.83318 1.0997 -1.83318 2.1089 c 0 0.9992 1.649 1.61101 2.31008 2.07391"];
      return;
  }

  switch (_head) {
    case "SE":
      this.dp = p(0.780574, 2.53134);
      this.paths = ["m 0 0 c -0.975201 0.2797 -1.83318 1.0997 -1.83318 2.1089 c 0 0.9992 1.56372 1.47247 2.61375 0.422439"];
      return;

    case "E":
      this.dp = p(0.411, 3.2032);
      this.paths = ["m 0 0 c -0.9753 0.3745 -2.0295 1.2338 -1.8517 2.1481 c 0.1736 0.8931 1.2689 1.0551 2.2627 1.0551"];
      return;

    case "EL":
      this.dp = p(0.96477, 2.28926);
      this.paths = ["m 0 0 c -0.975 0.3745 -1.833 1.0997 -1.833 2.1089 c 0 1.7052 2.34522 1.5649 2.79777 0.180359"];
      return;
  }

  this.dp = p(0.410938, 3.2034);
  this.paths = ["m 0 0 c -0.975201 0.2797 -1.83318 1.0997 -1.83318 2.1089 c 0 0.9992 1.20263 1.5802 2.24412 1.0945"];
};

WasedaKu = function() { WasedaChar.call(this, "WasedaKu", "く", "E8CL4", "E", "ECL4", "black", false, p(0.0, 0.9), 8); };
WasedaKu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["く"] = WasedaKu;

WasedaKu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
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

  //switch (tailModel_) {}

  //switch (model_) { }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  switch (_model) {
    case "UER4":
      this.dp = p(4.89534, -0.053282);
      this.paths = ["m 0 0 c 2.132 -0.0745 4.267 -0.074488 6.4 0 c 1.13006 0.039463 0.803833 -1.20243 0.451591 -1.65144 c -0.952532 -1.21422 -4.22873 -1.36782 -4.62815 0.12286 c -0.182998 0.682957 1.6656 1.4753 2.6719 1.4753"];
      return;

    case "SWR4":
    case "SWR4F":
      this.dp = p(3.88904, -0.053282);
      this.paths = ["m 0 0 c 2.132 -0.0745 4.267 -0.074488 6.4 0 c 1.01376 0.035402 0.38803 -1.44555 -0.00786 -1.96908 c -0.544934 -0.720644 -1.89375 -1.30597 -2.60496 -0.748789 c -0.699693 0.548157 -0.154662 1.20979 0.10186 2.66459"];
      return;
  }

  switch (_headModel) {
    case "SEL16":
      this.dp = p(3.88904, -0.053281);
      this.paths = ["m 0 0 c 2.132 -0.0745 4.267 -0.0745 6.4 0 c 1.847 0.0645 1.57245 -2.97824 -0.369508 -3.15733 c -1.05667 -0.097446 -1.68438 0.878422 -2.14145 3.10405"];
      return;

    case "EL8":
      this.dp = p(7.3, -0.0108);
      this.paths = ["m 0 0 c 2.498 -0.131 5.004 -0.1745 7.499 0 c 0.255 0.0133 0.429 -0.2262 0.504 -0.4864 c 0.971 -3.1761 -5.329 -2.3279 -2.573 -0.096 c 0.519 0.4198 1.238 0.3785 1.87 0.5716"];
      return;

    case "EL16":
      this.dp = p(8, 0);
      this.paths = ["m 0 0 c 2.132 0 4.48196 0.007266 6.59119 -0.002903 c 1.8481 -0.00891 1.53778 -1.48537 1.06017 -2.11164 c -0.728014 -0.95461 -3.44133 -0.490191 -3.53154 0.70695 c -0.103389 1.37197 3.27916 1.26887 3.88017 1.40759"];
      return;

    case "ER16":
      this.dp = p(8.71234, -0.77994);
      this.paths = ["m 0 0 c 2.6652 -0.1864 5.3383 -0.2329 7.9999 0 c 1.0614 0.0928 1.1317 -2.241 -1.1419 -2.241 c -1.0213 0 -2.10023 0.692562 -1.851 1.4317 c 0.394649 1.17041 2.40504 0.502658 3.70534 0.02936"];
      return;

    case "ER8":
      this.dp.set(8.70691, -0.921319);
      this.paths = ["m 0 0 c 2.6653 -0.1864 5.3383 -0.23291 7.9999 0 c 1.0615 0.09289 0.93345 -2.60936 -2.58692 -2.60936 c -1.0213 0 -1.97584 1.04407 -1.82964 1.79647 c 0.2131 1.0964 3.51644 0.54091 5.12358 -0.108422"];
      return;

    case "UWL4":
      this.dp = p(3.23545, -0.0699);
      this.paths = ["m 0 0 c 2.1327 -0.074 4.2691 -0.112 6.4001 0 c 0.8966 0.031 0.5759 -1.4556 0.07654 -1.77228 c -1.03059 -0.65357 -2.71257 1.00977 -3.24119 1.70238"];
      return;

    case "SER4":
      this.dp = p(4.89233, -0.040242);
      this.paths = ["m 0 0 c 2.132 -0.0745 4.267 -0.074488 6.4 0 c 1.03737 0.036226 0.614657 -1.07061 0.315545 -1.47458 c -0.960815 -1.29765 -3.75498 -1.48397 -4.82631 -0.412645 c -0.972264 0.972263 1.87116 1.05398 3.00309 1.84698"];
      return;

    case "SER8":
      this.dp = p(4.875, -0.089);
      this.paths = ["m 0 0 c 2.5 -0.087 5.001 -0.131 7.499 0 c 0.273 0.01 0.797759 -0.154526 0.828679 -0.470693 c 0.099037 -1.0127 -1.42856 -1.68807 -2.31193 -1.99333 c -1.33818 -0.46243 -3.66892 -0.45869 -4.21812 0.49849 c -0.49073 0.85527 2.7376 1.64745 3.07737 1.87653"];
      return;

    case "SER16":
      this.dp = p(6.11041, -0.055634);
      this.paths = ["m 0 0 c 2.5001 -0.0873 5.0016 -0.1309 7.4998 0 c 0.2729 0.0095 0.5036 -0.2074 0.5036 -0.4864 c 0.02659 -1.52295 -1.69646 -2.1773 -3.00769 -2.16166 c -1.62062 0.01933 -3.03258 1.08061 -1.43997 1.6347 c 0.67823 0.235964 1.32988 0.250586 2.55468 0.957725"];
      return;

    case "SW8":
      this.dp = p(4.55466, -0.05328);
      this.paths = ["m 0 0 c 2.132 -0.0745 4.93263 -0.074488 7.06563 0 c 1.01877 0.035577 1.19687 -1.58383 0.566574 -2.57855 c -0.512412 -0.808677 -1.79507 -0.998311 -2.23199 0.202126 c -0.170818 0.469321 -0.515553 1.50943 -0.845547 2.32314"];
      return;

    case "SWR8":
    case "SWR16":
      this.dp = p(3.88903, -0.05328);
      this.paths = ["m 0 0 c 2.132 -0.0745 4.26604 -0.038241 6.4 0 c 0.979302 0.017549 0.939513 -1.58317 0.062936 -2.54276 c -0.639429 -0.699986 -1.91317 -0.945394 -2.62872 -0.53227 c -0.654212 0.377711 0.054816 1.25529 0.054816 3.02175"];
      return;
  }

  switch (_head) {
    case "NE":
     this.dp = p(3.28326, -0.055837);
     this.paths = ["m 0 0 c 2.132 -0.0745 4.267 -0.0745 6.4 0 c 1.847 0.0645 1.25233 -3.1924 0.21129 -2.4637 c -0.684 0.4789 -2.53223 1.73865 -3.32803 2.40786"];
     return;

    case "S":
      this.dp = p(5.0004, -0.0872);
      this.paths = ["m 0 0 c 2.5002 -0.0873 5.0017 -0.1309 7.5001 0 c 0.27 0.0142 0.4901 -0.2163 0.495 -0.4949 c 0.0699 -2.0024 -3.1828 -2.3955 -3.1828 -1.3825 c 0 0.6017 0.1881 1.1885 0.1881 1.7902"];
      return;

    case "SW":
      this.dp = p(4.12954, -0.057898);
      this.paths = ["m 0 0 c 2.132 -0.084324 4.267 -0.08431 6.39999 0 c 1.2393 0 1.483 -2.00641 0.780494 -2.87679 c -0.601818 -0.745626 -1.78593 -0.469771 -2.32654 0.828673 c -0.187325 0.514655 -0.469132 1.28888 -0.724408 1.99022"];
      return;

    case "SE":
      this.dp = p(3.88904, -0.053282);
      this.paths = ["m 0 0 c 2.132 -0.0745 4.267 -0.0745 6.4 0 c 1.69524 0 0.124345 -1.80962 -0.530824 -2.14909 c -1.07287 -0.555891 -2.6267 -0.34981 -3.05013 0.054365 c -0.555749 0.530477 0.198596 1.17006 1.06999 2.04144"];
      return;

    case "E":
      this.dp = p(8, -0);
      this.paths = ["m 0 0 c 2.132 -0.0745 4.9132 -0.074488 7.0462 0 c 1.07007 0.037368 1.10131 -1.13741 0.751189 -1.61804 c -0.643246 -0.883019 -3.0735 -0.67558 -3.25265 0.4021 c -0.152034 0.91456 2.26523 1.21594 3.45526 1.21594"];
      return;

    case "SEL":
      this.dp = p(3.88904, -0.053282);
      this.paths = ["m 0 0 c 2.132 -0.0745 4.267 -0.0745 6.4 0 c 1.847 0.0645 1.27788 -3.23014 -0.664073 -3.40923 c -1.05667 -0.097446 -1.82929 2.2619 -1.84689 3.35595"];
      return;
  }

  this.dp = p(3.88904, -0.053282);
  this.paths = ["m 0 0 c 2.132 -0.0745 4.267 -0.0745 6.4 0 c 1.847 0.0645 1.25233 -3.1924 0.21129 -2.4637 c -0.684 0.4789 -2.13225 1.82002 -2.72225 2.41042"];
};

WasedaKe = function() { WasedaChar.call(this, "WasedaKe", "け", "E16CL1", "E", "ECL", "black", false, p(0.0, 0.5)); };
WasedaKe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["け"] = WasedaKe;

WasedaKe.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "SW":
      this.dp = p(14.3169, -0.044538);
      this.paths = ["m 0 0 c 5.0002 -0.1746 10.0087 -0.349 15 0 c 0.2628 0.0092 0.517963 -0.283848 0.571017 -0.54051 c 0.0544 -0.263157 -0.05102 -0.708348 -0.317762 -0.740893 c -0.513298 -0.06263 -0.822443 0.923965 -0.936343 1.23687"];
      return;

    case "SWR":
      this.dp = p(14.3495, -0.0448);
      this.paths = ["m 0 0 c 4.9965 -0.2618 10.0034 -0.2618 15 0 c 0.2699 0.0142 0.496505 -0.26166 0.495 -0.495 c -0.0023 -0.349813 -0.411668 -0.815058 -0.751594 -0.732445 c -0.403749 0.098124 -0.393862 0.352751 -0.393862 1.18264"];
      return;

    case "SEL":
      this.dp = p(14.2109, -0.039166);
      this.paths = ["m 0 0 c 4.9965 -0.2618 10.0034 -0.2618 15 0 c 0.2699 0.0142 0.490614 -0.216366 0.495 -0.495 c 0.0127 -0.811004 -0.567848 -0.932944 -0.767154 -0.709263 c -0.260754 0.292643 -0.516975 0.605379 -0.516975 1.1651"];
      return;

    case "E":
      this.dp = p(15.4887, 0.021419);
      this.paths = ["m 0 0 c 4.99748 0 10.0024 0 15 0 c 0.2699 0.0142 0.543088 -0.266663 0.495 -0.495 c -0.06578 -0.312346 -0.584509 -0.486739 -0.8927 -0.346515 c -0.375333 0.170772 -0.689204 0.862934 0.886392 0.862934"];
      return;

    case "S":
     this.dp = p(14.4396, -0.02826);
     this.paths = ["m 0 0 c 4.9965 -0.2618 10.0034 -0.2618 15 0 c 0.2699 0.0142 0.4853 -0.2165 0.495 -0.495 c 0 -0.971122 -0.69289 -0.865939 -0.899239 -0.519408 c -0.170277 0.285955 -0.156175 0.576677 -0.156175 0.986148"];
     return;

    default:
      this.dp = p(14.0904, -0.0448);
      this.paths = ["m 0 0 c 4.9965 -0.2618 10.0034 -0.2618 15 0 c 0.2699 0.0142 0.4853 -0.2165 0.495 -0.495 c 0.0127 -0.3655 -0.3393 -0.5802 -0.5561 -0.3983 c -0.307 0.2576 -0.5909 0.5415 -0.8485 0.8485"];
      break;
  }

  switch (this.getNextHeadModel()) {
    case "SWL4":
    case "SWL8":
      this.dp = p(13.5798, -0.067352);
      this.paths = ["m 0 0 c 4.9965 -0.2618 10.0034 -0.2618 15 0 c 0.2699 0.0142 0.4853 -0.2165 0.495 -0.495 c 0 -0.886047 -1.43213 0.180554 -1.91523 0.427648"];
      return;

    case "ER8":
      this.dp = p(15.495, -0.495);
      this.paths = ["m 0 0 c 4.99656 -0.262 10.0034 -0.262 15 0 c 0.2699 0.014 0.561845 -0.22395 0.495 -0.495 c -0.145958 -0.59184 -0.435556 -0.69907 -0.698982 -0.62394 c -0.262078 0.0747 -0.498252 0.33 -0.541307 0.46811 c -0.07713 0.24743 0.246543 0.67314 1.24029 0.15583"];
      break;

    case "ER16":
      this.dp = p(15.9203, -0.708327);
      this.paths = ["m 0 0 c 4.99656 -0.2619 10.0034 -0.2619 15 0 c 0.986194 0.05169 1.25342 -0.957776 0.439318 -1.39679 c -0.599829 -0.323463 -1.3404 0.524022 -1.12758 0.972392 c 0.233471 0.491865 1.07591 -0.110871 1.60852 -0.283931"];
      break;
    case "EL4":
      this.dp = p(15, 0);
      this.paths = ["m 0 0 c 4.9965 -0.2618 10.0034 -0.2618 15 0 c 0.2699 0.0142 0.555225 -0.269561 0.495 -0.495 c -0.125561 -0.470008 -1.17026 -0.803634 -1.40917 -0.379852 c -0.207139 0.367412 0.561684 0.687428 0.914175 0.874852"];
      return;

    case "EL8":
      this.dp = p(15.3539, -0.133);
      this.paths = ["m 0 0 c 4.9963 -0.262 10.0033 -0.262 15 0 c 0.2576 0.014 0.4425 -0.225 0.4949 -0.495 c 0.120228 -1.36625 -2.03115 -1.1534 -1.30929 -0.22083 c 0.208395 0.26923 0.845094 0.47783 1.16829 0.58283"];
      break;

    case "SER8":
      this.dp = p(15, 0);
      this.paths = ["m 0 0 c 5.001 -0.1747 10.009 -0.3491 15 0 c 0.261 0.0091 0.50586 -0.244212 0.512 -0.4775 c 0.007 -0.277346 -0.30542 -0.547201 -0.578 -0.5989 c -0.30817 -0.05845 -0.82295 0.07888 -0.856 0.3908 c -0.0403 0.380858 0.588 0.4524 0.922 0.6856"];
      break;
  }
};

WasedaGu = function() { WasedaChar.call(this, "WasedaGu", "ぐ", "E8CL4", "E", "ECL4", "black", false, p(0.0, 0.9)); };
WasedaGu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぐ"] = WasedaGu;
WasedaGu.prototype.setPaths = WasedaKu.prototype.setPaths;
WasedaGu.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 4.5,1v0.1"];
};

WasedaKo = function() { WasedaChar.call(this, "WasedaKo", "こ", "E16", "E", "E", "black", false, p(0.0, 0.0)); };
WasedaKo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["こ"] = WasedaKo;

WasedaKo.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "E": 
    case "SER":
      this.dp = p(15.5076, 0.2);
      this.paths = ["m 0 0 l 16 0 l -0.4024 0.2"];
      break;

    default:
      this.dp = p(16, 0);
      this.paths = ["m 0 0 l 16 0"];
      break;
  }
};

WasedaNi = function() { WasedaChar.call(this, "WasedaNi", "に", "EL8CL1", "EL", "ELCL", "black", false, p(0.0, -0.1)); };
WasedaNi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["に"] = WasedaNi;

WasedaNi.prototype.setPaths = function() {
  switch (this.getNextName()) {
    case "WasedaHui":
      this.dp = p(7.00934, 0.873001);
      this.paths = ["m 0 0 c 2.189 0.6692 7.97 1.89382 7.97 -0.061581 c 0 -0.851109 -0.504397 -0.651122 -0.719851 -0.277944 c -0.159494 0.276251 -0.240813 0.78066 -0.240813 1.21253"];
      return;
  }

  switch (this.getNextHeadModel()) {
    case "SWL8":
      this.dp.set(6.10085, 1.00852);
      this.paths = ["m 0 0 c 2.189 0.6692 7.97 1.9201 7.97 0 c 0 -1.22306 -1.66942 0.769011 -1.86915 1.00852"];
      return;

    case "OSEL4":
      this.dp = p(7.54888, 0.78447);
      this.paths = ["m 0 0 c 2.2359 0.66896 8.14076 1.91943 8.14076 0 c 0.04476 -0.72566 -1.25322 -0.92654 -1.11872 -0.37202 c 0.05475 0.22571 0.134588 0.47736 0.526836 1.15649"];
      return;

    case "NEL8":
      this.dp = p(7.9375, -2e-06);
      this.paths = ["m 0 0 c 2.198 0.6302 7.9375 1.913 7.9375 0 c 0 -0.4872 -0.249561 -0.723292 -0.559841 -0.747084 c -0.373313 -0.02862 -0.949046 0.441014 -0.802738 0.785652 c 0.177557 0.418246 1.00498 0.159589 1.36258 -0.03857"];
      return;

    case "ER4":
      this.dp = p(7.86178, 0.40521);
      this.paths = ["m 0 0 c 2.189 0.6692 7.97 1.9201 7.97 0 c 0 -0.556572 -0.818181 -0.394055 -1.16516 -0.132416 c -0.225183 0.169801 -0.391466 0.576847 -0.186635 0.787268 c 0.296999 0.305104 0.519605 0.168357 1.24357 -0.249642"];
      return;

    case "ER8":
      this.dp = p(7.684, 0.6098);
      this.paths = ["m 0 0 c 2.189 0.6692 7.97 1.9201 7.97 0 c 0 -0.4888 -0.518801 -0.426783 -0.807466 -0.364501 c -0.32657 0.07046 -0.771036 0.436473 -0.6622 0.752333 c 0.130776 0.379534 0.552592 0.489842 1.18367 0.221968"];
      return;

    case "ER16":
      this.dp = p(7.87948, 0.31394);
      this.paths = ["m 0 0 c 2.192 0.628 7.941 1.913 7.941 0 c 0 -0.39779 -0.25124 -0.45017 -0.46881 -0.45432 c -0.40384 -0.008 -1.05207 0.43459 -0.9017 0.80946 c 0.16253 0.40516 0.77899 0.13085 1.30899 -0.0412"];
      return;

    case "SER8":
      this.dp = p(7.684, 0.6098);
      this.paths = ["m 0 0 c 2.189 0.6692 7.97 1.9201 7.97 0 c 0 -0.4888 -0.29185 -0.797645 -0.644 -0.8549 c -0.266134 -0.04327 -0.642934 0.190004 -0.666307 0.458617 c -0.041488 0.476785 0.640935 0.747493 1.02431 1.00608"];
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


    case "SEL":
      this.dp = p(6.62844, 0.919473);
      this.paths = ["m 0 0 c 2.189 0.6692 7.41104 1.87381 7.97 0 c 0.208342 -0.698423 -0.352937 -0.825991 -0.750642 -0.370316 c -0.317634 0.363934 -0.475665 0.859662 -0.590917 1.28979"];
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

    case "SE3":
    case "SE4":
      this.dp = p(7.65886, 0.602626);
      this.paths = ["m 0 0 c 2.1804 0.6666 7.9404 1.913 7.9404 0 c 0 -0.5019 -0.4925 -0.930837 -0.888932 -0.837865 c -0.229993 0.053938 -0.657821 0.300888 -0.245834 0.664695 c 0.35665 0.314942 0.521167 0.471473 0.853225 0.775796"];
      return;

    case "UWL4":
      this.dp = p(6.6457, 0.97086);
      this.paths = ["m 0 0 c 2.1942 0.588 8.17049 1.9049 8.2352 0 c 0.03699 -1.08907 -1.06087 0.27825 -1.5895 0.97086"];
      break;
  }
};

WasedaNe = function() { WasedaChar.call(this, "WasedaNe", "ね", "EL16CL1", "EL", "ELCL", "black", false, p(0.0, -0.3)); };
WasedaNe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ね"] = WasedaNe;

WasedaNe.prototype.setPaths = function() {
  switch (this.getNextHeadModel()) {
    case "ER4":
      this.dp = p(15.8002, 0.183);
      this.paths = ["m 0 0 c 2.87 0.558 15.821 2.735 15.821 0 c 0 -0.355 -0.457412 -0.40155 -0.7194 -0.351 c -0.420711 0.0812 -1.08607 0.58742 -0.8626 0.953 c 0.281024 0.45973 0.9627 -0.073 1.5612 -0.419"];
      return;

    case "EL4":
      this.dp = p(15.461, 0.723);
      this.paths = ["m 0 0 c 2.881 0.56 15.881 2.746 15.881 0 c 0 -0.211 -0.212122 -0.417 -0.414081 -0.469746 c -0.283073 -0.073931 -0.756648 0.006845 -0.828228 0.290521 c -0.09956 0.394546 0.184511 0.563097 0.822309 0.902225"];
      return;

    case "EL8":
      this.dp = p(15.8362, 0.264963);
      this.paths = ["m 0 0 c 2.881 0.56 15.881 2.746 15.881 0 c 0.03215 -0.753708 -0.757525 -0.989674 -1.12758 -0.638587 c -0.424717 0.424716 0.263158 0.652977 1.0828 0.90355"];
      return;

    case "EL16":
      this.dp = p(15.8362, 0.26496);
      this.paths = ["m 0 0 c 2.881 0.56 15.881 2.746 15.881 0 c 0.03215 -0.753708 -0.757525 -0.989674 -1.12758 -0.638587 c -0.424717 0.424716 0.282279 0.742297 1.0828 0.903547"];
      return;

    case "ER8":
      this.dp = p(15.7465, 0.335628);
      this.paths = ["m 0 0 c 2.8701 0.5579 15.821 2.7354 15.821 0 c 0 -0.3547 -0.283566 -0.505143 -0.522755 -0.492922 c -0.490901 0.02508 -1.2124 0.691469 -0.964185 1.11573 c 0.242622 0.4147 0.80478 -0.0038 1.41248 -0.287184"];
      return;

    case "ER16":
      this.dp = p(15.8002, 0.183);
      this.paths = ["m 0 0 c 2.87009 0.558 15.821 2.736 15.821 0 c 0 -0.355 -0.514445 -0.51219 -0.831831 -0.47592 c -0.362513 0.0414 -0.945034 0.40784 -0.802969 0.74392 c 0.209763 0.49623 1.0014 0.114 1.614 -0.085"];
      return;

    case "SER8":
      this.dp = p(15.4031, 0.72);
      this.paths = ["m 0 0 c 2.8793 0.508 15.8213 2.735 15.8213 0 c 0 -0.256 -0.112213 -0.48394 -0.3117 -0.562 c -0.377896 -0.14788 -1.07741 -0.017 -1.15622 0.3811 c -0.08954 0.45232 0.422772 0.46194 1.04972 0.9009"];
      return; 
  }

  switch (this.getNextHeadType()) {
    case "S":
      this.dp = p(14.9412, 0.957307);
      this.paths = ["m 0 0 c 2.881 0.56 15.881 2.746 15.881 0 c 0 -0.636156 -0.932442 -1.18366 -0.9398 -0.105798 c -0.0028 0.403724 0 0.691352 0 1.0631"];
      return;

    case "E":
      this.dp = p(15.8213, -0);
      this.paths = ["m 0 0 c 2.87017 0.558 15.8213 2.735 15.8213 0 c 0 -0.343 -0.164113 -0.899306 -0.625879 -0.957407 c -0.419685 -0.052805 -1.1805 0.288565 -1.15719 0.704 c 0.02739 0.48828 0.885946 0.227665 1.78307 0.253407"];
      return;

    case "SW":
      this.dp = p(14.6141, 1.062);
      this.paths = ["m 0 0 c 2.8794 0.508 15.8213 2.735 15.8213 0 c 0 -0.703 -0.58365 -0.651132 -0.733281 -0.240039 c -0.151 0.414857 -0.323019 0.887039 -0.473919 1.30204"];
      return;

    case "NER":
      this.dp = p(14.2543, 1.16319);
      this.paths = ["m 0 0 c 2.881 0.56 15.8965 2.74596 15.881 0 c -0.0028 -0.498484 -0.190417 -0.593657 -0.435923 -0.593657 c -0.341418 0 -1.02975 1.15576 -1.19081 1.75685"];
      break;

    default:
      this.dp = p(15.461, 0.723);
      this.paths = ["m 0 0 c 2.881 0.56 15.881 2.746 15.881 0 c 0 -0.211 -0.054 -0.418 -0.182 -0.56 c -0.12 -0.148 -0.291 -0.251 -0.493 -0.251 c -0.764 0 -0.074 0.964 0.255 1.534"];
      break;
  }
};

WasedaNu = function() { WasedaChar.call(this, "WasedaNu", "ぬ", "EL8CL4", "EL", "ELCL4", "black", false, p(0.0, 0.6)); };
WasedaNu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぬ"] = WasedaNu;

WasedaNu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_headModel) {
    case "SER4":
    case "SER8":
      this.dp = p(5.87659, 1.03277);
      this.paths = ["m 0 0 c 2.17652 0.7072 7.9701 1.9199 7.9701 0 c 0 -1.27517 -1.15006 -1.80581 -2.09248 -1.94966 c -0.938167 -0.143201 -2.28894 0.175962 -2.505 0.982286 c -0.231588 0.8643 1.42724 1.32677 2.50397 2.00014"];
      return;

    case "SWR8":
      this.dp = p(3.77542, 0.8628);
      this.paths = ["m 0 0 c 2.17652 0.7072 8.09027 1.91614 7.9701 0 c -0.10209 -1.62789 -3.27209 -2.61596 -4.51653 -1.61254 c -0.647728 0.522277 0.321846 1.58226 0.321846 2.47534"];
      return;
  }

  switch (_head) {
    case "E":
      this.dp = p(7.411, 0.204);
      this.paths = ["m 0 0 c 2.1804 0.6666 7.9407 1.3575 7.9407 -0.5553 c 0 -0.6526 -0.6922 -1.1997 -1.2952 -1.2952 c -0.973 -0.1891 -2.8135 0.2503 -2.7617 1.2402 c 0.0746 1.4221 1.9804 0.8683 3.5272 0.8143"];
      return;

    case "SEL":
      this.dp = p(4.34859, 0.8628);
      this.paths = ["m 0 0 c 2.17652 0.7072 7.47292 1.8555 7.9701 0 c 0.308342 -1.15075 -0.523314 -1.88768 -1.29659 -1.92735 c -1.20902 -0.062018 -2.32492 1.3439 -2.32492 2.79015"];
      return;
  }

  this.dp = p(3.77542, 0.8628);
  this.paths = ["m 0 0 c 2.17652 0.7072 7.9701 1.9199 7.9701 0 c 0 -0.3301 -0.20058 -0.5731 -0.51288 -0.6806 c -0.31037 -0.113 -0.71713 -0.0975 -1.11313 0.0389 c -0.94335 0.3433 -1.7885 0.8728 -2.56867 1.5045"];
};

WasedaShi = function() { WasedaChar.call(this, "WasedaShi", "し", "NEL8CL1", "NEL", "NELCL", "black", false, p(0.0, 2.5)); };
WasedaShi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["し"] = WasedaShi;
WasedaShi.prototype.getFilteredPrevTailType = WasedaSa.prototype.getFilteredPrevTailType;
WasedaShi.prototype.reverse = function() {
  this.headType = "SWR";
  this.tailType = "SWRCR";
  this.model = "SWR8CR1";
}
WasedaShi.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getFilteredPrevTailType();
  const _name = this.getNextName();
  const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaWa":
      this.dp = p(5.542, -4.0329);
      this.paths = ["m 0 0 c 2.329 0 5.822 -2.5835 5.822 -4.885 c 0 -1.0555 -1.255 -0.8817 -0.961 -0.3497 c 0.294 0.5087 0.464 0.8257 0.681 1.2018"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}
  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  switch (tail_ + "_" + _name) {
    case "SEL_WasedaWa":
      this.dp = p(4.31285, -2.04335);
      this.paths = ["m 0 0 c 2.3283 0 5.8218 -2.584 5.8218 -4.8855 c 0 -1.0555 -0.714786 0.398232 -0.832488 0.718004 c -0.182455 0.495695 -0.382129 0.910457 -0.676462 2.12415"];
      return;
  }

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _headModel) {
    case "SEL_ER16":
      this.dp.set(5.62801, -4.93215);
      this.paths = ["m 0 0 c 2.3283 0 5.8218 -3.14865 5.8218 -5.45015 c 0 -1.0555 -1.32778 -0.153254 -1.32115 0.298156 c 0.00562 0.382823 0.265273 0.50002 1.12736 0.219838"];
      return;

    case "SEL_ER8":
      this.dp = p(5.79327, -4.51909);
      this.paths = ["m 0 0 c 2.3283 0 5.8218 -2.58406 5.8218 -4.8856 c 0 -1.05552 -1.0272 -0.488016 -1.18402 0.097234 c -0.102358 0.382007 0.082706 0.724446 1.15548 0.269284"];
      return;

    case "R_SE4":
      this.dp = p(-3.0131, 6.6771);
      this.paths = ["m 0 0 c 0 2.8227 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.254058 -1.49205 0.345193 -0.892801 c 0.218976 0.218974 0.276533 0.314833 0.641707 0.641701"];
      this.reverse();
      return;

    case "R_NE4":
    case "R_NE8":
    case "R_NE16":
      this.dp = p(-1.29737, 4.85515);
      this.paths = ["m 0 0 c 0 2.8227 -2.05011 7.42882 -3.67845 6.99251 c -0.549348 -0.147197 2.0602 -1.92159 2.38108 -2.13736"];
      this.reverse();
      return;

    case "R_ER8":
    case "R_ER16":
      this.dp = p(-1.56599, 5.9615);
      this.paths = ["m 0 0 c 0 2.8227 -0.799428 6.02539 -3.08939 7.41029 c -0.171634 0.103799 -0.547499 0.140882 -0.599413 -0.052863 c -0.175768 -0.655976 1.67953 -1.20777 2.12281 -1.39592"];
      this.reverse();
      return;

    case "R_ER4":
      this.dp = p(-1.50554, 5.47911);
      this.paths = ["m 0 0 c 0 2.8227 -1.57325 6.29275 -2.74333 6.97489 c -0.794709 0.463307 -1.30185 0.189757 -0.879883 -0.163927 c 0.136707 -0.114584 1.65379 -1.06403 2.11767 -1.33185"];
      return;

    case "NER_ER8":
    case "NER_ER16":
      this.dp = p(-1.44101, 5.75259);
      this.paths = ["m 0 0 c 1.57971 1.57986 -0.801617 5.39671 -2.72467 7.00039 c -0.332083 0.27693 -1.12158 0.650436 -1.27372 0.245686 c -0.181872 -0.483836 1.95737 -1.25106 2.55738 -1.49349"];
      this.reverse();
      return;

    case "ER_ER4":
      this.dp = p(-1.33384, 5.83675);
      this.paths = ["m 0 0 c 1.30093 2.25326 -0.799428 6.02539 -3.08939 7.41029 c -0.171634 0.103799 -0.547497 0.140882 -0.599413 -0.052863 c -0.175768 -0.655954 1.85654 -1.31145 2.35496 -1.52068"];
      this.reverse();
      return;

    case "ER_SE25":
      this.dp = p(-2.99564, 6.68933);
      this.paths = ["m 0 0 c 1.30093 2.25326 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.54742 -1.32544 -0.00709 -0.947099 c 0.440906 0.308725 0.594366 0.416179 1.01145 0.708224"];
      this.reverse();
      return;


    case "R_EL8":
      this.dp = p(-3.0131, 6.6771);
      this.paths = ["m 0 0 c 0 2.8227 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.8301 -1.0327 -0.3834 -0.8612 c 0.4733 0.1629 0.9205 0.3907 1.3703 0.6101"];
      this.reverse();
      return;
  }

  switch (this.getFilteredPrevTailType() + "_" + _head) {
    case "ER_NE":
      this.dp = p(-1.01575, 4.94925);
      this.paths = ["m 0 0 c 1.30093 2.25326 -2.05011 7.42882 -3.67845 6.99251 c -0.549348 -0.147197 2.34182 -1.82749 2.6627 -2.04326"];
      this.reverse();
      return;

    case "ER_E":
      this.dp = p(-1.9736, 6.0534);
      this.paths = ["m 0 0 c 1.30093 2.25326 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.913781 -0.874799 -0.435375 -0.874799 c 0.466262 0 1.85605 0 2.46177 0"];
      this.reverse();
      return;

    case "R_SEL":
      this.dp = p(-3.59281, 6.88971);
      this.paths = ["m 0 0 c 0 2.8227 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.132112 -1.33289 0.251288 -1.32456 c 0.47899 0.010411 0.1559 0.866635 0.1559 1.28607"];
      return;

    case "R_S":
      this.dp = p(-3.59281, 6.88971);
      this.paths = ["m 0 0 c 0 2.8227 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.411187 -1.15847 -0.027787 -1.15014 c 0.47899 0.010411 0.434975 0.692213 0.434975 1.11165"];
      return;

    case "NER_SW":
      this.dp = p(-3.7418, 6.90721);
      this.paths = ["m 0 0 c 1.11189 1.112 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.180466 -1.26904 0.236543 -1.23317 c 0.402636 0.034641 0.196616 0.731507 0.021661 1.21218"];
      this.reverse();
      return;

    case "SEL_E":
      this.dp = p(5.59802, -4.81796);
      this.paths = ["m 0 0 c 2.3283 0 5.72379 -3.35499 5.72379 -5.65649 c 0 -1.0555 -1.44882 -0.050717 -1.45066 0.432524 c -0.00183 0.48324 0.650396 0.42195 1.32489 0.406005"];
      return;

    case "SEL_SW":
      this.dp = p(4.4094, -1.86702);
      this.paths = ["m 0 0 c 2.3283 0 5.8218 -1.95426 5.8218 -4.8855 c 0 -1.0555 -0.54513 -0.185427 -0.693725 0.30917 c -0.190747 0.634901 -0.570144 2.30124 -0.718675 2.70931"];
      return;

    case "E_S":
      this.dp = p(-3.38126, 6.83844);
      this.paths = ["m 0 0 c 0 2.8227 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.214213 -1.33318 0.245096 -1.358 c 0.440067 -0.023775 0.37364 0.289242 0.37364 1.26823"];
      this.reverse();
      return;

    case "R_E":
      this.dp = p(-2.12341, 6.03577);
      this.paths = ["m 0 0 c 0 2.8227 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.679453 -0.699205 -0.074878 -0.8612 c 0.436554 -0.116974 1.43026 -0.031233 1.95147 -0.031233"];
      this.reverse();
      return;

    case "ER_NER":
      this.dp = p(0.130294, 3.75322);
      this.paths = ["m 0 0 c 1.30093 2.25326 -0.878848 6.77263 -1.37704 7.01888 c -0.824663 0.407611 -0.289061 -0.727259 -0.0029 -1.13502 c 0.419639 -0.597954 1.00794 -1.41329 1.51024 -2.13064"];
      this.reverse();
      return;

    case "R_SW":
      this.dp = p(-3.56305, 6.88382);
      this.paths = ["m 0 0 c 0 2.8227 -1.5507 6.9282 -4 6.9282 c -0.986698 0 -0.163299 -1.24644 0.460708 -1.11788 c 0.350561 0.072219 0.184204 0.50213 -0.023758 1.0735"];
      this.reverse();
      return;
  }

  switch (this.getFilteredPrevTailType()) {
    case "SEL":
      this.dp = p(5.5418, -4.0334);
      this.paths = ["m 0 0 c 2.3283 0 5.8218 -2.584 5.8218 -4.8855 c 0 -1.0555 -1.2555 -0.8817 -0.9606 -0.3496 c 0.2937 0.5087 0.4635 0.8256 0.6806 1.2017"];
      return;

    case "E":
      this.dp = p(-3.0131, 6.6771);
      this.paths = ["m 0 0 c 0 2.8227 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.8301 -1.0327 -0.3834 -0.8612 c 0.4733 0.1629 0.9205 0.3907 1.3703 0.6101"];
      this.reverse();
      return;

    case "NER":
      this.dp = p(-3.0131, 6.6771);
      this.paths = ["m 0 0 c 1.11189 1.112 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.8301 -1.0327 -0.3834 -0.8612 c 0.4733 0.1629 0.9205 0.3907 1.3703 0.6101"];
      this.reverse();
      return;

    case "ER":
      this.dp = p(-3.0131, 6.6771);
      this.paths = ["m 0 0 c 1.30093 2.25326 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.8301 -1.0327 -0.3834 -0.8612 c 0.4733 0.1629 0.9205 0.3907 1.3703 0.6101"];

      this.reverse();
      return;

    case "R":
      this.dp = p(-3.0131, 6.6771);
      this.paths = ["m 0 0 c 0 2.8227 -1.5507 6.9282 -4 6.9282 c -0.9199 0 -0.8301 -1.0327 -0.3834 -0.8612 c 0.4733 0.1629 0.9205 0.3907 1.3703 0.6101"];
      this.reverse();
      return;
}

  switch (_name) {
    case "WasedaSai":
    case "WasedaSei":
      this.dp = p(5.71425, -4.68285);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -1.43336 -0.552568 -1.41947 -0.00375 c 0.012254 0.484157 0.904868 0.306901 1.39792 0.306901"];
      return;

      this.dp = p(5.65353, -4.39557);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -1.52693 -0.174994 -1.51384 0.342184 c 0.012252 0.484157 0.938514 0.248248 1.43157 0.248248"];
      return;

    case "WasedaWa":
      this.dp = p(4.49679, -2.72925);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -0.657799 0.039061 -0.796229 0.599568 c -0.144419 0.584756 -0.294602 1.10417 -0.442781 1.65718"];
      return;

    case "WasedaAi":
      this.dp = p(5.72797, -5.12467);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -0.448935 -0.205316 -0.686914 -0.483073 -0.679334 c -0.310031 0.00846 -0.535049 0.478739 -0.49705 0.786549 c 0.027336 0.221428 0.262501 0.48478 0.484431 0.461871 c 0.285021 -0.029422 0.36026 -0.357185 0.487857 -0.707759"];
      return;
  }

  switch (_headModel) {
    case "NE4":
      this.dp.set(5.7358, -4.986);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -0.299445 -0.270788 -0.782467 -0.764515 -0.497413 c -0.797323 0.460334 -0.562742 1.42675 0.12707 0.943749 l 0.637446 -0.446336"];
      return;

    case "ER25":
      this.dp.set(5.63619, -4.39209);
      this.paths = ["m 0 0 c 2.048 -1.0891 5.714 -2.6744 5.714 -4.9675 c 0 -1.0513 -1.71352 0.204855 -1.48458 0.774343 c 0.171941 0.427703 0.731581 0.160232 1.40677 -0.198933"];
      return;

    case "NE25":
      this.dp = p(5.69391, -4.56388);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -1.35193 0.271939 -1.18083 0.695492 c 0.146241 0.362006 0.508587 0.168003 1.13894 -0.273374"];
      return;

    case "SE25":
      this.dp = p(5.54091, -4.08037);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -1.74292 -0.178309 -1.08999 0.278874 c 0.391298 0.27399 0.355754 0.255855 0.8951 0.626756"];
      return;

    case "ER4":
      this.dp = p(5.67157, -4.4639);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -1.31627 0.00452 -1.25546 0.444253 c 0.054513 0.39417 0.276192 0.60615 1.19123 0.077846"];
      return;

    case "SWL8":
      this.dp = p(4.20193, -2.53871);
      this.paths = ["m 0 0 c 2.0364 -1.1288 6.61152 -3.46758 5.82606 -4.82805 c -0.188428 -0.326367 -0.568436 0.229001 -0.920036 0.882755 c -0.302308 0.562103 -0.583614 1.19694 -0.704088 1.40659"];
      return;

    case "NEL16":
      this.dp = p(5.62531, -4.36115);
      this.paths = ["m 0 0 c 2.0364 -1.14419 5.7358 -2.72101 5.7358 -5.054 c 0 -1.02193 -1.45307 0.333932 -1.28715 0.81363 c 0.128881 0.372623 0.766584 0.106635 1.17666 -0.12078"];
      return;

    case "SL8":
      this.dp = p(4.49551, -2.86162);
      this.paths = ["m 0 0 c 2.0364 -1.1288 6.15362 -3.58194 5.86957 -4.64202 c -0.332846 -1.2422 -1.20836 1.1898 -1.37406 1.7804"];
      return;

    case "NE8":
     this.dp = p(5.8001, -4.8669);
     this.paths = ["m 0 0 c 2.02885 -1.1246 5.8001 -2.5739 5.8001 -4.8669 c 0 -0.3853 -0.1734 -0.6318 -0.42922 -0.6363 c -0.42275 -0.0148 -1.00026 0.6628 -0.76372 1.0135 c 0.2436 0.3479 0.80621 -0.0962 1.19294 -0.3772"];
     return;

    case "SER4":
    case "SER8":
     this.dp = p(5.59912, -4.22639);
     this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -0.775621 -0.994327 -0.422534 -1.13415 -0.070506 c -0.159678 0.402018 0.675049 0.604235 0.99747 0.830115"];
     return;

    case "ER8":
      this.dp = p(5.65226, -4.45345);
      this.paths = ["m 0 0 c 2.0483 -1.089 5.7144 -2.675 5.7144 -4.968 c 0 -1.051 -1.85423 0.39838 -1.48776 0.84133 c 0.270309 0.32672 0.946121 -0.13381 1.42562 -0.32678"];
      return;

    case "ER16":
      this.dp = p(5.521, -4.0181);
      this.paths = ["m 0 0 c 2.048 -1.0891 5.714 -2.6744 5.714 -4.9675 c 0 -1.0513 -1.76858 0.481566 -1.48458 1.01677 c 0.217 0.4067 0.60465 0.182666 1.29158 -0.06737"];
      return;

    case "EL4":
      this.dp = p(5.64632, -4.43216);
      this.paths = ["m 0 0 c 2.0287 -1.125 5.714 -2.674 5.714 -4.967 c 0 -0.783 -0.954712 -0.87673 -1.19163 -0.51468 c -0.280674 0.42892 0.291945 0.60713 1.12395 1.04952"];
      return;

    case "EL8":
      this.dp = p(5.64632, -4.43216);
      this.paths = ["m 0 0 c 2.0287 -1.125 5.714 -2.674 5.714 -4.967 c 0 -0.783 -1.09944 -0.73983 -1.288 -0.338 c -0.21246 0.45274 0.52932 0.67484 1.22032 0.87284"];
      return;

    case "EL16":
      this.dp = p(5.64078, -4.35178);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -0.603618 -1.0754 -0.710859 -1.27104 -0.32019 c -0.226056 0.451418 0.184781 0.725617 1.17602 0.95441"];
      return;

    case "SW4":
    case "SW8":
    case "SW16":
      this.dp = p(3.96713, -2.64214);
      this.paths = ["m 0 0 c 2.051 -1.0904 5.90172 -3.66043 5.47632 -4.90729 c -0.29744 -0.87182 -0.66854 0.15315 -1.50919 2.26515"];
      return;

    case "SE3":
    case "SE4":
      this.dp = p(5.53659, -4.07069);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7357 -2.6844 5.7357 -4.986 c 0 -1.0553 -1.6709 -0.490506 -1.22223 -0.05835 c 0.429694 0.413884 0.715952 0.666501 1.02312 0.973662"];
      return;

    case "SER8":
      this.dp = p(5.496, -3.9928);
      this.paths = ["m 0 0 c 2.029 -1.1245 5.715 -2.6746 5.715 -4.9675 c 0 -1.0512 -1.26883 -0.303688 -1.38662 0.145897 c -0.12096 0.461707 0.48417 0.350264 1.16762 0.828803"];
      return;

    case "SER16":
      this.dp = p(5.63289, -4.38072);
      this.paths = ["m 0 0 c 2.02871 -1.1246 5.71446 -2.6746 5.71446 -4.9675 c 0 -0.265858 -0.08892 -0.431175 -0.263762 -0.506244 c -0.337411 -0.144868 -0.944374 0.01417 -1.05888 0.30377 c -0.167123 0.422698 0.337271 0.267451 1.24107 0.789257"];
      return;

    case "NER8":
      this.dp = p(5.72797, -5.12467);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -0.448935 -0.205316 -0.686914 -0.483073 -0.679334 c -0.310031 0.00846 -0.535049 0.478739 -0.49705 0.786549 c 0.027336 0.221428 0.262501 0.48478 0.484431 0.461871 c 0.285021 -0.029422 0.36026 -0.357185 0.487857 -0.707759"];
      return;

    case "SW8":
      this.dp = p(4.19031, -2.46911);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -0.575586 0.00631 -0.684364 0.294391 c -0.185986 0.492562 -0.441267 1.09343 -0.861131 2.2225"];
      return;

    case "NEL8":
      this.dp = p(5.70879, -4.64675);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -0.998414 -1.25738 -0.193443 -1.25842 0.265386 c -0.00119 0.52533 0.689589 0.420561 1.23142 0.073869"];
      return;
  }

  switch (_head) {
    case "BNER":
      this.dp.set(5.32512, -2.79603);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -1.2616 -0.865 -0.9666 -0.3328 c 0.2937 0.5087 1.01635 1.72529 0.555922 2.52277"];
      return;

    case "BSW":
      this.dp.set(6.40739, -6.43922);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -1.26634 -0.854586 -1.37904 -0.102347 c -0.048786 0.325637 0.341603 0.53441 0.833318 0.29518 c 0.399251 -0.194244 0.865303 -0.683843 1.2173 -1.64605"];
      return;

    case "BE":
      this.dp.set(4.52558, -5.45043);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -0.998414 -1.24668 -0.097504 -1.41641 0.344383 c -0.154914 0.403301 0.22831 0.762397 0.779042 0.290633 c 0.264355 -0.22645 0.981207 -1.09945 -0.572851 -1.09945"];
      return;

    case "E":
      this.dp = p(5.70949, -4.6511);
      this.paths = ["m 0 0 c 2.03644 -1.1288 5.73582 -2.6844 5.73582 -4.9861 c 0 -1.4267 -2.31267 0.3404 -1.32461 0.3404 c 0.39983 -0.0209 0.89846 0.01561 1.29828 -0.0054"];
      return;

    case "SEL":
     this.dp = p(4.93961, -3.18064);
     this.paths = ["m 0 0 c 2.029 -1.1246 5.714 -2.6746 5.714 -4.9675 c 0 -1.0512 -0.493688 -0.439405 -0.597895 -0.192244 c -0.220322 0.522564 -0.176495 1.3193 -0.176495 1.9791"];
     return;

    case "S":
      this.dp = p(4.86067, -3.08467);
      this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -0.875132 -1.20076 -0.866937 0.031477 c 0.00305 0.457897 -0.00819 1.49344 -0.00819 1.86985"];
      return;

  }

  this.dp = p(5.54091, -4.08037);
  this.paths = ["m 0 0 c 2.0364 -1.1288 5.7358 -2.6844 5.7358 -4.986 c 0 -1.0553 -1.2616 -0.865 -0.9666 -0.3328 c 0.2937 0.5087 0.554514 0.86223 0.771714 1.23843"];
};

WasedaSu = function() { WasedaChar.call(this, "WasedaSu", "す", "NEL8CL4", "NEL", "NELCL4", "black", false, p(0.0, 2.5)); };
WasedaSu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["す"] = WasedaSu;
WasedaSu.prototype.getFilteredPrevTailType = WasedaSa.prototype.getFilteredPrevTailType;
WasedaSu.prototype.reverse = function() {
  this.headType = "SWR";
  this.tailType = "SWRCR";
  this.model = "SWR8CR4";
};
//WasedaSu.prototype.filterReverseTail = function(tail) { return tail.replace(/^(?:E)$/, "R"); };
WasedaSu.prototype.getFilteredPrevTailType = WasedaShi.prototype.getFilteredPrevTailType;
WasedaSu.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getFilteredPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _headModel) {
    case "WasedaSui_EL8":
      this.dp.set(5.79703, -3.04747);
      this.paths = ["m 0 0 c 2.07338 -0.555562 6.70236 -2.4626 6.70236 -4.7471 c 0 -1.0867 -1.9661 -1.3883 -3.09921 -0.7602 c -1.06108 0.5881 0.354299 1.86213 2.19388 2.45983"];
      return;
  }

  //switch (name_ + "_" + _head) {}


  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  switch (model_ + "_" + _head) {
    case "SEL8_E":
      this.dp = p(4.48813, -3.05947);
      this.paths = ["m 0 0 c 2.3202 0 5.8001 -3.832 5.8001 -6.125 c 0 -2.17 -5.49859 3.06553 -2.86977 3.06553 c 0.973812 0 0.706733 0 1.55779 0"];
      return;
  }

  switch (model_ + "_" + _headModel) {
    case "SEL8_EL8":
      this.dp = p(5.38829, -3.42191);
      this.paths = ["m 0 0 c 2.3202 0 5.8001 -2.574 5.8001 -4.867 c 0 -2.17 -2.72988 -1.44178 -3.12111 -0.465371 c -0.411007 1.02577 1.7713 1.56052 2.7093 1.91046"];
      return;

    case "SEL8_EL16":
      this.dp = p(5.20419, -3.10779);
      this.paths = ["m 0 0 c 0.617619 0 1.3211 -0.18243 2.02 -0.493405 c 0.65574 -0.291775 1.30744 -0.696711 1.88037 -1.1703 c 1.1105 -0.917941 1.9251 -2.0938 1.89973 -3.20349 c -0.04193 -1.83419 -3.9967 -0.810832 -3.26888 0.594788 c 0.337159 0.651149 1.49979 0.893757 2.67297 1.16463"];
      return;

    case "UWL4_SER8":
      this.dp = p(4.68984, -2.91633);
      this.paths = ["m 0 0 c 2.23847 0 5.7144 -2.6743 5.7144 -4.9674 c 0 -2.1677 -3.21889 -0.804741 -3.51502 0.334357 c -0.253688 0.975835 0.897163 0.601059 2.49046 1.71671"];
      return;
  }

  //switch (tailModel_) {}

  switch (model_) {
    case "UWL4":
      this.dp = p(4.9106, -2.814);
      this.paths = ["m 0 0 c 2.3202 0 5.8001 -2.573 5.8001 -4.867 c 0 -2.169 -2.4502 -1.883 -2.2468 -0.73 c 0.1692 0.96 0.7703 2.004 1.3573 2.783"];
      return;

    case "SEL8":
      this.dp = p(4.9106, -2.814);
      this.paths = ["m 0 0 c 2.3202 0 5.8001 -2.574 5.8001 -4.867 c 0 -2.17 -2.4503 -1.884 -2.2469 -0.73 c 0.1692 0.959 0.7704 2.004 1.3574 2.783"];
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _headModel) {
    case "R_NEL8":
      this.dp.set(-0.646908, 3.37099);
      this.paths = ["m 0 0 c 0 3.21346 -2.65651 7.81947 -4.0232 6.92266 c -1.56432 -1.0265 2.16149 -2.88988 3.37629 -3.55167"];
      this.reverse();
      return;

    case "R_EL8":
      this.dp = p(-1.03912, 4.37798);
      this.paths = ["m 0 0 c 0 3.21345 -1.96809 7.09343 -3.84679 6.92264 c -1.26813 -0.115286 -0.486744 -2.87313 0.522733 -3.45265 c 0.710778 -0.408046 1.48397 0.51731 2.28493 0.907987"];
      this.reverse();
      return;

    case "NER_SER8":
      this.dp = p(-1.07113, 4.94124);
      this.paths = ["m 0 0 c 1.11189 1.112 -0.881629 6.26528 -3.34721 6.76286 c -0.628466 0.12683 -1.63306 -0.642121 -1.45495 -1.25802 c 0.349418 -1.20828 2.76803 -1.2055 3.73103 -0.563593"];
      this.reverse();
      return;

    case "R_SER8":
      this.dp.set(-1.66931, 5.46821);
      this.paths = ["m 0 0 c 0 3.21345 -1.96809 7.09343 -3.84679 6.92264 c -0.702213 -0.063838 -1.22306 -0.550331 -1.158 -1.04015 c 0.201682 -1.51857 2.11503 -1.26887 3.33548 -0.414282"];
      this.reverse();
      return;
  }

  switch (tail_ + "_" + _head) {
    case "R_E":
      this.dp.set(-0.9317, 4.14797);
      this.paths = ["m 0 0 c 0 3.21345 -2.07382 7.80976 -4.30601 5.92268 c -1.11939 -0.946326 0.817472 -1.83977 3.37431 -1.77471"];
      this.reverse();
      return;

    case "NER_E":
      this.dp = p(-0.756429, 3.85681);
      this.paths = ["m 0 0 c 1.11189 1.112 -1.96809 7.09343 -3.84679 6.92264 c -1.60821 -0.146203 -1.15697 -2.96419 1.68323 -3.03216 l 1.40713 -0.033671"];
      this.reverse();
      return;

    case "R_NE":
      this.dp = p(-0.874496, 4.08031);
      this.paths = ["m 0 0 c 0 3.21345 -1.96809 7.09344 -3.84679 6.92264 c -2.27958 -0.207237 2.21189 -2.32943 2.97229 -2.84233"];
      this.reverse();
      return;

    case "ER_NE":
      this.dp = p(-0.005432, 2.73989);
      this.paths = ["m 0 0 c 1.30093 2.25326 -2.51837 8.26204 -3.84679 6.92264 c -1.04502 -1.05366 3.00651 -3.61964 3.84136 -4.18275"];
      this.reverse();
      return;

    case "ER_E":
      this.dp = p(-0.532801, 4.08291);
      this.paths = ["m 0 0 c 1.30093 2.25326 -2.07382 7.80976 -4.09989 6.12116 c -1.34514 -1.12109 0.611346 -2.03825 3.56709 -2.03825"];
      this.reverse();
      return;
  }

  switch (tail_) {
    case "R":
      this.dp = p(-0.9317, 4.14797);
      this.paths = ["m 0 0 c 0 3.21345 -1.96809 7.09344 -3.84679 6.92264 c -2.27958 -0.207237 1.8144 -2.47974 2.91509 -2.77467"];
      this.reverse();
      return;

    case "ER":
      this.dp = p(-0.58051, 4.11179);
      this.paths = ["m 0 0 c 1.30093 2.25326 -1.96809 7.09344 -3.84679 6.92264 c -2.27958 -0.207237 2.16559 -2.51592 3.26628 -2.81085"];
      this.reverse();
      return;

    case "NER":
      this.dp = p(-0.569343, 3.48671);
      this.paths = ["m 0 0 c 1.11189 1.112 -1.96809 7.09344 -3.84679 6.92264 c -2.27958 -0.207237 2.17676 -3.141 3.27745 -3.43593"];
      this.reverse();
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "ER25":
      this.dp.set(4.63303, -2.84238);
      this.paths = ["m 0 0 c 2.0592 -1.0493 5.693 -2.6644 5.693 -4.9489 c 0 -1.4652 -3.9652 0.7979 -3.3922 2.0848 c 0.3507 0.7876 1.54965 0.512365 2.33223 0.021724"];
      return;

    case "ER4":
      this.dp.set(4.60122, -2.824);
      this.paths = ["m 0 0 c 2.05919 -1.049 5.69296 -2.664 5.69296 -4.949 c 0 -1.465 -3.81386 0.95805 -3.38938 2.245 c 0.240228 0.72833 1.48569 0.419979 2.29764 -0.12"];
      return;

    case "EL8":
      this.dp = p(5.12678, -3.06292);
      this.paths = ["m 0 0 c 2.05895 -1.0491 5.86209 -2.4626 5.86209 -4.7471 c 0 -1.0867 -1.9661 -1.3883 -3.09921 -0.7602 c -1.06108 0.5881 0.524317 1.84668 2.3639 2.44438"];
      return;

    case "EL16":
      this.dp = p(5.05454, -2.98447);
      this.paths = ["m 0 0 c 2.0589 -1.0491 5.8621 -2.4625 5.8621 -4.747 c 0 -1.0868 -2.1644 -1.1935 -3.2975 -0.5654 c -1.0814 0.5994 0.537436 1.87722 2.48994 2.32793"];
      return;

    case "SER4":
    case "SER8":
    case "SER16":
      this.dp = p(4.68984, -2.91633);
      this.paths = ["m 0 0 c 2.0288 -1.1246 5.7144 -2.6743 5.7144 -4.9674 c 0 -2.1677 -3.21889 -0.804741 -3.51502 0.334357 c -0.253688 0.975835 0.897163 0.601059 2.49046 1.71671"];
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

    case "SWR8":
      this.dp = p(3.99798, -2.32147);
      this.paths = ["m 0 0 c 2.0288 -1.1246 5.7144 -2.6743 5.7144 -4.9674 c 0 -2.1677 -2.54813 -1.38801 -2.2707 -0.6511 c 0.220784 0.586434 0.554279 1.99854 0.554279 3.29703"];
      return;
  }

  switch (_head) {
    case "E":
      this.dp = p(3.86493, -2.22179);
      this.paths = ["m 0 0 c 2.0288 -1.1246 5.7144 -2.6743 5.7144 -4.9674 c 0 -2.1677 -4.3769 1.1179 -4.21917 2.32394 c 0.104045 0.795534 1.75126 0.421673 2.3697 0.421673"];
      return;

    case "SW":
      this.dp = p(3.03338, -1.75872);
      this.paths = ["m 0 0 c 2.02867 -1.16644 6.23809 -3.19642 5.71403 -5.15222 c -0.33407 -1.24677 -1.27706 -0.480648 -1.4507 0.014213 c -0.332825 0.948521 -0.944585 2.63339 -1.22995 3.37928"];
      return;

    case "S":
      this.dp = p(3.45727, -1.936);
      this.paths = ["m 0 0 c 2.0288 -1.1246 5.7144 -2.6743 5.7144 -4.9674 c 0 -2.1677 -2.2707 -1.5652 -2.2707 -0.6511 c 0 1.22751 0.013571 2.84214 0.013571 3.6825"];
      return;

    case "NER":
      this.dp = p(5.7144, -4.9674);
      this.paths = ["m 0 0 c 2.0288 -1.1246 5.7144 -2.6743 5.7144 -4.9674 c 0 -1.92496 -1.77986 -0.993864 -2.14933 -0.367908 c -0.636347 1.07809 -0.509336 1.99307 0.198275 2.25696 c 0.848178 0.316314 1.62499 -0.898433 1.95106 -1.88905"];
      return;

    case "SEL":
      this.dp = p(3.66476, -2.0781);
      this.paths = ["m 0 0 c 2.0288 -1.1246 5.7144 -2.6743 5.7144 -4.9674 c 0 -2.1677 -1.41165 -1.67045 -1.68754 -0.6511 c -0.254249 0.939388 -0.362101 2.774 -0.362101 3.5404"];
      return;
  }

  this.dp = p(4.6145, -2.9915);
  this.paths = ["m 0 0 c 2.0288 -1.1246 5.7144 -2.6743 5.7144 -4.9674 c 0 -2.1677 -2.4742 -1.8055 -2.2707 -0.6511 c 0.169 0.9584 0.5711 1.8606 1.1708 2.627"];
};

WasedaSe = function() { WasedaChar.call(this, "WasedaSe", "せ", "NEL16CL1", "NEL", "NELCL", "black", false, p(0.0, 5.7)); };
WasedaSe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["せ"] = WasedaSe;
WasedaSe.prototype.getFilteredPrevTailType = WasedaSa.prototype.getFilteredPrevTailType;
WasedaSe.prototype.reverse = function() {
  this.headType = "SWR";
  this.tailType = "SWRCR";
  this.model = "SWR16CR1";
};
WasedaSe.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getFilteredPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "R_S":
      this.dp = p(-7.23955, 13.8857);
      this.paths = ["m 0 0 c 0 4.2182 -4.0678 13.9416 -7.7279 13.9416 c -0.9019 0 -0.27627 -1.43848 0.261936 -1.31305 c 0.353237 0.08232 0.226418 0.75916 0.226418 1.25715"];
      this.reverse();
      return;
  }

  switch (tail_) {
    case "R":
      this.dp = p(-6.7496, 13.7286);
      this.paths = ["m 0 0 c 0 4.2182 -4.0678 13.9416 -7.7279 13.9416 c -0.9019 0 -0.8143 -1.0128 -0.3761 -0.8446 c 0.469 0.1707 0.9266 0.3745 1.3544 0.6316"];
      this.reverse();
      return;

    case "ER":
      this.dp = p(-6.7496, 13.7286);
      this.paths = ["m 0 0 c 1.33334 2.3094 -4.0678 13.9416 -7.7279 13.9416 c -0.9019 0 -0.8143 -1.0128 -0.3761 -0.8446 c 0.469 0.1707 0.9266 0.3745 1.3544 0.6316"];
      this.reverse();
      return;
  }

  switch (_name) {
    case "WasedaWa":
      this.dp = p(9.54291, -6.71772);
      this.paths = ["m 0 0 c 3.0001 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.30973 -1.77134 2.74675 -1.90159 3.23078"];
      return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "ER4":
      this.dp.set(11.3533, -9.3388);
      this.paths = ["m 0 0 c 3.0001 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.0469 -1.63414 -0.056935 -1.42184 0.732958 c 0.110912 0.41265 0.468133 0.374722 1.33064 -0.123254"];
      return;

    case "ER8":
    case "ER16":
      this.dp.set(11.3533, -9.3388);
      this.paths = ["m 0 0 c 3.0001 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.0469 -1.66548 -0.088268 -1.45317 0.701625 c 0.110912 0.41265 0.679224 0.163114 1.36197 -0.091925"];
      return;

    case "ER25":
      this.dp.set(11.3533, -9.3388);
      this.paths = ["m 0 0 c 3.0001 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.0469 -1.66548 0.096144 -1.45317 0.886037 c 0.110912 0.41265 0.624877 0.149224 1.36197 -0.276337"];
      return;

    case "EL8":
      this.dp = p(11.018, -9.1428);
      this.paths = ["m 0 0 c 2.989 -1.7958 11.402 -6.6898 11.402 -9.9113 c 0 -1.043 -1.127 -0.658 -1.404 -0.3501 c -0.375 0.4161 0.272 0.8755 1.02 1.1186"];
      return;

    case "SER8":
      this.dp = p(11.3463, -9.31458);
      this.paths = ["m 0 0 c 3.0001 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.0469 -1.13664 -0.774456 -1.34568 -0.359853 c -0.239343 0.474704 0.869345 0.729043 1.24743 0.993768"];
      return;
  }

  switch (_head) {
    case "SEL":
      this.dp = p(10.2165, -7.44201);
      this.paths = ["m 0 0 c 3.0001 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.10086 -1.22803 0.57781 -1.22803 2.50649"];
      return;

    case "S":
     this.dp = p(10.7728, -8.16585);
     this.paths = ["m 0 0 c 3.0001 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.0469 -0.669364 -1.02683 -0.669364 -0.189513 c 0 0.559094 -0.0023 1.56124 -0.0023 1.97217"];
     return;

    case "E":
     this.dp = p(11.3702, -9.40054);
     this.paths = ["m 0 0 c 3.0001 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.0469 -1.59372 -0.317048 -1.56885 0.238544 c 0.021067 0.470618 0.825773 0.309411 1.49453 0.309411"];
     return;

    case "SW":
      this.dp = p(9.82173, -6.67588);
      this.paths = ["m 0 0 c 3.0001 -1.8027 12.2814 -6.82508 11.4445 -9.9485 c -0.297086 -0.917247 -1.49733 2.90475 -1.62277 3.27262"];
      return;
  }

  this.dp = p(11.2422, -9.02036);
  this.paths = ["m 0 0 c 3.0001 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.0469 -1.4523 -1.0345 -1.1326 -0.5228 c 0.3245 0.5068 0.734315 1.07264 0.930315 1.45094"];
};

WasedaSo = function() { WasedaChar.call(this, "WasedaSo", "そ", "NEL16", "NEL", "NEL", "black", false, p(0.0, 5.7)); };
WasedaSo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["そ"] = WasedaSo;
WasedaSo.prototype.getFilteredPrevTailType = WasedaSa.prototype.getFilteredPrevTailType;
WasedaSo.prototype.reverse = function() {
  this.headType = "SWR";
  this.tailType = "SWR";
  this.model = "SWR16";
};
WasedaSo.prototype.filterReverseTail = function(tail) {
  return tail.replace(/^ECL4|ECL|E$/, "R");
};
WasedaSo.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getFilteredPrevTailType();
  //const _name = this.getNextName();
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

  //switch (tailModel_) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "SEL_SW":
      this.dp = p(11.9694, -13.0512);
      this.paths = ["m 0 0 c 3.35675 0 10.6013 -9.29254 11.9694 -13.0512"];
      return;

    case "NER_ER":
      this.dp = p(-8, 13.8564);
      this.paths = ["m 0 0 c 2.61142 2.61142 -4.65039 12.9589 -8 13.8564"];
      this.reverse();
      return;
  }

  switch (tail_) {
    case "R":
      this.dp = p(-8, 13.8564);
      this.paths = ["m 0 0 c 0 4.2341 -4.3261 13.8564 -8 13.8564"];
      this.reverse();
      return;

    case "SEL":
      this.dp = p(8, -13.8564);
      this.paths = ["m 0 0 c 3.35675 0 8 -6.1581 8 -13.8564"];
      return;

    case "ER":
      this.dp = p(-8, 13.8564);
      this.paths = ["m 0 0 c 1.33334 2.3094 -4.3261 13.8564 -8 13.8564"];
      this.reverse();
      return;

    case "NER":
      this.dp = p(-8, 13.8564);
      this.paths = ["m 0 0 c 2.61142 2.61142 -4.3261 13.8564 -8 13.8564"];
      this.reverse();
      return;
  }

  //switch (_name) {}

  switch (_model) {
    case "SW4CR1":
      this.dp.set(13.0033, -9.32273);
      this.paths = ["m 0 0 c 1.75857 -1.18612 10.2239 -4.50859 13.0033 -9.32273"];
      return;
  }

  switch (_headModel) {
    case "SWL16":
      this.dp = p(11.6982, -11.1564);
      this.paths = ["m 0 0 c 3.0032 -2.0256 8.37026 -5.39217 11.6982 -11.1564"];
      return;
  }

  switch (_head) {
    case "SL":
      this.dp = p(11.3137, -11.3137);
      this.paths = ["m 0 0 c 3.0032 -2.0256 8.20727 -5.93321 11.3137 -11.3137"];
      return;

    case "NE":
     this.dp = p(11.3137, -11.3137);
     this.paths = ["m 0 0 c 3.0032 -2.0256 12.9622 -8.45838 11.3137 -11.3137"];
     return;

    case "SW":
      this.dp = p(11.3137, -11.3137);
      this.paths = ["m 0 0 c 4.54793 -3.06749 8.82206 -5.97035 11.3137 -11.3137"];
      return;
  }

  this.dp = p(11.3137, -11.3137);
  this.paths = ["m 0 0 c 3.0032 -2.0256 11.3137 -7.7072 11.3137 -11.3137"];
};

WasedaNo = function() { WasedaChar.call(this, "WasedaNo", "の", "EL16", "EL", "EL", "black", false, p(0.0, -0.7)); };
WasedaNo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["の"] = WasedaNo;

WasedaNo.prototype.setPaths = function() {
  switch (this.getNextHeadModel()) {
    case "ER8":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 5.355 1.2363 11.017 2.3238 16 0"];
      return;

    case "ER16":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 5.86615 1.35399 11.6399 1.5869 16 0"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "SWL":
      this.dp.set(16, 0);
      this.paths = ["m 0 0 c 2.8811 0.665 14.117 1.88304 16 0"];
      return;

    case "SWL":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 2.8811 0.665 14.617 2.39543 16 0"];
      return;

    case "SW":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 2.8811 0.665 14.617 2.39543 16 0"];
      return;

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

WasedaMasu = function() { WasedaChar.call(this, "WasedaMasu", "ます", "E25F", "E", "EF", "black"); };
WasedaMasu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ます"] = WasedaMasu;

WasedaMasu.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(25, 0).move(2, 0);
      this.paths = ["m0,0h25"];
      break;
  }
};


WasedaMashite = function() { WasedaChar.call(this, "WasedaMashite", "まして", "NE25F", "NE", "NEF", "black"); };
WasedaMashite.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["まして"] = WasedaMashite;

WasedaMashite.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(20.4788, -14.3394).pmove(2, -35);
      this.paths = ["m 0 0 l 20.4788 -14.3394"];
      return;
  }
};



WasedaHi = function() { WasedaChar.call(this, "WasedaHi", "ひ", "SEL8CL1", "SEL", "SELCL", "black", false, p(0.0, -2.9)); };
WasedaHi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ひ"] = WasedaHi;
WasedaChar.dict["人"] = [WasedaHi, WasedaO];

WasedaHi.prototype.setPaths = function() {
  switch (this.getNextName()) {
    case "WasedaWa":
      this.dp = p(2.58596, 5.38593);
      this.paths = ["m 0 0 c 0 3.707 1.0848 5.646 4.411 5.646 c 0.3891 0 0.527567 -0.25784 0.446365 -0.45584 c -0.269576 -0.6573 -1.74425 0.0445 -2.27141 0.19577"];
      return;
  }

  switch (this.getNextHeadModel()) {
    case "NEL8":
      this.dp = p(5.30915, 4.89444);
      this.paths = ["m 0 0 c 0 3.7342 1.75652 5.765 4.3442 5.765 c 1.2035 -0.000192 1.03325 -0.743272 0.874441 -1.19169 c -0.179896 -0.507964 -1.05732 -0.517584 -1.26 0.00508 c -0.306576 0.790576 0.809214 0.645759 1.35051 0.31605"];
      return;

    case "SWL4":
    case "SWL8":
      this.dp = p(3.21859, 5.62562);
      this.paths = ["m 0 0 c 0 3.7342 1.73412 5.765 4.3442 5.765 c 0.504138 0 0.638607 -0.297885 0.603201 -0.509909 c -0.0558 -0.334177 -0.310937 -0.401893 -0.567637 -0.338579 c -0.250496 0.061783 -0.607018 0.375471 -1.16117 0.709104"];
      return;

    case "SE4":
      this.dp = p(4.3442, 5.765);
      this.paths = ["m 0 0 c 0 3.7342 0.9929 5.765 4.3442 5.765 c 0.3919 0 0.585112 -0.476203 0.549706 -0.688227 c -0.0558 -0.334177 -0.733442 -0.53877 -1.10472 -0.274288 c -0.387966 0.276374 0.194452 0.604495 0.55501 0.962515"];
      return;

    case "SR8":
      this.dp = p(4.20763, 5.76385);
      this.paths = ["m 0 0 c 0 3.7342 0.9929 5.765 4.3442 5.765 c 0.3919 0 0.63912 -0.408569 0.549706 -0.688227 c -0.124066 -0.388039 -0.912417 -0.646563 -1.17527 -0.335316 c -0.243744 0.288619 0.243641 0.668833 0.488989 1.0224"];
      return;

    case "EL16":
      this.dp = p(5.0592, 5.35871);
      this.paths = ["m 0 0 c 0 3.7202 1.0887 5.667 4.4275 5.667 c 0.598501 0 0.776526 -0.511535 0.776526 -0.725935 c 0 -0.3932 -0.790948 -0.849394 -1.26847 -0.192815 c -0.267796 0.368214 0.461641 0.457555 1.12364 0.610455"];
      return;

    case "EL8":
      this.dp = p(4.92477, 5.45748);
      this.paths = ["m 0 0 c 0 3.7202 1.08867 5.6669 4.42754 5.6669 c 0.649137 0 0.63491 -0.581588 0.63491 -0.796088 c 0 -0.493789 -0.790957 -0.595672 -1.09393 -0.263239 c -0.28726 0.315189 0.325161 0.644908 0.956251 0.849908"];
      return;

    case "NEL16":
      this.dp = p(5.43433, 4.79808);
      this.paths = ["m 0 0 c 0 3.7202 2.0157 5.667 4.4275 5.667 c 0.3901 0 0.730452 -0.101222 0.905224 -0.436174 c 0.280944 -0.538431 -0.06285 -0.978685 -0.437432 -1.07334 c -0.372691 -0.09418 -1.03549 0.377026 -0.890322 0.732968 c 0.187033 0.458591 1.02685 0.179022 1.42936 -0.092378"];
      return;

    case "SER8":
      this.dp = p(4.427, 5.6669);
      this.paths = ["m 0 0 c 0 3.7202 1.088 5.6669 4.427 5.6669 c 0.391 0 0.54152 -0.216225 0.494 -0.4291 c -0.0999 -0.447338 -1.09407 -0.771781 -1.323 -0.3747 c -0.19224 0.333453 0.443 0.5335 0.829 0.8038"];
      return;

    case "SER16":
      this.dp = p(4.4275, 5.667);
      this.paths = ["m 0 0 c 0 3.72 1.0886 5.667 4.4275 5.667 c 0.3904 0 0.551354 -0.21885 0.4935 -0.429 c -0.127703 -0.46387 -1.22989 -0.69776 -1.4205 -0.256 c -0.152214 0.35277 0.4988 0.458 0.927 0.685"];
      return;

    case "ER8":
      this.dp = p(4.86875, 5.36523);
      this.paths = ["m 0 0 c 0 3.7342 0.9929 5.765 4.3442 5.765 c 0.588244 0 0.714155 -0.839759 0.4375 -1.13705 c -0.310836 -0.334024 -1.32265 -0.057564 -1.30954 0.398527 c 0.01376 0.478832 0.4234 0.599525 1.39659 0.338759"];
      return;

    case "SER4":
    case "SER8":
     this.dp = p(4.48139, 5.74753);
     this.paths = ["m 0 0 c 0 3.7342 0.9929 5.765 4.3442 5.765 c 0.3919 0 0.654699 -0.414037 0.549706 -0.688227 c -0.158844 -0.414823 -1.11236 -0.615053 -1.31439 -0.21946 c -0.192119 0.376191 0.464896 0.386278 0.901874 0.890218"];
     return;
  }

  switch (this.getNextHeadType()) {
    case "SEL":
      this.dp.set(3.79091, 5.73263);
      this.paths = ["m 0 0 c 0 3.7342 1.75652 5.765 4.3442 5.765 c 0.475184 0 0.589884 -0.397384 0.549706 -0.688227 c -0.040744 -0.294939 -0.243795 -0.908274 -0.725784 -0.52065 c -0.330808 0.266041 -0.37721 0.739714 -0.37721 1.17651"];
      return;

    case "BE":
      this.dp.set(2.01621, 5.74568);
      this.paths = ["m 0 0 c 0 3.7342 1.75652 5.765 4.3442 5.765 c 0.475184 0 0.585112 -0.476203 0.549706 -0.688227 c -0.0558 -0.334177 -0.321131 -0.651399 -0.692405 -0.386917 c -0.387966 0.276374 -1.75619 0.808085 -2.18529 1.05583"];
      return;

    case "S":
      this.dp = p(3.86235, 5.75002);
      this.paths = ["m 0 0 c 0 3.7342 0.9929 5.765 4.3442 5.765 c 0.767785 0 0.466055 -0.937383 0.138619 -1.12771 c -0.222938 -0.129586 -0.620473 -0.012216 -0.620473 0.462015 v 0.650719"];
      return;

    case "NE":
      this.dp = p(2.9001, 5.60768);
      this.paths = ["m 0 0 c 0 3.7342 0.9929 5.765 4.3442 5.765 c 0.3919 0 0.631719 -0.489527 0.549706 -0.688227 c -0.42962 -1.04087 -1.30682 0.033397 -1.99381 0.530904"];
      return;

    case "E":
      this.dp = p(5.45112, 4.90528);
      this.paths = ["m 0 0 c 0 3.7201 1.18678 5.5886 4.52557 5.5886 c 0.5132 0 0.742235 -0.09266 0.88951 -0.379396 c 0.151419 -0.294803 0.074323 -0.810136 -0.21567 -0.970575 c -0.319428 -0.176723 -1.04426 0.01365 -1.03193 0.366745 c 0.01743 0.4992 0.748749 0.299907 1.28364 0.299907"];
      break;

    case "SW":
      this.dp = p(3.63868, 5.70836);
      this.paths = ["m 0 0 c 0 3.7342 1.84433 5.765 4.3442 5.765 c 0.440085 0 0.549706 -0.394622 0.549706 -0.688227 c 0 -0.820229 -0.760526 -0.727581 -1.04912 0.065327 c -0.118439 0.325407 0.00624 -0.052489 -0.206104 0.566264"];
      return;

    default:
      this.dp = p(3.27829, 5.63903);
      this.paths = ["m 0 0 c 0 3.7342 1.75652 5.765 4.3442 5.765 c 0.475184 0 0.585112 -0.476203 0.549706 -0.688227 c -0.0558 -0.334177 -0.321131 -0.651399 -0.692405 -0.386917 c -0.387966 0.276374 -0.690919 0.643607 -0.923206 0.949169"];
      return;
  }
};

WasedaHa = function() { WasedaChar.call(this, "WasedaHa", "は", "SEL8", "SEL", "SEL", "black", false, p(0.0, -3.0)); };
WasedaHa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["は"] = WasedaHa;

WasedaHa.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _head) {
    case "WasedaToshite_E":
      this.dp = p(5.2185, 4.05424);
      this.paths = ["m 0 0 c 1.1621 3.5932 3.39526 5.87748 5.2185 4.05424"];
      return;
  }

  switch (name_) {
    case "WasedaMadeto":
    case "WasedaNaito":
    case "WasedaToJoshi":
    case "WasedaToshite":
      this.dp = p(5.2185, 4.6433);
      this.paths = ["m 0 0 c 1.1621 3.5932 3.2208 4.6433 5.2185 4.6433"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "ECL":
    case "ELCL":
    case "ELCL4":
      this.dp = p(4.18711, 5.9798);
      this.paths = ["m 0 0 c -0.96945 3.61804 1.58615 5.9798 4.18711 5.9798"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "SER16":
      this.dp = p(4.18711, 5.9798);
      this.paths = ["m 0 0 c 0 3.7764 1.12394 4.32292 4.18711 5.9798"];
      return;

    case "SER4":
    case "SER8":
      this.dp = p(4.1871, 5.98);
      this.paths = ["m 0 0 c 0 4.28632 2.94727 5.11174 4.1871 5.98"];
      return;
  }

  switch (_head) {
    case "BEL":
    case "E":
    //case "SEL":
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
      this.paths = ["m 0 0 c 0 3.7764 2.07274 5.9798 4.18711 5.9798"];
      break;
  }
};

WasedaHu = function() { WasedaChar.call(this, "WasedaHu", "ふ", "SEL8CL4", "SEL", "SELCL4", "black", false, p(0.0, -2.9)); };
WasedaHu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ふ"] = WasedaHu;

WasedaHu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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
    case "WasedaWa":
      this.dp = p(0.92649, 4.62699);
      this.paths = ["m 0 0 c 0 1.867 0.307 3.31 0.765 4.3381 c 0.493 1.0114 1.382 1.4475 2.722 1.4475 c 0.628 0 1.34865 -0.166261 1.32745 -0.660206 c -0.0512 -1.19284 -2.61931 -0.871696 -3.88796 -0.498401"];
      return;

    case "WasedaSai":
    case "WasedaSei":
      this.dp = p(3.0854, 5.84032);
      this.paths = ["m 0 0 c 0 1.8741 0.2905 3.3309 0.7678 4.3545 c 0.4951 1.0151 1.3611 1.5004 2.7067 1.5004 c 0.6304 0 1.52802 -0.519829 1.41513 -1.10825 c -0.255291 -1.33066 -3.19042 -2.29788 -3.90051 -1.14393 c -0.535634 0.870447 1.30704 2.23759 2.09629 2.23759"];
      return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "SL8":
      this.dp = p(0.941047, 4.66447);
      this.paths = ["m 0 0 c 0 1.8741 0.2905 3.3309 0.7678 4.3545 c 0.4951 1.0151 1.3611 1.5004 2.7067 1.5004 c 0.6304 0 1.3022 -0.1748 1.3022 -0.7218 c 0 -0.887326 -0.710275 -2.25476 -1.66954 -2.36885 c -0.953769 -0.113438 -1.92007 1.53545 -2.16612 1.90022"];
      return;

    case "SW8":
      this.dp = p(0.7678, 4.3545);
      this.paths = ["m 0 0 c 0 1.8741 0.2905 3.3309 0.7678 4.3545 c 0.4951 1.0151 1.34181 1.87269 2.18248 1.87269 c 0.686503 0 1.32178 -1.76145 1.26539 -2.77717 c -0.051869 -0.934293 -0.441775 -2.44841 -1.43955 -2.40998 c -0.848915 0.032689 -1.51162 1.88552 -2.00832 3.31447"];
      return;

    case "SE4":
      this.dp = p(2.91358, 5.8235);
      this.paths = ["m 0 0 c -0.03365 2.67325 0.754208 5.81682 3.4745 5.8549 c 0.6304 0 1.3022 -0.1748 1.3022 -0.7218 c 0 -1.70377 -2.23519 -2.83527 -3.16704 -2.00337 c -0.744182 0.66436 0.659576 2.04944 1.30392 2.69378"];
      return;

    case "ER4":
      this.dp = p(0.072595, 3.44336);
      this.paths = ["m 0 0 c -0.11586 1.657 0.04527 3.59 0.25878 4.938 c 0.198361 0.933 0.917832 2.51173 1.8085 2.19043 c 0.637534 -0.22998 0.522335 -1.35924 -0.004552 -2.03324 c -0.327236 -0.435 -1.26594 -1.18183 -1.99013 -1.65183"];
      return;
  }

  switch (_head) {
    case "EL":
      this.dp = p(0.349, 3.1511);
      this.paths = ["m 0 0 c 0 1.867 0.354 3.3083 0.687 4.3331 c 0.367 1.0094 0.996 1.4914 1.979 1.4914 c 0.46 0 0.855 -0.0783 0.855 -0.4361 c 0 -0.3631 -0.654 -0.8706 -1.387 -1.2934 c -0.724 -0.4355 -1.547 -0.8066 -1.785 -0.9439"];
      return;

    case "SER":
      this.dp = p(0.072595, 3.44336);
      this.paths = ["m 0 0 c -0.11586 1.657 0.04527 3.59 0.25878 4.938 c 0.198361 0.933 0.917832 2.51173 1.8085 2.19043 c 0.637534 -0.22998 0.522335 -1.35924 -0.004552 -2.03324 c -0.327236 -0.435 -1.26594 -1.18183 -1.99013 -1.65183"];
      return;

    case "SW":
      this.dp = p(1.7783, 5.47189);
      this.paths = ["m 0 0 c 0 1.8741 0.2905 3.3309 0.7678 4.3545 c 0.4951 1.0151 1.3611 1.5004 2.7067 1.5004 c 0.6304 0 1.17973 -0.240859 1.3022 -0.7218 c 0.231203 -0.907971 -0.20436 -2.83417 -1.18593 -2.57342 c -0.989362 0.262822 -1.55567 2.36151 -1.81247 2.91221"];
      return;

    case "SEL":
     this.dp = p(1.57973, 5.34499);
     this.paths = ["m 0 0 c 0 1.8741 0.2905 3.3309 0.7678 4.3545 c 0.4951 1.0151 1.3611 1.5004 2.7067 1.5004 c 0.6304 0 1.23675 -0.229846 1.3022 -0.7218 c 0.14847 -1.11596 -1.33329 -2.6351 -2.42309 -2.35272 c -0.864397 0.223974 -0.773881 1.47322 -0.773881 2.56461"];
     return;
  }

  this.dp = p(0.6103, 3.8936);
  this.paths = ["m 0 0 c 0 1.8741 0.2905 3.3309 0.7678 4.3545 c 0.4951 1.0151 1.3611 1.5004 2.7067 1.5004 c 0.6304 0 1.3022 -0.1748 1.3022 -0.7218 c 0 -0.42 -0.7718 -0.8055 -1.6955 -1.0188 c -0.9158 -0.2453 -2.0018 -0.2207 -2.4709 -0.2207"];
};

WasedaHe = function() { WasedaChar.call(this, "WasedaHe", "へ", "SEL16CL1", "SEL", "SELCL", "black", false, p(0.0, -7.0)); };
WasedaHe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["へ"] = WasedaHe;

WasedaHe.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (tail_ + "_" + _head) {
    case "ECL4_S":
      this.dp.set(7.43445, 13.7483);
      this.paths = ["m 0 0 c -1.55282 7.56121 1.3202 13.8564 7.9403 13.753 c 0.2736 -0.0482 0.38303 -0.26795 0.383074 -0.47009 c 6.6e-05 -0.30096 -0.276176 -0.76506 -0.570052 -0.70016 c -0.421094 0.093 -0.318869 0.51378 -0.318869 1.16553"];
      return;
  }

  switch (tail_) {
    case "ECL4":
      this.dp.set(6.45531, 13.6622);
      this.paths = ["m 0 0 c -1.55282 7.56121 1.3202 13.8564 7.9403 13.753 c 0.2736 -0.0482 0.3732 -0.3714 0.309 -0.5812 c -0.0492 -0.1716 -0.226 -0.3314 -0.4637 -0.2677 c -0.5609 0.1608 -0.930392 0.358284 -1.33029 0.758084"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "NEL8":
    case "NEL8CL1":
      this.dp = p(8.54163, 13.034);
      this.paths = ["m 0 0 c 0 4.132 0.5073 7.8422 1.6478 10.4039 c 1.1851 2.5413 4.1962 4.1966 6.4002 3.261 c 0.584413 -0.236032 0.5781 -0.7769 0.3506 -1.0789 c -0.309355 -0.433043 -0.885546 -0.314146 -1.29955 0.235154 c -0.4077 0.5411 0.45018 0.785831 1.44258 0.212831"];
      return;

    case "SER8":
     this.dp = p(7.50437, 13.827);
     this.paths = ["m 0 0 c 0 8.2946 1.4198 15.0205 7.9403 13.753 c 0.2736 -0.0482 0.40475 -0.383783 0.309 -0.5812 c -0.199678 -0.411694 -1.10057 -0.627459 -1.35076 -0.244356 c -0.197672 0.302684 -0.096421 0.425868 0.605837 0.899551"];
     return;

    case "ER8":
      this.dp = p(8.82771, 13.0073);
      this.paths = ["m 0 0 c 0 8.2635 1.463 15.1903 7.911 13.7016 c 1.25573 -0.28992 0.98625 -1.04571 0.573 -1.2283 c -0.59993 -0.26507 -1.23524 0.187582 -1.10524 0.752682 c 0.11 0.4775 0.88395 0.02078 1.44895 -0.218717"];
      return;

    case "NEL16":
    case "NEL16CL1":
    case "NEL16CL8":
      this.dp = p(8.55068, 13.0147);
      this.paths = ["m 0 0 c 0 4.132 0.507 7.8422 1.648 10.4039 c 1.185 2.5413 4.18778 4.17684 6.4 3.261 c 0.61545 -0.254791 0.578 -0.7769 0.351 -1.0789 c -0.39 -0.5366 -1.10954 -0.281369 -1.52354 0.268031 c -0.425 0.564 0.71122 0.81073 1.67522 0.16063"];
      return;

    case "SW8":
      this.dp = p(7.01351, 13.9014);
      this.paths = ["m 0 0 c 0 8.2946 1.44769 15.1564 7.9403 13.753 c 0.273487 -0.05912 0.485738 -0.243699 0.507664 -0.474227 c 0.025536 -0.268487 -0.206842 -0.651987 -0.476534 -0.653873 c -0.531972 -0.0037 -0.738032 0.672356 -0.957922 1.2765"];
      return;
  }

  switch (_head) {
    case "SW":
      this.dp.set(7.09729, 13.8635);
      this.paths = ["m 0 0 c 0 8.2946 2.22615 14.8638 7.9403 13.753 c 0.2736 -0.0482 0.51225 -0.389842 0.501025 -0.608958 c -0.033074 -0.645607 -0.773815 -0.847128 -0.999491 -0.227107 c -0.111446 0.306187 -0.153929 0.419376 -0.344547 0.946604"];
      return;

    case "S":
      this.dp = p(7.43503, 13.8367);
      this.paths = ["m 0 0 c 0 8.2946 1.4198 15.0205 7.9403 13.753 c 0.2736 -0.0482 0.38303 -0.267953 0.383074 -0.470089 c 6.6e-05 -0.300958 -0.276176 -0.765066 -0.570052 -0.70016 c -0.421094 0.093 -0.31829 0.602213 -0.31829 1.25396"];
      return;

    case "E":
      this.dp = p(8.69414, 13.2206);
      this.paths = ["m 0 0 c 0 8.2946 1.4198 15.0205 7.9403 13.753 c 0.752488 -0.201628 0.856193 -0.593229 0.774184 -1.0092 c -0.06068 -0.307776 -0.500449 -0.495727 -0.813355 -0.47342 c -0.33761 0.02407 -0.875155 0.300984 -0.796231 0.63012 c 0.126009 0.52549 0.71422 0.320111 1.58924 0.320111"];
      return;
  }

  this.dp.set(6.38142, 13.8415);
  this.paths = ["m 0 0 c 0 8.2946 2.58809 14.7934 7.9403 13.753 c 0.271314 -0.0478 0.3732 -0.3714 0.309 -0.5812 c -0.0492 -0.1716 -0.226 -0.3314 -0.4637 -0.2677 c -0.5609 0.1608 -1.00428 0.537581 -1.40418 0.937381"];
};

WasedaHo = function() { WasedaChar.call(this, "WasedaHo", "ほ", "SEL16", "SEL", "SEL", "black", false, p(0.0, -6.9)); };
WasedaHo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ほ"] = WasedaHo;

WasedaHo.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (tailModel_) {}

  switch (model_) {
    case "E8CL4":
      this.dp = p(8, 13.8564);
      this.paths = ["m 0 0 c -1.55282 7.56121 1.3202 13.8564 8 13.8564"];
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "SER8":
      this.dp = p(8, 13.856);
      this.paths = ["m 0 0 c 0 6.4086 2.7214 10.1602 8 13.856"];
      return;
  }

  switch (_head) {
    case "E":
    case "SEL":
    case "EL":
    case "SE":
      this.dp = p(8, 11.1564);
      this.paths = ["m 0 0 c 0 10.815 5.0359 16.2904 8 11.1564"];
      return;

    case "NEL":
      this.dp = p(8, 13.8564);
      this.paths = ["m 0 0 c 0 7.6983 4.64325 13.8564 8 13.8564"];
      return;
  }

  this.dp.set(8, 13.8564);
  this.paths = ["m 0 0 c 0 7.6983 1.95676 13.8564 8 13.8564"];
};

WasedaMi = function() { WasedaChar.call(this, "WasedaMi", "み", "ER8CR1", "ER", "ERCR", "black", false, p(0.0, 0.5)); };
WasedaMi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["み"] = WasedaMi;

WasedaMi.prototype.setPaths = function() {
  switch (this.getNextHeadModel()) {
    case "ER25":
      this.dp = p(7.5344, -1.1129);
      this.paths = ["m 0 0 c 1.8517 -0.8635 7.9805 -2.1169 7.9805 -0.558 c 0 0.5964 -0.812949 1.00243 -1.2013 0.8411 c -0.488579 -0.202966 0.024093 -0.973895 0.7552 -1.396"];
      return;

    case "EL4":
      this.dp = p(7.9507, -0.556);
      this.paths = ["m 0 0 c 1.8595 -0.8279 7.9507 -2.1087 7.9507 -0.556 c 0 0.5944 -0.527104 0.73886 -0.8551 0.6141 c -0.314472 -0.119615 -0.471997 -0.760408 -0.2213 -0.9848 c 0.282758 -0.253089 0.6882 0.1643 1.0764 0.3707"];
      return;

    case "ER4":
      this.dp = p(7.5061, -1.1085);
      this.paths = ["m 0 0 c 1.8594 -0.8279 7.9507 -2.1087 7.9507 -0.556 c 0 0.5944 -0.848982 1.15961 -1.2111 0.8303 c -0.389897 -0.35457 0.0627 -0.9765 0.7665 -1.3828"];
      return;

    case "EL8":
      this.dp = p(7.951, -0.556);
      this.paths = ["m 0 0 c 1.8594 -0.8279 7.951 -2.1087 7.951 -0.556 c 0 0.5944 -0.5354 0.853533 -0.902 0.7301 c -0.29543 -0.09947 -0.434 -0.67874 -0.223 -0.9082 c 0.25699 -0.279473 0.723 0.0477 1.125 0.1781"];
      return;

    case "ER8":
      this.dp = p(7.52195, -1.09855);
      this.paths = ["m 0 0 c 1.85946 -0.8279 7.95073 -2.1087 7.95073 -0.556 c 0 0.5944 -1.0368 1.11998 -1.37394 0.7266 c -0.343253 -0.400509 0.149453 -0.931348 0.945163 -1.26915"];
      return;

    case "SE4":
      this.dp = p(7.79142, 0.039182);
      this.paths = ["m 0 0 c 1.859 -0.8279 7.959 -1.9702 7.959 -0.4171 c 0 0.594 -0.74061 0.996527 -1.18481 0.815898 c -0.30734 -0.124975 -0.45781 -0.776301 -0.19317 -0.976405 c 0.36119 -0.273115 0.8874 0.293789 1.2104 0.616789"];
      return;

    case "NEL8":
      this.dp = p(7.62178, -1.0318);
      this.paths = ["m 0 0 c 1.84486 -0.8603 7.95073 -2.1091 7.95073 -0.556 c 0 0.297 -0.308224 0.446881 -0.549913 0.515734 c -0.249802 0.07116 -0.698849 0.09796 -0.763957 -0.153488 c -0.108053 -0.417308 0.5633 -0.604246 0.98492 -0.838046"];
      return;

    case "NEL16":
      this.dp = p(7.6218, -1.03199);
      this.paths = ["m 0 0 c 1.8449 -0.86 7.9507 -2.109 7.9507 -0.556 c 0 0.297 -0.282684 0.46437 -0.51944 0.55391 c -0.254136 0.0961 -0.722666 0.17997 -0.811482 -0.0768 c -0.150684 -0.43565 0.606522 -0.6861 1.00202 -0.9531"];
      return;

    case "NER8":
      this.dp = p(7.19077, -1.18363);
      this.paths = ["m 0 0 c 1.8517 -0.8635 7.55504 -2.14056 7.9805 -0.558 c 0.15484 0.575949 -0.470199 1.05277 -0.848554 0.89313 c -0.466786 -0.196948 -0.315691 -0.4898 0.058824 -1.51876"];
      return;

    case "NER16":
      this.dp = p(7.187, -1.2054);
      this.paths = ["m 0 0 c 1.845 -0.8603 7.5503 -2.05142 7.951 -0.556 c 0.15374 0.57376 -0.13998 0.857585 -0.44597 0.813296 c -0.49381 -0.07147 -0.57603 -0.752896 -0.31803 -1.4627"];
      return;

    case "SER4":
    case "SER8":
      this.dp = p(7.98223, -0.188525);
      this.paths = ["m 0 0 c 1.8517 -0.8635 7.57198 -2.08264 7.9805 -0.558 c 0.15436 0.576078 -0.260356 1.05586 -0.674567 1.04419 c -0.376405 -0.010612 -0.786063 -0.681846 -0.558565 -0.981909 c 0.256262 -0.338003 0.857508 0.052671 1.23486 0.307198"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "NER":
      this.dp = p(6.82513, -1.27077);
      this.paths = ["m 0 0 c 1.8517 -0.8635 7.58904 -2.01896 7.9805 -0.558 c 0.15436 0.576078 -0.276564 0.825088 -0.599829 0.77609 c -0.523728 -0.079383 -0.555546 -0.620026 -0.555544 -1.48886"];
      return;

    case "E":
      this.dp = p(7.9507, -0.556);
      this.paths = ["m 0 0 c 1.8595 -0.828 7.9507 -2.109 7.9507 -0.556 c 0 0.594 -0.283817 0.78486 -0.632 0.87 c -0.305115 0.0746 -0.869394 -0.10777 -0.843151 -0.42078 c 0.04294 -0.51221 0.792151 -0.44922 1.47515 -0.44922"];
      return;

    case "SEL":
      this.dp = p(6.85073, -1.12289);
      this.paths = ["m 0 0 c 1.8595 -0.8279 7.53804 -1.98891 7.9592 -0.4171 c 0.138435 0.516647 -0.160348 0.850944 -0.4789 0.8295 c -0.551872 -0.03715 -0.629574 -0.919291 -0.629574 -1.53529"];
      return;

    case "SW":
    case "SWL":
      this.dp = p(7.146, -1.214);
      this.paths = ["m 0 0 c 1.859 -0.828 7.951 -2.109 7.951 -0.556 c 0 0.594 -0.31177 0.93732 -0.65242 0.83953 c -0.48228 -0.13845 -0.34758 -0.95953 -0.15258 -1.49753"];
      return;

    case "S":
      this.dp = p(6.73913, -1.27096);
      this.paths = ["m 0 0 c 1.8517 -0.8635 7.64527 -2.13214 7.9805 -0.558 c 0.124224 0.583319 -0.301954 0.59088 -0.561318 0.551584 c -0.473203 -0.071694 -0.680051 -0.611148 -0.680051 -1.26455"];
      return;

    case "NE":
     this.dp = p(7.5344, -1.1129);
     this.paths = ["m 0 0 c 1.8517 -0.8635 7.9805 -2.1169 7.9805 -0.558 c 0 0.5964 -1.12611 0.851848 -1.31601 0.703448 c -0.3914 -0.317 0.29873 -0.768335 0.86991 -1.25835"];
     return;

    default:
      this.dp = p(7.5344, -1.1129);
      this.paths = ["m 0 0 c 1.8517 -0.8635 7.9805 -2.1169 7.9805 -0.558 c 0 0.5964 -1.0114 0.9895 -1.2013 0.8411 c -0.3914 -0.317 0.2804 -0.7426 0.7552 -1.396"];
      return;
  }
};

WasedaMu = function() { 
  WasedaChar.call(this, "WasedaMu", "む", "ER8CR4", "ER", "ERCR4", "black", false, p(0.0, 0.5), 8); };
WasedaMu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["む"] = WasedaMu;

WasedaMu.prototype.setPaths = function() {

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_name) {
    case "WasedaSai":
      this.dp = p(3.68166, -1.13059);
      this.paths = ["m 0 0 c 2.0293 -0.8199 3.6962 -1.258 5.0456 -1.258 c 1.0861 0 2.78 0.3634 2.78 1.6051 c 0 1.46647 -3.16762 -0.848282 -4.14394 -1.47769"];
      return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "NE4":
      this.dp = p(6.21847, -1.12509);
      this.paths = ["m 0 0 c 2.0293 -0.8199 3.6962 -1.258 5.0456 -1.258 c 1.0861 0 2.78 0.3634 2.78 1.6051 c 0 0.542482 -0.995217 1.25331 -2.22656 1.12492 c -1.14789 -0.11969 -1.6839 -0.948421 -0.802385 -1.60156 c 0.653059 -0.483866 0.806752 -0.552968 1.42182 -0.995548"];
      return;

    case "ER4":
     this.dp = p(5.57654, -1.23084);
     this.paths = ["m 0 0 c 2.0293 -0.8199 3.6962 -1.258 5.0456 -1.258 c 1.0861 0 3.10138 0.40571 2.78 1.6051 c -0.2972 1.10917 -3.49759 1.46488 -4.05166 0.230814 c -0.348646 -0.776527 1.10538 -1.40621 1.80259 -1.80875"];
     return;

    case "NEL8":
      this.dp = p(5.85932, -1.19414);
      this.paths = ["m 0 0 c 2.036 -0.7814 3.682 -1.2533 5.027 -1.2533 c 1.082 0 2.797 0.3136 2.797 1.5504 c 0 1.4252 -3.9947 0.929334 -4.10017 -0.486666 c -0.0584 -0.784484 1.37449 -0.582574 2.13549 -1.00457"];
      return;

    case "EL8":
      this.dp = p(7.58856, -0.330814);
      this.paths = ["m 0 0 c 2.0216 -0.8168 3.6823 -1.2533 5.0266 -1.2533 c 1.0821 0 2.7696 0.3619 2.7696 1.599 c 0 0.566948 -1.1467 0.679876 -1.74122 0.549583 c -0.625573 -0.137098 -1.52138 -0.658821 -1.42238 -1.29154 c 0.07504 -0.479542 0.843281 -0.802665 1.32552 -0.602761 c 0.455811 0.18895 0.951936 0.460806 1.63044 0.668206"];
      return;

    case "NER8":
      this.dp = p(5.0675, -1.0771);
      this.paths = ["m 0 0 c 2.0492 -0.7459 3.7234 -1.0771 5.0675 -1.0771 c 1.0823 0 2.89146 0.437493 2.8236 1.5013 c -0.04083 0.640069 -1.20558 0.921198 -1.79991 0.680102 c -0.74431 -0.301937 -1.44109 -1.0346 -1.02369 -2.1814"];
      return;

    case "EL16":
      this.dp = p(7.53954, -0.396807);
      this.paths = ["m 0 0 c 2.0216 -0.8168 3.6823 -1.2533 5.0266 -1.2533 c 1.0821 0 2.7696 0.3619 2.7696 1.599 c 0 0.747465 -1.1467 0.679876 -1.74122 0.549583 c -0.625573 -0.137098 -1.52139 -0.658821 -1.42238 -1.29154 c 0.07504 -0.479542 0.843281 -0.802665 1.32552 -0.602761 c 0.455811 0.18895 1.17068 0.522374 1.58141 0.602213"];
      return;

    case "SER8":
      this.dp = p(7.78283, -0.018803);
      this.paths = ["m 0 0 c 2.0357 -0.7814 3.6823 -1.2533 5.0266 -1.2533 c 1.0822 0 2.7973 0.3135 2.7973 1.5506 c 0 1.0442 -1.14874 1.11866 -1.84713 1.02667 c -0.702563 -0.09254 -1.80655 -0.827439 -1.52733 -1.47874 c 0.438173 -1.02209 1.73029 -0.986527 3.33339 0.135973"];
      return;

    case "SER16":
      this.dp = p(7.77707, 0.000381);
      this.paths = ["m 0 0 c 2.0293 -0.8199 3.6962 -1.258 5.0456 -1.258 c 1.0861 0 2.78 0.3634 2.78 1.6051 c 0 1.26668 -3.65304 0.090422 -3.3579 -1.04396 c 0.28386 -1.09102 2.59777 0.302791 3.30937 0.697239"];
      return;
  }

  switch (_head) {
    case "E":
      this.dp = p(7.058, -0.7963);
      this.paths = ["m 0 0 c 2.035 -0.7814 3.682 -1.2533 5.026 -1.2533 c 1.083 0 3.0801 0.579046 2.77 1.5991 c -0.358617 1.17966 -3.55054 0.978483 -3.69068 -0.246494 c -0.116899 -1.02184 1.58968 -0.824202 2.95268 -0.895606"];
      return;
  }

  this.dp = p(3.931, -1.1421);
  this.paths = ["m 0 0 c 2.0293 -0.8199 3.6962 -1.258 5.0456 -1.258 c 1.0861 0 2.78 0.3634 2.78 1.6051 c 0 1.0482 -1.9623 0.4465 -2.6 0 c -0.5764 -0.4036 -0.9162 -0.7134 -1.2946 -1.4892"];
};

WasedaMe = function() { WasedaChar.call(this, "WasedaMe", "め", "ER16CR1", "ER", "ERCR", "black", false, p(0.0, 1.0)); };
WasedaMe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["め"] = WasedaMe;

WasedaMe.prototype.setPaths = function() {
  switch (this.getNextModel().replace(/(\D+\d+).*/, "$1")) {
    case "NEL8":
      this.dp = p(15.4183, -1.578);
      this.paths = ["m 0 0 c 3.62581 -1.109 15.7619 -2.95 15.8262 -1.107 c 0.0156 0.297 -0.343033 0.62722 -0.653104 0.68374 c -0.302834 0.0552 -0.807321 -0.093 -0.832432 -0.39981 c -0.03578 -0.43713 0.728936 -0.56193 1.07764 -0.75493"];
      return;

    case "ER8":
      this.dp = p(15.5816, -1.49181);
      this.paths = ["m 0 0 c 3.606 -1.1717 15.826 -2.9311 15.826 -1.1067 c 0.021 0.2967 -0.12762 0.690075 -0.39762 0.845002 c -0.33015 0.189438 -1.01957 0.260315 -1.13738 -0.101631 c -0.17688 -0.543392 0.76457 -0.894281 1.29057 -1.12848"];
      return;

    case "EL8":
      this.dp = p(15.8166, -0.974);
      this.paths = ["m 0 0 c 3.6061 -1.172 15.3424 -2.91305 15.8263 -1.107 c 0.0156 0.297 -0.02594 0.65592 -0.2706 0.786 c -0.311501 0.16562 -0.817441 0.0132 -1.0223 -0.274 c -0.103225 -0.14473 -0.09997 -0.41893 0.0372 -0.532 c 0.322889 -0.26617 0.8246 0.024 1.246 0.153"];
      return;

    case "SER4":
    case "SER8":
    case "SER16":
      this.dp = p(16.0013, 0.534654);
      this.paths = ["m 0 0 c 3.6262 -1.1087 13.7807 -2.15559 15.543 -1.13817 c 1.41187 0.815141 0.340677 1.93334 0.07138 2.0055 c -0.332823 0.08918 -0.76559 0.03546 -1.01337 -0.203977 c -0.178738 -0.172725 -0.357093 -0.559583 -0.172064 -0.72555 c 0.362392 -0.325057 1.16679 0.312746 1.57239 0.596848"];
      return;

    case "NER8":
      this.dp = p(15.0569, -1.64882);
      this.paths = ["m 0 0 c 3.606 -1.1717 15.349 -2.88721 15.8261 -1.1067 c 0.06839 0.255254 -0.01408 0.608116 -0.208989 0.805468 c -0.146636 0.148471 -0.439971 0.293793 -0.603961 0.164747 c -0.396328 -0.311874 -0.2172 -0.795408 0.04375 -1.51233"];
      return;
  }

  switch (this.getNextHeadType()) {
    case "E":
      this.dp = p(15.861, -0.773351);
      this.paths = ["m 0 0 c 3.60605 -1.1717 15.255 -3.23846 15.8262 -1.1067 c 0.178728 0.667021 0.02198 0.974617 -0.3407 1.1067 c -0.355167 0.129347 -1.12587 -0.202857 -0.952452 -0.615391 c 0.109359 -0.260152 0.877357 -0.157962 1.32796 -0.157962"];
      return;

    case "S":
      this.dp = p(14.6897, -1.7832);
      this.paths = ["m 0 0 c 3.60607 -1.1717 15.8262 -2.95152 15.8262 -1.1067 c 0 0.454188 -0.435749 0.70583 -0.7433 0.6132 c -0.430341 -0.129613 -0.3932 -0.8042 -0.3932 -1.2897"];
      return;

    case "SW":
      this.dp = p(14.7833, -1.69639);
      this.paths = ["m 0 0 c 3.606 -1.1717 15.3645 -2.82891 15.826 -1.1067 c 0.18468 0.68924 -0.276713 1.08335 -0.61029 0.890758 c -0.310522 -0.17928 -0.4324 -0.883706 -0.4324 -1.48045"];
      return;
  }

  this.dp = p(15.4242, -1.568);
  this.paths = ["m 0 0 c 3.606 -1.1717 15.7617 -2.9503 15.8261 -1.1067 c 0.0156 0.2967 -0.0711 0.6193 -0.2989 0.7788 c -0.2223 0.1615 -0.6803 0.276 -0.8222 0.0575 c -0.2159 -0.374 0.4335 -0.9043 0.7192 -1.2976"];
};

WasedaMo = function() { WasedaChar.call(this, "WasedaMo", "も", "ER16", "ER", "ER", "black", false, p(0.0, 1.1)); };
WasedaMo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["も"] = WasedaMo;

WasedaMo.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_headModel) {
    case "EL8":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 3.43 -1.249 12.509 -1.067 16 0"];
      return;

    case "EL16":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 3.4161 -1.2433 10.8034 -1.19989 16 0"];
      return;

    case "SW8":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 4.3601 -1.5869 17.3428 -3.68933 16 0"];
      return;

    case "SW16":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 4.3601 -1.5869 17.7542 -3.57051 16 0"];
      return;
  }

  switch (_head) {
    case "SWL":
      this.dp.set(16, 0);
      this.paths = ["m 0 0 c 4.3601 -1.5869 12.6387 -1.94063 16 0"];
      return;

    case "TSE":
      this.dp.set(16, 0);
      this.paths = ["m 0 0 c 4.3601 -1.5869 14.1162 -3.26286 16 0"];
      return;

    case "SW":
      this.dp = p(16, 0.600011);
      this.paths = ["m 0 0 c 4.3601 -1.5869 17.3681 -3.15869 16 0.600011"];
      return;

    case "S":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 4.3601 -1.5869 16 -2.14209 16 0"];
      return;

    case "SER":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 5.0166 -1.8259 17.94 -3.3601 16 0"];
      return;

    case "SWR":
      this.dp = p(16, 0);
      this.paths = ["m 0 0 c 4.3601 -1.5869 13.8852 -3.66288 16 0"];
      return;
  }

  this.dp = p(16, 0);
  this.paths = ["m 0 0 c 4.3601 -1.5869 15.326 -3.8223 16 0"];
};

WasedaRa = function() { WasedaChar.call(this, "WasedaRa", "ら", "SER8", "SER", "SER", "black", false, p(0.0, -3.5)); };
WasedaRa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ら"] = WasedaRa;

WasedaRa.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
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

  switch (tail_ + "_" + _head) {
    case "NER_":
      this.dp = p(4, 6.928);
      this.paths = ["m 0 0 c 1.9594 0 4 4.67 4 6.928"];
      return;
  }

  switch (tail_) {
    case "NER":
      this.dp = p(4, 6.9282);
      this.paths = ["m 0 0 c 1.48459 0 5.22323 4.8095 4 6.9282"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "S":
      this.dp = p(4, 6.9282);
      this.paths = ["m 0 0 c 2.858 2.0012 6.72302 6.9282 4 6.9282"];
      return;

    case "SEL":
      this.dp = p(4, 6.9283);
      this.paths = ["m 0 0 c 1.93551 1.3553 4 4.5784 4 6.9283"];
      return;
  }

  this.dp = p(4, 6.9282);
  this.paths = ["m 0 0 c 2.26387 1.5852 5.22323 4.8095 4 6.9282"];
};

WasedaRi = function() { WasedaChar.call(this, "WasedaRi", "り", "SER8CR1", "SER", "CR", "black", false, p(0.0, -3.2)); };
WasedaRi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["り"] = WasedaRi;

WasedaRi.prototype.setPaths = function() {
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

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  switch (tail_ + "_" + _model) {
    case "NER_SE25F":
      this.dp.set(4.07613, 6.31624);
      this.paths = ["m 0 0 c 2.30893 -2e-06 4.3722 3.7473 4.3371 5.7555 c 0 0.758139 -1.03917 1.01813 -1.60641 0.573867 c -0.276052 -0.216203 -0.640894 -0.64424 -0.381768 -0.88047 c 0.388404 -0.354078 1.06487 0.403573 1.72721 0.867347"];
      return;
  }

  switch (tail_ + "_" + _head) {
    case "NER_E":
      this.dp = p(4.74993, 4.45599);
      this.paths = ["m 0 0 c 2.30893 0 4.86122 3.14149 4.82622 5.14229 c 0 1.0622 -1.2807 0.2697 -1.3431 -0.1745 c -0.0722 -0.5135 0.6411 -0.5118 1.2668 -0.5118"];
      return;
  }

  switch (tail_) {
    case "NER":
      this.dp = p(4.26922, 5.11406);
      this.paths = ["m 0 0 c 2.30893 0 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -1.49407 0.757566 -0.9294 0.1639 c 0.278193 -0.292477 0.569933 -0.569251 0.861524 -0.805337"];
      return;
  }

  switch (_name) {
    case "WasedaSai":
    case "WasedaSei":
     this.dp = p(4.26922, 5.11406);
     this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 0.889266 -1.2735 0.177279 -1.14164 -0.31482 c 0.101743 -0.379711 0.678779 -0.326619 1.07376 -0.326619"];
     return;
  }

  switch (_headModel) {
    case "ER16":
      this.dp = p(4.26922, 5.11406);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -1.02362 0.757045 -1.12454 0.380395 c -0.126976 -0.47388 0.592677 -0.863164 1.05666 -1.02183"];
      return;

    case "ER4":
      this.dp = p(4.26922, 5.11406);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -0.813 0.847536 -1.01001 0.494924 c -0.239291 -0.428281 0.45231 -0.853557 0.942133 -1.13636"];
      return;

    case "NER16":
      this.dp = p(4.05635, 4.45241);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -0.916232 1.0211 -0.846498 0.351291 c 0.041798 -0.401481 0.247739 -0.780683 0.565744 -1.65438"];
      return;

    case "NEL8":
      this.dp = p(4.18661, 4.86344);
      this.paths = ["m 0 0 c 1.8842 1.3193 4.34324 3.76703 4.3209 5.734 c -0.01206 1.06203 -1.22739 0.487436 -1.38015 0.053127 c -0.17154 -0.487687 0.470986 -0.494167 1.24586 -0.923691"];
      return;

    case "EL4":
      this.dp = p(4.26922, 5.11406);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -0.788861 0.445342 -0.9294 0.1639 c -0.17562 -0.351695 -0.31574 -1.4313 0.861522 -0.805338"];
      return;

    case "SER8":
      this.dp = p(4.26922, 5.11406);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 0.578488 -0.503755 0.284314 -0.70966 0.121726 c -0.204337 -0.161349 -0.368526 -0.532355 -0.327092 -0.709292 c 0.073749 -0.314936 0.617545 -0.299879 0.968872 -0.053874"];
      return;

    case "NER8":
      this.dp = p(4.02333, 4.37523);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -0.920656 0.91403 -0.866136 0.32206 c 0.050819 -0.551787 0.427618 -1.35958 0.552366 -1.70233"];
      return;

    case "EL8":
     this.dp = p(4.3371, 5.7555);
     this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 0.629014 -0.820516 0.570684 -1.10833 0.493344 c -0.386346 -0.103816 -0.646391 -0.605999 -0.493315 -0.879859 c 0.190591 -0.340975 1.19462 0.25426 1.60165 0.386515"];
     return;

    case "ER8":
      this.dp = p(4.26922, 5.11406);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -0.965287 0.69525 -1.1623 0.342638 c -0.239291 -0.428281 0.610463 -0.79989 1.09442 -0.984078"];
      return;
  }

  switch (_head) {
    case "SW":
      this.dp = p(3.9643, 4.24556);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -1.1744 0.945736 -0.9294 0.1639 c 0.1484 -0.473575 0.460045 -1.40855 0.556605 -1.67384"];
      return;

    case "E":
      this.dp = p(4.2446, 5.0477);
      this.paths = ["m 0 0 c 1.907 1.2863 4.3559 3.7332 4.3209 5.734 c 0 1.0622 -1.2807 0.2697 -1.3431 -0.1745 c -0.0722 -0.5135 0.6411 -0.5118 1.2668 -0.5118"];
      return;

    case "S":
      this.dp = p(3.73316, 6.5136);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 0.885535 -0.931169 0.86559 -1.25532 0.638283 c -0.1279 -0.089688 -0.317398 -0.298154 -0.198748 -0.74096 c 0.096731 -0.361007 0.819481 -0.679754 0.852956 0.036744 c 0.013262 0.283862 0.011014 0.354777 -0.00283 0.824037"];
      return;

    case "SE":
      this.dp = p(4.07614, 6.31625);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 0.758139 -1.03917 1.01813 -1.60641 0.573867 c -0.276052 -0.216203 -0.447014 -0.88659 -0.187888 -1.12282 c 0.388404 -0.354078 1.09531 0.67168 1.53333 1.1097"];
      return;

    case "SEL":
      this.dp.set(3.94177, 6.46258);
      this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -1.38576 0.935309 -1.44165 0.220075 c -0.021318 -0.272797 0.381221 -0.847259 0.656594 -0.774603 c 0.356053 0.093944 0.38973 0.828684 0.38973 1.26161"];
      return;
  }

  this.dp = p(4.26922, 5.11406);
  this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -1.49407 0.757566 -0.9294 0.1639 c 0.278193 -0.292477 0.569933 -0.569251 0.861524 -0.805337"];
};

WasedaRu = function() { WasedaChar.call(this, "WasedaRu", "る", "SER8CR4", "SER", "SERCR4", "black", false, p(0.0, -3.0)); };
WasedaRu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["る"] = WasedaRu;

WasedaRu.prototype.setPaths = function() {
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

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "NER_SW":
      this.dp.set(3.38305, 1.70888);
      this.paths = ["m 0 0 c 2.17128 0 6.05475 3.55034 4.93217 5.49471 c -0.364356 0.631082 -0.71904 0.226641 -0.902197 -0.163301 c -0.359308 -0.764966 -0.646917 -3.02889 -0.646917 -3.62253"];
      return;

    case "SE_SW":
      this.dp.set(3.79001, 1.38831);
      this.paths = ["m 0 0 c 3.33417 0 6.6838 3.49454 5.46719 5.09093 c -0.533571 0.700131 -1.00432 0.767395 -1.18587 0.147634 c -0.18284 -0.624155 -0.491311 -3.1851 -0.491311 -3.85025"];
      return;
  }

  switch (tail_) {
    case "SE":
      this.dp = p(4.38361, 2.86696);
      this.paths = ["m 0 0 c 3.33417 0 5.735 3.9833 4.5184 5.5797 c -0.9554 1.2536 -2.1538 0.6153 -1.8184 -0.5999 c 0.2473 -0.8959 1.28011 -1.66464 1.68361 -2.11284"];
      return;

    case "NER":
      this.dp = p(3.69453, 3.27192);
      this.paths = ["m 0 0 c 2.17128 0 5.31743 4.52484 3.70052 6.37486 c -0.409997 0.469106 -2.06292 0.501706 -1.72752 -0.713494 c 0.2473 -0.8959 1.31803 -1.94124 1.72153 -2.38944"];
      return;
  }

  switch (_name) {
    case "WasedaSai":
    case "WasedaSei":
      this.dp = p(3.19196, 0.397082);
      this.paths = ["m 0 0 c 1.97931 0 8.87478 1.21251 7.25787 3.06253 c -0.409997 0.469106 -0.90888 0.110789 -1.85151 -0.630835 c -0.70052 -0.551144 -1.64734 -1.60461 -2.21441 -2.03462"];
      return;
  }

  switch (_headModel) {
    case "NER16":
      this.dp.set(3.16149, 2.96223);
      this.paths = ["m 0 0 c 1.907 1.2863 5.31743 4.52484 3.70052 6.37486 c -0.409997 0.469106 -1.55947 0.665376 -1.37245 -0.574554 c 0.138644 -0.919006 0.492416 -1.90118 0.833426 -2.83807"];
      return;

    case "EL25":
      this.dp.set(3.87318, 4.16129);
      this.paths = ["m 0 0 c 1.907 1.2863 5.31743 4.52484 3.70052 6.37486 c -0.845457 0.967346 -2.79919 -1.17508 -2.41253 -2.19003 c 0.306796 -0.805306 1.61081 -0.607711 2.58519 -0.02354"];
      return;

    case "EL16":
      this.dp.set(3.87318, 4.16129);
      this.paths = ["m 0 0 c 1.907 1.2863 5.31743 4.52484 3.70052 6.37486 c -0.845457 0.967346 -2.79919 -1.17508 -2.41253 -2.19003 c 0.306796 -0.805306 1.588 -0.253706 2.58519 -0.02354"];
      return;

    case "EL4":
      this.dp.set(3.87318, 4.16129);
      this.paths = ["m 0 0 c 1.907 1.2863 5.31743 4.52484 3.70052 6.37486 c -0.845457 0.967346 -2.79919 -1.17508 -2.41253 -2.19003 c 0.306796 -0.805306 1.68061 -0.504516 2.58519 -0.02354"];
      return;

    case "ER4":
      this.dp = p(3.37842, 3.24328);
      this.paths = ["m 0 0 c 1.907 1.2863 5.4379 4.63748 3.70052 6.37486 c -1.01508 1.01508 -2.22967 0.424744 -2.20866 -0.757836 c 0.010396 -0.58508 0.688792 -1.68221 1.88656 -2.37374"];
      return;

    case "ER8":
      this.dp = p(3.58729, 3.76872);
      this.paths = ["m 0 0 c 1.907 1.2863 5.34852 4.55248 3.70052 6.37486 c -0.466277 0.515614 -2.23494 0.354268 -1.89954 -0.860932 c 0.2473 -0.8959 1.2716 -1.44804 1.7863 -1.7452"];
      return;

    case "NEL8":
      this.dp = p(3.29696, 2.96582);
      this.paths = ["m 0 0 c 1.9001 1.2816 4.5082 3.6458 4.4038 5.6367 c 0 0.669928 -0.47239 0.692173 -0.826277 0.66995 c -1.08874 -0.06837 -2.45349 -1.28859 -2.26425 -2.36293 c 0.127887 -0.726031 0.809102 -0.326806 1.98368 -0.977897"];
      return;

    case "SER4":
    case "SER8":
      this.dp = p(3.60834, 3.55462);
      this.paths = ["m 0 0 c 1.907 1.2863 5.67334 4.9103 3.70052 6.37486 c -0.936631 0.695323 -2.79171 -1.46294 -2.38861 -2.5576 c 0.266244 -0.723003 1.61509 -0.739728 2.29643 -0.262642"];
      return;

    case "NER8":
      this.dp = p(3.13979, 2.93314);
      this.paths = ["m 0 0 c 1.907 1.2863 5.41833 4.69157 3.82555 6.5624 c -0.671437 0.788643 -1.49348 0.601862 -1.60154 -0.502793 c -0.085029 -0.869232 0.68281 -2.48637 0.915781 -3.12646"];
      return;

    case "EL8":
      this.dp = p(3.87318, 4.16129);
      this.paths = ["m 0 0 c 1.907 1.2863 5.31743 4.52484 3.70052 6.37486 c -0.845457 0.967346 -2.79919 -1.17508 -2.41253 -2.19003 c 0.306796 -0.805306 1.62753 -0.334717 2.58519 -0.023542"];
      return;

    case "ER16":
      this.dp = p(3.83684, 4.07871);
      this.paths = ["m 0 0 c 1.907 1.2863 5.31743 4.52484 3.70052 6.37486 c -0.612157 0.700411 -1.96689 0.065646 -2.08768 -0.653468 c -0.152663 -0.908894 1.54404 -1.42174 2.224 -1.64268"];
      return;
  }

  switch (_head) {
    case "NE":
      this.dp = p(3.73588, 3.87001);
      this.paths = ["m 0 0 c 1.907 1.2863 5.31743 4.52484 3.70052 6.37486 c -1.38942 1.58973 -3.26164 -0.030442 -1.42872 -1.40202 c 0.678784 -0.507936 0.91339 -0.698992 1.46408 -1.10283"];
      return;

    case "SW":
      this.dp = p(3.06667, 2.4472);
      this.paths = ["m 0 0 c 1.907 1.2863 5.49441 3.97639 4.37183 5.92076 c -0.364356 0.631082 -0.798349 -0.064161 -0.981506 -0.454103 c -0.359308 -0.764966 -0.4709 -2.46992 -0.323653 -3.01946"];
      return;

    case "S":
      this.dp = p(2.74705, 1.93815);
      this.paths = ["m 0 0 c 1.907 1.2863 5.08783 3.1232 4.5758 5.43558 c -0.048904 0.220856 -0.369003 0.391596 -0.607193 0.36058 c -0.037157 -0.00484 -0.072321 -0.014587 -0.10415 -0.02982 c -1.129 -0.540336 -1.11741 -2.56457 -1.11741 -3.82819"];
      return;

    case "SE":
      this.dp = p(3.65787, 3.72405);
      this.paths = ["m 0 0 c 1.907 1.2863 5.31798 4.52532 3.70052 6.37486 c -0.862141 0.985843 -4.34105 -2.04338 -3.5361 -3.49095 c 0.582058 -1.04673 2.6115 -0.041788 3.49344 0.840145"];
      return;

    case "E":
      this.dp = p(3.91611, 4.26581);
      this.paths = ["m 0 0 c 1.907 1.2863 5.31743 4.52484 3.70052 6.37486 c -0.638946 0.731063 -2.64682 -0.179509 -2.31142 -1.39471 c 0.2473 -0.8959 1.83149 -0.714344 2.52701 -0.714344"];
      return;
  }

  this.dp = p(3.53446, 3.51231);
  this.paths = ["m 0 0 c 1.907 1.2863 5.31743 4.52484 3.70052 6.37486 c -0.409997 0.469106 -2.06292 0.501706 -1.72752 -0.713494 c 0.2473 -0.8959 1.15796 -1.70086 1.56146 -2.14906"];
};

WasedaRe = function() { WasedaChar.call(this, "WasedaRe", "れ", "SER16CR1", "SER", "SERCR", "black", false, p(0.0, -6.2)); };
WasedaRe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["れ"] = WasedaRe;

WasedaRe.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
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

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  switch (_headModel) {
    case "SER16":
      this.dp.set(8.8464, 11.1265);
      this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.0327 -1.6563 -0.03401 -1.30082 -0.826353 c 0.171015 -0.381177 0.797585 -0.118766 1.24552 0.139853"];
      return;

    case "SER4":
    case "SER8":
      this.dp.set(8.8939, 11.4947);
      this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.0327 -1.76541 0.0515 -1.18519 -0.532228 c 0.274917 -0.276581 0.798751 -0.04148 1.17738 0.213918"];
      return;

    case "NEL8":
      this.dp = p(8.8464, 11.1265);
      this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.24593 -1.94302 0.348467 -1.2989 -0.0462 c 0.332516 -0.20374 0.829906 -0.372078 1.2436 -0.640301"];
      return;

    case "EL8":
      this.dp = p(8.89398, 11.496);
      this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.0327 -1.30431 0.226241 -1.06273 -0.449185 c 0.119361 -0.333718 0.588256 -0.09545 1.05501 0.132213"];
      return;

    case "EL4":
      this.dp = p(8.8464, 11.1265);
      this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.0327 -0.759845 0.429188 -0.9006 0.1588 c -0.183997 -0.353455 -0.331962 -1.47127 0.8453 -0.8453"];
      return;

    case "ER8":
      this.dp = p(8.8464, 11.1265);
      this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.0327 -0.957802 0.515937 -1.11044 0.173789 c -0.18489 -0.41443 0.78744 -0.752128 1.05514 -0.860289"];
      return;

    case "EL16":
      this.dp = p(8.8464, 11.1265);
      this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.0327 -0.759845 0.42919 -0.9006 0.1588 c -0.183997 -0.35345 -0.510431 -1.15822 0.8453 -0.8453"];
      return;
  }

  switch (_head) {
    case "E":
      this.dp = p(9.05159, 11.0727);
      this.paths = ["m 0 0 c 3.8463 2.045 9.1956 8.082 9.0724 11.612 c 0 1.029 -1.3469 0.231 -1.3609 -0.169 c -0.0156 -0.447 0.832787 -0.37028 1.34009 -0.37028"];
      return;

    case "SEL":
      this.dp = p(8.6473, 12.255);
      this.paths = ["m 0 0 c 3.8464 2.045 8.9918 8.239 8.8686 11.769 c 0 0.539 -0.732392 0.92012 -1.0492 0.656 c -0.344879 -0.28753 0.04836 -1.2702 0.497 -1.252 c 0.376846 0.0153 0.3309 0.603 0.3309 1.082"];
      return;

    case "NE":
      this.dp = p(8.8464, 11.1265);
      this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.0327 -1.64861 0.627936 -1.08877 0.06471 c 0.274919 -0.27658 0.69433 -0.547394 1.03347 -0.751214"];
      return;

    case "SW":
      this.dp = p(8.65035, 10.2243);
      this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.0327 -0.787121 1.02596 -0.787285 0.414486 c -0.000183 -0.680297 0.399557 -1.63946 0.535931 -2.00321"];
      return;
  }

  this.dp = p(8.8464, 11.1265);
  this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.0327 -1.46044 0.722022 -0.9006 0.1588 c 0.274919 -0.27658 0.558253 -0.56182 0.8453 -0.8453"];
};

WasedaRo = function() { WasedaChar.call(this, "WasedaRo", "ろ", "SER16", "SER", "SER", "black", false, p(0.0, -6.9)); };
WasedaRo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ろ"] = WasedaRo;

WasedaRo.prototype.setPaths = function() {
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
    case "WasedaAi":
      this.dp = p(8.77778, 13.8564);
      this.paths = ["m 0 0 c 4.6323 2.6745 8.77778 10.711 8.77778 13.8564"];
      return;
  }

  //switch (_model) {}

  switch (_head) {
    case "BNE":
      this.dp.set(8.99756, 13.2425);
      this.paths = ["m 0 0 c 4.6323 2.6745 8.99756 8.95485 8.99756 13.2425"];
      return;

    case "S":
      this.dp = p(8, 13.856);
      this.paths = ["m 0 0 c 6.564 3.79 11.0816 13.856 8 13.856"];
      return;

    case "SW":
     this.dp = p(8, 13.8564);
     this.paths = ["m 0 0 c 4.6323 2.6745 10.0981 10.2225 8 13.8564"];
     return;
  }

  this.dp = p(8, 13.8564);
  this.paths = ["m 0 0 c 4.6323 2.6745 11.0125 11.3286 8 13.8564"];
};



WasedaKai = function() { WasedaChar.call(this, "WasedaKai", "かい", "E4", "E", "E", "black"); };
WasedaKai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["かい"] = WasedaKai;

WasedaKai.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "E": 
    case "SER":
      this.dp = p(3.5076, 0.2);
      this.paths = ["m 0 0 l 4 0 l -0.4024 0.2"];
      break;

    default:
      this.dp = p(4, 0);
      this.paths = ["m 0 0 l 4 0"];
      break;
  }
};

WasedaTo = function() { WasedaChar.call(this, "WasedaTo", "と", "NE16", "NE", "NE", "black", false, p(0.0, 6.1)); };
WasedaTo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["と"] = WasedaTo;
WasedaTo.prototype.normal = function() {
  this.headType = "NE";
  this.tailType = "NE";
  this.model = "NE16";
};
WasedaTo.prototype.reverse = function() {
  this.headType = "SW";
  this.tailType = "SW";
  this.model = "SW16";
};
WasedaTo.prototype.filterReverseTail = function(tail) {
  if (this.getPrevTailType().endsWith("F")) return "R";
  return tail.replace(/^(?:SELCL4|E|EP|ER|ER4|ERCR|ERCR4|EL|ECL|NELCL|NEL|NE|SELCL|NEF|ELP|ELCLP|NELP|NELCL4|SEL|NW|ELCL|NWF|ER_P|ECL4|NERCR|TO_HENKI)$/, "R");
};
WasedaTo.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.filterReverseTail(this.getPrevTailType());
  //const _name = this.getNextName();
  const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaSei":
      this.dp = p(13.2646, -8.94709);
      this.paths = ["m 0 0 l 13.2646 -8.94709"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "SWR8ONR4":
    case "SL8ONEL4":
    case "SWR8CR4":
    case "SWR8CR1":
      this.dp = p(13.2646, -8.94709);
      this.paths = ["m 0 0 l 13.2646 -8.94709"];
      this.normal();
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "R_SW":
     this.dp = p(-6.13821, 13.7192);
     this.paths = ["m 0 0 l -6.76188 14.5009 l 0.623668 -0.781689"];
     this.reverse();
     return;
  }
  switch (tail_) {
    case "R":
      this.dp = p(-5.4723, 15.035);
      this.paths = ["m 0 0 l -5.4723 15.035"];
      this.reverse();
      return;
  }

  //switch (_name) { }

  //switch (_model) {}

  switch (_head) {
    //case "SW":
    case "SWR":
      this.dp = p(13.2646, -8.94709);
      this.paths = ["m 0 0 l 13.2646 -8.94709"];
      this.normal();
      return;
  }

  this.dp = p(10.2846, -12.2567);
  this.paths = ["m 0 0 l 10.2846 -12.2567"];
  this.normal();
};

WasedaToHenki = function() { WasedaChar.call(this, "WasedaToHenki", "と", "SW16", "SW", "SW", "black", false, p(0.0, -6.1)); };
WasedaToHenki.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["とｈ"] = WasedaToHenki;
WasedaToHenki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) { }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "SW":
     this.dp = p(-6.13821, 13.7192);
     this.paths = ["m 0 0 l -6.76188 14.5009 l 0.623668 -0.781689"];
     return;
  }

  this.dp = p(-6.76188, 14.5009);
  this.paths = ["m 0 0 l -6.76188 14.5009"];
};


WasedaTei = function() { WasedaChar.call(this, "WasedaTei", "てい", "SW4CR1", "SW", "CR", "black", false, p(1.7, -1.8)); };
WasedaTei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["てい"] = WasedaTei;
WasedaChar.dict["です"] = WasedaTei;
WasedaChar.dict["てー"] = WasedaTei;

WasedaTei.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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
    case "WasedaSai":
    case "WasedaSei":
     this.dp = p(-0.895577, 2.69429);
     this.paths = ["m 0 0 c -0.312294 0.66971 -0.51629 1.45836 -1.10117 3.37142 c -0.15815 0.5902 -1.14421 0.190548 -0.814726 -0.380151 c 0.17532 -0.2918 0.619725 -0.296978 1.02032 -0.296978"];
     return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "SE3":
    case "SE4":
      this.dp = p(-0.914721, 2.79116);
      this.paths = ["m 0 0 c -0.231247 0.684462 -0.488239 1.46115 -1.10117 3.37142 c -0.09592 0.35798 -0.622157 0.000476 -0.741532 -0.445038 c -0.097752 -0.364816 0.36149 -0.656149 0.632625 -0.406821 l 0.295356 0.271602"];
      return;

    case "EL16":
      this.dp = p(-0.947424, 2.86587);
      this.paths = ["m 0 0 c -0.243546 0.728041 -0.436664 1.44331 -1.10117 3.37142 c -0.15815 0.5902 -1.20243 0.056788 -0.872945 -0.513912 c 0.17532 -0.2918 0.483816 -0.116946 1.02669 0.00836"];
      return;

    case "SER4":
    case "SER8":
     this.dp = p(-0.869968, 2.60938);
     this.paths = ["m 0 0 c -0.312294 0.66971 -0.51629 1.45836 -1.10117 3.37142 c -0.15815 0.5902 -0.808875 -0.17223 -0.670662 -0.720506 c 0.072752 -0.2886 0.444453 -0.361986 0.901864 -0.041536"];
     return;

    case "EL4":
     this.dp = p(-0.957833, 2.90025);
     this.paths = ["m 0 0 c -0.312294 0.66971 -0.51629 1.45836 -1.10117 3.37142 c -0.15815 0.5902 -1.19367 -0.02736 -0.864187 -0.59806 c 0.17532 -0.291799 0.515342 -0.157271 1.00752 0.126891"];
     return;

    case "EL8":
     this.dp = p(-0.929622, 2.80701);
     this.paths = ["m 0 0 c -0.312294 0.66971 -0.51629 1.45836 -1.10117 3.37142 c -0.15815 0.5902 -0.95955 -0.15061 -0.824753 -0.65368 c 0.083026 -0.309857 0.587611 -0.110073 0.996301 0.089269"];
     return;
  }

  switch (_head) {
    case "SWR":
      this.dp = p(-1.25684, 3.60256);
      this.paths = ["m 0 0 c -0.122896 0.333597 -0.484321 1.49283 -1.10117 3.37142 c -0.15815 0.5902 -1.39748 0.343475 -1.15235 -0.403008 c 0.067768 -0.206371 0.421586 -0.731884 0.74497 -0.45001 c 0.125588 0.109467 0.251709 0.561167 0.251709 1.08416"];
      return;

    case "SW":
     this.dp = p(-1.25157, 3.63128);
     this.paths = ["m 0 0 c -0.312294 0.66971 -0.51629 1.45836 -1.10117 3.37142 c -0.199697 0.630314 -0.958924 0.223651 -0.958924 -0.317933 c 0 -0.514576 0.651141 -0.809813 0.918082 -0.542872 c 0.277434 0.277434 0.00884 0.678774 -0.109561 1.12067"];
     return;

    case "E":
     this.dp = p(-0.87937, 2.64056);
     this.paths = ["m 0 0 c -0.312294 0.66971 -0.51629 1.45836 -1.10117 3.37142 c -0.15815 0.5902 -1.10595 0.082832 -0.776462 -0.487868 c 0.158592 -0.27469 0.588182 -0.242989 0.998262 -0.242989"];
     return;
  }

  this.dp = p(-0.831949, 2.41612);
  this.paths = ["m 0 0 c -0.312294 0.66971 -0.51629 1.45836 -1.10117 3.37142 c -0.15815 0.5902 -1.09575 0.184804 -0.766265 -0.385896 c 0.17532 -0.2918 0.635882 -0.462331 1.03548 -0.569404"];
};

WasedaTeJoshi = function() { WasedaChar.call(this, "WasedaTeJoshi", "〜て", "SW4NW1|SW4CR1", "SW", "CR", "black", false, p(2.0, -1.9)); };
WasedaTeJoshi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["〜て"] = WasedaTeJoshi;
WasedaChar.dict["テ"] = WasedaTeJoshi;

WasedaTeJoshi.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (tail_) {
    case "NEL":
      this.dp = p(-1.1263, 3.0348);
      this.paths = ["m 0 0 l -0.6983 3.9385 c -0.1883 -0.4396 -0.428 -0.9037 -0.428 -0.9037"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "ER8":
      this.dp = p(-0.818867, 2.49583);
      this.paths = ["m 0 0 c -0.277551 0.665215 -0.707473 2.19577 -1.10117 3.37142 c -0.296738 0.886116 -1.05626 0.752726 -0.934914 0.254343 c 0.105034 -0.431391 0.730349 -0.860052 1.21722 -1.12994"];
      return;

    case "EL16":
      this.dp = p(-0.947424, 2.86587);
      this.paths = ["m 0 0 c -0.243546 0.728041 -0.436664 1.44331 -1.10117 3.37142 c -0.15815 0.5902 -1.20243 0.056788 -0.872945 -0.513912 c 0.17532 -0.2918 0.483816 -0.116946 1.02669 0.00836"];
      return;

    case "SER4":
    case "SER8":
     this.dp = p(-0.869968, 2.60938);
     this.paths = ["m 0 0 c -0.312294 0.66971 -0.51629 1.45836 -1.10117 3.37142 c -0.15815 0.5902 -0.808875 -0.17223 -0.670662 -0.720506 c 0.072752 -0.2886 0.444453 -0.361986 0.901864 -0.041536"];
     return;

    case "EL4":
     this.dp = p(-0.957833, 2.90025);
     this.paths = ["m 0 0 c -0.312294 0.66971 -0.51629 1.45836 -1.10117 3.37142 c -0.15815 0.5902 -1.19367 -0.02736 -0.864187 -0.59806 c 0.17532 -0.291799 0.515342 -0.157271 1.00752 0.126891"];
     return;

    case "EL8":
     this.dp = p(-0.929622, 2.80701);
     this.paths = ["m 0 0 c -0.312294 0.66971 -0.51629 1.45836 -1.10117 3.37142 c -0.15815 0.5902 -0.95955 -0.15061 -0.824753 -0.65368 c 0.083026 -0.309857 0.587611 -0.110073 0.996301 0.089269"];
     return;
  }

  switch (_head) {
    case "SEL":
      this.dp = p(-1.15559, 3.49844);
      this.paths = ["m 0 0 c -0.277551 0.665215 -0.707473 2.19577 -1.10117 3.37142 c -0.296738 0.886116 -0.903111 0.261654 -0.935397 -0.091877 c -0.028512 -0.312216 0.364959 -0.884598 0.64682 -0.829929 c 0.299798 0.058148 0.234156 0.467121 0.234156 1.04882"];
      return;
  }

  this.dp = p(-2.00786, 2.36219);
  this.paths = ["m 0 0 l -1.3681 3.7587 c -0.10953 -0.465502 -0.221256 -0.931004 -0.639765 -1.39651"];
};

WasedaMono = function() { WasedaChar.call(this, "WasedaMono", "もの", "ER16SWR4", "ER", "SWR", "black", false, p(0.0, -0.4)); };
WasedaMono.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["もの"] = WasedaMono;
WasedaChar.dict["物"] = WasedaMono;
WasedaChar.dict["者"] = WasedaMono;

WasedaMono.prototype.setPaths = function() {
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
      this.dp = p(12.4988, 2.77668);
      this.paths = ["m 0 0 c 4.36015 -1.587 15.0808 -3.43036 16 0 c 0.384743 1.43588 -2.71173 3.23246 -3.50116 2.77668"];
      return;
  }

  this.dp = p(13.1716, 2.82843);
  this.paths = ["m 0 0 c 4.36015 -1.587 15.0808 -3.43036 16 0 c 0.384743 1.43588 -2.06328 2.62341 -2.82843 2.82843"];
};

WasedaShorai = function() { WasedaChar.call(this, "WasedaShorai", "将来", "E4GS4", "E", "S", "black", false, p(0.0, -2.0)); };
WasedaShorai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["将来"] = WasedaShorai;

WasedaShorai.prototype.setPaths = function() {
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

  this.dp = p(2, 4);
  this.paths = ["m 0 0 h 4", "m 2 0 v 4"];
};

WasedaNoJoshi = function() { WasedaChar.call(this, "WasedaNoJoshi", "〜の", "EL8NWL4", "EL", "NWL", "black", false, p(0.0, 0.1)); };
WasedaNoJoshi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["〜の"] = WasedaNoJoshi;
WasedaChar.dict["乃"] = WasedaNoJoshi;
WasedaChar.dict["ノ"] = WasedaNoJoshi;
WasedaNoJoshi.prototype.loop = function() {
  this.headType = "EL";
  this.tailType = "ELCL4";
  this.model = "EL8CL4";
};
WasedaNoJoshi.prototype.setPaths = function() {
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
      this.dp = p(4.34089, 1.29313);
      this.paths = ["m 0 0 c 1.80519 0.8805 7.53695 2.62616 8.00001 0 c 0.224917 -1.27558 -3.64618 -3.12103 -3.65142 -1.329 l -0.0077 2.62213"];
      this.loop();
      return;

    case "E":
      this.dp = p(4.34859, -1.65935);
      this.paths = ["m 0 0 c 1.80519 0.8805 7.36342 2.29146 8.00001 0 c 0.318932 -1.14803 -2.15431 -1.65935 -3.65142 -1.65935"];
      return;

    case "SEL":
      this.dp = p(4.34859, 0.8628);
      this.paths = ["m 0 0 c 2.17652 0.7072 7.47292 1.8555 7.9701 0 c 0.308342 -1.15075 -0.523314 -1.88768 -1.29659 -1.92735 c -1.20902 -0.062018 -1.94196 1.36092 -2.32492 2.79015"];
      this.loop();
      return;

    case "SW":
      this.dp = p(4.4742, 0.988213);
      this.paths = ["m 0 0 c 2.17652 0.7072 7.39154 1.95709 7.9701 0 c 0.63838 -2.15946 -1.94012 -2.9497 -2.58118 -1.40814 c -0.217853 0.523873 -0.584299 1.48855 -0.914725 2.39635"];
      this.loop();
      return;
  }

  this.dp.set(4.37113, -1.71217);
  this.paths = ["m 0 0 c 2.04073 0.6631 7.71449 2.20603 8.07352 -0.4656 c 0.173435 -1.2906 -2.02021 -1.69731 -3.70239 -1.24657"];
};

WasedaMoJoshi = function() { WasedaChar.call(this, "WasedaMoJoshi", "〜も", "ER8SWR4", "ER", "SWR", "black", false, p(0.0, -0.6)); };
WasedaMoJoshi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["〜も"] = WasedaMoJoshi;
WasedaChar.dict["モ"] = WasedaMoJoshi;
WasedaChar.dict["思"] = [WasedaO, WasedaMoJoshi];

WasedaMoJoshi.prototype.setPaths = function() {
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

  this.dp = p(6.3212, 2.3428);
  this.paths = ["m 0 0 c 2.5456 -1.4111 7.48695 -1.60727 7.9924 0.2791 c 0.257836 0.962255 -1.01556 1.92435 -1.6712 2.0637"];
};

WasedaKoto = function() { WasedaChar.call(this, "WasedaKoto", "こと", "S8", "S", "S", "black", false, p(0.0, -4.0)); };
WasedaKoto.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["こと"] = WasedaKoto;
WasedaChar.dict["事"] = WasedaKoto;

WasedaKoto.prototype.setPaths = function() {
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
    case "SEL":
      this.dp = p(0.314892, 7.53058);
      this.paths = ["m 0 0 v 8 l 0.314892 -0.469422"];
      return;
  }

  this.dp = p(0, 8);
  this.paths = ["m 0 0 v 8"];
};

WasedaAme = function() { WasedaChar.call(this, "WasedaAme", "あめ", "EL4TSE4", "EL", "SE", "black", false, p(0.0, 0.0)); };
WasedaAme.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["あめ"] = WasedaAme;
WasedaChar.dict["雨"] = WasedaAme;

WasedaAme.prototype.setPaths = function() {
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

  this.dp = p(4.75, 1.29904);
  this.paths = ["m 0 0 c 1.0482 0.5573 2.9748 0.5919 4 0", "m 3.25 -1.29904 l 1.5 2.59807"];
};

WasedaFu = function() { WasedaChar.call(this, "WasedaFu", "フ", "NE4F", "NE", "NEF", "black", false, p(0.0, 1.5)); };
WasedaFu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["フ"] = WasedaFu;

WasedaFu.prototype.setPaths = function() {
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

  this.dp = p(3.23719, -2.35196).pmove(2, -36);
  this.paths = ["m 0 0 l 3.23719 -2.35196"];

  //this.dp = p(5.19615, -2.9);
  //this.paths = ["m 0 0 l 3.4641 -2"];
};

WasedaSatsu = function() { WasedaChar.call(this, "WasedaSatsu", "さつ", "CL1NEL8", "CL", "NEL", "black", false, p(1.2, 2.1)); };
WasedaSatsu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["さつ"] = WasedaSatsu;

WasedaSatsu.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaShi":
      this.dp = p(5.6479 - 1.7, -5.0854 + 0.9);
      this.paths = ["m-1.7,0.9 c 2.01641 -1.1642 5.6479 -2.7837 5.6479 -5.0854"];
      return;
  }

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

  this.dp = p(4.77813, -4.60065);
  this.paths = ["m 0 0 c 0 -0.643115 -0.526286 -0.641808 -0.842072 -0.536627 c -0.273325 0.091037 -0.495096 0.592477 -0.30477 0.808741 c 0.259566 0.294943 0.802626 -0.083512 1.14684 -0.272114 c 2.04111 -1.11836 4.77813 -2.60242 4.77813 -4.60065"];
};

WasedaSuru = function() {
  WasedaChar.call(this, "WasedaSuru", "する", "P", "P", "P", "black", true, p(0.0, -0.1));
  this.thickness = 0.6;
};
WasedaSuru.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["する"] = WasedaSuru;
WasedaChar.dict["すれば"] = [WasedaSuru, WasedaHo];

WasedaSuru.prototype.setPaths = function() {
  this.pdp = pp(3, 45);

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  if (_head == "") {
    this.paths = ["m0,0v0.1"];
  }

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaShiki":
      this.pdp.set(2.5, 1);
      return;
      
    case "WasedaEru":
      this.pdp.set(4.0, 1.1);
      return;

    case "WasedaTen2":
      this.pdp = p(0, 1);
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "SWL8CL1":
      this.pdp.pset(5, 45);
      return;

    case "E8NE1F":
      this.pdp = p(1, 5);
      return;

    case "SE4CR1":
      this.pdp = pp(4, 45);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "SELF":
      this.pdp.set(0.8, 3.1);
      return;

    case "ELF":
      this.pdp.set(1, 3.5);
      return;

    case "NEF":
      this.pdp.set(0.5, 4.0);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "":
      this.paths = ["m0,0v0.1"];
      return;
  }
};

WasedaIruP = function() { WasedaChar.call(this, "WasedaIruP", "いる", "P", "P", "P", "black", false, p(0.0, -0.1)); };
WasedaIruP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["いるｐ"] = WasedaIruP;

WasedaIruP.prototype.setPaths = function() {
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

  this.dp = p(3, 0.1);
};

WasedaKyoh = function() { WasedaChar.call(this, "WasedaKyoh", "きょー", "SW4NE1SW3", "SW", "SW", "black", false, p(1.4, -3.1)); };
WasedaKyoh.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["キョー"] = WasedaKyoh;

WasedaKyoh.prototype.setPaths = function() {
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

  this.dp = p(-0.51558, 4.40385);
  this.paths = ["m 0 0 l -1.02607 2.81902 l 1.53657 -1.2342 l -1.02608 2.81903"];
};

WasedaSen = function() { WasedaChar.call(this, "WasedaSen", "せん", "NEL16CL1NE1F", "NEL", "NEF", "black", false, p(0.0, 5.5)); };
WasedaSen.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["せん"] = WasedaSen;
WasedaSen.prototype.getFilteredPrevTailType = WasedaSa.prototype.getFilteredPrevTailType;
WasedaSen.prototype.setPaths = function() {
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

  this.dp = p(14.0776, -10.9133);
  this.paths = ["m 0 0 c 3.00016 -1.8027 11.4445 -6.7149 11.4445 -9.9485 c 0 -1.06838 -1.85336 0.110919 -1.68304 0.69327 c 0.156221 0.534161 1.10548 -0.0205 1.64314 -0.296143 l 0.891005 -0.45399"];
};

WasedaKataP = function() { WasedaChar.call(this, "WasedaKataP", "かた（点）", "P", "P", "P", "black", false, p(0.0, -0.1)); };
WasedaKataP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["かたｐ"] = WasedaKataP;

WasedaKataP.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _head) {
    case "WasedaNoJoshi_":
      this.dp = p(4.6, -1.1);
      this.paths = ["m4.6,-1.1v0.1"];
      return;
  }

  switch (name_) {
    case "WasedaNoJoshi":
      this.dp = p(4.6, -1.1);
      return;
  }

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
  this.dp = p(1.414, -1.314);
  //this.paths = ["m 0 0", "m 1.414 -1.414 v 0.1"];
};

WasedaNaiHitei = function() { WasedaChar.call(this, "WasedaNaiHitei", "ない", "XSW3", "XSW", "SW", "black", false, p(1.0, -1.4)); };
WasedaNaiHitei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ないｘ"] = WasedaNaiHitei;

WasedaNaiHitei.prototype.setPaths = function() {
  const flip = function(c) {
    c.dp = p(2.8191, 1.026);
    c.paths = ["m 0 0 l 2.8191 1.026"];
  };

  this.dp = p(-1.0261, 2.819);
  this.paths = ["m 0 0 l -1.0261 2.819"];

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaNoJoshi":
      this.pdp = p(2, 1.5);
      flip(this);
      return;

    case "WasedaWa":
      this.pdp = p(-0.3, -1.3);
      return;

    case "WasedaTeJoshi":
    case "WasedaToJoshi":
      this.dp = p(-1.0261, 2.819).pmove(2, 120);
      this.tailType = "SWF";
      this.paths = ["m 0 0 l -1.0261 2.819"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "NER16":
      this.pdp.set(-1.0, -1.0);
      return;

    case "NEL8":
      flip(this);
      this.pdp = p(-1.6, 0.5);
      return;

    case "SER16CR1":
      this.pdp = p(0.8, -1.6);
      this.dp = p(-2.1213, 2.1215);
      this.paths = ["m 0 0 l -2.1213 2.1215"];
      return;

    case "NEL8CL1":
      flip(this);
      this.pdp = p(-2, 0);
      return;

    case "E16CL1":
      this.pdp = p(-0.4, -0.9);
      return;
      
    case "E8CL1":
      this.pdp = p(-0.3, -1.1);
      return;

    case "SE4":
      this.pdp = p(0.4, -1.6);
      this.dp = p(-2.1213, 2.1215);
      this.paths = ["m 0 0 l -2.1213 2.1215"];
      return;

    case "SER8":
      this.pdp = p(1.2, -2.6);
      this.dp = p(-2.1213, 2.1215);
      this.paths = ["m 0 0 l -2.1213 2.1215"];
      return;

    case "ER4":
      this.pdp = p(-0.3, -2.0);
      return;

    case "ER8":
      this.pdp = p(-0.5, -2.5);
      return;

    case "SEL8":
      this.pdp = p(-1, -2);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "E_SW":
      this.pdp = p(-0.5, -1.4);
      this.paths = ["m0,0 l -1.0261 2.819 l 0.25 -0.433"];
      return;
  }

  switch (tail_) {
    case "S":
      this.pdp = p(0.5, -3);
      return;

    case "SCL":
      this.pdp = p(0.5, -1.4);
      return;

    case "E":
      this.pdp = p(-0.5, -1.4);
      return;

    case "SWR":
      this.pdp = p(0, -1.6);
      this.dp = p(2.5981, 1.5);
      this.paths = ["m 0 0 l 2.5981 1.5"];
      return;

    case "SW":
      this.dp = p(2.8191, 1.026);
      this.pdp = p(-0.7, -2.2);
      this.paths = ["m 0 0 l 2.8191 1.026"];
      return;

    case "SE":
      this.dp = p(-2.2981, 1.9285);
      this.pdp = p(0.5, -2);
      this.paths = ["m 0 0 l -2.2981 1.9285"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
};

WasedaNakuHitei = function() { WasedaChar.call(this, "WasedaNakuHitei", "なくｘ", "XS3", "XS", "S", "black", false, p(0.0, -1.5)); };
WasedaNakuHitei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なくｘ"] = WasedaNakuHitei;

WasedaNakuHitei.prototype.setPaths = function() {
  this.dp = p(0, 3);
  this.paths = ["m0,0v3"];

  const horizontal = function(c) {
    c.dp = p(3, 0);
    c.paths = ["m0,0h3"];
    c.tailType = "E";
  };

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaMoJoshi":
      this.pdp = p(1, -1.8);
      return;

    case "WasedaWa":
      this.pdp = p(-0.8, -1.3);
      return;

    case "WasedaE":
      this.pdp = p(-0.8, -1.5);
      return;

    case "WasedaTeJoshi":
    case "WasedaToJoshi":
      this.dp.move(0, 2);
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "E":
      this.pdp = p(-1, -1.5);
      return;

    case "SW":
      //this.pdp = p(0.5, -2.5);
      horizontal(this);
      this.pdp = p(-0.5, -2);
      return;

    case "SE":
      //this.pdp = p(-0.5, -2.5);
      horizontal(this);
      this.pdp = p(-3, -2);
      return;

    case "S":
      this.pdp = p(-1.5, -2);
      this.dp = p(3, 0);
      this.paths = ["m0,0h3"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
};

WasedaNakattaHitei = function() { WasedaChar.call(this, "WasedaNakattaHitei", "なかったｘ", "XS3", "XS", "S", "black", false, p(0.0, -1.5)); };
WasedaNakattaHitei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なかったｘ"] = WasedaNakattaHitei;

WasedaNakattaHitei.prototype.setPaths = function() {
  this.dp = p(0, 3);
  this.paths = ["m0,0v3"];

  const horizontal = function(c) {
    c.dp = p(3, 0);
    c.paths = ["m0,0h3"];
    c.tailType = "E";
  };

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaWa":
      horizontal(this);
      this.pdp = p(-3.6, -1.2);
      return;

    case "WasedaTeJoshi":
      horizontal(this);
      return;

    case "WasedaToJoshi":
      horizontal(this);
      this.pdp = p(-2, -1);
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "NEL8CL1":
      horizontal(this);
      this.pdp = p(-3.5, 2);
      return;

    case "SE4":
      horizontal(this);
      this.pdp = p(-2.5, -1.2);
      return;

    case "SER8CR1":
      horizontal(this);
      this.pdp = p(-3.0, -2.6);
      return;

    case "ER8CR1":
      this.pdp = p(-3, -1);
      return;

    case "SEL8":
      horizontal(this);
      this.pdp = p(-4.3, -1.7);
      return;

    case "E8":
      this.pdp = p(-4, -1.5);
      return;

    case "S8":
      horizontal(this);
      this.pdp = p(-1.5, -4);
      return;

    case "SW8":
      horizontal(this);
      this.pdp = p(0, -4);
      return;

    case "SE8":
      horizontal(this);
      this.pdp = p(-3.5, -3);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
};

WasedaNure = function() { WasedaChar.call(this, "WasedaNure", "ぬれ", "EL8CL4SE1F", "EL", "SEF", "black", false, p(0.0, -0.0)); };
WasedaNure.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぬれ"] = WasedaNure;

WasedaNure.prototype.setPaths = function() {
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

  this.dp = p(8.08703, 3.29605);
  this.paths = ["m 0 0 c 2.13619 0.717134 7.92171 2.05759 7.92171 0 c 0 -0.859357 -1.51314 -1.68308 -2.49222 -1.84485 c -0.67112 -0.107856 -1.78016 -0.06856 -1.95818 0.645703 c -0.239431 1.06718 0.821544 1.45872 2.13619 2.30465 l 0.826508 0.562254"];
      return;
};

WasedaTaxe = function() { WasedaChar.call(this, "WasedaTaxe", "た", "SW8P", "SW", "SWP", "black", false, p(2.7, -3.8)); };
WasedaTaxe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["たぇ"] = WasedaTaxe;

WasedaTaxe.prototype.setPaths = function() {
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
      this.dp = p(-1.94534, 7.07768);
      this.paths = ["m 0 0 l -2.73616 7.5176", "m -2.39414 6.5779 c 0.318527 0.0853 0.549559 0.22296 0.448806 0.49978"];
      return;
  }

  this.dp = p(-2.29414, 6.5779);
  this.paths = ["m 0 0 l -2.73616 7.5176", "m -2.39414 6.5779 h 0.1"];
};

WasedaFutsu = function() { WasedaChar.call(this, "WasedaFutsu", "ふつ", "CR1NE4F", "CR", "NEF", "black", false, p(1.0, 0.4)); };
WasedaFutsu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ふつ"] = WasedaFutsu;

WasedaFutsu.prototype.setPaths = function() {
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

  this.dp = p(3.7804, -2.09276);
  this.paths = ["m 0 0 c 0.291272 0.504498 0.06937 0.90074 -0.2404 1.12894 c -0.199503 0.146968 -0.612451 0.144598 -0.740293 -0.06767 c -0.121558 -0.201835 -0.05142 -0.465381 0.272305 -0.652282 l 2.96934 -1.71435"];
};

WasedaToJoshi = function() { WasedaChar.call(this, "WasedaToJoshi", "〜と", "SW4NE1|SW4CL1", "SW", "CR", "black", false, p(1.4, -1.9)); };
WasedaToJoshi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["〜と"] = WasedaToJoshi;
WasedaChar.dict["ト"] = WasedaToJoshi;

WasedaToJoshi.prototype.setPaths = function() {
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
    case "SEL":
      this.dp = p(-0.839108, 2.2943);
      this.paths = ["m 0 0 l -1.20633 3.29836 c -0.318513 0.870883 0.381794 0.959598 0.585067 0.693272 c 0.266024 -0.348543 -0.005663 -1.09458 -0.217845 -1.69733"];
      return;

    case "XS":
    case "XSW":
    case "XEL":
    case "P":
    case "":
      this.dp = p(-0.070515, 2.94263);
      this.paths = ["m 0 0 l -1.3681 3.7587 c 0.12032 -0.44904 0.938561 -0.816068 1.29759 -0.816068"];
      return;
  }

  this.dp = p(-1.0434, 2.85288);
  this.paths = ["m 0 0 l -1.20633 3.29836 c -0.318513 0.870883 0.490497 0.87276 0.753496 0.6652 c 0.329153 -0.25977 -0.134344 -0.988445 -0.590566 -1.11069"];
};

WasedaCha = function() { WasedaChar.call(this, "WasedaCha", "ちゃ", "NE8", "NE", "NE", "black", false, p(0.0, 2.4)); };
WasedaCha.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ちゃ"] = WasedaCha;
WasedaCha.prototype.getFilteredPrevTailType = function() {
  return this.getPrevTailType().replace(/^(?:E|NELCL8|NE|ECL|ECL4|CHA_HENKI|NEB)$/, "R");
};
WasedaCha.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getFilteredPrevTailType();
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

  switch (tail_) {
    case "R":
      this.dp = p(-2.60455, 7.5641);
      this.paths = ["m 0 0 l -2.60455 7.5641"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "ER":
      this.dp = p(6.05694, -4.0588);
      this.paths = ["m 0 0 l 6.47213 -4.70228 l -0.415188 0.643482"];
      return;
  }

  this.dp = p(6.47213, -4.70228);
  this.paths = ["m 0 0 l 6.47213 -4.70228"];
};

WasedaAi = function() { WasedaChar.call(this, "WasedaAi", "あい", "CR4", "CR", "CR", "black", false, p(1.3, 1.8)); };
WasedaAi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["あい"] = WasedaAi;

WasedaAi.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
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

  switch (tail_) {
    case "SER":
      this.dp = p(1e-05, 1e-05);
      this.paths = ["m 0 0 c 0 -1.33698 -0.132094 -1.80679 0.221672 -2.78599 c 0.365815 -1.01255 1.42997 -1.0661 2.1324 -0.783263 c 0.781613 0.314715 1.41897 1.48997 1.10678 2.2726 c -0.456441 1.14425 -1.70498 1.29666 -3.46085 1.29666"];
      return;

    case "NELCL":
      this.dp = p(0.00058, 1e-05);
      this.paths = ["m 0 0 c -0.166385 -0.78494 -0.61759 -2.50757 0.019479 -3.475 c 0.474014 -0.719821 1.54973 -1.30068 2.36956 -1.03474 c 0.832207 0.269957 1.54531 1.41414 1.33076 2.26232 c -0.355221 1.40427 -1.02903 2.24743 -3.71921 2.24743"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "NE":
      this.dp = p(0, -0.0004);
      this.paths = ["m 0 0 c -0.898 0.6361 -2.098 0.31 -2.709 -0.3662 c -0.63 -0.6985 -0.703 -2.1066 -0.091 -2.8219 c 0.569 -0.6659 1.936 -0.886 2.608 -0.3242 c 0.899 0.7519 1.294 2.1179 0.192 3.5119"];
      return;

    case "NER":
      this.dp = p(1e-05, 1e-05);
      this.paths = ["m 0 0 c -2.38175 0 -3.15884 -0.396213 -3.55681 -1.63958 c -0.30127 -0.941255 0.536849 -2.25264 1.47144 -2.57398 c 0.818263 -0.281347 1.95542 0.243556 2.40177 0.984827 c 0.557835 0.926422 0.318104 2.12977 -0.316392 3.22875"];
      return;

    case "ER":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c -1.0994 -0.004 -1.8485 -0.9134 -1.9392 -1.7879 c -0.1001 -0.9638 0.7387 -2.1681 1.6871 -2.3675 c 0.8401 -0.1766 2.03 0.4793 2.2127 1.3182 c 0.2446 1.1233 -0.6072 2.4746 -1.9606 2.8372"];
      return;

    case "NEL":
     this.dp = p(0.0005, -0.0002);
     this.paths = ["m 0 0 c -1.0858 0.1812 -2.0236 -0.6348 -2.2786 -1.5095 c -0.2635 -0.9035 0.2846 -2.2025 1.1466 -2.58 c 0.8026 -0.3515 2.1287 0.0457 2.489 0.8443 c 0.4822 1.0686 0.2421 2.4699 -1.3565 3.245"];
     return;
  }

  this.dp = p(0.000582, 1e-05);
  this.paths = ["m 0 0 c -1.05613 -0.310638 -1.54392 -1.45402 -1.39186 -2.35232 c 0.157075 -0.927936 1.21696 -1.85773 2.15739 -1.82135 c 0.875437 0.033866 1.89542 0.969789 1.87131 1.84555 c -0.03227 1.17192 -0.859712 2.32813 -2.63626 2.32813"];
};

WasedaTsuP = function() { WasedaChar.call(this, "WasedaTsuP", "つｐ", "P/X", "P/X", "P/X", "black"); };
WasedaTsuP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["つｐ"] = WasedaTsuP;

WasedaTsuP.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) {
    case "WasedaNoJoshi_WasedaMa":
      this.dp = p(1, 1.5);
      return;
  }

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _head) {
    case "WasedaNoJoshi_S":
      this.dp = p(2, 1.2);
      return;
  }

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

  this.dp = p(0, 0);
};

WasedaTsu = function() { WasedaChar.call(this, "WasedaTsu", "つ", "S4CR1", "S", "SCR", "black", false, p(1.1, -2.3)); };
WasedaTsu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["つ"] = WasedaTsu;

WasedaTsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
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

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  switch (_headModel) {
    case "SE3":
    case "SE4":
      this.dp.set(0, 3.31915);
      this.paths = ["m 0 0 v 3.31915 c 0 0.565945 -0.511386 0.999522 -0.795891 0.506745 c -0.506141 -0.876661 0.133466 -1.16918 0.406768 -0.895872 l 0.389123 0.389127"];
      return;

    case "SL8":
      this.dp = p(-0.164335, 3.79145);
      this.paths = ["m 0 0 v 3.31915 c 0 0.565945 -0.567037 0.8732 -0.9 0.5588 c -0.307677 -0.290441 0.234845 -0.843329 0.507321 -0.837034 c 0.250633 0.00579 0.431306 0.384375 0.228344 0.750534"];
      return;

    case "ER4":
      this.dp = p(-0.024977, 2.43426);
      this.paths = ["m 0 0 c 0 1.28432 -0.000503 2.00649 -0.000503 3.34062 c 0 0.565945 -0.64819 0.806362 -0.9 0.5588 c -0.405708 -0.398865 0.309068 -1.13811 0.875526 -1.46516"];
      return;

    case "ER8":
      this.dp = p(-7.5e-05, 2.53762);
      this.paths = ["m 0 0 l -9.8e-05 3.29766 c -1.7e-05 0.565945 -0.604486 0.908633 -0.9 0.5588 c -0.39192 -0.463961 0.184286 -1.00005 0.900023 -1.31884"];
      return;

    case "ER16":
      this.dp.set(-0.000947, 2.67608);
      this.paths = ["m 0 0 c 0 1.3318 -0.001193 2.85653 -0.001193 3.32706 c 0 0.534846 -0.654853 0.675809 -0.965378 0.621431 c -0.227643 -0.039864 -0.348727 -0.328764 -0.180544 -0.569016 c 0.180379 -0.257677 0.646508 -0.530783 1.14617 -0.703395"];
      return;

  case "SER4":
  case "SER8":
      this.dp = p(0, 3.62587);
      this.paths = ["m 0 0 v 4 c 0 0.270603 -0.292696 0.556305 -0.540823 0.521833 c -0.349191 -0.048513 -0.710383 -0.609907 -0.532088 -0.914043 c 0.180896 -0.308573 0.648006 -0.279447 1.07291 0.018078"];
      return;

    case "SER16":
      this.dp = p(0, 3.47802);
      this.paths = ["m 0 0 v 4 c 0 0.79209 -1.12546 0.107757 -1.12028 -0.276872 c 0.005139 -0.382227 0.390019 -0.633379 1.12028 -0.245112"];
      return;

    case "EL8":
      this.dp = p(1e-06, 3.35582);
      this.paths = ["m 0 0 v 3.66158 c 0 0.273546 -0.337487 0.360033 -0.550099 0.332925 c -0.322151 -0.041074 -0.813523 -0.401295 -0.68027 -0.697457 c 0.168472 -0.374435 0.789227 -0.084576 1.23037 0.058769"];
      return;

    case "EL16":
      this.dp = p(-0, 3.58471);
      this.paths = ["m 0 0 v 4 c 0 0.432637 -0.473318 0.444044 -0.745565 0.381958 c -0.270169 -0.061612 -0.612106 -0.40788 -0.502388 -0.662339 c 0.165665 -0.384214 0.548711 -0.322273 1.24795 -0.134912"];
      return;
  }

  switch (_head) {
    case "SW":
      this.dp = p(-0.183611, 3.81343);
      this.paths = ["m 0 0 v 3.31915 c 0 0.565945 -0.606958 0.846547 -0.939944 0.532171 c -0.40199 -0.379524 0.326342 -1.16196 0.731708 -1.03901 c 0.319438 0.096886 0.271919 0.321709 0.024625 1.00112"];
      return;

    case "SEL":
    case "S":
      this.dp = p(0, 3.31915);
      this.paths = ["m 0 0 v 3.31915 c 0 0.565945 -0.567037 0.8732 -0.9 0.5588 c -0.263693 -0.248921 -0.016341 -0.889627 0.231761 -1.07571 c 0.307662 -0.23076 0.668239 0.056411 0.668239 0.516914"];
      return;

    case "E":
     this.dp = p(0, 3.06187);
     this.paths = ["m 0 0 v 3.58386 c 0 0.79209 -1.14634 0.276059 -1.19101 -0.120459 c -0.046901 -0.416323 0.45875 -0.401525 1.19101 -0.401525"];
     return;

    case "NER":
      this.dp = p(-0.0001, 1.90078);
      this.paths = ["m 0 0 l -0.0001 3.14879 c -1.8e-05 0.565945 -0.312067 0.973945 -0.617369 0.81969 c -0.642007 -0.324375 0.115073 -1.35035 0.617369 -2.0677"];
      return;
  }

  this.dp = p(0, 2.31029);
  this.paths = ["m 0 0 v 3.31915 c 0 0.565945 -0.567037 0.8732 -0.9 0.5588 c -0.59069 -0.5576 0.559666 -0.978163 0.9 -1.56766"];
};

WasedaTai = function() { WasedaChar.call(this, "WasedaTai", "たい", "S4", "S", "S", "black", false, p(0.0, -2.0)); };
WasedaTai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["たい"] = WasedaTai;
WasedaTai.prototype.setPaths = WasedaU.prototype.setPaths;


WasedaKokoro = function() { WasedaChar.call(this, "WasedaKokoro", "こころ", "E8SW4F", "E", "SWF", "black", false, p(0.0, -1.9)); };
WasedaKokoro.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["こころ"] = WasedaKokoro;
WasedaChar.dict["心"] = WasedaKokoro;

WasedaKokoro.prototype.setPaths = function() {
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
  this.dp = p(6.09788, 5.4882);
  this.paths = ["m 0 0 h 8 l -1.36808 3.7588"];
};

WasedaShimi = function() { WasedaChar.call(this, "WasedaShimi", "しみ", "NER4SWR4", "NER", "SWR", "black", false, p(0.0, 0.9)); };
WasedaShimi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["しみ"] = WasedaShimi;

WasedaShimi.prototype.setPaths = function() {
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

  this.dp = p(1.46028, 0.84309);
  this.paths = ["m 0 0 c 0 -0.77936 1.55441 -3.81196 2.64239 -3.08873 c 1.08812 0.7233 -0.141632 3.28388 -1.18211 3.93182"];
};



WasedaShimiru = function() { WasedaChar.call(this, "WasedaShimiru", "しみる", "NER4SWR4S1F", "NER", "SF", "black", false, p(0.0, -0.3)); };
WasedaShimiru.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["しみる"] = WasedaShimiru;

WasedaShimiru.prototype.setPaths = function() {
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

  this.dp = p(1.46028, 3.84309);
  this.paths = ["m 0 0 c 0 -0.77936 1.5544 -3.81194 2.64239 -3.08873 c 0.623957 0.41476 0.485758 1.43364 0.05813 2.3496 c -0.318116 0.68139 -0.796401 1.30582 -1.24025 1.58222 v 1"];
};

WasedaRare = function() { WasedaChar.call(this, "WasedaRare", "られｐ", "P/X", "P/X", "P/X", "black"); };
WasedaRare.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["られｐ"] = WasedaRare;

WasedaRare.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) {}

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

  this.dp = pp(3, 45);
};

WasedaNaru = function() { WasedaChar.call(this, "WasedaNaru", "なる", "EL8S1F", "EL", "SF", "black", false, p(0.0, -1.5)); };
WasedaNaru.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なる"] = WasedaNaru;

WasedaNaru.prototype.setPaths = function() {
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

  this.dp = p(8, 3.5);
  this.paths = ["m 0 0 c 2.04073 0.6631 7.67821 1.825 8 0 v 1.5"];
};


WasedaSore = function() { WasedaChar.call(this, "WasedaSore", "それ", "SWR4F", "SWR", "SWRF", "black", false, p(3.0, -2.3)); };
WasedaSore.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["それ"] = WasedaSore;
WasedaChar.dict["その"] = WasedaSore;
WasedaChar.dict["ので"] = WasedaSore;

WasedaSore.prototype.setPaths = function() {
  this.dp = p(-2.20899, 3.33472).add(pp(2, 160));
  this.paths = ["m 0 0 c 0 1.34814 -0.949482 2.99724 -2.20899 3.33472"];
  
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
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

  switch (tail_) {
    case "S":
    case "SW":
      this.paths = ["m 0 0 c 1.81463 1.04767 -0.949482 2.99724 -2.20899 3.33472"];
  }

  switch (_name) {
    case "WasedaMasen":
      this.dp = p(-2.77114, 3.0938);
      this.paths = ["m 0 0 c 0 1.34814 -0.947128 3.58254 -2.77114 3.0938"];
      return;
  }

  //switch (_model) {}

  switch (_head) {
    case "E":
      this.dp.move(0, 1);
      return;

    case "ER":
      this.dp.move(0, 1);
      return;
  }
};

WasedaIi = function() { WasedaChar.call(this, "WasedaIi", "いい", "ER4CR1", "ER", "CR", "black", false, p(0.0, 0.0)); };
WasedaIi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["いい"] = WasedaIi;
WasedaChar.dict["いー"] = WasedaIi;

WasedaIi.prototype.setPaths = function() {
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
      this.dp = p(2.94239, -0.808685);
      this.paths = ["m 0 0 c 1.58483 -0.915 4.015 -1.2411 4.015 0 c 0 0.5987 -0.34418 0.768118 -0.578204 0.674035 c -0.240946 -0.096865 -0.352824 -0.399131 -0.437474 -0.644635 c -0.091272 -0.264712 -0.056929 -0.562771 -0.056929 -0.838085"];
      return;
  }

  this.dp = p(3.49392, -0.703698);
  this.paths = ["m 0 0 c 1.58483 -0.915 4.015 -1.2411 4.015 0 c 0 0.5987 -0.628513 0.911776 -0.97446 0.708 c -0.196365 -0.115666 -0.00415 -0.468157 0.08332 -0.6786 c 0.101695 -0.244663 0.241157 -0.459951 0.370056 -0.733098"];
};

WasedaRouP = function() { WasedaChar.call(this, "WasedaRouP", "ろうｐ", "P/X", "P/X", "P/X", "black"); };
WasedaRouP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ろうｐ"] = WasedaRouP;

WasedaRouP.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaTa":
      if (tail_ == "NE") {
        this.dp = p(-2.5, -0.8);
      }
      return;
  }

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

  this.dp = p(0, 0);
};

WasedaGimonhu = function() { WasedaChar.call(this, "WasedaGimonhu", "？", "ER4SW16CL1SW2F", "ER", "SWF", "black", false, p(2.1, -6.6)); };
WasedaGimonhu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["？"] = WasedaGimonhu;

WasedaGimonhu.prototype.setPaths = function() {
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

  this.dp = p(-2.06188, 14.1924);
  this.paths = ["m 0 0 c 2.14052 -1.14857 5.21408 -1.67903 4.56489 0.971632 c -0.726788 2.96752 -2.59634 6.85911 -3.54381 9.79562 c -0.247255 0.76633 -0.916437 2.09919 -0.172129 2.34985 c 0.769432 0.25912 1.78939 -1.58033 1.32778 -2.04194 c -0.649458 -0.649457 -3.71379 2.59938 -4.23862 3.11727"];
};


WasedaWagakuni = function() { WasedaChar.call(this, "WasedaWagakuni", "わが国", "UWL4EL8CL1", "SWL", "EL", "black", false, p(1.8, -2.2)); };
WasedaWagakuni.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["わが国"] = WasedaWagakuni;

WasedaWagakuni.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
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

  switch (_model.replace(/([A-Z]+\d+).*/, "$1")) {
    case "EL8":
      this.dp = p(8.45891, 3.28972);
      this.paths = ["m 0 0 c -0.975 0.3745 -1.93925 1.18359 -1.833 2.1089 c 0.131345 1.1438 1.68672 1.68576 2.79777 2.02542 c 2.189 0.6692 7.72796 0.443685 7.72796 -1.47642 c 0 -0.4888 -0.165727 -0.752748 -0.475372 -0.8549 c -0.287317 -0.094786 -0.769478 0.077947 -0.826525 0.375069 c -0.096893 0.504651 0.394685 0.783189 1.06808 1.11165"];
      return;
  }

  //switch (_head) {}

  this.dp = p(8.45891, 3.28972);
  this.paths = ["m 0 0 c -0.975 0.3745 -1.93925 1.18359 -1.833 2.1089 c 0.131345 1.1438 1.68672 1.68576 2.79777 2.02542 c 2.189 0.6692 7.72796 0.443685 7.72796 -1.47642 c 0 -0.4888 -0.335 -0.7721 -0.644 -0.8549 c -0.307 -0.0881 -0.569 0.0282 -0.417 0.3028 c 0.233 0.4034 0.533183 0.82181 0.827183 1.18391"];
};

WasedaKoi = function() { WasedaChar.call(this, "WasedaKoi", "こい", "NE4", "NE", "NE", "black", false, p(0.0, 1.1)); };
WasedaKoi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["こい"] = WasedaKoi;
WasedaChar.dict["コク"] = WasedaKoi;
WasedaChar.dict["どこ"] = WasedaKoi;

WasedaKoi.prototype.setPaths = function() {
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

  this.dp = p(3.27666, -2.2943);
  this.paths = ["m 0 0 l 3.27666 -2.2943"];
};




WasedaShin = function() { WasedaChar.call(this, "WasedaShin", "しん", "NEL8CL1NE1F", "NEL", "NEF", "black", false, p(0.0, 2.5)); };
WasedaShin.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["しん"] = WasedaShin;
WasedaShin.prototype.getFilteredPrevTailType = WasedaSa.prototype.getFilteredPrevTailType;
WasedaShin.prototype.setPaths = function() {
  this.dp = p(8.50046, -6.66964);
  this.paths = ["m 0 0 c 2.02885 -1.1246 5.8001 -2.5739 5.8001 -4.8669 c 0 -0.3853 -0.1734 -0.6318 -0.42922 -0.6363 c -0.42275 -0.0148 -1.00026 0.6628 -0.76372 1.0135 c 0.2436 0.3479 0.83805 -0.0702 1.22478 -0.3512 c 0.58759 -0.4114 0.7648 -0.6094 1.3403 -1.0124"];

  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getFilteredPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaNihonP":
      this.dp = p(11.1722, -5.8533).move(1.3282199, -0.81634003);
      this.paths = ["m 0 0 c 0 0 2.9996 0.083484 3.96496 -0.175183 c 2.18756 -0.586155 5.8001 -2.5739 5.8001 -4.8669 c 0 -0.3853 -0.1734 -0.6318 -0.42922 -0.6363 c -0.42275 -0.0148 -1.00026 0.6628 -0.76372 1.0135 c 0.2436 0.3479 0.83805 -0.0702 1.22478 -0.3512 c 0.58759 -0.4114 0.7648 -0.6094 1.3403 -1.0124"];
      return;

    case "WasedaWa":
      this.dp = p(8.78505, -7.03602);
      this.paths = ["m 0 0 c 2.21519 0 5.8001 -2.5739 5.8001 -4.8669 c 0 -0.3853 -0.1734 -0.6318 -0.42922 -0.6363 c -0.42275 -0.0148 -1.00026 0.6628 -0.76372 1.0135 c 0.2436 0.3479 0.83805 -0.0702 1.22478 -0.3512 c 0.58759 -0.4114 0.7648 -0.6094 1.3403 -1.0124"];
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
    case "R":
      this.dp.set(0.023746, 3.81001).pmove(2, -36);
      this.paths = ["m 0 0 c 0 2.8227 -2.05011 7.42882 -3.67845 6.99251 c -0.549348 -0.147197 2.0602 -1.92159 2.42726 -2.22977 l 1.27494 -0.952734"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "SWL16":
      this.dp.move(2, 0);
      return;

    case "SWL8":
      this.dp.move(2, 0);
      return;
  }

  //switch (_head) {}

};

WasedaShite = function() { WasedaChar.call(this, "WasedaShite", "して", "SE3", "SE", "SE", "black", false, p(0.0, -1.0)); };
WasedaShite.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["して"] = WasedaShite;

WasedaShite.prototype.setPaths = function() {
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
    case "SE":
      this.dp = p(2.01498, 2.015);
      this.paths = ["m 0 0 l 2.01498 2.015 l -0.2527 -0.1616"];
      return;
  }

  this.dp = p(2.01498, 2.015);
  this.paths = ["m 0 0 l 2.01498 2.015"];
};

WasedaNuxe = function() { WasedaChar.call(this, "WasedaNuxe", "ぬぇ", "EL8CL4P", "EL", "P", "black", false, p(0.0, 0.6)); };
WasedaNuxe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぬぇ"] = WasedaNuxe;

WasedaNuxe.prototype.setPaths = function() {
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

  this.dp = p(6.60272, 0.538417);
  this.paths = ["m 0 0 c 2.1804 0.6666 7.9407 1.3575 7.9407 -0.5553 c 0 -0.6526 -0.6922 -1.1997 -1.2952 -1.2952 c -0.973 -0.1891 -2.783 0.1277 -2.7311 1.1176 c 0.0739 1.4112 2.68832 1.27132 2.68832 1.27132"];
};

WasedaKetsu = function() { WasedaChar.call(this, "WasedaKetsu", "けつ", "SE8", "SE", "SE", "black", false, p(0.0, -3.3)); };
WasedaKetsu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["けつ"] = WasedaKetsu;
WasedaChar.dict["べき"] = WasedaKetsu;
WasedaChar.dict["へき"] = WasedaKetsu;
WasedaChar.dict["えき"] = WasedaKetsu;

WasedaKetsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
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

  switch (model_) {
    case "E8CL4":
      this.dp = p(5.65685, 5.65685);
      this.paths = ["m 0 0 l 5.65685 5.65685"];
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "SR":
      this.dp = p(3.79931, 6.10581);
      this.paths = ["m 0 0 l 4.58861 6.55322 l -0.789299 -0.447408"];
      return;
  }

  this.dp = p(4.58861, 6.55322);
  this.paths = ["m 0 0 l 4.58861 6.55322"];
};

WasedaHoku = function() { WasedaChar.call(this, "WasedaHoku", "ほく", "BSEL16", "BSEL", "SEL", "black", false, p(0.0, -6.9)); };
WasedaHoku.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ほく"] = WasedaHoku;

WasedaHoku.prototype.setPaths = function() {
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
    case "EL":
      this.dp = p(9.06067, 10.0957);
      this.paths = ["m 0 0 c 0.590457 0 1.06066 -0.567771 1.06066 -1.06066 c 0 10.815 5.03594 16.2903 8.00001 11.1564"];
      return;
  }

  this.dp = p(9.06066, 12.7957);
  this.paths = ["m 0 0 c 0.590457 0 1.06066 -0.567771 1.06066 -1.06066 c 0 7.6983 1.3202 13.8564 8 13.8564"];
};

WasedaHur = function() { WasedaChar.call(this, "WasedaHur", "ふｒ", "SEL8NWL4", "SEL", "NWL", "black", false, p(0.0, -2.9)); };
WasedaHur.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ふｒ"] = WasedaHur;

WasedaHur.prototype.setPaths = function() {
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

  this.dp = p(2.50256, 3.1499);
  this.paths = ["m 0 0 c -0.07043 2.58414 0.53302 5.79481 3.4745 5.8548 c 0.49614 0.01012 1.24982 -0.228218 1.3021 -0.7217 c 0.105953 -1.00018 -1.35034 -1.7699 -2.27404 -1.9832"];
};


WasedaNan = function() { WasedaChar.call(this, "WasedaNan", "なん", "EL8F", "EL", "ELF", "black", false, p(0.0, 0.1)); };
WasedaNan.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なん"] = WasedaNan;
WasedaChar.dict["何"] = WasedaNan;

WasedaNan.prototype.setPaths = function() {
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

  this.dp = p(9.26562, -1.10113);
  this.paths = ["m 0 0 c 2.62139 0.8517 6.64345 1.35655 8 0"];
};

WasedaNakaP = function() { WasedaChar.call(this, "WasedaNakaP", "なかｐ", "P/X", "P/X", "P/X", "black"); };
WasedaNakaP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なかｐ"] = WasedaNakaP;
WasedaChar.dict["中ｐ"] = WasedaNakaP;

WasedaNakaP.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) {
    case "WasedaNoJoshi_WasedaO":
      this.dp = p(1, 1.5);
      return;
  }

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _head) {
    case "WasedaNoJoshi_EL":
      this.dp = p(1, 1.3);
      return;
  }

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

  this.dp = p(0, 0);
};

WasedaLtsuP = function() { WasedaChar.call(this, "WasedaLtsuP", "っ", "P/X", "P/X", "P/X", "black"); };
WasedaLtsuP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["っ"] = WasedaLtsuP;

WasedaLtsuP.prototype.setPaths = function() {
  this.tailType = this.getPrevTailType() + "_P";
  
  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) { }

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _head) {
    case "WasedaKetsu_SW":
      this.dp = p(-1, -3.3);
      return;
  }

  //switch (name_) {}
  switch (model_ + "_" + _name) {
    case "SEL8_WasedaTen2":
     this.dp = p(-4.2, -0.7);
     return;

    case "E16CL1_WasedaTen2":
     this.dp = p(-7.5, 0.6);
     return;

    case "ER16CR1_WasedaSai":
    case "ER16CR1_WasedaSei":
      this.dp = p(-7, -1);
      return;
  }

  switch (model_ + "_" + _model) {
    case "SER16CR1_OSEL4":
      this.dp.set(-5.0, -6.2);
      this.tailType = "SER16CR1_X";
      return;

    case "EL16_E8CL4":
      this.dp = p(-7.6, 4.8);
      return;
  }

  switch (model_ + "_" + _headModel) {
    case "SW8CR1_NEL16":
    case "SW8CR1_BNEL16":
      this.pdp.set(-1.3, -1.2);
      return;

    case "EL8_SW4":
      this.pdp.set(-3.1, -0.1);
      return;

    case "NEL8_SW4":
      this.dp = p(-1.8, 1.5);
      return;

    case "EL8_SW8":
      this.dp = p(-2.5, -0.8);
      return;

    case "ER4_SW4":
      this.dp = p(-1.0, -1.8);
      return;

    case "SEL8_SWL16":
      this.dp = p(-1.5, -3);
      return;

    case "NEL8CL1_SWL8":
      this.dp = p(-1.5, 3);
      return;

    case "NEL8CL1_SWL16":
      this.dp = p(-1.5, 0.8);
      return;

    case "NE8OWL4_E4":
      this.dp = p(-4.2, 2.1);
      return;

    case "NEL8CL1_E4":
      this.dp = p(-3, 2);
      return;

    case "E16CL1_SW4":
      this.dp = p(-5.5, -1.5);
      return;

    case "E16CL1_SE3":
      this.dp = p(-6, 0);
      return;
  }

  switch (model_ + "_" + _head) {
    case "EL8CL1_BNE":
      this.pdp.set(-6, 2);
      return;

    case "EL4_SWL":
      this.pdp.set(-0.9, -0.6);
      return;

    case "SEL8_NE":
    case "SEL8_BNE":
      this.pdp.set(-4.9, -0.3);
      return;

    case "NEL16CL1_E":
    case "NEL16CL1_BE":
      this.pdp.set(-6, 4);
      return;

    case "SEL16_BSL":
      this.pdp.set(-5.5, -4.5);
      return;

    case "E8CL4_SW":
      this.pdp.set(0.6, -1.8);
      return;

    case "SWL8NEL4CL1_SW":
      this.pdp.set(-1.583305, -0.565475);
      return;

    case "SEL4_SW":
      this.pdp.set(-1.0, -1.8);
      return;

    case "NER8_E":
      this.pdp.set(-6, 2);
      return;

    case "NE16_SW":
      this.pdp.set(-4.4, 4.7);
      return;

    case "ER8_SWR":
      this.dp.set(-3, -2.5);
      return;

    case "NEL16CL8_E":
      this.dp = p(-4, 2);
      return;

    case "SER8_SW":
    case "SER8_SW":
      this.dp = p(-1, -5.5);
      return;

    case "NEL16CL1_S":
      this.dp = p(-4.2, 3.1);
      return;

    case "NEL8CL1_SW":
      this.dp = p(-1.5, 0.5);
      return;

    case "E8_SL":
      this.dp = p(-3, -2);
      return;

    case "E8_SWL":
      this.dp = p(-2, -1.5);
      return;

    case "E16_SWL":
      this.dp = p(-6, -2);
      return;

    case "EL8CL1_SWL":
      this.dp = p(-2, -1.5);
      return;

    case "EL8_SWL":
      this.dp = p(-2, -1);
      return;

    case "SER8CR1_SWL":
      this.dp = p(0, -3.2);
      return;

    case "E8CL1_SWL":
      this.dp = p(-1.7, -1.6);
      return;

    case "SWL8_E":
      this.dp = p(-1.5, -3.8);
      return;

    case "SL8_SR":
      this.dp = p(0.7, -4.1);
      return;

    case "NEL16CL8_NE":
     this.dp = p(-1, 3);
     return;

    case "E16CL1_E":
      this.dp = p(-6.5, 2);
      return;

    case "NEL8CL1_E":
      this.dp = p(-4, 1.5);
      return;

    case "SEL8CL4_E":
      this.dp = p(-2, 0);
      return;

    case "SER8CR1_E":
      this.dp = p(-3, -2);
      return;

    case "NE16CL1_SWR":
      this.dp = p(-4, 3.5);
      return;

    case "NE16_SWR":
      this.dp = p(-4, 3.5);
      return;

    case "NE16_E":
      this.dp = p(-6.5, 5.5);
      return;

    case "SW8CR1_E":
      this.dp = p(-1, -2.5);
      return;

    case "SW16_E":
      this.dp = p(1.4, -7.3);
      return;

    case "ER16_E":
      this.dp = p(-8, 2.0);
      return;

    case "ER16_SW":
      this.dp = p(-6.3, -3.5);
      return;

    case "SEL16_NEL":
      this.dp = p(-8.3, -3.1);
      return;

    case "SEL8CL1_NE":
      this.dp = p(-3.7, 0);
      return;

    case "SEL8CL1_NEL":
      this.dp = p(-4.2, -0.5);
      return;

    case "SEL8_E":
    case "SEL8_BE":
      this.dp = p(-6, -2.2);
      return;

    case "SEL8CL1_E":
      this.dp = p(-4.8, -2.3);
      return;

    case "NEL16_E":
      this.dp = p(-5.5, 5.5);
      return;

    case "NEL16_SW":
      this.dp = p(-3.7, 4.4);
      return;

    case "NEL8_E":
    case "NEL8_BE":
      this.dp = p(-3.6, 2.6);
      return;

    case "EL4_SW":
      this.dp = p(-1.4, -0.8);
      return;

    case "ER8_SW":
    case "ER8_BSW":
      this.dp = p(-3.5, -2.4);
      return;

    case "E8CL4_SWR":
      this.dp = p(0, -2.4);
      return;

    case "SE4_E":
      this.dp = p(-2.7, -1.2);
      return;

    case "NER8_SW":
      this.dp = p(-2.5, -0.4);
      return;

    case "EL16CL1_NE":
      this.dp = p(-8.6, 2.0);
      return;

    case "E8_SW":
      this.dp = p(-3.0, -1.7);
      return;

    case "E16_E":
    case "E16_BE":
      this.dp = p(-8, 2);
      return;

    case "ER4_SW":
      this.dp = p(-1.0, -2.4);
      return;

    case "ER16CR1_E":
      this.dp = p(-7.4, 3.6);
      return;

    case "E8_EL":
    case "E8_ER":
    case "E8_E":
      this.dp = p(-4, 2);
      return;

    case "E8_SWR":
      this.dp = p(-3.5, -1.8);
      return;

    case "E16_SW":
      this.dp = p(-6.6, -2.0);
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

    case "EL16CL1_SW":
      this.dp = p(-5, -1.2);
      return;

    case "ER8_EL":
    case "ER8_ER":
    case "ER8_E":
      this.dp = p(-4, 2);
      return;

    case "ER8_SW":
      this.dp = p(-2.8, -2.4);
      return;

    case "NEL8_E8":
      this.dp = p(-4, 2.5);
      return;
    
    case "NEL8_NEL":
      this.dp = p(-2, 4.5);
      return;

    case "EL8CL1_E":
      this.dp = p(-3.2, 1.9);
      return;

    case "SW8_SW":
      this.dp = p(2.8, -3.2);
      return;

    case "SW4_SW":
      this.dp = p(2.0, -1.1);
      return;
  }

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(0, 0);
};

WasedaXter = function() { WasedaChar.call(this, "WasedaXter", "てｒ", "SW4CR1S1F", "SW", "SF", "black", false, p(2.2, -3.4)); };
WasedaXter.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["〜てｒ"] = WasedaXter;

WasedaXter.prototype.setPaths = function() {
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

  this.dp = p(-1.3681, 6.7587);
  this.paths = ["m 0 0 l -1.3681 3.7587 c -0.122467 0.336465 -0.559886 0.222285 -0.71422 0.04051 c -0.272069 -0.320444 -0.144722 -1.20264 0.274697 -1.23081 c 0.422001 -0.028346 0.439523 0.770494 0.439523 1.1903 v 1"];
};

WasedaYa = function() { WasedaChar.call(this, "WasedaYa", "や", "NER8", "NER", "NER", "black", false, p(0.0, 2.6)); };
WasedaYa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["や"] = WasedaYa;

WasedaYa.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  switch (model_ + "_" + _head) {
    case "S4CR1_E":
    case "SW8CR1_E":
    case "SWR8CR1_E":
      this.dp = p(6.83246, -3.39159);
      this.paths = ["m 0 0 c 0.502296 -0.717349 4.94061 -6.66836 6.83246 -3.39159"];
      return;
  }

  switch (model_) {
    case "S4CR1":
    case "SW8CR1":
    case "SWR8CR1":
      this.dp = p(6.46122, -4.07219);
      this.paths = ["m 0 0 c 0.502296 -0.717349 2.93983 -4.07219 6.46122 -4.07219"];
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "SWRCRB":
      this.dp = p(6.46122, -4.07219);
      this.paths = ["m 0 0 c 0.502296 -0.717349 2.93983 -4.07219 6.46122 -4.07219"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "E":
    case "ER":
    case "NER":
    case "NE":
      this.dp = p(6.5532, -4.5886);
      this.paths = ["m 0 0 c 1.60694 -4.415 5.63821 -7.1026 6.5532 -4.5886"];
      return;

    case "S":
      this.dp = p(6.1283, -5.1423);
      this.paths = ["m 0 0 c 1.7415 -4.7848 6.1283 -8.4952 6.1283 -5.1423"];
      return;

    case "SWR":
      this.dp = p(6.12836, -5.1423);
      this.paths = ["m 0 0 c 0.925272 -2.5422 4.24274 -7.02792 6.12836 -5.1423"];
      return;

     case "SW":
      this.dp = p(6.12836, -5.1423);
      this.paths = ["m 0 0 c 0.925272 -2.5422 7.37246 -7.62635 6.12836 -5.1423"];
      return; 
  }

  this.dp = p(6.12836, -5.1423);
  this.paths = ["m 0 0 c 0.925272 -2.5422 3.4945 -5.1423 6.12836 -5.1423"];
};

WasedaYu = function() { WasedaChar.call(this, "WasedaYu", "ゆ", "NER8CR1", "NER", "NERCR", "black", false, p(0.0, 2.5)); };
WasedaYu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ゆ"] = WasedaYu;
WasedaYu.prototype.filterFlatterModel = function(model) {
  return model.replace(/^(?:S4CR1|SWR8CR1|SWR8)$/, "F");
};
WasedaYu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  switch (model_ + "_" + _model) {}

  switch (this.filterFlatterModel(model_) + "_" + _headModel) {
    case "F_ER16":
      this.dp = p(6.47716, -3.28301);
      this.paths = ["m 0 0 c 0.502296 -0.717349 3.01884 -3.88397 5.63294 -3.88397 c 0.435292 0 0.65908 0.04646 0.772117 0.298136 c 0.221786 0.493797 -0.07416 1.30169 -0.569067 1.52098 c -0.280507 0.124288 -0.831953 -0.03429 -0.855245 -0.340212 c -0.0439 -0.576648 0.798139 -0.651048 1.49642 -0.877941"];
      return;
  }

  //switch (model_ + "_" + _head) { }

  switch (model_) {
    case "S4CR1":
    case "SWR8":
    case "SW8CR1":
    case "SWR8CR1":
      this.dp = p(5.75196, -3.94947);
      this.paths = ["m 0 0 c 0.502296 -0.717349 2.93983 -4.07219 5.92623 -3.95313 c 0.275082 0.010967 0.528444 0.250972 0.536378 0.493884 c 0.00991 0.303312 -0.340825 0.561189 -0.628078 0.659078 c -0.165748 0.056483 -0.43293 0.072514 -0.519219 -0.079859 c -0.189742 -0.335054 0.372153 -0.810639 0.436653 -1.06944"];
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  switch (_model) {
    case "BUWL4":
      this.dp.set(7.74434, -4.87143);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.2753 0 0.528444 0.250972 0.536378 0.493884 c 0.00991 0.303312 -0.340825 0.56119 -0.628078 0.659078 c -0.165748 0.056483 -0.43293 0.072514 -0.519219 -0.079858 c -0.189742 -0.335054 0.368086 -1.51694 2.18456 -0.947531"];
      return;
  }

  switch (_headModel) {
    case "NER8":
      this.dp.set(5.88882, -4.98745);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.2753 0 0.656006 0.135587 0.669332 0.394168 c 0.021264 0.412619 -0.632912 0.929359 -0.997742 0.735438 c -0.329959 -0.175386 -0.206633 -0.595887 0.046525 -1.12006"];
      return;

    case "EL8":
      this.dp.set(4.19251, -4.54824);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.2753 0 0.528444 0.250972 0.536378 0.493884 c 0.00991 0.303312 -0.325145 0.392046 -0.628567 0.386409 c -0.707913 -0.013151 -1.11859 -0.209595 -1.886 -0.431538"];
      return;

    case "NEL8":
      this.dp.set(6.46843, -4.89857);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.2753 0 0.581023 0.254978 0.536378 0.493884 c -0.113455 0.607119 -0.760442 0.866892 -1.1473 0.57922 c -0.60224 -0.447836 0.540653 -0.781932 0.908645 -0.974671"];
      return;

    case "SER4":
    case "SER8":
      this.dp = p(7.10817, -4.04326);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.2753 0 0.693226 0.119753 0.826187 0.394436 c 0.157143 0.324639 0.208516 0.947616 -0.240093 1.05504 c -0.381382 0.091323 -1.00726 0.018505 -1.04696 -0.552937 c -0.037346 -0.537486 0.589636 -0.422723 1.39834 0.0572"];
      return;

    case "ER8":
      this.dp = p(6.4732, -4.6466);
      this.paths = ["m 0 0 c 0.90591 -2.1342 4.22914 -5.639 6.1478 -4.9784 c 0.3033 0.0986 0.4472 0.5423 0.4194 0.86 c -0.0168 0.2412 -0.1721 0.5388 -0.4056 0.6014 c -0.2018 0.0578 -0.57388 -0.0605 -0.61393 -0.2665 c -0.08919 -0.4589 0.47143 -0.6513 0.92553 -0.8631"];
      return;

    case "ER16":
      this.dp = p(7.01492, -4.39604);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.435292 0 0.65908 0.046464 0.772117 0.298136 c 0.221786 0.493797 -0.074155 1.30169 -0.569067 1.52098 c -0.280507 0.124288 -0.831953 -0.034288 -0.855245 -0.340212 c -0.043902 -0.576648 0.798139 -0.651048 1.49642 -0.877941"];
      return;

    case "EL4":
      this.dp = p(6.68613, -4.21205);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.2753 0 0.596885 0.151264 0.632499 0.397763 c 0.074249 0.513899 -0.516593 1.2463 -1.02998 1.16858 c -0.374153 -0.056641 -0.698636 -0.738051 -0.464932 -1.03568 c 0.288434 -0.367325 1.03566 -0.015591 1.37784 0.254277"];
      return;

    case "EL4":
      this.dp = p(6.68613, -4.21205);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.2753 0 0.605464 0.150176 0.632499 0.397763 c 0.051853 0.474857 -0.553506 1.11011 -1.01986 1.00672 c -0.292799 -0.064916 -0.506089 -0.613826 -0.313182 -0.843462 c 0.265095 -0.315569 0.873789 -0.045941 1.21597 0.223927"];
      return;
  }

  switch (_head) {
    case "SEL":
      this.dp.set(5.6465, -4.96427);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.340299 0 0.503032 0.253141 0.536378 0.493884 c 0.036105 0.260668 -0.150432 0.67679 -0.413554 0.672486 c -0.435037 -0.00712 -0.650381 -0.582996 -0.64702 -1.13364"];
      return;

    case "SWR":
      this.dp.set(6.34074, -3.69964);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.2753 0 0.586373 0.276884 0.610807 0.549706 c 0.033194 0.370641 -0.396647 0.784478 -0.6839 0.882366 c -0.165748 0.056483 -0.476547 0.040115 -0.630863 -0.042643 c -1.25493 -0.673045 0.873996 -1.65002 0.873996 -0.092068"];
      return;

    case "S":
      this.dp = p(5.49979, -4.94365);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.2753 0 0.632342 0.143832 0.655595 0.39851 c 0.02529 0.276987 -0.290675 0.644354 -0.622742 0.555377 c -0.322919 -0.086526 -0.703768 -0.616207 -0.703768 -0.900532"];
      return;

    case "SE":
      this.dp = p(5.20004, -4.88636);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.449809 0 0.575534 0.297236 0.520514 0.541477 c -0.047618 0.211381 -0.393356 0.26049 -0.607906 0.230203 c -0.364134 -0.051404 -0.57162 -0.349392 -0.883264 -0.661036"];
      return;

    case "E":
      this.dp = p(7.05241, -4.37365);
      this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.435292 0 0.76762 0.114382 0.859944 0.419694 c 0.117295 0.387892 -0.231536 0.915372 -0.614017 1.04926 c -0.341375 0.119501 -1.03024 -0.028985 -1.01246 -0.390234 c 0.028014 -0.56931 0.935673 -0.45537 1.64825 -0.45537"];
      return;
  }

  this.dp = p(5.99643, -4.99334);
  this.paths = ["m 0 0 c 0.9622 -2.5068 3.5566 -4.997 6.1707 -4.997 c 0.2753 0 0.528444 0.250972 0.536378 0.493884 c 0.00991 0.303312 -0.340825 0.56119 -0.628078 0.659078 c -0.165748 0.056483 -0.43293 0.072514 -0.519219 -0.079858 c -0.189742 -0.335054 0.372153 -0.81064 0.436653 -1.06944"];
};

WasedaYo = function() { WasedaChar.call(this, "WasedaYo", "よ", "NER16", "NER", "NER", "black", false, p(0.0, 5.7)); };
WasedaYo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["よ"] = WasedaYo;

WasedaYo.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel().replace(/X/, '');
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

  switch (model_ + "_" + _head) {
    case "S4CR1_E":
    case "S4CR1_ER":
    case "S4CR1_NER":
      this.dp = p(13.8564, -8);
      this.paths = ["m 0 0 c 2.03772 -2.91015 12.4544 -13.1706 13.8564 -8"];
      return;

    case "S4CR1_SWR":
     this.dp = p(13.8564, -8);
     this.paths = ["m 0 0 c 2.03772 -2.91015 11.8334 -10.023 13.8564 -8"];
     return;
  }

  switch (model_) {
    case "SW4CL1":
    case "S4CR1":
    case "SW8CR1":
    case "SW16CR1":
      this.dp = p(13.8564, -8);
      this.paths = ["m 0 0 c 2.03772 -2.91015 10.5734 -8 13.8564 -8"];
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  switch (_head) {
    case "BNER":
      this.dp.set(13.1064, -9.1772);
      this.paths = ["m 0 0 c 2.22622 -6.1165 10.6447 -13.441 13.1064 -9.1772"];
      return;

    case "SER":
      this.dp = p(8, -13.856);
      this.paths = ["m 0 0 c 0 -4.516 4.0812 -13.856 8 -13.856"];
      return;

    case "S":
      this.dp = p(11.3137, -11.314);
      this.paths = ["m 0 0 c 2.1524 -5.914 11.3137 -16.187 11.3137 -11.314"];
      return;

    case "E":
    case "ER":
    case "NER":
    case "E":
      this.dp = p(13.1064, -9.1772);
      this.paths = ["m 0 0 c 2.22622 -6.1165 12.2962 -13.773 13.1064 -9.1772"];
      return;

    case "SWR":
      this.dp = p(12.853, -9.77455);
      this.paths = ["m 0 0 c 1.2151 -3.3384 8.59164 -14.0257 12.853 -9.77455"];
      return;
  }

  this.dp = p(11.3138, -11.3137);
  this.paths = ["m 0 0 c 1.2151 -3.3384 7.9227 -11.3137 11.3138 -11.3137"];
};

WasedaChi = function() { WasedaChar.call(this, "WasedaChi", "ち", "SW8CR1", "SW", "SWCR", "black", false, p(2.9, -3.3)); };
WasedaChi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ち"] = WasedaChi;
WasedaChi.prototype.getFilteredPrevTailType = WasedaTa.prototype.getFilteredPrevTailType;
WasedaChi.prototype.reverse = function() {
  this.headType = "NE";
  this.tailType = "NECL";
  this.model = "NE8CL1";
};
WasedaChi.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getFilteredPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (tail_ + "_" + _headModel) {
    case "R_EL8":
      this.dp = p(6.53713, -4.25044);
      this.paths = ["m 0 0 c 2.26448 -1.53943 4.57194 -3.0056 6.851 -4.4493 c 1.10192 -0.763812 -0.561368 -0.899328 -0.829113 -0.666757 c -0.253503 0.2202 -0.1295 0.668512 0.515243 0.865617"];
      this.reverse();
      return;
  }

  switch (tail_ + "_" + _head) {
    case "SERCR_SE":
      this.dp = p(6.47839, -4.23201);
      this.paths = ["m 0 0 c 2.26448 -1.53943 4.57194 -3.0056 6.851 -4.4493 c 0.8233 -0.521531 -0.197089 -0.975534 -0.545199 -0.928874 c -0.40377 0.05412 -0.702751 0.270834 0.172589 1.14616"];
      this.reverse();
      return;

    case "R_SW":
      this.dp = p(5.77029, -3.764);
      this.paths = ["m 0 0 c 2.26448 -1.53943 4.57194 -3.0056 6.851 -4.4493 c 0.8233 -0.521531 -0.291622 -1.48413 -0.535556 -0.813953 c -0.143911 0.39538 -0.418539 1.15139 -0.545157 1.49926"];
      this.reverse();
      return;
  }

  switch (tail_) {
    case "R":
      this.dp = p(6.53713, -4.25044);
      this.paths = ["m 0 0 c 2.26448 -1.53943 4.57194 -3.0056 6.851 -4.4493 c 1.10192 -0.763812 -0.280593 -1.15681 -0.566 -0.8714 c -0.385784 0.385784 0.073648 0.761117 0.252133 1.07026"];
      this.reverse();
      return;

    case "SW":
    case "SERCR":
      this.dp = p(6.47839, -4.23201);
      this.paths = ["m 0 0 c 2.26448 -1.53943 4.57194 -3.0056 6.851 -4.4493 c 0.8233 -0.521531 0.0276 -1.05043 -0.32051 -1.00377 c -0.40377 0.05412 -0.25421 0.870841 -0.0521 1.22106"];
      this.reverse();
      return;
  }

  switch (_name) {
    case "WasedaSai":
    case "WasedaSei":
     this.dp = p(-2.31036, 6.31636);
     this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.202216 0.754679 -1.15458 0.014599 -0.808639 -0.584591 c 0.193614 -0.335349 0.62137 -0.336123 1.13568 -0.336123"];
     return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "SWL16":
      this.dp = p(-2.96792, 7.47714);
      this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.15815 0.5902 -1.30354 -0.036177 -0.837562 -0.50215 c 0.34567 -0.34567 0.714877 -0.365017 0.895643 -0.123856 c 0.189781 0.253188 -0.103545 0.581017 -0.388601 0.866072"];
      return;

    case "EL16":
      this.dp = p(-2.37403, 6.49574);
      this.paths = ["m 0 0 c -0.750053 2.06535 -1.82115 5.17387 -2.6374 7.23707 c -0.15815 0.5902 -1.27524 -0.210091 -0.945747 -0.780791 c 0.17532 -0.2918 0.334236 -0.233565 1.20911 0.039462"];
      return;

    case "EL8":
      this.dp = p(-2.40816, 6.59592);
      this.paths = ["m 0 0 c -0.810734 2.06327 -1.92536 5.23978 -2.67013 7.33311 c -0.1914 0.53797 -1.11511 -0.474227 -0.940642 -0.862111 c 0.165326 -0.367557 0.820941 0.000902 1.20261 0.124922"];
      return;

    case "SER8":
      this.dp = p(-2.37703, 6.50417);
      this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.15815 0.5902 -0.803672 -0.034311 -0.962284 -0.547128 c -0.121807 -0.393823 0.356004 -0.792615 1.22266 -0.18577"];
      return;

    case "SE4":
      this.dp = p(-2.47531, 6.78101);
      this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.172876 0.428219 -1.02322 0.334473 -0.928669 -0.599675 c 0.06193 -0.611854 0.514077 -0.433059 1.09076 0.143613"];
      return;
  }

  switch (_head) {
    case "BE":
      this.dp.set(-3.72284, 7.49839);
      this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.15815 0.5902 -0.965787 0.103367 -0.965787 -0.515466 c 0 -0.430041 0.241376 -0.75309 0.528158 -0.665816 c 0.167072 0.050844 0.264903 0.239188 0.264903 0.6183 c 0 0.824302 -0.365472 0.824302 -0.91271 0.824302"];
      return;

    case "SWR":
      this.dp = p(-2.6374, 7.23707);
      this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.15815 0.5902 -1.0498 0.430577 -0.800381 -0.320464 c 0.10729 -0.323068 0.800381 -1.09877 0.800381 0.320464"];
      return;

    case "SEL":
      this.dp = p(-2.58089, 7.07816);
      this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.15815 0.5902 -0.821381 0.000244 -0.821381 -0.488461 c 0 -0.305512 0.221549 -0.796551 0.523812 -0.752106 c 0.375344 0.055191 0.335438 0.513575 0.354081 1.08166"];
      return;

    case "E":
      this.dp = p(-2.37824, 6.47577);
      this.paths = ["m 0 0 c -0.81073 2.06327 -1.88487 5.08986 -2.62964 7.18319 c -0.26253 0.7379 -0.99705 -0.04434 -0.9737 -0.393647 c 0.0281 -0.42061 0.8453 -0.313774 1.2251 -0.313774"];
      return;

    case "NER":
      this.dp = p(-1.87658, 5.09595);
      this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.15815 0.5902 -0.975197 0.312105 -0.645708 -0.258595 c 0.17532 -0.2918 1.14952 -1.51548 1.40653 -1.88253"];
      return;

    case "S":
      this.dp = p(-2.36802, 6.47881);
      this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.15815 0.5902 -0.768887 -0.237394 -0.709736 -0.525824 c 0.06739 -0.328602 0.979114 -1.02348 0.979114 -0.232439"];
      return;
  }

  this.dp = p(-2.1692, 5.9151);
  this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.15815 0.5902 -1.12987 0.250236 -0.800381 -0.320464 c 0.17532 -0.2918 0.922846 -0.777012 1.26858 -1.00151"];
};

WasedaTe = function() { WasedaChar.call(this, "WasedaTe", "て", "NE16CL1", "NE", "NECL", "black", false, p(0.0, 5.9)); };
WasedaTe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["て"] = WasedaTe;
WasedaTe.prototype.filterReverseTail = WasedaTo.prototype.filterReverseTail;
WasedaTe.prototype.reverse = function() {
  this.headType = "SW";
  this.tailType = "SWCR";
  this.model = "SW16CR1";
};
WasedaTe.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();
  const _headModel = this.getNextHeadModel();

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

  switch (this.filterReverseTail(tail_) + "_" + _head) {
    case "R_E":
      this.dp = p(-6.37683, 13.6597);
      this.paths = ["m 0 0 c -2.34021 4.59727 -4.09104 9.86559 -6.736 14.4468 c -0.179184 0.310355 -0.444977 0.311439 -0.668965 0.23575 c -0.243504 -0.08228 -0.515167 -0.405054 -0.422731 -0.644889 c 0.179727 -0.466321 0.720884 -0.377918 1.45086 -0.377918"];
      this.reverse();
      return;

    case "R_SEL":
      this.dp.set(-5.13058, 14.0904);
      this.paths = ["m 0 0 c -1.69714 4.66285 -3.58002 9.78629 -5.35229 14.7053 c -0.144 0.4175 -0.558155 0.325094 -0.711 0.1382 c -0.318725 -0.389727 0.074063 -1.36684 0.576681 -1.39596 c 0.266447 -0.01544 0.356036 0.158385 0.356036 0.642899"];
      this.reverse();
      return;
  }

  switch (this.filterReverseTail(tail_) + "_" + _headModel) {
    case "R_EL16":
      this.dp = p(-6.41977, 13.754);
      this.paths = ["m 0 0 c -2.34021 4.59727 -4.53528 9.63638 -6.736 14.4468 c -0.144 0.4175 -0.507884 0.268719 -0.711 0.1382 c -0.285466 -0.183436 -0.464691 -0.736651 -0.238539 -0.989623 c 0.283404 -0.317012 0.892513 0.03748 1.26577 0.158654"];
      this.reverse();
      return;

    case "R_EL4":
      this.dp = p(-6.39789, 13.706);
      this.paths = ["m 0 0 c -2.34021 4.59727 -4.53528 9.63638 -6.736 14.4468 c -0.204102 0.446135 -0.518911 0.228203 -0.695405 0.07582 c -0.269676 -0.232834 -0.315304 -0.841496 -0.040359 -1.06808 c 0.28371 -0.233811 0.77878 0.09569 1.07387 0.251453"];
      this.reverse();
      return;

    case "R_EL8":
      this.dp = p(-6.39789, 13.706);
      this.paths = ["m 0 0 c -2.34021 4.59727 -4.53528 9.63638 -6.736 14.4468 c -0.204102 0.446135 -0.518911 0.228203 -0.695405 0.07582 c -0.269676 -0.232834 -0.315304 -0.841496 -0.040359 -1.06808 c 0.28371 -0.233812 0.520389 0.0716 1.07387 0.251453"];
      this.reverse();
      return;
  }

switch (this.filterReverseTail(tail_)) {
    case "R":
      this.dp = p(-6.16595, 13.196);
      this.paths = ["m 0 0 c -2.34021 4.59727 -4.53528 9.63638 -6.736 14.4468 c -0.144 0.4175 -0.54177 0.310399 -0.711 0.1382 c -0.18615 -0.189418 -0.26913 -0.522237 0.1656 -0.779336 c 0.2863 -0.169316 0.81945 -0.451846 1.11545 -0.609646"];
      this.reverse();
      return;
  }

  //switch (_name) {}

  switch (_headModel) {
    case "EL4":
      this.dp = p(9.84128, -11.5678);
      this.paths = ["m 0 0 c 3.24938 -3.82788 6.56818 -8.36248 10.0638 -11.7875 c 0.289768 -0.283918 0.266394 -0.592683 0.08359 -0.779359 c -0.200371 -0.204616 -0.644256 -0.119138 -0.855987 0.0737 c -0.350471 0.319194 0.029922 0.648929 0.549883 0.925399"];
      return;

    case "SER8":
      this.dp = p(9.86129, -10.5895);
      this.paths = ["m 0 0 c 3.27921 -3.75924 6.74414 -7.38622 10.1917 -10.9293 c 0.4169 -0.3754 0.265013 -0.593038 0.0819 -0.7793 c -0.335104 -0.340867 -1.26764 -0.324578 -1.4285 0.125542 c -0.159424 0.446094 0.651052 0.737856 1.01619 0.99353"];
      return;

    case "NEL8":
      this.dp = p(10.1905, -10.9281);
      this.paths = ["m 0 0 c 3.27921 -3.75924 6.69605 -7.43365 10.1917 -10.9293 c 0.284296 -0.284296 0.296239 -0.598731 0.09601 -0.753949 c -0.370763 -0.287415 -1.18711 -0.01372 -1.3077 0.520174 c -0.110137 0.487631 0.68887 0.512305 1.21046 0.235004"];
      return;

    case "ER8":
      this.dp = p(9.44089, -11.3614);
      this.paths = ["m 0 0 c 3.18352 -3.82759 6.43506 -8.36185 9.85983 -11.7866 c 0.283896 -0.283896 0.308413 -0.649239 0.0819 -0.7793 c -0.538315 -0.309094 -1.66415 0.502697 -1.50137 1.10172 c 0.087916 0.323534 0.495585 0.317048 1.00053 0.102812"];
      return;

    case "EL8":
      this.dp = p(9.7548, -10.558);
      this.paths = ["m 0 0 c 3.27921 -3.75924 6.74414 -7.38622 10.1917 -10.9293 c 0.345553 -0.355127 0.293862 -0.62667 0.0819 -0.7793 c -0.369512 -0.266079 -1.18606 0.11442 -1.24318 0.566167 c -0.038915 0.307798 0.299442 0.446353 0.724379 0.584433"];
      return;
  }

  switch (_head) {
    case "SWL":
      this.dp.set(11.2952, -6.693);
      this.paths = ["m 0 0 c 4.3029 -2.504 8.912 -5.649 13.3034 -7.692 c 0.364 -0.169 0.2456 -0.55 0.0529 -0.652 c -0.580237 -0.30826 -1.5651 0.792 -2.0611 1.651"];
      return;

    case "SEL":
      this.dp = p(9.19787, -11.1091);
      this.paths = ["m 0 0 c 3.18352 -3.82759 6.43506 -8.36185 9.85983 -11.7866 c 0.40728 -0.553083 0.010681 -1.06569 -0.407343 -0.8752 c -0.378967 0.172688 -0.254622 1.01121 -0.254622 1.55272"];
      return;

    case "S":
      this.dp = p(9.53261, -10.2511);
      this.paths = ["m 0 0 c 3.27921 -3.75924 6.74414 -7.38622 10.1917 -10.9293 c 0.22987 -0.236239 0.221307 -0.617198 0.04275 -0.828242 c -0.08826 -0.104319 -0.297177 -0.127937 -0.407246 -0.04696 c -0.424524 0.312325 -0.294591 0.962206 -0.294591 1.55342"];
      return;

    case "E":
      this.dp = p(9.44089, -11.3614);
      this.paths = ["m 0 0 c 3.18352 -3.82759 6.43507 -8.36184 9.85983 -11.7866 c 0.198628 -0.198628 0.00422 -0.529659 -0.371598 -0.529659 c -0.483905 0 -1.08294 0.473757 -1.01318 0.734094 c 0.075174 0.280554 0.576248 0.220765 0.965835 0.220765"];
      return;

    case "SW":
      this.dp.set(8.507, -10.3706);
      this.paths = ["m 0 0 c 3.18352 -3.82759 6.43506 -8.36185 9.85983 -11.7866 c 0.468108 -0.468105 -0.455539 -1.04926 -0.787882 -0.196843 c -0.109224 0.330593 -0.257322 0.767626 -0.56495 1.6128"];
      return;
  }

  this.dp = p(9.44089, -11.3614);
  this.paths = ["m 0 0 c 3.18352 -3.82759 6.43506 -8.36185 9.85983 -11.7866 c 0.283896 -0.283896 0.2463 -0.5763 0.0819 -0.7793 c -0.1259 -0.1611 -0.454 -0.2328 -0.606 -0.0959 c -0.3046 0.284 -0.025641 0.992434 0.105159 1.30043"];
};


WasedaAn = function() { WasedaChar.call(this, "WasedaAn", "あん", "EL4F", "EL", "ELF", "black", false, p(0.0, 0.3)); };
WasedaAn.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["あん"] = WasedaAn;

WasedaAn.prototype.setPaths = function() {
  this.dp = p(5.73205, -1);
  this.paths = ["m 0 0 c 1.04821 0.5574 2.97476 0.5919 4 0"];

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
    case "SWL8":
      this.dp.x += 0.5;
      this.dp.y += 1;
      return;
  }

  //switch (_head) {}
};

WasedaIn = function() { WasedaChar.call(this, "WasedaIn", "い", "ER4NE1F", "ER", "NEF", "black", false, p(0.0, 1.1)); };
WasedaIn.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["いん"] = WasedaIn;

WasedaIn.prototype.setPaths = function() {
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

  //switch (_head) {}


  this.dp = p(6.82842, -2.82842);
  this.paths = ["m 0 0 c 1.41 -0.8141 4.60079 -1.88614 4 0 l 1.41421 -1.41421"];
};

WasedaUn = function() { WasedaChar.call(this, "WasedaUn", "うん", "S4NE1F", "S", "SF", "black", false, p(0.0, -2.0)); };
WasedaUn.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["うん"] = WasedaUn;
WasedaChar.dict["クン"] = WasedaUn;

WasedaUn.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(3.27408, 1.82135);
  this.paths = ["m 0 0 v 4 c 0.345163 -0.471403 0.524663 -0.942807 1.41421 -1.41421"];
};

WasedaEn = function() { WasedaChar.call(this, "WasedaEn", "えん", "SE4NE1F", "SE", "NEF", "black", false, p(0.0, -1.4)); };
WasedaEn.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["えん"] = WasedaEn;

WasedaEn.prototype.setPaths = function() {
  this.dp = p(5.44144, 0.259613);
  this.paths = ["m 0 0 l 2.82843 2.8284 c 0.061958 -0.530441 0.400725 -1.02792 0.957906 -1.44602"];

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
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

  //switch (tail_) {}

  switch (_name) {
    case "WasedaNodesu":
      this.dp.move(1, 0);
      return;
  }

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
};

WasedaOn = function() { WasedaChar.call(this, "WasedaOn", "おん", "SW4NE1F", "SW", "NEF", "black", false, p(1.4, -1.9)); };
WasedaOn.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["おん"] = WasedaOn;

WasedaOn.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(2.23346, 2.02191);
  this.paths = ["m 0 0 l -1.36291 3.74445 c 0.499009 -0.454771 0.966662 -0.956577 1.64856 -1.13702"];
};

WasedaKan = function() { WasedaChar.call(this, "WasedaKan", "か", "E8NE1F", "E", "NEF", "black", false, p(0.0, 0.0)); };
WasedaKan.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["かん"] = WasedaKan;

WasedaKan.prototype.setPaths = function() {
  this.dp = p(10.6082, -2.3427);
  this.paths = ["m 0 0 h 8 c 0.284462 -0.471403 0.544353 -0.718694 0.959694 -1.01317"];

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
    case "SWL8":
      this.dp.x += 1;
      return;
  }

  //switch (_head) {}
};

WasedaTan = function() { WasedaChar.call(this, "WasedaTan", "たん", "SW8NE1F", "SW", "NEF", "black", false, p(2.7, -3.8)); };
WasedaTan.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["たん"] = WasedaTan;

WasedaTan.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(-0.170556, 5.1128);
  this.paths = ["m 0 0 l -2.73616 7.5176 l 1.06066 -1.06066"];
};

WasedaKin = function() { WasedaChar.call(this, "WasedaKin", "きん", "E8CL1E1F", "E", "EF", "black", false, p(0.0, 0.5)); };
WasedaKin.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["きん"] = WasedaKin;

WasedaKin.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(11.69346, -0.11825);
  this.paths = ["m 0 0 c 2.82603 -0.1481 5.33402 -0.0931 8.00001 0 c 0.36049 0.0126 0.390319 -0.966503 -0.391581 -0.966503 c -0.72857 0 -0.962131 0.922981 -0.598449 0.869403 c 0.305588 0.002287 0.850517 -0.03855 1.18348 -0.02115 h 1.5"];
};

WasedaSan = function() { WasedaChar.call(this, "WasedaSan", "さん", "NEL8F", "NEL", "NELF", "black", false, p(0.0, 3.5)); };
WasedaSan.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["さん"] = WasedaSan;
WasedaSan.prototype.getFilteredPrevTailType = WasedaSa.prototype.getFilteredPrevTailType;
WasedaSan.prototype.reverse = function() {
  this.headType = "SWR";
  this.tailType = "NEF";
  this.model = "SWR8NE1F";
};
WasedaSan.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getFilteredPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  this.dp = p(6.17803, -7.01386);
  this.paths = ["m 0 0 c 2.01641 -1.1642 5.04219 -2.82488 5.6479 -5.0854"];

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
    case "R":
      this.dp = p(-0.28054, 5.8079);
      this.paths = ["m 0 0 c 0 3.2179 -2.31848 6.00458 -3.66998 6.78487 l 1.45759 -0.459329"];
      this.reverse();
      return;

    case "NER":
      this.dp = p(-0.398029, 5.33064);
      this.paths = ["m 0 0 c 1.99117 1.99117 -2.37334 6.02486 -3.42912 7.08064 l 1.29904 -0.75"];
      this.reverse();
      return;

    case "ER":
      this.dp.set(-2.21239, 6.32554).pmove(2, -18);
      this.paths = ["m 0 0 c 1.30093 2.25326 -2.0242 6.34388 -3.66998 6.78487 l 1.45759 -0.459329"];
      this.reverse();
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "SWL8":
      this.dp.move(2, 1.5);
      return;
  }

  switch (_head) {
    case "SL":
    case "SW":
      this.dp.move(1.5, -0.3);
      return;
  }
};

WasedaSun = function() { WasedaChar.call(this, "WasedaSun", "すん", "NEL8CL4NE1F", "NEL", "NEF", "black", false, p(0.0, 3.0)); };
WasedaSun.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["すん"] = WasedaSun;
WasedaSun.prototype.getFilteredPrevTailType = WasedaSa.prototype.getFilteredPrevTailType;
WasedaSun.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(8.24647, -3.99453);
  this.paths = ["m 0 0 c 2.0288 -1.1246 5.7144 -2.6743 5.7144 -4.9674 c 0 -0.974244 -0.76502 -0.992617 -1.28555 -0.91591 c -1.22747 0.180887 -2.85917 1.84545 -2.27958 2.94249 c 0.424822 0.804107 2.16192 -0.014316 2.72331 -0.164741 l 1.40954 -0.513029", "m 8.24647 -3.99453 v 0"];
};

WasedaSon = function() { WasedaChar.call(this, "WasedaSon", "そん", "NEL16F", "NEL", "NELF", "black", false, p(0.0, 6.6)); };
WasedaSon.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["そん"] = WasedaSon;
WasedaSon.prototype.getFilteredPrevTailType = WasedaSa.prototype.getFilteredPrevTailType;
WasedaSon.prototype.setPaths = function() {
  this.dp = p(12.0293, -13.1813);
  this.paths = ["m 0 0 c 3.0032 -2.0256 10.3796 -7.82744 11.3137 -11.3137"];

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
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

  switch (tail_ + "_" + _head) {
    case "R_SWR":
     this.dp = p(-4.61056, 12.8794);
     this.paths = ["m 0 0 c 0 4.2341 -6.24243 13.3855 -8 13.8564 l 1.45759 -0.459329", "m -4.61056 12.8794 v 0"];
     return;
  }

  //switch (tail_) {}

  //switch (_name) {}

  console.log(_model);
  switch (_model) {
    case "SW4CR1":
    case "SW4NW1|SW4CR1":
      this.dp.move(1.2, 0);
      return;
  }

  //switch (_headModel) {}

  switch (_head) {
    case "SW":
      this.dp.move(0.7, 0);
      return;
  }

};


WasedaChin = function() { WasedaChar.call(this, "WasedaChin", "ちん", "SW8CR1NE1F", "SW", "NEF", "black", false, p(3.5, -3.8)); };
WasedaChin.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ちん"] = WasedaChin;

WasedaChin.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(0.875081, 4.21592);
  this.paths = ["m 0 0 c -0.810734 2.06327 -1.89263 5.14374 -2.6374 7.23707 c -0.15815 0.5902 -1.12987 0.250236 -0.800381 -0.320464 c 0.17532 -0.2918 0.922846 -0.777012 1.26858 -1.00151 l 1.22876 -0.86032"];
};

WasedaTsun = function() { WasedaChar.call(this, "WasedaTsun", "つん", "S4CR1NE1F", "S", "NEF", "black", false, p(1.1, -2.3)); };
WasedaTsun.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["つん"] = WasedaTsun;

WasedaTsun.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(2.77989, 0.86912);
  this.paths = ["m 0 0 v 4 c 0 0.565945 -0.567037 0.8732 -0.9 0.5588 c -0.59069 -0.5576 0.424556 -1.17201 0.9 -1.56766 l 1.14939 -0.963799"];
};

WasedaTen = function() { WasedaChar.call(this, "WasedaTen", "てん", "NE16CL1NE1F", "NE", "NEF", "black", false, p(0.0, 7.3)); };
WasedaTen.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["てん"] = WasedaTen;

WasedaTen.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(12.3121, -14.6068);
  this.paths = ["m 0 0 c 3.18352 -3.82759 6.43506 -8.36185 9.85983 -11.7866 c 0.283896 -0.283896 0.2463 -0.5763 0.0819 -0.7793 c -0.445776 -0.445776 -1.25069 0.349359 -1.08538 0.758649 c 0.145979 0.361435 0.719126 0.30792 1.1549 -0.183619 l 0.972907 -1.12037"];
};

WasedaTon = function() { WasedaChar.call(this, "WasedaTon", "とん", "NE16NE1F", "NE", "NEF", "black", false, p(0.0, 7.8)); };
WasedaTon.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["とん"] = WasedaTon;
WasedaTon.prototype.filterReverseTail = WasedaTo.prototype.filterReverseTail;
WasedaTon.prototype.reverse = function() {
  this.headType = "SW";
  this.tailType = "NEF";
  this.model = "SW1NE1F";
};
WasedaTon.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.filterReverseTail(this.getPrevTailType());
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

  switch (tail_ + "_" + _head) {
    case "_SW":
      this.dp = p(-3.87094, 12.5398 - 15);
      this.paths = ["m 0 -15 l -6.76188 14.5009 l 1.17817 -0.928409"];
      this.reverse();
      return;

    case "R_SW":
      this.dp = p(12.4728, -15.5415);
      this.paths = ["m 0 0 c 3.4282 -4.08557 9.06295 -11.3863 10.2846 -12.2567 l 0.610987 -1.36992"];
      this.reverse();
      return;
  }

  switch (tail_) {
    case "R":
      this.dp = p(-3.87094, 12.5398);
      this.paths = ["m 0 0 l -6.76188 14.5009 l 1.17817 -0.928409"];
      this.reverse();
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
  }

  this.dp = p(11.4728, -15.5415);
  this.paths = ["m 0 0 c 3.4282 -4.08557 9.06295 -11.3863 10.2846 -12.2567 l 0.610987 -1.36992"];
};

WasedaTonHenki = function() { WasedaChar.call(this, "WasedaTon", "とん", "SW16NE1F", "SW", "NEF", "black", false, p(0.0, -7.8)); };
WasedaTonHenki.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["とんｈ"] = WasedaTonHenki;
WasedaTonHenki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
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

  switch (tail_ + "_" + _head) { }

  switch (tail_) { }
  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
  }

  this.dp = p(-3.87094, 12.5398);
  this.paths = ["m 0 0 l -6.76188 14.5009 l 1.17817 -0.928409"];
};


WasedaHan = function() { WasedaChar.call(this, "WasedaHan", "はん", "SEL8F", "SEL", "SELF", "black", false, p(0.0, -2.6)); };
WasedaHan.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["はん"] = WasedaHan;

WasedaHan.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(5.68513, 3.25478);
  this.paths = ["m 0 0 c 0 5.4461 2.95975 5.80726 4.18711 4.5799"];
};

WasedaNin = function() { WasedaChar.call(this, "WasedaNin", "にん", "EL8CL1E1F", "EL", "EF", "black", false, p(0.0, -0.2)); };
WasedaNin.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["にん"] = WasedaNin;

WasedaNin.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(11.419, 0.1906);
  this.paths = ["m 0 0 c 2.192 0.6285 7.941 1.9127 7.941 0 c -0.11 -0.6925 -1.10255 -0.657626 -1.31955 -0.212326 c -0.286 0.587 0.642552 0.402926 1.29755 0.402926 h 1.5"];
};

WasedaThree = function() { WasedaChar.call(this, "WasedaThree", "３", "UER3UER3", "UER", "UER", "black", false, p(0.2, -1.6), 3); };
WasedaThree.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["３"] = WasedaThree;

WasedaThree.prototype.setPaths = function() {
  this.dp = p(-0.06441, 4.54089);
  this.paths = ["m 0 0 c 0.988395 -0.988396 2.61829 -1.19918 3.15608 -0.28985 c 0.48804 0.825209 -0.614458 1.82303 -1.61025 2.38317 c 1.57018 0.0513 1.67679 0.680557 1.54584 1.3526 c -0.212972 1.09299 -1.98772 2.26333 -3.15608 1.09497"];

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
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

  //switch (tail_) {}

  switch (_name) {
    case "WasedaZero":
      this.dp = p(7, -0.20);
      return;
  }

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

};

WasedaNen = function() { WasedaChar.call(this, "WasedaNen", "ねん", "EL16CL1E1F", "EL", "EF", "black", false, p(0.0, -0.3)); };
WasedaNen.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ねん"] = WasedaNen;

WasedaNen.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(19.3877, -4e-06);
  this.paths = ["m 0 0 c 2.87017 0.558 15.8213 2.735 15.8213 0 c 0 -0.343 -0.06851 -0.857695 -0.6056 -0.925273 c -0.419685 -0.052806 -1.1064 0.302458 -1.0558 0.715458 c 0.06 0.488 1.14179 0.29675 1.67811 0.274397 l 1.54965 -0.064586"];
};

WasedaHen = function() { WasedaChar.call(this, "WasedaHen", "へん", "SEL16CL1E1F", "SEL", "EF", "black", false, p(0.0, -7.0)); };
WasedaHen.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["へん"] = WasedaHen;

WasedaHen.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(12.2167, 13.2206);
  this.paths = ["m 0 0 c 0 8.2946 1.4198 15.0205 7.9403 13.753 c 0.752487 -0.201628 0.856192 -0.593229 0.774183 -1.0092 c -0.060678 -0.307776 -0.500448 -0.495727 -0.813355 -0.47342 c -0.337609 0.02407 -0.875154 0.300984 -0.79623 0.63012 c 0.126008 0.52549 0.71422 0.320111 1.58924 0.320111 l 1.52254 -3e-06"];
};


WasedaHon = function() { WasedaChar.call(this, "WasedaHon", "ほん", "SEL16F", "SEL", "SELF", "black", false, p(0.0, -6.1)); };
WasedaHon.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ほん"] = WasedaHon;

WasedaHon.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(9.55449, 9.898);
  this.paths = ["m 0 0 c 0 10.815 4.99297 14.1634 8 11.1564"];
};

WasedaMan = function() { WasedaChar.call(this, "WasedaMan", "まん", "ER8NE1F", "ER", "NEF", "black", false, p(0.0, 1.3)); };
WasedaMan.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["まん"] = WasedaMan;

WasedaMan.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(10.5515, -2.55149);
  this.paths = ["m 0 0 c 2.52091 -1.07 8.00001 -2.0823 8.00001 0 l 1.11363 -1.11364"];
};

WasedaMen = function() { WasedaChar.call(this, "WasedaMen", "めん", "ER16CR1NE1F", "ER", "NEF", "black", false, p(0.0, 2.0)); };
WasedaMen.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["めん"] = WasedaMen;

WasedaMen.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(17.909, -4.05285);
  this.paths = ["m 0 0 c 3.606 -1.1717 15.7617 -2.9503 15.8261 -1.1067 c 0.0156 0.2967 -0.07538 0.613394 -0.2989 0.7788 c -0.220843 0.163427 -0.6803 0.276 -0.8222 0.0575 c -0.2159 -0.374 0.376249 -0.95308 0.7192 -1.2976 l 1.05824 -1.06308"];
};

WasedaMin = function() { WasedaChar.call(this, "WasedaMin", "みん", "ER8CR1NE1F", "ER", "NEF", "black", false, p(0.0, 1.6)); };
WasedaMin.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["みん"] = WasedaMin;

WasedaMin.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(9.98552, -3.62634);
  this.paths = ["m 0 0 c 1.8517 -0.8635 7.9805 -2.1169 7.9805 -0.558 c 0 0.5964 -0.836363 1.16633 -1.2013 0.8411 c -0.394973 -0.351996 0.197185 -0.837987 0.7552 -1.396 l 1.06841 -1.06841"];
};

WasedaMon = function() { WasedaChar.call(this, "WasedaMon", "もん", "ER16NE1F", "ER", "NEF", "black", false, p(0.0, 1.3)); };
WasedaMon.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["もん"] = WasedaMon;

WasedaMon.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(18.463, -2.50927);
  this.paths = ["m 0 0 c 4.3601 -1.5869 15.326 -3.8223 16 0 l 1.0721 -1.0721"];
};

WasedaRan = function() { WasedaChar.call(this, "WasedaRan", "らん", "SER8NE1F", "SER", "NEF", "black", false, p(0.0, -3.5)); };
WasedaRan.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["らん"] = WasedaRan;

WasedaRan.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(6.50756, 4.42063);
  this.paths = ["m 0 0 c 2.26387 1.5852 5.22323 4.8095 4 6.9282 l 1.07181 -1.07182"];
};

WasedaRin = function() { WasedaChar.call(this, "WasedaRin", "りん", "SER8CR1NE1F", "SER", "NEF", "black", false, p(0.0, -3.2)); };
WasedaRin.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["りん"] = WasedaRin;

WasedaRin.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(6.71297, 2.6092);
  this.paths = ["m 0 0 c 1.8914 1.3243 4.3722 3.7473 4.3371 5.7555 c 0 1.0663 -1.47426 0.793947 -0.909594 0.200281 c 0.278193 -0.292477 0.58521 -0.56792 0.841716 -0.84172 l 1.02553 -1.09467"];
};

WasedaRen = function() { WasedaChar.call(this, "WasedaRen", "れん", "SER16CR1NE1F", "SER", "NEF", "black", false, p(0.0, -6.3)); };
WasedaRen.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["れん"] = WasedaRen;

WasedaRen.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(11.3748, 8.59813);
  this.paths = ["m 0 0 c 3.8244 2.1199 8.9636 8.2683 8.9017 11.813 c 0 1.0327 -1.51715 0.77874 -0.957311 0.215514 c 0.274919 -0.27658 0.622228 -0.622232 0.902011 -0.902016 l 1.09593 -1.09593"];
};

WasedaWan = function() { WasedaChar.call(this, "WasedaWan", "わん", "UWL4F", "WL", "ELF", "black", false, p(1.8, -1.7)); };
WasedaWan.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["わん"] = WasedaWan;

WasedaWan.prototype.setPaths = function() {
  this.dp = p(2.59334, 1.78216);
  this.paths = ["m 0 0 c -0.975 0.3745 -1.833 1.0997 -1.833 2.1089 c 0 1.50864 1.8714 1.76055 2.79777 0.834187"];
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
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

  //switch (tail_) {}

  //switch (_name) {}

  switch (_model) {
    case "SWL4SWR4":
      this.dp.move(0, 1);
      return;
  }

  //switch (_headModel) {}

  //switch (_head) {}
};

WasedaTateJoshi = function() { WasedaChar.call(this, "WasedaTateJoshi", "タテ", "SW8NW1|SW8CR1", "SW", "SWCR", "black", false, p(3.4, -3.8)); };
WasedaTateJoshi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["タテ"] = WasedaTateJoshi;

WasedaTateJoshi.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(-3.37592, 6.12109);
  this.paths = ["m 0 0 l -2.73616 7.5176 c -0.10953 -0.465502 -0.221256 -0.931004 -0.639765 -1.39651"];
};

WasedaTatoJoshi = function() { WasedaChar.call(this, "WasedaTatoJoshi", "タト", "SW8NE1|SW8CL1", "SW", "SWCR", "black", false, p(2.7, -3.8)); };
WasedaTatoJoshi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["タト"] = WasedaTatoJoshi;

WasedaTatoJoshi.prototype.setPaths = function() {
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
    case "SEL":
      this.dp = p(-1.91235, 5.25418);
      this.paths = ["m 0 0 l -2.50358 6.86185 c -0.317836 0.87113 0.2161 0.922357 0.436925 0.670392 c 0.238287 -0.271889 0.195005 -1.89811 0.154306 -2.27807"];
      return;
  }

  this.dp = p(-1.43857, 6.70153);
  this.paths = ["m 0 0 l -2.73616 7.5176 c 0.12032 -0.44904 0.938561 -0.816068 1.29759 -0.816068"];
};


WasedaDato = function() { WasedaChar.call(this, "WasedaDato", "だと", "SW8NE1|SW8CL1", "SW", "SWCR", "black", false, p(2.7, -3.8)); };
WasedaDato.prototype = Object.create(WasedaTatoJoshi.prototype);
WasedaChar.dict["だと"] = WasedaDato;
WasedaDato.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m -2.2584033,2.64108 v 0.1"];
};

WasedaToteJoshi = function() { WasedaChar.call(this, "WasedaToteJoshi", "トテ", "SW16NW1|SW16CR1", "SW", "SWCR", "black", false, p(7.4, -7.3)); };
WasedaToteJoshi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["トテ"] = WasedaToteJoshi;

WasedaToteJoshi.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_headModel) {
    case "ER8":
      this.dp.set(-4.92882, 13.5418);
      this.paths = ["m 0 0 l -5.4723 15.035 c -0.148999 0.40937 -0.675315 0.333869 -0.8031 0.09645 c -0.329126 -0.6115 0.637661 -1.18036 1.34658 -1.58966"];
      return;
  }

  switch (_head) {
    case "SW":
      this.dp = p(-6.48119, 13.8888);
      this.paths = ["m 0 0 c -2.34021 4.59727 -4.53528 9.63638 -6.736 14.4468 c -0.144 0.4175 -0.558155 0.325094 -0.711 0.1382 c -0.318725 -0.389727 0.074063 -1.36684 0.576681 -1.39596 c 0.266447 -0.01544 0.389128 0.215252 0.389128 0.699766"];
      return;

    case "SEL":
      this.dp.set(-5.13058, 14.0904);
      this.paths = ["m 0 0 c -1.69714 4.66285 -3.58002 9.78629 -5.35229 14.7053 c -0.144 0.4175 -0.558155 0.325094 -0.711 0.1382 c -0.318725 -0.389727 0.074063 -1.36684 0.576681 -1.39596 c 0.266447 -0.01544 0.356036 0.158385 0.356036 0.642899"];
      return;
  }

  this.dp.set(-6.11207, 13.6385);
  this.paths = ["m 0 0 l -5.4723 15.035 c -0.10953 -0.465502 -0.221256 -0.931004 -0.639765 -1.39651"];
};

WasedaTotoJoshi = function() { WasedaChar.call(this, "WasedaTotoJoshi", "トテ", "SW16NE1|SW16CL1", "SW", "SWCR", "black", false, p(6.8, -7.3)); };
WasedaTotoJoshi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["トト"] = WasedaTotoJoshi;

WasedaTotoJoshi.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(-5.46429, 13.6848);
  this.paths = ["m 0 0 l -6.76188 14.5009 c 0.12032 -0.44904 0.938561 -0.816068 1.29759 -0.816068"];
};

WasedaHai = function() { WasedaChar.call(this, "WasedaHai", "はい", "SEL4", "SEL", "SEL4", "black", false, p(0.0, -1.5)); };
WasedaHai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["はい"] = WasedaHai;

WasedaHai.prototype.setPaths = function() {
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
    case "E":
    case "SE":
    case "EL":
      this.dp = p(3.27993, 2.29595);
      this.paths = ["m 0 0 c 0 1.61602 1.71103 4.20452 3.27993 2.29595"];
      return;
  }

  this.dp = p(2.09355, 2.9899);
  this.paths = ["m 0 0 c 0 1.47086 0.398951 2.9899 2.09355 2.9899"];
};

WasedaSai = function() { WasedaChar.call(this, "WasedaSai", "さい", "UER4", "SER", "SWR", "black", false, p(0.0, -2.0)); };
WasedaSai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["さい"] = WasedaSai;

WasedaSai.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaRu":
      this.dp = p(0.142444, 5.18992);
      this.paths = ["m 0 0 c 0.913443 0.527376 2.2615 1.90793 2.14035 3.17987 c -0.089577 0.940432 -0.889795 1.71314 -1.99791 2.01005"];
      return;

    case "WasedaMu":
      this.dp = p(0.046693, 4.47939);
      this.paths = ["m 0 0 c 0.607248 0.350595 2.33796 1.60108 2.20226 2.77385 c -0.105315 0.91016 -1.04746 1.40863 -2.15557 1.70554"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (tailModel_) {
  }

  switch (model_) {
    case "OSEL4":
      this.dp = p(-0.687464, 4.33658);
      this.paths = ["m 0 0 c 0.536369 0.673343 1.97271 2.40175 1.44665 3.57457 c -0.309139 0.689201 -0.885311 1.12594 -2.13411 0.762005"];
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "NER":
      this.dp = p(0.2712, 3.98819);
      this.paths = ["m 0 0 c 1.46211 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.06147 1.71314 -2.16958 2.01005"];
      return;
  }

  switch (_name) {
    case "WasedaWai":
      this.dp = p(0.598586, 4.31558);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.669567 2.44078 1.71623 c 0.03261 0.985327 -0.806353 2.0013 -1.84219 2.59935"];
      return;
  }

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "NEL":
      this.dp.set(0.2712, 4.23074);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.20396 1.6951 -2.16958 2.25259"];
      return;

    case "NE":
      this.dp = p(0.342847, 4.43598);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.027281 0.824299 -1.4479 1.98557 -2.09793 2.45784"];
      return;

    case "SW":
     this.dp = p(0.130512, 3.32734);
     this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.06147 1.71314 -2.31027 1.3492"];
     return;
  }

  this.dp = p(0.271196, 3.9882);
  this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.06147 1.71314 -2.16958 2.01005"];
};

WasedaSareP = function() { WasedaChar.call(this, "WasedaSareP", "されｐ", "P/X", "P/X", "P/X", "black"); };
WasedaSareP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["されｐ"] = WasedaSareP;
WasedaChar.dict["され"] = [WasedaSareP, WasedaSai];

WasedaSareP.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.pdp.pset(4, 45);
};

WasedaNai = function() { WasedaChar.call(this, "WasedaNai", "ない", "USL4", "SEL", "NEL", "black", false, p(0.0, -1.3)); };
WasedaNai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ない"] = WasedaNai;

WasedaNai.prototype.setPaths = function() {
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
    case "SW":
     this.dp = p(5.32956, 1e-06);
     this.paths = ["m 0 0 c -2e-06 1.02926 0.631647 3.40084 1.94174 3.41748 c 1.32971 0.016904 3.11022 -2.93666 3.38782 -3.41748"];
     return;
  }

  this.dp = p(4, 0);
  this.paths = ["m 0 0 c -2e-06 1.02926 0.631647 3.40084 1.94174 3.41748 c 1.32971 0.016904 2.05826 -2.19838 2.05826 -3.41748"];
};

WasedaMai = function() { WasedaChar.call(this, "WasedaMai", "まい", "UNR4", "NER", "SER", "black", false, p(4.0, 1.1)); };
WasedaMai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["まい"] = WasedaMai;

WasedaMai.prototype.setPaths = function() {
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
    case "SER":
      this.dp = p(3.27109, -9e-06);
      this.paths = ["m 0 0 c 2e-06 -0.868833 0.93735 -3.04543 2.20691 -3.06896 c 1.19581 -0.022169 1.95185 1.53145 1.06418 3.06895"];
      return;
  }

  this.dp = p(4.00001, 0);
  this.paths = ["m 0 0 c 2e-06 -0.868833 0.93735 -3.04543 2.20691 -3.06896 c 1.19581 -0.022169 1.7931 1.82624 1.7931 3.06896"];
};

WasedaYai = function() { WasedaChar.call(this, "WasedaYai", "やい", "NER4", "NER", "NER", "black", false, p(0.0, 1.4)); };
WasedaYai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["やい"] = WasedaYai;

WasedaYai.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(2.82843, -2.82843);
  this.paths = ["m 0 0 c 0.571351 -2.05731 2.01807 -2.84123 2.82843 -2.82843"];
};

WasedaRai = function() { WasedaChar.call(this, "WasedaRai", "らい", "SER4", "SER", "SER", "black", false, p(0, -1.4)); };
WasedaRai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["らい"] = WasedaRai;

WasedaRai.prototype.setPaths = function() {
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
    case "S":
      this.dp = p(2.32305, 2.82843);
      this.paths = ["m 0 0 c 0.81036 -0.0128 4.20255 1.7433 2.32305 2.82843"];
      return;
  }

  this.dp = p(2, 3.464);
  this.paths = ["m 0 0 c 1.13193 0.793 2.61161 2.405 2 3.464"];
};

WasedaWai = function() { WasedaChar.call(this, "WasedaWai", "わい", "CR4CR1", "CR", "SWRCR", "black", false, p(1.5, 2.0)); };
WasedaWai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["わい"] = WasedaWai;

WasedaWai.prototype.setPaths = function() {
  const name_ = this.getPrevName();
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

  switch (name_) {
    case "WasedaSai":
      this.dp = p(1.51909, 1.57335);
      this.paths = ["m 0 0 c 1.03835 -0.845361 3.11212 -2.46435 4.34062 -1.54306 c 0.633337 0.474961 0.393787 1.78357 -0.136912 2.37099 c -0.731323 0.809488 -2.30449 1.09354 -3.23144 0.518348 c -0.461699 -0.286493 -0.717293 -1.4045 -0.483286 -1.5568 c 0.549667 -0.357742 1.5364 0.810466 1.03012 1.78386"];
      return;
  }

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
    case "E":
      this.dp = p(2.12359, -0.74619);
      this.paths = ["m 0 0 c -1.05896 -0.295582 -1.63769 -1.22576 -1.39536 -2.23831 c 0.242336 -1.01255 1.26819 -1.89952 2.25477 -1.83503 c 0.986574 0.064472 1.71532 0.498592 1.78371 1.85806 c 0.054753 1.08832 -0.794309 2.00445 -1.68004 2.16743 c -0.286239 0.052671 -0.702538 0.136749 -0.837521 -0.107656 c -0.354191 -0.641309 0.799393 -0.590684 1.99804 -0.590684"];
      return;
  }

  this.dp = p(1.48248, -0.231002);
  this.paths = ["m 0 0 c -1.05896 -0.295582 -1.63769 -1.22576 -1.39536 -2.23831 c 0.242336 -1.01255 1.26819 -1.89952 2.25477 -1.83503 c 0.986574 0.064472 1.71532 0.498592 1.78371 1.85806 c 0.054753 1.08832 -0.794309 2.00445 -1.68004 2.16743 c -0.286239 0.052671 -0.640095 0.08977 -0.837521 -0.107656 c -0.563004 -0.563004 0.432711 -1.02347 1.35693 -0.075497"];
};

WasedaKen = function() { WasedaChar.call(this, "WasedaKen", "けん", "E16CL1E1F", "E", "EF", "black", false, p(0.0, 0.4)); };
WasedaKen.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["けん"] = WasedaKen;

WasedaKen.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(18.9887, 0.021416);
  this.paths = ["m 0 0 h 15 c 0.2699 0.0142 0.543088 -0.266663 0.495 -0.495 c -0.06578 -0.312346 -0.584509 -0.486739 -0.8927 -0.346515 c -0.375333 0.170772 -0.689204 0.862934 0.886392 0.862934 l 1.5 -3e-05"];
};

WasedaToki = function() { WasedaChar.call(this, "WasedaToki", "とき", "NE4CL1", "NE", "NECL", "black", false, p(0.0, 1.5)); };
WasedaToki.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["とき"] = WasedaToki;

WasedaToki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_headModel) {
    case "ER8":
      this.dp = p(2.73656, -1.91307);
      this.paths = ["m 0 0 c 0.428694 -0.292419 1.98435 -1.36712 2.79985 -1.9589 c 0.359584 -0.260937 0.346432 -0.575015 0.15394 -0.73506 c -0.251271 -0.208915 -0.78121 0.018041 -0.906713 0.372713 c -0.112119 0.316846 0.151604 0.706334 0.689482 0.408173"];
      return;

    case "EL8":
      this.dp = p(2.45854, -1.75595);
      this.paths = ["m 0 0 c 0.428695 -0.292419 2.07203 -1.4683 2.88276 -2.06659 c 0.693154 -0.511523 0.141389 -0.747297 -0.087724 -0.761831 c -0.365843 -0.023209 -0.915485 0.197418 -0.944801 0.562823 c -0.021154 0.263681 0.37938 0.439656 0.608313 0.509643"];
      return;
  }

  switch (_head) {
    case "SW":
      this.dp = p(1.95333, -1.356);
      this.paths = ["m 0 0 c 0.428694 -0.292419 1.98435 -1.36712 2.79985 -1.9589 c 0.615974 -0.44699 0.297605 -0.930428 -0.050505 -0.883768 c -0.40377 0.05412 -0.603619 0.958081 -0.796015 1.48667"];
      return;
  }

  this.dp = p(2.42724, -1.74161);
  this.paths = ["m 0 0 c 0.428694 -0.292419 1.98435 -1.36712 2.79985 -1.9589 c 0.615974 -0.44699 0.0276 -1.05043 -0.32051 -1.00377 c -0.40377 0.05412 -0.25421 0.870841 -0.0521 1.22106"];
};

WasedaXru = function() { WasedaChar.call(this, "WasedaXru", "ル", "S1F", "S", "SF", "black", false, p(0.0, -1.8)); };
WasedaXru.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ル"] = WasedaXru;

WasedaXru.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(0, 3.5);
  this.paths = ["m 0 0 v 1.5"];
};

WasedaRazu = function() { WasedaChar.call(this, "WasedaRazu", "らず", "SER8CL1SW1F", "SER", "SWF", "black", false, p(0.0, -4.2)); };
WasedaRazu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["らず"] = WasedaRazu;

WasedaRazu.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(1.5292, 8.3633);
  this.paths = ["m 0 0 c 1.94949 1.36506 4.28069 3.92722 4.28069 5.98892 c 0 0.559889 -0.191765 1.04601 0.182881 1.18856 c 0.3024 0.115058 0.577886 -0.229652 0.703805 -0.485287 c 0.177758 -0.360878 0.289692 -1.12548 -0.062444 -1.20523 c -0.206161 -0.046689 -0.297133 0.086901 -0.796583 0.52929 c -0.586499 0.519492 -0.496892 0.459868 -1.2325 1.07903"];
};

WasedaRepeat = function() { WasedaChar.call(this, "WasedaRepeat", "ー", "E30F", "E", "EF", "black", false, p(0.0, 0.0)); };
WasedaRepeat.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["−"] = WasedaRepeat;

WasedaRepeat.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(32, 0);
  this.paths = ["m 0 0 h 30"];
};

WasedaPointSu = function() { WasedaChar.call(this, "WasedaPointSu", "加点す", "P", "P", "P", "black"); };
WasedaPointSu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["すｐ"] = WasedaPointSu;

WasedaPointSu.prototype.setPaths = function() {
  switch (this.getPrevTailType()) {
    case "S":
      this.dp = p(-1, -2.5);
      break;

    default:
      this.dp = p(2, 0);
      break;
  }
};

WasedaKitsu = function() { WasedaChar.call(this, "WasedaKitsu", "きつ", "E8CL1SW1F", "E", "SWF", "black", false, p(0.0, -1.0)); };
WasedaKitsu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["きつ"] = WasedaKitsu;

WasedaKitsu.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(5.4549, 3.24131);
  this.paths = ["m 0 0 c 2.489 -0.1305 4.9857 -0.1739 7.472 0 c 0.262 0.0091 0.490341 -0.314183 0.507945 -0.567427 c 0.01981 -0.285044 -0.192141 -0.709166 -0.477863 -0.711641 c -0.499366 -0.00433 -0.754304 0.948304 -0.856603 1.2291 l -0.513035 1.40951"];
};

WasedaKei = function() { WasedaChar.call(this, "WasedaKei", "けい", "E4CL1", "E", "ECL", "black", false, p(0.0, 0.5)); };
WasedaKei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["けい"] = WasedaKei;
WasedaChar.dict["けー"] = WasedaKei;

WasedaKei.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_name) {
    case "WasedaSai":
    case "WasedaSei":
      this.dp = p(2.83239, -6e-06);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.58408 -1e-06 -8e-05 -0.794082 -0.56512 -0.868282 c -0.46945 -0.0617 -0.704402 0.868284 -0.13488 0.868282"];
      return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "OSEL4":
      this.dp = p(2.83239, -6e-06);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.58408 -1e-06 0.342007 -0.931583 -0.223033 -1.00578 c -0.316246 -0.041564 -0.476967 0.361584 -0.476967 1.00578"];
      return;

    case "EL8":
      this.dp = p(3.53239, -6e-06);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.332837 -1e-06 0.340269 -0.712144 0.116525 -0.930376 c -0.254939 -0.248658 -0.961877 -0.18417 -1.05645 0.159168 c -0.107627 0.390722 0.431725 0.523328 0.939926 0.771208"];
      return;

    case "SER4":
    case "SER8":
     this.dp = p(3.53239, -6e-06);
     this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.342874 -1e-06 0.452713 -0.450108 0.343218 -0.678788 c -0.147442 -0.307934 -0.816986 -0.500098 -1.00183 -0.213054 c -0.200086 0.310707 0.153239 0.537789 0.658615 0.891842"];
     return;

    case "ER4":
      this.dp = p(3.95818, -0.265638);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.58408 -1e-06 0.63639 -0.845 0.07135 -0.9192 c -0.46945 -0.0617 -1.22447 1.56517 0.354438 0.653568"];
      return;

    case "EL16":
      this.dp = p(2.83239, -6e-06);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.338535 -1e-06 0.159297 -0.421038 0.049096 -0.581222 c -0.159232 -0.231454 -0.591555 -0.411037 -0.809681 -0.233986 c -0.211564 0.171724 -0.423242 0.703496 0.060586 0.815208"];
      return;
  }

  switch (_head) {
    case "BNER":
      this.dp.set(3.2828, 1.2394);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.58408 -1e-06 0.916817 -1.42204 0.203962 -1.31563 c -0.71425 0.106615 -0.372069 1.93615 -0.453555 2.55504"];
      return;

    case "E":
      this.dp = p(3.99592, -0.000101);
      this.paths = ["m 0 0 c 0 0 3.4252 -0.011642 3.75569 -0.000101 c 0.36049 0.012589 0.390319 -0.966503 -0.391581 -0.966503 c -0.72857 0 -0.816553 0.807318 -0.462955 0.907835 c 0.243602 0.069248 0.761803 0.041268 1.09477 0.058668"];
      return;

    case "SW":
      this.dp = p(2.83239, -6e-06);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.58408 -1e-06 0.63639 -1.01152 0.07135 -1.08572 c -0.46945 -0.0617 -0.602488 0.667653 -0.77135 1.08572"];
      return;

    case "SEL":
      this.dp = p(2.83239, -6e-06);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.58408 -1e-06 0.155992 -0.937349 -0.174876 -0.98955 c -0.368855 -0.058195 -0.525124 0.530676 -0.525124 0.98955"];
      return;

    case "S":
      this.dp = p(2.83239, -6e-06);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.58408 -1e-06 0.19768 -0.991237 -0.36736 -1.06544 c -0.46945 -0.0617 -0.33264 0.625494 -0.33264 1.06544"];
      return;

    case "SWR":
      this.dp = p(2.94141, -5e-06);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.532991 0 0.488931 -0.563556 0.148359 -0.881524 c -0.354458 -0.330932 -0.906933 -0.373648 -0.835796 -0.012008 c 0.05887 0.219705 0.096457 0.424093 0.096457 0.893533"];
      return;

    case "SE":
      this.dp = p(3.4806, -6e-06);
      this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.397369 -1e-06 0.421721 -0.495443 0.349046 -0.766671 c -0.095371 -0.35593 -1.09344 -0.926859 -1.09344 -0.227322 c 0 0.269778 0.281272 0.583731 0.692597 0.993993"];
      return;
  }

  this.dp = p(2.83239, -6e-06);
  this.paths = ["m 0 0 l 3.53239 -6e-06 c 0.58408 -1e-06 0.63639 -0.845 0.07135 -0.9192 c -0.46945 -0.0617 -0.653485 0.479321 -0.77135 0.9192"];
};

WasedaSei = function() { WasedaChar.call(this, "WasedaSei", "せい", "UER4CR1", "SER", "SWRCR", "black", false, p(0.5, -2.0)); };
WasedaSei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["せい"] = WasedaSei;
WasedaChar.dict["せー"] = WasedaSei;

WasedaSei.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_headModel) {
    case "BNER8":
      this.dp.set(0.628549, 4.71606);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931475 2.44078 1.97814 c 0.03261 0.985327 -1.04044 1.80731 -2.16958 2.01005 c -0.806509 0.144812 -0.821961 -0.33526 -0.765593 -0.583194 c 0.126008 -0.554248 0.679522 -0.567751 0.879035 0.173319 c 0.130382 0.484291 0.174723 0.661431 0.243907 1.13775"];
      return;

    case "BNEL8":
      this.dp.set(-0.548776, 4.58095);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931475 2.44078 1.97814 c 0.03261 0.985327 -1.04044 1.80731 -2.16958 2.01005 c -0.806509 0.144812 -0.72847 -0.392045 -0.671269 -0.639788 c 0.204036 -0.883698 0.954199 -0.52606 0.858941 0.267028 c -0.05981 0.497956 -0.583581 0.737015 -1.00765 0.96552"];
      return;

    case "ER16":
      this.dp.set(2.34634, 2.5073);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.06636 2.1403 -2.16958 2.01005 c -1.13782 -0.134334 1.78086 -1.37851 2.07514 -1.48089"];
      return;

    case "SWL16":
      this.dp = p(-0.13236, 4.0227);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931471 2.44078 1.97814 c 0.032609 0.985326 -1.06147 1.71314 -2.16958 2.01005 c -0.633272 0.169681 -1.06199 -0.262848 -0.909706 -0.621978 c 0.100409 -0.236787 0.608291 -0.626327 0.847894 -0.420989 c 0.286102 0.245188 0.116316 0.61941 -0.341748 1.07748"];
      return;

    case "NEL16":
      this.dp = p(2.33244, 2.55633);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.15241 2.27511 -1.84804 2.17082 c -0.977519 -0.146557 1.34372 -1.35418 1.7397 -1.59263"];
      return;

    case "ER4":
     this.dp = p(2.31944, 2.6106);
     this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.15385 2.4211 -1.80323 2.2471 c -0.418068 -0.112021 -0.182848 -0.431934 0.198974 -0.702335 c 0.328357 -0.232538 1.00728 -0.637693 1.48291 -0.912305"];
     return;

    case "NEL8":
      this.dp = p(2.3458, 2.55275);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.0259 2.1179 -2.16958 2.01005 c -1.46372 -0.138035 1.85098 -1.3147 2.0746 -1.43544"];
      return;

    case "NE4":
    case "NE8":
    case "NE16":
     this.dp = p(2.42154, 2.23009);
     this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.36008 2.61733 -2.07746 2.07146 c -0.374145 -0.284689 1.46597 -1.52841 2.05822 -1.81951"];
     return;
  }

  switch (_head) {
    case "BE":
      this.dp.set(-1.5568, 4.03113);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.06147 1.71314 -2.16958 2.01005 c -0.740109 0.198306 -0.953242 -0.417066 -0.774556 -0.877213 c 0.30506 -0.785579 1.15283 -0.597222 0.96651 0.098118 c -0.292123 1.09022 -1.39375 0.822034 -2.01995 0.822034"];
      return;

    case "E":
      this.dp = p(1.68024, 3.32404);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.06147 1.71314 -2.16958 2.01005 c -1.05081 0.281557 -0.896663 -0.661385 -0.418309 -0.672797 c 0.366975 -0.00875 1.34254 0.00865 1.82735 0.00865"];
      return;

    case "SEL":
      this.dp = p(0.393502, 3.95365);
      this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.06147 1.71314 -2.16958 2.01005 c -1.18796 0.318304 -0.6848 -1.07032 -0.108989 -1.07032 c 0.35376 0 0.231291 0.616636 0.231291 1.03577"];
      return;

    case "SW":
     this.dp = p(0.636504, 3.87422);
     this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.06147 1.71314 -2.16958 2.01005 c -1.05081 0.281557 -0.3532 -1.23526 0.189322 -1.07597 c 0.312785 0.091837 0.365477 0.441386 0.175982 0.962002"];
     return;

    case "S":
     this.dp = p(0.670948, 3.86176);
     this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931476 2.44078 1.97814 c 0.03261 0.985327 -1.06147 1.71314 -2.16958 2.01005 c -1.05081 0.281557 -0.375853 -1.14063 0.099799 -1.08859 c 0.366907 0.040141 0.299949 0.482637 0.299949 0.962157"];
     return;

  }

  this.dp.set(1.3811, 3.65771);
  this.paths = ["m 0 0 c 1.0063 0 2.40614 0.931471 2.44078 1.97814 c 0.032609 0.985326 -1.06138 2.01005 -2.16958 2.01005 c -1.08788 0 -0.859052 -0.913238 -0.3834 -0.8612 c 0.366907 0.040141 1.0435 0.311324 1.4933 0.530724"];
};

WasedaNei = function() { WasedaChar.call(this, "WasedaNei", "ねい", "EL4CL1", "EL", "ELCL", "black", false, p(0.0, 0.1)); };
WasedaNei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ねい"] = WasedaNei;
WasedaChar.dict["ねー"] = WasedaNei;
WasedaChar.dict["ああ"] = WasedaNei;
WasedaChar.dict["あー"] = WasedaNei;

WasedaNei.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_headModel) {
    case "NEL8":
      this.dp = p(4, -0);
      this.paths = ["m 0 0 c 1.45511 0.7737 3.78509 1.2188 4 0 c 0.091733 -0.520237 -0.34505 -0.641476 -0.644 -0.625924 c -0.301536 0.015687 -0.682969 0.296768 -0.580554 0.695331 c 0.124144 0.449009 0.643721 0.333193 1.22455 -0.069407"];
      return;

    case "EL8":
     this.dp = p(3.79793, 0.41315);
     this.paths = ["m 0 0 c 1.45511 0.7737 3.78509 1.2188 4 0 c 0.066954 -0.37971 -0.223353 -0.58695 -0.486323 -0.645724 c -0.29857 -0.06673 -0.806149 0.122421 -0.811743 0.428306 c -0.00771 0.421413 0.663097 0.489904 1.096 0.630568"];
     return;
  }

  switch (_head) {
    case "NER":
      this.dp.set(2.78557, 0.755492);
      this.paths = ["m 0 0 c 1.45511 0.7737 3.78509 1.2188 4 0 c 0.133335 -0.756171 -0.429242 -0.834294 -0.760449 -0.189311 c -0.22177 0.378697 -0.305659 0.602738 -0.453984 0.944803"];
      return;

    case "E":
      this.dp = p(3.92902, 0.223385);
      this.paths = ["m 0 0 c 1.45511 0.7737 3.78509 1.2188 4 0 c 0.07358 -0.41729 -0.150943 -0.60715 -0.404288 -0.675116 c -0.358535 -0.096186 -1.01794 0.172208 -0.973538 0.540755 c 0.054027 0.448399 0.77145 0.357746 1.30685 0.357746"];
      return;
  }

  this.dp = p(3.67823, 0.51712);
  this.paths = ["m 0 0 c 1.45511 0.7737 3.78509 1.2188 4 0 c 0.091733 -0.520237 -0.335 -0.7721 -0.644 -0.8549 c -0.307 -0.0881 -0.569 0.0282 -0.417 0.3028 c 0.233 0.4034 0.445226 0.70712 0.739226 1.06922"];
};

WasedaHei = function() { WasedaChar.call(this, "WasedaHei", "へい", "SEL4CL1", "SEL", "SELCL", "black", false, p(0.0, -1.5)); };
WasedaHei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["へい"] = WasedaHei;
WasedaChar.dict["へー"] = WasedaHei;

WasedaHei.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_name) {
    case "WasedaSai":
    case "WasedaSei":
     this.dp = p(1.98632, 2.88916);
     this.paths = ["m 0 0 c 0 1.47086 0.567464 2.96485 1.73322 2.96485 c 0.3919 0 0.670236 -0.420503 0.549706 -0.688227 c -0.128932 -0.286387 -0.811724 -0.334067 -0.940999 -0.047835 c -0.126594 0.280298 0.016012 0.660374 0.644393 0.660374"];
     return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "NEL16":
     this.dp = p(2.25941, 2.50107);
     this.paths = ["m 0 0 c 0 1.47086 0.567464 2.96485 1.73322 2.96485 c 0.3919 0 0.633706 -0.490359 0.549706 -0.688227 c -0.306457 -0.721883 -0.992997 -0.439153 -0.992997 0.128675 c 0 0.317983 0.394094 0.513406 0.969484 0.095775"];
     return;

    case "EL8":
     this.dp = p(2.40541, 2.65895);
     this.paths = ["m 0 0 c 0 1.47086 0.567464 2.96485 1.73322 2.96485 c 0.3919 0 1.06486 -0.492728 0.944077 -0.913676 c -0.098224 -0.342312 -0.869227 -0.532687 -1.04487 -0.222887 c -0.186539 0.329025 0.192204 0.54421 0.77298 0.830659"];
     return;
  }

  switch (_head) {
    case "BE":
      this.dp.set(0.344561, 2.96532);
      this.paths = ["m 0 0 c 0 1.47086 0.567464 2.96485 1.73322 2.96485 c 0.3919 0 0.585112 -0.476203 0.549706 -0.688227 c -0.0558 -0.334177 -0.321131 -0.506159 -0.588662 -0.324671 c -0.394195 0.267414 -1.05376 0.779895 -1.3497 1.01337"];
      return;

    case "E":
      this.dp = p(2.51902, 2.40555);
      this.paths = ["m 0 0 c 0 1.47086 0.567464 2.96485 1.73322 2.96485 c 0.3919 0 0.765256 -0.345328 0.785797 -0.559304 c 0.033072 -0.344514 0.08052 -0.796335 -0.42454 -0.874679 c -0.35458 -0.055002 -0.943349 0.342011 -0.869422 0.634726 c 0.093914 0.371852 0.884768 0.239953 1.29397 0.239953"];
      return;

    case "SW":
     this.dp = p(1.1605, 2.82787);
     this.paths = ["m 0 0 c 0 1.47086 0.567464 2.96485 1.73322 2.96485 c 0.3919 0 0.549706 -0.473267 0.549706 -0.688227 c 0 -0.556261 -0.485084 -0.661601 -0.753081 -0.197417 c -0.227443 0.393943 -0.242468 0.400076 -0.369348 0.748664"];
     return;
  }

  this.dp = p(0.926802, 2.6742);
  this.paths = ["m 0 0 c 0 1.47086 0.567464 2.96485 1.73322 2.96485 c 0.3919 0 0.585112 -0.476203 0.549706 -0.688227 c -0.0558 -0.334177 -0.321131 -0.506159 -0.588662 -0.324671 c -0.394195 0.267414 -0.535173 0.416686 -0.76746 0.722248"];
};

WasedaMei = function() { WasedaChar.call(this, "WasedaMei", "めい", "ER4CR1", "ER", "ERCR", "black", false, p(0.0, -0.1)); };
WasedaMei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["めい"] = WasedaMei;
WasedaChar.dict["めー"] = WasedaMei;
WasedaChar.dict["いい"] = WasedaMei;
WasedaChar.dict["いー"] = WasedaMei;

WasedaMei.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_name) {
    case "WasedaSai":
    case "WasedaSei":
     this.dp = p(3.99224, -0.117139);
     this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.501169 0.989285 -0.806628 0.775321 c -0.390326 -0.27341 -0.641289 -0.89246 0.798864 -0.89246"];
     return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "NE8":
      this.dp = p(3.77228, -0.531902);
      this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.5978 0.815597 -0.874198 0.741536 c -0.614041 -0.164532 -0.00317 -0.719039 0.646478 -1.27344"];
      return;

    case "EL4":
      this.dp = p(3.95915, -0.256212);
      this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.514221 0.533487 -0.791922 0.422245 c -0.28808 -0.115399 -0.497305 -0.651405 -0.29192 -0.884051 c 0.234519 -0.265647 0.806766 0.045186 1.043 0.205594"];
      return;

    case "SER4":
    case "SER8":
      this.dp = p(3.88021, 0.47693);
      this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.493591 1.13353 -0.955596 1.04133 c -0.288453 -0.057565 -0.496552 -0.609317 -0.301366 -0.829366 c 0.25827 -0.291171 0.869114 0.07717 1.13717 0.264962"];
      return;

    case "EL8":
     this.dp = p(3.99903, 0.047201);
     this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.379865 0.889672 -0.806628 0.775321 c -0.334713 -0.089686 -0.506456 -0.676983 -0.302644 -0.880794 c 0.271116 -0.271117 0.840111 0.041713 1.1083 0.152674"];
     return;

    case "NEL8":
     this.dp = p(3.74776, -0.55263);
     this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.977961 0.655707 -1.26818 0.488147 c -0.602405 -0.347799 0.477043 -0.785541 1.01594 -1.04078"];
     return;

    case "NER4":
    case "NER8":
    case "NER16":
     this.dp = p(3.47393, -0.703638);
     this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.354121 1.0173 -0.677098 0.830834 c -0.301755 -0.174219 -0.094491 -0.859938 0.151024 -1.53447"];
     return;

    case "ER4":
     this.dp = p(3.77228, -0.531902);
     this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.456144 0.824583 -0.806628 0.775321 c -0.471919 -0.06633 -0.505884 -0.680918 0.578908 -1.30722"];
     return;
  }

  switch (_head) {
    case "BE":
      this.dp.set(1.76455, 1.32078);
      this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.543029 1.32078 -0.930032 1.26894 c -0.317474 -0.042528 -0.888811 -0.622997 -0.414393 -0.970442 c 0.406119 -0.297425 0.939401 0.158303 0.520536 0.642822 c -0.293419 0.33941 -1.24642 0.379461 -1.41156 0.379461"];
      return;

    case "S":
      this.dp = p(3.03691, -0.797642);
      this.paths = ["m 0 0 c 1.57891 -0.9116 4 -1.2364 4 0 c 0 0.378241 -0.067924 0.694199 -0.32183 0.690481 c -0.540079 -0.007908 -0.459257 -0.80887 -0.641263 -1.48812"];
      return;

    case "SW":
      this.dp = p(3.49533, -0.695484);
      this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.26873 0.905681 -0.571346 0.788392 c -0.414894 -0.160805 -0.191841 -0.779935 0.06668 -1.48388"];
      return;

    case "E":
     this.dp = p(3.90698, -0.36942);
     this.paths = ["m 0 0 c 1.57891 -0.9116 4 -1.2364 4 0 c 0 0.42183 -0.35076 0.572708 -0.634339 0.567142 c -0.271766 -0.005335 -0.647021 -0.302047 -0.586113 -0.566953 c 0.08862 -0.385433 0.714409 -0.369609 1.12743 -0.369609"];
     return;
  }

  this.dp = p(3.77228, -0.531902);
  this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.501169 0.989285 -0.806628 0.775321 c -0.390326 -0.27341 0.104104 -0.653823 0.578904 -1.30722"];
};

WasedaRei = function() { WasedaChar.call(this, "WasedaRei", "れい", "SER4CR1", "SER", "SERCR", "black", false, p(0.0, -1.6)); };
WasedaRei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["れい"] = WasedaRei;
WasedaChar.dict["れー"] = WasedaRei;

WasedaRei.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_headModel) {
    case "SER4":
    case "SER8":
      this.dp.set(2.03198, 2.41036);
      this.paths = ["m 0 0 c 1.13193 0.793 2.39846 2.04701 1.9367 2.8468 c -0.412248 0.714034 -1.13719 0.063676 -1.0245 -0.385786 c 0.094144 -0.375475 0.663374 -0.370398 1.11977 -0.050657"];
      return;

    case "NEL8":
      this.dp = p(1.99759, 2.21004);
      this.paths = ["m 0 0 c 1.13193 0.793 2.39846 2.04701 1.9367 2.8468 c -0.412248 0.714034 -1.16031 0.518301 -1.04761 0.068839 c 0.094144 -0.375475 0.663869 -0.469207 1.10851 -0.705595"];
      return;

    case "NE16":
      this.dp = p(1.79186, 1.74639);
      this.paths = ["m 0 0 c 1.13193 0.793 2.39846 2.04701 1.9367 2.8468 c -0.497621 0.861904 -1.37596 0.317737 -1.01544 -0.098971 c 0.284747 -0.329119 0.608401 -0.65566 0.870599 -1.00144"];
      return;

    case "NEL16":
     this.dp = p(1.88561, 1.91769);
     this.paths = ["m 0 0 c 1.13193 0.793 2.39846 2.04701 1.9367 2.8468 c -0.412248 0.714034 -1.18 0.447159 -1.02861 -0.066103 c 0.11304 -0.383256 0.685928 -0.62692 0.977519 -0.863006"];
     return;

    case "EL8":
      this.dp = p(2.0342, 2.48093);
      this.paths = ["m 0 0 c 1.13193 0.793 2.39846 2.04701 1.9367 2.8468 c -0.412248 0.714034 -1.41125 0.097765 -1.16085 -0.612003 c 0.142197 -0.403049 0.773029 0.088442 1.25835 0.246137"];
      return;
  }

  switch (_head) {
    case "NE":
      this.dp = p(1.91114, 1.97174);
      this.paths = ["m 0 0 c 1.13193 0.793 2.39846 2.04701 1.9367 2.8468 c -0.497621 0.861904 -1.5316 0.14375 -1.08017 -0.163703 c 0.325053 -0.221382 0.697519 -0.469244 1.05461 -0.711355"];
      return;

    case "SW":
     this.dp = p(1.59208, 1.45464);
     this.paths = ["m 0 0 c 1.13193 0.793 2.41954 1.8056 1.9367 2.8468 c -0.079918 0.172334 -0.50736 0.509172 -0.566752 0.05971 c -0.050711 -0.383762 0.140129 -1.14582 0.222136 -1.45187"];
     return;

    case "SEL":
     this.dp = p(1.61176, 3.21775);
     this.paths = ["m 0 0 c 1.13193 0.793 2.39846 2.04701 1.9367 2.8468 c -0.412248 0.714034 -1.12212 0.472372 -1.12212 0.021468 c 0 -0.211057 0.198737 -0.809231 0.498262 -0.761415 c 0.378674 0.060451 0.298914 0.719914 0.298914 1.11089"];
     return;

    case "S":
     this.dp = p(1.63129, 3.19819);
     this.paths = ["m 0 0 c 1.13193 0.793 2.39846 2.04701 1.9367 2.8468 c -0.412248 0.714034 -1.13292 0.631785 -1.13292 0.186642 c 0 -0.272602 0.261626 -0.670829 0.530617 -0.624005 c 0.276764 0.048177 0.29689 0.216074 0.29689 0.788753"];
     return;

    case "E":
      this.dp = p(2.01166, 2.2688);
      this.paths = ["m 0 0 c 1.13193 0.793 2.39846 2.04701 1.9367 2.8468 c -0.394456 0.683216 -1.2785 0.088359 -1.17413 -0.301147 c 0.092079 -0.343647 0.680548 -0.276853 1.24909 -0.276853"];
      return;
  }

  this.dp = p(1.82724, 1.80712);
  this.paths = ["m 0 0 c 1.13193 0.793 2.39846 2.04701 1.9367 2.8468 c -0.412248 0.714034 -0.947141 0.47093 -0.834445 0.021468 c 0.094144 -0.375475 0.433398 -0.825054 0.724989 -1.06114"];
};

WasedaEi = function() { WasedaChar.call(this, "WasedaEi", "えい", "SE4CR1", "SE", "SECR", "black", false, p(0.0, -1.7)); };
WasedaEi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["えい"] = WasedaEi;
WasedaChar.dict["えー"] = WasedaEi;
WasedaChar.dict["ええ"] = WasedaEi;

WasedaEi.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (tail_ + "_" + _headModel) {
    case "ER_SR8":
      if (this.headType == "TSE") {
        this.dp.set(1.05803, 3.9066);
        this.paths = ["m 0 0 c 0.411 1.275 1.176 3.5206 1.176 3.5206 c 0.177 0.4735 -0.614 0.6981 -0.992 0.3624 c -0.346 -0.3072 -0.37673 -0.946961 -0.0997 -1.02156 c 0.352 -0.0948 0.6624 0.505915 0.97373 1.04516"];
        return;
      }
      break;
  }

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "BNEL16":
      this.dp.set(1.94551, 3.82704);
      this.paths = ["m 0 0 c 0.938951 0.955664 2.62877 2.62062 2.62877 2.62062 c 0.369896 0.344259 -0.151913 0.800626 -0.441386 0.676306 c -0.195526 -0.083972 -0.369157 -0.237699 -0.399078 -0.512186 c -0.043307 -0.397282 0.490431 -0.56525 0.827111 -0.154974 c 0.290105 0.35352 -0.176286 0.863312 -0.669903 1.19727"];
      return;

    case "SR8":
      this.dp.set(2.69588, 3.01875);
      this.paths = ["m 0 0 c 0.938951 0.955664 2.62877 2.62062 2.62877 2.62062 c 0.369896 0.344259 -0.236515 0.89932 -0.724801 0.768485 c -0.446668 -0.119685 -0.686918 -0.79397 -0.472831 -0.984719 c 0.271747 -0.242124 0.838407 0.130455 1.26474 0.614363"];
      return;

    case "NEL16":
      this.dp = p(2.36305, 2.35837);
      this.paths = ["m 0 0 c 0.938951 0.955664 2.62877 2.62062 2.62877 2.62062 c 0.178473 0.166103 0.178108 0.552184 -0.077865 0.64293 c -0.274546 0.097331 -0.866057 0.13323 -0.967476 -0.173039 c -0.120067 -0.362585 0.339372 -0.48811 0.779618 -0.732146"];
      return;

    case "EL8":
      this.dp = p(2.73116, 2.78334);
      this.paths = ["m 0 0 c 0.938951 0.955664 2.62877 2.62062 2.62877 2.62062 c 0.369896 0.344259 -0.274527 0.847626 -0.609863 0.808596 c -0.348434 -0.040555 -0.838966 -0.723553 -0.42378 -0.963261 c 0.192214 -0.110975 0.933556 0.251594 1.13604 0.317387"];
      return;
  }

  switch (_head) {
    case "S":
      this.dp = p(1.83926, 1.90816);
      this.paths = ["m 0 0 c 0.938951 0.955664 2.62877 2.62062 2.62877 2.62062 c 0.369896 0.344259 -0.197022 0.862422 -0.486498 0.738101 c -0.350952 -0.150722 -0.303013 -1.14306 -0.303013 -1.45056"];
      return;

    case "NE":
      this.dp = p(2.26329, 2.25978);
      this.paths = ["m 0 0 c 0.938951 0.955664 2.62877 2.62062 2.62877 2.62062 c 0.238306 0.238306 -0.071868 0.677062 -0.380923 0.777304 c -0.524825 0.170225 -1.14276 -0.291272 -0.683626 -0.626988 l 0.699069 -0.511159"];
      return;

    case "E":
      this.dp = p(2.41441, 2.40911);
      this.paths = ["m 0 0 c 0.938951 0.955664 2.62877 2.62062 2.62877 2.62062 c 0.572965 0.572964 -0.610614 0.889135 -1.02809 0.280207 c -0.406809 -0.593365 0.364044 -0.491721 0.813738 -0.491721"];
      return;

    case "SEL":
     this.dp = p(1.87157, 1.87206);
     this.paths = ["m 0 0 c 0.938951 0.955664 2.62877 2.62062 2.62877 2.62062 c 0.369896 0.344259 0.00308 0.881939 -0.41677 0.769441 c -0.36465 -0.097708 -0.340425 -1.05665 -0.340425 -1.518"];
     return;
  }

  this.dp = p(2.08599, 2.0844);
  this.paths = ["m 0 0 c 0.938951 0.955664 2.62877 2.62062 2.62877 2.62062 c 0.369896 0.344259 -0.320387 0.932917 -0.609863 0.808596 c -0.350952 -0.150722 -0.216334 -1.05553 0.067084 -1.34481"];
};

WasedaTwo = function() { WasedaChar.call(this, "WasedaTwo", "２", "2", "NER", "E", "black", false, p(0.4, -1.2)); };
WasedaTwo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["２"] = WasedaTwo;

WasedaTwo.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  this.dp = p(4.03025, 4.47806);
  this.paths = ["m 0 0 c 0.800212 -0.936349 2.84851 -1.86051 3.52683 -0.85859 c 1.23161 1.81917 -3.05393 4.67676 -3.82578 5.36654 l 4.3292 -0.02989"];

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

  switch (_name) {
    case "WasedaZero":
      this.dp = p(5.0, -0.8);
      return;

    case "WasedaTwo":
      this.dp = p(4.0, 0);
      return;
  }

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
};

WasedaZero = function() { WasedaChar.call(this, "WasedaZero", "０", "0", "SWR", "NWL", "black", false, p(2.0, -2.0)); };
WasedaZero.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["０"] = WasedaZero;

WasedaZero.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(0, 0);
  this.paths = ["m 0 0 c -1.195 -0.0342 -2.096 1.4557 -2.462 2.5816 c -0.266 0.8188 -0.449 2.2138 0.348 2.5571 c 0.987 0.4247 2.217 -0.8638 2.636 -1.8441 c 0.438 -1.0239 0.652 -2.8325 -0.522 -3.2946"];
};

WasedaKen2 = function() { WasedaChar.call(this, "WasedaKen2", "けん", "E8NW4", "E", "NW", "black", false, p(0.0, 1.4)); };
WasedaKen2.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["けん２"] = WasedaKen2;
WasedaChar.dict["ケン"] = WasedaKen2;

WasedaKen2.prototype.setPaths = function() {
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
    case "SE":
    case "SER":
     this.dp = p(6.39891, -3.66558);
     this.paths = ["m 0 0 h 8 l -1.60109 -3.66558"];
     return;

    case "SW":
     this.dp = p(5.50571, -2.78067);
     this.paths = ["m 0 0 h 8 l -2.49429 -2.78067"];
     return;

    case "SWL":
      this.dp = p(7.21796, -3.92281);
      this.paths = ["m 0 0 h 8 l -0.782036 -3.92281"];
      return;
  }

  this.dp = p(5.17157, -2.8284);
  this.paths = ["m 0 0 h 8 l -2.82843 -2.8284"];
};

WasedaKon2 = function() { WasedaChar.call(this, "WasedaKon2", "こん", "E8S4F", "E", "SF", "black", false, p(0.0, -2.8)); };
WasedaKon2.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["こん２"] = WasedaKon2;
WasedaChar.dict["コン"] = WasedaKon2;

WasedaKon2.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(8, 5.5);
  this.paths = ["m 0 0 h 8 l 0 3.5"];
};

WasedaSen2 = function() { WasedaChar.call(this, "WasedaSen2", "せん", "NE8F", "NE", "NEF", "black", false, p(0.0, 2.9)); };
WasedaSen2.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["せん２"] = WasedaSen2;
WasedaChar.dict["セン"] = WasedaSen2;

WasedaSen2.prototype.setPaths = function() {
  this.dp = p(8.09026, -5.87772);
  this.paths = ["m 0 0 l 6.47213 -4.70228"];

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
    case "SWL8":
      this.dp.x += 0.5; 
      this.dp.y += 0.5; 
      return;
  }

  //switch (_head) {}
};

WasedaHun2 = function() { WasedaChar.call(this, "WasedaHun2", "ふん", "BNE8F", "B", "NEF", "black", false, p(1.0, 1.2)); };
WasedaHun2.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ふん２"] = WasedaHun2;
WasedaChar.dict["フン"] = WasedaHun2;

WasedaHun2.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(7.09026, -4.14567);
  this.paths = ["m 0 0 c 0 0.56523 -0.514572 1.37937 -1 1.73205 l 6.47213 -4.70228"];
};

WasedaTen2 = function() {
  WasedaChar.call(this, "WasedaTen2", "てん", "P", "P", "P", "black", false, p(0.0, 0.0));
  this.thickness = 0.6;
};
WasedaTen2.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["てん２"] = WasedaTen2;
WasedaChar.dict["テン"] = WasedaTen2;

WasedaTen2.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    //case "WasedaHon":
    //  this.dp = p(2-1.5, 0);
    //  this.paths = ["m-1.5 -2 v0.1"];
    //  return;
    case "WasedaLtsuP":
      this.dp = p(3.68618, -2.5811);
      this.paths = ["m 0 0 l 2.04788 -1.43394"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  switch (model_ + "_" + _head) {
    case "NEL8CL1_EL":
    case "NEL8CL1_ER":
    case "NEL8CL1_E":
    case "NEL8CL1_SW":
    case "SWL16NEL4CL1":
    case "SWL16NEL4CL1_EL":
    case "SWL16NEL4CL1_ER":
    case "SWL16NEL4CL1_E":
    case "SWL16NEL4CL1_SW":
    case "NER16_EL":
    case "NE4_SW":
    case "BNE4_SW":
      this.dp = p(2, 0);
      this.paths = ["m2 -2 v0.1"];
      return;

    case "E8CL1_SW":
      this.dp = p(3, 0);
      this.paths = ["m3 -2 v0.1"];
      return;

    case "SEL16F_SW":
      this.dp = p(2, 1);
      this.paths = ["m2,-1v0.1"];
      return;

    case "NER8CR1_SW":
      this.dp = p(2, 1);
      this.paths = ["m2,-1v0.1"];
      return;
  }

  //switch (tailModel_) {}

  switch (model_) {
    case "NEL16CL8":
      this.pdp.set(3.8, -3.9);
      this.dp.set(0, 2);
      this.paths = ["m0,0v0.1"];
      return;

    case "SEL16F":
      this.dp = p(2-1.5, 0);
      this.paths = ["m-1.5 -2 v0.1"];
      return;

    case "NEL8CL1":
    case "SWL16NEL4CL1":
      this.dp = p(2, 0);
      this.paths = ["m0 -4 v0.1"];
      return;

    case "E8CL1":
      this.dp = p(1, -1);
      this.paths = ["m1 -3 v0.1"];
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "SW_SW":
      this.pdp.set(2, -2);
      this.dp = p(0, 2);
      this.paths = ["m0,0v0.1"];
      return;

    case "SWCR_SW":
    case "E_SE":
    case "ER_SE":
    case "EL_SE":
    case "EL_E":
      this.dp = p(2, 0);
      this.paths = ["m2 -2 v 0.1"];
      return;
  }

  if (tail_.endsWith("F")) {
    this.dp = p(0, 2);
    this.paths = ["m 0 0 v 0.1"];
    return;
  }

  switch (tail_) {
    case "E":
    case "ER":
    case "EL":
      this.dp = p(2, 0);
      this.paths = ["m 0 -2 v 0.1"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "BE":
      this.dp = p(-1.8, 3.3);
      this.paths = ["m0,0v0.1"];
      return;

    case "BNEL":
      this.dp = p(-0.8, 3.3);
      this.paths = ["m0,0v0.1"];
      return;

    case "BSER":
      this.dp = p(0, 3.3);
      this.paths = ["m0,0v0.1"];
      return;
  }

  this.pdp.set(0, -2);
  this.dp = p(0, 2);
  this.paths = ["m0,-2v0.1"];
};

WasedaN = function() { WasedaChar.call(this, "WasedaN", "ん", "NE1F", "NE", "NEF", "black", false, p(0.0, 0.5)); };
WasedaN.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ン"] = WasedaN;

WasedaN.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(2.46129, -2.48832);
  this.paths = ["m 0 0 l 1.06066 -1.06066"];
};

WasedaHun = function() { WasedaChar.call(this, "WasedaHun", "ふん", "SEL8CL4NE1F", "SEL", "NEF", "black", false, p(0.0, -2.9)); };
WasedaHun.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ふん"] = WasedaHun;

WasedaHun.prototype.setPaths = function() {
  this.dp = p(3.08518, 1.41873);
  this.paths = ["m 0 0 c 0 1.8741 0.2905 3.3309 0.7678 4.3545 c 0.4951 1.0151 1.3611 1.5004 2.7067 1.5004 c 0.6304 0 1.3022 -0.1748 1.3022 -0.7218 c 0 -0.42 -0.7718 -0.8055 -1.6955 -1.0188 c -0.9158 -0.2453 -2.0018 -0.2207 -2.4709 -0.2207 l 1.06066 -1.06066"];

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
    case "SEL":
      this.dp.move(2, 0);
      return;
  }
};

WasedaKun = function() { WasedaChar.call(this, "WasedaKun", "くん", "E8CL4E1F", "E", "EF", "black", false, p(0.0, 1.4)); };
WasedaKun.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["くん"] = WasedaKun;

WasedaKun.prototype.setPaths = function() {
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

  //switch (_head) {}

   this.dp = p(11.5, -0);
   this.paths = ["m 0 0 c 2.132 -0.0745 4.9132 -0.074488 7.0462 0 c 1.07007 0.037368 1.10131 -1.13741 0.751189 -1.61804 c -0.643246 -0.883019 -3.0735 -0.67558 -3.25265 0.4021 c -0.152034 0.91456 2.26523 1.21594 3.45526 1.21594 h 1.5"];
};

WasedaRon = function() { WasedaChar.call(this, "WasedaRon", "ろん", "SER16NE1F", "SER", "NEF", "black", false, p(0.0, -6.9)); };
WasedaRon.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ろん"] = WasedaRon;

WasedaRon.prototype.setPaths = function() {
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

  //switch (_head) {}

 this.dp = p(10.4776, 11.3843);
 this.paths = ["m 0 0 c 4.6323 2.6745 11.0125 11.3286 8 13.8564 l 1.06066 -1.06066"];
};

WasedaKon = function() { WasedaChar.call(this, "WasedaKon", "こん", "E16NE1F", "E", "NEF", "black", false, p(0.0, 1.2)); };
WasedaKon.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["こん"] = WasedaKon;

WasedaKon.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(18.4749, -2.47487);
  this.paths = ["m 0 0 h 16 l 1.06066 -1.06066"];
};

WasedaHin = function() { WasedaChar.call(this, "WasedaHin", "ひん", "SEL8CL1E1F", "SEL", "EF", "black", false, p(0.0, -2.8)); };
WasedaHin.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ひん"] = WasedaHin;

WasedaHin.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(8.95112, 4.90528);
  this.paths = ["m 0 0 c 0 3.7201 1.18678 5.5886 4.52557 5.5886 c 0.5132 0 0.742235 -0.09266 0.88951 -0.379396 c 0.151419 -0.294803 0.074323 -0.810136 -0.21567 -0.970575 c -0.319428 -0.176723 -1.04426 0.01365 -1.03193 0.366745 c 0.01743 0.4992 0.748749 0.299907 1.28364 0.299907 h 1.5"];
};

WasedaXro = function() { WasedaChar.call(this, "WasedaXro", "ロ", "SW1F", "SW", "SWF", "black", false, p(1.1, -1.7)); };
WasedaXro.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ロ"] = WasedaXro;

WasedaXro.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(-1.10908, 3.31866);
  this.paths = ["m 0 0 l -0.51303 1.40954"];
};


WasedaXre = function() { WasedaChar.call(this, "WasedaXre", "レ", "SE1F", "SE", "SEF", "black", false, p(2.6, 1.2)); };
WasedaXre.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["レ"] = WasedaXre;

WasedaXre.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(2.56572, 2.38042);
  this.paths = ["m 0 0 l 1.10696 1.01224"];
};

WasedaKya = function() { WasedaChar.call(this, "WasedaKya", "きゃ", "SL8", "SL", "SL", "black", false, p(1.1, -4.0)); };
WasedaKya.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["きゃ"] = WasedaKya;

WasedaKya.prototype.setPaths = function() {
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

  switch (_head) {
    case "SEL":
      this.dp.set(0, 8);
      this.paths = ["m 0 0 c -1.20973 2.0953 -2.37704 8.63692 0 8"];
      return;
  }

  this.dp = p(0, 8);
  this.paths = ["m 0 0 c -1.20973 2.0953 -1.81809 6.9503 0 8"];
};

WasedaKyu = function() { WasedaChar.call(this, "WasedaKyu", "きゅ", "SL8CL1", "SL", "SLCL", "black", false, p(1.6, -4.0)); };
WasedaKyu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["きゅ"] = WasedaKyu;

WasedaKyu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (_headModel) {
    case "SWL16":
      this.dp = p(-0.69464, 7.9398);
      this.paths = ["m 0 0 c -1.3479 1.9983 -2.38673 6.7105 -0.69464 7.9398 c 0.58058 0.3916 1.40949 -0.031698 1.30704 -0.7245 c -0.099007 -0.669521 -1.14296 0.520888 -1.30704 0.7245"];
      return;

    case "SER4":
    case "SER8":
      this.dp = p(0.251913, 7.97914);
      this.paths = ["m 0 0 c -1.3479 1.9983 -2.38673 6.7105 -0.69464 7.9398 c 0.58058 0.3916 1.55947 -0.071238 1.30704 -0.7245 c -0.126003 -0.326085 -0.944304 -0.467546 -1.12303 -0.135535 c -0.186303 0.346085 0.307885 0.629313 0.762543 0.899379"];
      return;

    case "NEL8":
    case "NEL16":
      this.dp = p(0.663103, 7.48295);
      this.paths = ["m 0 0 c -1.3479 1.9983 -2.38673 6.7105 -0.69464 7.9398 c 0.58058 0.3916 1.60319 -0.08986 1.30704 -0.7245 c -0.292074 -0.625915 -1.25758 -0.232601 -1.16249 0.278381 c 0.047913 0.257483 0.549556 0.372423 1.21319 -0.010729"];
      return;

    case "ER8":
      this.dp = p(0.553824, 7.61099);
      this.paths = ["m 0 0 c -1.3479 1.9983 -2.38673 6.7105 -0.69464 7.9398 c 0.58058 0.3916 1.62466 -0.35023 1.37559 -0.781628 c -0.302685 -0.524267 -1.26679 -0.238627 -1.29686 0.344815 c -0.01499 0.290888 0.401507 0.418388 1.16973 0.108001"];
      return;
  }

  switch (_head) {
    case "BE":
      this.dp.set(-1.49554, 8.11511);
      this.paths = ["m 0 0 c -1.3479 1.9983 -2.38673 6.7105 -0.69464 7.9398 c 0.58058 0.3916 1.38024 -0.028 1.30704 -0.7245 c -0.0281 -0.3214 -0.206172 -0.262533 -0.4125 -0.1105 c -0.234492 0.172785 -1.21952 0.735541 -1.69544 1.01031"];
      return;

    case "SEL":
      this.dp = p(-0.370089, 8.07479);
      this.paths = ["m 0 0 c -1.3479 1.9983 -2.38673 6.7105 -0.69464 7.9398 c 0.58058 0.3916 1.39283 -0.029439 1.30704 -0.7245 c -0.056432 -0.533887 -0.603725 -0.57866 -0.759273 -0.248881 c -0.171653 0.363922 -0.223216 0.66805 -0.223216 1.10838"];
      return;

    case "E":
      this.dp = p(0.584059, 7.52919);
      this.paths = ["m 0 0 c -1.3479 1.9983 -2.38673 6.7105 -0.69464 7.9398 c 0.58058 0.3916 1.38024 -0.028 1.30704 -0.7245 c -0.019583 -0.223986 -0.03087 -0.576429 -0.528193 -0.576429 c -0.310474 0 -0.721087 0.351157 -0.592867 0.666227 c 0.127736 0.31388 0.441645 0.224093 1.09272 0.224093"];
      return;

    case "SW":
      this.dp = p(-0.4959, 8.0625);
      this.paths = ["m 0 0 c -1.3479 1.9983 -2.38673 6.7105 -0.69464 7.9398 c 0.58058 0.3916 1.38024 -0.028 1.30704 -0.7245 c -0.0281 -0.3214 -0.321945 -0.550654 -0.541845 -0.359554 c -0.21646 0.1949 -0.358592 0.629643 -0.566455 1.20675"];
      return;
  }

  this.dp = p(-0.4959, 8.0625);
  this.paths = ["m 0 0 c -1.3479 1.9983 -2.38673 6.7105 -0.69464 7.9398 c 0.58058 0.3916 1.38024 -0.028 1.30704 -0.7245 c -0.0281 -0.3214 -0.1926 -0.3016 -0.4125 -0.1105 c -0.21646 0.1949 -0.47333 0.5724 -0.6958 0.9577"];
};

WasedaKyo = function() { WasedaChar.call(this, "WasedaKyo", "きょ", "SL8ONEL4", "SL", "SLONEL", "black", false, p(1.0, -4.0), 4); };
WasedaKyo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["きょ"] = WasedaKyo;

WasedaKyo.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (tail_ + "_" + _head) {
    case "NELCL_SW":
    case "NELCL4_SW":
    case "NELCL8_SW":
      this.dp = p(0.465456, 7.7595);
      this.paths = ["m 0 0 c -0.501084 1.99247 -0.996743 6.396 0.465457 7.7595 c 0.3695 0.31 1.00598 -0.225455 1.46432 -0.810916 c 0.323926 -0.413764 0.817117 -1.51256 0.431669 -1.75754 c -0.642268 -0.408204 -1.5005 1.4819 -1.89599 2.56846"];
      return;
  }

  switch (tail_) {
    case "NELCL":
    case "NELCL4":
    case "NELCL8":
      this.dp = p(0.465456, 7.7595);
      this.paths = ["m 0 0 c -0.501084 1.99247 -0.996744 6.396 0.465456 7.7595 c 0.3695 0.31 1.3711 0.0966 1.9253 -0.2364 c 0.5787 -0.3341 1.62932 -1.12869 1.1783 -1.6217 c -0.411326 -0.449615 -2.27664 1.08665 -3.1036 1.8581"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "BNE8":
      this.dp.set(-0.67196, 8.9782);
      this.paths = ["m 0 0 c -1.106 1.9953 -1.5977 6.396 -0.1355 7.7595 c 0.3695 0.31 1.00861 0.242787 1.87103 -0.534861 c 0.593517 -0.535175 1.22233 -1.26435 0.771308 -1.75736 c -0.411326 -0.449615 -2.24331 2.35961 -3.1788 3.51092"];
      return;

    case "BNEL16":
      this.dp.set(-0.482954, 8.75223);
      this.paths = ["m 0 0 c -1.106 1.9953 -1.5977 6.396 -0.1355 7.7595 c 0.3695 0.31 1.3711 0.0966 1.9253 -0.2364 c 0.5787 -0.3341 1.62932 -1.12869 1.1783 -1.6217 c -0.411326 -0.449615 -2.62409 2.07938 -3.45105 2.85083"];
      return;

    case "SWL4":
    case "SWL8":
      this.dp.set(-0.1355, 7.7595);
      this.paths = ["m 0 0 c -1.106 1.9953 -1.5977 6.396 -0.1355 7.7595 c 0.3695 0.31 1.34214 0.252258 1.96529 0.045128 c 0.529431 -0.175979 1.89454 -0.77615 1.44352 -1.26916 c -0.411326 -0.449615 -2.42066 0.65352 -3.40881 1.22403"];
      return;
  }

  switch (_head) {
    case "BE":
      this.dp.set(-1.01876, 7.90904);
      this.paths = ["m 0 0 c -1.106 1.9953 -1.5977 6.396 -0.1355 7.7595 c 0.3695 0.31 1.3711 0.0966 1.9253 -0.2364 c 0.5787 -0.3341 1.62932 -1.12869 1.1783 -1.6217 c -0.411326 -0.449615 -2.96946 1.42025 -3.98685 2.00764"];
      return;

    case "NEL":
      this.dp = p(0.65428, 7.94763);
      this.paths = ["m 0 0 c -1.106 1.9953 -1.5977 6.396 -0.1355 7.7595 c 0.789703 0.789703 1.39599 -0.443643 1.76377 -0.975398 c 0.450786 -0.651769 0.792502 -1.51136 0.451888 -1.80564 c -0.461116 -0.39839 -1.03156 1.97052 -1.42588 2.96917"];
      return;

    case "NE":
    case "NEL":
      this.dp = p(0.133493, 7.79889);
      this.paths = ["m 0 0 c -1.106 1.9953 -1.5977 6.396 -0.1355 7.7595 c 0.3695 0.31 1.30004 -0.524865 1.76377 -0.975398 c 0.527015 -0.512016 0.792502 -1.51136 0.451888 -1.80564 c -0.461116 -0.39839 -1.55235 1.82178 -1.94667 2.82043"];
      return;

    case "E":
      this.dp = p(-0.1355, 7.7595);
      this.paths = ["m 0 0 c -1.106 1.9953 -1.5977 6.396 -0.1355 7.7595 c 0.3695 0.31 1.3711 0.0966 1.9253 -0.2364 c 0.5787 -0.3341 1.62932 -1.12869 1.1783 -1.6217 c -0.411326 -0.449615 -2.27664 1.08665 -3.1036 1.8581"];
      return;

    case "SW":
      this.dp = p(-0.1355, 7.7595);
      this.paths = ["m 0 0 c -1.106 1.9953 -1.5977 6.396 -0.1355 7.7595 c 0.3695 0.31 1.00598 -0.225455 1.46432 -0.810916 c 0.323926 -0.413764 0.817117 -1.51256 0.431669 -1.75754 c -0.642268 -0.408204 -1.5005 1.4819 -1.89599 2.56846"];
      return;

    case "ER":
      this.dp = p(0.581876, 7.97949);
      this.paths = ["m 0 0 c -1.106 1.9953 -1.61795 6.41805 -0.1355 7.7595 c 0.59274 0.536365 1.27358 0.016822 1.82778 -0.316178 c 0.5787 -0.3341 1.85725 -1.69809 1.38325 -2.16905 c -0.681449 -0.677087 -2.47609 2.26649 -2.49365 2.70522"];
      return;
  }

  this.dp = p(-0.1355, 7.7595);
  this.paths = ["m 0 0 c -1.106 1.9953 -1.5977 6.396 -0.1355 7.7595 c 0.3695 0.31 1.3711 0.0966 1.9253 -0.2364 c 0.5787 -0.3341 1.62932 -1.12869 1.1783 -1.6217 c -0.411326 -0.449615 -2.27664 1.08665 -3.1036 1.8581"];
};

WasedaSha = function() { WasedaChar.call(this, "WasedaSha", "しゃ", "SR8", "SR", "SR", "black", false, p(0.0, -4.0)); };
WasedaSha.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["しゃ"] = WasedaSha;

WasedaSha.prototype.setPaths = function() {
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

  switch (_head) {
    case "SW":
      this.dp = p(0, 8);
      this.paths = ["m 0 0 c 1.5045 2.2306 1.92646 8.51619 0 8"];
      return;
  }

  this.dp = p(0, 8);
  this.paths = ["m 0 0 c 1.5045 2.2306 1.944 6.4812 0 8"];
};

WasedaShu = function() { WasedaChar.call(this, "WasedaShu", "しゅ", "SR8CR1", "SR", "SRCR", "black", false, p(0.5, -4.0)); };
WasedaShu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["しゅ"] = WasedaShu;

WasedaShu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (tail_) {
    case "NELCL":
    case "NELCL4":
    case "NELCL8":
      this.dp = p(0.752215, 6.49959);
      this.paths = ["m 0 0 c 0.664724 2.48078 1.52006 6.82469 0 7.9701 c -0.2799 0.2187 -0.6365 -0.139 -0.4227 -0.4227 c 0.3455 -0.4267 0.743565 -0.798766 1.17491 -1.04781"];
      return;
  }

  switch (_name) {
    case "WasedaSai":
    case "WasedaSei":
      this.dp = p(0.709979, 7.15706);
      this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.510542 0.398912 -1.1052 -0.104266 -0.716704 -0.444282 c 0.386908 -0.338625 0.960664 -0.360436 1.42668 -0.36876"];
      return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "EL8":
      this.dp.set(0.486862, 7.48757);
      this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.599825 0.468674 -1.15553 -0.248861 -0.924376 -0.748397 c 0.201028 -0.43443 0.656175 -0.176288 1.41124 0.265872"];
      return;

    case "ER4":
      this.dp.set(1.0667, 6.2253);
      this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.449258 0.351028 -0.756925 -0.120067 -0.631925 -0.452589 c 0.267042 -0.710383 1.26728 -1.04317 1.69863 -1.29221"];
      return;

    case "NEL16":
      this.dp = p(1.01661, 6.47999);
      this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.42778 0.246979 -0.765088 -0.324507 -0.478688 -0.534675 c 0.448246 -0.328934 0.791237 -0.581367 1.4953 -0.955435"];
      return;

    case "SER4":
    case "SER8":
      this.dp = p(0.359662, 7.6396);
      this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.586749 0.458457 -1.15404 -0.206763 -1.07896 -0.629183 c 0.11484 -0.536894 0.921123 -0.063676 1.43862 0.298682"];
      return;

    case "ER8":
      this.dp = p(0.988973, 6.55808);
      this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.2799 0.2187 -0.75032 0.056771 -0.563252 -0.374573 c 0.151676 -0.349738 1.0351 -0.817957 1.55222 -1.03745"];
      return;

    case "NEL8":
      this.dp = p(0.9476, 6.66668);
      this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.315447 0.315447 -0.672197 0.107124 -0.724527 -0.132765 c -0.145015 -0.664762 1.11648 -0.884244 1.67213 -1.17065"];
      return;
  }

  switch (_head) {
    case "NER":
      this.dp = p(1.27667, 5.20086);
      this.paths = ["m 0 0 c 1.499 2.2223 1.76954 7.32571 0.33599 8.15337 c -0.526587 0.304026 -0.271056 -0.47084 0.115778 -1.32122 c 0.294663 -0.647766 0.665513 -1.33935 0.824899 -1.63128"];
      return;

    case "SEL":
      this.dp = p(-0, 7.9701);
      this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.2799 0.2187 -0.782033 -0.062009 -0.862349 -0.363425 c -0.093165 -0.349641 0.306707 -0.950492 0.657917 -0.863425 c 0.402407 0.099759 0.204432 0.728437 0.204432 1.22685"];
      return;

    case "E":
      this.dp.set(0.708541, 7.15951);
      this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.534537 0.417661 -1.10882 -0.810586 -0.12823 -0.810586 c 0.373648 0 0.189133 0 0.836771 0"];
      return;

    case "SW":
      this.dp = p(-0.530489, 8.11527);
      this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.397518 0.310601 -1.55542 0.123176 -1.13804 -0.565146 c 0.136366 -0.224885 0.689012 -0.553204 0.925148 -0.3269 c 0.261056 0.250186 -0.217217 0.761423 -0.3176 1.03721"];
      return;
  }

  this.dp.set(1.09583, 6.22445);
  this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.375238 0.293193 -0.627489 -0.254407 -0.4227 -0.631772 c 0.261876 -0.48256 1.08718 -0.864842 1.51853 -1.11388"];
};

WasedaChu = function() { WasedaChar.call(this, "WasedaChu", "ちゅ", "NE16CL1", "NE", "NECL", "black", false, p(0.0, 2.7)); };
WasedaChu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ちゅ"] = WasedaChu;
WasedaChu.prototype.getFilteredPrevTailType = WasedaCha.prototype.getFilteredPrevTailType;
WasedaChu.prototype.reverse = function() {
  this.headType = "SW";
  this.tailType = "SWCR";
  this.model = "SW8CR1";
};
WasedaChu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getFilteredPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (tail_ + "_" + _head) {
    case "R_SW":
      this.dp = p(-2.4721, 7.6085);
      this.paths = ["m 0 0 c -0.772463 2.53527 -1.65863 5.21653 -2.4721 7.6085 c -0.452 1.1775 -1.23205 0.609299 -0.811043 -0.105236 c 0.452294 -0.767631 1.02301 -0.477131 0.811043 0.105236"];
      return;
  }

  switch (tail_) {
    case "R":
      this.dp = p(-2.1259, 6.6979);
      this.paths = ["m 0 0 c -0.8368 2.5753 -1.5112 5.2299 -2.4721 7.6085 c -0.452 1.1775 -1.46994 0.447664 -0.811043 -0.105236 c 0.5191 -0.4204 0.578743 -0.471464 1.15724 -0.805364"];
      this.reverse();
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "NEL16":
      this.dp.set(6.226, -4.3592);
      this.paths = ["m 0 0 c 1.97075 -1.42983 4.20479 -2.95817 6.226 -4.3592 c 0.587465 -0.40721 0.325774 -0.815557 0.038105 -0.892638 c -0.411285 -0.110203 -0.902241 -0.00267 -1.0891 0.327131 c -0.205517 0.362716 0.1887 1.0435 1.051 0.565507"];
      return;

    case "ER16":
      this.dp = p(6.42308, -4.61614);
      this.paths = ["m 0 0 c 1.97075 -1.42983 4.20479 -2.95817 6.226 -4.3592 c 0.38218 -0.264914 0.167229 -0.681924 -0.02848 -0.762169 c -0.557664 -0.228657 -1.25099 0.20726 -1.00208 0.723561 c 0.186856 0.387582 0.811439 -0.015769 1.22764 -0.218334"];
      return;

    case "SR8":
      this.dp = p(5.907, -4.1588);
      this.paths = ["m 0 0 c 1.97075 -1.42983 4.20479 -2.95817 6.226 -4.3592 c 1.10192 -0.763812 -0.343082 -1.32523 -0.749847 -1.12878 c -0.419407 0.202549 -0.1107 0.526277 0.430847 1.32918"];
      return;

    case "EL4":
      this.dp = p(5.907, -4.1588);
      this.paths = ["m 0 0 c 1.97075 -1.42983 4.20479 -2.95817 6.226 -4.3592 c 0.369124 -0.255863 0.140663 -0.67106 -0.171673 -0.75475 c -0.25462 -0.068225 -0.653731 0.015691 -0.757997 0.191071 c -0.206979 0.348146 0.222804 0.557846 0.61067 0.764079"];
      return;

    case "ER4":
      this.dp = p(6.64899, -4.93357);
      this.paths = ["m 0 0 c 1.97075 -1.42983 4.20479 -2.95817 6.226 -4.3592 c 1.10192 -0.763812 0.386789 -1.37738 -0.127754 -1.28773 c -0.429386 0.074808 -0.707595 0.317892 -0.757978 0.611912 c -0.057719 0.336832 0.197013 0.743305 1.30872 0.101449"];
      return;
  }

  //switch (_head) {}

  this.dp = p(5.907, -4.1588);
  this.paths = ["m 0 0 c 1.97075 -1.42983 4.20479 -2.95817 6.226 -4.3592 c 1.10192 -0.763812 -0.52668 -1.27081 -0.566 -0.8714 c -0.0361 0.366578 0.127 0.7234 0.247 1.0718"];
};


WasedaCho = function() { WasedaChar.call(this, "WasedaCho", "ちょ", "NE8OWL4", "NE", "NEOWL", "black", false, p(0.0, 2.6)); };
WasedaCho.prototype = Object.create(WasedaChar.prototype);
WasedaCho.prototype.reverse = function() {
  this.model = "SW8OWR4";
  this.headType = "SW";
  this.tailType = "SWOWR";
};
WasedaChar.dict["ちょ"] = WasedaCho;
WasedaCho.prototype.getFilteredPrevTailType = WasedaCha.prototype.getFilteredPrevTailType;
WasedaCho.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getFilteredPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (tail_) {
    case "R":
      this.dp = p(-2.9473, 6.3205);
      this.paths = ["m 0 0 c -1.05273 2.02284 -1.97036 4.22226 -2.9473 6.3205 c -0.2756 0.8005 -1.3406 0.5429 -2.2566 0.3979 c -0.8777 -0.1548 -2.1384 -0.7025 -1.2167 -0.7025 c 1.1646 0 2.3265 0.1023 3.4733 0.3046"];
      this.reverse();
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  switch (_headModel) {
    case "ER8":
      this.dp.set(6.472, -4.7023);
      this.paths = ["m 0 0 c 1.98474 -1.44203 4.62515 -3.31619 6.472 -4.7023 c 0.801 -0.8011 -1.20484 -0.285166 -1.74484 -0.067945 c -0.670695 0.269794 -2.78742 1.90517 -1.50503 1.56156 c 0.598257 -0.160302 2.0251 -0.814685 3.24987 -1.49361"];
      return;
  }

  //switch (_head) {}

  this.dp = p(6.472, -4.7023);
  this.paths = ["m 0 0 c 1.98474 -1.44203 4.62515 -3.31619 6.472 -4.7023 c 0.801 -0.8011 -0.879 -0.6161 -2.257 -0.3979 c -0.906 0.1598 -2.172 0.9161 -1.2 0.7795 c 1.148 -0.1614 2.301 -0.2886 3.457 -0.3816"];
};

WasedaTer = function() { WasedaChar.call(this, "WasedaTer", "てr", "NE8CR1", "NE", "CR", "black", false, p(0.0, 2.6)); };
WasedaTer.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["てｒ"] = WasedaTer;
WasedaChar.dict["ちぇ"] = WasedaTer;
WasedaTer.prototype.getFilteredPrevTailType = WasedaCha.prototype.getFilteredPrevTailType;
WasedaTer.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getFilteredPrevTailType();
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
    case "R":
      this.dp = p(-1.9998, 6.4346);
      this.paths = ["m 0 0 c -0.7355 2.5649 -1.3098 4.488 -2.2762 7.0053 c -0.4452 1.1019 0.856578 1.05446 0.650578 0.335861 c -0.1141 -0.4258 -0.110948 -0.450634 -0.374178 -0.906561"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(5.52004, -4.60012);
  this.paths = ["m 0 0 c 2.13049 -1.58006 4.01619 -3.22646 5.97267 -5.0117 c 0.3253 -0.3253 0.407186 -0.04102 0.46407 0.1072 c 0.157612 0.410691 -0.326208 1.17013 -0.75698 1.081 c -0.258809 -0.05355 -0.260337 -0.447519 -0.159717 -0.776619"];
};

WasedaSho = function() { WasedaChar.call(this, "WasedaSho", "しょ", "NEL16CL8", "NEL", "NELCL8", "black", false, p(0.0, 6.5)); };
WasedaSho.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["しょ"] = WasedaSho;
WasedaSho.prototype.getFilteredPrevTailType = WasedaSa.prototype.getFilteredPrevTailType;
WasedaSho.prototype.reverse = function() {
  this.headType = "SWR";
  this.tailType = "SWRCR";
  this.model = "SWR16CR8";
}
WasedaSho.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getFilteredPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) { }

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

  switch (tail_ + "_" + _headModel) {
    case "R_NEL16":
      this.dp.set(-1.41267, 7.21522);
      this.paths = ["m 0 0 c 0 6.4269 -4.43676 15.75 -7.69358 13.8453 c -3.64885 -2.13397 4.08159 -5.46592 6.28091 -6.63008"];
      this.reverse();
      return;

    case "R_NEL8":
      this.dp.set(-1.41836, 7.37483);
      this.paths = ["m 0 0 c 0 6.4269 -3.87591 14.0054 -6.66159 13.9396 c -1.77915 -0.04206 -2.35542 -2.49515 0.446812 -4.02348 c 1.72769 -0.942277 3.63237 -1.92243 4.79642 -2.54129"];
      this.reverse();
      return;

    case "SR8":
      this.dp = p(9.28081, -5.73627);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -4.99079 -3.72655 -3.97439 -1.37472 c 0.772142 1.78666 1.29555 3.59207 1.8264 5.57325"];
      return;
  }

  switch (tail_ + "_" + _head) {
    case "R_E":
      this.dp.set(-2.96079, 10.363);
      this.paths = ["m 0 0 c 0 6.4269 -3.93618 14.1869 -7.69358 13.8453 c -2.39598 -0.217833 -2.19555 -3.4676 0.083524 -3.4676 c 1.30058 0 3.14458 -0.01467 4.64927 -0.01467"];
      this.reverse();
      return;

    case "R_SW":
      this.dp = p(-2.29575, 8.30146);
      this.paths = ["m 0 0 c 0 6.4269 -5.18193 12.6639 -8.37831 10.8185 c -2.3733 -1.37022 3.4047 -7.54723 6.40593 -6.35724 c 1.19417 0.473488 0.261148 1.65881 -0.323365 3.84024"];
      this.reverse();
      return;
  }

  switch (tail_) {
    case "R":
    case "NERB":
      this.dp.set(-1.749, 8.1606);
      this.paths = ["m 0 0 c 0 6.4269 -3.93618 14.1869 -7.69358 13.8453 c -4.55916 -0.4145 3.7432 -5.0948 5.94458 -5.6847"];
      this.reverse();
      return;

    case "ER":
      this.dp = p(-1.161, 8.2236);
      this.paths = ["m 0 0 c 2.6019 4.5065 -3.9362 14.1869 -7.6936 13.8453 c -4.5591 -0.4145 4.3312 -5.0319 6.5326 -5.6217"];
      this.reverse();
      return;

    case "NER":
      this.dp = p(-1.1387, 6.9734);
      this.paths = ["m 0 0 c 2.2238 2.224 -3.9362 14.1869 -7.6936 13.8453 c -4.5591 -0.4145 4.3535 -6.282 6.5549 -6.8719"];
      this.reverse();
      return;
  }

  switch (_name) {
    case "WasedaWa":
      this.dp = p(5.03437, -2.70962);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -3.16539 0.211921 -3.82993 1.39731 c -0.982888 1.75326 -2.33962 4.9374 -2.5645 5.82787"];
      return;
  }

  //switch (_model) {}

  switch (_headModel) {
    case "BNER16":
      this.dp.set(8.0309, -2.97688);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -4.28081 -3.55965 -3.87381 -1.25085 c 0.338 1.9168 1.342 6.70865 0.475909 8.20876"];
      return;

    case "ER4":
      this.dp.set(8.12562, -4.7428);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -6.96618 2.11177 -6.77293 4.41273 c 0.146371 1.74288 1.89084 1.69087 3.46975 0.779266"];
      return;

    case "ER8":
    case "ER16":
      this.dp.set(8.12562, -4.74281);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -6.96618 2.11177 -6.77293 4.41273 c 0.146371 1.74288 1.7318 1.41181 3.46975 0.779261"];
      return;

    case "ER25":
      this.dp.set(8.12562, -4.7428);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -6.96618 2.11177 -6.77293 4.41274 c 0.146371 1.74288 1.94154 1.66158 3.46975 0.77926"];
      return;

    case "NE4":
    case "NE8":
      this.dp.set(10.3589, -6.95692);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.24741 -3.02019 -2.4186 -4.66256 -0.77623 c -2.09006 2.09006 -2.15501 3.80701 -1.97681 4.81791 c 0.338 1.9168 4.14611 -0.029668 5.56947 -1.0638"];
      return;

    case "SWL16":
      this.dp = p(5.87971, -3.01671);
      this.paths = ["m 0 0 c 4.0576 -2.2492 13.7219 -5.96303 11.4288 -9.9348 c -1.00213 -1.73574 -5.15811 6.18682 -5.54909 6.91809"];
      return;

    case "SER4":
    case "SER8":
      this.dp.set(7.34102, -4.16427);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -8.79408 -0.022101 -8.38708 2.2867 c 0.227062 1.2789 2.55205 2.27992 4.2993 3.48383"];
      return;

    case "SWR16":
      this.dp = p(7.64313, -4.38011);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -4.9484 -3.611 -4.5414 -1.3022 c 0.338 1.9168 0.755726 5.07422 0.755726 6.85689"];
      return;

    case "EL8":
      this.dp = p(10.6043, -7.31615);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -6.42297 -3.74711 -6.01597 -1.4383 c 0.338 1.9168 3.66817 3.3068 5.19147 4.05695"];
      return;

    case "SR8":
      this.dp = p(9.28081, -5.73627);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -4.99079 -3.72655 -3.97439 -1.37472 c 0.772142 1.78666 1.29555 3.59207 1.8264 5.57325"];
      return;

    case "SL8":
      this.dp = p(6.31596, -3.45736);
      this.paths = ["m 0 0 c 4.0576 -2.2492 12.5237 -6.09584 11.6295 -9.43296 c -0.72514 -2.70626 -4.95886 4.71757 -5.31354 5.9756"];
      return;
  }

  switch (_head) {
    case "S":
      this.dp = p(8.25708, -4.84603);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -3.20076 -3.74896 -3.20076 -1.41392 c 0 1.99213 0.029038 4.6026 0.029038 6.5027"];
      return;

    case "E":
      this.dp = p(8.31598, -4.89296);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.0307 -5.36591 11.4288 -9.9348 c 0.555216 -6.37272 -7.7629 1.38952 -7.3559 3.69832 c 0.338 1.9168 2.80641 1.34352 4.24308 1.34352"];
      return;

    case "SEL":
      this.dp = p(7.6139, -4.35888);
      this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -1.66715 -2.49951 -2.35942 -1.02065 c -0.700898 1.49729 -1.45548 4.9214 -1.45548 6.59658"];
      return;

    case "SW":
      this.dp = p(6.06714, -3.3913);
      this.paths = ["m 0 0 c 4.0576 -2.2492 12.3379 -6.1301 11.4288 -9.9348 c -0.353362 -1.47876 -2.36811 -2.04751 -3.14684 0.192476 c -0.796744 2.37012 -1.45983 4.272 -2.21482 6.35102"];
      return;
  }

  this.dp = p(9.229, -5.983);
  this.paths = ["m 0 0 c 4.0576 -2.2492 11.4288 -5.3486 11.4288 -9.9348 c 0 -4.3354 -4.9484 -3.611 -4.5414 -1.3022 c 0.338 1.9168 1.1422 3.7212 2.3416 5.254"];
};

WasedaNya = function() { WasedaChar.call(this, "WasedaNya", "にゃ", "EL8", "EL", "EL", "black"); };
WasedaNya.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["にゃ"] = WasedaNya;
WasedaNya.prototype.setPaths = WasedaNa.prototype.setPaths;
WasedaNya.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m5,2.2 v0.1"];
};

WasedaNyu = function() { WasedaChar.call(this, "WasedaNyu", "にゅ", "EL8ONL4", "EL", "ELONL", "black", false, p(0.0, 0)); };
WasedaNyu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["にゅ"] = WasedaNyu;
WasedaChar.dict["ぬい"] = WasedaNyu;

WasedaNyu.prototype.setPaths = function() {
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

  switch (_headModel) {
    case "SWR8":
      this.dp = p(7.47951, 0.630764);
      this.paths = ["m 0 0 c 2.189 0.6692 7.46584 1.88154 7.97 0 c 0.163787 -0.611261 0.240481 -2.6653 -0.5063 -2.6653 c -0.443871 0 0.01581 2.18649 0.01581 3.29606"];
      return;
  }

  //switch (_head) {}

  this.dp = p(7.47951, 0.630764);
  this.paths = ["m 0 0 c 2.189 0.6692 7.46584 1.88154 7.97 0 c 0.163787 -0.611261 0.240481 -2.6653 -0.5063 -2.6653 c -0.443871 0 -0.242453 2.22003 0.015813 3.29607"];
};

WasedaNyo = function() { WasedaChar.call(this, "WasedaNyo", "にょ", "EL16CL8", "EL", "ELCL8", "black", false, p(0.0, 0), 15); };
WasedaNyo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["にょ"] = WasedaNyo;

WasedaNyo.prototype.setPaths = function() {
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

  this.dp = p(9.85129, 1.64927);
  this.paths = ["m 0 0 c 2.8811 0.665 13.2586 3.60028 16.2385 -0.039754 c 1.35539 -1.65561 -0.18069 -2.65738 -1.42977 -2.04033 c -1.56863 0.774913 -3.50513 2.31371 -4.95747 3.72936"];
};

WasedaHya = function() { WasedaChar.call(this, "WasedaHya", "ひゃ", "SWL8", "SWL", "SWL", "black", false, p(4.3, -3.5)); };
WasedaHya.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ひゃ"] = WasedaHya;

WasedaHya.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
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

  switch (tail_) {
    case "NE":
    case "ELCL":
      this.dp.set(-3.36846, 7.50711);
      this.paths = ["m 0 0 c -1.53226 1.82608 -4.51811 5.51586 -3.36846 7.50711"];
      return;
  }

  //switch (_name) {}

  switch (_model) {
  }

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(-4, 6.9282);
  this.paths = ["m 0 0 c -2.23251 1.28894 -5.14965 4.93695 -4 6.9282"];
};

WasedaHyu = function() { WasedaChar.call(this, "WasedaHyu", "ひゅ", "SWL8CL1", "SWL", "SWLCL", "black", false, p(4.3, -3.6)); };
WasedaHyu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ひゅ"] = WasedaHyu;
WasedaChar.dict["ロク"] = WasedaHyu;
WasedaChar.dict["リョク"] = WasedaHyu;
WasedaChar.dict["リキ"] = WasedaHyu;
WasedaChar.dict["力"] = WasedaHyu;

WasedaHyu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (tail_) {
    case "NE":
    case "ELCL":
      this.dp.set(-3.57546, 5.91864);
      this.paths = ["m 0 0 c -1.53226 1.82608 -3.49689 4.40611 -3.61959 6.42291 c -0.01248 0.205061 0.000884 0.986273 0.305569 1.17369 c 0.372417 0.229082 0.624562 -0.0069 0.579168 -0.360401 c -0.04643 -0.36157 -0.586892 -1.08574 -0.840614 -1.31757"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "SW":
      this.dp.set(-3.89448, 6.90534);
      this.paths = ["m 0 0 c -1.83452 1.05916 -4.13129 3.71125 -4.25403 5.72805 c -0.041928 0.688927 0.231933 1.1333 0.536618 1.32072 c 0.372417 0.229082 0.914584 -0.19564 0.919061 -0.794709 c 0.00422 -0.564297 -0.618167 -0.66188 -0.81039 -0.133769 c -0.203345 0.558669 -0.063853 0.160413 -0.285742 0.785046"];
      return;
  }

  this.dp = p(-4.23101, 5.49726);
  this.paths = ["m 0 0 c -1.83452 1.05916 -4.13133 3.71125 -4.25403 5.72805 c -0.01248 0.205061 0.000884 0.986273 0.305569 1.17369 c 0.372417 0.229082 0.624562 -0.0069 0.579168 -0.360401 c -0.04643 -0.36157 -0.607995 -0.81225 -0.861717 -1.04408"];
};

WasedaHyo = function() { WasedaChar.call(this, "WasedaHyo", "ひょ", "SWL8CL4", "SWL", "SWLCL4", "black", false, p(4.3, -3.5)); };
WasedaHyo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ひょ"] = WasedaHyo;

WasedaHyo.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (tail_ + "_" + _head) {
    case "SELCL_SW":
    case "NELCL_SW":
    case "NE_SW":
      this.dp = p(-2.60966, 6.5552);
      this.paths = ["m 0 0 c -0.928261 1.60779 -2.49349 4.22058 -2.61619 6.23738 c -0.01248 0.205061 -0.051148 0.983457 0.305569 1.17369 c 0.649586 0.346416 1.67284 -0.118641 2.08486 -0.728729 c 0.510709 -0.756224 0.734838 -2.43598 -0.127439 -2.7346 c -1.08613 -0.376152 -2.11784 2.22659 -2.25647 2.60746"];
      return;
  }

  switch (tail_) {
    case "SELCL":
    case "NELCL":
    case "NE":
      this.dp = p(-1.93746, 3.70004);
      this.paths = ["m 0 0 c -0.928261 1.60779 -2.49349 4.22058 -2.61619 6.23738 c -0.01248 0.205061 0.01481 0.965315 0.305569 1.17369 c 0.490085 0.351235 1.20942 0.020205 1.44336 -0.423252 c 0.537754 -1.01938 -0.816484 -3.05595 -1.07021 -3.28778"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "SW":
      this.dp = p(-4.24325, 6.27062);
      this.paths = ["m 0 0 c -1.83452 1.05916 -4.13133 3.71125 -4.25403 5.72805 c -0.01248 0.205061 0.019706 0.887827 0.305569 1.17369 c 0.820097 0.820097 1.74209 -0.027613 2.17073 -0.649468 c 0.487919 -0.707862 0.626666 -2.29859 -0.18833 -2.5723 c -1.08991 -0.366035 -1.87292 1.29788 -2.27719 2.59065"];
      return;
  }

  this.dp = p(-3.35763, 3.34002);
  this.paths = ["m 0 0 c -1.83452 1.05916 -4.13133 3.71125 -4.25403 5.72805 c -0.01248 0.205061 0.01481 0.965315 0.305569 1.17369 c 0.490085 0.351235 1.19853 0.01429 1.44336 -0.423252 c 0.529366 -0.946029 -0.598801 -2.90664 -0.852523 -3.13847"];
};

WasedaMyu = function() { WasedaChar.call(this, "WasedaMyu", "みゅ", "ER8ONL4", "ER", "ERONL", "black", false, p(0.0, 0)); };
WasedaMyu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["みゅ"] = WasedaMyu;
WasedaChar.dict["昔"] = WasedaMyu;

WasedaMyu.prototype.setPaths = function() {
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

  this.dp = p(8.00001, 0);
  this.paths = ["m 0 0 c 2.52091 -1.07 7.16392 -1.69909 8.00001 0 c 0.298542 -0.612789 0.730968 -3.29607 -0.015813 -3.29607 c -0.540748 0 -0.397961 2.18162 0.015813 3.29607"];
};

WasedaMya = function() { WasedaChar.call(this, "WasedaMya", "みゃ", "ER8", "ER", "ER", "black"); };
WasedaMya.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["みゃ"] = WasedaMya;
WasedaMya.prototype.setPaths = WasedaMa.prototype.setPaths;
WasedaMya.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m5,1v0.1"];
};

WasedaMyo = function() { WasedaChar.call(this, "WasedaMyo", "みゅ", "ER8OSWR4", "ER", "EROSWR", "black", false, p(0.0, 0)); };
WasedaMyo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["みょ"] = WasedaMyo;

WasedaMyo.prototype.setPaths = function() {
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

  this.dp = p(8.00001, 0);
  this.paths = ["m 0 0 c 2.52091 -1.07 7.16598 -1.7001 8.00001 0 c 0.401232 0.817876 -2.10496 2.52172 -2.43467 2.21845 c -0.547555 -0.503648 0.806293 -1.35222 2.43467 -2.21845"];
};

WasedaRya = function() { WasedaChar.call(this, "WasedaRya", "りゃ", "SER8", "SER", "SER", "black", false, p(0.0, -3.5)); };
WasedaRya.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["りゃ"] = WasedaRya;
WasedaRya.prototype.setPaths = WasedaRa.prototype.setPaths;
WasedaRya.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m1.5,4.2v0.1"]; 
};

WasedaRyo = function() { WasedaChar.call(this, "WasedaRyo", "りょ", "SER8OSWR4", "SER", "SEROSWR", "black", false, p(0.0, -3.5)); };
WasedaRyo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["りょ"] = WasedaRyo;

WasedaRyo.prototype.setPaths = function() {
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

  switch (_headModel) {
    case "NEL16":
      this.dp = p(4.28137, 5.67313);
      this.paths = ["m 0 0 c 2.26387 1.5852 5.22323 4.8095 4 6.9282 c -0.46562 0.80648 -2.31799 1.15794 -2.66242 0.8715 c -0.556246 -0.462612 1.41474 -1.27899 2.94379 -2.12657"];
      return;

  }

  //switch (_head) {}

  this.dp = p(4.28137, 5.67313);
  this.paths = ["m 0 0 c 2.26387 1.5852 5.22323 4.8095 4 6.9282 c -0.463317 0.80249 -1.87098 1.74249 -2.21541 1.45605 c -0.556246 -0.462612 0.91316 -1.79681 2.49678 -2.71112"];
};

WasedaRyu = function() { WasedaChar.call(this, "WasedaRyu", "りゅ", "SER8OWR4", "SER", "SEROWR", "black", false, p(0.0, -3.5)); };
WasedaRyu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["りゅ"] = WasedaRyu;

WasedaRyu.prototype.setPaths = function() {
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

  switch (tail_) {
    case "NER":
      this.dp = p(4.18994, 6.49181);
      this.paths = ["m 0 0 c 2.76369 0 5.22323 4.8095 4 6.9282 c -0.463317 0.80249 -2.91292 0.521997 -3.2766 0.088495 c -0.464989 -0.554261 1.62455 -0.52489 3.46654 -0.52489"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(4.18994, 6.49181);
  this.paths = ["m 0 0 c 2.26387 1.5852 5.22323 4.8095 4 6.9282 c -0.463317 0.80249 -2.91292 0.521997 -3.2766 0.088495 c -0.464989 -0.554261 1.62455 -0.52489 3.46654 -0.52489"];
};

WasedaOneLong = function() { WasedaChar.call(this, "WasedaOneLong", "一", "SW18P", "SW", "SWP", "black", false, p(9.0, -7.6)); };
WasedaOneLong.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["一"] = WasedaOneLong;

WasedaOneLong.prototype.setPaths = function() {
  this.paths = ["m 0 0 l -8.99651 15.1121"];
  this.dp = p(-5.21372, 12.7068);

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
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

  switch (_model) {
    case "SWL4SWR4":
      this.dp.move(4, -4);
      return;
  }

  switch (_headModel) {
    case "SWL16":
      this.dp.x += 6;
      this.dp.y += -5;
      return;

    case "SWL8":
      this.dp.x += 5;
      this.dp.y += -5;
      return;
  }

  //switch (_head) {}
};

WasedaEight = function() { WasedaChar.call(this, "WasedaEight", "８", "8", "NWL", "NEL", "black", false, p(3.0, -2)); };
WasedaEight.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["８"] = WasedaEight;

WasedaEight.prototype.setPaths = function() {
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

  this.dp = p(0.53839, 0.150752);
  this.paths = ["m 0 0 c -0.27285 -1.01827 -2.48057 -1.63167 -3.1442 -0.04307 c -0.34662 0.829743 1.91981 2.1737 1.78746 3.46724 c -0.0883 0.863237 -0.76958 1.99173 -1.63671 2.02435 c -0.33493 0.0126 -0.68765 -0.397043 -0.68914 -0.732209 c -0.009 -2.07258 4.22098 -4.56555 4.22098 -4.56555"];
};

WasedaPya = function() { WasedaChar.call(this, "WasedaPya", "ぴゃ", "SWL8", "SWL", "SWL", "black", false, p(4.3, -3.5)); };
WasedaPya.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぴゃ"] = WasedaPya;

WasedaPya.prototype.setPaths = WasedaHya.prototype.setPaths; 
WasedaPya.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m-1.6,4.0v0.1"];
};

WasedaPa = function() { WasedaChar.call(this, "WasedaPa", "ぱ", "SWL8NEL4", "SWL", "NEL", "black", false, p(4.3, -3.7)); };
WasedaPa.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぱ"] = WasedaPa;

WasedaPa.prototype.setPaths = function() {
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

  switch (tail_) {
    case "NECL":
      this.dp.set(1.616, 4.84244);
      this.paths = ["m 0 0 c -0.980301 1.69793 -3.1819 5.968 -1.07909 7.13783 c 1.0312 0.573676 2.32845 -0.927074 2.69509 -2.29539"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(-0.327817, 5.09172);
  this.paths = ["m 0 0 c -1.69793 0.980301 -5.70552 5.28918 -3.75382 7.13783 c 0.965719 0.914725 3.05936 -0.677791 3.426 -2.04611"];
};

WasedaPi = function() { WasedaChar.call(this, "WasedaPi", "ぴ", "SWL8NEL4CL1", "SWL", "NELCL", "black", false, p(4.3, -3.7)); };
WasedaPi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぴ"] = WasedaPi;

WasedaPi.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (_headModel) {
    case "NEL8":
      this.dp = p(-0.36276, 5.84668);
      this.paths = ["m 0 0 c -1.69793 0.980301 -5.58539 5.17009 -3.75382 7.13783 c 0.860217 0.924168 3.46997 -0.101931 3.46997 -1.51851 c 0 -1.28493 -1.53767 -0.132568 -1.45366 0.35946 c 0.077479 0.453794 0.649379 0.288293 1.37475 -0.132101"];
      return;
  }

  switch (_head) {
    case "SW":
      this.dp = p(-1.29906, 7.1492);
      this.paths = ["m 0 0 c -1.69793 0.980301 -5.58539 5.17009 -3.75382 7.13783 c 0.860217 0.924168 3.38493 0.010715 3.75157 -1.3576 c 0.224221 -0.836807 -0.372502 -0.95893 -0.722941 -0.092971 c -0.228753 0.565266 -0.438365 1.08966 -0.573869 1.46194"];
      return;

    case "S":
      this.dp = p(-1.04617, 6.73721);
      this.paths = ["m 0 0 c -1.69793 0.980301 -5.58539 5.17009 -3.75382 7.13783 c 0.860217 0.924168 3.10333 -0.1502 3.46997 -1.51851 c 0.344272 -1.28484 -0.756203 -1.42628 -0.756203 -0.376163 c 0 0.587397 -0.00612 1.06563 -0.00612 1.49405"];
      return;
  }

  this.dp = p(-0.657873, 6.33586);
  this.paths = ["m 0 0 c -1.69793 0.980301 -5.58539 5.17009 -3.75382 7.13783 c 0.860217 0.924168 3.10333 -0.1502 3.46997 -1.51851 c 0.344272 -1.28484 -1.34164 -0.918359 -1.04664 -0.386159 c 0.2937 0.5087 0.455416 0.726511 0.672616 1.10271"];
};

WasedaPu = function() { WasedaChar.call(this, "WasedaPu", "ぷ", "SWL16", "SWL", "SWL", "black", false, p(6.9, -7.3)); };
WasedaPu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぷ"] = WasedaPu;

WasedaPu.prototype.setPaths = function() {
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

  switch (_head) {
    case "SW":
      this.dp = p(-6.76189, 14.5009);
      this.paths = ["m 0 0 c -3.2552 3.2552 -10.1102 14.5009 -6.76189 14.5009"];
      return;
  }

  this.dp = p(-6.76189, 14.5009);
  this.paths = ["m 0 0 c -3.2552 3.2552 -7.65129 11.1816 -6.76189 14.5009"];
};

WasedaPe = function() { WasedaChar.call(this, "WasedaPe", "ぺ", "SWL16NEL4CL1", "SWL", "NELCL", "black", false, p(7.3, -7.4)); };
WasedaPe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぺ"] = WasedaPe;

WasedaPe.prototype.setPaths = function() {
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

  this.dp = p(-3.70494, 13.2294);
  this.paths = ["m 0 0 c -3.2552 3.2552 -9.19184 12.0711 -6.76189 14.5009 c 0.940596 0.94054 3.05936 -0.677791 3.426 -2.0461 c 0.344271 -1.28484 -1.34164 -0.918359 -1.04664 -0.386159 c 0.2937 0.5087 0.460386 0.784524 0.677586 1.16072"];
};

WasedaPo = function() { WasedaChar.call(this, "WasedaPo", "ぽ", "SWL16ONEL4", "SWL", "SWLONEL", "black", false, p(7.3, -7.4)); };
WasedaPo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぽ"] = WasedaPo;

WasedaPo.prototype.setPaths = function() {
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

  switch (_head) {
    case "NEL":
      this.dp = p(-5.88056, 14.632);
      this.paths = ["m 0 0 c -3.2552 3.2552 -9.19177 12.071 -6.76189 14.5009 c 0.540532 0.540533 1.43519 -0.105032 1.89102 -0.563559 c 0.479314 -0.46559 1.22132 -1.6301 0.663341 -1.99771 c -0.508869 -0.335253 -1.48042 1.81315 -1.67303 2.69242"];
      return;
  }

  this.dp = p(-6.54779, 14.6491);
  this.paths = ["m 0 0 c -3.2552 3.2552 -9.19177 12.071 -6.76189 14.5009 c 0.540532 0.540533 1.43519 -0.105032 1.89102 -0.563559 c 0.479314 -0.46559 1.22132 -1.6301 0.663341 -1.99771 c -0.508869 -0.335253 -1.72729 1.75907 -2.34026 2.70947"];
};

WasedaPai = function() { WasedaChar.call(this, "WasedaPai", "ぱい", "SWL8ONEL4", "SWL", "SWLONEL", "black", false, p(4.3, -3.6)); };
WasedaPai.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぱい"] = WasedaPai;

WasedaPai.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (tail_) {
    case "NELF":
      this.dp = p(-2.92779, 7.6226);
      this.paths = ["m 0 0 c -1.82284 1.82284 -4.43268 5.3175 -3.27715 7.30534 c 0.413629 0.711565 1.33377 0.249932 1.7896 -0.208595 c 0.479309 -0.46559 1.3988 -1.83294 0.840819 -2.20055 c -0.508869 -0.335253 -1.66809 1.77601 -2.28106 2.72641"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "SW":
      this.dp.set(-2.64144, 7.71343);
      this.paths = ["m 0 0 c -2.23251 1.28894 -4.26424 6.0623 -3.44238 7.48582 c 0.670177 1.16078 2.15307 -0.603152 2.45827 -1.24078 c 0.252923 -0.528406 0.678436 -1.67549 0.149365 -1.81725 c -0.578347 -0.154967 -1.55938 2.60616 -1.8067 3.28564"];
      return;
  }

  this.dp = p(-3.65064, 7.24547);
  this.paths = ["m 0 0 c -2.23251 1.28894 -5.15553 4.94036 -4 6.9282 c 0.41363 0.711565 1.33377 0.249932 1.7896 -0.208595 c 0.47931 -0.46559 1.3988 -1.83294 0.84082 -2.20055 c -0.50887 -0.335253 -1.66809 1.77601 -2.28106 2.72641"];
};

WasedaPyu = function() { WasedaChar.call(this, "WasedaPyu", "ぴゅ", "SWL16CL1", "SWL", "SWLCL", "black", false, p(6.9, -7.3)); };
WasedaPyu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぴゅ"] = WasedaPyu;

WasedaPyu.prototype.setPaths = function() {
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

  this.dp = p(-6.86932, 13.1963);
  this.paths = ["m 0 0 c -2.8832 2.8832 -6.66141 9.43097 -6.86932 13.1963 c -0.01488 0.269591 -0.153793 1.07491 0.226806 1.28642 c 0.254368 0.141356 0.757241 -0.03916 0.810143 -0.325314 c 0.08567 -0.463431 -0.711117 -0.850484 -1.03695 -0.961101"];
};

WasedaPyo = function() { WasedaChar.call(this, "WasedaPyo", "ぴょ", "SWL16CL8", "SWL", "SWLCL", "black", false, p(6.8, -7.3)); };
WasedaPyo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぴょ"] = WasedaPyo;

WasedaPyo.prototype.setPaths = function() {
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

  this.dp = p(-5.567, 8.48128);
  this.paths = ["m 0 0 c -2.8832 2.88319 -6.79055 9.40441 -6.79055 13.1754 c 0 1.6449 2.82366 2.24165 2.82366 -0.223886 c 0 -1.07603 -0.240635 -2.11558 -1.60011 -4.47026"];
};

WasedaPan = function() { WasedaChar.call(this, "WasedaPan", "ぱん", "SWL8NEL4F", "SWL", "NELF", "black", false, p(4.3, -3.7)); };
WasedaPan.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぱん"] = WasedaPan;

WasedaPan.prototype.setPaths = function() {
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

  this.dp = p(0.17656, 3.15637);
  this.paths = ["m 0 0 c -1.69793 0.980301 -5.70552 5.28918 -3.75382 7.13783 c 0.965719 0.914725 3.05936 -0.677791 3.426 -2.04611"];
};

WasedaPen = function() { WasedaChar.call(this, "WasedaPen", "ぺん", "SWL16NEL4CL1NE1F", "SWL", "NEF", "black", false, p(7.3, -7.4)); };
WasedaPen.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぺん"] = WasedaPen;

WasedaPen.prototype.setPaths = function() {
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

  this.dp = p(-0.583877, 12.0286);
  this.paths = ["m 0 0 c -3.2552 3.2552 -9.19184 12.0711 -6.76189 14.5009 c 0.940596 0.94054 3.426 -0.629522 3.426 -2.0461 c 0 -0.798266 -1.27554 0.08357 -1.24825 0.535507 c 0.020819 0.344799 0.464789 0.528708 0.994581 0.291006 l 1.14689 -0.514575"];
};

WasedaPon = function() { WasedaChar.call(this, "WasedaPon", "ぽん", "SWL16ONEL4NE1F", "SWL", "NEF", "black", false, p(7.3, -7.3)); };
WasedaPon.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぽん"] = WasedaPon;

WasedaPon.prototype.setPaths = function() {
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

  this.dp = p(-2.84326, 13.5824);
  this.paths = ["m 0 0 c -3.2552 3.2552 -9.19177 12.071 -6.76189 14.5009 c 0.540532 0.540533 1.43409 -0.36221 1.83441 -0.869925 c 0.435933 -0.552887 0.982665 -1.53464 0.424686 -1.90225 c -0.508869 -0.335253 -1.29884 1.89989 -1.80166 2.94744 l 1.55118 -0.500565"];
};

WasedaOu = function() { WasedaChar.call(this, "WasedaOu", "おー", "SW4CL1", "SW", "SWCL", "black", false, p(1.3, -2.0)); };
WasedaOu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["おー"] = WasedaOu;
WasedaChar.dict["おお"] = WasedaOu;

WasedaOu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (_headModel) {
    case "SEL4":
      this.dp.set(-0.677694, 1.85296);
      this.paths = ["m 0 0 l -1.20633 3.29836 c -0.238496 0.652099 0.259355 0.895874 0.522354 0.688314 c 0.329153 -0.25977 0.049034 -1.43973 0.006282 -2.13372"];
      return;

    case "SWL4":
    case "SWL8":
      this.dp = p(-1.18598, 2.98265);
      this.paths = ["m 0 0 l -1.20633 3.29836 c -0.318513 0.870883 0.31725 0.780097 0.599162 0.599057 c 0.341655 -0.219407 0.382828 -0.854039 0.130837 -0.998954 c -0.206058 -0.118499 -0.558219 -0.032086 -0.709644 0.084191"];
      return;
  }

  switch (_head) {
    case "SR":
      this.dp = p(-0.910605, 2.48978);
      this.paths = ["m 0 0 l -1.20633 3.29836 c -0.318513 0.870883 0.516589 0.902107 0.753496 0.6652 c 0.320144 -0.320144 -0.207749 -1.04072 -0.457771 -1.47378"];
      return;
  }

  this.dp = p(-1.0434, 2.85287);
  this.paths = ["m 0 0 l -1.20633 3.29836 c -0.318513 0.870883 0.490497 0.87276 0.753496 0.6652 c 0.329153 -0.25977 -0.134344 -0.988445 -0.590566 -1.11069"];
};

WasedaUu = function() { WasedaChar.call(this, "WasedaUu", "うう", "S4CL1", "S", "SCL", "black", false, p(0.0, -2.0)); };
WasedaUu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["うう"] = WasedaUu;
WasedaChar.dict["うー"] = WasedaUu;

WasedaUu.prototype.setPaths = function() {
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

  this.dp = p(0, 2.75413);
  this.paths = ["m 0 0 v 2.75413 c 0 0.466672 -0.158809 1.23022 0.419996 1.25999 c 0.730631 0.037576 0.924407 -0.981626 -0.419996 -1.25999"];
};

WasedaNaa = function() { WasedaChar.call(this, "WasedaNaa", "なあ", "EL8", "EL", "EL", "black"); };
WasedaNaa.prototype = Object.create(WasedaNa.prototype);
WasedaChar.dict["なあ"] = WasedaNaa;
WasedaChar.dict["なー"] = WasedaNaa;
WasedaNaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 4.167805,2.23111 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};


WasedaHaa = function() { WasedaChar.call(this, "WasedaHaa", "はあ", "SEL8", "SEL", "SEL", "black", false, p(0.0, -3.0)); };
WasedaHaa.prototype = Object.create(WasedaHa.prototype);
WasedaChar.dict["はあ"] = WasedaHaa;
WasedaChar.dict["はー"] = WasedaHaa;
WasedaHaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m -0.140693,4.528369 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};

WasedaMaa = function() { WasedaChar.call(this, "WasedaMaa", "まあ", "ER8", "ER", "ER", "black"); };
WasedaMaa.prototype = Object.create(WasedaMa.prototype);
WasedaChar.dict["まあ"] = WasedaMaa;
WasedaChar.dict["まー"] = WasedaMaa;
WasedaMaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 4.683933,0.02235 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};

WasedaYaa = function() { WasedaChar.call(this, "WasedaYaa", "やあ", "NER8", "NER", "NER", "black", false, p(0.0, 2.6)); };
WasedaYaa.prototype = Object.create(WasedaYa.prototype);
WasedaChar.dict["やあ"] = WasedaYaa;
WasedaChar.dict["やー"] = WasedaYaa;
WasedaYaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 1.202014,-5.329489 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};

WasedaRaa = function() { WasedaChar.call(this, "WasedaRaa", "らあ", "SER8", "SER", "SER", "black", false, p(0.0, -3.5)); };
WasedaRaa.prototype = Object.create(WasedaRa.prototype);
WasedaChar.dict["らあ"] = WasedaRaa;
WasedaChar.dict["らー"] = WasedaRaa;
WasedaRaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 1.395454,3.052909 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};

WasedaWaa = function() { WasedaChar.call(this, "WasedaWaa", "わあ", "UWL4", "WL", "EL", "black", false, p(1.8, -1.7)); };
WasedaWaa.prototype = Object.create(WasedaWa.prototype);
WasedaChar.dict["わあ"] = WasedaWaa;
WasedaChar.dict["わー"] = WasedaWaa;
WasedaWaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m -3.182625,1.763309 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};

WasedaKyaa = function() { WasedaChar.call(this, "WasedaKyaa", "きゃあ", "SL8", "SL", "SL", "black", false, p(1.1, -4.0)); };
WasedaKyaa.prototype = Object.create(WasedaKya.prototype);
WasedaChar.dict["きゃあ"] = WasedaKyaa;
WasedaChar.dict["きゃー"] = WasedaKyaa;
WasedaKyaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m -2.6470192,3.651155 c 0,0.545901 0.118182,1.053503 0.67553,1.202845"];
};

WasedaShaa = function() { WasedaChar.call(this, "WasedaShaa", "しゃあ", "SR8", "SR", "SR", "black", false, p(0.0, -4.0)); };
WasedaShaa.prototype = Object.create(WasedaSha.prototype);
WasedaChar.dict["しゃあ"] = WasedaShaa;
WasedaChar.dict["しゃー"] = WasedaShaa;
WasedaShaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m -0.516642,3.651155 c 0,0.545901 0.118182,1.053503 0.67553,1.202845"];
};

WasedaChaa = function() { WasedaChar.call(this, "WasedaChaa", "ちゃあ", "NE8", "NE", "NE", "black", false, p(0.0, 2.4)); };
WasedaChaa.prototype = Object.create(WasedaCha.prototype);
WasedaChar.dict["ちゃあ"] = WasedaChaa;
WasedaChar.dict["ちゃー"] = WasedaChaa;
WasedaChaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 2.459843,-4.494998 c 0,0.545901 0.118182,1.053503 0.67553,1.202845"];
};

WasedaNyaa = function() { WasedaChar.call(this, "WasedaNyaa", "にゃあ", "EL8", "EL", "EL", "black"); };
WasedaNyaa.prototype = Object.create(WasedaNya.prototype);
WasedaChar.dict["にゃあ"] = WasedaNyaa;
WasedaChar.dict["にゃー"] = WasedaNyaa;
WasedaNyaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 4.245971,-0.06125 c 0,0.545901 0.180595,1.598482 0.737943,1.747824"];
};

WasedaHyaa = function() { WasedaChar.call(this, "WasedaHyaa", "ひゃあ", "SWL8", "SWL", "SWL", "black", false, p(4.3, -3.5)); };
WasedaHyaa.prototype = Object.create(WasedaHya.prototype);
WasedaChar.dict["ひゃあ"] = WasedaHyaa;
WasedaChar.dict["ひゃー"] = WasedaHyaa;
WasedaHyaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m -3.847314,0.760966 c 0,0.545901 0.118182,1.053503 0.67553,1.202845"];
};

WasedaMyaa = function() { WasedaChar.call(this, "WasedaMyaa", "みゃあ", "ER8", "ER", "ER", "black"); };
WasedaMyaa.prototype = Object.create(WasedaMya.prototype);
WasedaChar.dict["みゃあ"] = WasedaMyaa;
WasedaChar.dict["みゃー"] = WasedaMyaa;
WasedaMyaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 4.48037,-2.050129 c 0,0.545901 0.179954,1.485905 0.737302,1.635247"];
};

WasedaRyaa = function() { WasedaChar.call(this, "WasedaRyaa", "りゃあ", "SER8", "SER", "SER", "black", false, p(0.0, -3.5)); };
WasedaRyaa.prototype = Object.create(WasedaRya.prototype);
WasedaChar.dict["りゃあ"] = WasedaRyaa;
WasedaChar.dict["りゃー"] = WasedaRyaa;
WasedaRyaa.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 1.973922,2.839352 c 0.407489,0.405605 1.717135,0.179561 2.004017,-0.08154"];
};

WasedaMein = function() { WasedaChar.call(this, "WasedaMein", "めいん", "ER4CR1NE1F", "ER", "NEF", "black", false, p(0.0, 1.1)); };
WasedaMein.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["めいん"] = WasedaMein;
WasedaChar.dict["いいん"] = WasedaMein;
WasedaChar.dict["めーん"] = WasedaMein;
WasedaChar.dict["いーん"] = WasedaMein;

WasedaMein.prototype.setPaths = function() {
  this.dp = p(6.30505, -2.9464);
  this.paths = ["m 0 0 c 1.57891 -0.9116 4.00001 -1.2364 4 0 c 0 0.5964 -0.501169 0.989285 -0.806628 0.775321 c -0.390326 -0.27341 0.104104 -0.653823 0.578906 -1.30722 l 1.06066 -1.06066"];

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
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

  switch (_name) {
    case "WasedaTei":
    case "WasedaDesu":
      this.dp.move(0.5, 0);
      return;
  }

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
};

WasedaNii = function() { WasedaChar.call(this, "WasedaNii", "にい", "EL8CL1", "EL", "ELCL", "black", false, p(0.0, -0.1)); };
WasedaNii.prototype = Object.create(WasedaNi.prototype);
WasedaChar.dict["にい"] = WasedaNii;
WasedaChar.dict["にー"] = WasedaNii;
WasedaNii.prototype.setPathsExtra = function() { this.pathsExtra = ["m 4.322525,1.68948 c 0,0.545902 0.118182,1.053505 0.67553,1.202846"]; };

WasedaSou = function() { WasedaChar.call(this, "WasedaSou", "そう", "NEL16", "NEL", "NEL", "black", false, p(0.0, 5.7)); };
WasedaSou.prototype = Object.create(WasedaSo.prototype);
WasedaChar.dict["そう"] = WasedaSou;
WasedaChar.dict["そー"] = WasedaSou;
WasedaSou.prototype.setPathsExtra = function() {
  if (this.model == "SWR16") {
    this.pathsExtra = ["m -4.486723,6.95321 c 0,0.5459 0.118181,1.0535 0.675529,1.20284"];
    return;
  }
  this.pathsExtra = ["m 5.840203,-7.53078 c 0,0.5459 0.118182,1.0535 0.67553,1.20284"];
};

WasedaKyou = function() { WasedaChar.call(this, "WasedaKyou", "きょう", "SL8ONEL4", "SL", "SLONEL", "black", false, p(1.0, -4.0), 4); };
WasedaKyou.prototype = Object.create(WasedaKyo.prototype);
WasedaChar.dict["きょう"] = WasedaKyou;
WasedaChar.dict["きょー"] = WasedaKyou;
WasedaKyou.prototype.setPathsExtra = function() { this.pathsExtra = ["m -2.6342711,3.157745 c 0,0.5459 0.118182,1.0535 0.67553,1.20284"]; };

WasedaTou = function() { WasedaChar.call(this, "WasedaTou", "とう", "NE16", "NE", "NE", "black", false, p(0.0, 6.1)); };
WasedaTou.prototype = Object.create(WasedaTo.prototype);
WasedaChar.dict["とう"] = WasedaTou;
WasedaChar.dict["とー"] = WasedaTou;
WasedaTou.prototype.setPathsExtra = function() {
  if (this.model == "SW16") {
    this.pathsExtra = ["m -5.5,6.66675 c 0,0.5459 0.312901,1.05351 0.870249,1.20285"];
    return;
  }
  switch (this.getNextHeadType()) {
    case "SW":
    case "SWR":
      this.pathsExtra = ["m 5.514891,-6.71872 c 0,0.5459 0.118182,1.0535 0.67553,1.20284"];
      return;
  }
  this.pathsExtra = ["m 4.152952,-8.295694 c 0,0.5459 0.118182,1.0535 0.67553,1.20284"];
};

WasedaGi = function() { WasedaChar.call(this, "WasedaGi", "ぎ", "E8CL1", "E", "ECL", "black"); };
WasedaGi.prototype = Object.create(WasedaKi.prototype);
WasedaChar.dict["ぎ"] = WasedaGi;
WasedaGi.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 4.5,1v0.1"];
};

WasedaGu = function() { WasedaChar.call(this, "WasedaGu", "ぐ", "E8CL4", "E", "ECL4", "black", false, p(0.0, 0.9)); };
WasedaGu.prototype = Object.create(WasedaKu.prototype);
WasedaChar.dict["ぐ"] = WasedaGu;
WasedaGu.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 4.5,1v0.1"];
};

WasedaGe = function() { WasedaChar.call(this, "WasedaGe", "げ", "E16CL1", "E", "ECL", "black", false, p(0.0, 0.5)); };
WasedaGe.prototype = Object.create(WasedaKe.prototype);
WasedaChar.dict["げ"] = WasedaGe;
WasedaGe.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m9,1v0.1"];
};

WasedaGo = function() { WasedaChar.call(this, "WasedaGo", "ご", "E16", "E", "E", "black", false, p(0.0, 0.0)); };
WasedaGo.prototype = Object.create(WasedaKo.prototype);
WasedaChar.dict["ご"] = WasedaGo;
WasedaGo.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m9,1v0.1"];
};

WasedaZa = function() { WasedaChar.call(this, "WasedaZa", "ざ", "NEL8", "NEL", "NEL", "black", false, p(0.0, 2.5)); };
WasedaZa.prototype = Object.create(WasedaSa.prototype);
WasedaChar.dict["ざ"] = WasedaZa;
WasedaZa.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 3.0687526,-3.76471 v 0.1"];
};

WasedaJi = function() { WasedaChar.call(this, "WasedaJi", "じ", "NEL8CL1", "NEL", "NELCL", "black", false, p(0.0, 2.5)); };
WasedaJi.prototype = Object.create(WasedaShi.prototype);
WasedaChar.dict["じ"] = WasedaJi;
WasedaJi.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 3.0902351,-3.4 v 0.1"];
};

WasedaZu = function() { WasedaChar.call(this, "WasedaZu", "ず", "NEL8CL4", "NEL", "NELCL4", "black", false, p(0.0, 2.5)); };
WasedaZu.prototype = Object.create(WasedaSu.prototype);
WasedaChar.dict["ず"] = WasedaZu;
WasedaZu.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 3.0902351,-2.920441 v 0.1"];
};

WasedaZe = function() { WasedaChar.call(this, "WasedaZe", "ぜ", "NEL16", "NEL", "NELCL", "black", false, p(0.0, 5.7)); };
WasedaZe.prototype = Object.create(WasedaSe.prototype);
WasedaChar.dict["ぜ"] = WasedaZe;
WasedaZe.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  if (this.model == "SWR16CR1") {
    this.pathsExtra = ["m -3.169702,6.6515 v 0.1"];
  } else {
    this.pathsExtra = ["m 6.186364,-6.482285 v 0.1"];
  }
};

WasedaZo = function() { WasedaChar.call(this, "WasedaZo", "ぞ", "NEL16", "NEL", "NEL", "black", false, p(0.0, 5.7)); };
WasedaZo.prototype = Object.create(WasedaSo.prototype);
WasedaChar.dict["ぞ"] = WasedaZo;
WasedaZo.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 6.186364,-6.482285 v 0.1"];
};

WasedaDa = function() { WasedaChar.call(this, "WasedaDa", "だ", "SW8", "SW", "SW", "black", false, p(2.9, -3.3)); };
WasedaDa.prototype = Object.create(WasedaTa.prototype);
WasedaChar.dict["だ"] = WasedaDa;
WasedaDa.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m -2.2584033,2.64108 v 0.1"];
};

WasedaDhi = function() { WasedaChar.call(this, "WasedaDhi", "ぢ", "SW8CR1", "SW", "SWCR", "black", false, p(2.9, -3.3)); };
WasedaDhi.prototype = Object.create(WasedaChi.prototype);
WasedaChar.dict["ぢ"] = WasedaDhi;
WasedaDhi.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  if (this.model == "NE8CL1") {
    this.pathsExtra = ["m 3.297685,-3.25821 v 0.1"];
  } else {
    this.pathsExtra = ["m -2.2584033,2.64108 v 0.1"];
  }
};

WasedaDu = function() { WasedaChar.call(this, "WasedaDu", "どぅ", "S4CR1", "S", "SCR", "black", false, p(1.1, -2.3)); };
WasedaDu.prototype = Object.create(WasedaTsu.prototype);
WasedaChar.dict["づ"] = WasedaDu;
WasedaDu.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  if (this.getPrevModel() == "NEL16") {
    this.pathsExtra = ["m -0.4,2.4 v 0.1"];
  } else {
    this.pathsExtra = ["m -0.883492,1.408401 v 0.1"];
  }
};

WasedaDe = function() { WasedaChar.call(this, "WasedaDe", "で", "NE16CL1", "NE", "NECL", "black", false, p(0.0, 5.9)); };
WasedaDe.prototype = Object.create(WasedaTe.prototype);
WasedaChar.dict["で"] = WasedaDe;
WasedaDe.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 4.706209,-7.371519 v 0.1"];
};

WasedaDo = function() { WasedaChar.call(this, "WasedaDo", "ど", "NE16", "NE", "NE", "black", false, p(0.0, 6.1)); };
WasedaDo.prototype = Object.create(WasedaTo.prototype);
WasedaChar.dict["ど"] = WasedaDo;
WasedaDo.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 4.706209,-7.371519 v 0.1"];
};

WasedaBa = function() { WasedaChar.call(this, "WasedaBa", "ば", "SEL8", "SEL", "SEL", "black", false, p(0.0, -3.0)); };
WasedaBa.prototype = Object.create(WasedaHa.prototype);
WasedaChar.dict["ば"] = WasedaBa;
WasedaBa.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 0.2446876,5.607452 v 0.1"];
};

WasedaBi = function() { WasedaChar.call(this, "WasedaBi", "び", "SEL8CL1", "SEL", "SELCL", "black", false, p(0.0, -2.9)); };
WasedaBi.prototype = Object.create(WasedaHi.prototype);
WasedaChar.dict["び"] = WasedaBi;
WasedaBi.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 0.2446876,5.607452 v 0.1"];
};

WasedaBu = function() { WasedaChar.call(this, "WasedaBu", "ぶ", "SEL8CL4", "SEL", "SELCL4", "black", false, p(0.0, -2.9)); };
WasedaBu.prototype = Object.create(WasedaHu.prototype);
WasedaChar.dict["ぶ"] = WasedaBu;
WasedaBu.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 0.2446876,5.607452 v 0.1"];
};

WasedaBe = function() { WasedaChar.call(this, "WasedaBe", "べ", "SEL16CL1", "SEL", "CL", "black", false, p(0.0, -7.0)); };
WasedaBe.prototype = Object.create(WasedaHe.prototype);
WasedaChar.dict["べ"] = WasedaBe;
WasedaBe.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 0.04477,9.805729 v 0.1"];
};

WasedaBo = function() { WasedaChar.call(this, "WasedaBo", "ぼ", "SEL16", "SEL", "SEL", "black", false, p(0.0, -6.9)); };
WasedaBo.prototype = Object.create(WasedaHo.prototype);
WasedaChar.dict["ぼ"] = WasedaBo;
WasedaBo.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 0.04477,9.805729 v 0.1"];
};

WasedaGya = function() { WasedaChar.call(this, "WasedaGya", "ぎゃ", "SL8", "SL", "SL", "black", false, p(1.1, -4.0)); };
WasedaGya.prototype = Object.create(WasedaKya.prototype);
WasedaChar.dict["ぎゃ"] = WasedaGya;
WasedaGya.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m -2.5,3.997611 v 0.1"];
};

WasedaGyu = function() { WasedaChar.call(this, "WasedaGyu", "ぎゅ", "SL8CL1", "SL", "SLCL", "black", false, p(1.6, -4.0)); };
WasedaGyu.prototype = Object.create(WasedaKyu.prototype);
WasedaChar.dict["ぎゅ"] = WasedaGyu;
WasedaGyu.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m -2.5,3.997611 v 0.1"];
};

WasedaGyo = function() { WasedaChar.call(this, "WasedaGyo", "ぎょ", "SL8ONEL4", "SL", "SLONEL", "black", false, p(1.0, -4.0), 4); };
WasedaGyo.prototype = Object.create(WasedaKyo.prototype);
WasedaChar.dict["ぎょ"] = WasedaGyo;
WasedaGyo.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m -2.5,3.997611 v 0.1"];
};

WasedaJa = function() { WasedaChar.call(this, "WasedaJa", "じゃ", "SR8", "SR", "SR", "black", false, p(0.0, -4.0)); };
WasedaJa.prototype = Object.create(WasedaSha.prototype);
WasedaChar.dict["じゃ"] = WasedaJa;
WasedaJa.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 0.06228,3.913652 v 0.1"];
};

WasedaJu = function() { WasedaChar.call(this, "WasedaJu", "じゅ", "SR8CR1", "SR", "SRCR", "black", false, p(0.5, -4.0)); };
WasedaJu.prototype = Object.create(WasedaShu.prototype);
WasedaChar.dict["じゅ"] = WasedaJu;
WasedaJu.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 0.06228,3.913652 v 0.1"];
};

WasedaJo = function() { WasedaChar.call(this, "WasedaJo", "じょ", "NEL16CL8", "NEL", "NELCL8", "black", false, p(0.0, 6.5)); };
WasedaJo.prototype = Object.create(WasedaSho.prototype);
WasedaChar.dict["じょ"] = WasedaJo;
WasedaJo.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 6.864682,-5.117058 v 0.1"];
};

WasedaDya = function() { WasedaChar.call(this, "WasedaDya", "ぢゃ", "NE8", "NE", "NE", "black", false, p(0.0, 2.4)); };
WasedaDya.prototype = Object.create(WasedaCha.prototype);
WasedaChar.dict["ぢゃ"] = WasedaDya;
WasedaDya.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 2.8588032,-3.4825 v 0.1"];
};

WasedaDyu = function() { WasedaChar.call(this, "WasedaDyu", "ぢゅ", "NE16CL1", "NE", "NECL", "black", false, p(0.0, 2.7)); };
WasedaDyu.prototype = Object.create(WasedaChu.prototype);
WasedaChar.dict["ぢゅ"] = WasedaDyu;
WasedaDyu.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 2.8588032,-3.4825 v 0.1"];
};

WasedaDyo = function() { WasedaChar.call(this, "WasedaDyo", "ぢょ", "NE8OWL4", "NE", "NEOWL", "black", false, p(0.0, 2.6)); };
WasedaDyo.prototype = Object.create(WasedaCho.prototype);
WasedaChar.dict["ぢょ"] = WasedaDyo;
WasedaDyo.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 2.8588032,-3.4825 v 0.1"];
};

WasedaBya = function() { WasedaChar.call(this, "WasedaBya", "びゃ", "SWL8", "SWL", "SWL", "black", false, p(4.3, -3.5)); };
WasedaBya.prototype = Object.create(WasedaHya.prototype);
WasedaChar.dict["びゃ"] = WasedaBya;
WasedaBya.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m -3.821902,1.713604 v 0.1"];
};

WasedaByu = function() { WasedaChar.call(this, "WasedaByu", "びゅ", "SWL8CL1", "SWL", "SWLCL", "black", false, p(4.3, -3.6)); };
WasedaByu.prototype = Object.create(WasedaHyu.prototype);
WasedaChar.dict["びゅ"] = WasedaByu;
WasedaByu.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m -3.821902,1.713604 v 0.1"];
};

WasedaByo = function() { WasedaChar.call(this, "WasedaByo", "びょ", "SWL8CL4", "SWL", "SWLCL4", "black", false, p(4.3, -3.5)); };
WasedaByo.prototype = Object.create(WasedaHyo.prototype);
WasedaChar.dict["びょ"] = WasedaByo;
WasedaByo.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m -3.821902,1.713604 v 0.1"];
};

WasedaGaa = function() { WasedaChar.call(this, "WasedaGaa", "があ", "E8", "E", "E", "black", false, p(0, 0)); };
WasedaGaa.prototype = Object.create(WasedaKa.prototype);
WasedaChar.dict["があ"] = WasedaGaa;
WasedaChar.dict["がー"] = WasedaGaa;
WasedaGaa.prototype.setPathsExtra = function() { this.pathsExtra = ["m 4.1666249,-0.54766 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; };


WasedaGii = function() { WasedaChar.call(this, "WasedaGii", "ぎい", "E8CL1", "E", "ECL", "black"); };
WasedaGii.prototype = Object.create(WasedaKi.prototype);
WasedaChar.dict["ぎい"] = WasedaGii;
WasedaChar.dict["ぎー"] = WasedaGii;
WasedaGii.prototype.setPathsExtra = function() { this.pathsExtra = ["m 4.1666249,-0.54766 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; }

WasedaGuu = function() { WasedaChar.call(this, "WasedaGuu", "ぐう", "E8CL4", "E", "ECL4", "black", false, p(0.0, 0.9)); };
WasedaGuu.prototype = Object.create(WasedaKu.prototype);
WasedaChar.dict["ぐう"] = WasedaGuu;
WasedaChar.dict["ぐー"] = WasedaGuu;
WasedaGuu.prototype.setPathsExtra = function() { this.pathsExtra = ["m 3.5,-0.54766 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; };

WasedaGei = function() { WasedaChar.call(this, "WasedaGei", "げい", "E16CL1", "E", "ECL", "black", false, p(0.0, 0.5)); };
WasedaGei.prototype = Object.create(WasedaKe.prototype);
WasedaChar.dict["げい"] = WasedaGei;
WasedaChar.dict["げー"] = WasedaGei;
WasedaGei.prototype.setPathsExtra = function() { this.pathsExtra = ["m 8.515951,-0.837615 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; };

WasedaGou = function() { WasedaChar.call(this, "WasedaGou", "ごう", "E16", "E", "E", "black", false, p(0.0, 0.0)); };
WasedaGou.prototype = Object.create(WasedaKo.prototype);
WasedaChar.dict["ごう"] = WasedaGou;
WasedaChar.dict["ごー"] = WasedaGou;
WasedaGou.prototype.setPathsExtra = function() { this.pathsExtra = ["m 8.515951,-0.672877 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; };

WasedaZaa = function() { WasedaChar.call(this, "WasedaZaa", "ざあ", "NEL8", "NEL", "NEL", "black", false, p(0.0, 2.5)); };
WasedaZaa.prototype = Object.create(WasedaSa.prototype);
WasedaChar.dict["ざあ"] = WasedaZaa;
WasedaChar.dict["ざー"] = WasedaZaa;
WasedaZaa.prototype.setPathsExtra = function() {
  if (this.model == "SWR8") {
    this.pathsExtra = ["m -0.919854,3.35137 c 0,0.5459 0.312901,1.05351 0.870249,1.20285"]; 
    return;
  }
  this.pathsExtra = ["m 3.268934,-2.775263 c 0,0.545901 0.118182,1.053504 0.6755299,1.202845"];
};


WasedaJii = function() { WasedaChar.call(this, "WasedaJii", "じい", "NEL8CL1", "NEL", "NELCL", "black", false, p(0.0, 2.5)); };
WasedaJii.prototype = Object.create(WasedaShi.prototype);
WasedaChar.dict["じい"] = WasedaJii;
WasedaChar.dict["じー"] = WasedaJii;
WasedaJii.prototype.setPathsExtra = function() { this.pathsExtra = ["m 3.268934,-2.775263 c 0,0.545901 0.118182,1.053504 0.6755299,1.202845"]; };

WasedaZuu = function() { WasedaChar.call(this, "WasedaZuu", "ずう", "NEL8CL4", "NEL", "NELCL4", "black", false, p(0.0, 2.5)); };
WasedaZuu.prototype = Object.create(WasedaSu.prototype);
WasedaChar.dict["ずう"] = WasedaZuu;
WasedaChar.dict["ずー"] = WasedaZuu;
WasedaZuu.prototype.setPathsExtra = function() { this.pathsExtra = ["m 3.268934,-2.775263 c 0,0.545901 0.118182,1.053504 0.6755299,1.202845"]; };

WasedaZei = function() { WasedaChar.call(this, "WasedaZei", "ぜい", "NEL16", "NEL", "NELCL", "black", false, p(0.0, 5.7)); };
WasedaZei.prototype = Object.create(WasedaSe.prototype);
WasedaChar.dict["ぜい"] = WasedaZei;
WasedaChar.dict["ぜー"] = WasedaZei;
WasedaZei.prototype.setPathsExtra = function() { this.pathsExtra = ["m 7.009872,-5.45847 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; };

WasedaZou = function() { WasedaChar.call(this, "WasedaZou", "ぞう", "NEL16", "NEL", "NEL", "black", false, p(0.0, 5.7)); };
WasedaZou.prototype = Object.create(WasedaSo.prototype);
WasedaChar.dict["ぞう"] = WasedaZou;
WasedaChar.dict["ぞー"] = WasedaZou;
WasedaZou.prototype.setPathsExtra = function() { this.pathsExtra = ["m 6.78115,-5.961659 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; };

WasedaDaa = function() { WasedaChar.call(this, "WasedaDaa", "だあ", "SW8", "SW", "SW", "black", false, p(2.9, -3.3)); };
WasedaDaa.prototype = Object.create(WasedaTa.prototype);
WasedaChar.dict["だあ"] = WasedaDaa;
WasedaChar.dict["だー"] = WasedaDaa;
WasedaDaa.prototype.setPathsExtra = function() { this.pathsExtra = ["m -1.6992626,3.074845 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; };

WasedaDii = function() { WasedaChar.call(this, "WasedaDii", "でぃい", "SW8CR1", "SW", "SWCR", "black", false, p(2.9, -3.3)); };
WasedaDii.prototype = Object.create(WasedaChi.prototype);
WasedaChar.dict["ぢい"] = WasedaDii;
WasedaChar.dict["ぢー"] = WasedaDii;
WasedaDii.prototype.setPathsExtra = function() { this.pathsExtra = ["m -1.6992626,3.074845 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; };

WasedaDuu = function() { WasedaChar.call(this, "WasedaDuu", "どぅう", "S4CR1", "S", "SCR", "black", false, p(1.1, -2.3)); };
WasedaDuu.prototype = Object.create(WasedaTsu.prototype);
WasedaChar.dict["づう"] = WasedaDuu;
WasedaChar.dict["づー"] = WasedaDuu;
WasedaDuu.prototype.setPathsExtra = function() { this.pathsExtra = ["m -0.521962,0.9 c 0,0.545901 0.555742,1.018562 1.113201,1.018562"]; };

WasedaDei = function() { WasedaChar.call(this, "WasedaDei", "でい", "NE16CL1", "NE", "NECL", "black", false, p(0.0, 5.9)); };
WasedaDei.prototype = Object.create(WasedaTe.prototype);
WasedaChar.dict["でい"] = WasedaDei;
WasedaChar.dict["でー"] = WasedaDei;
WasedaDei.prototype.setPathsExtra = function() { this.pathsExtra = ["m 5.177192,-7.355181 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; };

WasedaDou = function() { WasedaChar.call(this, "WasedaDou", "どう", "NE16", "NE", "NE", "black", false, p(0.0, 6.1)); };
WasedaDou.prototype = Object.create(WasedaTo.prototype);
WasedaChar.dict["どう"] = WasedaDou;
WasedaChar.dict["どー"] = WasedaDou;
WasedaDou.prototype.setPathsExtra = function() {
  if (this.model == "SW16") {
    this.pathsExtra = ["m -3.0,6.66675 c 0,0.5459 0.312901,1.05351 0.870249,1.20285"];
    return;
  } else {
    switch (this.getNextHeadType()) {
      case "SW":
      case "SWR":
        this.pathsExtra = ["m 6.260263,-5.21438 c 0,0.5459 0.312901,1.05351 0.870249,1.20285"];
        return;
    }
  }
  this.pathsExtra = ["m 5.33028,-7.278636 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};

WasedaBaa = function() { WasedaChar.call(this, "WasedaBaa", "ばあ", "SEL8", "SEL", "SEL", "black", false, p(0.0, -3.0)); };
WasedaBaa.prototype = Object.create(WasedaHa.prototype);
WasedaChar.dict["ばあ"] = WasedaBaa;
WasedaChar.dict["ばー"] = WasedaBaa;
WasedaBaa.prototype.setPathsExtra = function() { this.pathsExtra = ["m -0.2978169,3.457128 c 0.5959128,0.595913 1.2589844,0.645969 1.7151087,0.523751"]; };

WasedaBii = function() { WasedaChar.call(this, "WasedaBii", "びい", "SEL8CL1", "SEL", "SELCL", "black", false, p(0.0, -2.9)); };
WasedaBii.prototype = Object.create(WasedaHi.prototype);
WasedaChar.dict["びい"] = WasedaBii;
WasedaChar.dict["びー"] = WasedaBii;
WasedaBii.prototype.setPathsExtra = function() { this.pathsExtra = ["m -0.2978169,3.457128 c 0.5959128,0.595913 1.2589844,0.645969 1.7151087,0.523751"]; };

WasedaBuu = function() { WasedaChar.call(this, "WasedaBuu", "ぶう", "SEL8CL4", "SEL", "SELCL4", "black", false, p(0.0, -2.9)); };
WasedaBuu.prototype = Object.create(WasedaHu.prototype);
WasedaChar.dict["ぶう"] = WasedaBuu;
WasedaChar.dict["ぶー"] = WasedaBuu;
WasedaBuu.prototype.setPathsExtra = function() { this.pathsExtra = ["m -0.590394,2.615965 c 0.595912,0.595912 1.258984,0.645968 1.715108,0.523751"]; };

WasedaBei = function() { WasedaChar.call(this, "WasedaBei", "べい", "SEL16CL1", "SEL", "CL", "black", false, p(0.0, -7.0)); };
WasedaBei.prototype = Object.create(WasedaHe.prototype);
WasedaChar.dict["べい"] = WasedaBei;
WasedaChar.dict["べー"] = WasedaBei;
WasedaBei.prototype.setPathsExtra = function() { this.pathsExtra = ["m -0.301297,7.169237 c 0.595912,0.595912 1.258984,0.645968 1.715108,0.523751"]; };

WasedaBou = function() { WasedaChar.call(this, "WasedaBou", "ぼう", "SEL16", "SEL", "SEL", "black", false, p(0.0, -6.9)); };
WasedaBou.prototype = Object.create(WasedaHo.prototype);
WasedaChar.dict["ぼう"] = WasedaBou;
WasedaChar.dict["ぼー"] = WasedaBou;
WasedaBou.prototype.setPathsExtra = function() { this.pathsExtra = ["m 0.188692,8.2581 c 0.595912,0.595912 1.258984,0.645968 1.715108,0.523751"]; };

WasedaJaa = function() { WasedaChar.call(this, "WasedaJaa", "じゃあ", "SR8", "SR", "SR", "black", false, p(0.0, -4.0)); };
WasedaJaa.prototype = Object.create(WasedaSha.prototype);
WasedaChar.dict["じゃあ"] = WasedaJaa;
WasedaChar.dict["じゃー"] = WasedaJaa;
WasedaJaa.prototype.setPathsExtra = function() { this.pathsExtra = ["m 0.6794013,3.65565 c 0,0.5459 0.7439963,1.0535 1.3013443,1.20284"]; };

WasedaJuu = function() { WasedaChar.call(this, "WasedaJuu", "じゅう", "SR8CR1", "SR", "SRCR", "black", false, p(0.5, -4.0)); };
WasedaJuu.prototype = Object.create(WasedaShu.prototype);
WasedaChar.dict["じゅう"] = WasedaJuu;
WasedaChar.dict["じゅー"] = WasedaJuu;
WasedaJuu.prototype.setPathsExtra = function() { this.pathsExtra = ["m 0.6794013,3.65565 c 0,0.5459 0.7439963,1.0535 1.3013443,1.20284"]; };

WasedaJou = function() { WasedaChar.call(this, "WasedaJou", "じょう", "NEL16CL8", "NEL", "NELCL8", "black", false, p(0.0, 6.5)); };
WasedaJou.prototype = Object.create(WasedaSho.prototype);
WasedaChar.dict["じょう"] = WasedaJou;
WasedaChar.dict["じょー"] = WasedaJou;
WasedaJou.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m 7.043582,-5.23006 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"];
  if (this.model == "SWR16CR8") {
    this.pathsExtra = ["m-2.0, 7.3c 0,0.5459 0.743997,1.0535 1.301345,1.20284"];
  }
};

WasedaGyaa = function() { WasedaChar.call(this, "WasedaGyaa", "ぎゃあ", "SL8", "SL", "SL", "black", false, p(1.1, -4.0)); };
WasedaGyaa.prototype = Object.create(WasedaKya.prototype);
WasedaChar.dict["ぎゃあ"] = WasedaGyaa;
WasedaChar.dict["ぎゃー"] = WasedaGyaa;
WasedaGyaa.prototype.setPathsExtra = function() { this.pathsExtra = ["m -1.6531475,3.23781 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"]; };

WasedaGyuu = function() { WasedaChar.call(this, "WasedaGyuu", "ぎゅう", "SL8CL1", "SL", "SLCL", "black", false, p(1.6, -4.0)); };
WasedaGyuu.prototype = Object.create(WasedaKyu.prototype);
WasedaChar.dict["ぎゅう"] = WasedaGyuu;
WasedaChar.dict["ぎゅー"] = WasedaGyuu;
WasedaGyuu.prototype.setPathsExtra = function() { this.pathsExtra = ["m -1.919988,3.14886 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"]; };

WasedaGyou = function() { WasedaChar.call(this, "WasedaGyou", "ぎょう", "SL8ONEL4", "SL", "SLONEL", "black", false, p(1.0, -4.0), 4); };
WasedaGyou.prototype = Object.create(WasedaKyo.prototype);
WasedaChar.dict["ぎょう"] = WasedaGyou;
WasedaChar.dict["ぎょー"] = WasedaGyou;
WasedaGyou.prototype.setPathsExtra = function() {
  switch (this.getPrevTailType()) {
    case "NELCL":
    case "NELCL4":
    case "NELCL8":
      this.pathsExtra = ["m -1.0,3.23781 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"];
      return;
  }
  this.pathsExtra = ["m -1.608673,3.23781 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"];
};

WasedaByaa = function() { WasedaChar.call(this, "WasedaByaa", "びゃあ", "SWL8", "SWL", "SWL", "black", false, p(4.3, -3.5)); };
WasedaByaa.prototype = Object.create(WasedaHya.prototype);
WasedaChar.dict["びゃあ"] = WasedaByaa;
WasedaChar.dict["びゃー"] = WasedaByaa;
WasedaByaa.prototype.setPathsExtra = function() { this.pathsExtra = ["m -3.356759,2.20952 c 0,0.5459 0.7439969,1.0535 1.301345,1.20284"]; };

WasedaByuu = function() { WasedaChar.call(this, "WasedaByuu", "びゅう", "SWL8CL1", "SWL", "SWLCL", "black", false, p(4.3, -3.6)); };
WasedaByuu.prototype = Object.create(WasedaHyu.prototype);
WasedaChar.dict["びゅう"] = WasedaByuu;
WasedaChar.dict["びゅー"] = WasedaByuu;
WasedaByuu.prototype.setPathsExtra = function() { this.pathsExtra = ["m -3.35676,2.20952 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"]; };

WasedaByou = function() { WasedaChar.call(this, "WasedaByou", "びょう", "SWL8CL4", "SWL", "SWLCL4", "black", false, p(4.3, -3.5)); };
WasedaByou.prototype = Object.create(WasedaHyo.prototype);
WasedaChar.dict["びょう"] = WasedaByou;
WasedaChar.dict["びょー"] = WasedaByou;
WasedaByou.prototype.setPathsExtra = function() { this.pathsExtra = ["m -3.35676,2.20952 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"]; };

WasedaJaa = function() { WasedaChar.call(this, "WasedaJaa", "じゃあ", "NE8", "NE", "NE", "black", false, p(0.0, 2.4)); };
WasedaJaa.prototype = Object.create(WasedaCha.prototype);
WasedaChar.dict["ぢゃあ"] = WasedaJaa;
WasedaChar.dict["ぢゃー"] = WasedaJaa;
WasedaJaa.prototype.setPathsExtra = function() { this.pathsExtra = ["m 2.9566643,-3.10252 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"]; };

WasedaJuu = function() { WasedaChar.call(this, "WasedaJuu", "じゅう", "NE16CL1", "NE", "NECL", "black", false, p(0.0, 2.7)); };
WasedaJuu.prototype = Object.create(WasedaChu.prototype);
WasedaChar.dict["ぢゅう"] = WasedaJuu;
WasedaChar.dict["ぢゅー"] = WasedaJuu;
WasedaJuu.prototype.setPathsExtra = function() { this.pathsExtra = ["m 2.9566643,-3.10252 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"]; };

WasedaJou = function() { WasedaChar.call(this, "WasedaJou", "じょう", "NE8OWL4", "NE", "NEOWL", "black", false, p(0.0, 2.6)); };
WasedaJou.prototype = Object.create(WasedaCho.prototype);
WasedaChar.dict["ぢょう"] = WasedaJou;
WasedaChar.dict["ぢょー"] = WasedaJou;
WasedaJou.prototype.setPathsExtra = function() { this.pathsExtra = ["m 2.9566643,-3.10252 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"]; };

WasedaJei = function() { WasedaChar.call(this, "WasedaJei", "Jえい", "NE8CR1", "NE", "CR", "black", false, p(0.0, 2.6)); };
WasedaJei.prototype = Object.create(WasedaTer.prototype);
WasedaChar.dict["ぢぇい"] = WasedaJei;
WasedaChar.dict["ぢぇー"] = WasedaJei;
WasedaJei.prototype.setPathsExtra = function() { this.pathsExtra = ["m 2.775684,-3.22317 c 0,0.5459 0.743997,1.0535 1.301345,1.20284"]; };

WasedaHou = function() { WasedaChar.call(this, "WasedaHou", "ほう", "SEL16", "SEL", "SEL", "black", false, p(0.0, -6.9)); };
WasedaHou.prototype = Object.create(WasedaHo.prototype);
WasedaChar.dict["ほう"] = WasedaHou;
WasedaChar.dict["ほー"] = WasedaHou;
WasedaHou.prototype.setPathsExtra = function() { this.pathsExtra = ["m -0.250365,8.556441 c 0,0.5459 0.118182,1.05351 0.67553,1.20285"]; };

WasedaZai = function() { WasedaChar.call(this, "WasedaZai", "ざい", "UER4", "SER", "SWR", "black", false, p(0.0, -2.0)); };
WasedaZai.prototype = Object.create(WasedaSai.prototype);
WasedaChar.dict["ざい"] = WasedaZai;
WasedaZai.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m -0.46811,1.819487 v 0.1"];
};

WasedaShun = function() { WasedaChar.call(this, "WasedaShun", "しゅん", "SR8CR1NE1F", "SR", "NEF", "black", false, p(0.5, -4.0)); };
WasedaShun.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["しゅん"] = WasedaShun;

WasedaShun.prototype.setPaths = function() {
  const name_ = this.getPrevName();
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

  switch (name_) {
    case "WasedaSui":
      this.dp = p(1.0146, 5.34083).pmove(2, -40);
      this.paths = ["m 0 0 c 0.237252 0.885438 0.844544 6.76523 -1.11836 8.24433 c -0.2799 0.2187 -0.6365 -0.139 -0.4227 -0.4227 c 0.3455 -0.4267 1.21063 -1.17249 1.56772 -1.51436 l 0.98794 -0.966441"];
      return;
  }

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

  this.dp = p(3.60063, 3.70794);
  this.paths = ["m 0 0 c 1.499 2.2223 1.9629 6.491 0 7.9701 c -0.2799 0.2187 -0.6365 -0.139 -0.4227 -0.4227 c 0.3455 -0.4267 1.21063 -1.17249 1.56772 -1.51436 l 0.98794 -0.966441"];
};

WasedaKyuu = function() { WasedaChar.call(this, "WasedaKyuu", "きゅう", "SL8CL1", "SL", "SLCL", "black", false, p(1.6, -4.0)); };
WasedaKyuu.prototype = Object.create(WasedaKyu.prototype);
WasedaChar.dict["きゅう"] = WasedaKyuu;
WasedaChar.dict["きゅー"] = WasedaKyuu;
WasedaKyuu.prototype.setPathsExtra = function() { this.pathsExtra = ["m -2.886311,3.497459 c 0,0.5459 0.118182,1.05351 0.67553,1.20285"]; };

WasedaJun = function() { WasedaChar.call(this, "WasedaJun", "じゅん", "SR8CR1NE1F", "SR", "NEF", "black", false, p(0.5, -4.0)); };
WasedaJun.prototype = Object.create(WasedaShun.prototype);
WasedaChar.dict["じゅん"] = WasedaJun;
WasedaJun.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 0.06228,3.913652 v 0.1"];
};

WasedaShou = function() { WasedaChar.call(this, "WasedaShou", "しょう", "NEL16CL8", "NEL", "NELCL8", "black", false, p(0.0, 6.5)); };
WasedaShou.prototype = Object.create(WasedaSho.prototype);
WasedaChar.dict["しょう"] = WasedaShou;
WasedaChar.dict["しょー"] = WasedaShou;
WasedaShou.prototype.setPathsExtra = function() {
  switch (this.getNextHeadType()) {
    case "SER":
      this.pathsExtra = ["m 4.386652,-4.818376 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
      return;

    case "SW":
      this.pathsExtra = ["m 4.17827,-4.83722 c 0,0.5459 0.118182,1.0535 0.67553,1.20284"];
      return;
  }
  this.pathsExtra = ["m 6.401668,-6.228887 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"];
};

WasedaKou = function() { WasedaChar.call(this, "WasedaKou", "こう", "E16", "E", "E", "black", false, p(0.0, 0.0)); };
WasedaKou.prototype = Object.create(WasedaKo.prototype);
WasedaChar.dict["こう"] = WasedaKou;
WasedaChar.dict["こー"] = WasedaKou;
WasedaKou.prototype.setPathsExtra = function() { this.pathsExtra = ["m 8.71157,1.403832 c 0,0.545901 0.118182,1.053504 0.67553,1.202845"]; };

WasedaKou2 = function() { WasedaChar.call(this, "WasedaKou2", "コー", "E4P", "E", "P", "black", false, p(0.0, -0.5)); };
WasedaKou2.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["コー"] = WasedaKou2;

WasedaKou2.prototype.setPaths = function() {
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

  this.dp = p(2, 1.5);
  this.paths = ["m 0 0 h 4", "m 2 0 v 1.5"];
};

WasedaGin = function() { WasedaChar.call(this, "WasedaGin", "ぎん", "E8CL1E1F", "E", "EF", "black", false, p(0.0, 0.5)); };
WasedaGin.prototype = Object.create(WasedaKin.prototype);
WasedaChar.dict["ぎん"] = WasedaGin;
WasedaGin.prototype.setPathsExtra = function() {
  this.thicknessExtra = this.thickness * 1.5;
  this.pathsExtra = ["m 4.5,1v0.1"];
};

WasedaZen = function() { WasedaChar.call(this, "WasedaZen", "ぜん", "NE8", "NE", "NEF", "black", false, p(0.0, 2.4)); };
WasedaZen.prototype = Object.create(WasedaSen2.prototype);
WasedaChar.dict["ぜん"] = WasedaZen;
WasedaZen.prototype.setPathsExtra = WasedaDya.prototype.setPathsExtra;

WasedaJin = function() { WasedaChar.call(this, "WasedaJin", "じん", "NEL8CL1NE1F", "NEL", "NEF", "black", false, p(0.0, 3.3)); };
WasedaJin.prototype = Object.create(WasedaShin.prototype);
WasedaChar.dict["じん"] = WasedaJin;
WasedaJin.prototype.setPathsExtra = WasedaJi.prototype.setPathsExtra;

WasedaDoutoJoshi = function() { WasedaChar.call(this, "WasedaDoutoJoshi", "どうとじょし", "SW16NE1|SW16CL1", "SW", "SWCR", "black", false, p(6.8, -7.3)); };
WasedaDoutoJoshi.prototype = Object.create(WasedaTotoJoshi.prototype);
WasedaChar.dict["ドウト"] = WasedaDoutoJoshi;
WasedaDoutoJoshi.prototype.setPathsExtra = function() { this.pathsExtra = ["m -3.4528406,6.170042 c 0,0.5459 0.118182,1.0535 0.6755296,1.20284"]; };

WasedaKara = function() { WasedaChar.call(this, "WasedaKara", "から", "SER4F", "SER", "SERF", "black", false, p(0.0, -2.7)); };
WasedaKara.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["から"] = WasedaKara;

WasedaKara.prototype.setPaths = function() {
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

  switch (tail_) {
    case "SE":
      this.dp = p(1.15811, 5.27817);
      this.paths = ["m 0 0 c 1.99714 0 2.61161 2.405 2 3.464"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(1.15811, 5.27817);
  this.paths = ["m 0 0 c 1.13193 0.793 2.61161 2.405 2 3.464"];
};

WasedaNoni = function() { WasedaChar.call(this, "WasedaNoni", "のに", "EL8ONWL4", "EL", "ELONWL", "black", false, p(0.0, 0.7)); };
WasedaNoni.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["のに"] = WasedaNoni;

WasedaNoni.prototype.setPaths = function() {
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

  this.dp = p(7.59184, 0.553125);
  this.paths = ["m 0 0 c 2.189 0.6692 7.46584 1.88154 7.97 0 c 0.308203 -1.15023 -0.936702 -2.35923 -1.68348 -2.35923 c -0.443871 0 0.849145 1.99457 1.30532 2.91236"];
};

WasedaKoso = function() { WasedaChar.call(this, "WasedaKoso", "こそ", "USWL4", "SWL", "NEL", "black", false, p(1.8, -1.9)); };
WasedaKoso.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["こそ"] = WasedaKoso;

WasedaKoso.prototype.setPaths = function() {
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

  this.dp = p(2.46896, 1.27495);
  this.paths = ["m 0 0 c -0.610525 0.352487 -2.50254 2.72009 -1.5178 3.56177 c 1.16669 0.997213 3.67497 -1.74679 3.98676 -2.28682"];
};

WasedaToshite = function() { WasedaChar.call(this, "WasedaToshite", "として", "SW4CL1NW1", "SW", "NW", "black", false, p(1.8, -2.0)); };
WasedaToshite.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["として"] = WasedaToshite;

WasedaToshite.prototype.setPaths = function() {
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

  switch (_head) {
    case "SEL":
      this.dp = p(-1.35313, 1.03212);
      this.paths = ["m 0 0 l -1.20633 3.29836 c -0.318513 0.870883 0.313556 0.931741 0.576555 0.72418 c 0.421938 -0.332997 0.055353 -1.02864 -0.148213 -1.44817 c -0.189359 -0.390251 -0.433727 -1.11794 -0.57514 -1.54224"];
      return;
  }

  this.dp = p(-1.96277, 1.83434);
  this.paths = ["m 0 0 l -1.20633 3.29836 c -0.318513 0.870883 0.490497 0.872761 0.753496 0.6652 c 0.421938 -0.332997 -0.244144 -0.841121 -0.590566 -1.15327 c -0.232329 -0.209344 -0.561167 -0.624322 -0.919367 -0.975944"];
};

WasedaBakari = function() { WasedaChar.call(this, "WasedaBakari", "ばかり", "SEL8S3", "SEL", "S", "black", false, p(0.0, -4.2)); };
WasedaBakari.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ばかり"] = WasedaBakari;

WasedaBakari.prototype.setPaths = function() {
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

  switch (_head) {
    case "S":
      this.dp = p(4.38711, 8);
      this.paths = ["m 0 0 c 0 3.7764 0.935824 6.85098 4.18711 5.9798 v 2.5 l 0.2 -0.4924"];
      return;
  }

  this.dp = p(4.18711, 8.4798);
  this.paths = ["m 0 0 c 0 3.7764 0.935824 6.85098 4.18711 5.9798 v 2.5"];
};

WasedaNagara = function() { WasedaChar.call(this, "WasedaNagara", "ながら", "EL8", "EL", "EL", "black"); };
WasedaNagara.prototype = Object.create(WasedaChar.prototype);
WasedaNagara.prototype.setPaths = function() {
  this.dp = p(4.423791, -1.5);
  this.paths = ["m 0 0c 2.04073 0.6631 7.67821 1.825 8 0"];
  if (this.getNextHeadType() == "") {
    this.paths.push("m 4.423791,-1.5 v 0.1 h -0.1 v -0.1");
  }
};
WasedaChar.dict["ながら"] = WasedaNagara;

WasedaKamo = function() { WasedaChar.call(this, "WasedaKamo", "かも", "E8CL1NE1F", "E", "NEF", "black", false, p(0.0, 0.7)); };
WasedaKamo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["かも"] = WasedaKamo;
WasedaChar.dict["けれども"] = WasedaKamo;
WasedaKamo.prototype.setPaths = function() {
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

  this.dp = p(8.03695, -2.73282);
  this.paths = ["m 0 0 h 7.5 c 0.540649 0 0.018764 1.22641 -0.692861 1.05074 c -0.306854 -0.075752 -0.33866 -0.344042 -0.00714 -1.05074 l 0.637054 -1.358"];
};

WasedaYoriP = function() { WasedaChar.call(this, "WasedaYoriP", "よりｐ", "P", "P", "P", "black"); };
WasedaYoriP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["よりｐ"] = WasedaYoriP;

WasedaYoriP.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) { }

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _head) { }

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "SER8CR4":
      this.dp = pp(5, 60);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = pp(3, 60);
};

WasedaYorimo = function() { WasedaChar.call(this, "WasedaYorimo", "よりも", "NER16CR1NE1F", "NER", "NEF", "black", false, p(0.0, 7.1)); };
WasedaYorimo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["よりも"] = WasedaYorimo;

WasedaYorimo.prototype.setPaths = function() {
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

  this.dp = p(13.2422, -14.1079);
  this.paths = ["m 0 0 c 1.2151 -3.3384 7.9227 -11.3137 11.3138 -11.3137 c 0.2753 0 0.528444 0.250972 0.536378 0.493884 c 0.0099 0.303312 -0.340825 0.56119 -0.628078 0.659078 c -0.165748 0.056483 -0.43293 0.072514 -0.519219 -0.079858 c -0.189742 -0.335054 0.27377 -0.849727 0.436653 -1.06944 l 0.893312 -1.20499"];
};

WasedaNado = function() { WasedaChar.call(this, "WasedaNado", "等", "SW4ONEL4", "SW", "SWONEL4", "black", false, p(1.4, -2.0)); };
WasedaNado.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["等"] = WasedaNado;

WasedaNado.prototype.setPaths = function() {
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

  switch (_head) {
    case "ER":
      this.dp = p(-1.3681, 3.7587);
      this.paths = ["m 0 0 l -1.3681 3.7587 c 0.703988 -0.245888 3.3824 -1.75745 2.81445 -2.43641 c -0.301817 -0.360802 -1.98748 1.66496 -2.81445 2.43641"];
      return;
  }

  this.dp = p(-1.3681, 3.7587);
  this.paths = ["m 0 0 l -1.3681 3.7587 c 0.374934 0.100463 1.15212 0.209997 1.9253 -0.2364 c 0.836241 -0.482804 1.43476 -1.36524 1.1783 -1.6217 c -0.332619 -0.332619 -2.27664 1.08665 -3.1036 1.8581"];
};

WasedaMade = function() { WasedaChar.call(this, "WasedaMade", "まで", "PS3", "PS", "PS", "black", false, p(0.0, -1.5)); };
WasedaMade.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["まで"] = WasedaMade;
WasedaMade.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
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

  switch (model_) {
    case "ER8CR4":
      this.dp = p(5.9, 1.6).move(0, 1.5);
      this.paths = [this.dp.m() + "m0,-3v3"];
      return;
  }

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

  this.dp = p(2, 0).move(0, 1.5);
  this.paths = [this.dp.m() + "m0,-3v3"];
};

WasedaMadeP = function() { WasedaChar.call(this, "WasedaMadeP", "までｐ", "P", "P", "P", "black"); };
WasedaMadeP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["までｐ"] = WasedaMadeP;

WasedaMadeP.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) { }

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _head) { }

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

  this.dp = p(2, -1.5);
};

WasedaTsutsu = function() { WasedaChar.call(this, "WasedaTsutsu", "つつ", "PSW4F", "PSW", "SWF", "black", false, p(2.0, -2.8)); };
WasedaTsutsu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["つつ"] = WasedaTsutsu;
WasedaChar.dict["ずつ"] = WasedaTsutsu;

WasedaTsutsu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (tail_ + "_" + _head) {
    case "SELCL_ER":
      this.dp = p(3.2, -7.7).move(-1.3681, 3.7587).move(-0.6751016, 1.8826159);
      this.paths = ["m3.2,-7.7 l -1.3681 3.7587"];
      return;
  }

  switch (tail_) {
    case "SWRCR":
      this.dp = p(4.2, -3.8).move(-1.3681, 3.7587).move(-0.6751016, 1.8826159);
      this.paths = ["m4.2,-3.8l -1.3681 3.7587"];
      return;

    case "NELCL":
      this.dp = p(2.2, -6).move(-1.3681, 3.7587).move(-0.6751016, 1.8826159);
      this.paths = ["m2.2,-6l -1.3681 3.7587"];
      return;

    case "S":
      this.dp = p(2.1, -5.7).move(-1.3681, 3.7587).move(-0.6751016, 1.8826159);
      this.paths = ["m2.1,-5.7 l -1.3681 3.7587"];
      return;

    case "ERCR":
      this.dp = p(2.5, -5.5).move(-1.3681, 3.7587).move(-0.6751016, 1.8826159);
      this.paths = ["m2.5,-5.5 l -1.3681 3.7587"];
      return;

    case "SER":
      this.dp = p(3, -5.5).move(-1.3681, 3.7587).move(-0.6751016, 1.8826159);
      this.paths = ["m3,-5.5 l -1.3681 3.7587"];
      return;

    case "ECL":
      this.dp = p(2.6, -6.0).move(-1.3681, 3.7587).move(-0.6751016, 1.8826159);
      this.paths = ["m2.6, -6.0 l -1.3681 3.7587"];
      return;

    case "SELCL":
      this.dp = p(2.6, -6.0).move(-1.3681, 3.7587).move(-0.6751016, 1.8826159);
      this.paths = ["m2.6, -6.0 l -1.3681 3.7587"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "":
      this.dp = p(1, -5.7).move(-1.3681, 3.7587);
      this.paths = ["m1,-5.7 l -1.3681 3.7587"];
      return;

    default:
      this.dp = p(3.2, -7.7).move(-1.3681, 3.7587).move(-0.6751016, 1.8826159);
      this.paths = ["m3.2,-7.7 l -1.3681 3.7587"];
      return;
  }
};

WasedaDakeP = function() { WasedaChar.call(this, "WasedaDakeP", "だけｐ", "P/X", "P/X", "P/X", "black"); };
WasedaDakeP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["だけｐ"] = WasedaDakeP;
WasedaChar.dict["だけ"] = [WasedaDakeP, WasedaTa];

WasedaDakeP.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaKore":
      this.dp = p(-0.7, -0.5);
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (tailModel_) {}

  switch (model_) {
    case "E4":
      this.dp = p(-1, -2);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "E":
      this.dp = p(-1.5, -2);
      return;
      
    case "S":
      this.tailType = "TAHENKI";
      this.dp = p(-1.749784, -1.028684);
      return;

    case "SERCR":
      this.tailType = "TAHENKI";
      this.dp = p(-1.749784, -1.028684);
      return;

    case "SERCR4":
      this.tailType = "TAHENKI";
      this.dp = p(-2, 1);
      return;

    case "SW":
      this.tailType = "TAHENKI";
      this.dp = p(-1.749784, -1.028684);
      return;

    case "ERCR4":
      this.tailType = "TAHENKI";
      this.dp = p(0, -2);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(0, 0);
};


WasedaZuHitei = function() { WasedaChar.call(this, "WasedaZuHitei", "ズ", "S16F", "S", "SF", "black", false, p(0.0, 0.0)); };
WasedaZuHitei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ズ"] = WasedaZuHitei;

WasedaZuHitei.prototype.setPaths = function() {
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

  this.dp = p(0, 16).move(0, 2);
  this.paths = ["m 0 0 v 16"];
};

WasedaKkiri = function() { WasedaChar.call(this, "WasedaKkiri", "っきり", "XE16F", "XE", "EF", "black", false, p(0.0, -0.0)); };
WasedaKkiri.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["っきり"] = WasedaKkiri;

WasedaKkiri.prototype.setPaths = function() {
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

  this.dp = p(18, 0.1);
  this.paths = ["m 0 0 h 16"];
};

WasedaKiri = function() { WasedaChar.call(this, "WasedaKiri", "きり", "E8F", "E", "EF", "black", false, p(0.0, -0.1)); };
WasedaKiri.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["きり"] = WasedaKiri;
WasedaChar.dict["かり"] = WasedaKiri;
WasedaChar.dict["カク"] = WasedaKiri;

WasedaKiri.prototype.setPaths = function() {
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

  switch (tail_) {
    case "VERTICAL":
      this.dp = p(0, 10);
      this.paths = ["m0,0v8"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(10, 0);
  this.paths = ["m 0 0 h 8"];
};

WasedaKiriP = function() { WasedaChar.call(this, "WasedaKiriP", "つｐ", "P/X", "P/X", "P/X", "black"); };
WasedaKiriP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["きりｐ"] = WasedaKiriP;

WasedaKiriP.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tailModel_ = this.getPrevTailModel();
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

  switch (tailModel_) {
    case "S8":
      this.dp = p(-2, -4);
      return;

    case "E8":
      this.dp = p(-4, -2);
      this.tailType = "VERTICAL";
      return;
  }

  switch (model_) {
    case "SE4NE1F":
      this.dp = p(-6, 1.2);
      return;

    case "NE16CL1":
      this.dp = p(-6, 4);
      return;

    case "ER8CR1":
      this.dp = p(-3, -2);
      this.tailType = "VERTICAL";
      return;

    case "SER16CR1":
      this.dp = p(-4, -4);
      return;

    case "SEL8":
      this.dp = p(-6, -2.5);
      return;

    case "SER8CR4":
      this.dp = p(-3, 0);
      return;

    case "NEL8CL4":
      this.dp = p(-3, 0);
      return;

    case "NEL8CL1":
      this.dp = p(-3.5, 1.5);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(0, 0);
};

WasedaMadede = function() { WasedaChar.call(this, "WasedaMadede", "までで", "PS3NW1", "PS", "NW", "black", false, p(1.1, -1.5)); };
WasedaMadede.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["までで"] = WasedaMadede;

WasedaMadede.prototype.setPaths = function() {
  this.pdp = p(2.5, -1.3);

  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _headModel) {}

  switch (model_ + "_" + _head) {
    case "E8NW4_SW":
      this.pdp = p(5, 2);
      this.dp = p(-0.183611, 3.81343);
      this.paths = ["m 0 0 v 3.31915 c 0 0.565945 -0.606958 0.846547 -0.939944 0.532171 c -0.40199 -0.379524 0.326342 -1.16196 0.731708 -1.03901 c 0.319438 0.096886 0.271919 0.321709 0.024625 1.00112"];
      return;
  }

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

  switch (_headModel) {
    case "ER8":
      this.dp = p(0, 1.85583);
      this.paths = ["m 0 0 v 2.97939 c 0 0.48482 -0.969503 0.339367 -0.969503 -0.198851 c 0 -0.354695 0.56064 -0.721298 0.969503 -0.924717"];
      return;
  }

  switch (_head) {
  }

  this.dp = p(-1.07885, 1.90656);
  this.paths = ["m 0 0 v 3 c -0.262148 -0.399955 -0.526361 -0.799162 -1.07885 -1.09344"];
};

WasedaMadeto = function() { WasedaChar.call(this, "WasedaMadeto", "までと", "PS3NE1", "PS", "NE", "black", false, p(0.0, -1.5)); };
WasedaMadeto.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["までと"] = WasedaMadeto;

WasedaMadeto.prototype.setPaths = function() {
  this.pdp = p(2, -1.3);

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

  switch (_head) {
    case "SEL":
      this.dp = p(0, 1.4863);
      this.paths = ["m 0 0 v 3 c 0.061847 0.934642 0.964246 0.891383 0.648696 0.081409 c -0.14787 -0.379561 -0.454045 -1.03847 -0.648696 -1.59511"];
      return;

    case "E":
    case "ER":
      this.dp = p(0.054905, 3.23947);
      this.paths = ["m 0 0 v 3 c 0.043507 0.657485 0.747991 0.433237 0.860742 -0.251762 c 0.100327 -0.609517 -0.837755 -0.901427 -0.837755 -0.63319 c 0 0.187757 0.031918 0.829654 0.031918 1.12442"];
      return;
  }

  this.dp = p(0.940224, 1.78935);
  this.paths = ["m 0 0 l 0 3 c -0.04052 -0.46311 0.602847 -1.08786 0.940224 -1.21065"];
};

WasedaBakaride = function() { WasedaChar.call(this, "WasedaBakaride", "ばかりで", "SEL8S3NW", "SELS3NW1", "NE", "black", false, p(0.0, -4.2)); };
WasedaBakaride.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ばかりで"] = WasedaBakaride;

WasedaBakaride.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (_headModel) {
    case "ER8":
      this.dp = p(4.18711, 7.83562);
      this.paths = ["m 0 0 c 0 3.7764 0.935824 6.85098 4.18711 5.9798 l 0 2.97939 c 0 0.48482 -0.969503 0.339367 -0.969503 -0.198851 c 0 -0.354695 0.56064 -0.721298 0.969503 -0.924717"];
      return;
  }

  switch (_head) {
    case "SEL":
      this.dp = p(4.18711, 8.4798);
      this.paths = ["m 0 0 c 0 3.7764 0.935824 6.85098 4.18711 5.9798 v 2.5 c 0 0.492882 -1.17941 0.456754 -0.969112 -0.328099 c 0.116666 -0.435404 0.969112 -0.852454 0.969112 0.328099"];
      return;
  }

  this.dp = p(3.10826, 7.38636);
  this.paths = ["m 0 0 c 0 3.7764 0.935824 6.85098 4.18711 5.9798 v 2.5 c -0.283545 -0.456142 -0.652748 -0.862702 -1.07885 -1.09344"];
};

WasedaBakarito = function() { WasedaChar.call(this, "WasedaBakarito", "ばかりと", "SEL8S3NE1", "SEL", "NE", "black", false, p(0.0, -4.2)); };
WasedaBakarito.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ばかりと"] = WasedaBakarito;

WasedaBakarito.prototype.setPaths = function() {
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

  switch (_head) {
    case "ER":
    case "E":
      this.dp = p(4.18711, 8.09485);
      this.paths = ["m 0 0 c 0 3.7764 0.935824 6.85098 4.18711 5.9798 v 3 c 0.04351 0.65748 0.747991 0.43323 0.860743 -0.25176 c 0.100327 -0.60952 -0.633279 -0.63319 -0.860743 -0.63319"];
      return;
  }

  this.dp = p(5.12733, 7.26915);
  this.paths = ["m 0 0 c 0 3.7764 0.935824 6.85098 4.18711 5.9798 v 1.25 v 0.625 v 0.625 c 0.08275 -0.57893 0.461904 -0.92743 0.940224 -1.21065"];
};

WasedaBunsuu = function() { WasedaChar.call(this, "WasedaBunsuu", "ぶんすう", "PE10P", "PE", "P", "black", false, p(0.0, 0.0)); };
WasedaBunsuu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ぶんすう"] = WasedaBunsuu;

WasedaBunsuu.prototype.setPaths = function() {
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

  this.dp = p(10, 0);
  this.paths = ["m 0 0 h 10"];
};

WasedaFour = function() { WasedaChar.call(this, "WasedaFour", "４", "SW5E4XSW6", "SW", "SW", "black", false, p(3.2, -3)); };
WasedaFour.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["４"] = WasedaFour;

WasedaFour.prototype.setPaths = function() {
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

  this.dp = p(-1.25326, 6.73624);
  this.paths = ["m 0 0 l -3.16447 4.38639 l 4.44905 0.03133", "m 0.783283 1.34725 l -2.03654 5.38899"];
};

WasedaFive = function() { WasedaChar.call(this, "WasedaFive", "５", "SW3SWR3GE4", "SW", "E", "black", false, p(3.7, -3.3)); };
WasedaFive.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["５"] = WasedaFive;

WasedaFive.prototype.setPaths = function() {
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

  this.dp = p(2.55763, 1.5433);
  this.paths = ["m 0 0 l -1.33829 2.37919 c 0 0.608191 0.454606 3.09231 -0.594798 3.86618 c -0.465655 0.343393 -0.993566 0.468586 -1.71693 -0.254783", "m -0.868105 1.5433 h 3.42573"];
};

WasedaSix = function() { WasedaChar.call(this, "WasedaSix", "６", "SWL8CL1", "SWL", "SWLCL", "black", false, p(4.1, -3.7)); };
WasedaSix.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["６"] = WasedaSix;

WasedaSix.prototype.setPaths = function() {
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

  this.dp = p(-3.72996, 4.74722);
  this.paths = ["m 0 0 c 0 0 -4.29234 3.76681 -4.09327 6.24889 c 0.04021 0.501286 0.514384 1.11842 1.01726 1.11414 c 0.366064 -0.0031 0.71442 -0.457621 0.726614 -0.823495 c 0.02512 -0.753709 -1.38057 -1.79232 -1.38057 -1.79232"];
};

WasedaSeven = function() { WasedaChar.call(this, "WasedaSeven", "７", "SW2E3SW7", "SW", "SW", "black", false, p(1.0, -3.2), 4.3); };
WasedaSeven.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["７"] = WasedaSeven;

WasedaSeven.prototype.setPaths = function() {
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

  this.dp = p(0.159657, 6.38633);
  this.paths = ["m 0 0 l -0.98456 2.15539", "m -0.133592 0.292458 l 3.43319 0.239736 l -3.13994 5.85413"];
};

WasedaNine = function() { WasedaChar.call(this, "WasedaNine", "９", "CL4SW7", "CL", "SW", "black", false, p(3.6, -2.7)); };
WasedaNine.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["９"] = WasedaNine;

WasedaNine.prototype.setPaths = function() {
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

  this.dp = p(-2.66349, 6.2311);
  this.paths = ["m 0 0 c -0.16025 -0.598048 -0.90849 -0.976057 -1.47852 -0.893913 c -1.03328 0.148902 -2.14568 1.26772 -2.11354 2.31118 c 0.0105 0.339703 0.39634 0.66268 0.73308 0.708637 c 1.18449 0.161654 3.15221 -1.7105 3.15221 -1.7105 l -2.95672 5.81569"];
};

WasedaOne = function() { WasedaChar.call(this, "WasedaOne", "１", "SW7", "SW", "SW", "black", false, p(1.7, -2.2)); };
WasedaOne.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["１"] = WasedaOne;

WasedaOne.prototype.setPaths = function() {
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

  this.dp = p(-2.37258, 6.23909);
  this.paths = ["m 0 0 l -2.37258 6.23909"];
};

WasedaWave = function() { WasedaChar.call(this, "WasedaWave", "〜", "ER3EL3", "ER", "EL", "black", false, p(0.0, 0.5)); };
WasedaWave.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["〜"] = WasedaWave;

WasedaWave.prototype.setPaths = function() {
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

  this.dp = p(5.84148, -0.944554).add(this.getNextOffset());
  this.paths = ["m 0 0 c 0.803712 -0.803712 1.8476 -1.13751 2.76809 -0.436745 c 1.01156 0.770095 1.98032 0.585253 3.07339 -0.507809"];
};

WasedaWatakushi = function() { WasedaChar.call(this, "WasedaWatakushi", "わたくし", "NE8", "NE", "NE", "black", false, p(0.0, 2.4-10)); };
WasedaWatakushi.prototype = Object.create(WasedaCha.prototype);
WasedaChar.dict["わたくし"] = WasedaWatakushi;
WasedaChar.dict["私"] = WasedaWatakushi;

WasedaShikashi = function() { WasedaChar.call(this, "WasedaShikashi", "しかし", "NE8", "NE", "NE", "black", false, p(0.0, 2.4+10)); };
WasedaShikashi.prototype = Object.create(WasedaCha.prototype);
WasedaChar.dict["しかし"] = WasedaShikashi;
WasedaChar.dict["然"] = WasedaShikashi;


WasedaKin = function() { WasedaChar.call(this, "WasedaKin", "きん", "E4F", "E", "E", "black"); }; 
WasedaKin.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["キン"] = WasedaKin;
WasedaChar.dict["彼"] = WasedaKin;
WasedaKin.prototype.setPaths = function() {
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

  this.dp = p(6, 0);
  this.paths = ["m0,0h4"];
};


WasedaAna = function() { WasedaChar.call(this, "WasedaAna", "あな", "SE4NE4", "SE", "NE", "black", false, p(0.0, -1.6)); };
WasedaAna.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["あな"] = WasedaAna;
WasedaChar.dict["穴"] = WasedaAna;
WasedaChar.dict["あなた"] = WasedaAna;

WasedaAna.prototype.setPaths = function() {
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

  this.dp = p(4.94211, 0);
  this.paths = ["m 0 0 l 2.47105 3.20134 l 2.47105 -3.20134"];
};

WasedaShikamo = function() { WasedaChar.call(this, "WasedaShikamo", "しかも", "NE8CR1NE1F", "NE", "NEF", "black", false, p(0.0, 4.0+10)); };
WasedaShikamo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["しかも"] = WasedaShikamo;

WasedaShikamo.prototype.setPaths = function() {
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

  this.dp = p(7.53024, -7.98411);
  this.paths = ["m 0 0 c 2.13049 -1.58006 4.01619 -3.22646 5.97267 -5.0117 c 0.3253 -0.3253 0.412482 -0.042948 0.46407 0.1072 c 0.147916 0.430508 -0.433841 1.2184 -0.860697 1.06026 c -0.360699 -0.133634 -0.160993 -0.812152 0.031995 -1.15353 c 0.258913 -0.457996 0.684588 -1.04459 0.859358 -1.29211"];
};

WasedaKore = function() { WasedaChar.call(this, "WasedaKore", "これ", "OSWL4", "OSWL", "OSWL", "black", false, p(2.6, -1.5)); };
WasedaKore.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["これ"] = WasedaKore;
WasedaChar.dict["この"] = WasedaKore;

WasedaKore.prototype.setPaths = function() {
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

  switch (_head) {
    case "SW":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0 0 -2.2482 1.0596 -2.8389 2.054 c -0.221 0.372 -0.2636 0.7843 0.1113 0.6467 c 0.9386 -0.3446 2.7276 -2.7007 2.7276 -2.7007"];
      return;
  }

this.dp.set(-3e-06, -1e-06);
this.paths = ["m 0 0 c 0 0 -2.28352 1.61293 -2.74366 2.82988 c -0.17214 0.455294 -0.138889 0.920386 0.249577 0.694679 c 0.972468 -0.565015 2.49408 -3.52456 2.49408 -3.52456"];
};

WasedaOnajiP = function() { WasedaChar.call(this, "WasedaOnajiP", "おなじｐ", "P/X", "P/X", "P/X", "black"); };
WasedaOnajiP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["おなじｐ"] = WasedaOnajiP;
WasedaChar.dict["おなじ"] = [WasedaO, WasedaOnajiP, WasedaO];

WasedaOnajiP.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(3, -3.8);
};

WasedaDaitaiP = function() { WasedaChar.call(this, "WasedaDaitaiP", "だいたいｐ", "P/X", "P/X", "P/X", "black"); };
WasedaDaitaiP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["だいたいｐ"] = WasedaDaitaiP;
WasedaChar.dict["だいたい"] =[WasedaTai,  WasedaDaitaiP, WasedaTai];

WasedaDaitaiP.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(2, -4);
};

WasedaSunawachi = function() { WasedaChar.call(this, "WasedaSunawachi", "すなわち", "SW4E4NW4", "SW", "NW", "black", false, p(1.8, -1.5)); };
WasedaSunawachi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["すなわち"] = WasedaSunawachi;
WasedaChar.dict["△"] = WasedaSunawachi;

WasedaSunawachi.prototype.setPaths = function() {
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

  this.dp = p(0, 0);
  this.paths = ["m 0 0 l -1.78629 3.05865 h 3.57259 l -1.78629 -3.05865"];
};

WasedaNihonP = function() { WasedaChar.call(this, "WasedaNihonP", "日本ｐ", "P/X", "P/X", "P/X", "black"); };
WasedaNihonP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["日本ｐ"] = WasedaNihonP;
WasedaChar.dict["日本"] = [WasedaKai, WasedaNihonP, WasedaKai];
WasedaChar.dict["日本人"] = [WasedaKai, WasedaNihonP, WasedaShin];

WasedaNihonP.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.dp = p(-4, 2);
};

WasedaTaihen = function() { WasedaChar.call(this, "WasedaTaihen", "大変", "PS4NW1F", "PS", "NWF", "black", false, p(2.6, -2.0)); };
WasedaTaihen.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["大変"] = WasedaTaihen;
WasedaChar.dict["たいへん"] = WasedaTaihen;

WasedaTaihen.prototype.setPaths = function() {
  this.dp = p(-2.59002, 2.07432);
  this.paths = ["m 0 0 v 4 c -0.262148 -0.399955 -0.526361 -0.799162 -1.07885 -1.09344"];

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

  switch (_head) {
    case "EL":
      this.dp.move(0, 2.5);
      return;
  }
};

WasedaDatoJoshi = function() { WasedaChar.call(this, "WasedaDatoJoshi", "ダト", "SW8NE1", "SW", "SWNE", "black", false, p(2.7, -3.8)); };
WasedaDatoJoshi.prototype = Object.create(WasedaTatoJoshi.prototype);
WasedaChar.dict["ダト"] = WasedaDatoJoshi;
WasedaDatoJoshi.prototype.setPathsExtra = WasedaDa.prototype.setPathsExtra;

WasedaKotode = function() { WasedaChar.call(this, "WasedaKotode", "ことで", "S8NW1", "S", "NW", "black", false, p(1.1, -4.0)); };
WasedaKotode.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ことで"] = WasedaKotode;

WasedaKotode.prototype.setPaths = function() {
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

  switch (_head) {
    case "SEL":
      this.dp.set(0, 7.31916);
      this.paths = ["m 0 0 v 7.31916 c 0 0.56594 -0.567037 0.8732 -0.9 0.5588 c -0.263693 -0.24892 -0.01634 -0.88963 0.231761 -1.07571 c 0.307662 -0.23076 0.668239 0.0564 0.668239 0.51691"];
      return;
  }

  this.dp = p(-1.07885, 6.90656);
  this.paths = ["m 0 0 v 8 c -0.262148 -0.399955 -0.526361 -0.799162 -1.07885 -1.09344"];
};

WasedaKototo = function() { WasedaChar.call(this, "WasedaKototo", "ことと", "S8NE1", "S", "NE", "black", false, p(0.0, -4.0)); };
WasedaKototo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ことと"] = WasedaKototo;

WasedaKototo.prototype.setPaths = function() {
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

  switch (_head) {
    case "EL":
    case "E":
      this.dp = p(0, 6.64256);
      this.paths = ["m 0 0 v 6.64256 c 0.008263 0.466599 -0.158809 1.23022 0.419996 1.25999 c 0.730631 0.037576 0.924407 -0.981626 -0.419996 -1.25999"];
      return;
  }

  this.dp = p(0.940224, 6.78935);
  this.paths = ["m 0 0 v 8 c -0.04052 -0.46311 0.602847 -1.08786 0.940224 -1.21065"];
};

WasedaLtsusuru = function() { WasedaChar.call(this, "WasedaLtsusuru", "っする", "XSE2NE2", "XSE", "NE", "black", false, p(0.0, -1.1)); };
WasedaLtsusuru.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["っする"] = WasedaLtsusuru;

WasedaLtsusuru.prototype.setPaths = function() {
  this.dp = p(2.57373, 0.3357);
  this.paths = ["m 0 0 l 1.34281 2.23802 l 1.23091 -1.90232"];

  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tailModel_ = this.getPrevTailModel();
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

  switch (tailModel_) {
    case "SEL8":
      this.pdp.set(-5.0, -3.2);
      return;

    case "SE8":
      this.pdp = p(-4, -4);
      this.dp = p(2.69865, -0.25878);
      this.paths = ["m 0 0 l 1.40478 1.47871 l 1.29388 -1.73749"];
      return;

    case "SW8":
      this.pdp = p(1, -5);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
};

WasedaSetsu = function() { WasedaChar.call(this, "WasedaSetsu", "せつ", "SE4F", "SE", "SEF", "black", false, p(0.0, -2.1)); };
WasedaSetsu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["せつ"] = WasedaSetsu;

WasedaSetsu.prototype.setPaths = function() {
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

  this.dp = p(4.24265, 4.24261);
  this.paths = ["m 0 0 l 2.82843 2.8284"];
};

WasedaTsukeP = function() { WasedaChar.call(this, "WasedaTsukeP", "つけｐ", "P/X", "P/X", "P/X", "black"); };
WasedaTsukeP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["つけｐ"] = WasedaTsukeP;

WasedaTsukeP.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
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

  switch (model_) {
    case "E8CL1SW1F":
      this.dp = p(-2.6, -4.2);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(0, 0);
};

WasedaShita = function() { WasedaChar.call(this, "WasedaShita", "した", "PS2", "PS", "S", "black", false, p(0.0, -1)); };
WasedaShita.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["した"] = WasedaShita;
WasedaChar.dict["下"] = WasedaShita;

WasedaShita.prototype.setPaths = function() {
  this.dp = p(0, 2);
  this.paths = ["m 0 0 v 2"];

  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
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

  switch (model_) {
    case "EL4":
      this.pdp = p(-1.5, 3);
      return;

    case "E8":
      this.pdp = p(-4, 2);
      return;
  }

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
};

WasedaNodesu = function() { WasedaChar.call(this, "WasedaNodesu", "のです", "SWR4CR1", "SWR", "SWRCR", "black", false, p(2.9, -1.7)); };
WasedaNodesu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["のです"] = WasedaNodesu;

WasedaNodesu.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (tailModel_) {
    case "ER4":
      this.dp.set(-1.21508, 2.81475);
      this.paths = ["m 0 0 c 0.630874 1.17464 -0.949482 2.99724 -2.20899 3.33472 c -0.911152 0.244139 -0.852114 -0.917681 -0.175057 -0.917681 c 0.465188 0 0.73782 0.148792 1.16897 0.397711"];
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {}

  switch (tail_ + "_" + _head) {
    case "SW_E":
      this.dp = p(-0.87151, 2.49443);
      this.paths = ["m 0 0 c 1.08852 0.628458 -0.949482 2.99724 -2.20899 3.33472 c -0.911152 0.244139 -0.826059 -0.839517 -0.175057 -0.839517 c 0.465188 0 1.08115 -0.00077 1.51254 -0.00077"];
      return;
  }

  switch (tail_) {
    case "S":
    case "SW":
      this.dp = p(-1.25465, 2.79326);
      this.paths = ["m 0 0 c 1.08852 0.628458 -0.949482 2.99724 -2.20899 3.33472 c -0.911152 0.244139 -0.852114 -0.917681 -0.175057 -0.917681 c 0.465188 0 0.698252 0.127307 1.1294 0.376226"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(-1.25465, 2.79327);
  this.paths = ["m 0 0 c 0 1.34814 -0.949482 2.99724 -2.20899 3.33472 c -0.911152 0.244139 -0.852114 -0.917681 -0.175057 -0.917681 c 0.465188 0 0.698252 0.127307 1.1294 0.376226"];
};

WasedaNodeshita = function() { WasedaChar.call(this, "WasedaNodeshita", "のでした", "SWR4CR1S3", "SWR", "S", "black", false, p(2.8, -2.8)); };
WasedaNodeshita.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["のでした"] = WasedaNodeshita;

WasedaNodeshita.prototype.setPaths = function() {
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

  switch (tail_) {
    case "S":
    case "SW":
      this.dp = p(-1.83376, 5.69213);
      this.paths = ["m 0 0 c 1.08852 0.628458 -0.949481 2.99724 -2.20899 3.33472 c -0.911152 0.244139 -0.629394 -1.09586 0.04766 -1.09586 c 0.465188 0 0.327567 0.591145 0.327569 0.953274 l 1e-06 2.5"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(-1.83376, 5.69214);
  this.paths = ["m 0 0 c 0 1.34814 -0.949482 2.99724 -2.20899 3.33472 c -0.911152 0.244139 -0.629394 -1.09586 0.04766 -1.09586 c 0.465188 0 0.327567 0.591145 0.327569 0.953274 l 1e-06 2.5"];
};

WasedaDeshita = function() { WasedaChar.call(this, "WasedaDeshita", "でした", "SW4CR1S3", "SW", "S", "black", false, p(2.0, -3.0)); };
WasedaDeshita.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["でした"] = WasedaDeshita;

WasedaDeshita.prototype.setPaths = function() {
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

  this.dp = p(-1.14385, 5.95592);
  this.paths = ["m 0 0 l -1.10117 3.37142 c -0.096608 0.360532 -0.865201 0.071469 -0.865201 -0.340074 c 0 -0.450639 0.854628 -1.02543 0.836873 -0.223505 l -0.014348 0.648075 v 2.5"];
};

WasedaDeshou = function() { WasedaChar.call(this, "WasedaDeshou", "でしょう", "SW4OWR4", "SW", "SWOWR", "black", false, p(4.4, -1.9)); };
WasedaDeshou.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["でしょう"] = WasedaDeshou;

WasedaDeshou.prototype.setPaths = function() {
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

  this.dp = p(-1.01492, 3.10736);
  this.paths = ["m 0 0 l -1.10117 3.37142 c -0.21016 0.64344 -2.91292 0.521997 -3.2766 0.088495 c -0.316661 -0.377456 2.97984 -0.352558 3.36285 -0.352558"];
};

WasedaNaideshou = function() { WasedaChar.call(this, "WasedaNaideshou", "ないでしょう", "PSW4OWR4", "PSW", "SWOWR", "black", false, p(4.4, -1.9)); };
WasedaNaideshou.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ないでしょう"] = WasedaNaideshou;

WasedaNaideshou.prototype.setPaths = function() {
  WasedaDeshou.prototype.setPaths.call(this);

  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
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

  switch (model_) {
    case "SEL8":
      this.pdp = p(-0.5, -2.2);
      return;

    case "SER8":
      this.pdp = p(0.5, -4.2);
      return;
  }

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

};

WasedaNodeshite = function() { WasedaChar.call(this, "WasedaNodeshite", "のでして", "SWR4CR1", "SWR", "SE", "black", false, p(2.7, -1.7)); };
WasedaNodeshite.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["のでして"] = WasedaNodeshite;

WasedaNodeshite.prototype.setPaths = function() {
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

  switch (tail_) {
    case "S":
    case "SW":
      this.dp = p(0.75492, 4.98729);
      this.paths = ["m 0 0 c 1.08852 0.628458 -1.47691 3.6616 -2.34036 3.26173 c -0.640754 -0.296735 -0.261467 -1.36122 0.427644 -0.727527 c 0.292305 0.268795 0.107496 0.09588 0.459436 0.422484 l 2.2082 2.0306"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(0.754915, 4.98729);
  this.paths = ["m 0 0 c 0 1.34814 -1.47691 3.6616 -2.34036 3.26173 c -0.640754 -0.296735 -0.261467 -1.36122 0.427644 -0.727527 c 0.292305 0.268795 0.107496 0.095875 0.459436 0.422484 l 2.2082 2.0306"];
};

WasedaNodeshou = function() { WasedaChar.call(this, "WasedaNodeshou", "のでしょう", "SWR4OWR4", "SWR", "SWROWR", "black", false, p(4.9, -1.8)); };
WasedaNodeshou.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["のでしょう"] = WasedaNodeshou;

WasedaNodeshou.prototype.setPaths = function() {
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

  this.dp = p(-1.04634, 2.5876);
  this.paths = ["m 0 0 c 0 1.34814 -0.949482 2.99724 -2.20899 3.33472 c -1.2879 0.345088 -2.30635 0.168162 -2.67002 -0.265341 c -0.316661 -0.377456 3.17117 -0.481775 3.83268 -0.481775"];
};


WasedaSoi = function() { WasedaChar.call(this, "WasedaSoi", "そい", "NEL4", "NEL", "NEL", "black", false, p(0.0, 1.3)); };
WasedaSoi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["そい"] = WasedaSoi;

WasedaSoi.prototype.setPaths = function() {
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

  this.dp = p(2.99304, -2.65362);
  this.paths = ["m 0 0 c 1.44749 -0.387854 2.99304 -1.552 2.99304 -2.65362"];
};

WasedaShoReversed = function() { WasedaChar.call(this, "WasedaShoReversed", "しょ変規", "SWR16CR8", "SWR", "SWRCR8", "black", false, p(5, -6.5)); };
WasedaShoReversed.prototype = Object.create(WasedaSho.prototype);
WasedaShoReversed.prototype.getFilteredPrevTailType = function() { return "R"; };
WasedaChar.dict["しょ変"] = WasedaShoReversed;
WasedaChar.dict["しょｈ"] = WasedaShoReversed;

WasedaTori = function() { WasedaChar.call(this, "WasedaTori", "とり", "S8CL1", "S", "SCL", "black", false, p(0.0, -4.0)); };
WasedaTori.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["とり"] = WasedaTori;
WasedaChar.dict["とれ"] = WasedaTori;

WasedaTori.prototype.setPaths = function() {
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

  this.dp = p(0.021129, 6.73906);
  this.paths = ["m 0 0 l 0.021129 6.73906 c 0.00146 0.466669 -0.158809 1.23022 0.419996 1.25999 c 0.730631 0.037576 0.924407 -0.981626 -0.419996 -1.25999"];
};

WasedaYouP = function() { WasedaChar.call(this, "WasedaYouP", "ようｐ", "P/X", "P/X", "P/X", "black"); };
WasedaYouP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ようｐ"] = WasedaYouP;

WasedaYouP.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
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

  switch (model_ + "_" + _head) {
    case "EL8NWL4_EL":
      this.pdp = p(0, -2);
      return;
  }

  //switch (model_ + "_" + _headModel) {}

  //switch (tailModel_) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(0, 0);
};

WasedaMixe = function() { WasedaChar.call(this, "WasedaMixe", "みぇ", "ER8CR1P", "ER", "ERCRP", "black", false, p(0.0, 0.5)); };
WasedaMixe.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["みぇ"] = WasedaMixe;

WasedaMixe.prototype.setPaths = function() {
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

  this.dp = p(7.98641, -0.422351);
  this.paths = ["m 0 0 c 1.859 -0.828 7.951 -2.109 7.951 -0.556 c 0 0.594 -0.300334 0.880054 -0.65242 0.83953 c -0.259684 -0.029889 -0.532362 -0.35827 -0.327944 -0.712332 c 0.233198 -0.40391 1.19006 -0.472364 1.01578 0.006451"];
};

WasedaNakyaP = function() { WasedaChar.call(this, "WasedaNakyaP", "なきゃｐ", "P/X", "P/X", "P/X", "black"); };
WasedaNakyaP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なきゃｐ"] = WasedaNakyaP;

WasedaNakyaP.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
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

  switch (model_ + "_" + _head) {
    case "NEL8_SL":
      this.dp = p(-1, 0);
      return;
  }

  //switch (tailModel_) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(0, 0);
};

WasedaTatoshite = function() { WasedaChar.call(this, "WasedaTatoshite", "たとして", "SW8CL1NW1", "SW", "NW", "black", false, p(3.3, -3.8)); };
WasedaTatoshite.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["たとして"] = WasedaTatoshite;

WasedaTatoshite.prototype.setPaths = function() {
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

  this.dp = p(-3.2602, 5.45046);
  this.paths = ["m 0 0 l -2.50377 6.91448 c -0.315719 0.8719 0.490497 0.872761 0.753496 0.6652 c 0.421938 -0.332997 -0.244144 -0.841121 -0.590566 -1.15327 c -0.232329 -0.209344 -0.561167 -0.624322 -0.919367 -0.975944"];
};


WasedaYuchi = function() { WasedaChar.call(this, "WasedaYuchi", "ゆち", "NER8CR1", "NER", "NERCR", "black", false, p(0.0, 0.9)); };
WasedaYuchi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ゆち"] = WasedaYuchi;
WasedaChar.dict["ゆき"] = WasedaYuchi;

WasedaYuchi.prototype.setPaths = function() {
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

  switch (_head) {
    case "E":
      this.dp = p(7.36317, -2.88195);
      this.paths = ["m 0 0 c 0.207697 0.062913 0.471023 0.156079 0.828402 0.350212 c 0.445752 0.242137 0.819905 0.756044 0.590566 1.15327 c -0.167518 0.290151 -1.25763 0.207983 -0.753496 -0.665201 c 1.2372 -2.14289 3.20188 -4.34358 5.81598 -4.34358 c 0.435292 0 0.76762 0.114382 0.859944 0.419694 c 0.117295 0.387892 -0.231536 0.915372 -0.614017 1.04926 c -0.341375 0.119501 -1.03024 -0.028985 -1.01246 -0.390234 c 0.028014 -0.56931 0.935673 -0.45537 1.64825 -0.45537"];
      return;

  }

  this.dp = p(6.30719, -3.50163);
  this.paths = ["m 0 0 c 0.207697 0.062913 0.471023 0.156079 0.828402 0.350212 c 0.445752 0.242137 0.819905 0.756044 0.590566 1.15327 c -0.167518 0.290151 -1.25763 0.207983 -0.753496 -0.665201 c 1.2372 -2.14289 3.20188 -4.34358 5.81598 -4.34358 c 0.2753 0 0.528448 0.250972 0.536378 0.493884 c 0.00991 0.303312 -0.340825 0.56119 -0.628078 0.659078 c -0.165748 0.056483 -0.43293 0.072514 -0.519219 -0.079858 c -0.189742 -0.335054 0.372153 -0.81064 0.436653 -1.06944"];
};

WasedaEru = function() { WasedaChar.call(this, "WasedaEru", "える", "OSEL4", "OSEL", "OSEL", "black", false, p(0.0, -1.6)); };
WasedaEru.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["える"] = WasedaEru;
WasedaChar.dict["せき"] = WasedaEru;
WasedaChar.dict["せめ"] = WasedaEru;

WasedaEru.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _headModel) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "EL8CL1":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0.604983 1.04786 2.39945 3.68758 2.89251 2.76287 c 0.389146 -0.895092 -1.8982 -2.26026 -2.89251 -2.76287"];
      return;
  }

  //switch (tailModel_ + "_" + _name) {}

  //switch (tailModel_ + "_" + _model) {}

  //switch (tailModel_ + "_" + _headModel) {}

  //switch (tailModel_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "SER16CR1_X":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0.6927 0.9603 4.0353 1.8961 3.8915 0.9251 c -0.2054 -0.8907 -2.8629 -1.1004 -3.8915 -0.9251"];
      return;
  }

  //switch (_name) {}

  switch (_model) {
    case "UER4":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c 0.4065 1.1121 3.3703 2.9188 3.4951 1.9453 c 0.0437 -0.9131 -2.4574 -1.8352 -3.4951 -1.9453"];
      return;
  }

  //switch (_headModel) {}

  switch (_head) {
    case "SE":
      this.dp = p(0, 0);
      this.paths = ["m 0 0 c -0.423 1.106 0.628 4.414 1.361 3.7612 c 0.632 -0.6604 -0.65 -2.9973 -1.361 -3.7612"];
      return;
  }

  this.dp = p(0, 0);
  this.paths = ["m 0 0 c -0.01408 1.18398 2.11686 3.92395 2.57865 3.05787 c 0.364473 -0.838342 -1.64739 -2.58713 -2.57865 -3.05787"];
};

WasedaNakereba = function() { WasedaChar.call(this, "WasedaNakereba", "なければ", "XEL25F", "XEL", "ELF", "black", false, p(0.0, -1.7)); };
WasedaNakereba.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なければ"] = WasedaNakereba;

WasedaNakereba.prototype.setPaths = function() {
  this.dp = p(25, 1.27009).add(pp(2, -30));
  this.paths = ["m 0 0 c 7.14339 4.12424 19.4554 4.45261 25 1.27009"];

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaWa":
      this.pdp = p(-3.7, -2.3);
      return;

    case "WasedaToJoshi":
      this.pdp = p(-3, -2);
      return;

    case "WasedaTeJoshi":
      this.pdp.set(-0.7, -1.2);
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _headModel) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "ER4":
      this.pdp = p(-3.3, -1.2);
      return;

    case "NEL8CL1":
      this.pdp = p(-3.3, -1.3);
      return;
  }

  //switch (tailModel_ + "_" + _name) {}

  //switch (tailModel_ + "_" + _model) {}

  //switch (tailModel_ + "_" + _headModel) {}

  //switch (tailModel_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "E":
      this.pdp = p(-5, -1);
      return;

    case "S":
      this.pdp = p(-2, -3);
      return;

    case "SW":
      this.pdp = p(-1, -3);
      return;

    case "SE":
      this.pdp = p(-4, -3);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

};

WasedaMaiHitei = function() { WasedaChar.call(this, "WasedaMaiHitei", "まいｘ", "XS3F", "XS", "S", "black", false, p(0.0, -1.5)); };
WasedaMaiHitei.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["まいｘ"] = WasedaMaiHitei;

WasedaMaiHitei.prototype.setPaths = function() {
  this.dp = p(0, 3).move(0, 2);
  this.paths = ["m0,0v3"];

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaKu":
      this.pdp = p(2.2, -0.9);
      return;

    case "WasedaWa":
      this.pdp = p(-0.8, 1.3);
      return;

    case "WasedaE":
      this.pdp = p(-0.8, 1.3);
      return;

    case "WasedaYu":
      this.pdp = p(-0.5, -1.2);
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "NEL8CL1":
      this.pdp = p(-1, 0);
      return;

    case "SER8CR4":
      this.pdp = p(-0.2, 2.1);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "E":
      this.pdp = p(-1, -1.5);
      return;

    case "SW":
      this.pdp = p(0.5, -2.5);
      return;

    case "SE":
      this.pdp = p(-0.5, -2.5);
      return;

    case "S":
      this.pdp = p(1.5, -1.5);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
};

WasedaNaito = function() { WasedaChar.call(this, "WasedaNaito", "ないとｘ", "XSW3", "XSW", "SWNE", "black", false, p(0.0, -1.5)); };
WasedaNaito.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ないとｘ"] = WasedaNaito;

WasedaNaito.prototype.setPaths = function() {
  this.dp = p(0.27149, 2.00293);
  this.paths = ["m 0 0 l -1.0261 2.819 c 0.12032 -0.44904 0.938561 -0.816068 1.29759 -0.816068"];

  WasedaToJoshi.prototype.setPaths.call(this);

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaWa":
      this.pdp = p(-1, -1);
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "ER8":
      this.pdp = p(-1.1, -1.9);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "E_SEL":
      this.pdp = p(-1, -1);
      this.dp = p(-0.46718, 1.33951);
      this.paths = ["m 0 0 l -0.834402 2.34357 c -0.311029 0.873584 0.381794 0.959598 0.585067 0.693272 c 0.266024 -0.348543 -0.00566 -1.09458 -0.217845 -1.69733"];
      return;
  }

  switch (tail_) {
    case "SER":
      this.pdp = p(0, -4.5);
      return;

    case "ECL":
      this.pdp = p(-0.5, -1.5);
      return;

    case "E":
      this.pdp = p(-1, -1);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
};

WasedaNakute = function() { WasedaChar.call(this, "WasedaNakute", "なくてｘ", "XS3", "XS", "SWNW", "black", false, p(0.0, -1.5)); };
WasedaNakute.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なくてｘ"] = WasedaNakute;

WasedaNakute.prototype.setPaths = function() {
  WasedaTsu.prototype.setPaths.call(this);
  //this.dp = p(-1.07882, 1.90652);
  //this.paths = ["m 0 0 l 0 3 c -0.262135 -0.399966 -0.526334 -0.799183 -1.07882 -1.09348"];

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_ + "_" + _headModel) {
    case "WasedaWa_ER8":
      this.dp = p(0, 1.5461);
      this.paths = ["m 0 0 v 2.30614 c -4.8e-05 0.565945 -0.604486 0.908633 -0.9 0.5588 c -0.39192 -0.463961 0.184286 -1.00005 0.900023 -1.31884"];
      this.pdp = p(-0.7, -0.4);
      return;
  }
  switch (name_) {
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  switch (model_ + "_" + _headModel) {
//    case "SE4_ER8":
//      this.dp = p(2.3e-05, 1.5461);
//      this.paths = ["m 0 0 v 2.30614 c -4.8e-05 0.565945 -0.604486 0.908633 -0.9 0.5588 c -0.39192 -0.463961 0.184286 -1.00005 0.900023 -1.31884"];
//      this.pdp = p(-0.5, -1.4);
//      return;
  }

  //switch (model_ + "_" + _head) {}

  switch (model_) {
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {
  //  case "E_ER8":
  //    this.pdp = p(-1, -1);
  //    this.dp = p(0, 1.85582);
  //    this.paths = ["m 0 0 v 2.97939 c 0 0.48482 -0.969503 0.339367 -0.969503 -0.198851 c 0 -0.354695 0.56064 -0.721298 0.969503 -0.924717"];
  //    return;
  //}

  //switch (tail_ + "_" + _head) {
  //  case "E_SEL":
  //  case "E_S":
  //    this.pdp = p(-1, -1.5);
  //    this.dp = p(0, 3.31915);
  //    this.paths = ["m 0 0 v 3.31915 c 0 0.565945 -0.567037 0.8732 -0.9 0.5588 c -0.263693 -0.248921 -0.016341 -0.889627 0.231761 -1.07571 c 0.307662 -0.23076 0.668239 0.056411 0.668239 0.516914"];
  //    return;
  //}

  switch (tail_) {
    case "SELCL":
      this.pdp = p(0, -1.5);
      return;

    case "E":
      this.pdp = p(-1, -1);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
};

WasedaNakattade = function() { WasedaChar.call(this, "WasedaNakattade", "なかったでｘ", "XS3", "XS", "SWNW", "black", false, p(0.0, -1.5)); };
WasedaNakattade.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なかったでｘ"] = WasedaNakattade;

WasedaNakattade.prototype.setPaths = function() {
  this.dp = p(-1.07882, 1.90652);
  this.paths = ["m 0 0 l 0 3 c -0.262135 -0.399966 -0.526334 -0.799183 -1.07882 -1.09348"];

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _headModel) {
    case "E_ER8":
      this.pdp = p(-1, -1);
      this.dp = p(0, 1.85582);
      this.paths = ["m 0 0 v 2.97939 c 0 0.48482 -0.969503 0.339367 -0.969503 -0.198851 c 0 -0.354695 0.56064 -0.721298 0.969503 -0.924717"];
      return;
  }

  switch (tail_ + "_" + _head) {
    case "E_SEL":
    case "E_S":
      this.pdp = p(-1, -1.5);
      this.dp = p(0, 3.31915);
      this.paths = ["m 0 0 v 3.31915 c 0 0.565945 -0.567037 0.8732 -0.9 0.5588 c -0.263693 -0.248921 -0.016341 -0.889627 0.231761 -1.07571 c 0.307662 -0.23076 0.668239 0.056411 0.668239 0.516914"];
      return;
  }

  switch (tail_) {
    case "E":
      this.pdp = p(-4, -1);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
};

WasedaNakattato = function() { WasedaChar.call(this, "WasedaNakattato", "なかったとｘ", "XS3", "XS", "S", "black", false, p(0.0, -1.5)); };
WasedaNakattato.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なかったとｘ"] = WasedaNakattato;

WasedaNakattato.prototype.setPaths = function() {
  this.dp = p(0.940224, 1.78935);
  this.paths = ["m 0 0 l 0 3 c -0.040517 -0.463111 0.602847 -1.08786 0.940224 -1.21065"];

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  switch (model_ + "_" + _head) {
    case "E8_ER":
      this.dp = p(0, 2.73916);
      this.paths = ["m 0 0 v 2.73916 c 0.003583 0.466658 -0.158809 1.23022 0.419996 1.25999 c 0.730631 0.037576 0.924407 -0.981626 -0.419996 -1.25999"];
      this.pdp = p(-4, -1);
      return;
  }

  switch (model_) {
    case "ER8":
      this.pdp = p(-3.4, -2.1);
      return;

    case "E8":
      this.pdp = p(-4, -1);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
};

WasedaNakuto = function() { WasedaChar.call(this, "WasedaNakuto", "なくとｘ", "XS3", "XS", "S", "black", false, p(0.0, -1.5)); };
WasedaNakuto.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なくとｘ"] = WasedaNakuto;

WasedaNakuto.prototype.setPaths = function() {
  this.dp = p(0.940224, 1.78935);
  this.paths = ["m 0 0 l 0 3 c -0.040517 -0.463111 0.602847 -1.08786 0.940224 -1.21065"];

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "E":
      this.pdp = p(-1, -1);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
};

WasedaTaide = function() { WasedaChar.call(this, "WasedaTaide", "たいで", "S4NW1", "S", "NW", "black", false, p(1.1, -2.0)); };
WasedaTaide.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["たいで"] = WasedaTaide;

WasedaTaide.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (_headModel) {
    case "ER4":
      this.dp = p(-0.024474, 3.09364);
      this.paths = ["m 0 0 c -0.046547 1.3329 -0.046547 2.6671 0 4 c 0.019752 0.5656 -0.64819 0.806362 -0.9 0.5588 c -0.405708 -0.398865 0.309068 -1.13811 0.875526 -1.46516"];
      return;

    case "ER8":
      this.dp = p(-7.5e-05, 2.53762);
      this.paths = ["m 0 0 l -9.8e-05 3.29766 c -1.7e-05 0.565945 -0.604486 0.908633 -0.9 0.5588 c -0.39192 -0.463961 0.184286 -1.00005 0.900023 -1.31884"];
      return;

    case "ER16":
      this.dp = p(-0.018172, 3.37002);
      this.paths = ["m 0 0 c -0.0464 1.3278 -0.0464 2.657 0 3.9852 c 0.0295 0.563 -0.472256 0.745747 -0.799617 0.645136 c -0.203352 -0.0625 -0.257223 -0.410116 -0.185902 -0.610544 c 0.130226 -0.36596 0.756585 -0.573104 0.967347 -0.649773"];
      return;

  case "SER4":
  case "SER8":
      this.dp = p(0, 3.62587);
      this.paths = ["m 0 0 v 4 c 0 0.270603 -0.292696 0.556305 -0.540823 0.521833 c -0.349191 -0.048513 -0.710383 -0.609907 -0.532088 -0.914043 c 0.180896 -0.308573 0.648006 -0.279447 1.07291 0.018078"];
      return;

    case "SER16":
      this.dp = p(0, 3.47802);
      this.paths = ["m 0 0 v 4 c 0 0.79209 -1.12546 0.107757 -1.12028 -0.276872 c 0.005139 -0.382227 0.390019 -0.633379 1.12028 -0.245112"];
      return;

    case "EL8":
      this.dp = p(1e-06, 3.35582);
      this.paths = ["m 0 0 v 3.66158 c 0 0.273546 -0.337487 0.360033 -0.550099 0.332925 c -0.322151 -0.041074 -0.813523 -0.401295 -0.68027 -0.697457 c 0.168472 -0.374435 0.789227 -0.084576 1.23037 0.058769"];
      return;

    case "EL16":
      this.dp = p(-0, 3.58471);
      this.paths = ["m 0 0 v 4 c 0 0.432637 -0.473318 0.444044 -0.745565 0.381958 c -0.270169 -0.061612 -0.612106 -0.40788 -0.502388 -0.662339 c 0.165665 -0.384214 0.548711 -0.322273 1.24795 -0.134912"];
      return;
  }

  switch (_head) {
    case "SW":
      this.dp = p(-0.183611, 3.81343);
      this.paths = ["m 0 0 v 3.31915 c 0 0.565945 -0.606958 0.846547 -0.939944 0.532171 c -0.40199 -0.379524 0.326342 -1.16196 0.731708 -1.03901 c 0.319438 0.096886 0.271919 0.321709 0.024625 1.00112"];
      return;

    case "SEL":
    case "S":
      this.dp = p(0, 3.31915);
      this.paths = ["m 0 0 v 3.31915 c 0 0.565945 -0.567037 0.8732 -0.9 0.5588 c -0.263693 -0.248921 -0.016341 -0.889627 0.231761 -1.07571 c 0.307662 -0.23076 0.668239 0.056411 0.668239 0.516914"];
      return;

    case "E":
     this.dp = p(0, 3.06187);
     this.paths = ["m 0 0 v 3.58386 c 0 0.79209 -1.14634 0.276059 -1.19101 -0.120459 c -0.046901 -0.416323 0.45875 -0.401525 1.19101 -0.401525"];
     return;

    case "NER":
      this.dp = p(0, 2.75199);
      this.paths = ["m 0 0 v 4 c 0 0.565945 -0.312067 0.973945 -0.617369 0.81969 c -0.642007 -0.324375 0.115073 -1.35035 0.617369 -2.0677"];
      return;
  }

  this.dp = p(-1.07885, 2.90656);
  this.paths = ["m 0 0 v 4 c -0.262148 -0.399955 -0.526361 -0.799162 -1.07885 -1.09344"];
};

WasedaTaito = function() { WasedaChar.call(this, "WasedaTaito", "たいと", "S4NE1", "S", "NE", "black", false, p(0.0, -2.0)); };
WasedaTaito.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["たいと"] = WasedaTaito;

WasedaTaito.prototype.setPaths = function() {
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

  this.dp = p(0.940224, 2.78935);
  this.paths = ["m 0 0 v 4 c -0.04052 -0.46311 0.602847 -1.08786 0.940224 -1.21065"];
};

WasedaNaide = function() { WasedaChar.call(this, "WasedaNaide", "ないで", "PSW3NW1", "SW", "CR", "black", false, p(1.7, -1.4)); };
WasedaNaide.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ないで"] = WasedaNaide;
WasedaChar.dict["ないでｘ"] = WasedaNaide;

WasedaNaide.prototype.setPaths = function() {
  this.dp = p(-1.66586, 1.42249);
  this.paths = ["m 0 0 l -1.0261 2.819 c -0.10953 -0.465502 -0.221256 -0.931004 -0.639765 -1.39651"];

  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _headModel) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "E16CL1":
      this.pdp = p(-0.4, -0.9);
      return;
  }

  //switch (tailModel_ + "_" + _name) {}

  //switch (tailModel_ + "_" + _model) {}

  //switch (tailModel_ + "_" + _headModel) {}

  //switch (tailModel_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {}

  switch (tail_ + "_" + _head) {
    case "E_SEL":
      this.pdp = p(-0.5, -1.2);
      this.dp = p(-0.724206, 2.15577);
      this.paths = ["m 0 0 l -0.859451 2.55836 c -0.144 0.4175 -0.501001 0.339382 -0.653846 0.152488 c -0.318725 -0.389727 -0.02596 -1.2954 0.476662 -1.32452 c 0.266447 -0.01544 0.312429 0.284928 0.312429 0.769442"];
      return;
  }

  switch (tail_) {
    case "E":
      this.pdp = p(-0.5, -1.2);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
};

WasedaNaiP = function() { WasedaChar.call(this, "WasedaNaiP", "ないｐ", "P/X", "P/X", "P/X", "black"); };
WasedaNaiP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ないｐ"] = WasedaNaiP;

WasedaNaiP.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaWa":
      this.pdp = p(-0.3, -1.3);
      return;

    case "WasedaTeJoshi":
    case "WasedaToJoshi":
      this.dp = p(-1.0261, 2.819).pmove(2, 120);
      this.paths = ["m 0 0 l -1.0261 2.819"];
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "E_SW":
      this.pdp = p(-0.5, -1.4);
      this.paths = ["m0,0 l -1.0261 2.819 l 0.25 -0.433"];
      return;
  }

  switch (tail_) {
    case "S":
      this.pdp = p(0.5, -3);
      return;

    case "SCL":
      this.pdp = p(0.5, -1.4);
      return;

    case "E":
      this.pdp = p(-0.5, -1.4);
      return;

    case "SWR":
      this.pdp = p(0, -1.6);
      this.dp = p(2.5981, 1.5);
      this.paths = ["m 0 0 l 2.5981 1.5"];
      return;

    case "SW":
      this.dp = p(2.8191, 1.026);
      this.pdp = p(-0.7, -2.2);
      this.paths = ["m 0 0 l 2.8191 1.026"];
      return;

    case "SE":
      this.dp = p(-2.2981, 1.9285);
      this.pdp = p(0.5, -2);
      this.paths = ["m 0 0 l -2.2981 1.9285"];
      return;
  }

};

WasedaIruP = function() { WasedaChar.call(this, "WasedaIruP", "いるｐ", "P/X", "P/X", "P/X", "black"); };
WasedaIruP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["いるｐ"] = WasedaIruP;

WasedaIruP.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaTeJoshi":
      this.dp = p(2.5, 1);
      return;
  }

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

  //switch (_head) {}

  this.dp = p(0, 0);
};

WasedaWi = function() { WasedaChar.call(this, "WasedaWi", "ゐ", "UWL4CL1", "WL", "SELCL", "black", false, p(1.8, -1.7)); };
WasedaWi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ゐ"] = WasedaWi;

WasedaWi.prototype.setPaths = function() {
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

  this.dp = p(-0.871804, 3.30322);
  this.paths = ["m 0 0 c -0.975201 0.2797 -1.83318 1.0997 -1.83318 2.1089 c 0 0.729097 0.64032 1.23553 1.39113 1.26735 c 0.144706 0.00613 0.686894 -0.092681 0.811994 -0.361208 c 0.083796 -0.179869 0.024398 -0.511852 -0.164678 -0.572061 c -0.437816 -0.139418 -0.770985 0.367481 -1.07707 0.860232"];
};

WasedaTaitoshite = function() { WasedaChar.call(this, "WasedaTaitoshite", "たいとして", "S4CL1NW1", "SW", "NW", "black", false, p(1.2, -2.1)); };
WasedaTaitoshite.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["たいとして"] = WasedaTaitoshite;

WasedaTaitoshite.prototype.setPaths = function() {
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

  this.dp = p(-1.2156, 2.3995);
  this.paths = ["m 0 0 v 3.512 c 0.002 0.9273 0.7619 0.6496 0.937 0.364 c 0.2809 -0.4583 -0.5197 -0.705 -0.9527 -0.8783 c -0.2903 -0.1162 -0.7423 -0.392 -1.1999 -0.5982"];
};

WasedaNakattadesu = function() { WasedaChar.call(this, "WasedaNakattadesu", "なかったです", "XS4CR1", "XS", "SCR", "black", false, p(0.0, -1.5)); };
WasedaNakattadesu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なかったです"] = WasedaNakattadesu;

WasedaNakattadesu.prototype.setPaths = function() {
  WasedaTsu.prototype.setPaths.call(this);
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
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

  switch (model_) {
    case "ER8CR1":
      this.pdp= p(-2.5, -1);
      return;
  }

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
};

WasedaNakattadesu = function() { WasedaChar.call(this, "WasedaNakattadesu", "なかったです", "XS4CR1", "XS", "SCR", "black", false, p(0.0, -1.5)); };
WasedaNakattadesu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["なかったです"] = WasedaNakattadesu;

WasedaNakattadesu.prototype.setPaths = function() {
  WasedaTsu.prototype.setPaths.call(this);
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
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

  switch (model_) {
    case "ER8CR1":
      this.pdp= p(-2.5, -1);
      return;
  }

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
};

WasedaNaitoshite = function() { WasedaChar.call(this, "WasedaNaitoshite", "ないとして", "XSW4CL1NW1", "XSW", "NW", "black", false, p(1.2, -2.1)); };
WasedaNaitoshite.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ないとして"] = WasedaNaitoshite;

WasedaNaitoshite.prototype.setPaths = function() {
  WasedaToshite.prototype.setPaths.call(this);
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

  switch (tail_) {
    case "E":
      this.pdp = p(-1, -0.5);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
};

WasedaMashita = function() { WasedaChar.call(this, "WasedaMashita", "ました", "SE25F", "SE", "SEF", "black", false, p(0.0, -7.2)); };
WasedaMashita.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ました"] = WasedaMashita;

WasedaMashita.prototype.setPaths = function() {
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

  this.dp = p(20.4788, 14.3394).pmove(2, 35);
  this.paths = ["m 0 0 l 20.4788 14.3394"];
};

WasedaMashitemo = function() { WasedaChar.call(this, "WasedaMashitemo", "ましても", "NE25CR1NE1F", "NE", "NEF", "black", false, p(0.0, 7.8)); };
WasedaMashitemo.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ましても"] = WasedaMashitemo;

WasedaMashitemo.prototype.setPaths = function() {
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

  this.dp = p(20.9735, -15.6176).pmove(2, -55);
  this.paths = ["m 0 0 l 20.4788 -14.3394 c 0.16259 -0.113847 0.412482 -0.04295 0.46407 0.1072 c 0.147916 0.430508 -0.433841 1.2184 -0.860697 1.06026 c -0.360699 -0.133634 -0.160993 -0.812152 0.03199 -1.15353 c 0.258913 -0.457996 0.684588 -1.04459 0.859358 -1.29211"];
};

WasedaMasen = function() { WasedaChar.call(this, "WasedaMasen", "ません", "SW25F", "SW", "SWF", "black", false, p(16.1, -9.6)); };
WasedaMasen.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ません"] = WasedaMasen;

WasedaMasen.prototype.setPaths = function() {
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

  this.dp = p(-8.5505, 23.492).pmove(2, 110);
  this.paths = ["m 0 0 l -8.5505 23.492"];
};

WasedaMashou = function() { WasedaChar.call(this, "WasedaMashou", "ましょう", "ER25F", "ER", "ERF", "black", false, p(0.0, 1.4)); };
WasedaMashou.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ましょう"] = WasedaMashou;

WasedaMashou.prototype.setPaths = function() {
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

  this.dp = p(25, 0).pmove(2, 33);
  this.paths = ["m 0 0 c 6.0068 -3.46803 19.4421 -3.47898 25 0"];
};


WasedaAtteP = function() { WasedaChar.call(this, "WasedaAtteP", "あってｐ", "P/X", "P/X", "P/X", "black"); };
WasedaAtteP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["あってｐ"] = WasedaAtteP;
WasedaChar.dict["あって"] = [WasedaAtteP, WasedaE];
WasedaChar.dict["あった"] = [WasedaAtteP, WasedaTa];
WasedaChar.dict["あり"] = [WasedaPointAru, WasedaA];
WasedaChar.dict["あれば"] = [WasedaPointAru, WasedaHo];
WasedaChar.dict["あります"] = [WasedaPointAru, WasedaMasu];
WasedaChar.dict["であります"] = [WasedaTeJoshi, WasedaPointAru, WasedaMasu];
WasedaChar.dict["ありましょう"] = [WasedaPointAru, WasedaMashou];
WasedaChar.dict["のでありましょう"] = [WasedaSore, WasedaPointAru, WasedaMashou];
WasedaChar.dict["ありました"] = [WasedaPointAru, WasedaMashita];
WasedaChar.dict["ありません"] = [WasedaPointAru, WasedaMasen];
WasedaChar.dict["でありません"] = [WasedaTeJoshi, WasedaMasen];
WasedaChar.dict["のでありません"] = [WasedaSore, WasedaMasen];

WasedaAtteP.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _head) {
    case "WasedaTeJoshi_SW":
      this.pdp = p(3.5, -1);
      return;

    case "WasedaSore_SE":
      this.pdp = p(5, -2);
      return;
  }

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (tailModel_) {}

  switch (model_) {
    case "EL8CL1":
      this.pdp = p(2.3, -1.6);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "E_SW":
      this.dp = p(3, -1.5);
      return;

    case "S_SW":
      this.dp = p(3, -1.5);
      return;

    case "E_SE":
      this.dp = p(1, -1.5);
      return;

    case "S_SE":
      this.dp = p(1, -1.5);
      return;
  }

  switch (tail_) { }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(2, 0);
};


WasedaKui = function() { WasedaChar.call(this, "WasedaKui", "くい", "E8ONL4", "E", "EONL", "black", false, p(0.0, 0.0)); };
WasedaKui.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["くい"] = WasedaKui;

WasedaKui.prototype.setPaths = function() {
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

  switch (_head) {
    case "S":
      this.dp = p(7.61502, 0);
      this.paths = ["m 0 0 h 8 c 0.197322 0 0.453361 -3.29607 -0.015813 -3.29607 c -0.468601 0 -0.369163 1.76756 -0.369163 3.29607"];
      return;

  }

  this.dp = p(7.61502, 0);
  this.paths = ["m 0 0 h 8 c 0.197322 0 0.453361 -3.29607 -0.015813 -3.29607 c -0.668274 0 -0.369163 1.76756 -0.369163 3.29607"];
};

WasedaSui = function() { WasedaChar.call(this, "WasedaSui", "すい", "SWR8ONR4", "SWR", "SWRONR", "black", false, p(4.3, -3.3)); };
WasedaSui.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["すい"] = WasedaSui;

WasedaSui.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _headModel) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "NEL16":
      this.dp = p(-2.52998, 8.48072);
      this.paths = ["m 0 0 c 0 3.2179 -0.767507 8.48824 -2.68791 8.48824 c -0.805259 0 -0.453361 -3.29607 0.01581 -3.29607 c 0.465629 0 0.142112 1.76004 0.142112 3.28855"];
      return;
  }

  //switch (tailModel_ + "_" + _name) {}

  //switch (tailModel_ + "_" + _model) {}

  //switch (tailModel_ + "_" + _headModel) {}

  //switch (tailModel_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _headModel) {}

  switch (tail_ + "_" + _head) {
    case "NER_SWR":
      this.dp.set(-3.64208, 6.57428);
      this.paths = ["m 0 0 c 1.99117 1.99117 -1.8796 6.5818 -3.8 6.5818 c -0.805259 0 -0.688321 -3.29607 -0.21915 -3.29607 c 0.465629 0 0.377072 2.63978 0.377072 3.28855"];
      return;

    case "ER_SW":
      this.dp = p(-3.64208, 6.57428);
      this.paths = ["m 0 0 c 1.30093 2.25326 -1.8796 6.5818 -3.8 6.5818 c -0.805259 0 0.391541 -3.29908 0.844725 -3.17765 c 0.545041 0.14604 -0.218617 1.70871 -0.686805 3.17013"];
      return;
  }

  switch (tail_) {
    case "NER":
      this.dp = p(-3.64208, 6.57428);
      this.paths = ["m 0 0 c 1.99117 1.99117 -1.8796 6.5818 -3.8 6.5818 c -0.805259 0 -0.453361 -3.29607 0.01581 -3.29607 c 0.465629 0 0.142112 1.76004 0.142112 3.28855"];
      return;

    case "ER":
      this.dp = p(-3.64208, 6.57428);
      this.paths = ["m 0 0 c 1.45885 2.24574 -1.8796 6.5818 -3.8 6.5818 c -0.805259 0 -0.453361 -3.29607 0.01581 -3.29607 c 0.465629 0 0.142112 1.76004 0.142112 3.28855"];
      return;
  }

  //switch (_name) {}

  switch (_model) {
    case "NEL8CL4":
      this.dp.set(-2.80184, 6.57428);
      this.paths = ["m 0 0 c 0 3.2179 -1.03937 6.5818 -2.95976 6.5818 c -0.805259 0 -0.453361 -3.29607 0.01581 -3.29607 c 0.465629 0 0.142112 1.76004 0.142112 3.28855"];
      return;
  }

  //switch (_headModel) { }

  switch (_head) {
    case "SR":
      this.dp = p(-3.3389, 6.51849);
      this.paths = ["m 0 0 c 0 3.2179 -1.8796 6.5818 -3.8 6.5818 c -0.805259 0 -1.01498 -4.11278 -0.608665 -3.8782 c 0.449414 0.259469 0.83251 2.92944 1.06976 3.81488"];
      return;

    case "SW":
      this.dp = p(-3.64208, 6.57428);
      this.paths = ["m 0 0 c 0 3.2179 -1.8796 6.5818 -3.8 6.5818 c -0.805259 0 0.391541 -3.29908 0.844725 -3.17765 c 0.545041 0.146044 -0.218617 1.70871 -0.686805 3.17013"];
      return;
  }

  this.dp = p(-3.64208, 6.57428);
  this.paths = ["m 0 0 c 0 3.2179 -1.8796 6.5818 -3.8 6.5818 c -0.805259 0 -0.453361 -3.29607 0.01581 -3.29607 c 0.465629 0 0.142112 1.76004 0.142112 3.28855"];
};

WasedaHui = function() { WasedaChar.call(this, "WasedaHui", "ふい", "SEL8ONL4", "SEL", "SELONL", "black", false, p(0.0, -3.0)); };
WasedaHui.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ふい"] = WasedaHui;

WasedaHui.prototype.setPaths = function() {
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

  this.dp = p(4.04801, 5.97662);
  this.paths = ["m 0 0 c 0 3.7764 2.07274 5.9798 4.18711 5.9798 c 0.524011 0 0.801811 -3.33334 0.05503 -3.33334 c -0.443871 0 -0.452393 2.25413 -0.194127 3.33017"];
};

WasedaRui = function() { WasedaChar.call(this, "WasedaRui", "るい", "SER8N4", "SER", "N", "black", false, p(0.0, -3.5)); };
WasedaRui.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["るい"] = WasedaRui;

WasedaRui.prototype.setPaths = function() {
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

  this.dp = p(4.28052, 2.90561);
  this.paths = ["m 0 0 c 2.26387 1.5852 4.28052 4.58347 4.28052 6.90561 v -4"];
};

WasedaToi = function() { WasedaChar.call(this, "WasedaToi", "とい", "SW8F", "SW", "SWF", "black", false, p(2.7, -3.8)); };
WasedaToi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["とい"] = WasedaToi;
WasedaChar.dict["たら"] = WasedaToi;
WasedaChar.dict["たり"] = WasedaToi;

WasedaToi.prototype.setPaths = function() {
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

  this.dp = p(-2.73616, 7.5176).pmove(2, 110);
  this.paths = ["m 0 0 l -2.73616 7.5176"];
};

WasedaYoi = function() { WasedaChar.call(this, "WasedaYoi", "よい", "NER4CR1", "NER", "NERCR", "black", false, p(0.0, 1.4)); };
WasedaYoi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["よい"] = WasedaYoi;

WasedaYoi.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _headModel) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _headModel) {}

  //switch (model_ + "_" + _head) {}

  switch (model_) {
    case "S4CR1":
      this.dp = p(3.01829, -2.59377);
      this.paths = ["m 0 0 c 0.502296 -0.71735 2.46969 -2.66642 3.33103 -2.65362 c 0.29262 0 0.56169 0.250973 0.570123 0.493886 c 0.010533 0.303313 -0.362267 0.561192 -0.667592 0.65908 c -0.176176 0.056483 -0.460167 0.072514 -0.551885 -0.079858 c -0.201679 -0.335055 0.268051 -0.754453 0.336609 -1.01325"];
      return;
  }

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

  switch (_headModel) {
    case "ER16":
      this.dp.set(3.60055, -2.53029);
      this.paths = ["m 0 0 c 0.571351 -2.05731 2.01807 -2.84123 2.82843 -2.82843 c 0.435292 0 0.65908 0.046464 0.772117 0.298136 c 0.221786 0.493797 -0.210739 1.05915 -0.641175 1.21815 c -0.287802 0.106311 -0.831953 -0.034288 -0.855245 -0.340212 c -0.043902 -0.576648 0.798139 -0.651048 1.49642 -0.877941"];
      return;
  }

  switch (_head) {
    case "NER":
      this.dp = p(2.58995, -2.81139);
      this.paths = ["m 0 0 c 0.571351 -2.05731 2.01807 -2.84123 2.82843 -2.82843 c 0.2753 0 0.528622 0.250966 0.536378 0.493884 c 0.010575 0.331228 -0.37502 0.830694 -0.686925 0.718715 c -0.376091 -0.135023 -0.219485 -0.841699 -0.087932 -1.19556"];
      return;

    case "SEL":
      this.dp = p(2.35967, -2.76139);
      this.paths = ["m 0 0 c 0.571351 -2.05731 2.01807 -2.84123 2.82843 -2.82843 c 0.2753 0 0.528444 0.250972 0.536378 0.493884 c 0.00991 0.303312 -0.159306 0.656304 -0.3959 0.628121 c -0.290996 -0.034664 -0.595849 -0.535595 -0.609237 -1.05496"];
      return;

    case "EL":
      this.dp = p(1.39167, -2.24572);
      this.paths = ["m 0 0 c 0.571351 -2.05731 2.01807 -2.84123 2.82843 -2.82843 c 0.2753 0 0.528444 0.250972 0.536378 0.493884 c 0.00991 0.303312 -0.184374 0.377916 -0.48701 0.400453 c -0.523669 0.038999 -1.05041 -0.126443 -1.48613 -0.311623"];
      return;

    case "E":
      this.dp = p(1.24712, -2.12302);
      this.paths = ["m 0 0 c 0.571351 -2.05731 2.04611 -2.91132 2.85647 -2.89852 c 0.2753 0 0.450113 0.183786 0.403895 0.357552 c -0.176174 0.662359 -1.21423 0.430198 -2.01324 0.417945"];
      return;
  }

  this.dp = p(2.65416, -2.82477);
  this.paths = ["m 0 0 c 0.571351 -2.05731 2.01807 -2.84123 2.82843 -2.82843 c 0.2753 0 0.528444 0.250972 0.536378 0.493884 c 0.00991 0.303312 -0.340825 0.56119 -0.628078 0.659078 c -0.165748 0.056483 -0.43293 0.072514 -0.519219 -0.079858 c -0.189742 -0.335054 0.372153 -0.81064 0.436653 -1.06944"];
};

WasedaRoi = function() { WasedaChar.call(this, "WasedaRoi", "ろい", "SER8F", "SER", "SERF", "black", false, p(0.0, -3.5)); };
WasedaRoi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ろい"] = WasedaRoi;

WasedaRoi.prototype.setPaths = function() {
  this.dp = p(4, 6.9282).pmove(2, 110);
  this.paths = ["m 0 0 c 2.26387 1.5852 5.22323 4.8095 4 6.9282"];

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

  switch (_headModel) {
    case "NER16":
      this.dp.move(0, 2);
      return;
  }

  //switch (_head) {}
};

WasedaReki = function() { WasedaChar.call(this, "WasedaReki", "れき", "SER8NWR4", "SER", "NWR", "black", false, p(0.0, -3.8)); };
WasedaReki.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["れき"] = WasedaReki;

WasedaReki.prototype.setPaths = function() {
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

  switch (_head) {
    case "E":
      this.dp = p(2.95674, 7.63097);
      this.paths = ["m 0 0 c 1.73821 1.00353 5.19185 4.99214 4.03635 6.97994 c -0.665037 1.1442 -1.95848 0.456122 -2.44203 0.02699 c -0.363908 -0.322953 -1.47657 -1.73475 -0.918572 -2.10235 c 0.5089 -0.3353 1.6681 1.776 2.281 2.7264"];
      return;
  }

  this.dp = p(0.32768, 5.2363);
  this.paths = ["m 0 0 c 1.69721 1.00814 5.70309 5.43936 3.75222 7.3405 c -0.965307 0.940698 -3.05806 -0.697036 -3.42454 -2.10421"];
};

WasedaReki = function() { WasedaChar.call(this, "WasedaReki", "れき", "SER8ONWR4", "SER", "SERONWR", "black", false, p(0.0, -3.8)); };
WasedaReki.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["レキ"] = WasedaReki;

WasedaReki.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

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

  switch (_headModel) {
    case "EL8":
      this.dp = p(3.73261, 7.35134);
      this.paths = ["m 0 0 c 1.73821 1.00353 5.19185 4.99214 4.03635 6.97994 c -0.665037 1.1442 -1.95848 0.456122 -2.44203 0.02699 c -0.363908 -0.322953 -1.39953 -1.27251 -0.841531 -1.64011 c 0.278821 -0.07471 2.07379 1.54259 2.97982 1.98452"];
      return;
  }

  switch (_head) {
    case "SR":
      this.dp = p(3.79931, 6.10581);
      this.paths = ["m 0 0 l 4.58861 6.55322 l -0.789299 -0.447408"];
      return;

    case "E":
      this.dp = p(2.95674, 7.63097);
      this.paths = ["m 0 0 c 1.73821 1.00353 5.19185 4.99214 4.03635 6.97994 c -0.665037 1.1442 -1.95848 0.456122 -2.44203 0.02699 c -0.363908 -0.322953 -1.47657 -1.73475 -0.918572 -2.10235 c 0.5089 -0.3353 1.6681 1.776 2.281 2.7264"];
      return;
  }

  this.dp = p(2.95674, 7.63097);
  this.paths = ["m 0 0 c 1.73821 1.00353 5.19185 4.99214 4.03635 6.97994 c -0.665037 1.1442 -1.95848 0.456122 -2.44203 0.02699 c -0.363908 -0.322953 -1.47657 -1.73475 -0.918572 -2.10235 c 0.5089 -0.3353 1.6681 1.776 2.281 2.7264"];
};

WasedaTeki = function() {
  WasedaChar.call(this, "WasedaTeki", "てき", "P", "P", "P", "black", false, p(0.0, 0.0));
  this.thickness = 0.6;
};
WasedaTeki.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["てき"] = WasedaTeki;

WasedaTeki.prototype.setPaths = function() {
  this.dp = p(0, 0);
  if (this.getPrevTailType() != "" && this.getNextHeadType() != "" && this.getNextHeadType() != "P") {
    this.paths = [];
  } else {
    this.paths = ["m0,0v0.1"];
  }

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  switch (model_ + "_" + _head) {
    case "OSEL4_EL":
      this.pdp.set(0.1, 4.2);
      return;
  }

  //switch (tailModel_) {}

  switch (model_) {
    case "SWL16F":
      this.pdp.set(-2, 0);
      return;

    case "SL8ONEL4":
      this.pdp.set(-0.8, 1.8);
      return;

    case "NEL8CL1":
      this.pdp.pset(2.0, 106.9);
      return;

    case "E8CL4":
      this.pdp.set(1.9, 1.8);
      return;

    case "SW8CR1":
      this.pdp.set(-2.1, 3.3);
      return;

    case "ER8CR4":
      this.pdp.set(1.7, 3.8);
      return;

    case "SEL8CL4":
      this.pdp.set(-0.3, 2.9);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
  }

  if (tail_.endsWith("F")) {
  }

  switch (tail_) {
    case "SECR":
      this.pdp = pp(3, 120);
      return;

    case "ECL":
      this.pdp = pp(2, 120).move(0.5, 0);
      return;

    case "E":
    case "S":
    case "SW":
      this.pdp = pp(2, 135);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "SER":
    case "NEL":
    case "NE":
    case "NER":
    case "SW":
      this.dp = p(2, 0.1);
      return;

    case "E":
    case "EL":
      this.dp = p(0, -2);
      return;
  }
};

WasedaKeki = function() { WasedaChar.call(this, "WasedaKeki", "けき", "TSE4CR1", "TSE", "SECR", "black", false, p(0.0, -1.7)); };
WasedaKeki.prototype = Object.create(WasedaEi.prototype);
WasedaChar.dict["けき"] = WasedaKeki;
WasedaChar.dict["げき"] = WasedaKeki;
WasedaKeki.prototype.setPaths = function() {
  WasedaEi.prototype.setPaths.call(this);

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
    case "ER":
      this.pdp.set(-0.7, -2.0);
      return;

    case "SLCL":
      this.pdp.set(-0.2, -2.4);
      return;

    case "NEF":
      this.pdp.pset(2, -135);
      return;

    case "ECL":
      this.pdp = p(-0.2, -2.2);
      return;

    case "SELCL":
      this.pdp = p(0.1, -2.3);
      return;

    case "E":
      this.pdp = pp(2, -135);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
};

WasedaLtsuteki = function() { WasedaChar.call(this, "WasedaLtsuteki", "ってき", "XSE2NE2", "XSE", "NE", "black", false, p(0.0, -1.1)); };
WasedaLtsuteki.prototype = Object.create(WasedaLtsusuru.prototype);
WasedaChar.dict["ってき"] = WasedaLtsuteki;
WasedaLtsuteki.prototype.setPaths = function() {
  this.dp = p(2.57373, 0.3357);
  this.paths = ["m 0 0 l 1.34281 2.23802 l 1.23091 -1.90232"];

  //const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  //switch (name_) {}

  switch (model_ + "_" + _name) {
    case "SEL8CL1_WasedaSuru":
      this.pdp.set(-4.5, -3);
      this.dp.pmove(3, 30);
      return;
  }

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (tailModel_) {}

  switch (model_) {
    case "SEL8CL1":
      this.pdp.set(-4.5, -3);
      return;

    case "SEL8":
      this.pdp.set(-5, -3);
      return;
  }

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
};

WasedaShii = function() { WasedaChar.call(this, "WasedaShii", "しい", "SWL4F", "SWL", "SWLF", "black", false, p(1.9, -1.6)); };
WasedaShii.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["しい"] = WasedaShii;
WasedaChar.dict["ひい"] = WasedaShii;

WasedaShii.prototype.setPaths = function() {
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

  switch (tail_) {
    case "NEL":
      this.dp = p(-1.40117, 3.74656).pmove(2, 90);
      this.paths = ["m 0 0 c -0.509715 0.882852 -1.69308 2.65712 -1.40117 3.74656"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(-2.47686, 3.18136).move(0, 2);
  this.paths = ["m 0 0 c -1.00475 0.604918 -2.76877 2.09192 -2.47686 3.18136"];

//  this.dp = p(-1.91577, 3.2515).move(0, 2);
//  this.paths = ["m 0 0 c -1.00475 0.604918 -1.91577 2.17241 -1.91577 3.2515"];
};

WasedaShiku = function() { WasedaChar.call(this, "WasedaShiku", "しく", "SWL8F", "SWL", "SWLF", "black", false, p(4.3, -3.5)); };
WasedaShiku.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["しく"] = WasedaShiku;
WasedaChar.dict["ヒク"] = WasedaShiku;
WasedaChar.dict["しゅく"] = WasedaShiku;

WasedaShiku.prototype.setPaths = function() {
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

  switch (tail_) {
    case "EL":
      this.dp = p(-2.4825, 7.60508).pmove(2, 120);
      this.paths = ["m 0 0 c -1.28894 2.23251 -3.63214 5.61383 -2.4825 7.60508"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp = p(-4.25674, 6.92819).move(0, 2);
  this.paths = ["m 0 0 c -2.23251 1.28894 -4.25674 4.62889 -4.25674 6.92819"];
};

WasedaShiki = function() { WasedaChar.call(this, "WasedaShiki", "しき", "SWL16F", "SWL", "SWLF", "black", false, p(6.9, -7.3)); };
WasedaShiki.prototype = Object.create(WasedaPu.prototype);
WasedaChar.dict["しき"] = WasedaShiki;
WasedaChar.dict["しき"] = WasedaShiki;
WasedaChar.dict["ひき"] = WasedaShiki;
WasedaShiki.prototype.setPaths = function() {
  this.dp = p(-6.76189, 14.5009);
  this.paths = ["m 0 0 c -3.2552 3.2552 -7.65129 11.1816 -6.76189 14.5009"];
  this.dp.move(0, 2);

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
    case "NELCL4":
    case "NELCL8":
    case "ECL":
    case "NEL":
      this.dp = p(-5.13223, 15.1545).pmove(2, 80);
      this.paths = ["m 0 0 c -2.30177 3.98679 -6.02162 11.8352 -5.13223 15.1545"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}
};

WasedaRepeat = function() {
  WasedaChar.call(this, "WasedaRepeat", "々", "P/X", "P/X", "P/X", "black");
  this.thickness = 0.6;
};
WasedaRepeat.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["々"] = WasedaRepeat;

WasedaRepeat.prototype.setPaths = function() {
  this.pdp.pset(2.5, 135);
  if (this.getNextHeadType() == "") {
    this.paths = ["m0,0v0.1"];
  } else {
    this.paths = [];
  }

  const name_ = this.getPrevName();
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

  switch (name_) {
    case "WasedaSei":
      this.pdp.pset(3, 110);
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (tailModel_) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {}

  switch (tail_) {
    case "NECL":
      this.pdp.set(-0.6, 1.5);
      return;

    case "NERCR":
      this.pdp.set(-1, 2);
      return;

    case "NEL":
      this.pdp.pset(3, 100);
      return;

    case "NELCL4":
      this.pdp.pset(2, 110);
      return;

    case "SER":
      this.pdp.pset(2, 120);
      return;

    case "SERCR":
      this.pdp.pset(4, 120);
      return;

    case "NE":
      this.pdp.pset(2, 110);
      return;

    case "ERCR":
      this.pdp.set(-1.5, 2.5);
      return;

    case "ECL":
      this.pdp.set(-1, 2);
      return;

    case "SCR":
      this.pdp.pset(4, 125);
      return;

    case "SWCR":
      this.pdp.pset(4.5, 135);
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.dp.set(0, 0);
};

WasedaOruP = function() { WasedaChar.call(this, "WasedaOruP", "おるｐ", "P/X", "P/X", "P/X", "black"); };
WasedaOruP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["おるｐ"] = WasedaOruP;

WasedaOruP.prototype.setPaths = function() {
  this.pdp.set(2, 0);

  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  //const _name = this.getNextName();
  //const _model = this.getNextModel();
  //const _headModel = this.getNextHeadModel();
  //const _head = this.getNextHeadType();

  //switch (name_ + "_" + _name) {}

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "WasedaTeJoshi":
      this.pdp.set(4, 0);
      return;
  }

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

  //switch (_head) {}
};
WasedaChar.dict["おる"] = [WasedaOruP, WasedaO];

WasedaStart = function() { WasedaChar.call(this, "WasedaStart", "書き始め", "SW_SW", "-", "-", "black", false, p(12.0, -15)); };
WasedaStart.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["//"] = WasedaStart;
WasedaChar.dict["始"] = WasedaStart;

WasedaStart.prototype.setPaths = function() {
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

  this.dp.set(-11.2457, 17.8224).pmove(10, -20);
  this.paths = ["m 0 0 c -3.94692 5.51898 -8.00733 11.0194 -12.0483 15.7267", "m 0.4328 1.9824 c -3.25878 5.9322 -7.53538 10.6782 -11.6785 15.84"];
};

WasedaEnd = function() { WasedaChar.call(this, "WasedaEnd", "〆", "@", "@", "@", "black", false, p(11.2, 8)); };
WasedaEnd.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["〆"] = WasedaEnd;

WasedaEnd.prototype.setPaths = function() {
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

  this.dp.set(-8.15859, 8.21814);
  this.paths = ["m 0 0 c -1.14464 2.81038 -3.41151 5.36571 -8.03949 7.38442", "m -5.07155 1.95107 c 1.77245 0.87953 3.09959 2.01352 3.76141 3.52769", "m -10.8384 8.5159 c -2.26148 -6.99644 5.8399 -12.1312 11.1362 -11.4935 c 2.2613 0.27227 4.15114 3.72731 3.454 5.89562 c -1.33007 4.13691 -6.86799 8.73926 -11.9103 5.30011"];
};

WasedaRitsu = function() { WasedaChar.call(this, "WasedaRitsu", "りつ", "S8F", "S", "SF", "black", false, p(0.0, -4.0)); };
WasedaRitsu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["りつ"] = WasedaRitsu;

WasedaRitsu.prototype.setPaths = function() {
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

  this.dp.set(0, 8).move(0, 2);
  this.paths = ["m 0 0 v 8"];
};

WasedaTadeshou = function() { WasedaChar.call(this, "WasedaTadeshou", "たでしょう", "SW8", "SW", "SWOWL", "black", false, p(6.0, -4.0)); };
WasedaTadeshou.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["たでしょう"] = WasedaTadeshou;

WasedaTadeshou.prototype.setPaths = function() {
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

  this.dp.set(-2.64991, 7.25354);
  this.paths = ["m 0 0 l -2.73616 7.5176 c -0.21016 0.64344 -2.91292 0.521997 -3.2766 0.088495 c -0.316661 -0.377456 2.97984 -0.352558 3.36285 -0.352558"];
};

WasedaChan = function() { WasedaChar.call(this, "WasedaChan", "ちゃん", "NE8NE1F", "NE", "NEF", "black", false, p(0.0, 3.0)); };
WasedaChan.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ちゃん"] = WasedaChan;

WasedaChan.prototype.setPaths = function() {
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

  this.dp.set(7.08312, -6.0722).pmove(2, -66);
  this.paths = ["m 0 0 l 6.47213 -4.70228 l 0.610987 -1.36992"];
};

WasedaKagi = function() { WasedaChar.call(this, "WasedaKagi", "かぎ", "B", "B", "B", "black", false, p(0, 0)); };
WasedaKagi.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["かぎ"] = WasedaKagi;
WasedaChar.dict["あく"] = [WasedaKagi, WasedaA];
WasedaChar.dict["いく"] = [WasedaKagi, WasedaI];
WasedaChar.dict["うく"] = [WasedaKagi, WasedaU];
WasedaChar.dict["えく"] = [WasedaKagi, WasedaE];
WasedaChar.dict["おく"] = [WasedaKagi, WasedaO];
WasedaChar.dict["かく"] = [WasedaKagi, WasedaKa];
WasedaChar.dict["きく"] = [WasedaKagi, WasedaKi];
WasedaChar.dict["くく"] = [WasedaKagi, WasedaKu];
WasedaChar.dict["けく"] = [WasedaKagi, WasedaKe];
WasedaChar.dict["こく"] = [WasedaKagi, WasedaKo];
WasedaChar.dict["さく"] = [WasedaKagi, WasedaSa];
//WasedaChar.dict["しく"] = [WasedaKagi, WasedaShi];
WasedaChar.dict["すく"] = [WasedaKagi, WasedaSu];
WasedaChar.dict["せく"] = [WasedaKagi, WasedaSe];
WasedaChar.dict["そく"] = [WasedaKagi, WasedaSo];
WasedaChar.dict["たく"] = [WasedaKagi, WasedaTa];
WasedaChar.dict["ちく"] = [WasedaKagi, WasedaChi];
WasedaChar.dict["つく"] = [WasedaKagi, WasedaTsu];
WasedaChar.dict["てく"] = [WasedaKagi, WasedaTe];
WasedaChar.dict["とく"] = [WasedaKagi, WasedaTo];
WasedaChar.dict["なく"] = [WasedaKagi, WasedaNa];
WasedaChar.dict["にく"] = [WasedaKagi, WasedaNi];
WasedaChar.dict["ぬく"] = [WasedaKagi, WasedaNu];
WasedaChar.dict["ねく"] = [WasedaKagi, WasedaNe];
WasedaChar.dict["のく"] = [WasedaKagi, WasedaNo];
WasedaChar.dict["はく"] = [WasedaKagi, WasedaHa];
WasedaChar.dict["ひく"] = [WasedaKagi, WasedaHi];
WasedaChar.dict["ふく"] = [WasedaKagi, WasedaHu];
WasedaChar.dict["フク"] = [WasedaKagi, WasedaFu];
WasedaChar.dict["へく"] = [WasedaKagi, WasedaHe];
WasedaChar.dict["ほく"] = [WasedaKagi, WasedaHo];
WasedaChar.dict["まく"] = [WasedaKagi, WasedaMa];
WasedaChar.dict["みく"] = [WasedaKagi, WasedaMi];
WasedaChar.dict["むく"] = [WasedaKagi, WasedaMu];
WasedaChar.dict["めく"] = [WasedaKagi, WasedaMe];
WasedaChar.dict["もく"] = [WasedaKagi, WasedaMo];
WasedaChar.dict["やく"] = [WasedaKagi, WasedaYa];
WasedaChar.dict["ゆく"] = [WasedaKagi, WasedaYu];
WasedaChar.dict["よく"] = [WasedaKagi, WasedaYo];
WasedaChar.dict["らく"] = [WasedaKagi, WasedaRa];
WasedaChar.dict["りく"] = [WasedaKagi, WasedaRi];
WasedaChar.dict["るく"] = [WasedaKagi, WasedaRu];
WasedaChar.dict["れく"] = [WasedaKagi, WasedaRe];
WasedaChar.dict["ろく"] = [WasedaKagi, WasedaRo];
WasedaChar.dict["わく"] = [WasedaKagi, WasedaWa];
WasedaChar.dict["きゃく"] = [WasedaKagi, WasedaKya];
WasedaChar.dict["きょく"] = [WasedaKagi, WasedaKyo];
WasedaChar.dict["しゃく"] = [WasedaKagi, WasedaSha];
WasedaChar.dict["しょく"] = [WasedaKagi, WasedaSho];
WasedaChar.dict["ちゃく"] = [WasedaKagi, WasedaCha];
WasedaChar.dict["ちょく"] = [WasedaKagi, WasedaCho];
WasedaChar.dict["ひゃく"] = [WasedaKagi, WasedaHya];
WasedaChar.dict["ぷく"] = [WasedaKagi, WasedaPu];

WasedaKagi.prototype.setPaths = function() {
  this.offset = this.getNextOffset();
  this.headType = "B" + this.getNextHeadType();
  this.tailType = this.getPrevTailType() + "B";
  this.model = "B" + this.getNextModel();

  const name_ = this.getPrevName();
  const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _headModel = this.getNextHeadModel();
  const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) {
    case "WasedaLtsuP_WasedaTo":
      this.tailType = "TO_HENKI";
      this.pdp.set(-4, -0.5);
      this.dp.set(1.23763, -1.0123);
      this.paths = ["m 0 0 c 0.36502 -0.0978 0.92793 -0.3386 1.23763 -1.0123"];
      return;

    case "WasedaTo_WasedaCho":
      this.pdp.set(0.7, -1.3);
      return;
  }

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _headModel) {
  }

  switch (name_ + "_" + _head) {
  }

  //switch (name_) {}

  switch (model_ + "_" + _name) {
  }

  //switch (model_ + "_" + _model) {}

  switch (model_ + "_" + _headModel) {
    case "SL8ONEL4_NE8":
      return;

    case "SE4CR1_NEL16":
      return;

    case "NER8CR1_UWL4":
      return;

    case "SEL8_EL4":
      this.pdp.set(-1.4, -0.6);
      return;

    case "NEL16CL8_NER16":
      return;
      
    case "UER4CR1_NEL8":
      return;

    case "ER4_NEL16":
      this.pdp.set(-1.3, 0.7);
      return;

    case "NER8_NEL16":
      this.pdp.set(0.1, 1.5);
      return;

    case "NER8_SWR16":
      this.pdp.set(0.1, -1.5);
      return;

    case "SL8ONEL4_NEL16":
      return;
  }

  switch (model_ + "_" + _head) {
    case "SWL8F_NE":
      this.pdp.set(-1, 1);
      return;

    case "SER16_NE":
      this.pdp.set(-1.3, 1.6);
      return;

    case "E8CL1E1F_E":
      this.pdp.set(-4.0, -2);
      return;

    case "NE8OWL4_SWR":
      this.pdp.set(0.3, -1.5);
      this.dp.set(0, 0);
      this.paths = [];
      return;

    case "NER16_E":
      this.pdp.set(-4, 0);
      return;

    case "SER8OWR4_NER":
      this.pdp.set(-0.7, 1.6);
      return;

    case "SEL8_E":
      this.pdp.set(-3, 0);
      return;

    case "SEL8CL1E1F_ER":
      this.pdp.set(-5, -2);
      return;

    case "NEL16CL8_NEL":
      this.pdp.set(-4.2, -5.0);
      return;

    case "NEL16CL8_E":
      this.pdp.set(-2.9, -7.1);
      return;

    case "UWL4_E":
      this.pdp.set(-3.5, 0);
      return;

    case "SL8CL1_E":
      return;

    case "SE4_SR":
      this.pdp.set(-0.8, -1.6);
      return;

    case "UWL4_NER":
      this.pdp.set(-0.6, 1.4);
      return;

    case "ER4_E":
      this.pdp.set(-1.5, 0);
      return;

    case "ER4_NER":
      this.pdp.set(-0.6, 1.4);
      return;

    case "E8CL4_SEL":
      this.pdp.set(3.6, -3.5);
      return;

    case "NEL8CL1_E":
      this.pdp.set(1.77746, -1.30948);
      this.dp.set(-1.77746, 1.30948);
      return;

    case "CR4_E":
      this.pdp.set(-2, 0);
      return;

    case "CR4_NE":
      this.pdp.set(-0.4, 1.0);
      return;
  }

  //switch (model_) {}

  //switch (tailModel_ + "_" + _name) {}

  //switch (tailModel_ + "_" + _model) {}

  //switch (tailModel_ + "_" + _headModel) {}

  //switch (tailModel_ + "_" + _head) {}

  //switch (tailModel_) {}

  switch (tail_ + "_" + _name) {
    case "NEF_WasedaCha":
      this.tailType = "CHA_HENKI";
      this.pdp.set(1, -2);
      return;

    case "NE_WasedaSho":
    case "NEF_WasedaSho":
      this.pdp.set(0, -1);
      return;
  }

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _headModel) {
    case "NEF_NEL16":
      return;

    case "NE_NEL16":
      return;

    case "NE_SW8":
      return;

    case "S_ER8":
      this.pdp.set(-1.5, 0.5);
      return;

    case "S_NEL8":
      this.pdp.set(-1.2, 0.9);
      return;

    case "NEF_EL4":
      this.pdp.set(-2.5, -0.5);
      return;

    case "SWRCR_NER8":
      return;

    case "NER_NER8":
      this.pdp.set(-0.6, 1.4);
      return;

    case "SLONEL_SR8":
      this.pdp.set(2.5, -3.0);
      return;

    case "E_ER8":
      this.pdp.set(-1.4, 0.5);
      return;

    case "NW_NEL16":
      this.pdp.set(-1.6, 1.1);
      return;

    case "SF_NER8":
      this.pdp.set(-0.8, 1.3);
      return;

    case "ECL_SER8":
      this.pdp.set(-0.1, -1.9);
      return;

    case "ECL4_SW8":
      this.pdp.set(4.2, -2.3);
      return;
  }

  switch (tail_ + "_" + _head) {
    case "NEF_SEL":
      this.pdp.set(-0.2, -1.8);
      return;

    case "E_SEL":
      this.pdp.set(-0.1, -1.5);
      return;

    case "NER_SEL":
      this.pdp.set(-0.0, -1.2);
      return;

    case "NECL_E":
      this.pdp.set(-1.7, -1.2);
      return;

    case "NE_E":
      this.pdp.set(-2, 0);
      return;

    case "E_SR":
      this.pdp.set(-0.7, -1.3);
      return;

    case "ELF_SL":
      this.pdp.set(1, -0.5);
      return;

    case "E_SER":
      this.pdp.set(-1.6, -1.3);
      return;

    case "SWCR_E":
      return;

    case "ERCR_E":
      return;

    case "SELF_E":
      this.pdp.set(-3, 0);
      return;

    case "SELCL_E":
      return;

    case "SLONEL_E":
      return;

    case "S_E":
      this.pdp.set(-1.5, 0);
      return;

    case "NW_E":
      this.pdp.set(-2, 0);
      return;

    case "NELCL_SW":
    case "ECL_SW":
    case "NELCL_NER":
    case "SWRCR_E":
      //this.pdp.pset(1.5, -60);
      return;

    case "ECL_E":
      this.dp.set(-1.3, -0.9);
      return;

    case "ECL_NER":
      return;

    case "NELCL_NEL":
      this.pdp.set(-2.0, -0.9);
      return;

    case "NEF_E":
      this.pdp.set(-3.0, -0.5);
      return;

    case "NELF_E":
      this.pdp.set(-2, 0);
      return;

    case "E_SW":
      this.pdp.pset(1.5, -70);
      return;

    case "SELF_NER":
      this.pdp.set(0, 3);
      return;

    case "NEF_SER":
      this.pdp.pset(2, -135);
      return;

    case "NEF_NEL":
      this.pdp.set(-3, 0);
      return;
  }

  //switch (tail_) {}

  switch (_name) {
    case "WasedaWa":
      this.dp.set(1.52493, 0.13784);
      this.paths = ["m 0 0 c 0.48146 0.44008 0.930722 0.326 1.52493 0.13784"];
      return;
  }

  //switch (_model) {}

  //switch (_headModel) {}

  switch (_head) {
    case "SE":
      this.dp.set(-0.1507, -1.4251);
      this.pdp.set(0.1507, 1.4251);
      this.paths = ["m 0 0 c 0.2335 -0.3923 0.3426 -0.9184 -0.1507 -1.4251"];
      return;

    case "SWL":
      this.dp.set(1.52514, -0.13547);
      this.pdp.set(-1.52514, 0.13547);
      this.paths = ["m 0 0 c 0.551862 0.34774 0.973854 0.15533 1.52514 -0.13547"];
      return;

    case "NE":
      this.dp.set(-0.65718, 2.108);
      this.pdp.set(0.65718, -2.108);
      this.paths = ["m 0 0 c 0.41871 0.57 -0.07736 1.682 -0.65718 2.108"];
      return;

    case "NEL":
      this.dp.set(-0.6689, 1.544);
      this.pdp.set(0.6689, -1.544);
      this.paths = ["m 0 0 c 0.202 0.678 -0.3671 1.225 -0.6689 1.544"];
      return;

    case "SR":
      this.dp.set(0.0803, -1.683);
      this.paths = ["m 0 0 c 0.1602 -0.359 0.4582 -1.008 0.0803 -1.683"];
      return;

    case "SL":
      this.dp.set(1.34906, -0.72418);
      this.paths = ["m 0 0 c 0.644138 0.10277 0.956501 -0.24005 1.34906 -0.72418"];
      return;

    case "SER":
      this.dp.set(-0.612953, -1.57022);
      this.paths = ["m 0 0 c 0 -0.393 0.00756 -1.10722 -0.612953 -1.57022"];
      return;

    case "ER":
      this.dp.set(-1.08213, 1.28841);
      this.pdp.set(1.08213, -1.28841);
      this.paths = ["m 0 0 c 0 0.70722 -0.701658 1.06874 -1.08213 1.28841"];
      return;

    case "SW":
      this.dp.set(1.23763, -1.0123);
      this.paths = ["m 0 0 c 0.36502 -0.0978 0.92793 -0.3386 1.23763 -1.0123"];
      return;

    case "EL":
      this.dp.set(-0.84264, -1.4497);
      this.pdp.set(0.84264, 1.4497);
      this.paths = ["m 0 0 c 0 -0.3809 -0.16894 -1.14 -0.84264 -1.4497"];
      return;

    case "NER":
      this.dp.set(0.404, 1.4381);
      this.paths = ["m 0 0 c 0.4197 0.2424 0.5831 0.7697 0.404 1.4381"];
      return;

    case "S":
    case "SEL":
      this.dp.set(1.12919, -1.30948);
      this.pdp.set(-1.12919, 1.30948);
      this.paths = ["m 0 0 c 0.441044 -0.11818 1.12919 -0.60226 1.12919 -1.30948"];
      return;

    case "E":
      this.pdp.set(1.77746, -1.30948);
      this.dp.set(-1.77746, 1.30948);
      this.paths = ["m 0 0 c 0 0.70722 -1.05799 1.30948 -1.77746 1.30948"];
      return;
  }

  this.pdp.set(1.77746, -1.30948);
  this.dp.set(-1.77746, 1.30948);
  this.paths = ["m 0 0 c 0 0.70722 -1.05799 1.30948 -1.77746 1.30948"];
};

WasedaNetsu = function() { WasedaChar.call(this, "WasedaNetsu", "ねつ", "CL1EL16CL1", "CLEL", "ELCL", "black", false, p(1.2, -0.0)); };
WasedaNetsu.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["ねつ"] = WasedaNetsu;

WasedaNetsu.prototype.setPaths = function() {
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

  this.dp.set(14.2639, 0.509705);
  this.paths = ["m 0 0 c 0.336651 -0.832571 -0.633634 -1.22159 -1.01283 -0.954388 c -0.251489 0.177216 -0.397112 0.712857 0.37011 0.845511 c 4.33463 0.749465 15.3266 2.32717 15.3266 -0.104418 c 0 -0.211 -0.054 -0.418 -0.182 -0.56 c -0.12 -0.148 -0.291 -0.251 -0.493 -0.251 c -0.764 0 -0.074 0.964 0.255 1.534"];
};

WasedaToku = function() { WasedaChar.call(this, "WasedaToku", "とく", "BNE4", "B", "NE", "black", false, p(0.7, -1.0)); };
WasedaToku.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["トク"] = WasedaToku;

WasedaToku.prototype.setPaths = function() {
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

  this.dp.set(2.61948, -0.1863);
  this.paths = ["m 0 0 c 0.41871 0.57 -0.07736 1.682 -0.65718 2.108 l 3.27666 -2.2943"];
};


WasedaPaku = function() { WasedaChar.call(this, "WasedaPaku", "ぱく", "SWL4SWR4", "SWL", "SWR", "black", false, p(4.7, -3.3)); };
WasedaPaku.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["パク"] = WasedaPaku;

WasedaPaku.prototype.setPaths = function() {
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

  this.dp.set(-4.68585, 6.51608);
  this.paths = ["m 0 0 c -1.00475 0.604918 -2.61097 2.06149 -2.47686 3.18136 c 0.1603 1.33858 -0.949482 2.99724 -2.20899 3.33472"];
};

WasedaHatarakuP = function() { WasedaChar.call(this, "WasedaHatarakuP", "働ｐ", "P/X", "P/X", "P/X", "black"); };
WasedaHatarakuP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["働"] = [WasedaHa, WasedaHatarakuP];

WasedaHatarakuP.prototype.setPaths = function() {
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

  //switch (_head) {}

  this.pdp.set(-1, -3);
};

WasedaOmoidasuP = function() { WasedaChar.call(this, "WasedaOmoidasuP", "思い出ｐ", "P/X", "P/X", "P/X", "black"); };
WasedaOmoidasuP.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["思い出ｐ"] = WasedaOmoidasuP;
WasedaChar.dict["思い出"] = [WasedaO, WasedaMoJoshi, WasedaOmoidasuP];

WasedaOmoidasuP.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
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

  //switch (tail_) {}

  switch (_name) {
    case "WasedaShite":
      this.pdp.set(3, -5.2);
      return;

    case "WasedaShita":
      this.pdp.set(3, -5.2);
      return;

    case "WasedaSareP":
      this.pdp.set(2, -10);
      return;
  }

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  this.pdp.set(-0.3, -1.2);
};

WasedaChoku = function() { WasedaChar.call(this, "WasedaChoku", "チョク", "NE4OWL4", "NE", "NEOWL", "black", false, ); };
WasedaChoku.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["チョク"] = WasedaChoku;

WasedaChoku.prototype.setPaths = function() {
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

  switch (_headModel) {
    case "ER16":
      this.dp.set(3.4641, -2);
      this.paths = ["m 0 0 l 3.4641 -2 c 0.981082 -0.566428 -0.358764 -0.525761 -1.73521 -0.29796 c -1.41924 0.234882 -2.39385 1.59306 -1.45936 1.29156 c 1.08483 -0.350009 2.02287 -0.612879 3.19457 -0.9936"];
      return;

    case "SR8":
      this.dp.set(3.23253, -1.8663);
      this.paths = ["m 0 0 l 3.4641 -2 c 0.981082 -0.566428 0.921809 -0.939727 -0.397093 -1.29313 c -0.888637 -0.238109 -2.35364 -0.352747 -1.70884 0.033222 c 0.549476 0.32891 1.51978 0.882896 1.87437 1.3936"];
      return;
  }

  //switch (_head) {}

  this.dp.set(3.4641, -2);
  this.paths = ["m 0 0 l 3.4641 -2 c 0.981082 -0.566428 -1.00708 -0.635543 -2.38508 -0.417343 c -0.906 0.1598 -2.24591 0.820114 -1.26773 0.738864 c 1.14474 -0.095085 2.49681 -0.228521 3.65281 -0.321521"];
};

WasedaPracticeAR = function() { WasedaChar.call(this, "WasedaPracticeAR", "練習A右回り", "CR20", "CR", "CR", "black", false, ); };
WasedaPracticeAR.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["練習A右"] = WasedaPracticeAR;

WasedaPracticeAR.prototype.setPaths = function() {
  //const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tailModel_ = this.getPrevTailModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
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

  switch (_name) {
    case "CharSpace":
    case "":
      this.dp.set(14.2987, 0.751127);
      this.paths = ["m 0 0 c -2.04827 -5.013 0.169589 -10.7942 5.1485 -10.8028 c 7.55041 -0.01304 14.1201 5.06249 9.15017 11.5539"];
      return;
  }

  //switch (_model) {}

  //switch (_headModel) {}

  //switch (_head) {}

  switch (Math.floor(Math.random() * 4)) {
    case 0:
      this.dp.set(3.3512, 0.0057);
      this.paths = ["m 0 0 c -2.04827 -5.013 0.1977 -10.2744 5.1485 -10.8028 c 4.4342 -0.4734 9.70425 2.92667 9.19583 6.68133 c -0.525213 3.87871 -6.87732 11.9396 -10.9931 4.12717"];
      return;

    case 1:
      this.dp.set(3.40448, -5e-06);
      this.paths = ["m 0 0 c -2.04828 -5.01306 2.08351 -10.3903 7.03428 -10.9188 c 4.43416 -0.473344 11.2281 0.47074 11.6433 6.53531 c 0.309146 4.51546 -1.92463 8.04004 -6.41757 8.58636 c -4.44383 0.540357 -7.52427 -1.65956 -8.85552 -4.20286"];
      return;

    case 2:
      this.dp.set(3.3512, 0.0057);
      this.paths = ["m 0 0 c -2.04827 -5.013 0.57676 -9.01087 5.52756 -9.53927 c 4.4342 -0.4734 9.85677 2.74355 9.44854 6.55497 c -0.706024 6.59172 -8.20809 8.39547 -11.6249 2.98999"];
      return;

    default:
      this.dp.set(3.3512, 0.0057);
      this.paths = ["m 0 0 c -2.04827 -5.013 0.1977 -10.2744 5.1485 -10.8028 c 4.4342 -0.4734 10.221 2.84119 9.19583 6.68133 c -1.98392 7.43159 -6.87732 11.9396 -10.9931 4.12717"];
      return;
  }
};

WasedaPracticeF = function() { WasedaChar.call(this, "WasedaPracticeF", "練習F", "-", "-", "-", "black", false, ); };
WasedaPracticeF.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["練習F"] = WasedaPracticeF;

WasedaPracticeF.prototype.setPaths = function() {
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

  this.dp.set(95.0889, 7.43326);
  this.paths = ["m 0 0 c 5.30372 -1.4661 9.3063 -4.16622 12.2263 -8.08316 c 1.27096 -1.7049 2.76517 -4.18424 1.85211 -6.10476 c -0.25426 -0.534809 -1.14346 -0.989571 -1.64403 -0.673192 c -1.92194 1.21474 -0.07148 4.55724 -0.374026 6.81067 c -0.343151 2.55588 -0.235392 5.39288 -1.62832 7.56314 c -2.05412 3.20044 -5.60263 8.22516 -9.13971 6.82829 c -0.514814 -0.203311 -0.585259 -1.16502 -0.292234 -1.6346 c 1.33477 -2.13901 5.06799 -0.854394 7.27328 -2.07655 c 6.02221 -3.33748 13.6976 -7.14894 15.3366 -13.8362 c 0.190059 -0.775461 0.297318 -2.12833 -0.834981 -2.24499 c -1.53255 -0.157895 -3.02428 0.485035 -3.74862 1.64082 c -1.22872 1.96061 0.370637 4.62477 0.267598 6.93628 c -0.08637 1.93753 0.228767 4.09126 -0.74072 5.77101 c -1.68541 2.92018 -4.69531 6.53555 -8.04294 6.1338 c -0.476616 -0.0572 -1.03639 -0.657471 -0.905955 -1.11945 c 0.700682 -2.48169 4.92378 -1.56248 7.2931 -2.58034 c 2.60712 -1.12001 5.42153 -2.02896 7.58388 -3.86628 c 3.19568 -2.71532 7.9228 -5.97179 7.44858 -10.1384 c -0.07818 -0.686927 -0.887483 -1.44827 -1.57222 -1.35276 c -1.23065 0.171657 -0.350757 4.15842 -0.624668 6.13692 c -0.624643 4.5119 -2.16266 9.76645 -5.94561 12.3035 c -1.27169 0.852865 -3.9145 1.65603 -4.58508 0.279477 c -0.750341 -1.54029 5.05253 -2.14721 7.44366 -3.48435 c 3.80531 -2.12797 8.02455 -3.93572 10.9265 -7.18955 c 1.35385 -1.51802 3.45559 -3.53833 2.75142 -5.44658 c -0.252 -0.682899 -1.35333 -1.45634 -2.01474 -0.842333 c -1.21679 1.12958 -0.981862 4.63478 -0.826991 6.99546 c 0.319231 4.86596 -3.25876 11.6755 -8.1423 11.7035 c -1.08154 0.0062 -1.66697 -1.31708 -1.31787 -2.05087 c 0.740859 -1.55725 5.15696 -1.14091 7.56015 -2.19474 c 3.60814 -1.5822 7.41343 -3.24783 10.1134 -6.11706 c 2.02447 -2.15141 5.26524 -5.12572 4.11761 -7.84785 c -0.324649 -0.770056 -1.77284 -1.26533 -2.40265 -0.716037 c -2.1024 1.83363 0.710493 7.73687 -0.746245 11.1738 c -1.07959 2.54711 -2.84516 5.65639 -5.5661 6.15614 c -0.729762 0.134034 -1.95798 -0.271273 -1.98212 -1.01285 c -0.09229 -2.83566 4.76651 -3.10341 7.3114 -4.3576 c 4.4912 -2.21338 9.90116 -4.61087 12.7506 -8.95256 c 0.64365 -0.980724 1.54665 -2.62545 0.7093 -3.44701 c -0.63576 -0.623769 -2.00181 -0.06574 -2.60643 0.588266 c -1.29812 1.40417 -0.881842 3.76654 -0.820617 5.67784 c 0.121835 3.8034 -0.133068 7.46947 -4.14313 9.6673 c -0.928576 0.508932 -3.45166 0.296023 -3.14218 -0.466994 c 0.678913 -1.67388 4.74453 -2.66639 7.0416 -4.12294 c 2.72466 -1.72769 14.0531 -7.95826 12.1418 -12.1935 c -0.43841 -0.971509 -2.83436 -0.510038 -3.13631 0.512148 c -0.43676 1.4786 -0.28923 3.88565 -0.3537 5.83223 c -0.14108 4.25981 -1.2083 8.88637 -6.56477 10.0634 c -0.777877 0.170936 -1.50903 -0.371557 -1.47595 -0.956972 c 0.150999 -2.67272 4.68948 -2.62052 7.18772 -3.58229 c 4.47846 -1.72412 10.6757 -3.93418 11.9826 -8.69245 c 0.2042 -0.743508 -0.14545 -2.15311 -0.91594 -2.12405 c -1.40867 0.05313 -1.28554 3.95241 -1.57548 5.97601 c -0.56002 3.90862 -2.22299 9.38108 -6.11616 10.5678 c -0.66434 0.202495 -1.64694 -0.257541 -1.87209 -0.914542 c -0.50574 -1.47575 4.54984 -2.86882 6.94583 -4.08159 c 4.60192 -2.32933 14.6536 -6.64938 12.6817 -11.21 c -0.42207 -0.976209 -1.63962 -1.5225 -2.40558 -1.08888 c -1.62478 0.919815 -1.16528 4.80711 -1.25877 7.26214 c -0.15502 4.07057 -1.96859 9.78021 -5.81675 9.99225 c -0.8805 0.04852 -1.80232 -1.27448 -1.57408 -2.12627 c 0.39781 -1.48466 4.34961 -1.84703 6.57845 -2.62614 c 5.09627 -1.78145 14.6032 -6.7614 13.5854 -11.3286 c -0.22875 -1.02646 -2.37087 -1.72148 -3.02451 -0.897651 c -1.51638 1.9112 -0.29481 7.39903 -1.34042 10.2766 c -0.91666 2.52268 -2.6307 5.19108 -5.14015 5.92728 c -1.00172 0.293878 -3.13632 0.15309 -3.00489 -0.882542 c 0.27091 -2.13474 5.73933 -3.59771 8.67309 -5.28845 c 4.16841 -2.40227 11.8405 -6.17775 10.9522 -10.3707 c -0.20794 -0.981532 -2.54634 -1.89593 -2.86908 -0.91004 c -0.54511 1.66514 0.93144 12.1882 -4.99613 15.6676 c -0.99383 0.583353 -3.18463 0.506963 -3.40017 -0.625084 c -0.42812 -2.24844 4.63904 -3.08837 7.15676 -4.17189 c 3.82243 -1.64501 9.08729 -3.85436 9.76951 -7.06375 c 0.17563 -0.826244 -0.38701 -2.45201 -1.27361 -2.19081 c -0.94694 0.278978 -1.16052 3.64064 -1.44786 5.52156 c -0.83737 5.48134 -1.35772 12.9378 -9.22049 12.7543"];
};

WasedaTochou = function() { WasedaChar.call(this, "WasedaTochou", "とちょう", "NE16OWL4", "NE", "NEOWL", "black", false, ); };
WasedaTochou.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["とちょう"] = WasedaTochou;
WasedaChar.dict["とくちょう"] = [WasedaKagi, WasedaTochou];

WasedaTochou.prototype.setPaths = function() {
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

  this.dp.set(10.2846, -12.2567);
  this.paths = ["m 0 0 l 10.2846 -12.2567 c 0.801 -0.8011 -0.879 -0.6161 -2.257 -0.3979 c -0.906 0.1598 -2.172 0.9161 -1.2 0.7795 c 1.148 -0.1614 2.301 -0.2886 3.457 -0.3816"];
};

WasedaHain = function() { WasedaChar.call(this, "WasedaHain", "はいん", "SEL4", "SEL", "SEL4F", "black", false, ); };
WasedaHain.prototype = Object.create(WasedaChar.prototype);
WasedaChar.dict["はいん"] = WasedaHain;

WasedaHain.prototype.setPaths = function() {
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

  this.dp = p(3.27993, 2.29595).move(2, 50);
  this.paths = ["m 0 0 c 0 1.61602 1.71103 4.20452 3.27993 2.29595"];
};
