import { getUser } from './init-app.js';


function checkUser() {
    console.log('FoodPlateApp InitUser module loaded');

    const regBtn = document.getElementById('initRegister_btn');
    if (localStorage.length > 0) {
        console.log('checkUser() called: user has already registered');
        getUser();
    }
    else {
        console.log('checkUser() called: user has not registered');
    }
}

export { checkUser }
