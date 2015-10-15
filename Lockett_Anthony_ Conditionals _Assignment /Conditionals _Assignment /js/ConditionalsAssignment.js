/*
 Anthony Lockett
 SDI Week 3
 Conditional Assignment
 10/12/15
 */

alert("          Here is my Week 3 submission! \n               Conditionals Assignment");
var space = " "
var weeks = [1]
var weeksBetweenPay = true
weeksBetweenPay = confirm("Do you get paid every week? \nPress OK for Yes \nPress CANCEL for No")
console.log("Do you get paid every week:" + space + weeksBetweenPay)

if(weeksBetweenPay === true) {
 var hoursworked = prompt("How many hours do you work in a week?")
 while (hoursworked === "" || isNaN(hoursworked)) {
  if (hoursworked === "") {
   hoursworked = prompt("How many hours do you work in a week?\n**Please Do Not Leave Blank!**")
  } else if (isNaN(hoursworked)) {
   hoursworked = prompt("How many hours do you work in a week?\n** Please Only Use Nnumbers!**")
  }
 }console.log("You've worked" + space + hoursworked + space + "hours in a week!")
} else {
 if (weeksBetweenPay === false) {
  var hoursworked2 = prompt("How many hours do you work in a week?")
  while (hoursworked2 === "" || isNaN(hoursworked2)) {
   if (hoursworked2 === "") {
    hoursworked2 = prompt("How many hours do you work in a week?\n**Please Do Not Leave Blank!**")
   } else if (isNaN(hoursworked2)) {
    hoursworked2 = prompt("How many hours do you work in a week?\n** Please Only Use Nnumbers!**")
   }console.log("You've worked" + space + hoursworked2 + space + "hours in a week!")
  }var hoursworked3 = Number(hoursworked2)
  console.log("You've worked" + space + hoursworked2 + space + "hours in a week!")
 }
}