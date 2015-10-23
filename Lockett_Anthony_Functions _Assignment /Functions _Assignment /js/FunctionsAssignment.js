/*
 Anthony Lockett
 SDI Week 4
 Functions Assignment
 10/19/15
 */

alert("          Here is my Week 4 submission! \n               Functions Assignment");// Just a friendly alert that I added.

var age = 21;// The legal age to gamble.
var space = " ";// A variable that helps me make spaces.
function ageplease(){// This function asks for the users age.
    var ageprompt = prompt("Please Enter Your Age!");
    while(ageprompt==="" || isNaN(ageprompt)){
        if(ageprompt===""){
            ageprompt= prompt("**PLEASE DO NOT LEAVE BLANK**\nPlease Enter Your Age!")
        }else if(isNaN(ageprompt)){
            ageprompt = prompt("**ONLY USE NUMBERS**\nPlease Enter Your Age!")
        }
    }return ageprompt
}
console.log("User's age is" + space + findage + "!");
function canyouplay() {// This function verifies that the user is able to play a lottery.
    if (findage < age) {
        alert("Sorry, come back when you are older");
        console.log("User is under the age of" + space + age + "!")
    } else {
        var ageprompt2 = true;
        alert("Welcome!\nNow lets pick a lottery!");
        console.log("User is over the age of" + space + age + "!")
    }return ageprompt2
}
console.log("Is the user old enough to play:" + space + findage2);
function whichlotto(){// This function helps the user decide which lottery they wan to play.
    if (findage2 === true){
        var lottoprompt = prompt("Which lottery are you playing?\nEnter '1' for Florida Lottery.\nEnter '2' for Powerball Lottery");
        while(lottoprompt==="" || isNaN(lottoprompt)){
            if(lottoprompt===""){
                lottoprompt= prompt("**PLEASE DO NOT LEAVE BLANK**\nWhich lottery are you playing?\nEnter '1' for Florida Lottery.\nEnter '2' for Powerball Lottery")
            }else if(isNaN(lottoprompt)){
                lottoprompt = prompt("**ONLY USE NUMBERS**\nWhich lottery are you playing?\nEnter '1' for Florida Lottery.\nEnter '2' for Powerball Lottery")
            }
        }
        if (lottoprompt < 2){
            var lottoprompt2 = 1;
            alert("OK, you have chosen to play the Florida Lottery!\nLet's Begin!");
            console.log("User has chosen to play the Florida Lottery!")
        }else{
            var lottoprompt2 = 2
            alert("OK, you have chosen to play the Powerball Lottery!\nLet's Begin!");
            console.log("User has chosen to play the Powerball Lottery!")
        }
    }return lottoprompt2
}
