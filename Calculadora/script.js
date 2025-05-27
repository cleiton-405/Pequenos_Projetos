const output = document.getElementById("output")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")

function somar(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    const resultado = n1Value + n2Value

    output.innerHTML = `${resultado}`
}

function diminuir(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    const resultado = n1Value - n2Value

    output.innerHTML = `${resultado}`
}

function multiplicar(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    const resultado = n1Value * n2Value

    output.innerHTML = `${resultado}`
}

function dividir(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    const resultado = n1Value / n2Value

    output.innerHTML = `${resultado}`
}

function porcentagem(){
    const n1Value = Number(n1.value)
    const n2Value = Number(n2.value)

    const resultado = (n1Value / 100) * n2Value

    output.innerHTML = `${resultado}`
}