# Grascii Editor

Grascii Editor turns Gregg Shorthand forms written in the Grascii language into
images of Gregg outlines.

## Getting Started

**Note**: Grascii Editor is under development in pre-alpha. Many stroke
joinings have not yet been modeled. To try it early, it must be installed from
source.

#### Prerequisites

- Python 3.7+

#### Steps

1. Clone the repository.

```
git clone https://github.com/grascii/editor.git
```

2. Change working directory.

```
cd editor
```

Tip: Before following the next steps, it is recommended to create a new Python
virtual environment for the application.

3. Install the requirements.

```
pip install -r requirements.txt
```

4. Build the path data.

```
python transform.py
```

5. Start the application.

```
FLASK_APP=grascii_editor flask run
```

6. Open http://localhost:5000 in a browser.

## License

This project is under the MIT License.

## Acknowledgements

Thanks to Wyess for the original [shorthand editor](https://github.com/Wyess/shorthand_editor)
from which this project is derived.
