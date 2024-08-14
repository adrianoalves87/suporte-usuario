document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('supportForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        // Cria um objeto com os dados do formulário
        const ticket = {
            name: document.getElementById('name').value,
            room: document.getElementById('room').value,
            floor: document.getElementById('floor').value,
            issue: document.getElementById('issue').value,
            priority: document.getElementById('priority').value // Prioridade selecionada
        };

        // Adiciona o chamado ao Local Storage
        let tickets = JSON.parse(localStorage.getItem('supportTickets')) || [];
        tickets.push(ticket);
        localStorage.setItem('supportTickets', JSON.stringify(tickets));

        // Exibe a mensagem de confirmação
        confirmationMessage.classList.remove('hidden');

        // Limpa o formulário
        form.reset();
    });
});
 