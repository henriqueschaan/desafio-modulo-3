document.getElementById('client-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const client = {
        fullname: e.target.fullname.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
        date: e.target.date.value,
        petname: e.target.petname.value,
        petage: e.target.petage.value,
        petweight: e.target.petweight.value
    };

    localStorage.setItem(client.phone, JSON.stringify(client));

    document.getElementById('message').innerText = "Cliente adicionado com sucesso!";

    setTimeout(() => {
        document.getElementById('message').innerText = "";
    }, 3000);
    
    e.target.reset();
}); 

// Formatação do campo de telefone
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value;

    // Remove todos os caracteres não numéricos
    value = value.replace(/\D/g, "");

    // Adiciona o primeiro parêntese
    if (value.length > 0) {
        value = "(" + value;
    }

    // Fecha o parêntese e inicia os próximos números
    if (value.length > 3) {
        value = value.substring(0, 3) + ") " + value.substring(3);
    }

    // Adiciona o hífen
    if (value.length > 9) {
        value = value.substring(0, 10) + "-" + value.substring(10, 14);
    }

    // Limita o tamanho máximo (com os caracteres de formatação)
    if (value.length > 15) {
        value = value.substring(0, 15);
    }

    e.target.value = value;
});