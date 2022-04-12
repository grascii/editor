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
GreggChar.dict["K"] = GreggK;

GreggK.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.K.default)
};

GreggG = function() { GreggChar.call(this, "GreggG", "g", "ER14", "ER", "ER", "black", false, p(0.0, 1.3)); };
GreggG.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["G"] = GreggG;

GreggG.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.G.default);
};

GreggR = function() { GreggChar.call(this, "GreggR", "r", "EL7", "EL", "EL", "black", false, p(0.0, -0.6)); };
GreggR.prototype = Object.create(GreggChar.prototype);
//GreggChar.dict["R"] = GreggR;

GreggR.prototype.setPaths = function() {
  this.dp = p(0, 0);
  this.paths = [];
  this.addPathsFromObject(PATHS.R.default_head);
  this.addPathsFromObject(PATHS.R.default_tail);
};

GreggRHead = function() { GreggChar.call(this, "GreggR", "r", "EL7", "EL", "EL", "black", false, p(0.0, -0.6)); };
GreggRHead.prototype = Object.create(GreggChar.prototype);

GreggRHead.prototype.setPaths = function() {
  if (this.getPrevTailType() == "SWR") {
    this.setPathsFromObject(PATHS.R.after_GreggF);
    return;
  }
  this.setPathsFromObject(PATHS.R.default_head);
};

GreggRTail = function() { GreggChar.call(this, "GreggR", "r", "EL7", "EL", "EL", "black", false, p(0.0, -0.6)); };
GreggRTail.prototype = Object.create(GreggChar.prototype);

GreggRTail.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.R.default_tail);
};

GreggChar.dict["R"] = [GreggRHead, GreggRTail];

GreggL = function() { GreggChar.call(this, "GreggL", "l", "EL14", "EL", "EL", "black", false, p(0.0, -1.2)); };
GreggL.prototype = Object.create(GreggChar.prototype);

GreggL.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.L.default);
};

GreggLHead = function() { GreggChar.call(this, "GreggL", "l", "EL14", "EL", "EL", "black", false, p(0.0, -1.2)); };
GreggLHead.prototype = Object.create(GreggChar.prototype);

GreggLHead.prototype.setPaths = function() {
  if (this.getPrevTailType() == "SWR") {
    this.setPathsFromObject(PATHS.L.after_GreggF);
    return;
  }
  this.setPathsFromObject(PATHS.L.default_head);
};

GreggLTail = function() { GreggChar.call(this, "GreggL", "l", "EL14", "EL", "EL", "black", false, p(0.0, -1.2)); };
GreggLTail.prototype = Object.create(GreggChar.prototype);

GreggLTail.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.L.default_tail);
};

GreggChar.dict["L"] = [GreggLHead, GreggLTail];

GreggN = function() { GreggChar.call(this, "GreggN", "n", "E4", "E", "E", "black", false, p(0.0, 0.0)); };
GreggN.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["N"] = GreggN;

GreggN.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.N.default)
};

GreggM = function() { GreggChar.call(this, "GreggM", "m", "E10", "E", "E", "black", false, p(0.0, 0.0)); };
GreggM.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["M"] = GreggM;

GreggM.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.M.default);
};

GreggT = function() { GreggChar.call(this, "GreggT", "t", "NE4", "NE", "NE", "black", false, p(0.0, 1.0)); };
GreggT.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["T"] = GreggT;

GreggT.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.T.default);
};

GreggD = function() { GreggChar.call(this, "GreggD", "d", "NE10", "NE", "NE", "black", false, p(0.0, 2.5)); };
GreggD.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["D"] = GreggD;

GreggD.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.D.default);
};

GreggTh = function() { GreggChar.call(this, "GreggTh", "th", "NER4", "NER", "NER", "black", false, p(0.0, 1.1)); };
GreggTh.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["TH"] = GreggTh;

GreggTh.prototype.setPaths = function() {
  this.dp = p(3.2766, -2.29431);
  this.paths = ["m 0 0 c -0.084533 -1.22722 2.78425 -2.19996 3.2766 -2.29431"];
};

GreggThL = function() { GreggChar.call(this, "GreggThL", "Th", "NEL4", "NEL", "NEL", "black", false, p(0.0, 1.1)); };
GreggThL.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["THL"] = GreggThL;

