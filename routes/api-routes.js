const Resolution = require('../models/Resolution');

module.exports = function (app) {

  app.get('/api/resolutions', function (req, res) {
    Resolution.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}