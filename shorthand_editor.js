const viewer = document.getElementById("svg_viewer");
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("id", "svg_root");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
svg.setAttribute("version", "1.1");
svg.setAttribute("viewBox", "0 0 210 297");
svg.setAttribute("width", "210mm");
svg.setAttribute("height", "297mm");
svg.setAttribute("data-text", "");
const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
g.setAttribute("id", "page");
g.setAttribute("transform", "scale(1, 1) translate(0)");
g.setAttribute("style", "fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1");
svg.appendChild(g);
viewer.appendChild(svg);
const styleAnimation = document.createElement("style");
styleAnimation.setAttribute("id", "style_animation");
svg.appendChild(styleAnimation);

const input = document.getElementById("input");
input.addEventListener("input", function() { updateSVG(false); });

const fileNameInput = document.getElementById("page_name");

const downloadButtonSVG = document.getElementById("download_button_svg");
downloadButtonSVG.addEventListener("click", downloadSVG);

const downloadButtonPNG = document.getElementById("download_button_png");
downloadButtonPNG.addEventListener("click", downloadPNG);

const save_button = document.getElementById("save_button");
save_button.addEventListener("click", savePage);

const pageList = document.getElementById("savedPageList");
const storage = localStorage;
console.log(storage.getItem("new_page"));
//input.value = storage.getItem(storage.key(0));
////input.value = storage.getItem(storage.getItem("new_page")); //|| storage.getItem(storage.key(0));
//for (var i = 0; i < storage.length; i++) {
//  const opt = document.createElement("option");
//  opt.text = storage.key(i);
//  opt.value = storage.key(i);
//  pageList.add(opt);
//}
pageList.size = storage.length;

fileNameInput.value = storage.key(0); 

const event = new Event("input", {
  bubbles: true,
  cancelable: true
});
input.dispatchEvent(event);


 

const divObjects = document.getElementById("objects");
//divObjects.innerHTML = Object.keys(window).toString().split(",").filter(function(el) {
//  return el.search(/^(?:Waseda|Nakane|Svsd|Shugiin|Char)/) !== -1;
//}).join("<br>");

function setMirrorMode(mirrored) {
  const g = document.getElementById("page");
  g.setAttribute("transform", "scale(" + (mirrored ? -1 : 1) + ", 1) translate(" + (mirrored ? -svg.viewBox.baseVal.width : 0) + ")");
}

function downloadSVG() {
  const svg = document.getElementById('svg_root');
  const svgStr = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([svgStr], {type: "data:image/svg+xml;charset=utf-8"});
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "download.svg";
  a.click();
  window.setTimeout(function() {
    window.URL.revokeObjectURL(url);
  }, 10);
}

function downloadPNG() {
  const svg = document.getElementById('svg_root');
  const svgStr = new XMLSerializer().serializeToString(svg);
  const img = new Image();

  img.onload = function() {
    const canvas = document.createElement("canvas");
    canvas.width = svg.width.baseVal.value;
    canvas.height = svg.height.baseVal.value;
    canvas.getContext("2d").drawImage(img, 0, 0);

    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "download.png";
    a.click();
    window.setTimeout(function() {
      window.URL.revokeObjectURL(url);
    }, 10);
  };
  img.src = "data:image/svg+xml," + encodeURIComponent(svgStr);
}

function savePage() {
  const storage = localStorage;
  const name = fileNameInput.value || "new_page";
  const text = document.getElementById("input").value;
  if (text == "") {
    for (var i = storage.length - 1; i >= 0; i--) {
      pageList.remove(i);
    }
    storage.removeItem(name);
    for (var i = 0; i < storage.length; i++) {
      const opt = document.createElement("option");
      opt.text = storage.key(i);
      opt.value = storage.key(i);
      pageList.add(opt);
    }
  } else {
    if (storage.getItem(name) === null) {
      const opt = document.createElement("option");
      opt.text = name;
      opt.value = name;
      pageList.add(opt);
    }
    storage.setItem(name, text);
  }
  pageList.size = storage.length;
}

function openSavedPage(e) {
  const storage = localStorage;
  const idx = pageList.selectedIndex;
  fileNameInput.value = storage.key(idx); 
  storage.setItem("new_page", storage.key(idx));
  document.getElementById("input").value = storage.getItem(pageList.options[idx].value);
  input.dispatchEvent(event);
}

function parseInputText(text) {
  const lexer = new Lexer(text);
  const parser = new Parser(lexer);
  const items = parser.parse(); 
  const chars = [];
  var shorthand = "none";
  for (var i = 0; i < items.length; i++) {
    if (Array.isArray(items[i])) {
      for (var j = 0; j < items[i].length; j++) {
        const tok = items[i][j];

        if (shorthand == "none") {
          var s = "";
          while (j < items[i].length) {
            if (items[i][j] == "\n") {
              if (s != "") {
                chars.push(new CharText(s));
              }
              chars.push(new Char.dict["\n"]);
              s = "";
            } else {
              s += items[i][j];
            }
            j++;
          }
          if (s != "") {
            chars.push(new CharText(s));
          }
        } else if (Char.dict[tok]) {
          chars.push(new Char.dict[tok]());
        } else {
          switch (shorthand) {
            case "waseda":
              if (WasedaChar.dict[tok]) {
                chars.push(new WasedaChar.dict[tok]());
              } else {
                chars.push(new CharText("\u25A1"));
              }
              break;
            case "nakane":
              if (NakaneChar.dict[tok]) {
                chars.push(new NakaneChar.dict[tok]());
              } else {
                chars.push(new CharText("\u25A1"));
              }
              break;
            case "svsd":
              if (SvsdChar.dict[tok]) {
                chars.push(new SvsdChar.dict[tok]());
              } else {
                chars.push(new CharText("\u25A1"));
              }
              break;
            case "shugiin":
              if (ShugiinChar.dict[tok]) {
                chars.push(new ShugiinChar.dict[tok]());
              } else {
                chars.push(new CharText("\u25A1"));
              }
              break;
            case "takusari": 
              if (TakusariChar.dict[tok]) {
                chars.push(new TakusariChar.dict[tok]());
              } else {
                chars.push(new CharText("\u25A1"));
              }
              break;
            default:
              chars.push(new CharText("\u25A1"));
              break;
          }
        }
      }
    } else {
      shorthand = items[i].substring(1);
    }
  }
  return chars;
}

