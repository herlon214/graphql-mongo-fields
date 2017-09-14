const 
    R = require('ramda'),
    graphqlFields = require('graphql-fields')

const parse = (item) => {
    if(R.isEmpty(item)) {
      return true
    }else { 
      return R.map(parse, item)
    }
}
const fieldsToString = (prefix, value, key) => {
    if(value === true) {
      response += `${prefix}${key}: 1 `
    }else {
      R.forEachObjIndexed((childValue, childKey) => fieldsToString(`${key}.`, childValue, childKey), value)
    }
}
    

module.exports = (info) => {
    let fields = R.map(parse, graphqlFields(info))
    let response = ''
  
    R.forEachObjIndexed((value, key) => fieldsToString('', value, key), fields)
  
    return response
  }