const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/index.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/about.html'))
})
app.get('/ajax', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/ajax.html'))
})
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            title: "Braveheart",
            year: "1995"
        },
        {
            title: "Transformers",
            year: "2007"
        },
        {
            title: "Star Wars",
            year: "1977"
        }
    ]
    res.json(movies)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})