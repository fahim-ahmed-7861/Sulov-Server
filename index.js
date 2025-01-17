const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const fileUpload = require('express-fileupload');

const route = require('./route');

const password = "iKwGWMdRwIxz2KhU"

var cors = require('cors');


const url = `mongodb+srv://sulovEcommerceAdmin:${password}@cluster0.ch6qp.mongodb.net/SulovDb?retryWrites=true&w=majority`;

mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>console.log('connection succesfull'))
.catch(err=>console.log(err));

const app = express();

app.use(bodyParser.json());
app.use(cors()) 

app.use(fileUpload())

app.use(express.static('images'));

//app.use(express.json());



app.use('/product',route.product);

app.use('/category',route.category);


//app.use(express.json());





app.get('/',(req,res)=>
{
    res.send('start');
})

app.listen(5000,()=>
{
    console.log('listen 5000');
})
