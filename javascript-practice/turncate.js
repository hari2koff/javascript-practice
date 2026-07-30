// Turncate string lab 
function truncateString (stringForTurncate,number) {
     const lenOfString = stringForTurncate.length;
    if ( lenOfString > number) {
        const stringForRemaining = stringForTurncate.slice(0,number);
        return `${stringForRemaining}...`;

    }else {
        return stringForTurncate;
    }

}
console.log(truncateString("Peter Piper picked a peck of pickled peppers",11));