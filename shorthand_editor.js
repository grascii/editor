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
svg.setAttribute("transform", "scale(1, 1) translate(0)");
svg.setAttribute("style", "fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;background-color:white;");
const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
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
save_button.addEventListener("click", savePages);


const storage = localStorage;
const savedPages = storage.getItem("pages");
const pages = savedPages ? JSON.parse(savedPages) : {};
const pageList = document.getElementById("saved_page_list");
const pageNameInput = document.getElementById("page_name");
const inputTextArea = document.getElementById("input");

loadPageList();
resume();
openPage();

function loadPageList() {
  const titles = Object.keys(pages);
  titles.sort();

  pageList.innerText = "";

  const opt = document.createElement("option");
  opt.text = "new_page";
  opt.value = "new_page";
  pageList.add(opt);

  titles.forEach(function(title) {
    const opt = document.createElement("option");
    opt.text = title;
    opt.value = title;
    pageList.add(opt);
  });
}

function savePages() {
  const text = inputTextArea.value;
  const title = pageNameInput.value;

  if (title == "new_page") return;

  if (text == "") {
    delete pages[title];
    pageNameInput.value = "";
  } else if (title != "") {
    pages[title] = text;
  }

  storage.setItem("pages", JSON.stringify(pages));
  loadPageList();
  openPage();
}

function openPage() {
  const title = pageList.value;

  if (title == "new_page") {
    pageNameInput.value = "";
    inputTextArea.value = "";
  } else if (title) {
    pageNameInput.value = title;
    inputTextArea.value = pages[title];
    storage.setItem("lastPage", pageList.value);
  }

  updateSVG();
}

function resume() {
  const lastPage = storage.getItem("lastPage");

  if (lastPage && pages[lastPage]) {
    pageList.value = lastPage;
    pageNameInput.value = lastPage;
    inputTextArea.value = pages[lastPage];
  }
}


const event = new Event("input", {
  bubbles: true,
  cancelable: true
});
input.dispatchEvent(event);


function setMirrorMode(mirrored) {
  svg.setAttribute("transform", "scale(" + (mirrored ? -1 : 1) + ", 1) translate(" + (mirrored ? -svg.viewBox.baseVal.width : 0) + ")");
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
            case "gregg":
              if (GreggChar.dict[tok]) {
                chars.push(new GreggChar.dict[tok]());
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


function setAnimation(speed) {
  const svg = document.getElementById("svg_root");
  const paths = svg.querySelectorAll("path");

  if ((speed === undefined) || (speed <= 0)) {
    speed = 0.03;
  }

  var start_ms = 0;
  var style = "@keyframes shorthand_draw{100%{stroke-dashoffset:0;}}";

  paths.forEach(function(path, i) {
    const margin = 0.5;
    const dash = (path.getTotalLength());
    const duration_ms = (dash / speed);
    path.setAttribute("class", "shorthand_" + i);
    style += ".shorthand_" + i + "{" +
             "animation:shorthand_draw " + duration_ms + "ms linear " + start_ms + "ms forwards;" +
             "stroke-dasharray:" + dash + " " + (dash + margin * 2) + ";" +
             "stroke-dashoffset:" + (dash + margin) + ";}"
    start_ms += duration_ms;
  });

  const style_new = document.createElementNS("http://www.w3.org/2000/svg", "style");
  style_new.setAttribute("id", "style_animation");
  style_new.textContent = style;

  svg.appendChild(style_new);
}

function updateSVG(toAnimate) {
  const text = input.value;
  const chars = parseInputText(text);

  svg.setAttribute("data-text", encodeURIComponent(text));

  svg.textContent = "";
  svg.appendChild(Char.createElements(chars, {x: 5, y: 10, left: 5, right: 5, bottom: 10, row: 10}));
  if (toAnimate) {
    setAnimation();
  } else {
    const animationSwitch = document.getElementById("animation_switch");
    const animationSwitchOff = document.getElementById("animation_switch_off");
    animationSwitch.checked = false;
    animationSwitchOff.checked = true;
  }
}

