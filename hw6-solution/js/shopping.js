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

// Roll Class used to save all of the current product Information
class roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;    
        
    }
};

// Array that will house products intended to be checked out
let shoppingCart = [];

// Adding a new cart item to the shopping cart set and updating the total price
function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const cartItem = new roll(rollType, rollGlazing, packSize, rollPrice);
    shoppingCart.add(cartItem);
    createCartItem(cartItem);
    updateTotalPrice(cartItem);
    return cartItem;    

};    

// Calculates and updates the price of individual cart items 
function shoppingCalculatePrice(basePrice, glazingPrice, packPrice) {
    const finalPrice = (basePrice+ glazingPrice) * packPrice;
    return finalPrice.toFixed(2);
};

// For of loop that creates cart item elements
for (const cartItem of shoppingCart) {
    createCartItem(cartItem);
};

// Creates cart items and displays to the shopping page
function createCartItem(cartItem){
    // Grabs a reference to the cinna roll template:
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
    
    // Removes cart items based on user input (click)
    const removeCartItemBtn = clone.querySelector('.removeBtn');
    removeCartItemBtn.addEventListener('click', () =>{
        deleteCartItem(cartItem);
    });

    // Adding cart item elements to the DOM to be displayed
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.appendChild(clone);

    // Updating the total price of shopping cart every time a new item is added
    updateTotalPrice(cartItem);
};

// Updating the tota lPrice of the current items in cart
function updateTotalPrice(cartItem) {
    let totalPrice = 0;
    for (const cartItem of shoppingCart) {
        totalPrice += parseFloat(cartItem.basePrice);
      };
    document.querySelector('.shopping-total-price').textContent = '$' + totalPrice.toFixed(2);
};

// Deletes Cart Item from Shopping Cart
function deleteCartItem(cartItem){
    // Credit: ChatGPT
    const cartItemIndex = shoppingCart.findIndex(item => item.id === cartItem.id);
    if (cartItemIndex !== -1) {
        shoppingCart.splice(cartItemIndex, 1);
        console.log(shoppingCart);
        updateTotalPrice(cartItem);
        saveToLocalStorage();
        cartItem.element.remove();
    }
};

function retrieveFromLocalStorage() {
    const cartString = localStorage.getItem('storedCartItems');
    const storedCart = JSON.parse(cartString);
    // Need to reference shopping cart so that items can be removed
    if (storedCart) {
        shoppingCart = storedCart;
        console.log(shoppingCart);

        for (const cartData of shoppingCart) {
            const cartItem = new roll(cartData.type, cartData.glazing, cartData.size, cartData.basePrice);
            createCartItem(cartItem);
        }
    }
};
// 
function saveToLocalStorage(){
    const cartString = JSON.stringify(shoppingCart);
    localStorage.setItem('storedCartItems', cartString);
    // printing the current contents of the cart in local storage after saving
    console.log(cartString);
}

// Attempting to retrieve cart from local storage
if (localStorage.getItem('storedCartItems') != null) {
    retrieveFromLocalStorage();
}
  
if (localStorage.getItem('storedCartItems') == null) {
    const shoppingCart = [];
}