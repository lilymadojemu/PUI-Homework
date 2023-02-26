
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

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const shoppingRoll = new Roll_Class(rollType, rollGlazing, packSize, rollPrice);
    shoppingCart.push(shoppingRoll);
    return shoppingRoll;
};

const rollOne = addNewRoll(
    'Original',
    'Sugar Milk',
    '1',
    '2.49'
);

const rollTwo = addNewRoll (
    'Walnut',
    'Vanilla Milk',
    '12',
    '3.49'
);

const rollThree = addNewRoll (
    'Raisin',
    'Sugar Milk',
    '3',
    '2.99'
);

const rollFour = addNewRoll (
    'Apple',
    'Original',
    '3',
    '3.49'
);