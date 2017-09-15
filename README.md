# GraphQL Mongo Fields

![](https://david-dm.org/herlon214/graphl-mongo-fields.svg)

Convert a GraphlQL fields in a MongoDB select string.

[![https://nodei.co/npm/graphql-mongo-fields.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/graphql-mongo-fields.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/graphql-mongo-fields)

## Example
Consider the following query:

```js
query {
  foo {
    bar {
        foo
    }
  }
}
```

This module transforms the GraphQL fields into a string to select fields in MongoDB. The output will be:

```
'foo.bar.foo = 1'
```

## Usage

```js
const parseFields = require('graphql-mongo-fields')

// my awesome handler
const handler = async (_, args, context, info) => {

    users = await models.User.find({}, parseFields(info))

    return users
}
```