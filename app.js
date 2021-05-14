/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>HcUy6Re2LLBRtj</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));*/
const express = require('express');
const app = express();


app.get('/user/:name', (req, res) => { 
   if(req.params.name != null) 
  { res.send('<h1>Hola ' + req.params.name+'!</h1>');   
   }
     else { res.send('<h1>Hola desconocido!</h1>');
          }    });
  app.listen(3000, () => console.log('Listening on port 3000!'));

  //app.get('/user/:name', (req, res) => {
   