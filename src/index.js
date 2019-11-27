const express = require("express");

const app = express();

app.get("/api/v1/notas", (req, res) => {
  res.status(200).send({
    success: true,
    message: "get notas"
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
