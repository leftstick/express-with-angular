const express = require('express')

const { initIndexPageEntry } = require('./server/setup/entry')
const { initStaticAssetsHandler } = require('./server/setup/staticAssets')
const { initRequestBodyParser } = require('./server/setup/requestBody')
const { initCookieParser } = require('./server/setup/cookie')
const { registerAPIs } = require('./server/setup/apis')
const { initServerRunner } = require('./server/setup/serverRunner')

const app = express()

initStaticAssetsHandler(app)
initRequestBodyParser(app)
initCookieParser(app)

registerAPIs(app)

initIndexPageEntry(app)

initServerRunner(app)
  .then(message => {
    console.log(message)
  })
  .catch(err => {
    console.error(err.stack || err)
    process.exit(-1)
  })
