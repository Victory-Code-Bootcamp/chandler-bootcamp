// Challenge 1:
//     Write a function that takes two numbers as parameters and returns the larger one.
// let larger = (num1, num2) => (num1 > num2 ? num1 : num2);
// console.log(larger(10, 9));

// Challenge 2:
//     Write a function that takes two numbers as parameters and
// returns true if the first number is divisible by the second number, and false otherwise.
// let divis = (num1, num2) => (num1 % num2 === 0 ? false : true);
// console.log(divis(2, 10));

// Challenge 3:
//     Declare a variable called birthday that looks like this: const birthday = new Date('August 19, 1975 23:15:30');
//     Use the getDay() method to create a variable that keeps track of the day of your birthday
//     Write a switch statement using the day of your birthday variable that will cover all cases from Monday thru Friday, console log the day of the week in a string
// const birthday = new Date("August 19, 1975 23:15:30");
// const day1 = birthday.getDay();
// switch (day1) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//   case 5:
//     console.log("Friday");
//   default:
//     console.log(undefined);
// }
// Challenge 4:

//     You're tasked with writing a function calculateSum that calculates the sum of two input numbers, a and b, and returns the result. However, the function should handle the following edge cases:
//    If either a or b is not a number, the function should return an error message "Please provide valid numbers".
//    If either a or b is undefined, the function should use a default value of 0.
//    If either a or b is null, the function should use a default value of 0.
//    If either a or b is a floating-point number, the function should round it to the nearest integer before performing the calculation.
//    If the sum of a and b is greater than 100, the function should return an error message "Sum is too large"
let calculateSum = (a, b) => {
  a = a === undefined || a === null ? 0 : a;
  b = b === undefined || b === null ? 0 : b;

  if (typeof a !== "number" || typeof b !== "number") {
    return "please provide valid numbers";
  }
  a = Math.round(a);
  b = Math.round(b);

  const sum = a + b;
  if (sum > 100) {
    return "sum is too large";
  }
  return sum;
};
console.log(calculateSum(20, 30));
console.log(calculateSum(10.5, 11.5));
console.log(calculateSum(10.1, 11.1));
console.log(calculateSum(10, null));
console.log(calculateSum(undefined, 10));
console.log(calculateSum("a", 10));
console.log(calculateSum(1, 100));
