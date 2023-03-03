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

// Roll Class used to save all of the current product Information
class roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;    
        
    }
};

// Set that will house products intended to be checked out
const shoppingCart = new Set();

// Adding a new cart item to the shopping cart set
function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const cartItem = new roll(rollType, rollGlazing, packSize, rollPrice);
    shoppingCart.add(cartItem);
    createCartItem(cartItem);
    updateTotalPrice(cartItem);
    return cartItem;    

};    

// Calculates and updates the final price on the product detail page
function shoppingCalculatePrice(basePrice, glazingPrice, packPrice) {
    const finalPrice = (basePrice+ glazingPrice) * packPrice;
    return finalPrice.toFixed(2);
};

// A loop to create and add each cart item to the shopping cart 
for (const cartItem of shoppingCart) {
    createCartItem(cartItem);
};


function createCartItem(cartItem){
    // Grab a reference to the cinna roll template:
    const template = document.querySelector('#cinna-roll-template');
    const clone = template.content.cloneNode(true);
    cartItem.element = clone.querySelector('.cartItem');

    // update Dom Elements
    const cinnaRollImage = clone.querySelector('.cartItemPic');
    cinnaRollImage.src = `bakery_products/${cartItem.type.toLowerCase()}-cinnamon-roll.jpg`;

    const cinnaRollType = clone.querySelector('.cartRollType');
    cinnaRollType.textContent = cartItem.type + ' Cinnamon Roll';

    const cinnaRollGlazing = clone.querySelector('.cartItemGlazing');
    cinnaRollGlazing.textContent = 'Glazing: ' + cartItem.glazing; 
    
    const cinnaRollPackSize =  clone.querySelector('.cartItemPackSize');
    cinnaRollPackSize.textContent = 'Pack Size: ' + cartItem.size;    

    const cinnaRollFinalPrice = clone.querySelector('.cartItemPrice');
    cinnaRollFinalPrice.textContent = '$' + cartItem.basePrice;    

    const removeCartItemBtn = clone.querySelector('.removeBtn');
    removeCartItemBtn.addEventListener('click', () =>{
        deleteCartItem(cartItem);
    });

    const shoppingCartContent = document.querySelector(".shopping-content");
    shoppingCartContent.appendChild(clone);

};

// Updating the totalPrice of the current cart Item
function updateTotalPrice(cartItem) {
    let totalPrice = 0;
    for (const cartItem of shoppingCart) {
        totalPrice += parseFloat(cartItem.basePrice);
      };
    document.querySelector('.shopping-total-price').textContent = '$' + totalPrice.toFixed(2);
};

// Deletes Cart Item from Shopping Carr
function deleteCartItem(cartItem){
    cartItem.element.remove();
    shoppingCart.delete(cartItem);
    updateTotalPrice(cartItem);
};

// Rolls in the shopping cart
const rollOne = addNewRoll(
    'Original',
    'Sugar Milk',
    '1',
    calculatedPrice = shoppingCalculatePrice(rolls['Original']['basePrice'], glazingOptions['Sugar Milk'], packSizeOptions['1']),
);

const rollTwo = addNewRoll (
    'Walnut',
    'Vanilla Milk',
    '12',
    calculatedPrice = shoppingCalculatePrice(rolls['Walnut']['basePrice'], glazingOptions['Vanilla Milk'], packSizeOptions['12']),
);

const rollThree = addNewRoll (
    'Raisin',
    'Sugar Milk',
    '3',
    calculatedPrice = shoppingCalculatePrice(rolls['Raisin']['basePrice'], glazingOptions['Sugar Milk'], packSizeOptions['3']),
);

const rollFour = addNewRoll (
    'Apple',
    'Original',
    '3',
    calculatedPrice = shoppingCalculatePrice(rolls['Apple']['basePrice'], glazingOptions['Keep Original'], packSizeOptions['3']),
);


