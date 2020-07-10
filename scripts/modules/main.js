import { User } from './User.js';
import { checkUser } from './init-app.js';
import { activateFoodIcons } from './plate-management.js';

const FoodPlate = (function() {
    let user = new User();
    let checkInDate = new Date();
    let returnDate = new Date();

    return { user: user,
             checkInDate: checkInDate,
             returnDate: returnDate,
    };
}());

function init() {
    console.info('%cmain.js module has loaded', 'color: red');
    console.log('%cinit function called', 'color:green');
    window.addEventListener('load', (event) => {
        console.info(`event occurred - event.type is: ${event.type} event`)
        checkUser();
        activateFoodIcons();
    });
}


init();

export { FoodPlate }


