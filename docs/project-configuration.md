# Project Configuration

## config/

The `config/` directory is used to manage all project settings. Each category in a separate file.

## Examples

### app.js

```js
app.public.protocol = 'https:' // Add your protocol here
app.public.hostname = 'company' // Add your hostname here
app.public.domain = 'dev' // Add your domain here

app.author.firstName = 'name' // Add author name
app.author.lastName = 'surname' // Add author surname
```

### breakpoints.js

```js
screens._3xl = '1920px' // Enable 3xl breakpoint
screens._4xl = '2560px' // Enable 4xl breakpoint
```

### server.js

```js
// Development environment
server.dev.host = process.env.DEV_HOST || '0.0.0.0' // Edit dev host
server.dev.port = '5050' // Edit dev port

// Production environment
server.prod.host = process.env.PROD_HOST || '0.0.0.0' // Edit prod host
server.prod.port = '9090' // Edit prod port
```

---

[← Table of Contents](README.md)
