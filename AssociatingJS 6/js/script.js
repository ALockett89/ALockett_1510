/*
 Anthony Lockett
 SDI Week 3
 Expressions Assignment
 8/17/15
 */


alert("          Here is my Week 3 submission! \n               Conditionals Assignment");// Just a friendly alert that I added.
var space = " ";// This variable helps me make spaces in my strings easier.
var weeks = [1];// This variable is an array holds the number of weeks in between paychecks.
var weeksBetweenPay = true;
weeksBetweenPay = confirm("Do you get paid every week? \nPress OK for Yes \nPress CANCEL for No");
console.log("Do you get paid every week:" + space + weeksBetweenPay);
if(weeksBetweenPay === true) {
    var hoursworked = prompt("How many hours do you work in a week?");// This variable is a prompt that is asking for the number of hours the user has worked in a week.
    while (hoursworked === "" || isNaN(hoursworked)) {
        if (hoursworked === "") {
            hoursworked = prompt("How many hours do you work in a week?\n**Please Do Not Leave Blank!**");// This variable is a prompt that is asking for the number of hours the user has worked in a week.
        } else if (isNaN(hoursworked)) {
            hoursworked = prompt("How many hours do you work in a week?\n** Please Only Use Nnumbers!**");// This variable is a prompt that is asking for the number of hours the user has worked in a week.
        }
    }console.log("You've worked" + space + hoursworked + space + "hours in a week!");// This outputs the user's input to the console.
} else {
    if (weeksBetweenPay === false) {
        var hoursworked2 = prompt("How many hours do you work in a week?");// This variable is a prompt that is asking for the number of hours the user has worked in a week.
        while (hoursworked2 === "" || isNaN(hoursworked2)) {
            if (hoursworked2 === "") {
                hoursworked2 = prompt("How many hours do you work in a week?\n**Please Do Not Leave Blank!**");// This variable is a prompt that is asking for the number of hours the user has worked in a week.
            } else if (isNaN(hoursworked2)) {
                hoursworked2 = prompt("How many hours do you work in a week?\n** Please Only Use Nnumbers!**");// This variable is a prompt that is asking for the number of hours the user has worked in a week.
            }console.log("You've worked" + space + hoursworked2 + space + "hours in a week!");// This outputs the user's input to the console.
        }var hoursworked3 = Number(hoursworked2);
        console.log("You've worked" + space + hoursworked2 + space + "hours in a week!");// This outputs the user's input to the console.
    }
}
if(weeksBetweenPay === true) {
    var dollarsbyhours = prompt("How much do you make an hour?");
    while (dollarsbyhours === "" || isNaN(dollarsbyhours)) {
        if (dollarsbyhours === "") {
            dollarsbyhours = prompt("How much do you make an hour?\n**Please Do Not Leave Blank!**")
        } else if (isNaN(dollarsbyhours)) {
            dollarsbyhours = prompt("How much do you make an hour?\n** Please Only Use Nnumbers!**")
        }
    } var gross1 = weeks[0] * hoursworked * dollarsbyhours;
    console.log("You make $" + dollarsbyhours + space + "an hour!");
    console.log("Your GROSS income is $" + gross1 + "!")
} else {
    if (weeksBetweenPay === false) {
        var dollarsbyhours2 = prompt("How much do you make an hour?");
        while (dollarsbyhours2 === "" || isNaN(dollarsbyhours2)) {
            if (dollarsbyhours2 === "") {
                dollarsbyhours2 = prompt("How much do you make an hour?\n**Please Do Not Leave Blank!**")
            } else if (isNaN(dollarsbyhours2)) {
                dollarsbyhours2 = prompt("How much do you make an hour?\n** Please Only Use Nnumbers!**")
            }
        }
        var gross2 = (hoursworked3 + hoursworked3) * dollarsbyhours2;
        console.log("You make $" + dollarsbyhours2 + space + "an hour!");
        console.log("Your GROSS income is $" + gross2 + "!")
    }
}
var taxes = true;
taxes = confirm("Do you pay taxes in Louisiana? \nPress OK for Yes \nPress CANCEL for No");
console.log("Do you pay taxes in Louisiana:" + space + taxes);
if(taxes === true) {
    if(weeksBetweenPay === true){
        var LAtax = .9;
        var taxestrue = gross1 * LAtax;
        alert("Your NET pay is $" + taxestrue + "!");
        console.log("Your NET pay is $" + taxestrue + "!")
    } else {
        var LAtax = .9;
        var taxestrue = gross2 * LAtax;
        alert("Your NET pay is $" + taxestrue + "!");
        console.log("Your NET pay is $" + taxestrue + "!")
    }
} else {
    if (weeksBetweenPay === true) {
        alert("Depending on where you live, your NET pay will be less then $" + gross1 + "!");
        console.log("Depending on where you live, your NET pay will be less then $" + gross1 + "!")
    } else {
        alert("Depending on where you live, your NET pay will be less then $" + gross2 + "!");
        console.log("Depending on where you live, your NET pay will be less then $" + gross2 + "!")
    }
}
