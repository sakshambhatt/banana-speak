var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputField = document.querySelector("#output");
btnTranslate.addEventListener("click", function clickHandler() {

    console.log("clicked!");
    console.log("Your input: " + txtInput.value);
    outputField.innerText = "Your input: " + txtInput.value;
});


