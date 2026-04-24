const mongoose = require('mongoose');
const connectDB = require('./db');

// Connect to Database
connectDB();

// STEP 5: Defining a Subdocument Schema
const dimensionSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  depth: Number,
  unit: {
    type: String,
    default: 'cm'
  }
});

// STEP 1-4: Defining the Main Product Schema with Validation & Defaults
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  description: String,
  category: {
    type: String,
    default: 'General'
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  dimensions: dimensionSchema // Embedded Subdocument
}, { 
  timestamps: true // Automatically creates createdAt and updatedAt fields
});

// Create the Model
const Product = mongoose.model('Product', productSchema);

// Function to Create and Save a Product (Testing)
const createProduct = async () => {
  try {
    const newProduct = new Product({
      name: 'High-Performance Laptop',
      price: 1200,
      description: 'A high-performance laptop for developers',
      dimensions: {
        width: 30,
        height: 20,
        depth: 2
      }
    });

    const savedProduct = await newProduct.save();
    console.log('Product saved successfully:', savedProduct);
  } catch (error) {
    console.error('Error saving product:', error.message);
    if (error.errors) {
      console.error('Validation Details:', Object.keys(error.errors));
    }
  }
};

// Execute Test
createProduct();