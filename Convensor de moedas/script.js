/*
    Taxas (26/05/2025 - 18:07): 

    1 real = 0,15 euro
    1 real = 0,18 dolar
    1 real = 241,62 iene

    1 dolar = 0,88 euro
    1 dolar = 5,67 real
    1 dolar = 1369,04 iene

    1 euro =  6,45 real
    1 euro =  1,14 dolar
    1 euro =  1559,28 iene

    1 iene = 0,00064 euro
    1 iene = 0,00073 dolar
    1 iene = 0,0041 real

*/

//////////////////////////////////////////////////////////////////////////////////////////////

const output = document.getElementById("output")

const mostrarAlert = (mensagem) =>{
    const alert = document.getElementById("alert")
    const alertText = document.getElementById("alert-text")

    alertText.innerText = mensagem
    alert.style.display = "block"

    setTimeout(() =>{
        closedAlert()
    }, 2500)
}

const closedAlert = () =>{
    document.getElementById("alert").style.display = "none"
}

function conversor(){
    const numValue = Number(document.getElementById("num").value)
    const selectValue1 = document.getElementById("conversor1").value
    const selectValue2 = document.getElementById("conversor2").value

    if(!numValue || isNaN(numValue) || numValue <= 0){
        mostrarAlert("Digite um número maior que zero")
        document.getElementById("num").value = ""
        return
    }

    if(!selectValue1 || !selectValue2){
        mostrarAlert("Selecione uma moeda")
        return
    }

    if(selectValue1 === selectValue2){
        mostrarAlert("Ambas moedas são iguais")
        return
    }

    const taxas = {
        euro: {dolar: 1.14, real: 6.45, iene: 1559.28},
        dolar: {euro: 0.88, real: 5.67, iene: 1369.04},
        real: {euro: 0.15, dolar: 0.18, iene: 241.62},
        iene: {euro: 0.00064, dolar: 0.00073, real: 0.0041}
    }

    if(taxas[selectValue1] && taxas[selectValue1][selectValue2]) {
        const taxa = taxas[selectValue1][selectValue2]
        const resultado = numValue * taxa

        output.innerHTML = `${numValue} ${selectValue1}s = ${resultado.toFixed(2)} ${selectValue2}s`
    }else{
        output.innerHTML = "Conversão não disponível."
    }
}

function limparCampos(){
    document.getElementById("num").value = ""
    document.getElementById("conversor1").selectedIndex = 0
    document.getElementById("conversor2").selectedIndex = 0
    output.innerHTML = ""
}