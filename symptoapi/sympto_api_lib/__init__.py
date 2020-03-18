

#from pyshared.DictJsonEncoder import DictJsonEncoder
#from pyshared.auth import init_app_auth

import os
import logging
#from pyshared import config
from flask import current_app, Flask, redirect, url_for, session, redirect, jsonify, request, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from migrate.changeset.constraint import *
import sqlalchemy
from sqlalchemy.sql import func
from sqlalchemy.sql import text
#from pyshared import models

import httplib2
#from pyshared.DictJsonEncoder import DictJsonEncoder

def create_app(config, debug=False, testing=False, config_overrides=None):
    app = Flask(__name__, static_folder=None)
    app.config.from_object(config)

    if config_overrides:
        app.config.update(config_overrides)

    # Configure logging
    if not app.testing:
        logging.basicConfig(level=logging.INFO)

    # Setup the data model.
    # with app.app_context():
    #     model = get_model()
    #     model.init_app(app)

    @app.route("/api/test")
    # pylint: disable=W0612
    def index():
        return jsonify("api test")

    return app