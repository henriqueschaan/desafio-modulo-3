// Carrega e exibe a lista de clientes
document.addEventListener('DOMContentLoaded', function() {
    const clientList = document.getElementById('client-list');

    // Carrega os clientes do LocalStorage
    for (let i = 0; i < localStorage.length; i++) {
        let phone = localStorage.key(i);
        let client = JSON.parse(localStorage.getItem(phone));

        // Confere se o cliente tem dados necessários
        if (client && client.petname && client.date) {
            // Cria o card para cada cliente
            let card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${client.petname}</h3>
                <p>Data do atendimento: ${formatDate(client.date)}</p>
            `;
            card.addEventListener('click', function() {
                showClientModal(client);
            });

            clientList.appendChild(card);
        }
    }  
});

// Exibe o modal com os detalhes do cliente
function showClientModal(client) {
    const modal = document.getElementById('client-modal');
    const content = modal.querySelector('.modal-content');

    content.innerHTML = `
        <span class="close-button">×</span>
        <h3>Detalhes do Cliente</h3>
        <p>Nome completo: ${client.fullname}</p>
        <p>Telefone: ${client.phone}</p>
        <p>Endereço: ${client.address}</p>
        <p>Data do atendimento: ${formatDate(client.date)}</p>
        <p>Nome do pet: ${client.petname}</p>
        <p>Idade do pet: ${client.petage} anos</p>
        <p>Peso do pet: ${client.petweight} kg</p>
    `;

    modal.style.display = 'block';

    const closeButton = content.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    document.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Formatador de datas
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
