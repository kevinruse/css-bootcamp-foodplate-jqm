import { FoodPlate } from './main.js';
import { getUserRequirements } from './user-requirements.js';
import { getUserInitStatus } from './init-status.js';
import { storeUserData, storeDate, setRegBtnValue } from './utils.js';
import { DOMnodes } from './dom-nodes.js';

function onRegisterSubmit() {
    console.log('%c onRegisterSubmit function called', 'color:green');
    if (DOMnodes.userName.checkValidity() === false) {
        alert("You did not complete the First Name field.")
    } else {
        if (FoodPlate.user.age === "adult") {
            let ageGroup = document.querySelector('#adultAgeGroups span.ui-selectmenu-text').textContent;
            console.log('registered age: ' + ageGroup);
            FoodPlate.user.ageGroup = ageGroup;
        } else if (FoodPlate.user.age === "child") {
            let ageGroup = document.querySelector('#childAgeGroups span.ui-selectmenu-text').textContent;
            console.log('registered age: ' + ageGroup);
            FoodPlate.user.ageGroup = ageGroup;
        }
        //set check in date to a new date object and log
        FoodPlate.checkInDate = new Date();
        console.log(`checkInDate: ${FoodPlate.checkInDate}`);
        //set a return date to a new date object and log
        FoodPlate.returnDate = new Date();
        console.log(`returnDate: ${FoodPlate.returnDate}`);
        setUserCode(FoodPlate.user.userGender, FoodPlate.user.ageGroup);
        createUser();
        storeDate('checkInDate', FoodPlate.checkInDate);
        storeDate('returnDate', FoodPlate.returnDate);
    }
}

function createUser() {
    console.log('%ccreateUser function called', 'color:green');
    FoodPlate.user.userReq = getUserRequirements(FoodPlate.user.userCode);
    console.table(FoodPlate.user);
    FoodPlate.user.userStatus = getUserInitStatus();
    console.table(FoodPlate.user);
    //set registered to true
    FoodPlate.user.registered = true;
    console.table(FoodPlate.user);
    confirmUser(FoodPlate.user);
    storeUserData(FoodPlate.user);
}

function confirmUser(user) {
    console.log('%cconfirmUser function called', 'color:green');
    DOMnodes.registerHeaderH1.innerText = FoodPlate.user.userName + "'s Food Plate";
    DOMnodes.registerConfirmDiv.appendChild(createConfirmMessage());
    DOMnodes.registerForm.hidden = true;
    setRegBtnValue('Check In');
    DOMnodes.registerConfirmDiv.appendChild(createReturnToPlateBtn());
    // jquerymobile navigation method to go to add Food Page. see https://api.jquerymobile.com/navigate/
    $.mobile.navigate("#registerFormPage", {transition: "flip", info: "let user add food"});
    DOMnodes.welcomeHeader.innerText = FoodPlate.user.userName + "'s Food Plate";

}

function createReturnToPlateBtn() {
    const addFoodPageLink = document.createElement('a');
    addFoodPageLink.setAttribute('href', '#addFoodPage');
    const returnToFoodPlateBtn = document.createElement('input');
    returnToFoodPlateBtn.setAttribute('type', 'button');
    returnToFoodPlateBtn.setAttribute('name', 'returnToPlate_btn');
    returnToFoodPlateBtn.setAttribute('id', 'returnToPlate_btn');
    returnToFoodPlateBtn.setAttribute('value', 'Return to Plate');
    returnToFoodPlateBtn.setAttribute('class', 'fpButton');
    addFoodPageLink.appendChild(returnToFoodPlateBtn);
    return addFoodPageLink;
}

function createConfirmMessage() {
    let selectedGender = formatGender(FoodPlate.user.userGender);
    const confirmDiv = document.createElement('div');
    confirmDiv.setAttribute('class', 'confirmMessage');
    const confirmH2userName = document.createElement('h2');
    confirmH2userName.innerText = `You have successfully registered as: ${FoodPlate.user.userName }`;
    confirmDiv.appendChild(confirmH2userName);
    const confirmPAge = document.createElement('p');
    confirmPAge.innerText = `Your age group is: ${FoodPlate.user.ageGroup}`;
    confirmDiv.appendChild(confirmPAge);
    const confirmPGender = document.createElement('p');
    confirmPGender.innerText = `Your gender is: ${selectedGender}`;
    confirmDiv.appendChild(confirmPGender);
    return confirmDiv;
}

function formatGender(gender) {
    let formattedGender;
    if (gender === "M") {
        formattedGender = "Male";
    } else {
        formattedGender = "Female"
    }
    return formattedGender;
}

function setUserCode(gender, ageGroup) {
    console.log('%csetUserCode function called', 'color:green');
    FoodPlate.user.userCode = gender + ageGroup;
    console.table(FoodPlate.user);
}

export { onRegisterSubmit, storeUserData, storeDate }
