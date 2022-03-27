module.exports = function(application){
    application.get('/', function(req, res){
      application.src.controllers.lista.index(application, req, res);
    });
  }
