// Array that will house products intended to be checked out
const shoppingCart = [];

// Roll Class used to save all of the current product Information
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
};

const rollOne = createRoll(
    'Original',
    'Sugar Milk',
    '1',
    '2.49'
);

const rollTwo = createRoll (
    'Walnut',
    'Vanilla Milk',
    '12',
    '3.49'
);

const rollThree = createRoll (
    'Raisin',
    'Sugar Milk',
    '3',
    '2.99'
);

const rollFour = createRoll (
    'Apple',
    'Original',
    '3',
    '3.49'
);