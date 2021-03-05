'use strict';

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  const newItem = new CartItem(product,quantity);
  this.items.push(newItem);
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(this.items));
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!

  this.items.splice(item, 1);

};

const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('Images/bag.jpg', 'Bag');
  new Product('Images/banana.jpg', 'Banana');
  new Product('Images/bathroom.jpg', 'Bathroom');
  new Product('Images/boots.jpg', 'Boots');
  new Product('Images/breakfast.jpg', 'Breakfast');
  new Product('Images/bubblegum.jpg', 'Bubblegum');
  new Product('Images/chair.jpg', 'Chair');
  new Product('Images/cthulhu.jpg', 'Cthulhu');
  new Product('Images/dog-duck.jpg', 'Dog-Duck');
  new Product('Images/dragon.jpg', 'Dragon');
  new Product('Images/pen.jpg', 'Pen');
  new Product('Images/pet-sweep.jpg', 'Pet Sweep');
  new Product('Images/scissors.jpg', 'Scissors');
  new Product('Images/shark.jpg', 'Shark');
  new Product('Images/sweep.png', 'Sweep');
  new Product('Images/tauntaun.jpg', 'Taun-Taun');
  new Product('Images/unicorn.jpg', 'Unicorn');
  new Product('Images/usb.gif', 'USB');
  new Product('Images/water-can.jpg', 'Water Can');
  new Product('Images/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
