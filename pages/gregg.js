GreggChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
GreggChar.prototype = Object.create(Char.prototype);
GreggChar.dict = {};
GreggChar.prototype.setPathsFromObject = function(obj) {
  this.dp = p(obj.dp.x, obj.dp.y);
  this.paths = obj.paths;
}
Char.catalog["gregg"] = GreggChar.dict;


GreggK = function() { GreggChar.call(this, "GreggK", "k", "ER7", "ER", "ER", "black", false, p(0.0, 0.7)); };
GreggK.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["k"] = GreggK;

GreggK.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.K.default)
};

GreggG = function() { GreggChar.call(this, "GreggG", "g", "ER14", "ER", "ER", "black", false, p(0.0, 1.3)); };
GreggG.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["g"] = GreggG;

GreggG.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.G.default);
};

GreggR = function() { GreggChar.call(this, "GreggR", "r", "EL7", "EL", "EL", "black", false, p(0.0, -0.6)); };
GreggR.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["r"] = GreggR;

GreggR.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.R.default)
};

GreggL = function() { GreggChar.call(this, "GreggL", "l", "EL14", "EL", "EL", "black", false, p(0.0, -1.2)); };
GreggL.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["l"] = GreggL;

GreggL.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.L.default);
};

GreggN = function() { GreggChar.call(this, "GreggN", "n", "E4", "E", "E", "black", false, p(0.0, 0.0)); };
GreggN.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["n"] = GreggN;

GreggN.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.N.default)
};

GreggM = function() { GreggChar.call(this, "GreggM", "m", "E10", "E", "E", "black", false, p(0.0, 0.0)); };
GreggM.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["m"] = GreggM;

GreggM.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.M.default);
};

GreggT = function() { GreggChar.call(this, "GreggT", "t", "NE4", "NE", "NE", "black", false, p(0.0, 1.0)); };
GreggT.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["t"] = GreggT;

GreggT.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.T.default);
};

GreggD = function() { GreggChar.call(this, "GreggD", "d", "NE10", "NE", "NE", "black", false, p(0.0, 2.5)); };
GreggD.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["d"] = GreggD;

GreggD.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.D.default);
};

GreggTh = function() { GreggChar.call(this, "GreggTh", "th", "NER4", "NER", "NER", "black", false, p(0.0, 1.1)); };
GreggTh.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["th"] = GreggTh;

GreggTh.prototype.setPaths = function() {
  this.dp = p(3.2766, -2.29431);
  this.paths = ["m 0 0 c -0.084533 -1.22722 2.78425 -2.19996 3.2766 -2.29431"];
};

GreggThL = function() { GreggChar.call(this, "GreggThL", "Th", "NEL4", "NEL", "NEL", "black", false, p(0.0, 1.1)); };
GreggThL.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["Th"] = GreggThL;

GreggThL.prototype.setPaths = function() {
  this.dp = p(3.27661, -2.29431);
  this.paths = ["m 0 0 c 1.32922 0.043491 2.69759 -1.20187 3.27661 -2.29431"];
};

GreggP = function() { GreggChar.call(this, "GreggP", "p", "SWL7", "SWL", "SWL", "black", false, p(4.7, -2.9)); };
GreggP.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["p"] = GreggP;

GreggP.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.P.default);
};

GreggB = function() { GreggChar.call(this, "GreggB", "b", "SWL14", "SWL", "SWL", "black", false, p(11.2, -6.1)); };
GreggB.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["b"] = GreggB;

GreggB.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.B.default);
};

GreggF = function() { GreggChar.call(this, "GreggF", "f", "SWR7", "SWR", "SWR", "black", false, p(4.0, -2.9)); };
GreggF.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["f"] = GreggF;

GreggF.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.F.default);
};

GreggV = function() { GreggChar.call(this, "GreggV", "v", "SWR14", "SWR", "SWR", "black", false, p(8.0, -5.7)); };
GreggV.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["v"] = GreggV;

GreggV.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.V.default);
};

GreggCh = function() { GreggChar.call(this, "GreggCh", "ch", "SW7", "SW", "SW", "black", false, p(4.0, -2.9)); };
GreggCh.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["ch"] = GreggCh;
GreggChar.dict["c"] = GreggCh;

GreggCh.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.CH.default);
};

GreggJ = function() { GreggChar.call(this, "GreggJ", "j", "SW14", "SW", "SW", "black", false, p(7.0, -6.1)); };
GreggJ.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["j"] = GreggJ;

GreggJ.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.J.default);
};

GreggS = function() { GreggChar.call(this, "GreggS", "s", "SWL3", "SWL", "SWL", "black", false, p(1.8, -1.3)); };
GreggS.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["s"] = GreggS;

