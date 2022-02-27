GreggChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
GreggChar.prototype = Object.create(Char.prototype);
GreggChar.dict = {};
Char.catalog["gregg"] = GreggChar.dict;


GreggK = function() { GreggChar.call(this, "GreggK", "k", "ER7", "ER", "ER", "black", false, p(0.0, 0.7)); };
GreggK.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["k"] = GreggK;

GreggK.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {
    //case "C":
      //this.dp = p(7, 0);
      //this.paths = ["m 0 0 c 2.17775 -1.24421 7.47367 -1.654 7 0"];
      //return;

    default:
      this.dp = p(7, 0);
      //this.paths = ["m 0 0 c 2.17775 -1.24421 7.47367 -1.654 7 0"];
      this.paths = ["m 0 0 c 2.3661,-0.8172 6.9303,-2.3707 7,0"]
      break;
  }
};

GreggG = function() { GreggChar.call(this, "GreggG", "g", "ER14", "ER", "ER", "black", false, p(0.0, 1.3)); };
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

  //switch (_head) {
    //case "C":
      //this.dp = p(16, 0);
      //this.paths = ["m 0, 0 c 5.321,-1.66 16.038,-4.565 16,0"]
      //return;
  //}

  this.dp = p(14, 0);
  this.paths = ["m 0,0 c 3.23064,-1.00766 6.45207,-2.47465 10.0462,-2.44995 2.32544,0.016 3.97023,0.6565 3.95523,2.44995"]
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

GreggL = function() { GreggChar.call(this, "GreggL", "l", "EL14", "EL", "EL", "black", false, p(0.0, -1.2)); };
GreggL.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["l"] = GreggL;

GreggL.prototype.setPaths = function() {
  switch (this.getPrevName()) {
    //case "GreggA":
      //this.dp = p(14.8941, -1.22614);
      //this.paths = ["m 0 0 c 2.98464 1.3724 11.7938 1.12002 14.8941 -1.22614"];
      //break;

    //case "GreggE":
      //this.dp = p(15.8289, -0.064);
      //this.paths = ["m 0 0 c -0.23715 0.63258 0.24374 1.14753 1.4066 1.45911 c 4.3439 1.16394 10.4091 0.99869 14.4223 -1.52311"];
      //break;

    default:
      this.dp = p(14, 0);
      this.paths = ["m 0,0 c -0.015,1.79345 1.62979,2.43394 3.95523,2.44995 3.59413,0.0247 6.81556,-1.44229 10.0462,-2.44995"];
      break;
  }
};

GreggN = function() { GreggChar.call(this, "GreggN", "n", "E4", "E", "E", "black", false, p(0.0, 0.0)); };
GreggN.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["n"] = GreggN;

GreggN.prototype.setPaths = function() {
  //switch (this.getPrevName()) {
    //case "GreggA":
      //this.dp = p(7.86436, -0.073);
      //this.paths = ["m 0 0 c 1.42119 -0.38081 7.86436 -0.073 7.86436 -0.073"];
      //return;
  //}

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

  //switch (this.getPrevName()) {
    //case "GreggA":
      //this.dp = p(12.8624, -0.073);
      //this.paths = ["m 0 0 c 1.42119 -0.38081 12.8624 -0.073 12.8624 -0.073"];
      //return;
  //}

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
      this.dp = p(-3.5, 6.062);
      this.paths = ["m 0,0 c -1.89,1.64 -5.518,4.816 -3.5,6.062"];
      break;
  }
};

GreggB = function() { GreggChar.call(this, "GreggB", "b", "SWL14", "SWL", "SWL", "black", false, p(11.2, -6.1)); };
GreggB.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["b"] = GreggB;

GreggB.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-7.000717, 12.12559);
      this.paths = ["m 0,0 c -2.48798,2.29398 -5.36914,4.35032 -7.144819,7.47529 -1.148853,2.02188 -1.416569,3.76657 0.144102,4.6503"];
      break;
  }
};

