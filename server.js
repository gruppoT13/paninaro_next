const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const routes = require('./routes/ingrediente');
const routes2 = require('./routes/cliente');
const routes3 = require('./routes/gestore');
const mongoose = require ( 'mongoose' );
mongoose.set('strictQuery', true);

app.use(express.json());
app.use('/', routes);
app.use('/', routes2);
app.use('/', routes3);

app.use('/', express.static(process.env.FRONTEND));

app.use((req,res,next) => {
    console.log(req.method + ' ' + req.url)
    next()
})


const cors = require('cors')
app.use(cors())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
     next();
});

// Connessione al DataBase
try{
    mongoose.connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err) => {
            if(err) return console.log("Error: ", err);
            console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState); 
        }
    );
} catch (e){
    console.log("DB not connected")
}

// listener Porta
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listen on port ' + 
    listener.address().port)
})


