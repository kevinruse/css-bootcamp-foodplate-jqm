import {DOMnodes} from './dom-nodes.js';

export function setRegBtnValue(btnValue) {
    console.log(`%csetRegBtnValue function called and set registration button to ${btnValue}`, 'color:green');
    DOMnodes.regBtn.value = btnValue;
}

export function storeUserData(user) {
    console.log('%cstoreUserData function called', 'color:green');
    localStorage.setItem("user", JSON.stringify(user));
}

export function storeDate(name, date) {
    console.log('%cstoreDate function called', 'color:green');
    localStorage.setItem(name, date);
}
