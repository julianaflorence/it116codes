console.log("Hello World");

let randomNumber = Math.random(); //0.0-1

if (randomNumber < 0.50) {

    console.log("Condition was Met");
    console.log(randomNumber);

}

// 
if (randomNumber >= 0.5) {

    console.log('Condition Was Met');
    console.log(randomNumber); 
}
const dayOfWeek = "Friday";

if (dayOfWeek === 'Monday') {
//if else conditions with strict operators// 
    console.log("Yay it's monday ");
} else if (dayOfWeek === 'Friday') {
    console.log('yay its friday'); 
} else if (dayOfWeek === 'Saturday') {
    console.log("you have the correct day of the week from the variable");
}
//we are creating an application that responds to the conditions of "age"//
 const age = prompt("enter an age")
 if (age < 5) {
     console.log("hey, you're a wittle baby");
 } else if (age < 10) {
     console.log("hey, you're just a kiddo");
 } else if (age < 35) {
     console.log("hey, you're getting older");
 }
 //what if youre 36? if all other conditions fail, we use else//
else {
    console.log("you're over the age of 35"); 
}
//switch statements, a cleaner way to write code. still takes an argument, but with 
//case statements//

const fruit = "Apples";
switch (fruit) {

    case 'oranges';
        console.log("oranges are 50 cents a pound");
        break; 
     case 'pomegrantes';
        console.log("these are 5 bucks a pound");
        break;
     case 'papayas';
        console.log("papayas are 90 cents a pound");
        break;
    //break statements if all conditions fail. it breaks out of the loop of the switch statement
    //
    
}
//nested conditions, a condition runs if the first passes//

const password = prompt("enter a password");
if (password.length >= 6) {
    //if the 6 letter password has a space (nested condition), looks through the  string to see if theres an error ( a lblank space)//
    if (password.indexOf(' ') === -1) {
        console.log("valid password");
        
    }
}
