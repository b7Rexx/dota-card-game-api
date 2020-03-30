## Dota Card Game Backend

> Nodejs backend application for APIs with Express.js

> Dashboard Api for users, hero with pictures, hero types and game records
> Frontend Api for user login hero list accumulation

> Api Reference at /src/docs
> users
> heroes
> records
> auth

## Prerequisites

- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)
- [MySQL](https://www.mysql.com/downloads/)

## Setup

Clone the repository, install the dependencies.

    $ git clone https://github.com/b7Rexx/dota-card-game-api.git <application-name>
    $ cd <application-name>
    $ npm install

Make a copy of `.env.example` as `.env` and update your application details and database credentials. Now, run the migrations and seed the database.

    $ yarn migrate
    $ yarn seed

Finally, start the application.

    $ yarn start:dev (For development)
    $ NODE_ENV=production yarn start (For production)
