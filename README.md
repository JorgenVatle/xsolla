# Xsolla Node Client

A Node.js client for the [Xsolla API](https://developers.xsolla.com/api/). Written in TypeScript to provide you with
all the type checking and auto-completion convenience supported by most modern JS IDEs. 👌

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

### Projects
The Xsolla client exposes a `projects` property that can be used to create, update and read projects attached to your
merchant account. 

#### Create a project
```js
client.projects.create({
    name: ["My brand new Xsolla project"],
    url: 'https://example.com',
}).then((project) => console.log('Created new project', project));
```
Returns a promise for a [`Project`](#the-project-model) model.

#### Get a project:
```js
const project = await client.projects.get({ project_id: 123456 })
```
Returns a promise for a [`Project`](#the-project-model) model.

#### Fetch all projects
```js
const projects = client.projects.all();
```
Returns a promise for an array of [`Project`](#the-project-model) models.

### The Project Model
The Project model is an instance of a project that you've either [created](#create-a-project) or
 [fetched](#get-a-project)
 
#### Create a payment token
You can create payment tokens directly from a Project model. 
(Obtained by either `Xsolla.projects.get()` or `Xsolla.projects.create()`)
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

#### Update a project
```js
const updatedProject = await project.update({
    name: ["Some other Xsolla project name"],
});
```
Returns a promise for an updated [`Project`](#the-project-model) model.
 

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, Jørgen Vatle.