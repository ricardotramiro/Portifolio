document.getElementById('whatsapp-form').addEventListener('submit', function(e){
e.preventDefault(); // Evita recarregar a página

let name = document.getElementById('name').value.trim();
let message = document.getElementById('message').value.trim();

// Validação simples
if (!name || !message) {
    alert('Por favor, preencha todos os campos.');
    return;
}

// Monta o link do WhatsApp
let url = `https://wa.me/5511962307325?text=Olá, meu nome é ${encodeURIComponent(name)}.
%0A${encodeURIComponent(message)}`;

// Abre o Whatsapp em nova aba
window.open(url,'_blank');

// Esconde o formulário e mostra a mensagem de recebimento 
document.getElementById('whatsapp-form').style.display = 'none';
document.getElementById('form-title').style.display = 'none';

// Moatra a mensagem de confirmação
document.getElementById('success-message').style.display = 'block';

});