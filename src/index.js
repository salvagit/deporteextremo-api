const express = require("express");
const cors = require("cors");
const loki = require("lokijs");


const db = new loki("./notas.json");
const app = express();

let notas = db.addCollection("notas");


db.loadDatabase({}, () => {
  notas = db.getCollection("notas");
});

app.use(cors());


app.get("/api/v1/notas:id?", (req, res) => {
  let status = 200;
  let response;
  try{
    response = notas.data;
    if( req.params.id){
      response = notas
        .chain()
        .find({$loki: Number(reqs.params.id)})
        .data();
    }
  }catch(e){
    status = 500;
  }
  res.status(status).send({
    success: true,
    message: "GET NOTAS",
    response
  });
});

app.post("/api/v1/notas", (req, res) => {
  res.status(200).send({
    success: true,
    message: "post notas"
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app started on port ${port}`));
