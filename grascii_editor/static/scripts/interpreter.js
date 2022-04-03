const jrpc = simple_jsonrpc.connect_xhr(location.origin + "/api");
const interpretationCache = new Map();
async function interpretGrascii(grascii) {
  if (interpretationCache.has(grascii)) {
    return interpretationCache.get(grascii);
  }
  const interpretation = await jrpc.call('grascii.interpret', [grascii]);
  interpretationCache.set(grascii, interpretation);
  return interpretation;
}

async function lexInput(text) {
  const chars = [];
  const shorthand = "gregg";
  const lines = text.split(/\n|\r|\n\r|\r\n/);
  for (const line of lines) {
    const words = line.split(/\s+/);
    for (const word of words) {
      try {
        let interpretation = await interpretGrascii(word);
        if (interpretation) {
          for (let item of interpretation) {
            if (typeof item === 'string') {
              let entry = Char.catalog[shorthand][item.toLowerCase()];
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
