import express from "express";
import cors from "cors";

const app = express();

app.use(express.json);
app.use(cors());

app.get("/produtos", function(req, res){
  res.statusCode(200).send("Aqui vamos listar os produtos..");
});

app.listen(3003, function(){
  console.log("Servidor executando com sucesso na porta 3003");
});