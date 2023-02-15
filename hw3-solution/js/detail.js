// Object for glazings
const glazingOptions = {
    'Keep Original':0.0,
    'Sugar Milk': 0.0,
    'Vanilla Milk':0.50,
    'Double Chocolate':1.50,
}

// Object for pack sizes
const packSizeOptions = {
    '1':1.0,
    '3':3.0,
    '6':5.0,
    '12':10.0,
}

// Array of glazings and their price adaptions that will appear in pack size drop down menu
 let all_glazing = [];

// Array of pack sizes and their price adaptions that will appear in pack size drop down menu
let all_pack_size = []; 

// Accessing the glazing options' drop down menu
let glazingSelectElement = document.querySelector('#glazing-selector')

// For loop that adds glazing options to glazing drop down menu
for (i in glazingOptions) {
    all_glazing.push(i);
    var option = document.createElement('option');
    option.text = i;
    option.value = glazingOptions[i]; 
    console.log(glazingOptions[i]);
    glazingSelectElement.appendChild(option);
}

// When select element changes, the final price is recalculated
function glazingOnSelectValueChange() {
    console.log('You selected ' + this.value); 
}

// Looking/listening for user's selection on the drop down menu
glazingSelectElement.addEventListener('change', glazingOnSelectValueChange);

// Retrieving the drop down menu for pack size
let packSizeSelectElement = document.querySelector('#pack-size-selector')

// For loop for adding pack sizes to pack size drop down menu
for (i in packSizeOptions) {
    all_pack_size.push(i);
    var option = document.createElement('option');
    option.text = i;
    option.value = packSizeOptions[i]; 
    console.log(packSizeOptions[i]);
    packSizeSelectElement.add(option);
}

function packSizeOnSelectValueChange() {
    console.log('You selected ' + this.value);
}

packSizeSelectElement.addEventListener('change', packSizeOnSelectValueChange);

function glazingChange(element) {
    // get the value (price adaption) of selected element
    var glazingPrice = parseInt(element.value);
    console.log('This is the current glazing value ' + glazingPrice);
    calculatePrice();
}

function packSizeChange(element) {    
    // get the value (price adaption) of selected element
    const packPrice = parseInt(element.value);
    console.log('This is the current pack size value ' + packPrice);
    // update the final price
    calculatePrice();
}

// Calculates and updates the final price on the product detail page
function calculatePrice() {
    const basePrice = 2.49;
    // Equation, can't access the variables necessary
    const finalPrice = (basePrice + glazingPrice) * packPrice;
    // Does this need to be a separate function?
    const productDetailPrice = document.querySelector('.detail-price');
    productDetailPrice.innerText = finalPrice;
    console.log(' The current final price of this product is ' + finalPrice);
}

