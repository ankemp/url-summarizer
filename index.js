const summarize = require('summarize')
const summary = require('node-summary')
const request = require('request')
const unfluff = require('unfluff')

const summarizeArticle = (title, story) => {
    return new Promise((Resolve, Reject) => {
        summary.summarize(title, story, (err, summary) => {
            if (err) return Reject(err)
            summary = summary.replace(title, '') // remove title from summary
            return Resolve(summary)
        })
    })
}

const requestPromise = (requestOptions) => {
    return new Promise((Resolve, Reject) => {
        request(requestOptions, (err, response, body) => {
            if (err) return Reject(err)
            return Resolve(body)
        })
    })
}

module.exports = (requestOptions, options) => {
    return new Promise((Resolve, Reject) => {
        requestPromise(requestOptions)
            .then(body => {
                let pageContent = unfluff(body)
                if (options && options.includeRaw) {
                    pageContent.raw = body
                }
                if (!options || (options && options.excludeStats)) {
                    pageContent.stats = summarize(body)
                }
                summarizeArticle(pageContent.title, pageContent.text)
                    .then(summary => {
                        pageContent.summary = summary
                        return Resolve(pageContent)
                    })
                // .catch(err => Reject)
            })
        // .catch(err => Reject)
    })
}
