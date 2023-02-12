console.log('Welcome to the detail page');

// Glazing Options Object
// const glazing_options = {
//     Keeporiginal: 0,
//     Sugarmilk: 0,
//     Vanillamilk: 0.50,
//     Doublechocolate: 1.50,
// }

// Pack Size Options
const pack_size_options = {
    one: 1,
    three: 3,
    six: 5,
    twelve: 10,
}

// Array of glazings and their price adaptions that will appear in pack size drop down menu
 let all_glazing = [
        // All possible options that will be dynamically added to this array:
//     // { 
//     //     glazing_name: 'Keep Original',
//     //     price_adaption: '0',
//     // },
//     // { 
//     //     glazing_name: 'Sugar milk',
//     //     price_adaption: '0',
//     // },
//     // { 
//     //     glazing_name: 'Vanilla milk',
//     //     price_adaption: '0.50',
//     // },
//     // { 
//     //     glazing_name: 'Double Chocolate',
//     //     price_adaption: '1.50',
//     // }
];

// Array of pack sizes and their price adaptions that will appear in pack size drop down menu
let all_pack_size = [
    // All possible options that will be dynamically added to this array
    // { 
    //     pack_size_name: '1',
    //     price_adaption: '1',
    // },
    // { 
    //     pack_size_name: '3',
    //     price_adaption: '3',
    // },
    // { 
    //     pack_size_name: '6',
    //     price_adaption: '5',
    // },
    // { 
    //     pack_size_name: '12',
    //     price_adaption: '10',
    // }
]; 

// Retrieving the drop down menu for glazing
let glazingSelectElement = document.querySelector('#glazing-selector')

// Retrieving the drop down menu for pack size
let packSizeSelectElement = document.querySelector('#pack-size-selector')

// Add a new glazing to the drop down menu
// I believe here I could use a loop to populate drop down for each item
for (let i = 0; i < all_glazing.length; i++)
{
    let glazing_options = {
        Keeporiginal: 0,
        Sugarmilk: 0,
        Vanillamilk: 0.50,
        Doublechocolate: 1.50,
    }
    // let all_glazing = []

    all_glazing.push(glazing_options)

    console.log('A glazing has been added');

}

// First Glazing Option: Keep Original
let glazing_option_1 = {
    option_name:'Keep Original',
    option_value: '0',
}

all_glazing.push(glazing_option_1)

// Creating each option in the drop down menu in the UI
var option = document.createElement('option');
option.text = glazing_option_1.option_name;
option.value = all_glazing.length - 1;
glazingSelectElement.add(option);


// Second Glazing Option: Sugar Milk
let glazing_option_2 = {
    option_name: 'Sugar Milk',
    option_value: '0',
}
// Pack Size Options










// Add each pack size to the drop down menu
// for (){
//     console.log('A pack size has been added')
//     let newPackSize = {
//         pack_size_name: 'Test Double Chocolate',
//         price_adaption: '21.50',
//     };
//     all_pack_size.push(newPackSize)    
// }

function onSelectValueChange() {
    console.log('You selected' + this.value);

    let glazingIndex = all_glazing[glazingIndex];

    let glazingToDisplay = parseInt(this.value);

    displayGlazing(glazingToDisplay);
}

glazingSelectElement.addEventListener('change', onSelectValueChange);
packSizeSelectElement.addEventListener('change', onSelectValueChange);

// If array is drop down options, 

