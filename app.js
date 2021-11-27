const express = require("express")
const app = express()
const port = 8080

// Load CSS
app.use('/css', express.static(__dirname + '/public/css'))
// Load JavaScript
app.use('/js', express.static(__dirname + '/public/js'))
// Load Images
app.use('/images', express.static(__dirname + '/public/images'))

// EJS Viewer Setup
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function(req,res) {
    res.render('index')
})

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function shift(offset=null, message=null) {
    console.log(alphabet)
}

app.get('/encode/:string', function(req,res) {
    let string = req.params.string

    shift()
})

app.listen(port)