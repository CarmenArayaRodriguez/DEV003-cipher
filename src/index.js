window.addEventListener("load",botones);

function botones(){
  document.getElementById("mensajeACifrar").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  });
    
  document.getElementById("cifrar").addEventListener("click",function(){  
    const texto = document.getElementById("mensajeACifrar").value;
    const desplazamiento = document.getElementById("desplazamientoCifrado").value;               
    document.getElementById("mensajeCifrado").value = cifrar(texto, desplazamiento);
  });

  document.getElementById("mensajeADescifrar").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  });
    
  document.getElementById("descifrar").addEventListener("click",function(){  
    const texto = document.getElementById("mensajeADescifrar").value;
    const desplazamiento = document.getElementById("desplazamientoDescifrado").value;               
    document.getElementById("mensajeDescifrado").value = descifrar(texto, desplazamiento);
  });
}

function cifrar(texto, desplazamiento) {
  let resultado="";
  const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  desplazamiento = desplazamiento % 26; 
    
  if (texto){
    for (let i=0; i<texto.length; ++i){
           
      if (abecedario.indexOf(texto[i])!==-1)
      { 
        const posicion=((abecedario.indexOf(texto[i])+desplazamiento) % 26);
        resultado+=abecedario[posicion];
      }
      else
        resultado+=texto[i];
    }
  }
  return resultado;
}

function descifrar(texto, desplazamiento) {
  let resultado="";
  const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  desplazamiento = desplazamiento % 26; 
    
  if (texto){
    for (let i=0; i<texto.length; ++i){
           
      if (abecedario.indexOf(texto[i])!==-1)
      { 
        const posicion=((abecedario.indexOf(texto[i])-desplazamiento) % 26);
        resultado+=abecedario[posicion];
      }
      else
        resultado+=texto[i];
    }
  }
  return resultado;
}