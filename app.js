const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended : false }))

app.use(bodyParser.json())

const port = 3005;

// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public")) 

app.use('/api',require('./router/RutasWeb'))
app.use('/mascotas',require('./router/Mascotas'))

app.use((req, res, next) =>{
    res.status(404).render("404",{
        titulo: "404",
        descripcion: "Titulo del sitio web"
    }) 
})



app.listen(port, () => {
    console.log('servidor a su servisio enm el puerto' , port)
})