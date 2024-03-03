const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    
}


function encriptar(stringEncriptada){
        let matrizCodigo = [["e" , "enter"] , ["i", "imes"], ["a" , "ai"], ["o" , "obter"] , ["u" , "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    
}


function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e" , "enter"] , ["i", "imes"], ["a" , "ai"], ["o" , "obter"] , ["u" , "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptar.includes(matrizCodigo[i][1])) {
        stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptar;
}

function copy() {
    // Selecione a área de texto contendo o texto a ser copiado
    const textArea = document.querySelector(".mensagem"); // Presumindo que a área de texto possui a classe "mensagem"
    textArea.select();
    document.execCommand("copy");
  }