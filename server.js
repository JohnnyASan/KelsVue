const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true
});

let questions = [];
let user = "";

app.get('mongodb://localhost:27017/questions', (req, res) => {
  res.send(comments);
});

app.post('mongodb://localhost:27017/questions', (req, res) => {
  let question = {
    user: addedName,
    question: addedQuestion
  };
  questions.push(question);
  res.send(question);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
