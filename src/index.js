import cipher from "./cipher.js";

let messageToUpperCase= document.getElementById("mensajeACifrar");
messageToUpperCase.addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  });

  let btnCipher= document.getElementById("cifrar");
  btnCipher.addEventListener("click",function(){  
    const texto = document.getElementById("mensajeACifrar").value;
     const desplazamiento = document.getElementById("desplazamientoCifrado").value;               
  document.getElementById("mensajeCifrado").value = cipher.code(texto, desplazamiento);
  });

  let messageToUpperCaseDecode= document.getElementById("mensajeADescifrar");
  messageToUpperCaseDecode.addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  });
    
  let btnDecipher= document.getElementById("descifrar");
  btnDecipher.addEventListener("click",function (){  
    const texto = document.getElementById("mensajeADescifrar").value;
    const desplazamiento = document.getElementById("desplazamientoDescifrado").value;               
    document.getElementById("mensajeDescifrado").value = cipher.decode(texto, desplazamiento);
  });
  
console.log(cipher);
 