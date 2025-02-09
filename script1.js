// Expanded Product Data with Additional Categories and Listings
const categories = [
  {
    id: "fashion",
    name: "Fashion",
    image: "https://www.apparelsearch.com/influence/products/images/fashion_products.jpg",
    products: [
      { id: 101, name: "T-Shirt", price: 15.99, description: "Comfortable cotton T-shirt.", image: "https://tse1.mm.bing.net/th?id=OIP.SGmOxlaEbbTanE6WGula2wHaJ4&pid=Api&P=0&h=180" },
      { id: 102, name: "Jeans", price: 45.99, description: "Classic blue jeans.", image: "https://m.media-amazon.com/images/I/71O65fuXt2L._SX569_.jpg" },
      { id: 103, name: "Jacket", price: 85.99, description: "Stylish leather jacket.", image: "https://m.media-amazon.com/images/I/71l0LixoM3L._SX569_.jpg" },
      { id: 104, name: "Dress", price: 65.99, description: "Elegant evening dress.", image: "https://m.media-amazon.com/images/I/71qPtTE+g5L._SY741_.jpg" },
      { id: 105, name: "Sneakers", price: 79.99, description: "Trendy sneakers for all-day comfort.", image: "https://m.media-amazon.com/images/I/51yzgFBzGJL._SY695_.jpg" },
      { id: 106, name: "Scarf", price: 25.99, description: "Soft and cozy scarf for winter.", image: "https://tse2.mm.bing.net/th?id=OIP.VbkmqIwH0xylXydd1hDe-AHaJ5&pid=Api&P=0&h=180" },
      
    
    ],
  },
  {
    id: "electronics",
    name: "Electronics",
    image: "https://www.pngall.com/wp-content/uploads/9/Electronics-Gadget-PNG-Photos.png", 
    products: [
      { id: 201, name: "Smartphone", price: 699.99, description: "Latest smartphone model.", image: "https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/gallery/lavender/01-DM3-Lavender-PDP-1600x1200.jpg" },
      { id: 202, name: "Laptop", price: 1199.99, description: "High-performance laptop.", image: "https://microless.com/cdn/products/f026b0f0fb6302d095eda73e25215408-hi.jpg" },
      { id: 203, name: "Headphones", price: 199.99, description: "Noise-cancelling headphones.", image: "https://pngimg.com/uploads/headphones/headphones_PNG7640.png" },
      { id: 204, name: "Smartwatch", price: 299.99, description: "Feature-packed smartwatch.", image: "https://tse1.mm.bing.net/th?id=OIP.-w3CNPRpcPJ8QAeu2GHiRgHaHa&pid=Api&P=0&h=180" },
      { id: 205, name: "Camera", price: 999.99, description: "Professional-grade DSLR camera.", image: "https://tse2.mm.bing.net/th?id=OIP.7Yk89ElJp0gelTtWWoNkJAHaGu&pid=Api&P=0&h=180" },
      { id: 206, name: "Bluetooth Speaker", price: 49.99, description: "Portable Bluetooth speaker.", image: "https://tse4.mm.bing.net/th?id=OIP.uv50-XODKPdmwq0VNjsJEAHaHa&pid=Api&P=0&h=180" },
    ],
  },
  {
    id: "beauty",
    name: "Beauty Products",
    image: "https://tse2.mm.bing.net/th?id=OIP.XICvzgSjPesjQTKZqVKhCwHaFn&pid=Api&P=0&h=180",
    products: [
      { id: 301, name: "Lipstick", price: 25.99, description: "Long-lasting matte lipstick.", image: "https://tse4.mm.bing.net/th?id=OIP.dEOFuRpbDVTjcbsNzkwb_QHaHa&pid=Api&P=0&h=180" },
      { id: 302, name: "Foundation", price: 35.99, description: "Smooth liquid foundation.", image: "https://www.lauramercier.com.hk/cdn/shop/files/LM_SP23_RFF_0N1_SILK_Silo_3000x3000_R150.png?v=1691999587&width=1024" },
      { id: 303, name: "Perfume", price: 75.99, description: "Elegant floral fragrance.", image: "https://tse1.mm.bing.net/th?id=OIP.BmkbjpeeGCN7Y7jrufnURgHaFS&pid=Api&P=0&h=180" },
      { id: 304, name: "Mascara", price: 19.99, description: "Waterproof volumizing mascara.", image: "https://tse1.mm.bing.net/th?id=OIP.7JEjEI-j3D8Rp7aafjHvfwHaHa&pid=Api&P=0&h=180" },
      { id: 305, name: "Face Cream", price: 49.99, description: "Moisturizing and anti-aging cream.", image: "https://media.takealot.com/covers_images/c78782d54e4842f390b6f773e08f6498/s-zoom.file" },
      { id: 306, name: "Nail Polish", price: 9.99, description: "Long-lasting nail polish.", image: "https://tse4.mm.bing.net/th?id=OIP.zkpczK-Jp0_asp57cU7y5AHaHa&pid=Api&P=0&h=180" },
    ],
  },
  {
    id: "home",
    name: "Home & Kitchen",
    image: "https://www.pngall.com/wp-content/uploads/11/Home-Appliance-Transparent.png",
    products: [
      { id: 401, name: "Blender", price: 89.99, description: "High-power blender for smoothies.", image: "https://tse4.mm.bing.net/th?id=OIP.SgBDB_EgoNjogWvdszAFAQHaHa&pid=Api&P=0&h=180" },
      { id: 402, name: "Cookware Set", price: 129.99, description: "Non-stick cookware set.", image: "https://i.pinimg.com/originals/94/62/42/94624254bb9d0e862c30d8e240897047.png" },
      { id: 403, name: "Vacuum Cleaner", price: 199.99, description: "Compact and powerful vacuum.", image: "https://tse3.mm.bing.net/th?id=OIP.3X4pfRbyjK1KyYA4nERqhQHaHt&pid=Api&P=0&h=180" },
      { id: 404, name: "Air Purifier", price: 249.99, description: "Clean air at home.", image: "https://tse3.mm.bing.net/th?id=OIP.f_3iDDzB8tyZmW5ZaL6d6AHaOa&pid=Api&P=0&h=180" },
      { id: 405, name: "Electric Kettle", price: 49.99, description: "Fast-boil electric kettle.", image: "https://tse1.mm.bing.net/th?id=OIP.e7cEQY8Yby-pgAYkQXUppwHaHa&pid=Api&P=0&h=180" },
      { id: 406, name: "Coffee Maker", price: 129.99, description: "Brew the perfect cup of coffee.", image: "https://tse1.mm.bing.net/th?id=OIP.nFqHwYN_rpw_EJeVmC1CDwHaIk&pid=Api&P=0&h=180" },
    ],
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    image: "https://static.vecteezy.com/system/resources/previews/023/477/419/non_2x/ai-generative-collection-of-sports-equipment-commonly-sold-at-a-supermarket-circle-label-for-a-sports-goods-free-png.png",
    products: [
      { id: 501, name: "Yoga Mat", price: 29.99, description: "Eco-friendly yoga mat.", image: "https://www.johnsonfitness.com/Content/product_images/GF-YOGA_GFP.png" },
      { id: 502, name: "Tennis Racket", price: 99.99, description: "Lightweight tennis racket.", image: "https://tse2.mm.bing.net/th?id=OIP.0bPKgKjgQkKGqAj_ABg52AHaHa&pid=Api&P=0&h=180" },
      { id: 503, name: "Hiking Backpack", price: 89.99, description: "Spacious hiking backpack.", image: "https://purepng.com/public/uploads/medium/purepng.com-technical-backpack-for-hikingbagbackpackshikingtechnicaloutdoor-activity-1421526274003f8lzb.png" },
      { id: 504, name: "Dumbbells", price: 59.99, description: "Adjustable dumbbell set.", image: "https://tse4.mm.bing.net/th?id=OIP.KojUXq3_MFzQIZ-cw-AMlgHaE_&pid=Api&P=0&h=180" },
      { id: 505, name: "Running Shoes", price: 99.99, description: "Comfortable and durable running shoes.", image: "https://tse3.mm.bing.net/th?id=OIP.tJQjxbLRRaEt9B4OB546kAHaHw&pid=Api&P=0&h=180" },
      { id: 506, name: "Camping Tent", price: 199.99, description: "Lightweight camping tent for 4 people.", image: "https://www.pngplay.com/wp-content/uploads/2/Camping-Tent-Transparent-Background.png" },
    ],
  },
  {
    id: "books",
    name: "Books",
    image:"https://tse2.mm.bing.net/th?id=OIP.0Nl1H9gSIarMqEgBA02OiQHaEM&pid=Api&P=0&h=180",
    products: [
      { id: 601, name: "The Great Gatsby", price: 10.99, description: "Classic American novel by F. Scott Fitzgerald.", image: "https://blog.ecampus.com/wp-content/uploads/2020/09/Must-Read-Fiction-Books-Blog-BodyGraphics_The-Great-Gatsby-1024x576.png" },
      { id: 602, name: "1984", price: 8.99, description: "Dystopian novel by George Orwell.", image: "https://tipsforthought.com/wp-content/uploads/2023/05/Book-6.png" },
      { id: 603, name: "Becoming", price: 15.99, description: "Memoir by Michelle Obama.", image: "https://res.cloudinary.com/itimages/image/upload/f_auto,q_auto,w_800,c_limit/prd/splash_cover_art/lbiqie0lj3tffo5azykf" },
      { id: 604, name: "Atomic Habits", price: 12.99, description: "Guide to building good habits by James Clear.", image: "https://tse2.mm.bing.net/th?id=OIP._Ve1dB6PlAz1V3aCaWhd2gHaIB&pid=Api&P=0&h=180" },
    ],
  },
  {
    id: "toys",
    name: "Toys",
    image:"https://static.vecteezy.com/system/resources/thumbnails/026/794/774/small_2x/soft-toys-in-a-child-s-bedroom-generative-ai-free-png.png",
    products: [
      { id: 701, name: "Building Blocks", price: 19.99, description: "Creative building blocks for kids.", image: "https://static.vecteezy.com/system/resources/previews/024/195/240/non_2x/pile-of-building-block-toys-ai-generated-free-png.png" },
      { id: 702, name: "Remote Control Car", price: 49.99, description: "High-speed RC car.", image: "https://clipart-library.com/images_k/rc-car-silhouette/rc-car-silhouette-11.png" },
      { id: 703, name: "Puzzle Game", price: 15.99, description: "Challenging puzzle for all ages.", image: "https://tse3.mm.bing.net/th?id=OIP.iGat7iH95gTBaKY5fPDixgHaEf&pid=Api&P=0&h=180" },
      { id: 704, name: "Stuffed Toy", price: 9.99, description: "Soft and cuddly stuffed animal.", image: "https://clipart-library.com/images_k/transparent-panda/transparent-panda-2.png" },
    ],
  },
  {
    id: "groceries",
    name: "Groceries",
    image:"https://tse4.mm.bing.net/th?id=OIP.EngSBRxdHEkz_layq222YwHaHa&pid=Api&P=0&h=180",
    products: [
      { id: 801, name: "Organic Apples", price: 3.99, description: "Fresh organic apples (1kg).", image: "https://tse1.mm.bing.net/th?id=OIP.p2koMnyLHrcjSa40aFe14AHaEw&pid=Api&P=0&h=180" },
      { id: 802, name: "Milk", price: 2.99, description: "Full cream milk (1 liter).", image: "https://images.jdmagicbox.com/quickquotes/images_main/arokya-milk-and-milk-products-14-01-2021-002-220018753-j7w6g.png" },
      { id: 803, name: "Bread", price: 1.99, description: "Whole wheat bread loaf.", image: "https://www.bigbasket.com/media/uploads/p/l/40220331_1-britannia-whole-wheat-bread-100-crustless-rich-in-dietary-fibre.jpg" },
      { id: 804, name: "Eggs", price: 3.49, description: "Free-range eggs (12 pack).", image: "https://www.pngplay.com/wp-content/uploads/2/Eggs-PNG-Images-HD.png" },
    ],
  },
];
// The rest of the script remains unchanged...


