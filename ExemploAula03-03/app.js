const express = require('express');
const app = express(); //herda as caracteristicas do framework express

//chamada de get
app.get('/',(req,res)=>{
    return res.json({usuario:'Marcella'});
});

//servidor rodando na porta
app.listen(8000, function(){
    console.log('Servidor está ativo')
});//listen escuta a porta 8000
