const 
    R = require('ramda'),
    graphqlFields = require('graphql-fields')
    

/**
 * Return a string
 */
module.exports = (info) => {
    let response = ''

    const parse = (item) => {
      if(R.isEmpty(item)) {
        return true
      }else { 
        return R.map(parse, item)
      }
    }
    
    const fieldsToString = (prefix, value, key) => {
        if(value === true && parseInt(key) == NaN) {
          response += `${prefix}${key}: 1 `
        }else {
          R.forEachObjIndexed((childValue, childKey) => fieldsToString(`${key}.`, childValue, childKey), value)
        }
    }

    let fields = R.map(parse, graphqlFields(info))
  
    R.forEachObjIndexed((value, key) => fieldsToString('', value, key), fields)
  
    return response
  }