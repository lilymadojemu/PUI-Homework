// Object for glazings
const glazingOptions = {
    'Keep Original':0.0,
    'Sugar Milk': 0.0,
    'Vanilla Milk':0.50,
    'Double Chocolate':1.50,
};

// Object for pack sizes
const packSizeOptions = {
    '1':1.0,
    '3':3.0,
    '6':5.0,
    '12':10.0,
};

// Default Price of the selected glazing option
var glazingPrice = '0';

// Default Price of the selected pack size option
var packPrice = '0';

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

// Change in drop down menu for glazing option selected based on user's input
function glazingOnSelectValueChange() {
    console.log('You selected ' + this.value); 
};

// Looking/listening for user's selection on the glazing drop down menu
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

// Change in drop down menu for pack size option selected based on user's input
function packSizeOnSelectValueChange() {
    console.log('You selected ' + this.value);
}

// Looking/listening for user's selection on the pack size drop down menu 
packSizeSelectElement.addEventListener('change', packSizeOnSelectValueChange);

// Get's the current glazing option's price and change's the final price based on user's selection
function glazingChange(element) {
    glazingPrice = parseInt(element.value);
    calculatePrice();
}

// Get's the current pack size price and change's the final price based on user's selection
function packSizeChange(element) {    
    packPrice = parseInt(element.value);
    calculatePrice();
}

// Calculates and updates the final price on the product detail page
function calculatePrice() {
    const basePrice = 2.49;
    const finalPrice = (basePrice + glazingPrice) * packPrice;
    const productDetailPrice = document.querySelector('.detail-price');
    // Credits .toFixed(): https://www.w3schools.com/jsref/jsref_tofixed.asp#:~:text=The%20toFixed()%20method%20rounds,a%20specified%20number%20of%20decimals.
    productDetailPrice.innerText = finalPrice.toFixed(2);
}

