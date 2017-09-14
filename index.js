const 
    parse = require('./parse'),
    graphqlFields = require('graphql-fields')
    

/**
 * Return a string
 */
module.exports = (info) => {
    return graphqlFields(info)
  }