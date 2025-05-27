const output = document.getElementById("output")

function conversor(){
    const numValue = Number(document.getElementById("num").value)
    const selectValue1 = document.getElementById("conversor1").value
    const selectValue2 = document.getElementById("conversor2").value

    let resultado = 0

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
    //Euro

    if(selectValue1 == "euro" && selectValue2 == "euro"){
        output.innerHTML = ` !!! Ambas moedas iguais !!! `
    }

    if(selectValue1 == "euro" && selectValue2 == "dolar"){
        resultado = numValue * 1.14

        output.innerHTML = `${numValue} euros = ${resultado.toFixed(2)} dolares`
    }

    if(selectValue1 == "euro" && selectValue2 == "real"){
        resultado = numValue * 6.45

        output.innerHTML = `${numValue} euros = ${resultado.toFixed(2)} reais`
    }

    if(selectValue1 == "euro" && selectValue2 == "iene"){
        resultado = numValue * 1559.28

        output.innerHTML = `${numValue} euros = ${resultado.toFixed(2)} ienes`
    }

//////////////////////////////////////////////////////////////////////////////////////////////
    //dolar

    if(selectValue1 == "dolar" && selectValue2 == "dolar"){
        output.innerHTML = ` !!! Ambas moedas iguais !!! `
    }

    if(selectValue1 == "dolar" && selectValue2 == "euro"){
        resultado = numValue * 0.88

        output.innerHTML = `${numValue} dolares = ${resultado.toFixed(2)} euros`
    }

    if(selectValue1 == "dolar" && selectValue2 == "real"){
        resultado = numValue * 5.67

        output.innerHTML = `${numValue} dolares = ${resultado.toFixed(2)} reais`
    }

    if(selectValue1 == "dolar" && selectValue2 == "iene"){
        resultado = numValue * 1369.04

        output.innerHTML = `${numValue} dolares = ${resultado.toFixed(2)} ienes`
    }
    
//////////////////////////////////////////////////////////////////////////////////////////////
    //Real

    if(selectValue1 == "real" && selectValue2 == "real"){
        output.innerHTML = ` !!! Ambas moedas iguais !!! `
    }

    if(selectValue1 == "real" && selectValue2 == "euro"){
        resultado = numValue * 0.15

        output.innerHTML = `${numValue} reais = ${resultado.toFixed(2)} euros`
    }

    if(selectValue1 == "real" && selectValue2 == "dolar"){
        resultado = numValue * 0.18

        output.innerHTML = `${numValue} reais = ${resultado.toFixed(2)} dolares`
    }

    if(selectValue1 == "real" && selectValue2 == "iene"){
        resultado = numValue * 241.62

        output.innerHTML = `${numValue} reais = ${resultado.toFixed(2)} ienes`
    }

//////////////////////////////////////////////////////////////////////////////////////////////
    //Iene

    if(selectValue1 == "iene" && selectValue2 == "iene"){
        output.innerHTML = ` !!! Ambas moedas iguais !!! `
    }

    if(selectValue1 == "iene" && selectValue2 == "euro"){
        resultado = numValue * 0.00064

        output.innerHTML = `${numValue} ienes = ${resultado.toFixed(2)} euros`
    }

    if(selectValue1 == "iene" && selectValue2 == "dolar"){
        resultado = numValue * 0.00073

        output.innerHTML = `${numValue} ienes = ${resultado.toFixed(2)} dolares`
    }

    if(selectValue1 == "iene" && selectValue2 == "real"){
        resultado = numValue * 0.0041

        output.innerHTML = `${numValue} ienes = ${resultado.toFixed(2)} reais`
    }
}