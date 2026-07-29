// Leap year calculator 

function isLeapYear (year) {
    if (year%400 == 0 || (year % 4 == 0 && year % 100 != 0)){
        return `${year} is a leap year.`;
    }else {
        return `${year} is not a leap year.`;
    }

}

const result = isLeapYear(2005);
console.log(result);