const assert = require('assert')
const { parse } = require('../src/lib')

describe(`Parse objects`, () => {
    it('should parse correctly', () => {
        let obj = {
            foo: {
                bar: {}
            }
        }

        assert.equal(parse(obj), 'foo.bar: 1 ')
    })
})