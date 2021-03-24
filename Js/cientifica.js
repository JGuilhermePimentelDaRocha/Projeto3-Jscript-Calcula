//pegando os valores digitados para o calculo
function pegandoValor(input, character) {
  if (input.value == null || input.value == "0") input.value = character;
  else input.value += character;
}

//calculando raiz quadrada
function raiz(form) {
  form.display.value = Math.sqrt(form.display.value);
}

//deletando um valor por vez (-1) (da esquerda para direita)
function deletarUmporVez(input) {
  input.value = input.value.substring(0, input.value.length - 1);
}

//convertendo para percentual
function percentual(form) {
  form.display.value = form.display.value/100;
}

//incluindo ou retirando sinal de menos na frente do digito
function trocaSinal(input) {
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length);
  else input.value = "-" + input.value;
}

//A função eval() computa um código JavaScript representado como uma string.
//apresentando o resultado do calculo
function resultado(form) {
  form.display.value = eval(form.display.value);
}

//calculo elevado a 2
function potencia2(form) {
  form.display.value = Math.pow(form.display.value, 2);
}

//calculo elevado a 3
function cubo(form) {
    form.display.value = Math.pow(form.display.value, 3);
}

//verificando se é uma dos valores validos, do contrario erro
//lembrando que estamos recebdo strings
function verificaDigito(palavra) {
  for (var i = 0; i < palavra.length; i++) {
    //verificando cada caracter digitado
    var opcao = palavra.charAt(i);
    //checando se estão fora dos padrões
    if (opcao < "0" || opcao > "9") {
      if (
        opcao != "/" &&
        opcao != "*" &&
        opcao != "+" &&
        opcao != "-" &&
        opcao != "." &&
        opcao != "%"
      ) {
        alert("Calculo invalido!");
        return false;
      }
    }
  }
  return true;
}
