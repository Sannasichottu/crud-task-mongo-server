const express = require('express');
const app =express();
const cors = require('cors');
const mongoose = require('mongoose');
require ('dotenv').config();
const UserRouter = require('./routes/user')

/*
app.get('/',(req,res)=> {
    res.send("Hello chottu")
});
*/

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI

mongoose.set('strictQuery', false);
mongoose.connect(uri,err => {
    if(err) throw err;
})

app.use('/Users',UserRouter);

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Db connection successfully")
})


app.listen(process.env.PORT,()=>{
    console.log("Server running on port 5001")
})
