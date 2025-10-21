const output = document.getElementById("output")
const tarefas = []

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

function adicionar(){
    const nameValue = document.getElementById("name-adicionar").value
    const texttarefasValue = document.getElementById("texttarefas").value

    if(!nameValue || !texttarefasValue){
        mostrarAlert("Preencha todos os campos!")
        return
    }

    if(!isNaN(nameValue) || !isNaN(texttarefasValue)){
        mostrarAlert("Apenas nomes e tarefas!")
        return
    }

    const nomeJaExiste = tarefas.some(item => item.nome === nameValue)
        if(nomeJaExiste){
        mostrarAlert("Este nome já foi adicionado!")
            return
        }

    const tarefasDoUsuario = tarefas.filter(item => item.nome === nameValue)

    if(tarefasDoUsuario.length >= 3){
        mostrarAlert("Limite de 3 tarefas por nome atingido!")
        return
    }

    tarefas.push({ nome: nameValue, tarefa: texttarefasValue })

    atualizarLista()
    limparCampos()
}

function atualizarLista(){
    output.innerHTML = ""

    tarefas.forEach((item, index) =>{
        const ul = document.createElement("ul")
        ul.classList.add("lista-tarefas")

        const li = document.createElement("li")
        li.classList.add("item-tarefa")

        li.innerHTML =  
        `
            <strong><span>Nome:</span></strong> ${item.nome} 
            <strong><span>Tarefa:</span></strong> ${item.tarefa}

            <button class="btn excluir" onclick="excluirIndividual(${index})">Delete</button>

        `
        ul.appendChild(li)
        output.appendChild(ul)
    })
}

function excluirIndividual(index){
    tarefas.splice(index, 1)
    atualizarLista()
    limparCampos()
}

function editar(){
    if(tarefas.length === 0){
        mostrarAlert("Lista vazia!")
        return
    }

    const editNameValue = document.getElementById("name-adicionar").value.trim()
    const editTexttarefasValue = document.getElementById("texttarefas").value.trim()

    if(!editNameValue || !editTexttarefasValue){
        mostrarAlert("Preencha todos os campos!")
        return
    }

    if(!/^[a-zA-Z\s]+$/.test(editNameValue) || !/^[a-zA-Z\s]+$/.test(editTexttarefasValue)){
        mostrarAlert(`Digite um nome, sem números ou símbolos!`)
        return
    }

    const indice = tarefas.findIndex(item => item.nome === editNameValue)

    if(indice === -1){
        mostrarAlert(`${editNameValue} não encontrado na lista!`)
        return
    }

    tarefas[indice].tarefa = editTexttarefasValue

    limparCampos()
    atualizarLista()

    mostrarAlert(`Tarefa de ${editNameValue} atualizada com sucesso!`)
}

function limparCampos(){
    document.getElementById("name-adicionar").value = ""
    document.getElementById("texttarefas").value = ""
}