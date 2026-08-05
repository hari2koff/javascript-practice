// lunch picker
const lunches = [];

function addLunchToEnd (lunchArray,itemToAdd) {
    lunchArray.push(itemToAdd);
    console.log(`${itemToAdd} added to the end of the lunch menu.`);
    return lunchArray ;
}

function addLunchToStart (lunchArray,itemToAdd) {
    lunchArray.unshift(itemToAdd);
    console.log(`${itemToAdd} added to the start of the lunch menu.`);
    return lunchArray;
}
// issueToFix - add a logic if no luches are in the array.
function removeLastLunch (lunchArray) {
    let itemRemoved = lunchArray[-1];
    lunchArray.pop();
    console.log(`${itemRemoved} removed from the end of the lunch menu.`);
    return lunchArray;
}

function removeFirstLunch (lunchArray) {
    let itemRemoved = lunchArray[0];
    lunchArray.shift();
    console.log(`${itemRemoved} removed from the start of the lunch menu.`);
    return lunchArray;
}

function getRandomLunch (lunchArray) {
    if (lunchArray.length == 0){
        return "No lunches available.";
    }
    let randomNum =  Math.floor(Math.random()*lunchArray.length );
    let randomLunch = lunchArray[randomNum];
    console.log(`Randomly selected lunch: ${randomLunch}`);
}

function showLunchMenu (lunchArray) {
    if (lunchArray.length == 0) {
        console.log("The menu is empty.");
    }else {
        console.log(`Menu items: ${lunchArray}`);
    }
}