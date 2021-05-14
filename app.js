/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>HcUy6Re2LLBRtj</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));*/
const express = require('express');
const app = express();



app.get('/makers/:name', (req, res) => { 
  res.send('<h1>Hola ' + req.params.name.charAt(0).toUpperCase()+req.params.name.slice(1)+'!</h1>');   
});
app.listen(3000, () => console.log('Listening on port 3000!'));   