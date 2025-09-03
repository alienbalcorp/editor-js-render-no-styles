
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./editor-js-render-no-styles.cjs.production.min.js')
} else {
  module.exports = require('./editor-js-render-no-styles.cjs.development.js')
}
