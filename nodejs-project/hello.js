'use strict'

const {BaseKonnector, log} = require('cozy-konnector-libs')

module.exports = new BaseKonnector(() => {
  log('info', 'Hello World!')
})
