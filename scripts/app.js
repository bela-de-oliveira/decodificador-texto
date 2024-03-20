let textoEntrada = document.querySelector('#input-texto');
let resultadoCripto = document.querySelector('#output-texto');

let botaoCriptografar = document.querySelector('.botao__criptografar');
let botaoDescriptografar = document.querySelector('.botao__descriptografar');
let botaoCopiar = document.querySelector('.botao__copiar');

resultadoCripto.value = 'Nenhuma mensagem encontrada'

let textoCripto, textoDescripto = '';

function trocarLetra(textoDigitado) {
    return textoDigitado
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")       
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}
    
function retornarLetra(palavraCripto) {
    return palavraCripto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")       
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function criptografarTexto() {
    textoCripto = trocarLetra(textoEntrada.value.toLowerCase());
    
    limparCampo();
    resultadoCripto.value = textoCripto;
}

function descriptografarTexto() {
    textoDescripto = retornarLetra(textoEntrada.value);

    limparCampo();
    resultadoCripto.value = textoDescripto;
}

function limparCampo() {
    textoDigitado = "";
    textoEntrada.value = "";
}

function copiarResultado() {
    resultadoCripto.select();
    document.execCommand("copy");
    alert("Texto copiado para área de transferência.");
}