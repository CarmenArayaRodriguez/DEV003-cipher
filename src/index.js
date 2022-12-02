window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("mensajeACifrar").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    
    document.getElementById("cifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensajeACifrar").value;
        let desplazamiento = document.getElementById("desplazamientoCifrado").value;               
        document.getElementById("mensajeCifrado").value = cifrar(texto, desplazamiento);
    },true);

    document.getElementById("mensajeADescifrar").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    
    document.getElementById("descifrar").addEventListener("click",function(){  
        let texto = document.getElementById("mensajeADescifrar").value;
        let desplazamiento = document.getElementById("desplazamientoDescifrado").value;               
        document.getElementById("mensajeDescifrado").value = descifrar(texto, desplazamiento);
    },true);
}

function cifrar(texto, desplazamiento) {
    let resultado="";
    let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = desplazamiento % 26; 
    
    if (texto){
        for (let i=0; i<texto.length; ++i){
           
            if (abecedario.indexOf(texto[i])!=-1)
            { 
                let posicion=((abecedario.indexOf(texto[i])+desplazamiento) % 26);
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
    let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = desplazamiento % 26; 
    
    if (texto){
        for (let i=0; i<texto.length; ++i){
           
            if (abecedario.indexOf(texto[i])!=-1)
            { 
                let posicion=((abecedario.indexOf(texto[i])-desplazamiento) % 26);
                resultado+=abecedario[posicion];
            }
            else
                resultado+=texto[i];
        }
    }
    return resultado;
}