function _parseInputText(text) {
  const tokens = text.match(/[↑↓←→][\d０-９]+(?:[.．][\d０-９]+)?|\\[a-z]+[ ]*\n?|（[^）]*）|\([^)]*\)|.[ゃゅょぁぃぅぇぉ]?ー?ん?/gsu) || [];
  console.log(tokens);

  var shorthand = "none";

  const chars = [];
  for (var i = 0; i < tokens.length; i++) {
    var tok = tokens[i].replace(/^[(（]|[）)]$/g, ""); 
    if (tok.charAt(0) === "\\") {
      shorthand = tok.replace(/[\s\\]/g, "") || "none";
   // }
   // else if (shorthand === "none") {
   //   var text = "";
   //   while ((i < tokens.length) && (tokens[i].charAt(0) !== "\\") && (tokens[i].charAt(0) !== "\n")) {
   //     text += tokens[i];
   //     i++;
   //   }
   //   chars.push(new CharText(text));
    } else if (/^[↑↓←→]-?[\d０-９]+/.test(tok)) {
      var f = tok.match(/^[↑↓←→]|[-ー]?[\d０-９]+(?:\.[\d０-９]+)?/gu);
      f[1] = f[1].replace(/０/g, "0")
                 .replace(/１/g, "1")
                 .replace(/２/g, "2")
                 .replace(/３/g, "3")
                 .replace(/４/g, "4")
                 .replace(/５/g, "5")
                 .replace(/６/g, "6")
                 .replace(/７/g, "7")
                 .replace(/８/g, "8")
                 .replace(/９/g, "9")
                 .replace(/ー/g, "-")
                 .replace(/．/g, ".");
      f[1] = parseInt(f[1], 10);
      switch (f[0]) {
        case "↑":
          chars.push(new CharUp(f[1]));
          break;
        case "↓":
          chars.push(new CharDown(f[1]));
          break;
        case "←":
          chars.push(new CharLeft(f[1]));
          break;
        case "→":
          chars.push(new CharRight(f[1]));
          break;
        default:
          break;
      }
    } else if (Char.dict[tok]) {
      chars.push(new Char.dict[tok]());
    } else if (shorthand === "none") {
      chars.push(new CharText(tok));
    } else if (shorthand === "waseda" && WasedaChar.dict[tok]) {
      chars.push(new WasedaChar.dict[tok]());
    } else if (shorthand === "nakane" && NakaneChar.dict[tok]) {
      chars.push(new NakaneChar.dict[tok]());
    } else if (shorthand === "svsd" && SvsdChar.dict[tok]) {
      chars.push(new SvsdChar.dict[tok]());
    } else if (shorthand === "shugiin" && ShugiinChar.dict[tok]) {
      chars.push(new ShugiinChar.dict[tok]());
    } else if (shorthand === "takusari" && TakusariChar.dict[tok]) {
      chars.push(new TakusariChar.dict[tok]());
    } else {
      chars.push(new CharText("\u25A1"));
    }
  };

  return chars;
}

function setAnimation(speed) {
  const paths = page.querySelectorAll("path");

  if ((speed === undefined) || (speed <= 0)) {
    speed = 0.03;
  }

  var start_ms = 0;
  var style = "@keyframes shorthand_draw{100%{stroke-dashoffset:0;}}";

  paths.forEach(function(path, i) {
    const margin = 1;
    const dash = Math.round(path.getTotalLength());
    const duration_ms = Math.round(dash / speed);
    path.setAttribute("class", "shorthand_" + i);
    style += ".shorthand_" + i + "{" +
             "animation:shorthand_draw " + duration_ms + "ms linear " + start_ms + "ms forwards;" +
             "stroke-dasharray:" + dash + " " + (dash + margin * 2) + ";" +
             "stroke-dashoffset:" + (dash + margin) + ";}"
    start_ms += duration_ms;
  });

  const style_new = document.createElementNS("http://www.w3.org/2000/svg", "style");
  const style_old = document.getElementById("style_animation");
  style_new.setAttribute("id", "style_animation");
  style_new.textContent = style;

  const svg = document.getElementById("svg_root");
  svg.replaceChild(style_new, style_old);
}

function updateSVG(toAnimate) {
  const page = document.getElementById("page");
  const text = input.value;
  const chars = parseInputText(text);
  const svg = document.getElementById("svg_root");

  svg.setAttribute("data-text", encodeURIComponent(text));

  page.textContent = "";
  page.appendChild(Char.createElements(chars, {x: 5, y: 10, left: 5, right: 5, bottom: 10, row: 10}));
  if (toAnimate) {
    setAnimation();
  } else {
    const animationSwitch = document.getElementById("animation_switch");
    const animationSwitchOff = document.getElementById("animation_switch_off");
    animationSwitch.checked = false;
    animationSwitchOff.checked = true;
  }
}

