const express = require('express');


const bodyParser = require('body-parser');

const app = express();

//Codigo para quitar los cors header
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, 	X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-	Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, 	DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use(bodyParser.urlencoded({ extended : false }))

app.use(bodyParser.json())

const port = process.env.PORT || 3005;

const mongoose = require('mongoose');

const usuario = "92eduardocastillo"
const password = "ow3wRAYT1tSaERjr"
const dbName = "veterinaria"
const uri = `mongodb+srv://${usuario}:${password}@cluster0.6s6vx.mongodb.net/${dbName}?retryWrites=true&w=majority`

console.log("inicio")
mongoose.connect(uri, 
{ useNewUrlParser: true, useUnifiedTopology: true }
) .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
console.log("fin")


// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public")) 

app.use('/api',require('./router/RutasWeb'))
app.use('/mascotas',require('./router/Mascotas'))
app.use('/tienda',require('./router/Tienda'))

app.use((req, res, next) =>{
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "Titulo del sitio web"
    }) 
})



app.listen(port, () => {
    console.log('servidor a su servisio enm el puerto' , port)
})