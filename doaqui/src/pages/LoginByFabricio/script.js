let nome =window.document.getElementById('nome');

let email =window.document.getElementById('email');

let senha =window.document.getElementById('senha');

let confirmaSenha =window.document.getElementById('confirmaSenha');

let botao =window.document.getElementById('botao');

let erro =window.document.getElementById('erro');

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido';
        txtEmail.style.color = 'red';
    }else{
        txtEmail.innerHTML = 'Email válido';
        txtEmail.style.color = 'green';
    }
 }
 function validaSenha(){
    let txtSenha = document.querySelector('#txtSenha');
    if(senha.value.length < 6){
        txtSenha.innerHTML = 'Senha inválida';
        txtSenha.style.color = 'red';
    }else{
        txtSenha.innerHTML = 'Senha válida';
        txtSenha.style.color = 'green';
    }
}
