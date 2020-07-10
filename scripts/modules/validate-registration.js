import { FoodPlate } from './main.js';
import { onRegisterSubmit } from './register-user.js';
import { DOMnodes } from './dom-nodes.js';

function processForm() {
    console.log('%cvaildateReg module has loaded', 'color:red');
    console.log('%cvalidateForm function called', 'color:green');
    console.table(FoodPlate.user);
    // const un = document.getElementById('firstName');

    /*********************************************************REG FORM : event listeners */
    // show age adult and child age groups
    DOMnodes.ageGroupChildLabel.addEventListener('click', showChildAgeGroups);
    DOMnodes.ageGroupAdultLabel.addEventListener('click', showAdultAgeGroups);
    // set users gender
    DOMnodes.genderMale.addEventListener('click', setGender);
    DOMnodes.genderFemale.addEventListener('click', setGender);
    //set users first name
    DOMnodes.firstnameTI.addEventListener('blur', setUserName);
    // submit registration form
    DOMnodes.registerUserBtn.addEventListener('submit', onRegisterSubmit);
}

//enable age buttons to display combobox for adults
function showAdultAgeGroups() {
    console.log('user clicked adultAgeGroup');
    DOMnodes.adultAgeGroups.style.display = 'block';
    DOMnodes.childAgeGroups.style.display = 'none';
    FoodPlate.user.age = 'adult';
    console.table(FoodPlate.user);
}

//enable age buttons to display combobox for children
function showChildAgeGroups() {
    console.log('user clicked childAgeGroup');
    DOMnodes.childAgeGroups.style.display = 'block';
    DOMnodes.adultAgeGroups.style.display = 'none';
    FoodPlate.user.age = 'child';
    console.table(FoodPlate.user);
}

function setGender(evt) {
    console.log(`setGender is called: ${evt.target.nextElementSibling.value}`);
    let selectedRadio = evt.target.nextElementSibling.value;
    FoodPlate.user.userGender = selectedRadio;
    console.table(FoodPlate.user);
}

function setUserName(evt) {
    FoodPlate.user.userName = evt.target.value;
    console.log(`user entered username: ${FoodPlate.user.userName}`);
    console.table(FoodPlate.user);
}

export { processForm }

