/*
In this lab, we will create two different stories using a sentence template.
we will use variables to store different parts of the story and then output
the stories to the console.
*/

// First set of adjectives,...,noun2

let adjective = "tiny";
let noun = "dragon";
let verb = "dance";
let place = "forest";
let adjective2 = "sparkly";
let noun2 = "cookies";

const firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place +" and had " + adjective2 + " nostrils that blew fire when it was "+ verb +".";
console.log("First story: "+ firstStory);

//second set of adjective...

adjective = "grumpy";
noun = "wizard";
verb = "juggle";
place = "castle";
adjective2 = "smoky";
noun2 = "pancakes";

const secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";
console.log("Second story: " + secondStory);
