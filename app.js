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
app.listen(3000, () => console.log('Listening on port 3000!'));

const express = require('express');
const app = express();



app.get('/', (req, res) => { 
  let str=''
  for (let index = 1; index <= 50; index++) {
    if(index%2 ===0){
      str += '<p>'+index+' Soy Par!</p>' ;
    }
    else {
      str += '<p>'+index+' Soy Impar! </p>'  ;
    }
  }
  res.send(`${str}`);
});
*/

const express = require('express');
const app=express();
const bodyParser = require('body-parser');

//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/'));

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/mostrartexto', (req, res) => {
  let str1=req.body.texto1;
   str1=String(str1);
  let pagina='<!doctype html><html><head></head><body>';

    pagina += `<h1>Hola ${str1}!</h1> `;
  pagina += '</body></html>';
  res.send(pagina);	
})




var server=app.listen(3000, () => {
  console.log('Servidor web iniciado');
});