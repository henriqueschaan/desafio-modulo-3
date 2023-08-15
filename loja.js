// Exemplo de produtos
const products = [
    { id: 1, name: 'Ração para cães', image: 'racao.png', price: 'R$ 49,90' },
    { id: 2, name: 'Brinquedo para gatos', image: 'brinquedo.png', price: 'R$ 19,90' }
];

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p class="product-name">${product.name}</p>
            <p class="product-price">${product.price}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao carrinho</button>
        `;

        productList.appendChild(card);
    });
});

function addToCart(productId) {
    // Recuperar o carrinho do LocalStorage
    let cart = JSON.parse(localStorage.getItem('carrinho') || '[]');

    // Verificar se o produto já está no carrinho
    let productInCart = cart.find(p => p.id === productId);

    if (!productInCart) {
        // Se o produto não estiver no carrinho, adicionamos
        let product = products.find(p => p.id === productId);
        cart.push(product);

        // Salvar o carrinho atualizado no LocalStorage
        localStorage.setItem('carrinho', JSON.stringify(cart));
    }

    // Mostrar notificação
    const notification = document.getElementById('notification');
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