GreggS.prototype.setPaths = function() {
  this.dp = p(-1.5, 2.59808);
  this.paths = ["m 0 0 c -0.771314 0.491248 -2.48487 1.68084 -1.5 2.59808"];
};

GreggSR = function() { GreggChar.call(this, "GreggSR", "S", "SWR3", "SWR", "SWR", "black", false, p(2.1, -1.1)); };
GreggSR.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["S"] = GreggSR;

GreggSR.prototype.setPaths = function() {
  this.dp = p(-2.12133, 2.12133);
  this.paths = ["m 0 0 c 0.880428 0.925001 -0.975988 1.91308 -2.12133 2.12133"];
};

GreggSh = function() { GreggChar.call(this, "GreggSh", "sh", "SW4", "SW", "SW", "black", false, p(2.0, -1.7)); };
GreggSh.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["sh"] = GreggSh;

GreggSh.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.SH.default);
};

GreggH = function() { GreggChar.call(this, "GreggH", "h", "P", "P", "P", "black", true, p(0.0, -0.0)); };
GreggH.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["'"] = GreggH;

GreggH.prototype.setPaths = function() {
  this.dp = p(0, 0);
  this.paths = ["m 0 -1.5 v 0.1"];
};

GreggNg = function() { GreggChar.call(this, "GreggNg", "ng", "SE5", "SE", "SE", "black", false, p(0.0, -1.2)); };
GreggNg.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["ng"] = GreggNg;

GreggNg.prototype.setPaths = function() {
  this.dp = p(4.33013, 2.5);
  this.paths = ["m 0 0 l 4.33013 2.5"];
};

GreggNk = function() { GreggChar.call(this, "GreggNk", "nk", "SE10", "SE", "SE", "black", false, p(0.0, -2.5)); };
GreggNk.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["nk"] = GreggNk;

GreggNk.prototype.setPaths = function() {
  this.dp = p(8.66025, 5);
  this.paths = ["m 0 0 l 8.66025 5"];
};

GreggA = function() { GreggChar.call(this, "GreggA", "a", "C4", "C", "C", "black", false, p(3.1, -1.8)); };
GreggA.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["a"] = GreggA;

GreggA.prototype.setPaths = function() {

  const adjacentTypes = this.getPrevTailType() + "_" + this.getNextHeadType();
  let pathsObject = PATHS.A[adjacentTypes];
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  const precedingTypes = "before_" + this.getNextName();
  pathsObject = PATHS.A[precedingTypes]
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  const succedingTypes = "after_" + this.getPrevName();
  pathsObject = PATHS.A[succedingTypes]
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  this.setPathsFromObject(PATHS.A.default);
};

GreggE = function() { GreggChar.call(this, "GreggE", "e", "C1", "C", "C", "black", false, p(1.0, -0.6)); };
GreggE.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["e"] = GreggE;

