Demonstration environment of the [localForage](https://github.com/localForage/localForage) library.

## Run with Docker

    npm install
    bower install
    docker run -d --rm -p 80:80 -v $(pwd):/usr/share/nginx/html:ro nginx

