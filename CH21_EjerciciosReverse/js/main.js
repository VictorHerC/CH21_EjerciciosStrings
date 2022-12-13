//Entrada
//"Laura Aline"
//Salida 
//"enila arual"
let nombre = "Laura Aline"
let letra = "";
for(let a = nombre.length-1; a>=0; a--)
{
    letra += nombre[a];
}
console.log(letra);
/*function reves(str){
    let tmpStr="";
    for(let indice = str.length-1; indice < 0; index--){
        tmpStr += str.charAt(indice);      
    }//for indice
    return tmpStr;
}//reves
//en console se escribe reves("Laura Aline")*/