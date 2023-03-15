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

// roll Class used to save all of the current product Information
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

// Final Price before being updated
document.querySelector('.shopping-total-price').textContent = '$' + 0.00;

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

// Updating the total Price of the current items in cart
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
    // const cartItemIndex = shoppingCart.findIndex(item => item.id === cartItem.id);
    shoppingCart.splice(shoppingCart.indexOf(cartItem), 1); // remove roll from cart
    // shoppingCart.splice(cartItemIndex, 1);
    console.log(shoppingCart);
    updateTotalPrice(cartItem);
    console.log('This element should be removed from shoppingCart and local storage: ' + cartItem.type);
    cartItem.element.remove();        
    saveToLocalStorage();
    
};

function retrieveFromLocalStorage() {
    const cartString = localStorage.getItem('storedCartItems');
    console.log('retrieved ' + cartString);
    if (cartString) {    
        const storedCart = JSON.parse(cartString);
        shoppingCart = storedCart;
        console.log(shoppingCart);

        for (const cartData of shoppingCart) {
            // A check to make sure cartData (information about a single cart object) has not been deleted
            console.log(cartData);
            const cartItem = new roll(cartData.type, cartData.glazing, cartData.size, cartData.basePrice);
            createCartItem(cartItem);
        }
    }
};
// 
function saveToLocalStorage(){
    console.log('saved to local storage: ' + shoppingCart);
    const cartString = JSON.stringify(shoppingCart);
    console.log(shoppingCart);
    localStorage.setItem('storedCartItems', cartString);
    console.log('storedCartItems:' + localStorage.storedCartItems)
    // printing the current contents of the cart in local storage after saving
    console.log('final cartstring' + cartString);
}

// Attempting to retrieve cart from local storage
if (localStorage.getItem('storedCartItems') != null) {
    retrieveFromLocalStorage();
}
  
if (localStorage.getItem('storedCartItems') == null) {
    const shoppingCart = [];
}