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

const superagentGetP = (uri) => {
    return new Promise((Resolve, Reject) => {
        superagent.get(uri)
            .end((err, res) => {
                if (err) return Reject(err)
                return Resolve(res)
            })
    })
}

module.exports.getPage = (uri) => {
    return new Promise((Resolve, Reject) => {
        superagentGetP(uri)
            .then(data => {
                const text = data.text
                let pageContent = unfluff(text)
                pageContent.raw = text
                pageContent.stats = summarize(text)
                summarizeArticle(pageContent.title, pageContent.text)
                    .then((res) => {
                        pageContent.summary = res
                        Resolve(pageContent)
                    }, Reject)
            }, Reject)
    })
}

