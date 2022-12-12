//Ejercicios de cadenas Strings
/*let nombre = "Elmasperron"
nombre =  nombre.toUpperCase();
let letra = "";
let contFinal=0;

for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index)); 
    let contTemp=1;
    for (let cont = index+1; cont < nombre.length; cont++) {
if (nombre.charAt(index) == nombre.charAt(cont))
contTemp++
    }
if (contTemp>contFinal) {
    contFinal=contTemp
    letra = nombre.charAt(index);
}
}
console.log(letra, contFinal);*/
var cadena = "Abraham"

var indices = [];
for(var i = 0; i < cadena.length; i++) {
	if (cadena[i].toLowerCase() === "a") indices.push(i);
}

document.getElementById("resultado").innerHTML = indices.lengt