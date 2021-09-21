const app = require('./app');
const db = require("./src/models/_index");

const mongoose = require("mongoose");
const { json } = require('body-parser');

mongoose
  .connect("mongodb+srv://root:root@nodejs.idymt.mongodb.net/3wa-nodejs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connection REUSSI'))
  .catch(err => console.error("Connection error", err));

const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, () => {
  console.log(`Serving running at http://${hostname}:${port}/`);
});
