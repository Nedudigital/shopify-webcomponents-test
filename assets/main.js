class ProductCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const title = this.getAttribute('data-title') || 'No title available';
    const price = this.getAttribute('data-price') || 'No price available';
    const image = this.getAttribute('data-image') || 'https://via.placeholder.com/150';
    const url = this.getAttribute('data-url') || '#';

    shadow.innerHTML = `
      <style>
        .product-card {
          border: 1px solid #e1e1e1;
          padding: 16px;
          text-align: center;
          border-radius: 8px;
        }
        .product-card img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .product-card h2 {
          font-size: 1.2rem;
          margin: 10px 0;
        }
        .product-card p {
          font-size: 1rem;
          color: #333;
        }
        .product-card a {
          display: inline-block;
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #0073e6;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
        }
      </style>
      <div class="product-card">
        <img src="${image}" alt="${title}">
        <h2>${title}</h2>
        <p>${price}</p>
        <a href="${url}">View Product</a>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCard);
