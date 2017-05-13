const summarize = require('summarize')
const summary = require('node-summary')
const superagent = require('superagent')
const unfluff = require('unfluff')

const summarizeArticle = (title, story) => {
    return new Promise((Resolve, Reject) => {
        summary.summarize(title, story, (err, summary) => {
            if (err) return Reject(err)
            summary = summary.split('/n').pop().replace('/n', '') // remove title from summary
            return Resolve(summary)
        })
    })
}

const superagentGet = (url) => {
    return new Promise((Resolve, Reject) => {
        superagent
            .get(url)
            .end((err, res) => {
                if (err) return Reject(err)
                return Resolve(res)
            })
    })
}

module.exports = (url, options) => {
    return new Promise((Resolve, Reject) => {
        superagentGet(url)
            .then(data => {
                const text = data.text
                let pageContent = unfluff(text)
                if (options.includeRaw) {
                    pageContent.raw = text
                }
                pageContent.stats = summarize(text)
                summarizeArticle(pageContent.title, pageContent.text)
                    .then(summary => {
                        pageContent.summary = summary
                        return Resolve(pageContent)
                    })
                    .catch(err => Reject)
            })
            .catch(err => Reject)
    })
}

