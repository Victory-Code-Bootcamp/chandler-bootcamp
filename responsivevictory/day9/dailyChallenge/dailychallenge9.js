// Challenge One
// Create a prompt asking for their name
// Create a Switch statement with 3 different cases, one of those cases should include the expected value
// Use an alert() as the result for each case
// let name = prompt("Give me your name:");
// switch (name){
//     case 'Chandler':
//         console.log("Your name is Chandler");
//         break;
//     case 'Victor':
//     case 'Stephen':
//         console.log('Your name is Victor and Stephen');
//     break;
//     default:
//         console.log('Sorry you dont have a name ${name}.');
// }
// Challenge Two
// Create a prompt asking for their age and store the result in a variable
// Write a function that takes the prompt result as a argument and returns ternary expression with a boolean depending if their age is less than or equal to 18
// let age = prompt("Whats your age again?");
// let fun = (ageOfPerson) => ageOfPerson <= 18 ? 'no beer': 'beer';
// console.log(fun(age));

// Challenge Three
// You are given a string of characters. Write a function that takes the string as an arguments and returns the codes below using if/else if statement
//     AA if chars is greater than 15
//     AB if chars is greater than 13 and less than or equal to 15
//     BB if chars is greater than 10 and less than or equal to 13
//     BC if chars is greater than 7 and less than or equal to 10
//     CC if chars is greater than 5 and less than or equal to 7
//     DD if chars is less than or equal to 5
// let characters = "abc";
// let codedletter = (str) => {
//     if (str.length >= 15){
//         console.log("AA");
//     }
//     if (str.length >= 13 && str.length  <= 15){
//         console.log("AB");
//     }
//     if (str.length >= 10 && str.length  <= 13){
//         console.log("BB");
//     }
//     if (str.length >= 7 && str.length  <= 10){
//         console.log("BC");
//     }
//     if (str.length >= 5 && str.length  <= 7){
//         console.log("CC");
//     }
//     if (str.length  <= 5){
//         console.log("DD");
//     }
// }
// codedletter(characters);

// let codedletter2 = (str) =>
//   str.length >= 15
//     ? "AA"
//     : str.length >= 13 && str.length <= 15
//     ? "AB"
//     : str.length >= 10 && str.length <= 13
//     ? "BB"
//     : str.length >= 7 && str.length <= 10
//     ? "BC"
//     : str.length >= 5 && str.length <= 7
//     ? "CC"
//     : "DD";
// console.log(codedletter2(characters));

// Challenge Four
// In this challenge you will be writing code to create functions capable of different arithmetic operations
//     Write an add function that returns the result of num1 plus num2
//     Write a subtract function that returns the result of num1 minus num2
//     Write a multiply function that returns the result of num1 times num2
//     Write a divide function that returns the result of num1 divided num2
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

console.log(add(3, 4));
console.log(subtract(8, 7));
console.log(multiply(3, 3));
console.log(divide(6, 2));
