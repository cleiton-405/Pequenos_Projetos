const limparCampos = () =>{
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
}

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

const calculo = () => {
    const operacao = document.getElementById("operacao").value
    const n1Value = Number(document.getElementById("n1").value)
    const n2Value = Number(document.getElementById("n2").value)
    const output = document.getElementById("output")

    if(!operacao){
        mostrarAlert("Por favor, selecione uma operacao!")
        return
    }

    if(!n1Value || !n2Value){
        mostrarAlert("Por favor, digite um número nos campos!")
        return
    }

    let resultado = 0

    switch(operacao){
        case "somar":
            resultado = n1Value + n2Value
            break
        case "diminuir":
            resultado = n1Value - n2Value
            break
        case "multiplicar":
            resultado = n1Value * n2Value
            break
        case "dividir":
            if(n2Value === 0){
                mostrarAlert("Não podemos dividir por 0!")
                return
            }else{
                resultado = n1Value / n2Value
            }
            break
        case "porcentagem":
            resultado = (n1Value / 100) * n2Value
            break
        default:
            mostrarAlert("Operação inválida!")
            return
    }

    output.innerHTML = `Result: ${resultado.toFixed(2)}`
    limparCampos()
}