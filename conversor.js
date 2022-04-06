let campoReal = document.getElementById("real")
let campoDolar = document.getElementById("dolar")
let campoEuro = document.getElementById("euro")

function converter() {
    // pegar o valor de real digitado
    let realDigitado = campoReal.value
    // converter de string para numero:
    let real = parseFloat(realDigitado)
    // Verificar se o valor informado é positivo
    if (real > 0) {
    // Realizar as conversões e Inserir os valores dentro dos inputs 
    // Fazer o arredondamento dos valores:
    campoDolar.value = (real / 4.50).toFixed(2)
    campoEuro.value = (real / 5.15).toFixed(2)
    } else {
        alert("Erro! O valor precisa ser positivo.")
    }

} // fim do converter

function converterEnter(tecla) {
    // foi pressionado enter?
    if (tecla === 13) { // 13 = enter
        converter()
    }
}