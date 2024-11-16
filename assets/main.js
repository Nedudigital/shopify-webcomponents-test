class ProductCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const title = this.getAttribute('data-title') || 'No title available';
    const price = this.getAttribute('data-price') || 'No price available';
    const image = this.getAttribute('data-image') || 'https://via.placeholder.com/150';
    const url = this.getAttribute('data-url') || '#';

     // Create the product card HTML template
    shadow.innerHTML = `
      <style>
        .product-card {
          border: 1px solid #e1e1e1;
          padding: 16px;
          text-align: center;
          border-radius: 8px;
          max-width: 300px;
          margin: auto;
        }
        .product-card img {
          width: 100%;
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
        .quantity-selector {
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .quantity-selector input {
          width: 50px;
          padding: 5px;
          text-align: center;
          margin-right: 10px;
        }
        .add-to-cart {
          padding: 10px 20px;
          background-color: #28a745;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .add-to-cart:hover {
          background-color: #218838;
        }
      </style>
      <div class="product-card">
        <img src="${image}" alt="${title}">
        <h2>${title}</h2>
        <p>${price}</p>
        <div class="quantity-selector">
          <input type="number" id="quantity" min="1" value="1">
          <button class="add-to-cart">Add to Cart</button>
        </div>
        <a href="${url}">View Product</a>
      </div>
    `;

    // Add event listener for 'Add to Cart' button
    const addToCartButton = shadow.querySelector('.add-to-cart');
    const quantityInput = shadow.querySelector('#quantity');

    addToCartButton.addEventListener('click', () => {
      const quantity = parseInt(quantityInput.value);
      if (quantity > 0) {
        this.addToCart(productId, quantity);
      } else {
        alert('Please enter a valid quantity.');
      }
    });
  }

  // Function to add product to cart
  addToCart(productId, quantity) {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: productId,
        quantity: quantity,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add product to cart.');
        }
        return response.json();
      })
      .then((data) => {
        alert(`Added ${quantity} item(s) to the cart.`);
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred. Please try again.');
      });
  }
}

// Define the custom element
customElements.define('product-card', ProductCard);