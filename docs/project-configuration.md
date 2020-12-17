# Project Configuration

## config/

The `config/` directory is used to manage all project settings.

Examples:

```js
// config/app.js

app.public.protocol = 'https:' // Add your protocol here
app.public.hostname = 'company' // Add your hostname here
app.public.domain = 'dev' // Add your domain here

app.author.firstName = 'name'
app.author.lastName = 'surname'

//...
```

```js
// config/breakpoints.js

// Default
screens.sm = '640px'
screens.md = '768px'
screens.lg = '1024px'
screens.xl = '1280px'
screens._2xl = '1536px'

// Enable extra breakpoints
screens._3xl = '1920px'
screens._4xl = '2560px'
```

🚧

---

[← Table of Contents](README.md)
