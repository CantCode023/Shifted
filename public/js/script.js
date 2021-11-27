const encodemessage = document.getElementById("message")
const decodemessage = document.getElementById("messaged")

const enc = document.getElementById("enc")
const dec = document.getElementById("dec")

enc.onclick = function() {
    const link1 = "/encode/" + encodeURI(encodemessage.value.toString())

    fetch(link1)
        .then(x => x.text())
        .then(y => encodemessage.value = y.replace('&1b', `
`).replace("%20", '').replace('&31', ' '))
}

dec.onclick = function() {
    const link = "decode/" + encodeURI(decodemessage.value.toString())

    fetch(link)
        .then(x => x.text())
        .then(y => decodemessage.value = y.replace('&1b', `
        `).replace("$1/", ' '))
}