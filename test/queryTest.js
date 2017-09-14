const assert = require('assert')
const parseQuery = require('../index')
const query = {
    fieldASTs: [{"kind":"Field","alias":null,"name":{"kind":"Name","value":"user","loc":{"start":10,"end":14}},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id","loc":{"start":15,"end":17}},"value":{"kind":"StringValue","value":"59bacbcbef21b54adc509ddc","loc":{"start":19,"end":45}},"loc":{"start":15,"end":45}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"phones","loc":{"start":53,"end":58}},"arguments":[],"directives":[],"selectionSet":null,"loc":{"start":53,"end":58}}],"loc":{"start":47,"end":62}},"loc":{"start":10,"end":62}}]
}

describe('Parse a GraphQL query', () => {
    it('shout parse correctly', () => {
        assert.equal(parseQuery(query), 'phones: 1 ')
    })
})