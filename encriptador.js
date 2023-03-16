var inputText = document.querySelector("#input-box textarea");
var outputBox = document.querySelector("#output-box");
var outputBoxInicial = document.querySelector("#output-box div:first-of-type");
var outputBoxFinal = document.querySelector("#output-box div:last-of-type");
var outputText = "";
var botonEncriptar = document.querySelector("#boton-encriptar");
var botonDesencriptar = document.querySelector("#boton-desencriptar");
var botonCopiar = document.querySelector("#copy-button");

outputBoxFinal.style.display = "none";
var addText = document.createElement("textarea");
addText.className = "textBox";

var letrasSinEncriptado = ["a", "e", "i", "o", "u"];
var letrasConEncriptado = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar(){
    if (inputText.value!= "") {
        outputText = Array.prototype.map.call(inputText.value, function(char){
            for (let i = 0; i <letrasSinEncriptado.length; i++) {
                if (char == letrasSinEncriptado[i]) {
                    return letrasConEncriptado[i];
                    break              
                }
            }
            return char
        }).join("");
        addText.textContent = outputText
        outputBox.replaceChild(addText,outputBox.children[0]);
        outputBoxFinal.style.display = "block";
    } else {
        outputBoxFinal.style.display = "none";
        outputBox.replaceChild(outputBoxInicial,outputBox.children[0]);
    }      
}



botonEncriptar.onclick = encriptar;

function desencriptar() {
    if (inputText.value != "") {
        outputText  = inputText.value;
        for (let i = 0; i < letrasConEncriptado.length; i++) {
            outputText = outputText.replaceAll(letrasConEncriptado[i],letrasSinEncriptado[i]);
        }
        addText.textContent = outputText
        outputBox.replaceChild(addText,outputBox.children[0]);
        outputBoxFinal.style.display = "block";
        } else {
            outputBoxFinal.style.display = "none";
            outputBox.replaceChild(outputBoxInicial,outputBox.children[0]);
        }     
}

botonDesencriptar.onclick = desencriptar;

function copiar() {
    var copyText = document.querySelector("#output-box textarea");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }

  botonCopiar.onclick = copiar;

