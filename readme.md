# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

First install Docker.
  - Verify that it is ready by running `docker -v` and `docker-compose -v`

Run `docker-compose-up` from the project directory.

To confirm it is all working point your broswer to (http://localhost:3000/api/ping) to check the backend and (http://localhost:3001/register) to check the frontend.

`docker exec` can be used in the terminal to run commands in a running container.

