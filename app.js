var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputField = document.querySelector("#output");
btnTranslate.addEventListener("click", function clickHandler() {
    
    outputField.innerText = "Your input: " +  txtInput.value;
});