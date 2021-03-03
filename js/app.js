'use strict';

let busProducts = [

  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'
];

let index;

function Bus(name) {
  this.name = name;
  this.num = 0;
  this.image = `./Images/${name}`;
  Bus.all.push(this);
}

Bus.all = [];

// for (let i = 0; i < busProducts.length; i++) {
//   new Bus(getName(busProducts[i]), busProducts[i]);
// }

// Bus.prototype.getName = function(fileName) {
//   return fileName.split('.').slice(0, -1).join('.');
//   /*
//  return fileName.split('.')[0];
//  return fileName.split('.')[1];
//   */
// }

const ul = document.getElementById('list');

Bus.prototype.renderProduct = function(){
    const liElement = document.createElement('li');
    ul.appendChild(liElement);
    liElement.textContent = ` number of ${this.name} : ${this.num}`;
    const img = document.createElement('img');
    liElement.appendChild(img);
    // this.getName(this.name);
    img.src = this.image;
    
};

const formElement = document.getElementById('productForm');
formElement.addEventListener('submit',handelSubmit);
function handelSubmit(event) {
event.preventDefault();
const product = new Bus (event.target.products.value);
const number = event.target.numField.value;
product.num = number;
  formElement.reset();
  product.renderProduct();
  localStorage.product = JSON.stringify(Bus.all);
};



