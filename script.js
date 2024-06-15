// Sample data for products and categories (replace with actual data from your backend)
const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 49.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 79.99,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://via.placeholder.com/300'
    }
  ];
  
  const categories = [
    {
      id: 1,
      name: 'Category 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Category 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Category 3',
      image: 'https://via.placeholder.com/150'
    }
  ];
  
  // Function to render featured products
  function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="details">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button class="btn btn-primary" onclick="showProductDetail(${product.id})">View Details</button>
          <button class="btn btn-secondary" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
      productGrid.appendChild(productItem);
    });
  }
  
  // Function to render product categories
  function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = '';
    
    categories.forEach(category => {
      const categoryItem = document.createElement('div');
      categoryItem.classList.add('category');
      categoryItem.innerHTML = `
        <img src="${category.image}" alt="${category.name}">
        <h3>${category.name}</h3>
      `;
      categoriesContainer.appendChild(categoryItem);
    });
  }
  
  // Function to show product details
  function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    const productDetailContainer = document.getElementById('product-detail');
    productDetailContainer.innerHTML = `
      <div class="container">
        <div class="product-detail">
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>Price: $${product.price.toFixed(2)}</p>
          <button class="btn btn-secondary" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
  }
  
  // Function to simulate adding product to cart (for demo purposes)
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Added "${product.name}" to cart!`);
    // You can implement actual cart functionality here (e.g., adding to an array, updating UI)
  }
  
  // Initial render
  document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCategories();
  });
  