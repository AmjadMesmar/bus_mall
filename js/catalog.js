/* global Product, Cart */
'use strict';
// Set up an empty cart for use on this page.
const cart = new Cart([]);
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    const productOption = document.createElement('option');
    selectElement.appendChild(productOption);
    productOption.textContent = `${Product.allProducts[i].name}`;
    productOption.value = i;
  }
}
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  // const cart = new CartItem;
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  catalogForm.reset();
}
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  let productsNumber = document.getElementById( 'quantity' );
  let quantity = productsNumber.value;
  let items = document.getElementById( 'items' );
  let input = items.value;
  let product = Product.allProducts[input] ;
  cart.addItem( product, quantity );
}
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // const cartCountUpdate = document.getElementById('itemCount');
  // cartCount ++;
  // cartCountUpdate.textContent = `${cartCount}`;
  let numOfItems = cart.items.length;
  let itemCount = document.getElementById( 'itemCount' );
  itemCount.textContent = ' ' + numOfItems;
}
let cartContents = document.getElementById( 'cartContents' );
let h2Element = document.createElement( 'h2' );
let olElement = document.createElement( 'ol' );
h2Element.textContent = 'Cart Preview';
cartContents.appendChild( h2Element );
h2Element.appendChild( olElement );
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  olElement.textContent = '';
  for ( let i = 0; i < cart.items.length; i++ ){
    let liElement = document.createElement( 'li' );
    liElement.textContent = cart.items[i].product.name + ' ' + cart.items[i].quantity;
    olElement.appendChild( liElement );
  }
}
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);
// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
