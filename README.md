# Grascii Editor

Grascii Editor turns Gregg Shorthand forms written in the Grascii language into
images of Gregg outlines.

## Getting Started

**Note**: Grascii Editor is under development in pre-alpha. Support for the
Grascii language is limited, and many stroke joinings have not yet been modeled.

### Running Locally

1. Download the latest release.
2. Unzip the release.
3. Open `app/editor.html` in a browser.

### Building from Source

Alternatively, you can build the app from source.

#### Prerequisites

- Python 3.6+

#### Steps

1. Clone the repository.
2. Install the requirements.

```
pip install -r requirements.txt
```

3. Build the path data.

```
python transform.py
```

4. Open `app/editor.html` in a browser.

## License

This project is under the MIT License.

## Acknowledgements

Thanks to Wyess for the original [shorthand editor](https://github.com/Wyess/shorthand_editor)
from which this project is derived.