GreggThL.prototype.setPaths = function() {
  this.dp = p(3.27661, -2.29431);
  this.paths = ["m 0 0 c 1.32922 0.043491 2.69759 -1.20187 3.27661 -2.29431"];
};

GreggP = function() { GreggChar.call(this, "GreggP", "p", "SWL7", "SWL", "SWL", "black", false, p(4.7, -2.9)); };
GreggP.prototype = Object.create(GreggChar.prototype);
//GreggChar.dict["P"] = GreggP;

GreggP.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.P.default);
};

GreggPHead = function() { GreggChar.call(this, "GreggP", "p", "SWL7", "SWL", "SWL", "black", false, p(4.7, -2.9)); };
GreggPHead.prototype = Object.create(GreggChar.prototype);

GreggPHead.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.P.default_head);
};

GreggPTail = function() { GreggChar.call(this, "GreggP", "p", "SWL7", "SWL", "SWL", "black", false, p(4.7, -2.9)); };
GreggPTail.prototype = Object.create(GreggChar.prototype);

GreggPTail.prototype.setPaths = function() {
  if (this.getNextHeadType() != "EL") {
    this.setPathsFromObject(PATHS.P.default_tail);
  }
};

GreggChar.dict["P"] = [GreggPHead, GreggPTail];

GreggB = function() { GreggChar.call(this, "GreggB", "b", "SWL14", "SWL", "SWL", "black", false, p(11.2, -6.1)); };
GreggB.prototype = Object.create(GreggChar.prototype);

GreggB.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.B.default);
};

GreggBHead = function() { GreggChar.call(this, "GreggB", "b", "SWL14", "SWL", "SWL", "black", false, p(11.2, -6.1)); };
GreggBHead.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["B"] = GreggB;

GreggBHead.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.B.default_head);
};

GreggBTail = function() { GreggChar.call(this, "GreggB", "b", "SWL14", "SWL", "SWL", "black", false, p(11.2, -6.1)); };
GreggBTail.prototype = Object.create(GreggChar.prototype);

GreggBTail.prototype.setPaths = function() {
  if (this.getNextHeadType() != "EL") {
    this.setPathsFromObject(PATHS.B.default_tail);
  }
};

GreggChar.dict["B"] = [GreggBHead, GreggBTail];

GreggF = function() { GreggChar.call(this, "GreggF", "f", "SWR7", "SWR", "SWR", "black", false, p(4.0, -2.9)); };
GreggF.prototype = Object.create(GreggChar.prototype);
//GreggChar.dict["F"] = GreggF;

GreggF.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.F.default);
};

GreggFHead = function() { GreggChar.call(this, "GreggV", "v", "SWR14", "SWR", "SWR", "black", false, p(8.0, -5.7)); };
GreggFHead.prototype = Object.create(GreggChar.prototype);
GreggFHead.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.F.default_head);
};

GreggFTail = function() { GreggChar.call(this, "GreggV", "v", "SWR14", "SWR", "SWR", "black", false, p(8.0, -5.7)); };
GreggFTail.prototype = Object.create(GreggChar.prototype);
GreggFTail.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.F.default_tail);
};
GreggChar.dict["F"] = [GreggFHead, GreggFTail];

GreggV = function() { GreggChar.call(this, "GreggV", "v", "SWR14", "SWR", "SWR", "black", false, p(8.0, -5.7)); };
GreggV.prototype = Object.create(GreggChar.prototype);

GreggV.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.V.default);
};

GreggVHead = function() { GreggChar.call(this, "GreggV", "v", "SWR14", "SWR", "SWR", "black", false, p(8.0, -5.7)); };
GreggVHead.prototype = Object.create(GreggChar.prototype);

GreggVHead.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.V.default_head);
};

GreggVTail = function() { GreggChar.call(this, "GreggV", "v", "SWR14", "SWR", "SWR", "black", false, p(8.0, -5.7)); };
GreggVTail.prototype = Object.create(GreggChar.prototype);

GreggVTail.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.V.default_tail);
};

GreggChar.dict["V"] = [GreggVHead, GreggVTail];

GreggCh = function() { GreggChar.call(this, "GreggCh", "ch", "SW7", "SW", "SW", "black", false, p(4.0, -2.9)); };
GreggCh.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["CH"] = GreggCh;

GreggCh.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.CH.default);
};

