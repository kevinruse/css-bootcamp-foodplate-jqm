import { FoodPlate } from './main.js';
import { storeUserData } from './utils.js';
import { DOMnodes } from './dom-nodes.js';

// drag the foodIcons
/* draggable methods comes from jqueryUI library. see https://jqueryui.com/draggable/ */
function activateFoodIcons() {
    $('#fruitIcon').draggable({opacity: ".75", revert: 'invalid', helper: 'clone', cursor: 'pointer'});
    $('#vegIcon').draggable({opacity: ".75", revert: 'invalid', helper: 'clone', cursor: 'pointer'});
    $('#proteinIcon').draggable({opacity: ".75", revert: 'invalid', helper: 'clone', cursor: 'pointer'});
    $('#grainIcon').draggable({opacity: ".75", revert: 'invalid', helper: 'clone', cursor: 'pointer'});
    $('#dairyIcon').draggable({opacity: ".75", revert: 'invalid', helper: 'clone', cursor: 'pointer'});
    $('#fruitempty').droppable({
        accept: "#fruitIcon",
        drop: foodDropEvent
    });
    $('#vegempty').droppable({
        accept: "#vegIcon",
        drop: foodDropEvent
    });
    $('#grainempty').droppable({
        accept: "#grainIcon",
        drop: foodDropEvent
    });
    $('#proteinempty').droppable({
        accept: "#proteinIcon",
        drop: foodDropEvent
    });
}

function foodDropEvent(evt, ui) {
    let foodDropEvt = evt;
    let selectedFood = ui.draggable.attr('id');
    console.log('event occurred: ' + foodDropEvt + ": " + selectedFood);
    diaryUpdate(selectedFood);
}

function updateImages(user) {
    console.log("updateImages called");
    if(user.userStatus[0].fruit.met === "true") {
        console.log("met fruit");
        loadImage('fruitempty', 'fruit-full.png');
    }
    if(user.userStatus[1].protein.met === "true") {
        console.log("met protein");
        loadImage('proteinempty', 'protein-full.jpg');
    }
    if(user.userStatus[2].veg.met === "true") {
        console.log("met veg");
        loadImage('vegempty', 'veg-full.jpg');
    }
    if(user.userStatus[3].grain.met === "true") {
        console.log("met grain");
        loadImage('grainempty', 'grain-full.png');
    }
}

function loadImage(origImg, newImg) {
    document.getElementById(origImg).src = "assets/images/plateImages/" + newImg;
}

function foodGroupMet(group) {
   DOMnodes.statusDiv.innerHTML = `<p>You have eaten all the ${group} you need to eat today!</p>`;
}

function updateStatusMessage(group, index, amount, quantity) {
    DOMnodes.statusDiv.innerHTML = `<p>You have eaten ${quantity} ${amount} of ${group}. You need to eat more.</p>`;
    console.table(FoodPlate.user.userStatus);
}

