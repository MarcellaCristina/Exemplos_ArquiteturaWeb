var fs = require('fs');

function lista() {}

lista.prototype.getLista = function(callback) {
  fs.readFile('./data/bancos.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      
      var obj = JSON.parse(result);
      var i = 0; //(obj.pessoas.length - 1);

      obj.banco.forEach(function(banco) {
        if (i >=  0) {
          data[i] = banco;
	      i++;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return lista;
} 