GreggJ = function() { GreggChar.call(this, "GreggJ", "j", "SW14", "SW", "SW", "black", false, p(7.0, -6.1)); };
GreggJ.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["J"] = GreggJ;

GreggJ.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.J.default);
};

GreggS = function() { GreggChar.call(this, "GreggS", "S", "SWR3", "SWR", "SWR", "black", false, p(2.1, -1.1)); };
GreggS.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["S"] = GreggS;

GreggS.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.S.default);
};

GreggSL = function() { GreggChar.call(this, "GreggSL", "s", "SWL3", "SWL", "SWL", "black", false, p(1.8, -1.3)); };
GreggSL.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["SL"] = GreggSL;

GreggSL.prototype.setPaths = function() {
  this.setPathsFromObject(PATHS.SL.default);
};

GreggSh = function() { GreggChar.call(this, "GreggSh", "sh", "SW4", "SW", "SW", "black", false, p(2.0, -1.7)); };
GreggSh.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["SH"] = GreggSh;

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
GreggChar.dict["NG"] = GreggNg;

GreggNg.prototype.setPaths = function() {
  this.dp = p(4.33013, 2.5);
  this.paths = ["m 0 0 l 4.33013 2.5"];
};

GreggNk = function() { GreggChar.call(this, "GreggNk", "nk", "SE10", "SE", "SE", "black", false, p(0.0, -2.5)); };
GreggNk.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["NK"] = GreggNk;

GreggNk.prototype.setPaths = function() {
  this.dp = p(8.66025, 5);
  this.paths = ["m 0 0 l 8.66025 5"];
};

GreggA = function() { GreggChar.call(this, "GreggA", "a", "C4", "C", "C", "black", false, p(3.1, -1.8)); };
GreggA.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["A"] = GreggA;

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
GreggChar.dict["E"] = GreggE;

GreggE.prototype.setPaths = function() {

  const adjacentTypes = this.getPrevTailType() + "_" + this.getNextHeadType();
  let pathsObject = PATHS.E[adjacentTypes];
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  const precedingTypes = "before_" + this.getNextName();
  pathsObject = PATHS.E[precedingTypes]
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  const succedingTypes = "after_" + this.getPrevName();
  pathsObject = PATHS.E[succedingTypes]
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  this.setPathsFromObject(PATHS.E.default);
};

GreggO = function() { GreggChar.call(this, "GreggO", "o", "USW2.5", "SWL", "NEL", "black", false, p(0.8, -0.8)); };
GreggO.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["O"] = GreggO;

GreggO.prototype.setPaths = function() {
  const adjacentTypes = this.getPrevTailType() + "_" + this.getNextHeadType();
  let pathsObject = PATHS.O[adjacentTypes];
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  const precedingTypes = "before_" + this.getNextName();
  pathsObject = PATHS.O[precedingTypes]
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  const succedingTypes = "after_" + this.getPrevName();
  pathsObject = PATHS.O[succedingTypes]
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  this.setPathsFromObject(PATHS.O.default);
};

GreggU = function() { GreggChar.call(this, "GreggU", "u", "UNER2.5", "NER", "SWR", "black", false, p(0.0, 0.5)); };
GreggU.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["U"] = GreggU;

GreggU.prototype.setPaths = function() {
  const adjacentTypes = this.getPrevTailType() + "_" + this.getNextHeadType();
  let pathsObject = PATHS.U[adjacentTypes];
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  const precedingTypes = "before_" + this.getNextName();
  pathsObject = PATHS.U[precedingTypes]
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  const succedingTypes = "after_" + this.getPrevName();
  pathsObject = PATHS.U[succedingTypes]
  if (pathsObject) {
    this.setPathsFromObject(pathsObject);
    return;
  }

  this.setPathsFromObject(PATHS.U.default);
};

GreggTen = function() { GreggChar.call(this, "GreggTen", "tn", "NER9", "NER", "NER", "black", false, p(0.0, 2.7)); };
GreggTen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["TN"] = GreggTen;
GreggChar.dict["DN"] = GreggTen;

GreggTen.prototype.setPaths = function() {
  this.dp = p(7.39164, -5.32084);
  this.paths = ["m 0 0 c 0 -2.6277 4.99909 -5.32084 7.39164 -5.32084"];
};

GreggTm = function() { GreggChar.call(this, "GreggTm", "tm", "NER17", "NER", "NER", "black", false, p(0.2, 4.3)); };
GreggTm.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["TM"] = GreggTm;
GreggChar.dict["DM"] = GreggTm;

