document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    const login = document.getElementById('login').value;
    if(login === "") {
        alert("Por favor, preencha o campo de Login.");
    } else {
        alert("Cadastro de " + login + " enviado com sucesso!");
    }
});