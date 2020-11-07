import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
    constructor(product) {
        let _elem = document.createElement('div');
        _elem.className = 'card';
        this.elem = _elem;
        this.id = product.id;

        _elem.insertAdjacentHTML('beforeend', `
            <div class="card__top">
                <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
                <span class="card__price">€${product.price.toFixed(2)}</span>
            </div>
            <div class="card__body">
                <div class="card__title">${product.name}</div>
                <button type="button" class="card__button">
                    <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
            </div>
        `);

        let buttonAdd = _elem.querySelector('.card__button');

        buttonAdd.addEventListener('click', () => this.onClick());
    }

    onClick() {
        const customEvent = new CustomEvent("product-add", {
            detail: this.id,
            bubbles: true
        });
        this.elem.dispatchEvent(customEvent);
    }

}
