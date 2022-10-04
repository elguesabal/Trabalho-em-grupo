
/*Função validar*/
function validar() {
    var nome = document.getElementById("nome")
    if (nome.value == '') {
        alert("Nome não informado")
    }
   
    var sobreNome = document.getElementById("sobrenome")
    if (sobreNome.value == '') {
        alert("Sobrenome não informado")
    }

    var email = document.getElementById("email")
    if (email.value == '') {
        alert("E-mail não informado")
    }

}