GreggE.prototype.setPaths = function() {
  const name_ = this.getPrevName();
  const tail_ = this.getPrevTailType();
  const _name = this.getNextName();
  const _head = this.getNextHeadType();

  after_R = {
    dp: p(0, 0),
    paths: ["m 0, 0 c 0.996582,-0.479811 1.098117,-0.554262 0.89931,-0.90657 -0.741727,-0.474359 -1.382557,0.493805 -0.89931,0.90657"]
  };

  before_R = {
    dp: p(-0.3934, -0.9523),
    paths: ["m 0 0 c 0.63894 -0.0982 1.05516 -0.6312 0.83595 -1.05873 c -0.22995 -0.44849 -1.08496 -0.27871 -1.22935 0.10643"]
  }

  after_CH = {
    dp: p(0, 0),
    paths: ["m 0, 0 c -0.5567,0.964 -1.2585,1.748 -1.6357,1.038 -0.4716,-0.888 1.2375,-1.038 1.6357,-1.038"]
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

  const adjacentTypes = this.getPrevTailType() + "_" + this.getNextHeadType();
  let pathsObject = PATHS.E[adjacentTypes];
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  switch (tail_ + "_" + _head) {

    case "EL_NE":
      this.dp = after_R.dp;
      this.paths = after_R.paths;
      return;

    case "SW_E":
      this.dp = after_CH.dp;
      this.paths = after_CH.paths;
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

    case "GreggP":
    case "GreggB":
      this.dp = p(0.5656, 0.777);
      this.paths = ["m 0,0 c 0.5179,0.31 1.0037,-0.488 0.6506,-0.848 -0.3301,-0.337 -0.8578,-0.196 -1.2162,0.071"];
      return;

    case "GreggF":
    case "GreggV":
      this.dp = p(0, 0);
      this.paths = ["m 0,0 c -0.913819,0.62316 -1.029063,0.67387 -1.234768,0.32554 -0.03994,-0.87953 1.118927,-0.95042 1.234768,-0.32554"];
      return;

    case "GreggSh":
    case "GreggCh":
    case "GreggJ":
      this.dp = after_CH.dp;
      this.paths = after_CH.paths;
      return;

  }

  switch (_head) {
    case "C":
      this.dp = p(-2.86436, 0.17299);
      this.paths = ["m 0 0 c -0.784766 1.74476 -3.19525 2.60409 -4.26711 2.03439 c -1.07186 -0.5697 -0.01844 -1.48059 1.40275 -1.8614"];
      return;
  }

  this.setPathsFromObject(PATHS.E.default);
};

GreggO = function() { GreggChar.call(this, "GreggO", "o", "USW2.5", "SWL", "NEL", "black", false, p(0.8, -0.8)); };
GreggO.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["o"] = GreggO;

GreggO.prototype.setPaths = function() {
    this.dp = p(1.55203, 0.37548);
    this.paths = ["m 0 0 c 0 0 -1.2339 1.20111 -0.62581 1.60208 c 0.69557 0.45865 2.17784 -1.2266 2.17784 -1.2266"];
};

GreggU = function() { GreggChar.call(this, "GreggU", "u", "UNER2.5", "NER", "SWR", "black", false, p(0.0, 0.5)); };
GreggU.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["u"] = GreggU;

GreggU.prototype.setPaths = function() {
  this.dp = p(1.57581, 0.15373);
  this.paths = ["m 0 0 c 0 0 1.50684 -1.63569 2.128 -1.10768 c 0.40108 0.34093 -0.18201 0.96527 -0.55219 1.26141"];
};

GreggTen = function() { GreggChar.call(this, "GreggTen", "tn", "NER9", "NER", "NER", "black", false, p(0.0, 2.7)); };
GreggTen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["tn"] = GreggTen;
GreggChar.dict["dn"] = GreggTen;

GreggTen.prototype.setPaths = function() {
  this.dp = p(7.39164, -5.32084);
  this.paths = ["m 0 0 c 0 -2.6277 4.99909 -5.32084 7.39164 -5.32084"];
};

GreggTm = function() { GreggChar.call(this, "GreggTm", "tm", "NER17", "NER", "NER", "black", false, p(0.2, 4.3)); };
GreggTm.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["tm"] = GreggTm;
GreggChar.dict["dm"] = GreggTm;

GreggTm.prototype.setPaths = function() {
  this.dp = p(14.7224, -8.5);
  this.paths = ["m 0 0 c -2.04411 -3.54051 11.6218 -9.24816 14.7224 -8.5"];
};

GreggNt = function() { GreggChar.call(this, "GreggNt", "nt", "NEL10", "NEL", "NEL", "black", false, p(0.0, 2.9)); };
GreggNt.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["nt"] = GreggNt;
GreggChar.dict["nd"] = GreggNt;

GreggNt.prototype.setPaths = function() {
  this.dp = p(8.19152, -5.73577);
  this.paths = ["m 0 0 c 3.13717 0 6.54403 -2.88223 8.19152 -5.73577"];
};

GreggMt = function() { GreggChar.call(this, "GreggMt", "mt", "NEL15", "NEL", "NEL", "black", false, p(0.0, 4.2)); };
GreggMt.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["mt"] = GreggMt;
GreggChar.dict["md"] = GreggMt;

GreggMt.prototype.setPaths = function() {
  this.dp = p(12.2873, -8.60365);
  this.paths = ["m 0 0 c 4.2672 1.14339 12.2873 -5.77168 12.2873 -8.60365"];
};

GreggDf = function() { GreggChar.call(this, "GreggDf", "df", "UNER10", "NER", "SWR", "black", false, p(0.4, 3.0)); };
GreggDf.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["df"] = GreggDf;
GreggChar.dict["dv"] = GreggDf;
GreggChar.dict["tv"] = GreggDf;

GreggDf.prototype.setPaths = function() {
  this.dp = p(6.28905, 0.75469);
  this.paths = ["m 0 0 c -2.44631 -1.41238 7.57213 -9.02184 10.4194 -6.16259 c 1.89499 1.90292 -1.73645 5.66827 -4.13039 6.91728"];
};

GreggJnt = function() { GreggChar.call(this, "GreggJnt", "jnt", "USWL9", "SWL", "NEL", "black", false, p(4.1, -4.0)); };
GreggJnt.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["jnt"] = GreggJnt;
GreggChar.dict["jnd"] = GreggJnt;
GreggChar.dict["pnt"] = GreggJnt;
GreggChar.dict["pnd"] = GreggJnt;

GreggJnt.prototype.setPaths = function() {
  this.dp = p(5.48515, 1.41858);
  this.paths = ["m 0 0 c -4.84052 2.79467 -4.86817 6.02382 -2.69529 7.61302 c 2.76078 2.01917 9.10396 -2.7478 8.18044 -6.19444"];
};

GreggPeriod = function() { GreggChar.call(this, "GreggPeriod", "period", "SE3", "SE", "SE", "black", false, p(0.0, 0.0)); };
GreggPeriod.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["."] = GreggPeriod;

GreggPeriod.prototype.setPaths = function() {
  this.dp = p(1.76777, 1.76777);
  this.paths = ["m 0 0 l 1.76777 1.76777"];
};

GreggParagraph = function() { GreggChar.call(this, "GreggParagraph", ">", "SE3SW3", "SE", "SW", "black", false, p(0.2, -1.5)); };
GreggParagraph.prototype = Object.create(GreggChar.prototype);
GreggChar.dict[">"] = GreggParagraph;

GreggParagraph.prototype.setPaths = function() {
  this.dp = p(-0.188166, 3.01068);
  this.paths = ["m 0 0 l 3.01068 1.44262 l -3.19884 1.56806"];
};

GreggInterrogation = function() { GreggChar.call(this, "GreggInterrogation", "?", "SW3XSE2", "SW", "XSE", "black", false, p(2.7, -0.9)); };
GreggInterrogation.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["?"] = GreggInterrogation;

GreggInterrogation.prototype.setPaths = function() {
  this.dp = p(-0.56098, 1.63196);
  this.paths = ["m 0 0 l -2.65193 1.86145", "m -1.68295 -0.0255 l 1.12197 1.65746"];
};

GreggDash = function() { GreggChar.call(this, "GreggDash", "=", "NE9/NE9", "NE", "NE", "black", false, p(0.0, 0.1)); };
GreggDash.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["="] = GreggDash;

GreggDash.prototype.setPaths = function() {
  this.dp = p(8.81902, 0);
  this.paths = ["m 0 0 l 9.26999 -1.15249", "m 0.20043 0.95205 l 8.61859 -0.95205"];
};

GreggHyphen = function() { GreggChar.call(this, "GreggHyphen", "-", "NE3/NE3", "NE", "NE", "black", false, p(0.0, 0.2)); };
GreggHyphen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["-"] = GreggHyphen;

GreggHyphen.prototype.setPaths = function() {
  this.dp = p(3.62613, -0.50363);
  this.paths = ["m 0 0 l 2.86062 -0.90653", "m 0.50364 0.54392 l 3.12249 -1.04755"];
};

GreggLparen = function() { GreggChar.call(this, "GreggLparen", "{", "SWL14XE4", "SWL", "E", "black", false, p(9.6, -6.0)); };
GreggLparen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["{"] = GreggLparen;

GreggLparen.prototype.setPaths = function() {
  this.dp = p(-5.05572 + 1, 7.7858);
  this.paths = ["m 0 0 c -4.3274 2.49843 -11.5186 9.32289 -6.82522 12.0326", "m -9.55531 8.08915 l 4.49959 -0.30335"];
};

GreggRparen = function() { GreggChar.call(this, "GreggRparen", "}", "SWR14XE4", "SWR", "E", "black", false, p(7.7, -5.9)); };
GreggRparen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["}"] = GreggRparen;

GreggRparen.prototype.setPaths = function() {
  this.dp = p(1.01114 + 1, 7.28024);
  this.paths = ["m 0 0 c 4.36948 1.1708 -4.489 11.2391 -7.73525 11.7798", "m -4.09513 7.68469 l 5.10627 -0.40445"];
};

GreggComma = function() { GreggChar.call(this, "GreggComma", ",", "SWR1", "SWR", "SWR", "black", false, p(0.8, 2)); };
GreggComma.prototype = Object.create(GreggChar.prototype);
GreggChar.dict[","] = GreggComma;

GreggComma.prototype.setPaths = function() {
  this.dp = p(-0.76722 + 1, 0.9386 + 1);
  this.paths = ["m 1 1 c -0.0503 0.0587 -0.62881 -0.49788 -0.0457 -0.69136 c 0.22191 -0.0736 0.18473 0.18808 0.18546 0.30789 c 0.003 0.53578 -0.69905 1.3394 -0.90698 1.32207"];
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

