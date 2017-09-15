const
{ parse } = require('./lib'),
graphqlFields = require('graphql-fields')


/**
* Return a parsed string
*/
module.exports = (info) => parse(graphqlFields(info))