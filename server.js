const express = require('express');
const app = express();
const port = 3000;

app.get('/get', (req, res) => {
  const node = req.param;
  console.log(`retrieving node ${node}`);
  res.send('Hello');
});

app.post('/add', (req, res) => {
  const body = req.body;
  console.log(`adding node ${body}`);
  res.send(body);
});

app.delete('/delete', (req, res) => {
  console.log('deleted node');
  res.end();
});

app.put('/update', (req, res) => {
  console.log('updating node');
  res.end();
});

app.patch('/update', (req, res) => {
  console.log('updating node');
  res.end();
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
