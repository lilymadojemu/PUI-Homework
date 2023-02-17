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

// URL Params

// Array that will house products intended to be checkedout
const cart = [];

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
headerElement.innerText = rollType;

// Update Image based on selected product
const productDetailImage = document.querySelector('.detail-pics');
productDetailImage.src = './bakery_products/' + rollType + '.png';
// Updates the alt text of image to match the selected product
productDetailImage.alt = rollType;
