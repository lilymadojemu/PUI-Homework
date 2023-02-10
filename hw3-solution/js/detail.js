// DELETE LATER How I know I am successfully connected to detail page
console.log('Welcome to the detail page');

// Glazing Options
const glazing_options = {
    Keeporiginal: 0,
    Sugarmilk: 0,
    Vanillamilk: 0.50,
    Doublechocolate: 1.50,
}

// Pack Size Options
const pack_size_options = {
    one: 1,
    three: 3,
    six: 5,
    twelve: 10,
}

// Array of glazings and their price adaptions that will appear in pack size drop down menu
let all_glazing = [
    { 
        glazing_name: 'Keep Original',
        price_adaption: '0',
    },
    { 
        glazing_name: 'Sugar milk',
        price_adaption: '0',
    },
    { 
        glazing_name: 'Vanilla milk',
        price_adaption: '0.50',
    },
    { 
        glazing_name: 'Double Chocolate',
        price_adaption: '1.50',
    }
];

// Array of pack sizes and their price adaptions that will appear in pack size drop down menu
let all_pack_size = [
    { 
        pack_size_name: '1',
        price_adaption: '1',
    },
    { 
        pack_size_name: '3',
        price_adaption: '3',
    },
    { 
        pack_size_name: '6',
        price_adaption: '5',
    },
    { 
        pack_size_name: '12',
        price_adaption: '10',
    }
]; 