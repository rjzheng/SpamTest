const NodeLinked = require('./NodeLinked');
const express = require('express');
const app = express();
const port = 3000;

const LinkedList = new NodeLinked();

app.get('/get/:element', (req, res) => {
  const element = req.params.element;
  console.log(`retrieving node ${element}`);
  const node = LinkedList.getIndexOf(element);
  res.send(`${node}`);
});

app.post('/add', (req, res) => {
  const element = req.body.element;
  LinkedList.add(element);
  console.log(`adding node ${element}`);
  res.send(element);
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
