//Variáveis globais recebendo.
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')

let whatsappFuncao = document.querySelector('#whatsapp')
//Booleans para testes do formulário. 
let nomeOK = false
let emailOK = false
let assuntoOK = false

//Configurando os campos de nome, email e assunto (respectivamente) para ficarem alinhados e em 100% da linha. 
nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

//Função que verifica se o campo nome possui menos que 3 caracteres e aplica condições caso seja verdadeiro ou falso através do if.
function validandoNome(){
    let condicaoNome = document.querySelector('#statusNome')
    
    if(nome.value.length < 3){
        condicaoNome.innerHTML = 'Nome inválido!'
        condicaoNome.style.color = 'red'
    }else{
        condicaoNome.innerHTML = 'Nome válido!'
        condicaoNome.style.color = 'green'
        nomeOK = true
    }
}

//Função que verifica se o campo email possui os caracteres '@' e '.' e aplica condições caso seja verdadeiro ou falso através do if.
function validandoEmail(){
    let condicaoEmail = document.querySelector('#statusEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        condicaoEmail.innerHTML = 'E-mail inválido!'
        condicaoEmail.style.color = 'red'
    }else{
        condicaoEmail.innerHTML = 'E-mail válido!'
        condicaoEmail.style.color = 'green'
        emailOK = true
    }
}

/*Função que verifica se o campo assunto é maior ou igual a 100 caracteres e aplica condições caso seja verdadeiro ou falso através do if.
Essa função também está fazendo com que a div statusAssunto suma caso a condição seja falsa através dos comandos condicaoAssunto.style.display 'block' e 'none'. */
function validandoAssunto(){
    let condicaoAssunto = document.querySelector('#statusAssunto')

    if(assunto.value.length >= 100){
        condicaoAssunto.innerHTML = 'Texto muito grande. Digite no máximo 100 caracteres!'
        condicaoAssunto.style.color = 'red'
        condicaoAssunto.style.display = 'block'
    }else{
        condicaoAssunto.style.display = 'none'
        assuntoOK = true
    }
}

//Função para testar se o formulário está dentro das condições estabelecidas para realizar o envio. 
function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Formulário incompleto. Favor completá-lo de acordo com as condições antes de enviar.')
    }
}

function aumentarMapa(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function diminuirMapa(){
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}

function mensagem(){
    
}