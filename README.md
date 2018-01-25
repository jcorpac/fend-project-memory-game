# Memory Game Project

## Table of Contents

* [Project Attribution](#attribution)
* [Dependencies](#dependencies)
* [Playing the Game](#playing-the-game)
* [Running on a Local Server](#running-on-a-local-server)
* [Running from a Docker Container](#run-from-a-docker-container)

## Project Attribution

This project is an extension of a [starter project](https://github.com/udacity/fend-project-memory-game) provided by Udacity, as part of their Front End Web Developer nanodegree program. The starter project provided a static outline for this game, with the interactive components to be provided by the student.

Source code for this project is available at `https://github.com/jcorpac/fend-project-memory-game`

## Dependencies

This game runs in JavaScript, and all of the files for game logic are included in the repository's code. The application uses Font Awesome and the CODA font family as part of the user interface. Lines in the index.html file will retrieve these automatically, however you will need an internet connection with access to maxcdn.bootstrapcdn.com and fonts.googleapis.com for the game to display properly.

## Playing the Game

The game screen will start with a 4x4 grid of cards, each with one of 8 icons, and all face-down. You have 3 stars to start, and the timer is at 0. The timer starts when you click the first card.

The goal of the game is to flip over pairs of cards and try to find pairs that match. The more attempts you make to find matching cards, the fewer stars you have, so try to find all 8 pairs in as few attempts as possible. When you find all 8 pairs, you will be shown how many attempts you made, and how long it took.

If you want to try the game again, or see if you can get a better score, you can use a reset button at the top right of the game board. You can also start a new game by clicking "OK" on the final score window.

## Running on a Local Server
Because the application runs in JavaScript in a web browser, you can load the game by opening the index.html file in a web browser. You can copy the application to any folder by running `git clone https://github.com/jcorpac/fend-project-memory-game.git` from the command line.

If you have python installed on your computer, you can run a simple HTTP server to host the game. From a command line in the application folder, type `python -m SimpleHTTPServer 8080`

The page with the game will be available at `http://localhost:8080/`.

## Run from a Docker Container
A Docker container is available for this application, and a Dockerfile is provided in the github repository to generate your own. The container image is available [here](https://hub.docker.com/r/jcorpac/memory_game/). To start an instance of the container, open a command line and type `docker run -dit --name memory_game -p 8080:80 jcorpac/memory_game`.

The page with the game will be available at `http://<docker machine's IP>:8080/`.

To create your own container with the application code, open a console window to the application directory and type `docker build -t memory_game .`
