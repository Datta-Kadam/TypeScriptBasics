// // Exercise 1 - Maybe use an Arrow Function?
// // var double = function(value) {
// //     return value * 2;
// // };
// const double = (value:number):number => value*2;
// console.log(double(10));
// // Exercise 2 - If only we could provide some default values...
// // const greet = function (name:string = 'Datta') {
// //   //  if (name === undefined) { name = "Max"; }
// //     console.log("Hello, " + name);
// // };
// const greet = (name:string = 'Datta') =>  console.log("Hello, " + name);
// greet();
// greet("Anna");
// // Exercise 3 - Isn't there a shorter way to get all these Values?
// const numbers = [-3, 33, 38, 5];
// console.log(Math.min(...numbers));
// // Exercise 4 - I have to think about Exercise 3 ...
// const newArray = [55, 20];
// // Array.prototype.push.apply(newArray, numbers);
// console.log(...newArray,...numbers);
// // Exercise 5 - That's a well-constructed array.
// const testResults = [3.89, 2.99, 1.38];
// // var result1 = testResults[0];
// // var result2 = testResults[1];
// // var result3 = testResults[2];
// const [ result1, new3, new4] = testResults;
// console.log(result1, new3, new4);
// // Exercise 6 - And a well-constructed object!
// const {firstName,experience} = {firstName: "Will", experience: 12};
// // var firstName = scientist.firstName;
// // var experience = scientist.experience;
// console.log(firstName,experience);
