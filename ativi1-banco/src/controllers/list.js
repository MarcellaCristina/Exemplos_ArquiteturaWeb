module.exports.index = function(application, req, res) {
    var listModel = new application.src.models.list();
  
    listModel.getList(function(err, result) {
      res.render("index", {list : result});
    });
  }