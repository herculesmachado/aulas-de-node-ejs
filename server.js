const express = require('express');
const app = express()

// A ferramenta que vai ser usada para renderizer será o view engine
app.set('view engine', 'ejs')

// Criando uma rota
// hercules.com.br
app.get('/', function (req, res) {
    const item = [
        {
            titulo: "D",
            mensagem: "esenvolvendo aplicações web"
        },
        {
            titulo: "E",
            mensagem: "JS"
        },
        {
            titulo: "F",
            mensagem: "ECHA"
        },
        {
            titulo: "G",
            mensagem: "ECHA"
        }
    ]


    const subtitles = 'uma linguagem de modelagem para criação de paginas html utilizando JS'
    // to passando um objeto para o index
    res.render('pages/index', {
        //objeto: item
        qualitys: item,
        subtitles: subtitles,
    })
})

// hercules.com.br/sobre
app.get('/sobre', function(req, res) {
    res.render('pages/about')
})

// o app está carregando tudo do express, e o listen fica ouvindo alguma porta, neste caso será a 8080
app.listen(8080)
console.log('rodando')

// ao ser executado o 'localhost:8080' é gerado um erro, caso o index.html esteja fora de uma pasta chamada views'