// Cart
let cart = [];

// Utility Functions
function formatPrice(price) {
  return price.toFixed(2);
}

// Render Product Categories
function renderCategories() {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";

  categories.forEach(category => {
    const categoryCard = document.createElement("div");
    categoryCard.classList.add("product-card");

    categoryCard.innerHTML = `
      <h3>${category.name}</h3>
      <button onclick="viewCategory('${category.id}')">View ${category.name}</button>
    `;

    productList.appendChild(categoryCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const authModal = document.getElementById("auth-modal");
  const closeModalBtn = document.querySelector(".close-btn");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const showSignup = document.getElementById("show-signup");
  const showLogin = document.getElementById("show-login");
  const loginBtn = document.getElementById("login-btn");
  const loginSubmit = document.getElementById("login-submit");
  const signupSubmit = document.getElementById("signup-submit");

  // Toggle between login and signup forms
  showSignup.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
  });

  showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
  });

  // Open and close modal
  loginBtn.addEventListener("click", () => {
    authModal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    authModal.style.display = "none";
  });

  // Handle signup
  signupSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (name && email && password) {
      const user = { name, email, password };

      // Save user data in localStorage
      localStorage.setItem(email, JSON.stringify(user));

      // Show success message
      alert("Signup successful! You can now log in.");

      // Reset form and switch to login
      signupForm.reset();
      signupForm.classList.remove("active");
      loginForm.classList.add("active");
    } else {
      alert("Please fill in all fields.");
    }
    document.getElementById("signup-submit").addEventListener("click", async () => {
      const name = document.getElementById("signup-name").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
    
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
    
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.error);
      }
    });
    
  });

  // Handle login
  loginSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email && password) {
      const storedUser = localStorage.getItem(email);

      if (storedUser) {
        const user = JSON.parse(storedUser);

        if (user.password === password) {
          alert(`Login successful! Welcome back, ${user.name}.`);
          loginForm.reset();
          authModal.style.display = "none";
        } else {
          alert("Incorrect password. Please try again.");
        }
      } else {
        alert("No account found with this email. Please sign up.");
      }
    } else {
      alert("Please fill in all fields.");
    }
    document.getElementById("login-submit").addEventListener("click", async () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
    
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); // Store token
        alert("Login successful!");
      } else {
        alert(data.error);
      }
    });
    
  });

  // Close modal if clicked outside of it
  window.addEventListener("click", (e) => {
    if (e.target === authModal) {
      authModal.style.display = "none";
    }
  });
});