GreggF = function() { GreggChar.call(this, "GreggF", "f", "SWR7", "SWR", "SWR", "black", false, p(4.0, -2.9)); };
GreggF.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["f"] = GreggF;

GreggF.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-3.499998, 6.062);
      this.paths = ["m 0,0 c 2.018,1.246 -1.609998,4.422 -3.499998,6.062"];
      break;
  }
};

GreggV = function() { GreggChar.call(this, "GreggV", "v", "SWR14", "SWR", "SWR", "black", false, p(8.0, -5.7)); };
GreggV.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["v"] = GreggV;

GreggV.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(-7.000714, 12.12559);
      this.paths = ["m 0,0 c 1.56067,0.88373 1.29296,2.62842 0.1441,4.6503 -1.77568,3.12497 -4.656834,5.18131 -7.144814,7.47529"];
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
      this.dp = p(-3.5, 6.06218);
      this.paths = ["m 0,0 -3.5,6.06218"];
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
GreggChar.dict["'"] = GreggH;

GreggH.prototype.setPaths = function() {
  switch (this.getNextHeadType()) {

    default:
      this.dp = p(0, 0);
      this.paths = ["m 0 -1.5 v 0.1"];
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

  switch(tail_ + "_" +  _head) {
    case "NE_E":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.4194,-0.82 1.3963,-1.897 0.8669,-2.148 -1.3221,-0.627 -3.5293,0.518 -3.0483,1.492 0.3732,0.755 0.8055,0.651 2.1814,0.656"];
      return;

    case "E_NE":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.3759,0.005 1.8082,-0.099 2.1814,0.656 0.481,0.974 -1.7262,2.119 -3.0483,1.492 -0.5294,-0.251 -0.5525,-1.328 0.8669,-2.148"];
      return;

    case "EL_EL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0.843,-0.299 3.587,-0.964 3.582,-1.956 -0.004,-0.668 -1.574,-0.473 -2.299,-0.22 -0.994,0.347 -1.489,0.841 -1.283,2.176"];
      return;

    case "ER_E":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0,0.81613014 -2.8482433,2.1966216 -3.2502542,1.14669441 -0.2932326,-0.76583205 1.65917755,-1.14669441 3.2502542,-1.14669441"];
      return;

    case "NE_ER":
      this.dp = p(2.789699, -1.126);
      this.paths = ["m 0,0 c 1.0447,-0.503 3.058699,-1.574 3.395699,-0.859 0.209,0.444 -1.529,1.832 -2.727399,1.649 -0.8357,-0.127 0.2474,-1.471 2.121399,-1.916"];
      return;

    case "EL_NE":
      this.dp = p(2.473805, -1.14324);
      this.paths = ["m 0,0 c 1.57579,-0.59803 2.266179,-1.45987 1.49852,-1.81373 -1.385449,-0.63866 -4.33915,1.11467 -4.129157,1.78624 0.35565,1.13738 4.117091,-0.5457 5.104442,-1.11575"];
      return;

    case "E_E":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.945012,0 1.658435,1.54372 4.65e-4,1.54372 -1.65797,0 -1.945477,-1.54372 -4.65e-4,-1.54372 z"];
      return;

    case "NE_NE":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.68444,-0.97251 2.20811,0.50768 0.77227,1.33667 -1.43585,0.82898 -2.4567,-0.36416 -0.77227,-1.33667 z"];
      return;

    case "ER_EL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0.57472,2.33378 3.78504,0.71753 3.07657,-0.90707 -0.934,-1.617 -3.45677,-0.51093 -3.07657,0.90707"];
      return;

    case "EL_ER":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 2.5129,-0.836 2.813304,0.223 0.5264,1.072 -2.287,0.849 -3.0393,-0.236 -0.5264,-1.072"];
      return;

    case "ER_ER":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0,0.3183319 0.4770307,1.85534263 -1.292299,2.56204545 -0.929827,0.37139035 -2.372574,0.0738208 -1.414678,-1.21913686 0.597153,-0.80602969 2.093982,-1.17865709 2.706977,-1.34290859"];
      return;

    case "EL_E":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.161,-0.403 2.226,-1.12 1.669,-1.666 -0.652,-0.639 -3.955895,0.477 -3.609495,1.285 0.2418,0.564 1.353495,0.381 1.940495,0.381"];
      return;

    case "E_ER":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0.587,0 1.6987,-0.183 1.9405,0.381 0.3464,0.808 -2.9575,1.924 -3.6095,1.285 -0.557,-0.546 0.508,-1.263 1.669,-1.666"];
      return;

    case "E_EL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.591,0 3.544,-0.381 3.25,-1.146 -0.402,-1.05 -3.25,0.33 -3.25,1.146"];
      return;

    case "ER_NE":
      this.dp = p(-0.117, -0.534);
      this.paths = ["m 0,0 c 0,0.251 0.197,1.32 -0.763,1.942 -1.833,1.186 -2.06,-0.33 -1.191,-1.136 0.739,-0.687 1.409,-1.093 1.837,-1.34"];
      return;

    case "NE_EL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0.43932,-0.25364 0.852251,-0.43879 1.577553,-0.97792 1.113808,-0.8279 0.876309,-2.58877 -0.902515,-1.59026 -0.873187,0.49014 -0.900686,1.72606 -0.67504,2.56818"];
      return;

    case "ER_SWL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0,0.981 3.342,1.065 3.602,-0.116 0.282,-1.28 -2.717,-0.768 -3.602,0.116"];
      return;

    case "SWR_EL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -0.885002,0.884 -3.884,1.396 -3.602,0.116 0.26,-1.181 3.602,-1.097 3.602,-0.116"];
      return;

    case "EL_SWL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0.94066,-0.3221 5.1313,-1.48565 4.68552,-2.3612 -0.75979,-1.4923 -3.94452,1.9332 -4.68552,2.3612"];
      return;

    case "SWR_ER":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -0.741,0.428 -3.925731,3.8535 -4.685521,2.3612 -0.44578,-0.87555 3.744861,-2.0391 4.685521,-2.3612"];
      return;

    case "E_SWL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.1837,0 3.9823,0.001 3.2733,-1.226 -0.6677,-1.157 -2.3848,0.544 -3.2733,1.226"];
      return;

    case "SWR_E":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -0.8885,0.682 -2.6056,2.383 -3.2733,1.226 -0.709,-1.227 2.0896,-1.226 3.2733,-1.226"];
      return;

    case "NE_SWL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.2078,-0.697 3.97327,-1.46009 2.9597,-2.48 -1.01357,-1.01991 -1.9918,1.531 -2.9597,2.48"];
      return;

    case "SWR_NE":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -1.370462,1.24291 -2.766121,3.31294 -3.45921,2.16636 -0.743842,-1.23054 2.087379,-1.39297 3.45921,-2.16636"];
      return;

    case "ER_SW":
      this.dp = p(-0.2569018, 0.7232867);
      this.paths = ["m 0,0 c -0.1508596,1.6126438 -3.9049379,2.2186658 -3.6509836,0.7962607 0.2524007,-1.4137041 4.6222327,-1.84937788 3.3940818,-0.072974"];
      return;

    case "EL_SW":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.119,-0.523 3.817,-1.111 3.14,-2.113 -0.635,-0.94 -2.263,0.594 -3.14,2.113"];
      return;

    case "SW_ER":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -0.877,1.519 -2.505,3.053 -3.14,2.113 -0.677,-1.002 2.021,-1.59 3.14,-2.113"];
      return;

    case "E_SW":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 2.1646,0 4.8069,-0.497 3.6663,-1.559 -1.1093,-1.032 -2.916,0.26 -3.6663,1.559"];
      return;

    case "SW_E":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -0.7503,1.299 -2.557,2.591 -3.6663,1.559 -1.1406,-1.062 1.5017,-1.559 3.6663,-1.559"];
      return;

    case "NE_SW":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.189,-0.687 3.227,-1.401 2.694,-2.124 -0.786,-1.067 -2.22,1.302 -2.694,2.124"];
      return;

    case "SW_NE":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -0.474,0.822 -1.908,3.191 -2.694,2.124 -0.533,-0.723 1.505,-1.437 2.694,-2.124"];
      return;

    case "SWL_SW":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.307,0.723 4.878,-0.763 3.449,-1.864 -0.979,-0.754 -2.833,0.796 -3.449,1.864"];
      return;

    case "SW_SWR":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -0.616,1.068 -2.470004,2.61799 -3.449004,1.864 -1.429,-1.101 2.142004,-2.58701 3.449004,-1.864"];
      return;

    case "SWR_SW":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -1.4602,1.115 -3.8388,1.176 -3.6875,0.051 0.1208,-0.898 1.6526,-1.355 2.4143,-1.357 0.762,-0.001 1.6159,0.712 1.2732,1.306"];
      return;

    case "SW_SWL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -0.3427,0.594 0.5112,1.307 1.2732,1.306 0.7617,-0.002 2.2935,-0.459 2.4143,-1.357 0.1513,-1.125 -2.2273,-1.064 -3.6875,0.051"];
      return;

    case "SWL_SWL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0.249,0.199 3.435,1.111 3.627,-0.35 0.257,-1.957 -3.154,-0.158 -3.627,0.35"];
      return;

    case "SWR_SWR":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -1.144,0.859 -3.436,1.186 -3.225,-0.288 0.207,-1.452 2.441,-0.321 3.225,0.288"];
      return;

    case "SWR_SWL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -1.621,1.599 3.344,0.972 3.556,-0.219 0.301,-1.696 -2.408,-0.823 -3.556,0.219"];
      return;

    case "SW_SW":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -0.973003,1.684 -2.166003,0.664 -1.337003,-0.771 0.829003,-1.436 2.309502,-0.913 1.337003,0.771 z"];
      return;

  }

  if (tail_ === "") {
  }

  switch(_name) {
    case "GreggK":
    case "GreggG":
      this.dp = p(-3.0510818, 0.8767537);
      this.paths = ["m 0,0 c 0.215948,0.6864856 -1.31404357,2.56045201 -3.5735405,2.71899771 -1.226446,0.086058 -0.9311872,-1.32319301 0.5224587,-1.84224401"];
      return;

    case "GreggR":
      this.dp = p(-1.3586521, -1.208928);
      this.paths = ["m 0,0 c 0.1836205,-0.191555 2.6045381,-1.8680404 1.4925124,-2.6143763 -0.7345027,-0.4929614 -2.8511645,0.1932796 -2.8511645,1.4054483"]
      return;

    case "GreggL":
      this.dp = p(-2.287057, -2.31002);
      this.paths = ["m 0,0 c 0.422158,-0.47447 3.680953,-3.12668 1.518709,-4.17781 -0.927656,-0.45096 -3.805766,0.27748 -3.805766,1.86779"]
      return;

    case "GreggN":
    case "GreggM":
      this.dp = p(-0.9588543, 0);
      this.paths = ["m 0,0 c 0,1.508 -2.007,1.603 -2.9062,1.03 -0.340402,-0.218 -0.558602,-1.03 1.9472,-1.03"];
      return;

    case "GreggT":
    case "GreggD":
      this.dp = p(-0.80824, 0.46664);
      this.paths = ["m 0,0 c 0.67364,1.16678 -0.90677,2.37926 -1.97218,2.33686 -0.40386,-0.017 -1.00437,-0.61835 1.16394,-1.87022"];
      return;

    case "GreggP":
    case "GreggB":
      this.dp = p(1.618, -1.46);
      this.paths = ["m 0,0 c 0.991,0.991 1.919,0.191 2.241,-0.132 0.908,-0.907 0.568,-2.359 -0.623,-1.328"];
      return;

    case "GreggF":
      this.dp = p(-0.0994, -2.32966);
      this.paths = ["m 0,0 c -2.60817,-0.73857 -1.40441,-3.05582 -0.0994,-2.32966"];
      return;

    case "GreggV":
      this.dp = p(-0.948451, -2.82421);
      this.paths = ["m 0,0 c -3.846236,-0.62157 -2.42044,-3.58214 -0.948451,-2.82421"];
      return;

    case "GreggSh":
    case "GreggCh":
    case "GreggJ":
      this.dp = p(0.55161, -0.95543);
      this.paths = ["m 0,0 c -1.56421,0 -1.93663,-1.14836 -1.2955,-1.78949 0.83908,-0.83908 2.53423,-0.35606 1.84711,0.83406"];
      return;
  }

  if (_head === "") {

  }

  switch(name_) {
    case "GreggK":
    case "GreggG":
      this.dp = p(-0.871532, -1.699156);
      this.paths = ["m 0,0 c -0.04148,0.991096 -2.217639,1.203131 -2.414712,0.569912 -0.181741,-0.583958 0.679321,-1.185365 1.54318,-1.699156"];
      return;

    case "GreggR":
    case "GreggL":
      this.dp = p(-2.0752386, 0.6715101);
      this.paths = ["m 0,0 c 2.2029871,-0.7631695 1.8134648,-1.9100036 -0.51989472,-1.1888845 -1.18553818,0.4183306 -1.94357888,0.9066048 -1.55334388,1.8603946"];
      return;

    case "GreggT":
    case "GreggD":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.068987,-0.61723 3.4352,-1.707 4.1888,-1.186 1.0954,0.756 -3.192844,4.9024 -4.1888,1.186"];
      return;

    case "GreggN":
    case "GreggM":
      this.dp = p(0.9588543, 0);
      this.paths = ["m 0,0 c 2.5058,0 2.2876,0.812 1.9472,1.03 -0.8992,0.573 -2.9062,0.478 -2.9062,-1.03"];
      return;

    case "GreggF":
    case "GreggV":
      this.dp = p(1.618, -1.46);
      this.paths = ["m 0,0 c -1.191,1.031 -1.531,-0.421 -0.623,-1.328 0.322,-0.323 1.25,-1.123 2.241,-0.132"];
      return;

    case "GreggP":
      this.dp = p(0.0994, 2.32966);
      this.paths = ["m 0,0 c 1.30501,0.72616 2.50877,-1.59109 -0.0994,-2.32966"];
      return;

    case "GreggB":
      this.dp = p(-0.94845, -2.82421);
      this.paths = ["m 0,0 c 1.47199,0.75793 2.89779,-2.20264 -0.94845,-2.82421"];
      return;

    case "GreggSh":
    case "GreggCh":
    case "GreggJ":
      this.dp = p(0.5739, -0.99404);
      this.paths = ["m 0,0 c -0.58122,1.00671 -1.69388,0.6352 -1.69388,-0.15071 0,-1.06833 1.47407,-1.30158 2.26778,-0.84333"];
      return;
  }

  //switch (name_ + "_" + _name) {
    //case "GreggG_GreggT":
      //this.dp = p(-0.866314, -1.97876);
      //this.paths = ["m 0 0 c -0.593377 1.31925 -2.55261 1.25789 -3.01323 0.357408 c -0.481641 -0.94158 0.946265 -1.64297 2.14692 -2.33617"];
      //return;
  //}

  ////switch (name_ + "_" + _model) {}

  //switch (name_ + "_" + _head) {
    //case "GreggK_E":
      //this.dp = p(-2.86436, 0.17299);
      //this.paths = ["m 0 0 c -0.642393 2.24316 -3.19525 2.60409 -4.26711 2.03439 c -1.07186 -0.5697 -0.01844 -1.48059 1.40275 -1.8614"];
      //return;

    //case "GreggG_E":
      //this.dp = p(-2.86436, 0.17299);
      //this.paths = ["m 0 0 c -0.784766 1.74476 -3.19525 2.60409 -4.26711 2.03439 c -1.07186 -0.5697 -0.01844 -1.48059 1.40275 -1.8614"];
      //return;
  //}

  ////switch (name_) {}

  ////switch (model_ + "_" + _name) {}

  ////switch (model_ + "_" + _model) {}

  ////switch (model_ + "_" + _head) {}

  ////switch (model_) {}

  //switch (tail_ + "_" + _name) {
  //}

  ////switch (tail_ + "_" + _model) {}

  //switch (tail_ + "_" + _head) {
    //case "E_NE":
      //this.dp = p(-1e-05, -6e-06);
      //this.paths = ["m 0 0 c 0.61007 0.05428 0.990047 0.249509 1.06529 0.660487 c 0.142788 0.779965 -0.722083 1.56608 -1.44653 1.88842 c -0.594341 0.264449 -1.71627 0.45319 -1.94534 -0.155665 c -0.391765 -1.04133 1.12593 -1.70005 2.32658 -2.39325"];
      //return;
  //}

  ////switch (tail_) {}

  //switch (_name) {
    //case "GreggL":
      //this.dp = p(-1.41515, -0.44769 + 3.6);
      //this.paths = ["m 0 3.6 c 0.88291 -0.67806 1.62989 -1.36444 1.61416 -2.57541 c -0.0116 -0.89357 -1.19773 -1.41391 -2.50938 -0.9436 c -1.33502 0.47869 -2.33738 2.23562 -0.51993 3.07132"];
      //return;

    //case "GreggM":
    //case "GreggN":
      //this.dp = p(-2.86436, 0.17299);
      //this.paths = ["m 0 0 c 0.665331 1.77947 -3.19525 2.60409 -4.26711 2.03439 c -1.07186 -0.5697 -0.01844 -1.48059 1.40275 -1.8614"];
      //return;
  //}

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

  after_R = {
    dp: p(0, 0),
    paths: ["m 0, 0 c 0.996582,-0.479811 1.098117,-0.554262 0.89931,-0.90657 -0.741727,-0.474359 -1.382557,0.493805 -0.89931,0.90657"]
  };

  before_R = {
    dp: p(-0.3934, -0.9523),
    paths: ["m 0 0 c 0.63894 -0.0982 1.05516 -0.6312 0.83595 -1.05873 c -0.22995 -0.44849 -1.08496 -0.27871 -1.22935 0.10643"]
  }

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

  switch (tail_ + "_" + _head) {
    case "E_NE":
      this.dp = p(-0.672988, 0);
      this.paths = ["m 0 0 c 0.20509 0.01825 0.4638 0.21232 0.4548 0.41801 c -0.01927 0.42221 -0.419636 0.634283 -0.757109 0.703411 c -0.338844 0.069409 -0.881053 -0.018089 -0.976651 -0.350495 c -0.090341 -0.314126 0.217432 -0.546602 0.605972 -0.770926"];
      return;

    case "NE_E":
      this.dp = p(0, 0);
      this.paths = ["m 0, 0 c 0.4986,-0.252 1.4055,-0.643 1.2127,-1.053 -0.504,-1.071 -1.92,0.202 -1.2127,1.053"];
      return;

    case "EL_NE":
      this.dp = after_R.dp;
      this.paths = after_R.paths;
      return;

    case "ER_EL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0,0.8198 1.47563,1.132 1.47563,-0.0401 0,-1.0526 -1.47563,-1.174 -1.47563,0.0401 z"]
      return;

    case "ER_ER":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0,0.56809859 -1.28361088,1.7467629 -1.5914927,1.00567462 -0.2259805,-0.54394731 1.10467124,-0.8752312 1.5914927,-1.00567462"];
      return;

    case "EL_E":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.0264,-0.330272 0.7135,-1.1601 -0.18116,-0.966005 -0.8898,0.192971 -0.89385,0.966005 0.18116,0.966005"];
      return;

    case "E_ER":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 1.075008,0 1.070958,0.77304 0.18116,0.96601 -0.89466,0.19409 -1.20756,-0.63574 -0.18116,-0.96601"];
      return;

    case "E_EL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0.54158644,0 0.86538911,0.03988 1.1322099,-0.236844 0.5572995,-0.577987 -0.23097452,-0.932525 -0.65621212,-0.674287 -0.30034645,0.182394 -0.47599778,0.523156 -0.47599778,0.911131"];
      return;

    case "NE_EL":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0.49824,-0.28766 1.16488,-0.5757 1.16488,-1.00636 0,-0.86591 -1.24102,-0.6426 -1.2299,0.20844 0.005,0.38367 0.065,0.579 0.065,0.79796"];
      return;

  }

  switch (_name) {
    case "GreggK":
    case "GreggG":
      this.dp = p(-1.03437, 0.45655);
      this.paths = ["m 0 0 c 0.21019 0.36406 -0.0477 0.95534 -0.743096 1.28304 c -0.414734 0.19545 -1.16244 0.4689 -1.24418 0.0568 c -0.06026 -0.30378 0.568195 -0.6635 0.952903 -0.88329"];
      return;

    case "GreggR":
    case "GreggL":
      if (tail_ == "" || tail_ == "P") {
        this.dp = before_R.dp;
        this.paths = before_R.paths;
        return;
      }
      break;

    case "GreggT":
    case "GreggD":
      this.dp = p(-0.715065, 0.40518)
      this.paths = ["m 0, 0 c 0.2599,0.45866 -0.0188,0.96569 -0.529765,1.17958 -0.411845,0.17234 -0.895454,-0.36467 -0.1853,-0.7744"]
      return;

    case "GreggN":
    case "GreggM":
      this.dp = p(-0.82188, 0);
      this.paths = ["m 0, 0 c 0,0.52718 -0.49247,0.8309 -1.04244,0.7651 -0.44328,-0.0531 -0.59929,-0.75873 0.22056,-0.7651"]
      return;

    case "GreggP":
    case "GreggB":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c 0.11585,0.62488 1.27477,0.55399 1.23477,-0.32554 -0.2057,-0.34833 -0.32095,-0.29762 -1.23477,0.32554"];
      return;

    case "GreggF":
    case "GreggV":
      this.dp = p(-0.5849, -0.846);
      this.paths = ["m 0, 0 c -0.4045,0.504 -1.0311,0.569 -1.2918,0.166 -0.2734,-0.424 0.2967,-1.008 0.7069,-1.012"];
      return;

    case "GreggSh":
    case "GreggCh":
    case "GreggJ":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -1.141523,-0.37247 -0.997661,-1.42543 -0.14583,-1.3533 0.348732,0.0295 0.732575,0.5558 0.14583,1.3533"];
      return;
  }

  switch (name_) {

    case "GreggK":
    case "GreggG":
      this.dp = p(0, 0);
      this.paths = ["m 0, 0 c -0.015655,0.43164345 -0.6768339,1.5889867 -1.2835329,1.2910004 -0.9780838,-0.53606745 -0.1437985,-1.41780047 1.2835329,-1.2910004"]
      return;

    case "GreggR":
    case "GreggL":
      this.dp = after_R.dp;
      this.paths = after_R.paths;
      //this.dp = p(0, 0);
      //this.paths = ["m 0, 0 c 0.996582,-0.479811 1.098117,-0.554262 0.89931,-0.90657 -0.741727,-0.474359 -1.382557,0.493805 -0.89931,0.90657"]
      return;

    case "GreggT":
    case "GreggD":
      this.dp = p(0, 0);
      this.paths = ["m 0, 0 c 0.4843179,-0.2789337 1.3080777,-0.823577 1.5453342,-0.4377786 0.6200609,1.0082694 -1.2209741,1.4954815 -1.5453342,0.4377786"]
      return;

    case "GreggN":
    case "GreggM":
      this.dp = p(0, 0);
      this.paths = ["m 0, 0c 1.58569772,-0.014913 2.23173732,-0.061201 1.93712862,0.4490765 -0.4491002,0.7778642 -1.93712862,0.535832 -1.93712862,-0.4490765"]
      return;

  }

  //switch (model_ + "_" + _name) {}

  //switch (model_ + "_" + _model) {}

  //switch (model_ + "_" + _head) {}

  //switch (model_) {}

  //switch (tail_ + "_" + _name) {}

  //switch (tail_ + "_" + _model) {}


  //switch (tail_) {}


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

