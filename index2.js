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

app.get('/ola/:nome',(req,res) =>{
    res.send('Ola');
});

app.listen(3000,()=>{
    console.log('Servidor rodando no localhost:3000');
});