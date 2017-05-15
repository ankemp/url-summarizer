const summarizer = require('../index')

const url = 'http://nodejs.org/api/documentation.html'


describe('Test response', function () {
    it('Return summarized data', function () {
        return summarizer(url)
    })
})