NakaneChar = function(name, kana, model, headType, tailType, color, bold, offset) { Char.apply(this, arguments); };
NakaneChar.prototype = Object.create(Char.prototype);
NakaneChar.dict = {};
Char.catalog["nakane"] = NakaneChar.dict;

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
    case "SER17_SW":
      this.dp = p(0, -3.5);
      return;
  }

  //switch (model_) {}

  switch (tail_ + "_" + _name) {
    case "E_NakaneKou":
      this.dp = p(-0.8, -1.4);
      return;
  }

  switch (tail_ + "_" + _model) {
    case "SEL_CR1SW17":
    case "SEL_SW17":
      this.dp = p(-1, -2);
      return;
  }

  switch (tail_ + "_" + _head) {
    case "E_E":
      this.dp = p(-2, 2);
      return;

    case "SR_SR":
      this.dp = p(0, -3);
      return;

    case "SER_SER":
      this.dp = p(-3, -1.8);
      return;
  }

  //switch (tail_) {}

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
  
  this.dp = p(5, 0);
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

NakaneMan = function() { NakaneChar.call(this, "NakaneMan", "まん", "CR1ER7", "C", "ER", "black", false, p(0.6, -0.4)); };
NakaneMan.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["まん"] = NakaneMan;

NakaneMan.prototype.setPaths = function() {
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
    case "NakaneShi":
    case "NakaneShiu":
    case "NakaneShin":
      this.dp = p(6.41101, 0.47825);
      this.paths = ["m 0 0 c 0.690568 0.14957 0.759364 -1.1664 0.09713 -1.34333 c -0.400031 -0.10688 -0.8793 0.57109 -0.774024 0.97155 c 0.07798 0.29664 0.715222 0.41388 0.85316 0.34466 c 2.02257 -1.01503 5.26759 -0.66963 6.23474 0.50537"];
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

  this.dp = p(6.23474, 0.50537);
  this.paths = ["m 0 0 c 0.677358 -0.004 0.795881 0.99996 0.36706 1.35399 c -0.340538 0.28114 -0.948956 0.01 -0.998638 -0.50967 c -0.05025 -0.52507 0.49364 -0.7751 0.631578 -0.84432 c 2.02257 -1.01503 5.26759 -0.66963 6.23474 0.50537"];
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
    case "SW":
      this.dp = p(6.4268, -4.62556);
      this.paths = ["m 0 0 c 0.639178 -1.10709 1.63905 -2.38784 2.79881 -3.20383 c 1.06229 -0.747407 2.48903 -1.42173 3.62799 -1.42173"];
      return;

    case "SER":
      this.dp = p(5.78165, -5.56505);
      this.paths = ["m 0 0 c -0.286898 -1.07072 -0.465803 -1.84091 -0.021869 -2.57592 c 1.12501 -1.86264 4.30528 -2.7364 5.80352 -2.98913"];
      return;

    case "SE":
      this.dp = p(3.90218, -5.52637);
      this.paths = ["m 0 0 c -0.685619 -0.395842 -0.883659 -0.536943 -1.40939 -0.932813 c -0.446871 -0.33648 -0.709182 -1.08894 -0.49195 -1.60443 c 0.845037 -2.00524 4.30528 -2.7364 5.80352 -2.98913"];
      return;

    case "E":
      this.dp = p(3.43082, -4.51958);
      this.paths = ["m 0 0 c -0.851411 0.091063 -2.16542 -0.212538 -1.7445 -1.52689 c 0.627625 -1.96045 5.17532 -2.99269 5.17532 -2.99269"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(3.33759, -4.62816);
  this.paths = ["m 0 0 c -0.68562 0.39584 -1.44825 0.36127 -1.97398 -0.0346 c -0.446871 -0.33648 -0.709182 -1.08894 -0.49195 -1.60443 c 0.845037 -2.00524 4.30528 -2.7364 5.80352 -2.98913"];
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

NakaneTau = function() { NakaneChar.call(this, "NakaneTau", "たう", "UNWR2SE7", "NWR", "SE", "black", false, p(0.6, 0.1)); };
NakaneTau.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["たう"] = NakaneTau;
NakaneChar.dict["たー"] = NakaneTau;
NakaneChar.dict["たあ"] = NakaneTau;
NakaneChar.dict["ちゃー"] = NakaneTau;
NakaneChar.dict["ちゃあ"] = NakaneTau;

NakaneTau.prototype.setPaths = function() {
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
    case "SW":
      this.dp = p(7.52615, 2.12022);
      this.paths = ["m 0 0 c 0.763942 -1.32319 1.35039 -1.44494 1.99753 -1.07134 l 5.52862 3.19156"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(6.45556, 1.55943);
  this.paths = ["m 0 0 c -1.61343 -2.09969 0.279789 -2.00573 0.926933 -1.63213 l 5.52862 3.19156"];
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
    case "SW":
      this.dp = p(14.8009, -5.56544);
      this.paths = ["m 0 0 c -2.16624 -0.580442 -3.16627 4.80923 1.61164 2.0507 l 13.1893 -7.61614"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}
  
  this.dp = p(14.801, -5.56544);
  this.paths = ["m 0 0 c -0.7807 1.55675 -0.329385 3.17154 1.61164 2.0507 l 13.1893 -7.61614"];
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


NakaneNau = function() { NakaneChar.call(this, "NakaneNau", "なう", "HEL7", "SWL", "EL", "black", false, p(1.9, -1.5)); };
NakaneNau.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["なう"] = NakaneNau;
NakaneChar.dict["なあ"] = NakaneNau;
NakaneChar.dict["なー"] = NakaneNau;
NakaneChar.dict["にゃー"] = NakaneNau;

NakaneNau.prototype.setPaths = function() {
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

  this.dp = p(5.52111, 1.25797);
  this.paths = ["m 0 0 c -1.14435 -0.13871 -2.74587 1.62051 -1.29292 2.481 c 1.98555 1.1759 5.7632 -0.27349 6.81403 -1.22303"];
};

NakaneNiu = function() { NakaneChar.call(this, "NakaneNiu", "にう", "HEL7", "SWL", "EL", "black", true, p(1.9, -1.5)); };
NakaneNiu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["にう"] = NakaneNiu;
NakaneChar.dict["にゅう"] = NakaneNiu;
NakaneChar.dict["にゅー"] = NakaneNiu;
NakaneNiu.prototype.setPaths = NakaneNau.prototype.setPaths;

NakaneNuu = function() { NakaneChar.call(this, "NakaneNuu", "ぬう", "HEL17", "SWL", "HEL", "black", false, p(1.5, -1.6)); };
NakaneNuu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ぬう"] = NakaneNuu;
NakaneChar.dict["ぬー"] = NakaneNuu;

NakaneNuu.prototype.setPaths = function() {
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

  this.dp = p(15.3088, 1.30726);
  this.paths = ["m 0 0 c -2.66945 1.16498 -1.79435 2.97213 -0.0084 3.57213 c 5.03403 1.69123 11.3577 0.14303 15.3172 -2.26487"];
};

NakaneNuu.prototype.setPathsExtra = function() {
  this.pathsExtra  = ["m5.7815142,1.0540401  v 0.1"];
};

NakaneNeu = function() { NakaneChar.call(this, "NakaneNeu", "ねう", "HEL17", "SWL", "HEL", "black", true, p(1.5, -1.6)); };
NakaneNeu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ねう"] = NakaneNeu;
NakaneChar.dict["にょう"] = NakaneNeu;
NakaneChar.dict["にょー"] = NakaneNeu;
NakaneNeu.prototype.setPaths = NakaneNuu.prototype.setPaths;

NakaneNou = function() { NakaneChar.call(this, "NakaneNou", "のう", "HEL17", "SWL", "HEL", "black", false, p(1.5, -1.6)); };
NakaneNou.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["のう"] = NakaneNou;
NakaneChar.dict["のお"] = NakaneNou;
NakaneChar.dict["のー"] = NakaneNou;
NakaneNou.prototype.setPaths = NakaneNuu.prototype.setPaths;

NakaneHau = function() { NakaneChar.call(this, "NakaneHau", "はう", "HSR7", "HSR", "SR", "black", false, p(0.2, -2.0)); };
NakaneHau.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["はう"] = NakaneHau;
NakaneChar.dict["はあ"] = NakaneHau;
NakaneChar.dict["はー"] = NakaneHau;
NakaneChar.dict["ひゃあ"] = NakaneHau;
NakaneChar.dict["ひゃー"] = NakaneHau;

NakaneHau.prototype.setPaths = function() {
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

  this.dp = p(-0.195286, 5.56152);
  this.paths = ["m 0 0 c 0 -0.93297 0.593288 -1.58723 1.22043 -1.4726 c 0.742826 0.13578 0.766698 1.38837 0.735062 2.14283 c -0.07462 1.77953 -1.27029 4.38294 -2.15077 4.89129"];
};

NakaneHiu = function() { NakaneChar.call(this, "NakaneHiu", "ひう", "HSL7", "HSL", "SL", "black", false, p(1.9, -2.6)); };
NakaneHiu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ひう"] = NakaneHiu;
NakaneChar.dict["ひゅう"] = NakaneHiu;
NakaneChar.dict["ひゅー"] = NakaneHiu;

NakaneHiu.prototype.setPaths = function() {
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

  this.dp = p(-0.695174, 6.10452);
  this.paths = ["m 0 0 c 0 -0.59626 -0.414786 -0.86825 -0.804485 -0.85005 c -0.51575 0.0241 -0.832202 0.71791 -0.955177 1.21937 c -0.46311 1.88843 0.130201 4.80091 1.06449 5.7352"];
};

NakaneHuu = function() { NakaneChar.call(this, "NakaneHuu", "ふう", "HNE7", "HNE", "NE", "black", false, p(0.3, 0.1)); };
NakaneHuu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ふう"] = NakaneHuu;
NakaneChar.dict["ふー"] = NakaneHuu;

NakaneHuu.prototype.setPaths = function() {
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

  this.dp = p(6.04579, -1.89148);
  this.paths = ["m 0 0 c -0.611551 0.66251 -0.290925 2.20169 1.16042 1.34609 c 1.68292 -0.99213 4.88537 -3.23757 4.88537 -3.23757"];
};


NakaneHeu = function() { NakaneChar.call(this, "NakaneHeu", "へう", "HSL17", "HSL", "SL", "black", false, p(4.5, -6.4)); };
NakaneHeu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["へう"] = NakaneHeu;
NakaneChar.dict["ひょう"] = NakaneHeu;
NakaneChar.dict["ひょー"] = NakaneHeu;

NakaneHeu.prototype.setPaths = function() {
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

  this.dp = p(-2.55557, 14.9075);
  this.paths = ["m 0 0 c 0 -1.61589 -0.68397 -2.0723 -1.54573 -2.07229 c -1.2042 2e-05 -1.82745 1.73842 -2.15988 2.89582 c -1.30029 4.52725 -1.07476 11.8592 1.15004 14.084"];
};


NakaneHou = function() { NakaneChar.call(this, "NakaneHou", "ほう", "HSR17", "HSR", "SR", "black", false, p(0.0, -6.9)); };
NakaneHou.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ほう"] = NakaneHou;
NakaneChar.dict["ほお"] = NakaneHou;
NakaneChar.dict["ほー"] = NakaneHou;

NakaneHou.prototype.setPaths = function() {
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

  this.dp = p(0.8154, 15.4926);
  this.paths = ["m 0 0 c 0.32272 -1.20443 1.02515 -1.77925 1.82823 -1.63096 c 1.18931 0.21961 1.49351 2.02594 1.66633 3.22293 c 0.67429 4.67038 0.10724 11.1142 -2.67916 13.9006"];
};

NakaneMau = function() { NakaneChar.call(this, "NakaneMau", "まう", "HER7", "HER", "ER", "black", false, p(1.7, 1.2)); };
NakaneMau.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["まう"] = NakaneMau;
NakaneChar.dict["まあ"] = NakaneMau;
NakaneChar.dict["まー"] = NakaneMau;
NakaneChar.dict["みゃあ"] = NakaneMau;
NakaneChar.dict["みゃー"] = NakaneMau;

NakaneMau.prototype.setPaths = function() {
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

  this.dp = p(4.87309, -1.31198);
  this.paths = ["m 0 0 c -0.512461 -0.0405 -1.54022 -0.15072 -1.71705 -0.7497 c -0.138788 -0.47011 0.367641 -1.01912 0.812018 -1.22599 c 1.75757 -0.81826 4.39459 -0.56608 5.77811 0.66371"];
};

NakaneMiu = function() { NakaneChar.call(this, "NakaneMiu", "みう", "HER7", "HER", "ER", "black", true, p(1.7, 1.2)); };
NakaneMiu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["みう"] = NakaneMiu;
NakaneChar.dict["みゅう"] = NakaneMiu;
NakaneChar.dict["みゅー"] = NakaneMiu;
NakaneMiu.prototype.setPaths = NakaneMau.prototype.setPaths;



NakaneMou = function() { NakaneChar.call(this, "NakaneMou", "もう", "HER17", "HER", "ER", "black", false, p(3.7, 2.3)); };
NakaneMou.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["もう"] = NakaneMou;
NakaneChar.dict["もー"] = NakaneMou;
NakaneChar.dict["もお"] = NakaneMou;

NakaneMou.prototype.setPaths = function() {
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
  this.dp = p(14.251, -1.61198);
  this.paths = ["m 0 0 c -0.9061 0.24279 -1.64997 0.23565 -1.92799 -0.35578 c -0.41068 -0.87361 0.55956 -2.07587 1.41234 -2.52823 c 4.36442 -2.31512 11.0533 -1.8461 14.7666 1.27203"];
};

NakaneMeu = function() { NakaneChar.call(this, "NakaneMeu", "もう", "HER17", "HER", "ER", "black", true, p(3.7, 2.3)); };
NakaneMeu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["めう"] = NakaneMeu;
NakaneChar.dict["みょう"] = NakaneMeu;
NakaneChar.dict["みょー"] = NakaneMeu;
NakaneMeu.prototype.setPaths = NakaneMou.prototype.setPaths;

NakaneMuu = function() { NakaneChar.call(this, "NakaneMuu", "むう", "HER17", "HER", "ER", "black", false, p(3.7, 2.3)); };
NakaneMuu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["むう"] = NakaneMuu;
NakaneChar.dict["むー"] = NakaneMuu;

NakaneMuu.prototype.setPaths = function() {
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
  this.dp = p(14.251, -1.61198);
  this.paths = ["m 0 0 c -0.906103 0.24279 -1.64996 0.23565 -1.92799 -0.35578 c -0.410679 -0.87361 0.559563 -2.07587 1.41234 -2.52823 c 4.36442 -2.31512 11.0533 -1.8461 14.7666 1.27203"];
};

NakaneMuu.prototype.setPathsExtra= function() {
  this.pathsExtra = [, "m 5.70251 -5.6324 v 0.1"];
};

NakaneYau = function() { NakaneChar.call(this, "NakaneYau", "やう", "HSWL7", "HSWL", "SWL", "black", false, p(5.5, -0.2)); };
NakaneYau.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["やう"] = NakaneYau;
NakaneChar.dict["やあ"] = NakaneYau;
NakaneChar.dict["やー"] = NakaneYau;

NakaneYau.prototype.setPaths = function() {
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

  this.dp = p(-5.45367, 2.24904);
  this.paths = ["m 0 0 c 0.360783 -0.6249 0.236724 -1.25112 -0.164817 -1.61276 c -0.457324 -0.41188 -1.285 -0.24743 -1.84637 0.005 c -1.57179 0.70638 -2.6199 2.43205 -3.44249 3.8568"];
};

NakaneYuu = function() { NakaneChar.call(this, "NakaneYuu", "ゆう", "HNER7", "HNER", "NER", "black", false, p(2.5, 2.2)); };
NakaneYuu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ゆう"] = NakaneYuu;
NakaneChar.dict["ゆー"] = NakaneYuu;
NakaneYuu.prototype.setPaths = NakaneIu.prototype.setPaths; 

//NakaneYuu.prototype.setPaths = function() {
//  //const name_ = this.getPrevName();
//  //const model_ = this.getPrevModel();
//  //const tail_ = this.getPrevTailType();
//  //const _name = this.getNextName();
//  //const _model = this.getNextModel();
//  //const _head = this.getNextHeadType();
//
//  //switch (name_ + "_" + _name) {}
//
//  //switch (name_ + "_" + _model) {}
//
//  //switch (name_ + "_" + _head) {}
//
//  //switch (name_) {}
//
//  //switch (model_ + "_" + _name) {}
//
//  //switch (model_ + "_" + _model) {}
//
//  //switch (model_ + "_" + _head) {}
//
//  //switch (model_) {}
//
//  //switch (tail_ + "_" + _name) {}
//
//  //switch (tail_ + "_" + _model) {}
//
//  //switch (tail_ + "_" + _head) {}
//
//  //switch (tail_) {}
//
//  //switch (_name) {}
//
//  //switch (_model) {}
//
//  //switch (_head) {}
//
//  this.dp = p(3.33759, -4.62816);
//  this.paths = ["m 0 0 c -0.68562 0.39584 -1.44825 0.36127 -1.97398 -0.0346 c -0.446871 -0.33648 -0.709182 -1.08894 -0.49195 -1.60443 c 0.845037 -2.00524 4.30528 -2.7364 5.80352 -2.98913"];
//};

NakaneYou = function() { NakaneChar.call(this, "NakaneYou", "よう", "HNER17", "HNER", "NER", "black", false, p(4.0, 5.9)); };
NakaneYou.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["よう"] = NakaneYou;
NakaneChar.dict["よー"] = NakaneYou;
NakaneChar.dict["よお"] = NakaneYou;

NakaneYou.prototype.setPaths = function() {
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
    case "SE":
    case "SER":
      this.dp = p(12.3247, -11.588);
      this.paths = ["m 0 0 c -0.585942 -1.01488 -0.728548 -2.01929 -0.323034 -2.9053 c 2.12817 -4.64987 8.49076 -7.56885 12.6477 -8.68271"];
      return;
  }

  //switch (_name) {}

  //switch (_model) {}

  //switch (_head) {}

  this.dp = p(8.91419, -11.7216);
  this.paths = ["m 0 0 c -1.55213 0 -2.96159 -0.0217 -3.7415 -1.05669 c -0.39762 -0.52768 -0.301 -1.39813 0.008 -1.98216 c 2.39131 -4.52018 8.49076 -7.56885 12.6477 -8.68271"];
};

NakaneRau = function() { NakaneChar.call(this, "NakaneRau", "らう", "HSWR", "SWR", "HSWR", "black", false, p(2.1, -2.1)); };
NakaneRau.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["らう"] = NakaneRau;
NakaneChar.dict["らあ"] = NakaneRau;
NakaneChar.dict["らー"] = NakaneRau;
NakaneChar.dict["りゃあ"] = NakaneRau;
NakaneChar.dict["りゃー"] = NakaneRau;

NakaneRau.prototype.setPaths = function() {
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

  this.dp = p(-2.11198, 4.965);
  this.paths = ["m 0 0 c 0.650934 -0.65093 1.29019 -0.92463 1.79647 -0.55516 c 0.508176 0.37085 0.268371 1.30952 0.01929 1.88722 c -0.7061 1.63769 -2.54881 3.26346 -3.92774 3.63294"];
};

NakaneRiu = function() { NakaneChar.call(this, "NakaneRiu", "りう", "HSWR", "HSWR", "SWR", "black", true, p(2.1, -2.1)); };
NakaneRiu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["りう"] = NakaneRiu;
NakaneChar.dict["りゅう"] = NakaneRiu;
NakaneChar.dict["りゅー"] = NakaneRiu;
NakaneRiu.prototype.setPaths = NakaneRau.prototype.setPaths;

NakaneReu = function() { NakaneChar.call(this, "NakaneReu", "れう", "HSWR17", "HSWR", "SWR", "black", true, p(8.0, -5.0)); };
NakaneReu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["れう"] = NakaneReu;
NakaneChar.dict["りょう"] = NakaneReu;
NakaneChar.dict["りょー"] = NakaneReu;

NakaneReu.prototype.setPaths = function() {
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

      this.dp = p(-8.03321, 11.4375);
      this.paths = ["m 0 0 c 0.85081 -0.85081 2.1127 -1.77139 3.01539 -1.17972 c 0.9844 0.64522 0.61803 2.45643 0.13231 3.52854 c -1.98206 4.37494 -9.47731 8.63225 -11.1809 9.08873"];
};

NakaneRou = function() { NakaneChar.call(this, "NakaneRou", "ろう", "HSWR17", "HSWR", "SWR", "black", false, p(8.0, -5.0)); };
NakaneRou.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["ろう"] = NakaneRou;
NakaneChar.dict["ろお"] = NakaneRou;
NakaneChar.dict["ろー"] = NakaneRou;
NakaneRou.prototype.setPaths = NakaneReu.prototype.setPaths;

NakaneRuu = function() { NakaneChar.call(this, "NakaneRuu", "るう", "HSWR17", "HSWR", "SWR", "black", false, p(8.0, -5.0)); };
NakaneRuu.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["るう"] = NakaneRuu;
NakaneChar.dict["るー"] = NakaneRuu;
NakaneRuu.prototype.setPaths = NakaneReu.prototype.setPaths;
NakaneRuu.prototype.setPathsExtra = function() {
  this.pathsExtra = ["m -1.250913,4.35925 v 0.1"];
};


NakaneWau = function() { NakaneChar.call(this, "NakaneWau", "わう", "HSWL17", "HSWL", "SWL", "black", true, p(14.6, -1.5)); };
NakaneWau.prototype = Object.create(NakaneChar.prototype);
NakaneChar.dict["わう"] = NakaneWau;
NakaneChar.dict["わあ"] = NakaneWau;
NakaneChar.dict["わー"] = NakaneWau;

NakaneWau.prototype.setPaths = function() {
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

  this.dp = p(-13.205, 7.29197);
  this.paths = ["m 0 0 c 0 -1.19549 0.341805 -2.86221 -0.625162 -3.60597 c -0.618156 -0.47547 -1.35671 -0.19274 -2.33057 0.2052 c -3.96724 1.62107 -9.34315 7.31106 -10.2493 10.6927"];
};

