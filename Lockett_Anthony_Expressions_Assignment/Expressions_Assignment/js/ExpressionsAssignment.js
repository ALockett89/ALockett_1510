/*
 Anthony Lockett
 SDI Week 2
 Expressions Assignment
 10/5/15
 */

alert("          Here is my Week 2 submission! \n                Expressions Assignment");

var space = " "
var weeks = [1,2]
var hoursworked = prompt("How many hours do you work in a week?")
console.log("You've worked" + space + hoursworked + space + "in a week!")
var numofweeks = prompt("How many weeks in between pay checks? \nEnter '1' for one week. \nEnter '2' for two weeks")
console.log("Weeks between your pay checks:" + space + numofweeks)
var A = numofweeks * weeks[0]
var B = numofweeks * weeks[1]
var hoursA = A * hoursworked
var hoursB = B * hoursworked
