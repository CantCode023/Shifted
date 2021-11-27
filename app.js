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

// i = message.charAt(i)

// if (isalpha(i)) {
//     shifted = alphabet.indexOf(i) + offset
//     newMessage = alphabet[shifted]
// } else if (!isalpha(i)) {
//     newMessage += ''
// } else {
//     newMessage += ''
// }

function shift(str, num) {
    str = str.toLowerCase();

    var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].replace('%20',' ').replace('%0A','<br>').charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result.replace('!', ' ').replace('','<br>');

}

app.get('/encode/:string', function(req,res) {
    let string = encodeURI(req.params.string.toString())

    res.send(shift(string, 1))
})

app.get('/decode/:string', function(req,res) {
    let string = encodeURI(req.params.string.toString())

    res.send(shift(string, -1))
})

app.listen(port)
console.log("Server have started!")