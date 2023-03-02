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

// // Gather info from URL
// const queryString = window.location.search;
// console.log(queryString);

// // Creating a new query string with created url
// const params = new URLSearchParams(queryString);
// console.log(params);

// const rollType = params.get('roll');

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

for (const shoppingRoll of shoppingCart) {
    console.log(shoppingRoll);
    createCartItem(shoppingRoll);
};

function createCartItem(shoppingRoll){
    // img, rolltype, rollGlazing, packSize, calculateed price, remove button
    console.log('Creating an Element!');
    // // Grab a reference to the cinna roll template:
    const template = document.querySelector('#cinna-roll-template');
    const clone = template.content.cloneNode(true);
    shoppingRoll.element = clone.querySelector('.cartItem');
    console.log(shoppingRoll.element);

    // 
    const cinnaRollImage = document.querySelector('.shopping-pics');
    const cinnaRollType = document.querySelector('.cartRollType');
    const cinnaRollGlazing = document.querySelector('.cartItemGlazing');
    const cinnaRollPackSize = document.querySelector('.cartItemPackSize')
    const cinnaRollFinalPrice = document.querySelector('.cartItemPrice');

    cinnaRollImage.src = `bakery_products/${cinnaRollType}-cinnamon-roll.jpg`;
    cinnaRollType.textContent = rollType + ' Cinnamon Roll';
    cinnaRollGlazing.textContent = 'Glazing ' + rollGlazing;
    cinnaRollPackSize.textContent = 'Pack Size' + packSize;
    cinnaRollFinalPrice.textContent = '$' + calculatedPrice;

    const removeCartItemBtn = document.querySelector('.removeBtn');
    removeCartItemBtn.addEventListener('click', () =>{
        deleteCartItem(shoppingRoll);
    });

    updateRoll(shoppingRoll);
};

function deleteCartItem(shoppingRoll){
    shoppingRoll.element.remove();
    shoppingCart.pop(shoppingRoll);
}

// function updateRoll() {
//     const cinnaImage = shoppingRoll.element.querySelector('.shopping-pics');
//     cinnaImage.src = `bakery_products/${rollType}-cinnamon-roll.jpg`;
// };

const rollOne = addNewRoll(
    'Original',
    'Sugar Milk',
    '1',
    calculatedPrice = shoppingCalculatePrice(rolls['Original']['basePrice'], glazingOptions['Sugar Milk'], packSizeOptions['1']),
    createCartItem(rollOne)
    // createCartItem('Original', 'Sugar Milk', '1', calculatedPrice, 'bakery_products/Original-cinnamon-roll.jpg')
);

const rollTwo = addNewRoll (
    'Walnut',
    'Vanilla Milk',
    '12',
    calculatedPrice = shoppingCalculatePrice(rolls['Walnut']['basePrice'], glazingOptions['Vanilla Milk'], packSizeOptions['12']),
    // displayCartItems(rollTwo)
);

const rollThree = addNewRoll (
    'Raisin',
    'Sugar Milk',
    '3',
    calculatedPrice = shoppingCalculatePrice(rolls['Raisin']['basePrice'], glazingOptions['Sugar Milk'], packSizeOptions['3']),
    // displayCartItems(rollThree)
);

const rollFour = addNewRoll (
    'Apple',
    'Original',
    '3',
    calculatedprice = shoppingCalculatePrice(rolls['Apple']['basePrice'], glazingOptions['Keep Original'], packSizeOptions['3']),
    // displayCartItems(rollFour)
);

