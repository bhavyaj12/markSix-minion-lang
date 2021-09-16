var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something is wrong! Server not responding, try again later.");
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translation = json.contents.translated;
        txtOutput.innerText = translation;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)