import os

from flask import Flask, render_template
from grascii_rpc import create_api

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    api = create_api(enabled_apis={"grascii.interpret"})
    api.init_app(app)

    @app.route("/")
    def editor():
        return render_template("editor.html")

    return app
