const R = require('ramda')

module.exports = (obj) => {
    let response = ''
    
    const parse = (item) => {
        if(R.isEmpty(item)) {
        return true
        }else { 
        return R.map(parse, item)
        }
    }
    
    const fieldsToString = (prefix, value, key) => {
        if(value === true && key !== '1') {
            response += `${prefix}${key}: 1 `
        }else {
            R.forEachObjIndexed((childValue, childKey) => fieldsToString(`${key}.`, childValue, childKey), value)
        }
    }

    let fields = R.map(parse, obj)
    
    R.forEachObjIndexed((value, key) => fieldsToString('', value, key), fields)
    
    return response
}