function diaryUpdate(foodAdded) {
    console.log('%cdiary update function called', 'color:green');
    let measure;
    //if you added fruit
    if (foodAdded === "fruitIcon") {
        measure = "cup";
        console.log('user ate fruit');
        //if you haven't eaten any fruit yet
        if (FoodPlate.user.userStatus[0].fruit.eaten === 0) {
            //console.log(localStorage.getItem('fruits'));
            FoodPlate.user.userStatus[0].fruit.eaten = 1;
            FoodPlate.user.userStatus[0].fruit.left = Number(FoodPlate.user.userReq.fruit) - Number(FoodPlate.user.userStatus[0].fruit.eaten);
            FoodPlate.user.userStatus[0].fruit.met = 'false';
            DOMnodes.statusDiv.classList.remove('visually-hidden');
            updateStatusMessage('fruit', 0, measure, FoodPlate.user.userStatus[0].fruit.eaten);
        }
        else {
            FoodPlate.user.userStatus[0].fruit.eaten++;
            FoodPlate.user.userStatus[0].fruitLeft = FoodPlate.user.userReq.fruit - FoodPlate.user.userStatus[0].fruit.eaten;
            FoodPlate.user.userStatus[0].fruit.met = false;
            if (Number(FoodPlate.user.userStatus[0].fruit.eaten) < Number(FoodPlate.user.userReq.fruit)) {
                DOMnodes.statusDiv.classList.remove('visually-hidden');
                updateStatusMessage('fruit', 0, measure, FoodPlate.user.userStatus[0].fruit.eaten);
            }
            else {
                DOMnodes.statusDiv.classList.remove('visually-hidden');
                foodGroupMet('fruit')
                FoodPlate.user.userStatus[0].fruit.met = 'true';
                console.log("ate all your fruit");
                loadImage('fruitempty', 'fruit-full.png');
            }
        }
    }
//if you added protein
    if (foodAdded === "proteinIcon") {
        measure = "cup";
        console.log('user ate protein');
        //if you haven't eaten any protein yet
        if (FoodPlate.user.userStatus[1].protein.eaten === 0) {
            FoodPlate.user.userStatus[1].protein.eaten = 1;
            FoodPlate.user.userStatus[1].protein.left = Number(FoodPlate.user.userReq.protein) - Number(FoodPlate.user.userStatus[1].protein.eaten);
            FoodPlate.user.userStatus[1].protein.met = 'false';
            DOMnodes.statusDiv.classList.remove('visually-hidden');
            updateStatusMessage('protein', 1, measure, FoodPlate.user.userStatus[1].protein.eaten);
        }
        else {
            FoodPlate.user.userStatus[1].protein.eaten++;
            FoodPlate.user.userStatus[1].proteinLeft = FoodPlate.user.userReq.protein - FoodPlate.user.userStatus[1].protein.eaten;
            FoodPlate.user.userStatus[1].protein.met = false;
            if (Number(FoodPlate.user.userStatus[1].protein.eaten) < Number(FoodPlate.user.userReq.protein)) {
                DOMnodes.statusDiv.classList.remove('visually-hidden');
                updateStatusMessage('protein', 1, measure, FoodPlate.user.userStatus[1].protein.eaten);
            }
            else {
                DOMnodes.statusDiv.classList.remove('visually-hidden');
                foodGroupMet('protein')
                FoodPlate.user.userStatus[1].protein.met = 'true';
                console.log("ate all your protein");
                loadImage('proteinempty', 'protein-full.jpg');
            }
        }
    }
    //if you added veg
    if (foodAdded === "vegIcon") {
        measure = "cup";
        console.log('user ate veg');
        //if you haven't eaten any veg yet
        if (FoodPlate.user.userStatus[2].veg.eaten === 0) {
            FoodPlate.user.userStatus[2].veg.eaten = 1;
            FoodPlate.user.userStatus[2].veg.left = Number(FoodPlate.user.userReq.veg) - Number(FoodPlate.user.userStatus[2].veg.eaten);
            FoodPlate.user.userStatus[2].veg.met = 'false';
            DOMnodes.statusDiv.classList.remove('visually-hidden');
            updateStatusMessage('veg', 2, measure, FoodPlate.user.userStatus[2].veg.eaten);
        }
        else {
            FoodPlate.user.userStatus[2].veg.eaten++;
            FoodPlate.user.userStatus[2].vegLeft = FoodPlate.user.userReq.veg - FoodPlate.user.userStatus[2].veg.eaten;
            FoodPlate.user.userStatus[2].veg.met = false;
            if (Number(FoodPlate.user.userStatus[2].veg.eaten) < Number(FoodPlate.user.userReq.veg)) {
                DOMnodes.statusDiv.classList.remove('visually-hidden');
                updateStatusMessage('veg', 2, measure, FoodPlate.user.userStatus[2].veg.eaten);
            }
            else {
                DOMnodes.statusDiv.classList.remove('visually-hidden');
                foodGroupMet('veg')
                FoodPlate.user.userStatus[2].veg.met = 'true';
                console.log("ate all your veg");
                loadImage('vegempty', 'veg-full.jpg');
            }
        }
    }
    //if you added grain
    if (foodAdded === "grainIcon") {
        measure = "cup";
        console.log('user ate grain');
        //if you haven't eaten any grain yet
        if (FoodPlate.user.userStatus[3].grain.eaten === 0) {
            FoodPlate.user.userStatus[3].grain.eaten = 1;
            FoodPlate.user.userStatus[3].grain.left = Number(FoodPlate.user.userReq.grain) - Number(FoodPlate.user.userStatus[3].grain.eaten);
            FoodPlate.user.userStatus[3].grain.met = 'false';
            DOMnodes.statusDiv.classList.remove('visually-hidden');
            updateStatusMessage('grain', 3, measure, FoodPlate.user.userStatus[3].grain.eaten);
        }
        else {
            FoodPlate.user.userStatus[3].grain.eaten++;
            FoodPlate.user.userStatus[3].grainLeft = FoodPlate.user.userReq.grain - FoodPlate.user.userStatus[3].grain.eaten;
            FoodPlate.user.userStatus[3].grain.met = false;
            if (Number(FoodPlate.user.userStatus[3].grain.eaten) < Number(FoodPlate.user.userReq.grain)) {
                DOMnodes.statusDiv.classList.remove('visually-hidden');
                updateStatusMessage('grain', 3, measure, FoodPlate.user.userStatus[3].grain.eaten);
            }
            else {
                DOMnodes.statusDiv.classList.remove('visually-hidden');
                foodGroupMet('grain')
                FoodPlate.user.userStatus[3].grain.met = 'true';
                console.log("ate all your grain");
                loadImage('grainempty', 'grain-full.png');
            }
        }
    }
    storeUserData(FoodPlate.user);
}

export { diaryUpdate, activateFoodIcons, updateImages }
