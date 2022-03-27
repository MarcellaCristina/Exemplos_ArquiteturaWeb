module.exports.index = function(application, req, res) {
    var listaModel = new application.src.models.lista();
  
    listaModel.getLista(function(err, result) {
      res.render("lista/index", {lista : result});
    });
  }
