import sqlite3 from "sqlite3";

// Instanciando o package do banco
const SQLite3 = sqlite3.verbose();

// Retorna uma promise
function query(command, params, method = 'all') {
  return new Promise(function(resolve, reject){
    db[method](command, params, function(error, result){
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    })
  })
}

// Criar conexão com o banco
const db = new SQLite3.Database('banco.db', sqlite3.OPEN_READWRITE, function(err){
  if (err) {
    return console.log("Erro ao conectar com o banco de dados: " + err.message);
  }
});

export {db, query};