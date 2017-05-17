# URL Summarizer [![Build Status](https://travis-ci.org/ankemp/url-summarizer.svg?branch=master)](https://travis-ci.org/ankemp/url-summarizer)

Scrapes a remote page and creates a summary with statistics.

This package uses a combination of the following modules:

- [summarize](https://www.npmjs.org/package/summarize) &mdash; Summarize html content.
- [node-summary](https://www.npmjs.org/package/node-summary) &mdash; Summarizes text using a naive summarization algorithm.
- [unfluff](https://www.npmjs.org/package/unfluff) &mdash; A web page content extractor.

## Installation

```sh
$ npm i url-summarizer
```

```sh
$ yarn add url-summarizer
```

### Function parameters

**url** | **requestParameters** &mdash; URL string or request parameters from the [request](https://www.npmjs.com/package/request) package.

**options** &mdash; Options object has the ability to include raw HTML from request, and to exclude running running summarize() module which gets the stats object.

```json
{ includeRaw: true, excludeStats: true }
```

### Example usage

```js
const summarizer = require('url-summarizer')

const url = 'http://nodejs.org/api/documentation.html'

summarizer(url)
    .then((data) => {
    console.log(JSON.stringify(data, null, 2))
    })
    .catch(err => console.error)
```

### Example output

```json
{
    "title": "Node.js v7.10.0 Documentation",
    "softTitle": "Node.js v7.10.0 Documentation",
    "date": null,
    "author": [],
    "copyright": null,
    "lang": "en",
    "canonicalLink": "https://nodejs.org/api/documentation.html",
    "tags": [],
    "image": null,
    "videos": [],
    "links": [
    {
        "text": "submit an issue",
        "href": "https://github.com/nodejs/node/issues/new"
    },
    {
        "text": "the contributing guide",
        "href": "https://github.com/nodejs/node/blob/master/CONTRIBUTING.md"
    },
    {
        "text": "open(2)",
        "href": "http://man7.org/linux/man-pages/man2/open.2.html"
    },
    {
        "text": "read(2)",
        "href": "http://man7.org/linux/man-pages/man2/read.2.html"
    },
    {
        "text": "lchown(2)",
        "href": "http://man7.org/linux/man-pages/man2/lchown.2.html"
    },
    {
        "text": "Node\nissue 4760",
        "href": "https://github.com/nodejs/node/issues/4760"
    }
    ],
    "text": "The goal of this documentation is to comprehensively explain the Node.js API, both from a reference as well as a conceptual point of view.  Each section describes a built-in module or high-level concept.\n\nWhere appropriate, property types, method arguments, and the
    arguments provided to event handlers are detailed in a list underneath the topic heading.\n\nEvery .html document has a corresponding .json document presenting the same information in a structured manner.  This feature is experimental, and added for the benefit of IDEs and other
    utilities that wish to do programmatic things with the documentation.\n\nEvery .html and .json file is generated based on the corresponding\n\n.md file in the doc/api/ folder in Node.js's source tree.  The documentation is generated using the tools/doc/generate.js program. The
    HTML template is located at doc/template.html.\n\nIf you find an error in this documentation, please submit an issue\n\nor see the contributing guide for directions on how to submit a patch.\n\nThroughout the documentation, you will see indications of a section's stability.  The
    Node.js API is still somewhat changing, and as it matures, certain parts are more reliable than others.  Some are so proven, and so relied upon, that they are unlikely to ever change at all.  Others are brand new and experimental, or known to be hazardous and in the process of
    being redesigned.\n\nThe stability indices are as follows:\n\nStability: 0 - Deprecated This feature is known to be problematic, and changes are planned.  Do not rely on it.  Use of the feature may cause warnings.  Backwards compatibility should not be expected.Stability: 1 - Ex
    perimental This feature is subject to change, and is gated by a command line flag. It may change or be removed in future versions.Stability: 2 - Stable The API has proven satisfactory. Compatibility with the npm ecosystem is a high priority, and will not be broken unless absolut
    ely necessary.\n\nStability: 1 - Experimental\n\nEvery HTML file in the markdown has a corresponding JSON file with the same data.\n\nThis feature was added in Node.js v0.6.12.  It is experimental.\n\nSystem calls like open(2) and read(2) define the interface between user progra
    ms and the underlying operating system. Node functions which simply wrap a syscall, like fs.open(), will document that. The docs link to the corresponding man pages (short for manual pages) which describe how the syscalls work.\n\nCaveat: some syscalls, like lchown(2), are BSD-s
    pecific. That means, for example, that fs.lchown() only works on Mac OS X and other BSD-derived systems, and is not available on Linux.\n\nMost Unix syscalls have Windows equivalents, but behavior may differ on Windows relative to Linux and OS X. For an example of the subtle way
    s in which it's sometimes impossible to replace Unix syscall semantics on Windows, see Node\n\nissue 4760.",
    "stats": {
    "ok": true,
    "sentiment": 0.015590200445434299,
    "title": "Node.js v7.10.0 Documentation",
    "topics": [
        "Node",
        "syscall",
        "feature",
        "documentation",
        "Stability",
        "change",
        "Window",
        "html",
        "API",
        "Unix",
        "Linux",
        "example",
        "lchown",
        "work",
        "page",
        "system",
        "Experimental",
        "stability",
        "issue",
        "template",
        "HTML",
        "program",
        "json",
        "argument",
        "section",
        "js api",
        "js v"
    ],
    "words": 477,
    "difficulty": 0.625,
    "minutes": 4,
    "image": null
    },
    "summary": "Node.js v7.10.0 Documentation\nThe goal of this documentation is to comprehensively explain the Node.js API, both from a reference as well as a conceptual point of view.\nThis feature is experimental, and added for the benefit of IDEs and other utilities that wish
    to do programmatic things with the documentation.\nThe documentation is generated using the tools/doc/generate.js program.\nOthers are brand new and experimental, or known to be hazardous and in the process of being redesigned.\nUse of the feature may cause warnings.\nIt is expe
    rimental.\nThe docs link to the corresponding man pages (short for manual pages) which describe how the syscalls work.\nMost Unix syscalls have Windows equivalents, but behavior may differ on Windows relative to Linux and OS X."
}
```
