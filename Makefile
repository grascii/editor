
.PHONY: paths, run_dev, clean

paths: grascii_editor/static/data/paths.js

grascii_editor/static/data/paths.js: transform.py recipes.json
	python transform.py

run_dev:
	FLASK_APP=grascii_editor FLASK_ENV=development flask run

clean:
	rm -f grascii_editor/static/data/paths.js
