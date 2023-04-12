const express=require('express');

const {PORT}=require('./config/serverconfig')
const app = express();

const prepareAndStartServer= ()=>{
    app.listen(3001,()=>{
        console.log('Server Started on Port',PORT);
    })
}

prepareAndStartServer();