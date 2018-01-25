# Memory Game Project

## Table of Contents

* [Project Attribution](#attribution)
* [Running on a Local Server](#Running-on-a-Local-Server)
* [Running from a Docker Container](#Run-from-a-Docker-Container)

## Project Attribution

This project is an extension of a [starter project](https://github.com/udacity/fend-project-memory-game) provided by Udacity, as part of their Front End Web Developer nanodegree program. The starter project provided a static outline for this game, with the interactive components to be provided by the student.

Source code for this project is available at `https://github.com/jcorpac/fend-project-memory-game`

<<<<<<< HEAD
## Running on a Local Server
    Because the application runs in JavaScript in a web browser, a simple HTTP server is sufficient to host the application.
    From a command line in the application folder, type
    `python -m SimpleHTTPServer 8080`
    The page with the portfolio will be available at `http://localhost:8080/`.
||||||| merged common ancestors
For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).
=======
## Running on a Local Server
    Because the application runs in JavaScript in a web browser, a simple HTTP server is sufficient to host the application.
    From a command line in the application folder, type `python -m SimpleHTTPServer 8080`.
    The page with the portfolio will be available at `http://localhost:8080/`.
>>>>>>> c494e843df41ea40f7818a0e808b99fcd8d939bb

<<<<<<< HEAD
## Run from a Docker Container
    A Docker container is available for this application, and a Dockerfile is provided in the github repository to generate your own. The container image is available [here](https://hub.docker.com/r/jcorpac/memory_game/). To start an instance of the container, open a command line and type
    `docker run -dit --name memory_game -p 8080:80 jcorpac/memory_game`.
    The page with the game will be available at `http://<docker machine's IP>:8080/`.
    To create your own container with the application code, open a console window to the application directory and type
    `docker build -t memory_game .`
||||||| merged common ancestors
## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
=======
## Run from a Docker Container
    A Docker container is available for this application, and a Dockerfile is provided in the github repository to generate your own. The container image is available [here](https://hub.docker.com/r/jcorpac/memory_game/). To start an instance of the container, open a command line and type `docker run -dit --name memory_game -p 8080:80 jcorpac/memory_game`.
    The page with the game will be available at `http://<docker machine's IP>:8080/`.
    To create your own container with the application code, open a console window to the application directory and type `docker build -t memory_game .`
>>>>>>> c494e843df41ea40f7818a0e808b99fcd8d939bb
