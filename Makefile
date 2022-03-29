
.PHONY: paths
paths: app/data/paths.js

app/data/paths.js: transform.py recipes.json
	python transform.py

release.zip: paths app/**
	zip release -r app/

.PHONY: clean
clean:
	rm -f app/data/paths.js release.zip
