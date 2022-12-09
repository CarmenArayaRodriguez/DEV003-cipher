const cipher = {
  encode: (texto, desplazamiento) => {
    let resultado = "";
    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto) {
      for (let i = 0; i < texto.length; ++i) {

        if (abecedario.indexOf(texto[i]) !== -1) {
          const posicion = ((abecedario.indexOf(texto[i]) + desplazamiento) % 26);
          resultado += abecedario[posicion];
        }
        else
          resultado += texto[i];
      }
    }
    return resultado;
  },


  decode: (texto, desplazamiento) => {
    let resultado = "";
    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 - 26) % 26;

    if (texto) {
      for (let i = 0; i < texto.length; ++i) {

        if (abecedario.indexOf(texto[i]) !== -1) {
          const posicion = ((abecedario.indexOf(texto[i]) - desplazamiento) % 26);
          resultado += abecedario[posicion];
        }
        else {
          resultado += texto[i];
        }

      }
      return resultado;
    }

  }
}

export default cipher;