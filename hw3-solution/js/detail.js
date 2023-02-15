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
    glazingSelectElement.add(option);
}

// When select element changes, the final price is recalculated
function glazingOnSelectValueChange() {
    console.log('You selected ' + this.value);
    // calculatePrice();
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
    packSizeSelectElement.add(option);
}

function packSizeOnSelectValueChange() {
    console.log('You selected ' + this.value);
}

packSizeSelectElement.addEventListener('change', packSizeOnSelectValueChange);


function glazingChange(element) {
    // get the value (price adaption) of selected element
    const priceChange = element.value;
    return priceChange;
    calculatePrice(glazingPrice, packPrice);

}

var glazingPrice = glazingChange(element)
console.log('Your glazing price is ' + glazingPrice)

function packSizeChange(element) {
    // get the value (price adaption) of selected element
    console.log(this.element);
    const packPrice = element.value;
    // update the final price
    calculatePrice(glazingPrice, packPrice);
}
var packSizePrice = packSizeChange(element)
console.log('Your pack size price is ' + packSizePrice)

function calculatePrice(glazingPrice, packSizePrice) {
    // Select what the current glazing option is and get it's value
    // Select what the current pack size option is and get it's value
    // Use the formula and change the inner text of product detail's price
    const basePrice = '2.49';
    console.log(glazingChange(element));
    console.log(packPrice);
    const finalPrice = (parseInt(basePrice + glazingChange(element)) * packPrice);
    const productDetailPrice = document.querySelector('.detail-price');
    console.log(' The current final price of this product is ' + finalPrice);
    productDetailPrice.innerText = finalPrice;


}

function updatePrice() {
    // Select what the current glazing option is and get it's value
    // Select what the current pack size option is and get it's value
    // Use the formula and change the inner text of product detail's price


}
