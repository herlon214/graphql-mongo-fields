# GraphQL Mongo Fields

Convert a GraphlQL fields in a MongoDB select string.

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

# Usage

```js
const parseFields = require('graphql-mongo-fields')

// my awesome handler
const handler = async (_, args, context, info) => {

    users = await models.User.find({}, parseFields(info))

    return users
}
```