
require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

app.get('/usuario', function (req, res) {
  res.json('get usuario')
});

app.post('/usuario', function (req, res) {
    let { nombre, edad, correo } = req.body;
    
    if(nombre === undefined){
        res.status(400).json({
            mensaje: 'El nombre es necesario'
        })
    }else{        
        res.json({
            persona: {
                nombre,
                edad,
                correo
            }
        })
    }
});

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
});
   

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
})