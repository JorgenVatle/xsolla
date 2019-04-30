# Xsolla Node Client

A Node.js client for the Xsolla Publisher API. Written in TypeScript to provide you with all the type checking and 
auto-completion convenience supported by most modern JS IDEs. 👌

## Installation
Pull in the package with npm or Yarn.
```bash
npm install xsolla
```

## Usage

Initialize Xsolla:
```js
const Xsolla = require('xsolla');

const client = new Xsolla({
    merchantId: 123456,
    apiKey: 'abc123',
})
```

##### Create a project:
```js
client.project.create({
    name: ["My brand new Xsolla project"],
    url: 'https://example.com',
}).then(({ id }) => console.log('Created project with ID:', id));
```

##### Get a project:
```js
client.project.get({ project_id: 123456 })
```

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, Jørgen Vatle.