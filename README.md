# metalsmith-template-data

A Metalsmith plugin to import template data from CommonJS modules. This plugin extends Metalsmith file objects with the contents of any CommonJS modules specified by the dataFile property of the file.

## Installation

    $ npm install metalsmith-template-data

## YAML front matter
To import a CommonJS module as template data, add the `dataFile` property to your file's YAML front matter:

```yaml
---
template: base.html
dataFile: data/index.js
---
```

You data file should export an object. 

If any properties of the imported data object conflict with properties you define in your YAML front matter, the values specified in the data file will override those specified in front matter.

## JavaScript usage

```js
var templateData = require('metalsmith-template-data');
metalsmith.use(templateData());

```

## CLI usage

```json
{
  "plugins": {
    "metalsmith-template-data": {}
  }
}
```

## License

MIT