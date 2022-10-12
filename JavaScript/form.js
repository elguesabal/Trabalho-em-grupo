/*Itens da minha function*/
nome = document.getElementById("nome")
sobreNome = document.getElementById("sobrenome")
email = document.getElementById("email")
mensagem = document.getElementById("mensagem")



/*Caso o botão seja pressionado quando algum input esteja vazio, vai aparecer um alerta avisando*/

// função validar que está no onclick
function validar() {

    if (nome.value == '') {
        alert("Nome não informado")
    }

    if (sobreNome.value == '') {                    
        alert("Sobrenome não informado")
    }

    if (email.value == '') {
        alert("E-mail não informado")
    }

    if (mensagem.value != '') {
        alert("Mensagem enviada com sucesso!")
    }

}

