var document= document.getElementById("mensajeADescifrar").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  });
    
  var document= document.getElementById("descifrar").addEventListener("click",function(){  
    const texto = document.getElementById("mensajeADescifrar").value;
    const desplazamiento = document.getElementById("desplazamientoDescifrado").value;               
    document.getElementById("mensajeDescifrado").value = descifrar(texto, desplazamiento);
  });
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