GreggTm.prototype.setPaths = function() {
  this.dp = p(14.7224, -8.5);
  this.paths = ["m 0 0 c -2.04411 -3.54051 11.6218 -9.24816 14.7224 -8.5"];
};

GreggNt = function() { GreggChar.call(this, "GreggNt", "nt", "NEL10", "NEL", "NEL", "black", false, p(0.0, 2.9)); };
GreggNt.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["NT"] = GreggNt;
GreggChar.dict["ND"] = GreggNt;

GreggNt.prototype.setPaths = function() {
  this.dp = p(8.19152, -5.73577);
  this.paths = ["m 0 0 c 3.13717 0 6.54403 -2.88223 8.19152 -5.73577"];
};

GreggMt = function() { GreggChar.call(this, "GreggMt", "mt", "NEL15", "NEL", "NEL", "black", false, p(0.0, 4.2)); };
GreggMt.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["MT"] = GreggMt;
GreggChar.dict["MD"] = GreggMt;

GreggMt.prototype.setPaths = function() {
  this.dp = p(12.2873, -8.60365);
  this.paths = ["m 0 0 c 4.2672 1.14339 12.2873 -5.77168 12.2873 -8.60365"];
};

GreggDf = function() { GreggChar.call(this, "GreggDf", "df", "UNER10", "NER", "SWR", "black", false, p(0.4, 3.0)); };
GreggDf.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["DF"] = GreggDf;
GreggChar.dict["DV"] = GreggDf;
GreggChar.dict["TV"] = GreggDf;

GreggDf.prototype.setPaths = function() {
  this.dp = p(6.28905, 0.75469);
  this.paths = ["m 0 0 c -2.44631 -1.41238 7.57213 -9.02184 10.4194 -6.16259 c 1.89499 1.90292 -1.73645 5.66827 -4.13039 6.91728"];
};

GreggJnt = function() { GreggChar.call(this, "GreggJnt", "jnt", "USWL9", "SWL", "NEL", "black", false, p(4.1, -4.0)); };
GreggJnt.prototype = Object.create(GreggChar.prototype);
GreggChar.dict["JNT"] = GreggJnt;
GreggChar.dict["JND"] = GreggJnt;
GreggChar.dict["PNT"] = GreggJnt;
GreggChar.dict["PND"] = GreggJnt;

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
GreggChar.dict["("] = GreggLparen;

GreggLparen.prototype.setPaths = function() {
  this.dp = p(-5.05572 + 1, 7.7858);
  this.paths = ["m 0 0 c -4.3274 2.49843 -11.5186 9.32289 -6.82522 12.0326", "m -9.55531 8.08915 l 4.49959 -0.30335"];
};

GreggRparen = function() { GreggChar.call(this, "GreggRparen", "}", "SWR14XE4", "SWR", "E", "black", false, p(7.7, -5.9)); };
GreggRparen.prototype = Object.create(GreggChar.prototype);
GreggChar.dict[")"] = GreggRparen;

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

GreggBoundary = function() { GreggChar.call(this, "GreggBoundary", "-", "", "", "", "black", false, p(0, 0))}
GreggBoundary.prototype = Object.create(GreggChar.prototype);

GreggChar.dict["^"] = CtorMove(2, 2);

// aliases for combo strokes and unmodeled strokes
//GreggChar.dict["Z"] = GreggS;
GreggChar.dict["X"] = GreggS;
GreggChar.dict["LD"] = [GreggL, GreggD];
GreggChar.dict["SS"] = [GreggS, GreggS];
GreggChar.dict["XS"] = [GreggS, GreggS];
GreggChar.dict["MN"] = [GreggM, GreggN];
GreggChar.dict["MM"] = [GreggM, GreggN];
GreggChar.dict["DT"] = [GreggD, GreggT];
GreggChar.dict["TD"] = [GreggD, GreggT];
GreggChar.dict["DD"] = [GreggD, GreggT];
GreggChar.dict["I"] = GreggA;
GreggChar.dict["A&'"] = GreggA;
GreggChar.dict["A&E"] = GreggA;
GreggChar.dict["EU"] = [GreggE, GreggU];
GreggChar.dict["AU"] = [GreggA, GreggU];
GreggChar.dict["OE"] = [GreggO, GreggE];
