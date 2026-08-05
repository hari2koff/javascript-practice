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

