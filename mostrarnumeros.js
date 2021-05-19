<!DOCTYPE html>
<html>
<head>
  <title>Formulario</title>
</head>
<body>
  <p>Mostrar todos los numeros comprendidos entre los dos valores ingresados de uno en uno.</p>
  <form action="mostrarnumeros" method="post">
  Ingrese numero inferior:
  <input type="text" name="numero1" size="10"><br>
  Ingrese numero superior:
  <input type="text" name="numero2" size="10"><br>
  <input type="submit" value="Mostrar">
</form>
</body>
</html>



app.use(bodyParser.urlencoded({ extended: false }));

app.post('/mostrarnumeros', (req, res) => {
  let num1=req.body.numero1;
  let num2=req.body.numero2;
  num1=parseInt(num1);
  num2=parseInt(num2);
  let pagina='<!doctype html><html><head></head><body>';
  for(let x=num1;x<=num2;x++)
    pagina += `<a href="/mostrartabla?valor=${x}">${x}</a> - `;
  pagina += '</body></html>';
  res.send(pagina);	
})

app.get('/mostrartabla', (req, res) => {
  let num=req.query.valor;
  num=parseInt(num);
  let pagina='<!doctype html><html><head></head><body>';
  for(let x=1;x<=10;x++) {
    let tabla=num * x;
    pagina += `${num} * ${x} = ${tabla} <br>`;
  }	
  pagina += '<a href="index.html">Retornar</a>';
  pagina += '</body></html>';
  res.send(pagina);	
})


var server=app.listen(8888, () => {
  console.log('Servidor web iniciado');
});