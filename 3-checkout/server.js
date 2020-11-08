const express = require('express');
const path = require('path');
const {save} = require('./database/mongoDb.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/checkout', (req, res) => {
  let customerInformation = req.body;
  save(customerInformation)
  .then((response) => res.sendStatus(201))
  .then(() => {'Response successfully inputed into database.'})
  .catch((error) => {console.log('Error with POST request: ', error)})
})

app.listen(port, () => {console.log(`Listening at post: ${port}`)});