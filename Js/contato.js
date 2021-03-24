

function validacao() {
    var nome = document.getElementById("nome").value;

    if (nome.indexOf(" ") == -1) {
        alert("Preencha o Nome Completo")
    }
}

function VerificaCPF() {

    strCpf = document.getElementById('cpf').value;
    if (isNaN(parseInt(strCpf))) {
        alert("Apenas Números!")
    }
    var soma = 0;
    var resto;

    if (strCpf == "00000000000" || strCpf.length != 11) {
        alert("CPF Inválido");
        return false;
    }
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    if (resto != parseInt(strCpf.substring(9, 10))) {
        alert("CPF Válido");
        return false;
    }
    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto != parseInt(strCpf.substring(10, 11))) {
        alert("CPF Inválido");
        return false;
    }
    return true;
}
function validacaoEmail() {

    email = document.getElementById('email').value;

    usuario = email.substring(0, email.indexOf("@"));
    dominio = email.substring(email.indexOf("@") + 1, email.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("email").innerHTML = "E-mail válido";
    }
    else {
        document.getElementById("email").innerHTML = "<font color='red'>Email inválido </font>";
        alert("E-mail invalido");
    }
}

function verificaIdade() {
    var ano = document.getElementById("ano").value;
    if (parseInt(ano) < 1891 || parseInt(ano) > 2021) {
        alert("Informe um ano entre 1891 a 2021");
    }
}

/*Inicio da Caixa de Texto*/
function capturando() {
    var nome = window.document.getElementById("nome").value;
    var email = window.document.getElementById("email").value;
    var sexo = window.document.getElementById("sexo").value;
    var cpf = window.document.getElementById("cpf").value;
    var mes = window.document.getElementById("mes").value;

    var idade = window.document.getElementById("ano").value;
    var resIdade = 2021 - parseInt(idade)
    if (mes > 3) {
        resIdade--
    } else {
        resIdade = resIdade;
    }

    var frase = window.document.getElementById("frase");

    frase.innerHTML = `Olá <strong>${nome.toUpperCase()}</strong>, seu login é <strong>${email}</strong>, você tem <strong>${resIdade}</strong> 
    anos de idade, se define como uma pessoa  do sexo <strong>${sexo}</strong> e pode usar <strong>${cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")} </strong > como senha.`

}

function verificaString() {
    var dia = document.getElementById("dia").value;

    if (isNaN(parseInt(dia))) {
        alert("Apenas Números")
    }
    if (parseInt(dia) > 31 || parseInt(dia) < 1) {
        alert("Digite um valor entre 1 e 31")
    }
}