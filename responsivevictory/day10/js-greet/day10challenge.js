// Write an arrow function greet that takes the current hour (0-23) and
//  returns a greeting string using a ternary operator. Greet "Good morning" if before 12,
// "Good afternoon" if before 18, and "Good evening" otherwise. Account for any edge cases that you could think of.
// let num1 = 20;
// let time = (num1) =>
//   num1 < 12
//     ? "Good Morning"
//     : num1 < 18 && num1 > 12
//     ? "Good Afternoon"
//     : "Good Evening";
// console.log(time(num1));

// Write an arrow function calculateDiscount that takes the order amount and applies a 10% discount
//  if the order is over $100, otherwise 5%, using a ternary operator
// let orderAmount = 110;
// let calculateDiscout = (orderAmount) =>
//   orderAmount > 100
//     ? orderAmount - orderAmount * 0.1
//     : orderAmount - orderAmount * 0.05;
// console.log(calculateDiscout(orderAmount));

// Write an arrow function toggle that takes a boolean value and
//  returns its opposite using a ternary operator.
let statement = true;
let statement2 = false;
let toggle = (statement) => (statement ? false : true);
console.log(toggle(statement));
console.log(toggle(statement2));
