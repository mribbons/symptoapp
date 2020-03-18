import os
from sympto_api_lib import create_app
import config

app = create_app(config)

if __name__ == '__main__':
    app.run(host=config.SERVER_HOST, port=config.SERVER_PORT, debug=True)
