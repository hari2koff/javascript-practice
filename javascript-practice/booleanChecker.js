function booWho(x){
    if (typeof x === typeof true){
        return true;
    }else {
        return false;
    }

}






console.log(booWho(1));
console.log(booWho(""));
console.log(booWho(false));