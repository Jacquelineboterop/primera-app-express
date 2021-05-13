/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>HcUy6Re2LLBRtj</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));*/
const express = require('express');
const app = express();
app.get('/', (req, res) => { 
   if(req.query.nombre != null) 
  { res.send('Hola ' + req.query.nombre);   
   }
     else { res.send('Hola desconocido');
          }    });
  app.listen(3000, () => console.log('Listening on port 3000!'));