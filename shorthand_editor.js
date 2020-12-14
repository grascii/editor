const viewer = document.getElementById("svg_viewer");
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("id", "svg_root");
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
svg.setAttribute("version", "1.1");
svg.setAttribute("viewBox", "0 0 210 297");
svg.setAttribute("width", "210mm");
svg.setAttribute("height", "297mm");
//svg.setAttribute("preserveAspectRatio", "none");
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
downloadButtonSVG.addEventListener("click", 
  function() { 
    const rs = Math.floor(((+new Date()) * Math.random())).toString(36);
    downloadSVG(rs + "_" + fileNameInput.value + ".svg");
  }
);

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
  if (title != "") pageList.value = title;
  openPage();
}

function updatePagePos() {
  const svg = document.getElementById('svg_root');
  const viewBox = svg.viewBox;
  const pageNum = document.getElementById('page_select').value;
  svg.setAttribute("viewBox", viewBox.baseVal.x + " " + (pageNum - 1)* 297 + " " + viewBox.baseVal.width + " " + viewBox.baseVal.height);
}

function openPage() {
  const title = pageList.value;

  if (title == "new_page") {
    pageNameInput.value = "";
    inputTextArea.value = "\\none";
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

function downloadSVG(fileName) {
  const svg = document.getElementById('svg_root');
  const svgStr = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([svgStr], {type: "data:image/svg+xml;charset=utf-8"});
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName || "download.svg";
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
    const ctx = canvas.getContext("2d");
    canvas.width = svg.width.baseVal.value;
    canvas.height = svg.height.baseVal.value;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

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
          var entry;
          switch (shorthand) {
            case "waseda":
              entry = WasedaChar.dict[tok];
              break;
            case "nakane":
              entry = NakaneChar.dict[tok];
              break;

            case "svsd":
              entry = SvsdChar.dict[tok];
              break;

            case "shugiin":
              entry = ShugiinChar.dict[tok];
              break;

            case "takusari": 
              entry = TakusariChar.dict[tok];
              break;

            case "gregg":
              entry = GreggChar.dict[tok];
              break;

            default:
              chars.push(new CharText("\u25A1"));
              break;
          }

          if (entry) {
            if (Array.isArray(entry)) {
              entry.forEach(function(ctor) { chars.push(new ctor()); });
            } else {
              chars.push(new entry());
            }
          } else {
            chars.push(new CharText("\u25A1"));
          }
        }
      }
    } else {
      items[i] = items[i].substring(1);
      switch (items[i]) {
        case "waseda":
        case "svsd":
        case "nakane":
        case "shugiin":
        case "gregg":
        case "takusari":
        case "none":
          shorthand = items[i];
          break;
            
        default:
          var match;
          if ((match = items[i].match(/^([hv])sp(?:ace)?{(-?\d+(?:\.\d+)?)}/)) !== null) {
            if (match[1] == "h") {
              chars.push(new CharRight(parseFloat(match[2])));
            } else if (match[1] == "v") {
              chars.push(new CharUp(parseFloat(match[2])));
            }
          } else if ((match = items[i].match(/^sp(?:ace)?{(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)}/)) !== null) {
            chars.push(new CharMove(parseFloat(match[1]), -parseFloat(match[2])));
          } else if ((match = items[i].match(/newpage|pb/)) !== null) {
            chars.push(new CharNewpage());
          } else if ((match = items[i].match(/^scroll{(-?\d+(?:\.\d+)?)/))) {
            chars.push(new CharScroll(parseFloat(match[1])));
          }
          break;
      }
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
  const keyTimes = [0];
  var style = "@keyframes shorthand_draw{100%{stroke-dashoffset:0;}}";
  var y = 0; 
  var viewBoxes = [];
  var scrollList = [];

  const animate_scroll = document.createElementNS("http://www.w3.org/2000/svg", "animate");
  animate_scroll.setAttribute("attributeName", "viewBox");
  animate_scroll.setAttribute("calcMode", "discrete");
  animate_scroll.setAttribute("fill", "freeze");
  animate_scroll.setAttribute("restart", "always");

  paths.forEach(function(path, i) {
    const margin = speed;
    const dash = (path.getTotalLength());
    const duration_ms = (dash / speed);
    path.setAttribute("class", "shorthand_" + i);
    console.log(path.getAttribute("data-scroll-y"));
    switch (path.getAttribute("data-char")) {
      case "CharNewpage":
        start_ms += 300;
        keyTimes.push(start_ms);
        start_ms += 300;
        break;

      case "CharScroll":
        start_ms += 100;
        keyTimes.push(start_ms);
        start_ms += 100;
        scrollList.push(path.getAttribute("data-scroll-y"));
        break;
    }
    style += ".shorthand_" + i + "{" +
             "animation:shorthand_draw " + duration_ms + "ms linear " + start_ms + "ms forwards;" +
             "stroke-dasharray:" + dash + " " + (dash + margin * 2) + ";" +
             "stroke-dashoffset:" + (dash + margin) + ";}"
    start_ms += duration_ms;
  });
  console.log(scrollList);
  for (var i = 0; i < keyTimes.length; i++) {
    if (start_ms > 0.0) keyTimes[i] /= start_ms;
    viewBoxes.push("0 " + y + " 210 297");
    y += parseFloat(scrollList[i]);
  }
  keyTimes.push(1.0);
  viewBoxes.push(viewBoxes[viewBoxes.length-1]);

  animate_scroll.setAttribute("dur", start_ms + "ms");
  animate_scroll.setAttribute("values", viewBoxes.join("; "));
  animate_scroll.setAttribute("keyTimes", keyTimes.join("; "));
  const style_new = document.createElementNS("http://www.w3.org/2000/svg", "style");
  style_new.setAttribute("id", "style_animation");
  style_new.textContent = style;

  svg.appendChild(style_new);
  svg.appendChild(animate_scroll);
  animate_scroll.beginElement();
}

function updateSVG(toAnimate) {
  const text = input.value;
  const chars = parseInputText(text);

  //svg.setAttribute("data-text", encodeURIComponent(text));

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

