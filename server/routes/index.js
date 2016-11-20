var express = require('express');
var router = express.Router();
var path = require('path');

//Route the index.html to the server
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/views/partials/index.html'));
});

module.exports = router;
