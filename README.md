# Ingaia - Api2 (real state)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Using Docker

```bash
$ docker-compose up
```

## About the api

This API was built to calculate a real state price.
An online version of this project is avaiable on https://real-state-ingaia.herokuapp.com/

The swagger documentation of the api is also avaiable on https://real-state-ingaia.herokuapp.com/swagger

## Architecture

We're using Nest.js as framework because is easy to begin and escalate the project, if needed.
The folder structure follow Nest.js styleguide.

The Controller is responsible for HTTP incomings, calling a service method and returning the response to client.
The Dtos (data transfer objects) encapsulate all the schemas used in the app.

This project only has one endpoint (/GET real-state/price) which needs squareMeters query param. 
Class validator is used to validate this param.

The service calls the second api using HttpService (Nestjs' native) and calculate the real state value.


https://github.com/thiagopuntar/basePrice



