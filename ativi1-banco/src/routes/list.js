module.exports = function(application){
    application.get('/', function(req, res){
      application.src.controllers.list.index(application, req, res);
    });
  }