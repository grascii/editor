
import numpy as np
from svgpathtools import svg2paths, disvg, Document, QuadraticBezier, CubicBezier
from svgpathtools.path import transform

MODEL_ID = "model"
STYLE = "fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;background-color:white;stroke-width:0.5;"

doc = Document("models/r.svg")
paths = doc.paths_from_group([MODEL_ID])
new_paths = list(map(lambda path: path.rotated(180).reversed(), paths))

new_doc = Document()
new_doc.root.set("style", STYLE)

def shift_to_origin(path):
    shift = np.array([
        [1, 0, -path.start.real],
        [0, 1, -path.start.imag],
        [0, 0, 1]
    ])
    return transform(path, shift)

for path in new_paths:
    shifted = shift_to_origin(path)
    new_doc.add_path(shifted.d(rel=True), group=[MODEL_ID])

print(new_doc)
new_doc.save("test.svg")

