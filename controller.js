Doa = require('./doamodel');

//handle index action

exports.index = function(req,res){
  Doa.get(function(err,doa){
    if(err){
      res.json({
        status:"error",
        message:err
      })
    }res.json({
      status:"sukses",
      message:"data mukhtarul dakwat",
      data:doa
    });
  });
};

//handle create doa

exports.new = function(req,res){
  var doa = new Doa();
  doa.nama = req.body.nama ? req.body.nama : doa.nama;
  doa.arab = req.body.doa;
  doa.latin = req.body.latin;
  doa.keterangan = req.body.latin;
  doa.kategori = req.body.kategori;

  doa.save(function(err){
    res.json({
      message:"data tersimpan",
      data:doa
    })
  })
}

//handle view
exports.view = function(req, res){
  Doa.findById(req.params.doa_id,
  function(err, doa){
    if(err)
      res.send(err);
    res.json({
      message : "data",
      data : doa
    })
  });
}

//handle update doa
exports.update = function(req,res){
  Doa.findById(req.params.doa_id,
  function(err,doa){
    if(err)
      res.send(err)
    doa.nama = req.body.nama ? req.body.nama : doa.nama;
    doa.arab = req.body.arab;
    doa.latin = req.body.latin;
    doa.keterangan = req.body.keterangan;
    doa.kategori = req.body.kategori;

    doa.save(function(err){
      if(err)
        res.json(err)
      res.json({
        message:"data update",
        data:doa
      })
    })
  });
}

//handle delete doa
exports.delete = function(req, res){
  Doa.remove({
    _id:req.params.doa_id
  },function(err, doa){
    if(err)
      res.send(err)
    res.json({
      message :"data delete",
      status :"sukses",
      data : doa
    })
  })
}
