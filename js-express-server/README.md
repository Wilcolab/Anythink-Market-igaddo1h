# JavaScript Express Server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart on code changes using nodemon.

## Project Structure

The project has the following files and directories:

- `src/index.js`: The entry point of the application. It creates an instance of the Express app and listens on port 8001.

- `package.json`: The configuration file for npm, which includes dependencies for Express and nodemon, as well as scripts for starting the server.

- `Dockerfile`: Used to build a Docker image for the Express server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

## Getting Started

To run the Express server, follow these steps:

1. Install the dependencies:

   ```shell
   npm install
   ```

2. Start the server using nodemon:

   ```shell
   npm start
   ```

   The server will now be running on port `8001`.

## Docker

To run the server in a Docker container, you can build and start the container using the following command:

```shell
docker build -t js-express-server .
docker run -p 8001:8001 js-express-server
```

The server will be accessible at port `8001`.