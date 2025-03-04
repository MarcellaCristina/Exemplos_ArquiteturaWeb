var express = require('express');
var router = express.Router();

/* GET home page. */
//faz o get na raiz 
router.get('/', async (req, res, next) => {
  try {
    const docs = await global.db.findAll(); //cria uma promessa
    res.render('index', { title: 'Lista de Clientes', docs });
  } catch (err) {
    next(err);
  }
})

//configurando a rota do tipo novo registro. Tem que ter a rota de get(para entrar na rota) e a rota de post(para salvar)
router.get('/new', (req, res, next) => {
  res.render('new', { title: 'Novo Cadastro', doc: {"nome":"","idade":""}, action: '/new' });
});

//configurando a rota para salvar (post) o novo registro.
router.post('/new', async (req, res, next) => {
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
 
  try {
    const result = await global.db.insert({ nome, idade });
    console.log(result);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
})

//rota de acesso a edição do registro. Tem que ter a rota de get(para entrar na rota) e a rota de post(para salvar)
router.get('/edit/:id', async (req, res, next) => {
  const id = req.params.id;
 
  try {
    const doc = await global.db.findOne(id);
    res.render('new', { title: 'Edição de Cliente', doc, action: '/edit/' + doc._id });
  } catch (err) {
    next(err);
  }
})

router.post('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
 
  try {
    const result = await global.db.update(id, { nome, idade });
    console.log(result);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
})

//configurando rota do delete
router.get('/delete/:id', async (req, res) => {
  const id = req.params.id;
 
  try {
    const result = await global.db.deleteOne(id);
    console.log(result);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;