const jrpc = simple_jsonrpc.connect_xhr(location.origin + "/api");
const interpretationCache = new Map();
async function interpretGrascii(grascii) {
  if (interpretationCache.has(grascii)) {
    return interpretationCache.get(grascii);
  }
  const interpretation = await jrpc.call('grascii.interpret', [grascii, true]);
  interpretationCache.set(grascii, interpretation);
  return interpretation;
}

async function lexInput(text) {
  const chars = [];
  const shorthand = "gregg";
  const lines = text.split(/\n|\r|\n\r|\r\n/);
  for (const line of lines) {
    const words = line.split(/\s/);
    for (const word of words) {
      if (word.length == 0) {
        chars.push(new Char.dict[" "]);
        continue
      }
      if (/^[,.>?()=-]$/.test(word)) {
        chars.push(new Char.catalog[shorthand][word]);
        chars.push(new Char.dict[" "]);
        continue
      }
      try {
        let interpretation = await interpretGrascii(word);
        if (interpretation) {
          for (let i = 0; i < interpretation.length; i++) {
            let item = interpretation[i]
            if (typeof item === 'string') {
              let entry;
              if (item == "S" || item == "Z") {
                if (Array.isArray(interpretation[i + 1])) {
                  annotations = interpretation[i + 1];
                  if (annotations.includes(")")) {
                    entry = Char.catalog[shorthand]["S"];
                  } else if (annotations.includes("(")) {
                    entry = Char.catalog[shorthand]["SL"];
                  } else {
                    entry = Char.catalog[shorthand]["S"];
                  }
                } else {
                  entry = Char.catalog[shorthand]["S"];
                }
              } else if (item == "TH") {
                if (Array.isArray(interpretation[i + 1])) {
                  annotations = interpretation[i + 1];
                  if (annotations.includes(")")) {
                    entry = Char.catalog[shorthand]["THL"];
                  } else if (annotations.includes("(")) {
                    entry = Char.catalog[shorthand]["TH"];
                  } else {
                    entry = Char.catalog[shorthand]["TH"];
                  }
                } else {
                  entry = Char.catalog[shorthand]["TH"];
                }
              } else if (item == "-") {
                entry = GreggBoundary;
              } else {
                entry = Char.catalog[shorthand][item];
              }
              if (Array.isArray(entry)) {
                entry.forEach(function(ctor) { chars.push(new ctor()); });
              } else {
                chars.push(new entry());
              }
            }
          }
          chars.push(new Char.dict[" "]);
        }
      } catch (e) {
        chars.push(new CharText("\u25A1"))
      }
    }
    chars.push(new CharNewline());
  }
  return chars
}
