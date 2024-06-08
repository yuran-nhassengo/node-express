const express = require('express');

const app = express();


app.get('/',(req,res) =>{
    res.send('<h1>Seja Bem-vindo ao meu App');
});

app.get('/sobre',(req,res) =>{
    res.send('<h1>Minha pagina Sobre');
});

app.get('/blog',(req,res) =>{
        res.send('<h1>Bem-vindo ao meu Blog</h1>');
    });

app.get('/ola/:cargo/:nome',(req,res) =>{
    res.send('<h1>Ola '+req.params.nome+'</h1>'+'<h2>Seu Cargo: '+req.params.cargo+'</h2>');
});

app.listen(3000,()=>{
    console.log('Servidor rodando no localhost:3000');
});