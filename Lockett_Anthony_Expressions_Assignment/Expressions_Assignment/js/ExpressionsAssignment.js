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

if(numofweeks <= weeks[1]){
    console.log("Hours you worked this pay period:" + space + hoursA)
}else{
    console.log("Hours you worked this pay period:" + space + hoursB)
}
var payrate = prompt("Next, what is your hourly pay rate? \n *Please only use numbers*")
console.log("Your wage is $" + payrate + space + "an hour!")
alert("Now lets calculate your next paycheck!")
alert("Almost done!")
if(numofweeks <= weeks[1]){
    var paycheck1 = payrate * hoursA
    alert("Your gross income on your next paycheck will be $" + paycheck1 + "!" + "\n                 Don't spend it all in one place!")
    console.log("Your gross income on your next paycheck will be $" + paycheck1)
}else{
    var paycheck2 = payrate * hoursB
    alert("Your gross income on your next paycheck will be $" + paycheck2 + "!" + "\n                 Don't spend it all in one place!")
    console.log("Your gross income on your next paycheck will be $" + paycheck2)
}