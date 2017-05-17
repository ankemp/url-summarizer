const chai = require('chai')
const assert = chai.assert
const summarizer = require('../index')

const url = 'http://nodejs.org/api/documentation.html'


describe('Test Full Summary', function () {
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

describe('Test Full Summary w/ Raw', function () {
    let summary;
    before(function () {
        summary = summarizer(url, { includeRaw: true })
    })
    it('Summarize resolved without error', function () {
        return summary
    })
    it('Returned data is an object', function () {
        summary.then(results => {
            assert.isObject(results, 'Results of summary is object')
        })
    })
    it('Returned data has raw property', function () {
        summary.then(results => {
            assert.property(results, 'raw')
            assert.isString(results.raw)
        })
    })
})