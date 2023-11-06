// Invocar express
const express = require('express');
const app = express();

// Setear express
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Invocar a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

// Directorio público
app.use('/resources', express.static('public'));
app.use('/resource', express.static(__dirname + '/public'));

// motor de plantilla
app.set('view engine', 'ejs');

// invocación de bcryptjs
const bcryptjs = require('bcryptjs');

// inicio de session
const session = require('express-session');
app.use(session({ 
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Incación del módulo de conexión a la DB
const connection = require('./database/db');

// establecer rutas
    app.get('/', (req, res) => {
        res.render('index', {msg:'este es un mensaje'});
    })

    app.get('/login', (req, res) => {
        res.render('login');
    })

    app.get('/registro', (req, res) => {
        res.render('registro');
    })

        app.get('/calculator',(req,res) => {
          res.render('calculator');
        
    })

// Registro de usuarios
app.post('/resgistro', async (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const cedula = req.body.cedula;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const password = req.body.password;
    //const passwordHaash = await bcryptjs.hash(password, 4);
    connection.query('INSERT INTO usuario SET ?', {nombre:nombre, apellido:apellido, cedula:cedula, telefono:telefono, email:email, password:password}, async(error, resultado) =>{
        if (error) {
            console.log(error);
        }else {
            res.send('Satisfactorio');
        }
    })
 
    //calculadora de la historia 8
    app.post('/api/calculator', async (req, res) => {
        const { distance } = req.body;
    
        try {
            // Hacer una solicitud POST al servidor de cálculo de tarifas de taxi
            const response = await axios.post('http://localhost:5000/api/calculateFare', { distance });
    
            // Enviar la respuesta del servidor de cálculo de tarifas de taxi al cliente
            res.json(response.data);
        } catch (error) {
            console.error('Error al calcular la tarifa: ' + error);
            res.status(500).json({ error: 'Error al calcular la tarifa' });
        }
    });
    

})

app.listen(3000, (req, res) => {
    console.log('El servidor se está ejecutando en http://localhost:3000')
})