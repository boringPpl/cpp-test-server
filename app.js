var express = require('express')
var child = require('child_process')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/test', function (req, res) {
  var b = req.body

  child.exec(
    `rm -rf __users/${b.user_id} &&
     mkdir -p __users/${b.user_id}/tests __users/${b.user_id}/solutions &&
     cp -R __tests/. __users/${b.user_id}/tests &&
     git clone ${b.github_repo} __users/${b.user_id}/solutions &&
     make __users/${b.user_id}/tests/${b.activity_no} &&
     __users/${b.user_id}/tests/${b.activity_no} -r xml`,
    function (err, stdout, stderr) {
      if (!stdout) {
        return res.status(500).send(err || stderr)
      }

      try {
        var temp = stdout.indexOf('<?xml')
        res.send(stdout.substring(temp))
      } catch (err) {
        res.status(500).send(err)
      }
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
