'use strict'

// This is a default simple connector made to show you some common libs which can be used
// This connector fetches some cat images from the qwant api (which is more open than the google one)
const {BaseKonnector, log} = require('cozy-konnector-libs')

module.exports = new BaseKonnector(fields => {
  log('info', 'Bonjour tout le monde!')
})
