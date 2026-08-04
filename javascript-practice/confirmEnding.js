// Confirm Ending 


function confirmEnding (stringToCheck,stringToCheckAgainst) {
    const len1 = stringToCheck.length ;
    const len2 = stringToCheckAgainst.length ;
    const indexOfTarget = len1 - len2 ;
    if (stringToCheck.substring(indexOfTarget) == stringToCheckAgainst) {
        return true ;
    }else {
        return false ;
    }
    
    
    // used the substring method which exctract the substring from the certain index 

    
    

}



console.log(confirmEnding("Bastian","ian"));