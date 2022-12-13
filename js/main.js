let btnEnviar = document.getElementById("btnEnviar");
let idTimeout;
btnEnviar.addEventListener("click", function(event){
event.preventDefault();
let emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2");
let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
let alertError = document.getElementById("alertError");
exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
alertError.style.display="none";
alertError.innerHTML="";

if (exampleFormControlTextarea1.value.trim().replaceAll(" ", "").length < 20) {
    alertError.innerHTML= "El mensaje debe contener 20 caracteres o más";
    alertError.style.display="block";
    exampleFormControlTextarea1.focus();
    exampleFormControlTextarea1.select();
    
}
if (exampleFormControlInput1.value.match(emailRegex) == null) {
    alertError.style.display="block";
    alertError.innerHTML += "<br/>El correo electrónico no es válido.";
    exampleFormControlInput1.style.border = "solid red 1px";
}
let RFCRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;

exampleFormControlInput2.value = exampleFormControlInput2.value.toUpperCase();
if (exampleFormControlInput2.value.match(RFCRegex) == null) {
    alertError.style.display="block";
    alertError.innerHTML += "<br/>El RFC no es válido.";
    exampleFormControlInput2.style.border = "solid red 1px";
}else  {
    exampleFormControlInput2.style.border = "solid green 1px";
    validos++;
    //exampleFormControlInput2.style.border = "solid green 1px";
}//exampleFormControlInput2.style.border = "";
if ((idTimeout!=undefined) && (idTimeout!=null)) {
    clearTimeout(idTimeout);
}
if (validos == 3) {
    idTimeout (function (){
        exampleFormControlTextarea1.style.border ="";
    exampleFormControlInput1.style.border ="";
    exampleFormControlInput2.style.border ="";
    }, 3000);
    
}// == 3
});