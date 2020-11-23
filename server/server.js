const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = {
  name: 'sample-express-app',
  port: 8082,
  host: '0.0.0.0',
};

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('hello, ingrid');
});

app.listen(config.port, config.host, (e)=> {
  if(e) {
    throw new Error('Internal Server Error');
  }
});
