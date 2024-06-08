const express = require('express');

const app = express();



app.get('/ola/:cargo/:nome',(req,res) =>{
    res.send('<h1>Ola '+req.params.nome+'</h1>'+'<h2>Seu Cargo: '+req.params.cargo+'</h2>');
});

app.listen(3000,()=>{
    console.log('Servidor rodando no localhost:3000');
});