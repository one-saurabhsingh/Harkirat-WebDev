// console.log("Hello, World!");

// let a = 5;
// a = 10;
// console.log(a);


// let firstName = "John";
// let lastName = "Doe";
// let age = 30;
// let isEmployed = true;

// console.log("First Name of person is:"+ firstName + ", Last Name of person is: " + lastName + ", Age of person is: " + age + ", Is person employed? " + isEmployed);

// let a = 0;
// for(let i =0; i<=100; i++){
//     a += i;
// }

// console.log("Sum of numbers from 0 to 100 is: " + a);


// const allStudents = [{
//     name: "Saurabh",
//     gender: "M",
//     age: 21,
// }, {
//     name: "Piyush",
//     gender: "M",
//     age: 22,
// }, {
//     name: "Ronit",
//     gender: "M",
//     age: 23,
// }, {
//     name: "Anushka",
//     gender: "F",
//     age: 21
// }]

// for(let i = 0; i < allStudents.length; i++) {
//     if(allStudents[i]["gender"] === "F") {
//         console.log(allStudents[i]["name"])
//     }
// }

// Funtions

// function sum(a, b) {
//     return a + b;
// }

// const value = sum(5, 10);
// console.log(value);

// Funtion to call

// function sum (a, b, callback) {
//     let res = a + b;
//     callback(res);
// }

// function displaySum(val) {
//     console.log("The sum is: " + val);
// }

// function displaySumPassively(val) {
//     console.log("Sum's result is: " + val);
// }

// const ans = sum(5, 10, displaySum); // Callback function : passes func as an argument.

// function greet(){
//     console.log("Hello, Saurabh!");
// }

// setInterval(greet, 2000); // This will call the greet function after 2 seconds

// const start = performance.now();

// setTimeout(() => {
//   const end = performance.now();
//   const elapsed = end - start;
//   console.log(`Scheduled delay: 1000ms`);
//   console.log(`Actual delay: ${elapsed.toFixed(2)}ms`);
// }, 1000); // 1000ms = 1 second

function displayClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  // Clear the terminal and print the current time
  console.clear();
  console.log("🕒 Terminal Clock");
  console.log("------------------");
  console.log(`     ${timeString}`);
}

// Update clock every second
setInterval(displayClock, 1000);

// Call it immediately once
displayClock();
