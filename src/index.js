import cipher from "./cipher.js";

const messageToUpperCase= document.getElementById("mensajeACifrarDescifrar");
messageToUpperCase.addEventListener("keyup", function(){
  this.value = this.value.toUpperCase();
});

const btnCipher= document.getElementById("cifrar");
btnCipher.addEventListener("click",function(){  
  const texto = document.getElementById("mensajeACifrarDescifrar").value;
  const desplazamiento = document.getElementById("desplazamientoCifradoDescifrado").value;               
  document.getElementById("mensajeCifradoDescifrado").value = cipher.code(texto, desplazamiento);
});

const btnDecipher= document.getElementById("descifrar");
btnDecipher.addEventListener("click",function (){  
  const texto = document.getElementById("mensajeACifrarDescifrar").value;
  const desplazamiento = document.getElementById("desplazamientoCifradoDescifrado").value;               
  document.getElementById("mensajeCifradoDescifrado").value = cipher.decode(texto, desplazamiento);
});
  
console.log(cipher);
 