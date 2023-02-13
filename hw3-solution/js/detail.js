console.log('Welcome to the detail page');

// Array of glazings and their price adaptions that will appear in pack size drop down menu
 let all_glazing = [
];

// function displayGlazing(glaze) {
//     let carTitleElement = document.querySelector('#car-title');
//     let carInfoElement = document.querySelector('#car-info');
  
//     carTitleElement.innerText = car.model;
//     carInfoElement.innerText = car.description;
//   }

// Retrieving the drop down menu for glazing
let glazingSelectElement = document.querySelector('#glazing-selector')

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
let glazing_option_two = {
    option_name: 'Sugar Milk',
    option_value: '0',
}

all_glazing.push(glazing_option_two)

// Creating each option in the drop down menu in the UI
var option = document.createElement('option');
option.text = glazing_option_two.option_name;
option.value = all_glazing.length - 1;
glazingSelectElement.add(option);

// Second Glazing Option: Sugar Milk
let glazing_option_3 = {
    option_name: 'Vanilla Milk',
    option_value: '0.50',
}

all_glazing.push(glazing_option_3)

// Creating each option in the drop down menu in the UI
var option = document.createElement('option');
option.text = glazing_option_3.option_name;
option.value = all_glazing.length - 1;
glazingSelectElement.add(option);

// Second Glazing Option: Sugar Milk
let glazing_option_4 = {
    option_name: 'Double Chocolate',
    option_value: '1.50',
}

all_glazing.push(glazing_option_4)

// Creating each option in the drop down menu in the UI
var option = document.createElement('option');
option.text = glazing_option_4.option_name;
option.value = all_glazing.length - 1;
glazingSelectElement.add(option);

function glazingOnSelectValueChange() {
    console.log('You selected' + this.value);

    console.log(glazingIndex)
    let glazingIndex = parseInt(this.value);
    let glazingToDisplay = all_glazing[glazingIndex];


    displayGlazing(glazingToDisplay);
}

glazingSelectElement.addEventListener('change', glazingOnSelectValueChange);

// Array of pack sizes and their price adaptions that will appear in pack size drop down menu
let all_pack_size = [
]; 

// function displayPackSize(pack_size) {
//     let packSizeTitleElement = document.querySelector('#car-title');
//     let carInfoElement = document.querySelector('#car-info');
  
//     carTitleElement.innerText = car.model;
//     carInfoElement.innerText = car.description;
//   }

// Retrieving the drop down menu for pack size
let packSizeSelectElement = document.querySelector('#pack-size-selector')

// First Glazing Option: Keep Original
let pack_size_option_1 = {
    option_name:'1',
    option_value:'1',
}

all_pack_size.push(pack_size_option_1)

// Creating each option in the drop down menu in the UI
var option = document.createElement('option');
option.text = pack_size_option_1.option_name;
option.value = all_pack_size.length - 1;
packSizeSelectElement.add(option);

let pack_size_option_two = {
    option_name:'3',
    option_value:'3',
}

all_pack_size.push(pack_size_option_two)

// Creating each option in the drop down menu in the UI
var option = document.createElement('option');
option.text = pack_size_option_two.option_name;
option.value = all_pack_size.length - 1;
packSizeSelectElement.add(option);

let pack_size_option_three= {
    option_name:'6',
    option_value:'5',
}

all_pack_size.push(pack_size_option_three)

// Creating each option in the drop down menu in the UI
var option = document.createElement('option');
option.text = pack_size_option_three.option_name;
option.value = all_pack_size.length - 1;
packSizeSelectElement.add(option);

let pack_size_option_four= {
    option_name:'12',
    option_value:'10',
}

all_pack_size.push(pack_size_option_four)

// Creating each option in the drop down menu in the UI
var option = document.createElement('option');
option.text = pack_size_option_four.option_name;
option.value = all_pack_size.length - 1;
packSizeSelectElement.add(option);

function packSizeOnSelectValueChange() {
    console.log('You selected ' + this.value);
    console.log(packSizeIndex)

    let packSizeIndex = parseInt(this.value);
    let packSizeToDisplay = all_pack_size[packSizeIndex];


    displayPackSize(packSizeToDisplay);
}

packSizeSelectElement.addEventListener('change', packSizeOnSelectValueChange);


