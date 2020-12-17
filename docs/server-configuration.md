# Server Configuration

`Boilerplate` provides default server settings that can be customized to your individual needs.

See `config/server.js`

## Development

Commands: `npm run dev` or `yarn dev`

The development environment is accessible by default at `http://localhost:3003`

```js
// config/server.js

server.dev.protocol = 'http:'
server.dev.host = 'localhost'
server.dev.port = '3003'
```

Example:

```js
// config/server.js

server.dev.protocol = 'http:'
server.dev.host = process.env.DEV_HOST || '0.0.0.0'
server.dev.port = '5050'
```

## Production

Commands: `npm run start` or `yarn start`

The production environment is accessible by default at `http://localhost:8008`

```js
// config/server.js

server.prod.protocol = 'http:'
server.prod.host = 'localhost'
server.prod.port = '8008'
```

---

[← Table of Contents](README.md)
