document.addEventListener('DOMContentLoaded', () => {

    const search = document.querySelector('.search');
    const searchLine = document.getElementById('searchGoods');
    const searchButton = document.getElementById('search-btn');
    const cartButton = document.getElementById('cart');
    const wishListButton = document.getElementById('wishlist');
    const cart = document.querySelector('.cart');
    const goodsWrapper = document.querySelector('.goods-wrapper');
    const category = document.querySelector('.category');

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
    };

    const openCart = (event) => {
        event.preventDefault();
        cart.style.display = 'flex';
    };

    const closeCart = (event) => {
        const target = event.target;

        if (target === cart || target.classList.contains('cart-close') || event.keyCode === 27)
            cart.style.display = '';
    };

    const getGoods = (handler, filter) => {
        fetch('db/db.json')
            .then((response) => response.json())
            .then(filter)
            .then(handler);
    };

    const randomSort = (item) => {

        return item.sort(() => Math.random() - 0.5);
    };

    const choiceCategory = (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('category-item')) {
            const { category } = target.dataset;
            getGoods(renderCard, (goods) =>
                goods.filter((elem) =>
                    elem.category.includes(category)));
        }
    }

    const renderCard = (items) => {
        goodsWrapper.textContent = '';
        items.forEach(({ id, title, price, imgMin }) => {
            goodsWrapper.appendChild(createCardOfGoods(id, title, price, imgMin));
        })
    };

    cartButton.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart);
    document.addEventListener('keyup', closeCart);
    category.addEventListener('click', choiceCategory)


    getGoods(renderCard, randomSort);
});