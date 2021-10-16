const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

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

const uri = `mongodb+srv://92eduardocastillo:fPnul2pWfHnraMra@cluster0.6s6vx.mongodb.net/veterinaria?retryWrites=true&w=majority`

console.log("inicio")
mongoose.connect(uri, 
{ useNewUrlParser: true, useUnifiedTopology: true }
).then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log(e))
console.log("fin")


// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public")) 


app.use('/api/user',require('./router/auth'))
app.use('/mascotas',require('./router/Mascotas'))
app.use('/tienda', require('./router/validate-token') ,require('./router/Tienda'))


app.get('/*',(req, res) =>{    
    res.sendFile(__dirname + '/public/index.html')
})

app.use((req, res, next) =>{
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "Titulo del sitio web"
    }) 
})

app.listen(port, () => {
    console.log('servidor en el puerto' , port)
})