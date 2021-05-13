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
  { res.send('<h1>Hola Pedro!</h1>' );   
   }
     else { res.send('<h1>Hola desconocido</h1>');
          }    });
  app.listen(3000, () => console.log('Listening on port 3000!'));