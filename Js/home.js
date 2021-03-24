
// declarações -  alteração cor

function alteraEstilo(cor) {
    document.getElementById("trocaEstilo").style.backgroundColor = cor
    document.getElementById("trocaEstilo2").style.backgroundColor = cor
    document.getElementById("trocaEstilo3").style.backgroundColor = cor
}

function resetEstiloLetra(cor) {
    document.getElementById("trocaEstilo").style.backgroundColor = cor
    document.getElementById("trocaEstilo2").style.backgroundColor = cor
    document.getElementById("trocaEstilo3").style.backgroundColor = cor

}

// declarações -  alteração texto

window.onload = function () {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function (event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function (event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}