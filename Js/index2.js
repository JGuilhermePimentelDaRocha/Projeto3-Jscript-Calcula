
// declarações

let primeiro = document.getElementById("convesor_Unitario");
let segundo = document.getElementById("convesor_Unitario2");
let numero1 = document.getElementById("conversor_original");
let numero2 = document.getElementById("conversor_original_2");

// taxa de cambio dia 16/03/2021
let moeda = {
    "Dolar Americano": 5.61,
    "Dolar Canadense": 4.51,
    "Real Brasileiro": 1.00,
    "Libra": 7.80,
    "Euro": 6.68,
    "Peso Argentino": 0.062
}
let cambio = document.getElementById("cambio2");
let cambio2 = 1;

// conversão da moeda - primeira ação 
const modificacao = (element) => {
    cambio2 = moeda[primeiro.value] / moeda[segundo.value];
    calculadora(element);

    // declaração somente numeros 
    cambio.textContent = "1 " + abreviacao(primeiro.value) + " = " + Number(cambio2.toFixed(2)) + " " + abreviacao(segundo.value);
}

// aparecer a abreviação no  valor unitário
const abreviacao = (element2) => {
    switch (element2) {
        case "Dolar Canadense":
            return "CAD";
        case "Dolar Americano":
            return "USD";
        case "Euro":
            return "EUR";
        case "Real Brasileiro":
            return "BRL";
        case "Libra":
            return "GBP";
        case "Peso Argentino":
            return "ARS";
    }

}

// conversão da moeda - segunda ação
const calculadora = (element) => {
    if (element.target.id == "conversor_original_2") {
        numero1.value = Number((cambio2 * numero2.value).toFixed(2));
    } else {
        if (numero1.value == "") numero1.value = 1;
        numero2.value = Number((cambio2 * numero1.value).toFixed(2));
    }

    /// declaração numeros negativos e letras.
    if (numero1.value < 1)
        alert("Numeros Negativos ou Letras não são aceitos");


    if (isNaN(cambio2)) {
        alert("Apenas numeros são aceitos");
    }

}


primeiro.addEventListener("change", modificacao);
segundo.addEventListener("change", modificacao);
numero1.addEventListener("input", calculadora);
numero2.addEventListener("input", calculadora);