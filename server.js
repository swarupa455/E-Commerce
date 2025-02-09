const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Database connected"))
.catch(err => console.error("Database connection error:", err));


const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);

// User Registration

  app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'User already exists' });
  }
});



app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
      res.json({ token, userId: user._id });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ error: 'Something went wrong' });
  }
  
});


// Fetch Products
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add Product (for admin, can be extended with auth check)
app.post('/products', async (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({ name, price, description });
  await product.save();
  res.status(201).json({ message: 'Product added successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// In your backend server.js/app.js
app.use(cors({
    origin: 'http://localhost:3000'
    

}));



