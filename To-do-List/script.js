const output = document.getElementById("output")
const tarefas = [] // Inicia a array

function adicionar(){
    const nameValue = document.getElementById("name-adicionar").value // Validar
    const texttarefasValue = document.getElementById("texttarefas").value // validar

    if(nameValue !== "" && texttarefasValue !== ""){
        tarefas.push({ nome: nameValue, tarefa: texttarefasValue }) // Adiciona na array o
        atualizarLista() // Atualiza a lista                        // objeto

        // Limpa os campos
        document.getElementById("name-adicionar").value = ""
        document.getElementById("texttarefas").value = ""
    }

    texttarefasValue.value = "" // Limpa o input text
    atualizarLista() // Atualiza a lista automaticamente
}

function atualizarLista(){
    output.innerHTML = "" // Limpa o input

    if(tarefas.length === 0){ // Caso lista tarefas esteja vazia
        output.innerHTML = "<p class='sem-tarefas' >Nenhuma tarefa adicionada.</p>"
        return              // Criação de um parágrafo para informar na tela
    }

    tarefas.forEach((item, index) =>{ // forEach para verificar cada item da lista
        const ul = document.createElement("ul") // Criando uma ul
        ul.classList.add("lista-tarefas") // Criando uma classe para a ul

        const li = document.createElement("li") // Criando uma li
        li.classList.add("item-tarefa") // Criando uma classe para a ul

        li.innerHTML = //Criando a lista com JS
        `
        <strong>Nome:</strong> ${item.nome} <strong>Tarefa:</strong> ${item.tarefa}

        <button class="btn-excluir" onclick="excluirIndividual(${index})">Excluir</button>

        `
        // Criação da lista passando nome, tarefa e um botão

        ul.appendChild(li) // Adicionando uma li JS
        output.appendChild(ul) // Adicionando um ul pelo JS
    })
}

function excluirIndividual(index){ // Função para excluir as tarefas, mas cada uma com seu
    tarefas.splice(index, 1)       // excluir respectivo
    atualizarLista() // Atualizando a lista no final
}

function excluir(){
    const nomeExcluir = document.getElementById("name-excluir").value.trim()
    // Criando e validando o name-excluir, junto com .trim para remover os espaços na string

    if(nomeExcluir !== ""){
        const novaLista = tarefas.filter(item => item.nome !== nomeExcluir) // Filtrando pelo
        tarefas.length = 0  // Contagem dos itens                           // e excluindo ele 
        tarefas.push(...novaLista) // Adicionando uma nova array com os itens anteriores
        atualizarLista() // Atualizando a lista no final
    }
}