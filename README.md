# react-weather

Local weather via OpenWeatherMap.

Implemented in React.

## Running locally

### with NodeJS:

Requires node v6.x and npm v3.10

```sh
npm i
npm run build
npm start
```

Static web server will be run locally on http://localhost:8080

### with Docker and docker-compose:

```sh
docker-compose up
docker-compose port app 8080
```

Last command will output the local port which will be running the web server, eg: http://localhost:32768
