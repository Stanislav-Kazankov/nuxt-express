const express = require('express')
const app = express()

app.all('/', (request, response) => {
  response.send('Hello World!')
})

export default {
  path: '/',
  handler: app
}
