// Product Detail Page
// Rolls Data
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "bakery_products/original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "bakery_products/apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "bakery_products/raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "bakery_products/walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "bakery_products/double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "bakery_products/strawberry-cinnamon-roll.jpg"
    }    
};

// Object for glazings
const glazingOptions = {
    'Keep Original':0.0,
    'Sugar Milk': 0.0,
    'Vanilla Milk': 0.50,
    'Double Chocolate': 1.50,
};

// Object for pack sizes
const packSizeOptions = {
    '1': 1.0,
    '3': 3.0,
    '6': 5.0,
    '12': 10.0,
};

// Array of glazings and their price adaptions that will appear in Glazing drop down menu
 let all_glazing = [];

// Array of pack sizes and their price adaptions that will appear in pack size drop down menu
let all_pack_size = []; 

// Accessing the glazing options' drop down menu
let glazingSelectElement = document.querySelector('#glazing-selector');

// For loop that adds glazing options to glazing drop down menu
for (var i in glazingOptions) {
    all_glazing.push(i);
    var option = document.createElement('option');
    option.text = i;
    option.value = i; 
    glazingSelectElement.appendChild(option);
};

// Retrieving the reference for the drop down menu for pack size
let packSizeSelectElement = document.querySelector('#pack-size-selector')

// For loop for adding pack sizes to pack size drop down menu
for (var i in packSizeOptions) {
    all_pack_size.push(i);
    var option = document.createElement('option');
    option.text = i;
    option.value = i; 
    packSizeSelectElement.appendChild(option);
};

// Default Glaze Selected
var currentSelectedGlaze = 'Keep Original';

// Default Pack Size name
var currentSelectedPackSize = '1';

// Default Price of the selected glazing option
var glazingPrice = '0';

// Default Price of the selected pack size option
var packPrice = '1';

// Array that will house products intended to be checked out
let cart = [];

// Gather info from URL
const queryString = window.location.search;
console.log(queryString);

// Creating a new query string with created url
const params = new URLSearchParams(queryString);
console.log(params);

// Gets the current roll type and stores it in a variable
const rollType = params.get('roll');
console.log(rollType);

// Update Detail Page's Header text based on chosen product
const headerElement = document.querySelector('.detail-heading');

// Change text of header element based on chosen product
headerElement.innerText = rollType + ' Cinnamon Roll';

// Update Image based on selected product
const productDetailImage = document.querySelector('.detail-pics');

// Credits String.toLowerCase(): https://www.freecodecamp.org/news/javascript-tolowercase-how-to-convert-a-string-to-lowercase-and-uppercase-in-js/
productDetailImage.src = 'bakery_products/' + rollType.toLowerCase() + '-' + 'cinnamon' + '-' + 'roll'+ '.jpg';
console.log(productDetailImage.src);

// Updates the alt text of image to match the selected product
productDetailImage.alt = rollType + " Cinnamon Roll";

// Selecting area of a product's base price
const productBasePrice = document.querySelector('.detail-price');

// Changing default price of product shown on detail page
productBasePrice.innerText = rolls[rollType]['basePrice'];

// Get's the current glazing option's price and change's the final price based on user's selection
function glazingChange(element) {
    let key = element.value;
    currentSelectedGlaze = key;
    glazingPrice = glazingOptions[key];
    calculatePrice(rolls[rollType]['basePrice'], glazingPrice, packPrice);
};

// Get's the current pack size price and change's the final price based on user's selection
function packSizeChange(element) {
    let key = element.value;
    currentSelectedPackSize = key;   
    packPrice = packSizeOptions[key];
    calculatePrice(rolls[rollType]['basePrice'], glazingPrice, packPrice);
};

// Calculates and updates the final price on the product detail page
function calculatePrice(basePrice, glazingPrice, packPrice) {
    const finalPrice = (basePrice + glazingPrice) * packPrice;
    const productDetailPrice = document.querySelector('.detail-price');
    // Credits .toFixed(): https://www.w3schools.com/jsref/jsref_tofixed.asp#:~:text=The%20toFixed()%20method%20rounds,a%20specified%20number%20of%20decimals.
    productDetailPrice.innerText = finalPrice.toFixed(2);
    return finalPrice.toFixed(2);
};

// Roll Class used to save all of the current product Information
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
};

const addToCart = document.querySelector('.adding-to-cart');
addToCart.onclick = this.createRoll;

// Creating an instance of the class Roll when clicking Add to Cart Button 
function createRoll() {
    const currentRollGlazing = currentSelectedGlaze; 
    const currentPackSize = currentSelectedPackSize;
    const currentBasePrice = parseFloat(rolls[rollType]['basePrice']);
    const cartRoll = new Roll(rollType,currentRollGlazing,currentPackSize, calculatePrice(currentBasePrice, glazingPrice, packPrice));
    cart.push(cartRoll);
    
    saveToLocalStorage();

    return cartRoll;
};

function saveToLocalStorage(){
    const cartString = JSON.stringify(cart);
    console.log(cart);
    localStorage.setItem('storedCartItems', cartString);
    // printing the current contents of the cart in local storage after saving
    console.log(cartString);
}


function retrieveFromLocalStorage(){
    const cartString = localStorage.getItem('storedCartItems');
    const storedCart = JSON.parse(cartString);
    // Credits: ChaptGPT, value of global variable cart changes
    if (storedCart) {
        cart = storedCart;
        console.log(cart);
    }
}

if (localStorage.getItem('storedCartItems') != null) {
    retrieveFromLocalStorage();
}
  
if (localStorage.getItem('storedCartItems') == null) {
    const cart = [];
}

