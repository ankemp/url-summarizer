# summarizer - Based on [pdehaan's summarizer](https://github.com/pdehaan/summarizer)

Scrapes a remote page and creates a summary with statistics.

This package uses a combination of the following modules:

- [summarize](https://www.npmjs.org/package/summarize) &mdash; Summarize html content.
- [node-summary](https://www.npmjs.org/package/node-summary) &mdash; Summarizes text using a naive summarization algorithm.
- [unfluff](https://www.npmjs.org/package/unfluff) &mdash; A web page content extractor.

## Installation

```sh
$ npm i https://github.com/ankemp/summarizer
```

```sh
$ yarn add https://github.com/ankemp/summarizer
```

### [Example usage]

```js
const summarizer = require('summarizer')

const url = 'http://nodejs.org/api/documentation.html'

summarizer(url)
    .then((data) => {
    console.log(JSON.stringify(data, null, 2))
    })
    .catch(err => console.error)
```

#### [Example output](/example.json)

```json


```
