var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Jaadu Jalwa";

fetch(url).
then(function responseHandler(response) {return response.json()}).
then (function sendJSON(json){console.log(json)})
.catch((error) => {
    console.log(error)
});

const text1 = "Because, I am Batman";
getConstructor(text1);
const text2 = "My name is Heisenberg!";
getConstructor(text2);
const text3 = "I am Groot";
getConstructor(text3);
var changableURL = "XYZ";
function getConstructor(text) {
    changableURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text;

    talkToServer(changableURL);
}
function talkToServer(url) {
    fetch(url).
    then(function responseHandler(response) {return response.json()}).
    then (function sendJSON(json){console.log(json)})
    .catch((error) => {
        console.log(error)
    });
}