const express = require("express")
const app = express()
const port = 8080

// Load Stuffs
app.use('/css', express.static(__dirname + '/public/style'))
app.use('/js', express.static(__dirname + '/public/js'))

// EJS
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function(req,res) {
    res.render('index')
})

app.get('/encode/:string', function(req,res) {
    let string = req.params.string

    
})

app.listen(port)