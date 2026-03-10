function showPage(pageId) {
    document.getElementById('page-login').classList.add('hidden');
    document.getElementById('page-cadastro').classList.add('hidden');
    document.getElementById('page-curriculo').classList.add('hidden');

    document.getElementById(pageId).classList.remove('hidden');
}

document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('cad-nome').value;
    const senha = document.getElementById('cad-senha').value;
    const confirma = document.getElementById('cad-confirma').value;

    if (senha !== confirma) {
        alert("As senhas não coincidem!");
        return;
    }

    document.getElementById('res-nome').innerText = nome;
    document.getElementById('res-data').innerText = document.getElementById('cad-nasc').value;

    alert("Cadastro realizado com sucesso!");
    showPage('page-curriculo');
});

document.getElementById('form-login').addEventListener('submit', function(e) {
    e.preventDefault();
    showPage('page-curriculo');
});