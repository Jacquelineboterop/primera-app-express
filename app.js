/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>HcUy6Re2LLBRtj</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));
const express = require('express');
const app = express();



app.get('/makers/:name', (req, res) => { 
  res.send('<h1>Hola ' + req.params.name.charAt(0).toUpperCase()+req.params.name.slice(1)+'!</h1>');   
});
app.listen(3000, () => console.log('Listening on port 3000!'));*/


const express = require('express');
const app = express();



app.get('/', (req, res) => { 
  let str=''
  for (let index = 1; index < 50; index++) {
    if(index%2 ===0){
      str += '<p>'+index+' Soy Par!</p>' ;
    }
    else {
      str += '<p>'+index+' Soy Impar! </p>'  ;
    }
  }
  res.send(`${str}`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
   
   