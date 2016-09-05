# react-weather

http://react-weather.jamespamplin.com/

Local Weather (London just for now) via OpenWeatherMap.

Implemented in React with Redux, with help from Flow, ESLint, Babel, and Rollup.

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

## TODO

- Error handling! eg: JSON format guarding, error responses, rate limits
- Fix weird issue with source maps - they don't quite match up properly, might be a rollup issue
- Tests...
- City selection
- Async redux actions
- Make it pretty, responsive, svg icons
- Render on server for progressive enhancement
- CI + CD
- Optimisations: minification, caching, https, service worker 
