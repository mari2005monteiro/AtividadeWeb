// Validação simples sem nada além do que foi pedido
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // impede envio real

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Verificar campos vazios
            if (!nome || !email || !mensagem) {
                alert("Preencha todos os campos antes de enviar.");
                return;
            }

            // Verificar formato do e-mail
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                alert("Informe um e-mail válido no formato usuario@dominio.com.");
                return;
            }

            // Simulação de envio
            alert("Mensagem enviada com sucesso!");

            // Limpar campos
            form.reset();
        });
    }
});
