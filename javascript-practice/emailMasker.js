// Email masker - C**********L@example.com
function emailMasker (email) {
    let maskIndex = email.indexOf("@") - 1;
    let maskString = email.slice(1,maskIndex);
    let maskLength = maskString.length;
    
    


    return email.replace(maskString,"*".repeat(maskLength));

}

const email = "google@gmail.com";
console.log(emailMasker(email));
const email1 = "hari2koff@gmail.com";
console.log(emailMasker(email1));