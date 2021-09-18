require("dotenv").config();
const express = require("express");
const { mongoDB } = require("./model/index");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoDB
  .run()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });