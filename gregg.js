GreggChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
GreggChar.prototype = Object.create(Char.prototype);
GreggChar.dict = {};
Char.catalog["gregg"] = GreggChar.dict;


GreggK = function() { GreggChar.call(this, "GreggK", "k", "ER7", "ER", "ER", "black", false, p(0.0, 0.7)); };
GreggK.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["k"] = GreggK;

GreggK.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    case "C":
      this.dp = p(7, 0);
      this.paths = ["m 0 0 c 2.17775 -1.24421 7.47367 -1.654 7 0"];
      return;

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
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  //const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) {
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

  switch (_head) {
    case "C":
      this.dp = p(14.8883, -0.300773);
      this.paths = ["m 0 0 c 3.86615 -2.10782 16.7769 -4.49967 14.8883 -0.300773"];
      return;
  }

  this.dp = p(14.8883, -0.300773);
  this.paths = ["m 0 0 c 3.86615 -2.10782 16.7769 -4.49967 14.8883 -0.300773"];
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
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) {
    case "GreggG_GreggT":
      this.dp = p(-0.866314, -1.97876);
      this.paths = ["m 0 0 c -0.593377 1.31925 -2.55261 1.25789 -3.01323 0.357408 c -0.481641 -0.94158 0.946265 -1.64297 2.14692 -2.33617"];
      return;
  }

  //switch (name_ + "_" + _model) {}

  switch (name_ + "_" + _head) {
    case "GreggK_E":
      this.dp = p(-2.86436, 0.17299);
      this.paths = ["m 0 0 c -0.642393 2.24316 -3.19525 2.60409 -4.26711 2.03439 c -1.07186 -0.5697 -0.01844 -1.48059 1.40275 -1.8614"];
      return;

    case "GreggG_E":
      this.dp = p(-2.86436, 0.17299);
      this.paths = ["m 0 0 c -0.784766 1.74476 -3.19525 2.60409 -4.26711 2.03439 c -1.07186 -0.5697 -0.01844 -1.48059 1.40275 -1.8614"];
      return;
  }

  //switch (name_) {}

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  switch (tail_ + "_" + _name) {
  }

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "E_NE":
      this.dp = p(-1e-05, -6e-06);
      this.paths = ["m 0 0 c 0.61007 0.05428 0.990047 0.249509 1.06529 0.660487 c 0.142788 0.779965 -0.722083 1.56608 -1.44653 1.88842 c -0.594341 0.264449 -1.71627 0.45319 -1.94534 -0.155665 c -0.391765 -1.04133 1.12593 -1.70005 2.32658 -2.39325"];
      return;
  }

  //switch (tail_) {}

  switch (_name) {
    case "GreggL":
      this.dp = p(-1.41515, -0.44769 + 3.6);
      this.paths = ["m 0 3.6 c 0.88291 -0.67806 1.62989 -1.36444 1.61416 -2.57541 c -0.0116 -0.89357 -1.19773 -1.41391 -2.50938 -0.9436 c -1.33502 0.47869 -2.33738 2.23562 -0.51993 3.07132"];
      return;

    case "GreggM":
    case "GreggN":
      this.dp = p(-2.86436, 0.17299);
      this.paths = ["m 0 0 c 0.665331 1.77947 -3.19525 2.60409 -4.26711 2.03439 c -1.07186 -0.5697 -0.01844 -1.48059 1.40275 -1.8614"];
      return;
  }

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(0, 0);
  this.paths = ["m 0 0 c -1.2047 -0.10718 -2.8967 0.74715 -3.06293 1.94513 c -0.0975 0.70262 0.711768 1.51973 1.41794 1.58685 c 1.25154 0.11895 2.94049 -1.03272 2.99782 -2.28859 c 0.02793 -0.61184 -0.74276 -1.18911 -1.35283 -1.24339"];
};

GreggE = function() { GreggChar.call(this, "GreggE", "e", "C1", "C", "C", "black", false, p(1.0, -0.6)); };
GreggE.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["e"] = GreggE;

