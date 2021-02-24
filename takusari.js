TakusariChar = function(name, kana, model, headType, tailType, color) { Char.apply(this, arguments); };
TakusariChar.prototype = Object.create(Char.prototype);
TakusariChar.dict = {};
Char.catalog["takusari"] = TakusariChar.dict;

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