// Render Product Categories
function renderCategories() {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";

  categories.forEach(category => {
    const categoryCard = document.createElement("div");
    categoryCard.classList.add("product-card");
    categoryCard.style.backgroundImage = `url(${category.image})`;
    categoryCard.style.backgroundSize = "cover";
    categoryCard.style.backgroundPosition = "center";
    categoryCard.style.color = "white";
    categoryCard.style.padding = "20px";
    categoryCard.style.borderRadius = "10px";
    categoryCard.style.margin = "10px";
    categoryCard.style.textAlign = "center";

    categoryCard.innerHTML = `
      <h3>${category.name}</h3>
      <button onclick="viewCategory('${category.id}')">View ${category.name}</button>
    `;

    productList.appendChild(categoryCard);
  });
}

// Render Product Categories
function renderCategories() {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";

  categories.forEach(category => {
    const categoryCard = document.createElement("div");
    categoryCard.classList.add("product-card");

    categoryCard.innerHTML = `
      <h3>${category.name}</h3>
      <img src="${category.image}" alt="${category.name}">
      <button onclick="viewCategory('${category.id}')">View ${category.name}</button>
    `;

    productList.appendChild(categoryCard);
  });
}

// View Category Products
function viewCategory(categoryId) {
  const category = categories.find(cat => cat.id === categoryId);
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";

  category.products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${formatPrice(product.price)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productCard);
  });
}

// Add Product to Cart
function addToCart(productId) {
  const product = categories.flatMap(category => category.products).find(prod => prod.id === productId);
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartSummary();
}

// Update Cart Summary
function updateCartSummary() {
  const cartList = document.querySelector(".cart-list");
  const cartTotal = document.getElementById("cart-total");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Price: $${formatPrice(item.price)} x ${item.quantity}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;

    cartList.appendChild(cartItem);
  });

  cartTotal.textContent = formatPrice(total);
}

// Remove Product from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartSummary();
}

// Navigation
document.getElementById("home-link").addEventListener("click", () => showPage("home"));
document.getElementById("products-link").addEventListener("click", () => {
  showPage("products");
  renderCategories();
});
document.getElementById("cart-link").addEventListener("click", () => {
  showPage("cart");
  updateCartSummary();
});

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}
// Checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Checkout successful!");
  cart = [];
  renderCart();
});



fetchProducts();

// Your other code below


// Initialize
renderCategories();
showPage("home");
