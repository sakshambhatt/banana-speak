var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

btnTranslate.addEventListener("click", function clickHandler() {

    console.log("clicked!");
    console.log("Your input: " + txtInput.value);
});
