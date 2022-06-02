let nome =window.document.getElementById('nome');

let email =window.document.getElementById('email');

let senha =window.document.getElementById('senha');

let confirmaSenha =window.document.getElementById('confirmaSenha');

let botao =window.document.getElementById('botao');

let erro =window.document.getElementById('erro');


document.getElementById('nome').onkeyup = function() {validaNome()};

function validaNome(){
    let txtNome = document.querySelector('#txtNome');
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido';
        txtNome.style.color = 'red';
    }else{
        txtNome.innerHTML = 'Nome válido';
        txtNome.style.color = 'green';
    }
}
document.getElementById('CNPJ').onkeyup = function() {validaCNPJ()};

function validaCNPJ(){
    let txtCNPJ = document.querySelector('#txtCNPJ');
    if(CNPJ.value.length < 14){
        txtCNPJ.innerHTML = 'CNPJ inválido';
        txtCNPJ.style.color = 'red';
    }else{
        txtCNPJ.innerHTML = 'CNPJ válido';
        txtCNPJ.style.color = 'green';
    }
}
document.getElementbyId('Telefone').onkeyup = function() {validaTelefone()};

function validaTelefone(){
    let txtTelefone = document.querySelector('#txtTelefone');
    if(Telefone.value.length < 11){
        txtTelefone.innerHTML = 'Telefone inválido';
        txtTelefone.style.color = 'red';
    }else{
        txtTelefone.innerHTML = 'Telefone válido';
        txtTelefone.style.color = 'green';
    }
}
document.getElementById('email').onkeyup = function() {validaEmail()};

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