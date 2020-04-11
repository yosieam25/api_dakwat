let router = require('express').Router();

router.get('/',function(req,res){
  res.json({
    pesan:"data api mukhtarul dakwat"
  })
})

var doaControlling = require('./controller');

router.route('/doa')
  .get(doaControlling.index)
  .post(doaControlling.new);

router.route('/doa/:doa_id')
  .get(doaControlling.view)
  .patch(doaControlling.update)
  .put(doaControlling.update)
  .delete(doaControlling.delete);

module.exports = router;
