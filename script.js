document.getElementById('form-whatsapp').addEventListener('submit', function(e){
e.preventDefault(); // Evita recarregar a página

let name = document.getElementById('name').value.trim();
let message = document.getElementById('message').value.trim();
let button = this.querySelector('button');

// Validação simples
if (!name || !message) {
    alert('por favor, preecha seu nome e a mensagem.');
    return;
}

// Feedback no botão
button.textContent = "Enviando...";
button.disabled = true;

// Monta o link do WhatsApp
let url = `https://wa.me/5511962307325?text=Olá, meu nome é ${encodeURIComponent(name)}.
. ${encodeURIComponent(message)}`;

// Abre o Whatsapp em nova aba
window.open(url,'_blank');

// Substitui o formulário pelo aviso de confirmação
setTimeout(() => {
    document.getElementById('form-whatsapp').style.display = 'none';
   
    let thankYouMessage = document.createElement('div');
    thankYouMessage.classList.add('thank-you-message');
    thankYouMessage.innerHTML = '✅ Sua mensagem foi enviada! Obrigado pelo contato.';

    document.getElementById('contacts').appendChild(thankYouMessage);
}, 800);
})