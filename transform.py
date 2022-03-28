
import json
import math
import numpy as np
import warnings
from pathlib import Path
from svgpathtools import Document, SVG_GROUP_TAG, SVG_NAMESPACE
from svgpathtools.path import transform

MODEL_ID = "model"
STYLE = "fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;background-color:white;stroke-width:0.5;"

class Transformations:

    def r_to_k(path):
        return path.rotated(180).reversed()

    def n_to_t(path):
        return path.rotated(-30)

    def r_to_p(path):
        return Transformations.reflect_across_x_axis(path).rotated(-60).reversed()

    def r_to_f(path):
        return Transformations.reflect_across_y_axis(path).rotated(-60)

    def identity(path):
        return path

    def rotate_180_reverse(path):
        return path.rotated(180).reversed()

    def reflect_across_x_axis(path):
        return path.scaled(1, -1)

    def reflect_across_y_axis(path):
        return path.scaled(-1, 1)

    def flip_rotate_60_reverse(path):
        return Transformations.reflect_across_x_axis(path).rotated(-60).reversed()

    def skewx_30(path):
        matrix = np.array([
            [1, math.tan(math.radians(-30)), 0],
            [0, 1, 0],
            [0, 0, 1]
        ])
        return transform(path, matrix)

    def skewx_45(path):
        matrix = np.array([
            [1, math.tan(math.radians(-45)), 0],
            [0, 1, 0],
            [0, 0, 1]
        ])
        return transform(path, matrix)

    def skewx_30_rotate_40(path):
        return Transformations.skewx_30(path).rotated(40)

    def skewx_30_rotate_30(path):
        return Transformations.skewx_30(path).rotated(30)

    def rotate_90(path):
        return path.rotated(90)

    def shift_to_origin(path):
        return path.translated(-path.start)

class ModelBuilder():

    def __init__(self, base_path):
        self.base_path = base_path
        self.bases = {}

    def get_base_paths(self, name):
        if name in self.bases:
            return self.bases[name]
        filename = Path(self.base_path, name).with_suffix(".svg")
        if not filename.exists():
            raise FileNotFoundError
        doc = Document(filename)
        groups = doc.root.findall(f".//{SVG_GROUP_TAG}[@id='{MODEL_ID}']", SVG_NAMESPACE)
        assert len(groups) == 1
        paths = doc.paths_from_group(groups[0])
        self.bases[name] = paths
        return paths

    def create_model(self, recipe, name):
        paths = self.get_base_paths(recipe["base"])
        transformation = Transformations.identity
        try:
            transformation = getattr(Transformations, recipe["transformation"])
        except AttributeError:
            warnings.warn(f"{name}: {recipe['transformation']} " \
                    "is not a known transformation. " \
                    "The identity transformation will be applied instead.")
        new_paths = list(map(lambda p: Transformations.shift_to_origin(transformation(p)), paths))
        return new_paths

    def write_model(paths, filename):
        new_doc = Document()
        new_doc.root.set("style", STYLE)
        for path in new_paths:
            new_doc.add_path(path.d(rel=True), group=[MODEL_ID])
        new_doc.write(filename)


builder = ModelBuilder("base_models")

with open("recipes.json") as recipe_file:
    recipes = json.load(recipe_file)

output = {}
for stroke_name, stroke in recipes.items():
    output[stroke_name] = {}
    for recipe_name, recipe in stroke.items():
        full_name = f"{stroke_name}.{recipe_name}"
        try:
            paths = builder.create_model(recipe, full_name)
        except FileNotFoundError:
            warnings.warn(f"{full_name}: Base file does not exist.")
        else:
            delta_position = paths[-1].end - paths[0].start
            if recipe_name in output[stroke_name]:
                warnings.warn(f"{full_name}: {full_name} already exists and is being overwritten.")
            output[stroke_name][recipe_name] = {
                "dp": {
                    "x": delta_position.real,
                    "y": delta_position.imag
                },
                "paths": list(map(lambda path: path.d(rel=True), paths))
            }
            if "aliases" in recipe:
                for alias in recipe["aliases"]:
                    if alias in output[stroke_name]:
                        warnings.warn(f"{full_name}: {stroke_name}.{alias} already exists and is being overwritten.")
                    output[stroke_name][alias] = output[stroke_name][recipe_name]

with open("app/data/paths.js", "w") as out_file:
    out_file.write("PATHS = ")
    json.dump(output, out_file, indent=2)
