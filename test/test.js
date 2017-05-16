const chai = require('chai')
const assert = chai.assert
const summarizer = require('../index')

const url = 'http://nodejs.org/api/documentation.html'


describe('Test Summary', function () {
    let summary;
    before(function () {
        summary = summarizer(url)
    })
    it('Summarize resolved without error', function () {
        return summary
    })
    it('Returned data is an object', function () {
        summary.then(results => {
            assert.isObject(results, 'Results of summary is object')
        })
    })
})