document.addEventListener('DOMContentLoaded', () => {

    const search = document.querySelector('.search');
    const searchLine = document.getElementById('searchGoods');
    const searchButton = document.getElementById('search-btn');
    const cartButton = document.getElementById('cart');
    const wishListButton = document.getElementById('wishlist');
    const cart = document.querySelector('.cart');
    const goodsWrapper = document.querySelector('.goods-wrapper');

    const createCardOfGoods = (goodsId, title, price, image) => {
        const newCard = document.createElement('div');
        newCard.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        newCard.innerHTML = `<div class="card">
        <div class="card-img-wrapper">
            <img class="card-img-top" src="${image}" alt="">
            <button class="card-add-wishlist"
            data-goods-id="${goodsId}"></button>
        </div>
        <div class="card-body justify-content-between">
            <a href="#" class="card-title">${title}</a>
            <div class="card-price">${price} ₽</div>
            <div>
                <button class="card-add-cart">Добавить в корзину</button>
            </div>
        </div>
    </div>`;
        return newCard;
    }
    goodsWrapper.appendChild(createCardOfGoods(1, 'Дартс', 2000, './img/temp/Archer.jpg'));
    goodsWrapper.appendChild(createCardOfGoods(2, 'Фламинго', 3000, './img/temp/Flamingo.jpg'));
    goodsWrapper.appendChild(createCardOfGoods(1, 'Носки', 1500, './img/temp/Socks.jpg'));

    const openCart = (event) => {
        const target = event.target;
        if (target.classList.contains('nav-elements') || target.classList.contains('category-item')) {
            event.preventDefault();
            cart.style.display = 'flex';
        } else cart.style.display = 'flex';
    };

    const closeCart = (event) => {
        const target = event.target;
        if (target === cart || target.classList.contains('cart-close') || event.keyCode === 27)
            cart.style.display = '';
    };

    cartButton.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);
    document.addEventListener('keyup', closeCart);

});