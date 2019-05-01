# Xsolla Node Client

A Node.js client for the Xsolla Publisher API. Written in TypeScript to provide you with all the type checking and 
auto-completion convenience supported by most modern JS IDEs. 👌

## Installation
Pull in the package with npm:
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
client.projects.create({
    name: ["My brand new Xsolla project"],
    url: 'https://example.com',
}).then((project) => console.log('Created new project', project));
```

##### Get a project:
```js
const project = await client.project.get({ project_id: 123456 })
```

##### Create a payment token:
```js
const { token } = await project.createPaymentToken({
    user: {
        id: {
            value: '47',
        }
    },
    
    settings: {
        mode: 'sandbox',
    },
   
    purchase: {
        checkout: {
            amount: 13.37,
            currency: 'USD',
        }
    }
});
```

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, Jørgen Vatle.