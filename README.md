# Shifted Cypher Node.Js BETA

This is an open-source shift cypher encoder and decoder using javascript.

Try it <a href="https://shifted-1.smtkd.repl.co" target="_blank">here.</a> 

# How it works

I made a function in javascript where you can shift letters to a specific offset.

There are 2 parameters for this function which is str and num

What is str and num?
str is the message you want to shift
and num is the shifting offset you want it to set to.

Say you set the offset to 1, if you set parameter str to a then it will return b as it shifts a one letter up.

             _ STR
            |
FUNCTION ---
            |_ NUM
            
```js
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

console.log(shift(a, 1));
```
