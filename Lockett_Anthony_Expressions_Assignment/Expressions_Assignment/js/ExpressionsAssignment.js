/*
 Anthony Lockett
 SDI Week 2
 Expressions Assignment
 10/5/15
 */

alert("          Here is my Week 2 submission! \n                Expressions Assignment");// Just a friendly alert that I added.

var space = " ";// This variable helps me make spaces in my strings easier.
var weeks = [1,2];// This variable is an array holds the number of weeks in between paychecks.
var hoursworked = prompt("How many hours do you work in a week?");// This variable is a prompt that is asking for the number of hours the user has worked in a week.
console.log("You've worked" + space + hoursworked + space + "in a week!");// This outputs the user's input to the console.
var numofweeks = prompt("How many weeks in between pay checks? \nEnter '1' for one week. \nEnter '2' for two weeks");// This variable is a prompt that is asking for the number of weeks between paychecks.
console.log("Weeks between your pay checks:" + space + numofweeks);// This outputs the user's input to the console.
var A = numofweeks * weeks[0];// This variable multiplies the user's input by the first index in the array.
var B = numofweeks * weeks[1];// This variable multiplies the user's input by the second index in the array.
var hoursA = A * hoursworked;// This variable multiplies variable "A" by the variable "hoursworked.
var hoursB = B * hoursworked;// This variable multiplies variable "B" by the variable "hoursworked.

if(numofweeks <= weeks[1]){// This if/else statement states if the "numofweeks" variable is less than or equal to the "Weeks[1]" array index then run the following code.
    console.log("Hours you worked this pay period:" + space + hoursA);// This outputs only if the "if" is true, to the console.
}else{// This "else" of this if/else statement states that if the "numofweeks" variable is not less than or equal to the "Weeks[1]" array index then run the following code
    console.log("Hours you worked this pay period:" + space + hoursB);// This outputs only if the "if" is false, to the console.
}
var payrate = prompt("Next, what is your hourly pay rate? \n *Please only use numbers*");// This variable is a prompt that is asking for how much the user gets paid by the hour.
console.log("Your wage is $" + payrate + space + "an hour!");// This outputs the user's input to the console.
alert("Now lets calculate your next paycheck!");// This alert playfully lets the user know what is going on.
alert("Almost done!");// This alert playfully lets the user know what is going on.
if(numofweeks <= weeks[1]){// This if/else statement states if the "numofweeks" variable is less than or equal to the "Weeks[1]" array index then run the following code.
    var paycheck1 = payrate * hoursA;// This variable multiplies the user's input by the variable "hoursA".
    alert("Your gross income on your next paycheck will be $" + paycheck1 + "!" + "\n                 Don't spend it all in one place!");// This alert playfully lets the user know the gross income the user can expect on their next paycheck.
    console.log("Your gross income on your next paycheck will be $" + paycheck1);// This outputs the gross income the user can expect on their next paycheck, to the console.
}else{// This "else" of this if/else statement states that if the "numofweeks" variable is not less than or equal to the "Weeks[1]" array index then run the following code.
    var paycheck2 = payrate * hoursB;// This variable multiplies the user's input by the variable "hoursA".
    alert("Your gross income on your next paycheck will be $" + paycheck2 + "!" + "\n                 Don't spend it all in one place!");// This alert playfully lets the user know the gross income they can expect on their next paycheck.
    console.log("Your gross income on your next paycheck will be $" + paycheck2);// This outputs the gross income the user can expect on their next paycheck, to the console.
}
