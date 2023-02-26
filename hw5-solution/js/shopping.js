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

// Array that will house products intended to be checked out
const shoppingCart = [];

// Roll Class used to save all of the current product Information
class Roll_Class {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
};

// Gather info from URL
const queryString = window.location.search;
console.log(queryString);

// Creating a new query string with created url
const params = new URLSearchParams(queryString);
console.log(params);

const rollType = params.get('roll');

// Calculates and updates the final price on the product detail page
function shoppingCalculatePrice(basePrice, glazingPrice, packPrice) {
    const finalPrice = (basePrice+ glazingPrice) * packPrice;
    return finalPrice.toFixed(2);
};
function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const shoppingRoll = new Roll_Class(rollType, rollGlazing, packSize, rollPrice);
    shoppingCart.push(shoppingRoll);
    return shoppingRoll;
};

const rollOne = addNewRoll(
    'Original',
    'Sugar Milk',
    '1',
    shoppingCalculatePrice(rolls['Original']['basePrice'], glazingOptions['Sugar Milk'], packSizeOptions['1'])
);

const rollTwo = addNewRoll (
    'Walnut',
    'Vanilla Milk',
    '12',
    shoppingCalculatePrice(rolls['Walnut']['basePrice'], glazingOptions['Vanilla Milk'], packSizeOptions['12'])
);

const rollThree = addNewRoll (
    'Raisin',
    'Sugar Milk',
    '3',
    shoppingCalculatePrice(rolls['Raisin']['basePrice'], glazingOptions['Sugar Milk'], packSizeOptions['3'])
);

const rollFour = addNewRoll (
    'Apple',
    'Original',
    '3',
    shoppingCalculatePrice(rolls['Apple']['basePrice'], glazingOptions['Keep Original'], packSizeOptions['3'])
);