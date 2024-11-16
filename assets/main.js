// main.js
class ProductCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Get data attributes
    const title = this.getAttribute('data-title');
    const price = this.getAttribute('data-price');
    const image = this.getAttribute('data-image');
    const url = this.getAttribute('data-url');

    // Create the component template
    shadow.innerHTML = `
      <style>
        .product-card {
          border: 1px solid #e1e1e1;
          padding: 16px;
          border-radius: 8px;
          text-align: center;
        }
        .product-card img {
          width: 100%;
          max-width: 200px;
          border-radius: 8px;
        }
        .product-card h2 {
          font-size: 1.2rem;
          margin: 8px 0;
        }
        .product-card p {
          font-size: 1rem;
          color: #555;
        }
        .product-card a {
          display: inline-block;
          padding: 8px 16px;
          background-color: #0073e6;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          margin-top: 10px;
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

// Define the custom element
customElements.define('product-card', ProductCard);
