String.prototype.insert = function(pos, str) {
  return this.substring(0, pos) + str + this.substring(pos)
};

const viewer = document.getElementById("svg_viewer");
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const attr = {
  "id": "svg_root",
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "version": "1.1",
  "viewBox": "0 0 210 297",
  "width": "210mm",
  "height": "297mm",
  "preserveAspectRatio": "none",
  "data-text": "",
  "transform": "scale(1, 1)",
  "transform-origin": "center",
  "style": "fill:none;"
         + "stroke:#000000;"
         + "stroke-linecap:round;"
         + "stroke-linejoin:round;"
         + "stroke-miterlimit:4;"
         + "stroke-opacity:1;"
         + "background-color:white;"
};
Object.keys(attr).forEach(function(key) {
  svg.setAttribute(key, attr[key]);
});
const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
viewer.appendChild(svg);
const styleAnimation = document.createElement("style");
styleAnimation.setAttribute("id", "style_animation");
svg.appendChild(styleAnimation);

viewer.addEventListener("click", function() {
  //document.getElementById("animation_switch").checked = true;
  updateSVG(true);
});

const input = document.getElementById("input");
input.addEventListener("input", function() { updateSVG(false); });
input.addEventListener("compositionend", function(e) {
  const newStr = e.data;
  const pos = input.selectionStart;
  const c = input.value.charAt(pos);

  if (newStr == "（）") {
    input.setSelectionRange(pos - 1, pos - 1);
  } else if (newStr.endsWith('（')) {
    input.value = input.value.insert(pos, "）");
    input.setSelectionRange(pos, pos);
  } else if (newStr.startsWith("（") && !newStr.endsWith("）")) {
    input.value = input.value.insert(pos, "）");
    input.setSelectionRange(pos + 1, pos + 1);
  } else if (c == "）") {
      input.setSelectionRange(pos + 1, pos + 1);
  } else {
    return;
  }

  updateSVG(false); 
});

const fileNameInput = document.getElementById("page_name");
const svgDownloadBtn = document.getElementById("svgDownloadBtn");
svgDownloadBtn.addEventListener("click", function(e) {
  downloadSVG(null, false);
});

const startAnimBtn = document.getElementById("startAnimBtn");
startAnimBtn.addEventListener("click", function(e) {
  updateSVG(true);
});

const flipBtn = document.getElementById("flipBtn");
flipBtn.addEventListener("click", function(e) {
  setMirrorMode();
});

const animDownloadBtn = document.getElementById("animDownloadBtn");
animDownloadBtn.addEventListener("click", function(e) {
  downloadSVG(null, true);
});

const pngDownloadBtn = document.getElementById("pngDownloadBtn");
pngDownloadBtn.addEventListener("click", function(e) {
  updateSVG(false);
  downloadPNG();
});

const storage = localStorage;
const inputTextArea = document.getElementById("input");

document.onkeydown = function(e) {
  if (e.metaKey || e.ctrlKey) {
    switch (e.which) {
      case 77: // M
        e.preventDefault();
        setMirrorMode(!e.shiftKey);
        break;
    }
  }
};

function updatePagePos() {
  const svg = document.getElementById('svg_root');
  const viewBox = svg.viewBox;
  const pageNum = document.getElementById('page_select').value;
  svg.setAttribute("viewBox", viewBox.baseVal.x + " " + (pageNum - 1) * 297 + " " + viewBox.baseVal.width + " " + viewBox.baseVal.height);
}

input.dispatchEvent(
  new Event("input", {
    bubbles: true,
    cancelable: true
}));

var mirrored = true;
function setMirrorMode() {
  //svg.setAttribute("transform", "scale(" + (mirrored ? -1 : 1) + ", 1) translate(" + (mirrored ? -svg.viewBox.baseVal.width : 0) + ")");
  svg.setAttribute("transform", "scale(" + (mirrored ? -1 : 1) + ", 1)");
  mirrored = !mirrored;
}

function downloadSVG(fileName, animate) {
  if (animate) {
    updateSVG(true);
  } else {
    updateSVG(false);
  }
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
  updateSVG(false);
}

function downloadPNG() {
  const svg = document.getElementById('svg_root');
  const svgStr = new XMLSerializer().serializeToString(svg);
  const density = 3.0;
  const img = new Image();

  img.onload = function() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = svg.width.baseVal.value * density;
    canvas.height = svg.height.baseVal.value * density;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img,
                  0, 0,
                  svg.width.baseVal.value, svg.height.baseVal.value,
                  0, 0,
                  svg.width.baseVal.value * density, svg.height.baseVal.value * density);

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

function setAnimation() {
  const svg = document.getElementById("svg_root");
  const paths = svg.querySelectorAll("path");
  const keyTimes = [0];
  var start_ms = 0;
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
    const speed = parseFloat(path.getAttribute("data-speed"));
    const margin = speed;
    const dash = path.getTotalLength();
    const duration_ms = (dash / speed);

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

      default:
        const pathAnimate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        pathAnimate.setAttribute("attributeName", "stroke-dashoffset");
        pathAnimate.setAttribute("values", (dash + margin) + ";0");
        pathAnimate.setAttribute("dur", duration_ms + "ms");
        pathAnimate.setAttribute("begin", start_ms + "ms");
        pathAnimate.setAttribute("fill", "freeze");
        path.appendChild(pathAnimate);
        path.setAttribute("style", "stroke-dasharray:" + dash + " " + (dash + margin * 2) + ";stroke-dashoffset:" + (dash + margin));
        break;
    }
    start_ms += duration_ms;
  });

  const total_ms = start_ms;

  for (var i = 0; i < keyTimes.length; i++) {
    if (total_ms > 0.0) keyTimes[i] /= total_ms;
    viewBoxes.push("0 " + y + " 210 297");
    y += parseFloat(scrollList[i]);
  }
  keyTimes.push(1.0);
  viewBoxes.push(viewBoxes[viewBoxes.length - 1]);

  animate_scroll.setAttribute("dur", total_ms + "ms");
  animate_scroll.setAttribute("values", viewBoxes.join("; "));
  animate_scroll.setAttribute("keyTimes", keyTimes.join("; "));
  animate_scroll.setAttribute("fill", "freeze");
  const style_new = document.createElementNS("http://www.w3.org/2000/svg", "style");
  style_new.setAttribute("id", "style_animation");
  style_new.textContent = style;

  //svg.appendChild(style_new);
  svg.appendChild(animate_scroll);
  //animate_scroll.beginElement();
}

function updateSVG(toAnimate) {
  const text = input.value;
  const chars = parseInputTexts([text])[0];
  //const isPlaying = (svg.childNodes[svg.childNodes.length - 1] instanceof SVGAnimateElement);

  //svg.setAttribute("data-text", encodeURIComponent(text));

  svg.textContent = "";
  svg.appendChild(Char.createElements(chars, {x: 5, y: 10, left: 5, right: 5, bottom: 10, row: 10, speed: 0.03}));

  if (toAnimate) {
    setAnimation();
    //https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement
    //svg.pauseAnimations();
    svg.setCurrentTime(0);
  }
}

