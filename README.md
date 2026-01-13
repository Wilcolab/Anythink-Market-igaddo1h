# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

- ## Migration to Node.js

The project has been migrated from a Python FastAPI server to a Node.js server for improved performance and ecosystem compatibility.

### Key Changes

- The Python FastAPI implementation has been replaced with a Node.js server using Express.js
- All API routes and functionality remain the same, with equivalent endpoints available
- The Node.js server runs on the same port `8000` for consistency

### Node.js Server Structure

- `node-server/src/server.js`: Main server file containing Express.js implementation
- `node-server/package.json`: Dependencies and scripts for the Node.js application
- `node-server/Dockerfile`: Updated Docker configuration for Node.js runtime

### Running the Node.js Server

The `docker-compose.yml` has been updated to use the Node.js server. Build and start the containers with:

```shell
docker compose up
```

The server will be available at `http://localhost:8001`
