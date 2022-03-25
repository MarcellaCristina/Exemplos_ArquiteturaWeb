//conexão com o banco de dados. A variável será responsável pro abrir o Banco de Dados
const mongoClient = require("mongodb").MongoClient
mongoClient.connect("mongodb://localhost") //variavel conectando ao local do banco
        .then(conn => global.conn = conn.db("workshoptdc")) //se der certo, conecta ao banco
        .catch(err => console.log(err)) // se der erro, mostra uma msg de erro.

//cofigurar as funções regras de negócio. Funçõe de CRUD

//função para selecionar todos os registros da coleção
function findAll() {
    return global.conn.collection("customers").find().toArray(); //retorna a coleção convertida em um array.
}

//função para inserir na coleção
function insert(customer) {
    return global.conn.collection("customers").insertOne(customer);
}

//função para buscar apenas 1 registro, pasando o ID.
const ObjectId = require("mongodb").ObjectId;

function findOne(id) {
    return global.conn.collection("customers").findOne(new ObjectId(id));
}

//função para atualizar um registro. Busca pelo ID
function update(id, customer) {
    return global.conn.collection("customers").updateOne({ _id: new ObjectId(id) }, { $set: customer }); 
    //_id: new ObjectId(id) converte o parametro id para um objetctId.
    //$set: customer propriedade que será atualizada, nesse caso indica todos os campos
}

function deleteOne(id) {
    return global.conn.collection("customers").deleteOne({ _id: new ObjectId(id) });
}

//exportando as funções 
module.exports = { findAll, insert, findOne, update, deleteOne }