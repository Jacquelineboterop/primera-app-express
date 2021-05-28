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


const express = require('express');
const app = express();



app.get('/', (req, res) => { 
  res.send(  req.header('User-Agent')
  );   
});
app.listen(3000, () => console.log('Listening on port 3000!')); 

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function(err, db) {

      cursor.log("connected"); 

        db.close();

    }); 

    const consecutive = arr => 
    arr.find((element, index) => element - arr[index - 1] > 1 )||  null;
      
    console.log(consecutive([1,2,3,5])); 

    const sumsequence = arr => {
      if (!arr[0]) return 0

      const lastNumber = arr[arr.length - 1];
      return arr.filter((element, index) => index % 2 ===0).reduce((acum, element) => acum + element) * lastNumber;

    }
    console.log(sumsequence([]));*/
    const express = require('express'); 
    const app = express(); 
    const port = 3000;     
    var mongoose = require("mongoose"); 
    mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true, useUnifiedTopology: true })  
    mongoose.connection.on("error", function(e) { 
    console.error(e); 
      });  
    const schema = mongoose.Schema({   date: Date,   name: { type: String, default: "Anónimo" } });  
    const Visitor = mongoose.model("Visitor", schema);  app.get('/', (req, res) => {   const nombre = req.query.name;     
    Visitor.create(     {
                           name: nombre,       date: new Date()     }, (error) => {       
                             if (error){         
                               return;       
                              }       
                           res.send('<h1>El visitante fue almacenado con éxito</h1>');     
                          }   ) });   
                          app.listen(3000);