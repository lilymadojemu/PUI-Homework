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

// Adding a new cart item to the shopping cart array and updating the total price
function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const cartItem = new roll(rollType, rollGlazing, packSize, rollPrice);
    shoppingCart.push(cartItem);
    return cartItem;    
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
    for (const item of shoppingCart) {
        totalPrice += parseFloat(item.basePrice);
      };
    document.querySelector('.shopping-total-price').textContent = '$' + totalPrice.toFixed(2);
};


// Deletes Cart Item from Shopping Cart
function deleteCartItem(cartItem){
    // Removes selected element from the DOM
    cartItem.element.remove();

    // Remove the actual cartItem from shoppingCart array
    shoppingCart.splice(shoppingCart.indexOf(cartItem), 1)
   
    // Update final price of cart item
    updateTotalPrice(cartItem);    

    // Update Local Storage
    saveToLocalStorage();
};

// Retrieves shopping cart items from local storage
function retrieveFromLocalStorage() {
    const cartString = localStorage.getItem('storedCartItems');
    const storedCartArray = JSON.parse(cartString);
    console.log('retrieved from local storage ' + cartString);
    for (const cartData of storedCartArray) {
        const cartItem = new addNewRoll(cartData.type, cartData.glazing, cartData.size, cartData.basePrice);
        createCartItem(cartItem);
        console.log(storedCartArray);
    }
};

// Saves items in shopping cart to local storage
function saveToLocalStorage(){
    const cartString = JSON.stringify(shoppingCart);
    localStorage.setItem('storedCartItems', cartString);    
    // printing the current contents of the cart in local storage after saving
    console.log('Items in shopping cart array: ' + shoppingCart);
    console.log('Items in local storage: ' + localStorage.storedCartItems);
};

if (localStorage.getItem('storedCartItems') != null) {
    retrieveFromLocalStorage();
};

if (localStorage.getItem('storedCartItems') == null) {
    let shoppingCart = [];
};