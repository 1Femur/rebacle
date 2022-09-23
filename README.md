# Rebacle


Rebacle is a server side, no-cookie, drop-in and privacy focused tracking solution for applications and websites. Integrated into your application it enables you to track HTTP traffic without invading the privacy of your visitors.


## Getting started

A detailed getting started guide can be found at [https://docs.rebacle.com/](https://docs.rebacle.com/)

## Installing from source

### Requirements

- A server with Node.js version 12 or newer
- A database. Rebacle supports [MySQL](https://www.mysql.com/) and [Postgresql](https://www.postgresql.org/) databases.

### Install Yarn

```
npm install -g yarn
```

### Get the source code and install packages

```
git clone https://github.com/1femur/rebacle.git
cd rebacle
yarn install
```

### Configure Rebacle

Create an `.env` file with the following

```
DATABASE_URL=connection-url
```

The connection url is in the following format:
```
postgresql://username:mypassword@localhost:5432/mydb

mysql://username:mypassword@localhost:3306/mydb
```

### Build the application

```bash
yarn build
```

### Create database tables

```bash
yarn update-db
```

This will also create a login account with username **admin** and password **rebacle**.

### Start the application

```bash
yarn start
```

By default this will launch the application on `http://localhost:3000`. You will need to either
[proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) requests from your web server
or change the [port](https://nextjs.org/docs/api-reference/cli#production) to serve the application directly.

## Installing with Docker

To build the umami container and start up a Postgres database, run:

```bash
docker compose up
```

Or with MySQL support:
```bash
docker pull docker.umami.is/umami-software/umami:mysql-latest
```

## Getting updates

To get the latest features, simply do a pull, install any new dependencies, and rebuild:

```bash
git pull
yarn install
yarn build
```

To update the Docker image, simply pull the new images and rebuild:

```bash
docker compose pull
docker compose up --force-recreate
```

## License

MIT
