
import json
import numpy as np
from pathlib import Path
from svgpathtools import svg2paths, disvg, Document, QuadraticBezier, CubicBezier
from svgpathtools.path import transform

MODEL_ID = "model"
STYLE = "fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;background-color:white;stroke-width:0.5;"

class Transformations:

    def r_to_k(path):
        return path.rotated(180).reversed()

    def identity(path):
        return path

def shift_to_origin(path):
    shift = np.array([
        [1, 0, -path.start.real],
        [0, 1, -path.start.imag],
        [0, 0, 1]
    ])
    return transform(path, shift)

def create_model(recipe):
    filename = Path("models", recipe["base"]).with_suffix(".svg")
    doc = Document(filename)
    paths = doc.paths_from_group([MODEL_ID])
    new_paths = list(map(getattr(Transformations, recipe["transformation"]), paths))

    new_doc = Document()
    new_doc.root.set("style", STYLE)
    for path in new_paths:
        shifted = shift_to_origin(path)
        new_doc.add_path(shifted.d(rel=True), group=[MODEL_ID])
    print(new_doc)
    return new_paths

with open("recipes.json") as recipe_file:
    recipes = json.load(recipe_file)

output = {}
for stroke_name, stroke in recipes.items():
    output[stroke_name] = {}
    for recipe_name, recipe in stroke.items():
        paths = create_model(recipe)
        delta_position = paths[-1].end - paths[0].start
        output[stroke_name][recipe_name] = {
            "dp": {
                "x": delta_position.real,
                "y": delta_position.imag
            },
            "paths": list(map(lambda path: path.d(rel=True), paths))
        }

json.dump(output, open("out.json", "w"), indent=2)
