// alert("ola mundo")
//
// var teste = prompt("digite qualquer coisa")
// alert(teste)


function testtexto(){
    document.getElementById("titulo").innerHTML += "Boa Tarde"
}

function testCor(){
    const titulo = document.getElementById("titulo")

    titulo.style.color = "red"
    titulo.style.fontSize = "45px"
}

function reset(){
    document.getElementById("titulo").innerHTML = "Wiki Monster High"
}

function testInput(){
    document.getElementById("input").value = "tarde"
}

// limpar form:
function LimpaInput(){
    document.getElementById('meu-input').value = ""
    var warning = "Deseja apagar formulario?";
    if (confirm(warning)) {
        document.getElementById('validationCustom01').value = ""
        document.getElementById('validationCustom02').value = ""
        document.getElementById('validationCustomUsername').value = ""
        document.getElementById('validationCustom03').value = ""
        document.getElementById('validationCustom05').value = ""
        document.getElementById('exampleInputEmail1').value = ""
        document.getElementById('exampleInputPassword1').value = ""
        document.getElementById('select01').value = ""
        document.getElementById('exampleFormControlTextarea1').value = ""
        document.getElementById('invalidCheck3').value = ""
        document.getElementById('validationCustom04').value = ""

    }
    else{

    }
}

// muda cor:
function trocaCor_username() {
    const element = document.getElementById("label_nome").style
    element.color = "red"
}

function trocaCor_sobrenome() {
    const element = document.getElementById("label_sobrenome").style
    element.color = "red"
}

function trocaCor_usuario() {
    const element = document.getElementById("label_usuario").style
    element.color = "red"
}

function trocaCor_cidade() {
    const element = document.getElementById("label_cidade").style
    element.color = "red"
}

function trocaCor_cep() {
    const element = document.getElementById("label_cep").style
    element.color = "red"
}

function trocaCor_email() {
    const element = document.getElementById("label_email").style
    element.color = "red"
}

function trocaCor_senha() {
    const element = document.getElementById("label_senha").style
    element.color = "red"
}

function trocaCor_descricao() {
    const element = document.getElementById("label_descricao").style
    element.color = "red"
}




 //aparece no input:
 function Nome(){
    document.getElementById("validationCustom01").value = "Primeiro nome"
}

 function Sobrenome(){
    document.getElementById("validationCustom02").value = "Sobrenome"
}

 function usuario(){
    document.getElementById("validationCustomUsername").value = "Nome de usuário"
}

 function Cidade(){
    document.getElementById("validationCustom03").value = "Cidade"
}

 function CEP(){
    document.getElementById("validationCustom05").value = "CEP"
}

 function email(){
    document.getElementById("exampleInputEmail1").value = "Endereço de email"
}

 function senha(){
    document.getElementById("exampleInputPassword1").value = "Senha"
}

 function Descricao(){
    document.getElementById("exampleFormControlTextarea1").value = "Descrição do seu monstrinho"
}
