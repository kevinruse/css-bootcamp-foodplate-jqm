import { FoodPlate } from './main.js';
import { onRegisterSubmit } from './register-user.js';
import { processForm } from './validate-registration.js';
import { updateImages } from './plate-management.js';
import { DOMnodes } from './dom-nodes.js';
import { getUserInitStatus } from './init-status.js';
import { storeUserData, storeDate, setRegBtnValue } from './utils.js';

function checkUser() {
    console.info('%cinit-app module has loaded', 'color: red');
    console.log('%ccheckUser function has been called', 'color:green');
    if (localStorage.getItem('user')) {
        getUser();
        setRegBtn();
    } else {
        FoodPlate.user.registered = false;
        console.log(`userIsRegistered: ${FoodPlate.user.registered}`);
        setRegBtn();
    }
    console.log('%ccheckUser function called - user registered:', 'color:green',  `${FoodPlate.user.registered}`);
}

function getUser() {
    console.log(`%cgetUser function called`, 'color:green');
    //get user object from localStorage
    if (localStorage.getItem('user')) {
        FoodPlate.user = JSON.parse(localStorage.getItem('user'));
        console.log('user returned from localstorage');
        console.table(FoodPlate.user);
        welcomeUser();
        checkTime();
    }
}

function setRegBtn() {
    console.log('%csetRegistrationBtn function called', 'color: green');
    if (!FoodPlate.user.registered) {
        setRegBtnValue('Register');
        /* register_btn handler */
        DOMnodes.regBtn.addEventListener('click', function() {
            //jquerymobile navigate method to go to register form page. see https://api.jquerymobile.com/navigate/
            $.mobile.navigate("#registerFormPage", {transition: "flip", info: "register user"});
            //log button click
            console.log('user clicked register button');
            DOMnodes.registerUserBtn.addEventListener('click', onRegisterSubmit);
            processForm();
        });
    } else if(FoodPlate.user.registered) {
        setRegBtnValue('Check In');
        // checkTime();
        updateImages(FoodPlate.user);
        DOMnodes.regBtn.addEventListener('click', function () {
            // jquerymobile navigation method to go to add Food Page. see https://api.jquerymobile.com/navigate/
            $.mobile.navigate("#addFoodPage", {transition: "flip", info: "let user add food"});
        });
    }
}


function welcomeUser() {
    console.log('%cwelcomeUser function called', 'color:green');
    DOMnodes.staticHeaderH1.innerText = `${FoodPlate.user.userName}'s Food Plate`;
    DOMnodes.registerHeaderH1.innerText = `${FoodPlate.user.userName}'s Food Plate`;
    DOMnodes.addFoodHeaderH1.innerText = `${FoodPlate.user.userName}'s Food Plate`;
}

function  checkTime() {
    console.log('%ccheckTime function called', 'color:green');
    let newReturnDate = new Date();
    // to test >24 hour time lapse - remove comment for the line below; add comment for the line above
    // let newReturnDate = new Date(2021, 7, 7);
    FoodPlate.returnDate = newReturnDate;
    let lastVisitDate = new Date(localStorage.getItem('returnDate'));
    console.log(lastVisitDate);
    FoodPlate.difference = lastVisitDate.getTime() - newReturnDate.getTime();
    FoodPlate.difference = Math.ceil(FoodPlate.difference / (1000 * 60 * 60 * 24));
    console.log("difference between register date and check in date is: " + FoodPlate.difference);
    if (FoodPlate.difference >= 0) {
        console.log('user has checked in on the same date as registration date');
    } else if (FoodPlate.difference <= -1) {
        console.log('24 hours have passed - clean plate and reset checkin/return dates');
         alert("It has been more than 24 hours since your last check in. Your plate will be reset for today.");
         FoodPlate.user.userStatus = getUserInitStatus();
         storeUserData(FoodPlate.user);
         FoodPlate.checkInDate = new Date();
         FoodPlate.returnDate  = new Date();
         storeDate('checkInDate', FoodPlate.checkInDate);
         storeDate('returnDate', FoodPlate.returnDate);
    }
}

export { checkUser, setRegBtnValue, getUser }

