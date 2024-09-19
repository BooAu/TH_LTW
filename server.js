import express from 'express'
import dotenv from 'dotenv/config'
import date from './date.js'
import getURL from './getURL.js'
import viewEngine from './viewEngine.js'
const app = express()
const port=process.env.PORT
viewEngine (app) 
// app.get ('/about', (req, res) => {
//     res.send ('Hello World!.Page about')
// })

app.get ('/date', (req, res) => {
    res.send(date() + "<br>") 
})

app.get ('/getURL', (req, res) => {
    res.send(getURL.getParamsURL(req) + "<br>");
})

app.get ('/ejs', (req, res) => {
    res.render("test")
})

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