GreggE.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  //const model_ = this.getPrevModel();
  const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  //const _model = this.getNextModel();
  const _head = this.getNextHeadType();

  switch (name_ + "_" + _name) {
    case "GreggK_GreggT":
      this.dp = p(-0.238854, -0.68917);
      this.paths = ["m 0 0 c -0.119513 0.446028 -0.435092 0.641221 -0.775489 0.670005 c -0.266594 0.02254 -0.671697 -0.148182 -0.686841 -0.415299 c -0.02916 -0.514257 0.905842 -0.76049 1.22348 -0.943876"];
      return;

    case "GreggG_GreggT":
      this.dp = p(0.145538, -1.07201);
      this.paths = ["m 0 0 c -0.219853 0.488797 -0.435092 0.641221 -0.775489 0.670005 c -0.266594 0.02254 -0.667321 -0.148467 -0.686841 -0.415299 c -0.0507 -0.693003 1.29023 -1.14333 1.60787 -1.32672"];
      return;
  }

  //switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {}

  switch (name_) {
    case "GreggK":
    case "GreggG":
      //this.dp = p(-1.7326138, -0.2059328);
      this.dp = p(0, 0);
      this.paths = ["m 0, 0 c -0.015655,0.43164345 -0.6768339,1.5889867 -1.2835329,1.2910004 -0.9780838,-0.53606745 -0.1437985,-1.41780047 1.2835329,-1.2910004"]
      return;
  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}

  switch (tail_ + "_" + _head) {
    case "E_NE":
      this.dp = p(-0.672988, 0);
      this.paths = ["m 0 0 c 0.20509 0.01825 0.4638 0.21232 0.4548 0.41801 c -0.01927 0.42221 -0.419636 0.634283 -0.757109 0.703411 c -0.338844 0.069409 -0.881053 -0.018089 -0.976651 -0.350495 c -0.090341 -0.314126 0.217432 -0.546602 0.605972 -0.770926"];
      return;
  }

  //switch (tail_) {}

  switch (_name) {
    case "GreggK":
      this.dp = p(-1.03437, 0.45655);
      this.paths = ["m 0 0 c 0.21019 0.36406 -0.0477 0.95534 -0.743096 1.28304 c -0.414734 0.19545 -1.16244 0.4689 -1.24418 0.0568 c -0.06026 -0.30378 0.568195 -0.6635 0.952903 -0.88329"];
      return;

    case "GreggR":
    case "GreggL":
      this.dp = p(-0.3934, -0.9523);
      this.paths = ["m 0 0 c 0.63894 -0.0982 1.05516 -0.6312 0.83595 -1.05873 c -0.22995 -0.44849 -1.08496 -0.27871 -1.22935 0.10643"];
      return;
  }

  //switch (_model) {}

  switch (_head) {
    case "C":
      this.dp = p(-2.86436, 0.17299);
      this.paths = ["m 0 0 c -0.784766 1.74476 -3.19525 2.60409 -4.26711 2.03439 c -1.07186 -0.5697 -0.01844 -1.48059 1.40275 -1.8614"];
      return;
  }

  this.dp = p(0, 0);
  this.paths = ["m 0 0 c -0.405 -0.036 -0.97382 0.25118 -1.02971 0.65392 c -0.0328 0.23621 0.23929 0.51091 0.47668 0.53348 c 0.42076 0.0399 0.98856 -0.34718 1.00783 -0.76939 c 0.009 -0.20569 -0.24971 -0.39976 -0.4548 -0.41801"];
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

GreggTen = function() { GreggChar.call(this, "GreggTen", "tn", "NER9", "NER", "NER", "black", false, p(0.0, 2.7)); };
GreggTen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["tn"] = GreggTen;
GreggChar.dict["dn"] = GreggTen;

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
GreggChar.dict["dm"] = GreggTm;

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
GreggChar.dict["nd"] = GreggNt;

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
GreggChar.dict["md"] = GreggMt;

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
GreggChar.dict["dv"] = GreggDf;
GreggChar.dict["tv"] = GreggDf;

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
GreggChar.dict["jnd"] = GreggJnt;
GreggChar.dict["pnt"] = GreggJnt;
GreggChar.dict["pnd"] = GreggJnt;

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

