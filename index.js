var express = require('express')
var app = express()

const pod_ip = process.env.POD_IP;

app.get('/', function (req, res) {
  res.send('Hello World! ${pod_ip}')
})

app.listen(8081, function () {
  console.log('Listening on port 8081')
})