// -------------! CODING CHALLENGE 1 -----------!

/*
let MarksWeight = 78;
let MarksHeight = 1.69;

let JohnsWeight = 92;
let JohnsHeight = 1.95;

let MarksBMI = MarksWeight / MarksHeight ** 2;
let JohnsBMI = JohnsWeight / JohnsHeight ** 2;
console.log(MarksBMI, JohnsBMI);
let HigherBMI = MarksBMI < JohnsBMI;
console.log(HigherBMI);
*/

// -----------! CODING CHALLENGE 2 -------------!

/*
let MarksWeight = 78;
let MarksHeight = 1.69;

let JohnsWeight = 92;
let JohnsHeight = 1.95;

let MarksBMI = MarksWeight / MarksHeight ** 2;
let JohnsBMI = JohnsWeight / JohnsHeight ** 2;

if (MarksBMI > JohnsBMI) {
  console.log(`Marks BMI ${MarksBMI} is higher than Johns ${JohnsBMI} BMI`);
} else {
  console.log(`Johns BMI ${JohnsBMI} is higher than Johns ${MarksBMI} BMI`);
}
*/

// -------------! ASSIGNMENT 1 BACKEND ------------!

/*
let FirstNumber = +prompt("Enter the First Number");
let SecondNumber = +prompt("Enter the Second Number");
let result;

result = FirstNumber + SecondNumber;
console.log(`The sum of two numbers is ${result}`);
result = FirstNumber - SecondNumber;
console.log(`The difference of two numbers is ${result}`);
result = FirstNumber * SecondNumber;
console.log(`The multiplication of two numbers is ${result}`);
result = FirstNumber / SecondNumber;
console.log(`The division of two numbers is ${result}`);
*/

// let FirstNumber = +prompt("Enter the First Number");
// let SecondNumber = +prompt("Enter the Second Number");
// let operators = prompt(
//   "Enter the Arithmetic operations '+' , '-' , '*' , '/' "
// );
// let result;
// if (operators === "+") {
//   result = FirstNumber + SecondNumber;
//   console.log(`The sum of two numbers is ${result}`);
// }
// if (operators === "-") {
//   result = FirstNumber - SecondNumber;
//   console.log(`The difference of two numbers is ${result}`);
// }

// if (operators === "*") {
//   result = FirstNumber * SecondNumber;
//   console.log(`The multiplication of two numbers is ${result}`);
// }
// if (operators === "/") {
//   result = FirstNumber / SecondNumber;
//   console.log(`The division of two numbers is ${result}`);
// }

// ------------! CODING CHALLENGE 3 -------------!

// let DolphinsScore = (96 + 108 + 89) / 3;
// let KoalasScore = (88 + 91 + 110) / 3;
// if (DolphinsScore > KoalasScore) {
//   console.log(`Dolphins score is ${DolphinsScore} and they won the match`);
// } else if (DolphinsScore < KoalasScore) {
//   console.log(`Koalas score is ${KoalasScore} and they won the match`);
// } else if (DolphinsScore === KoalasScore) {
//   console.log(`Match is been draw between both the teams`);
// }

// ------------! BONUS CHALLENGE 1 ----------!

// let DolphinsScore = (97 + 112 + 101) / 3;
// let KoalasScore = (109 + 95 + 123) / 3;
// let score = 100;
// if (DolphinsScore > KoalasScore && score >= 100) {
//   console.log(`Dolphins score is ${DolphinsScore} and they won the match`);
// } else if (DolphinsScore < KoalasScore && score >= 100) {
//   console.log(`Koalas score is ${KoalasScore} and they won the match`);
// } else if (DolphinsScore === KoalasScore && score >= 100) {
//   console.log(`Match is been draw between both the teams`);
// }

// ------------! BONUS CHALLENGE 2 --------!

// let DolphinsScore = (97 + 112 + 101) / 3;
// let KoalasScore = (109 + 95 + 106) / 3;
// let score = 100;
// if (DolphinsScore > KoalasScore && score >= 100) {
//   console.log(`Dolphins score is ${DolphinsScore} and they won the match`);
// } else if (DolphinsScore < KoalasScore && score >= 100) {
//   console.log(`Koalas score is ${KoalasScore} and they won the match`);
// } else if (DolphinsScore === KoalasScore && score >= 100) {
//   console.log(`Match is been draw between both the teams`);
// }

// ---------! ASSIGNMENT 2 BACKEND -----------!

// let EnterAge = +prompt("Enter your age");

// if (EnterAge >= 18) {
//   console.log(`Your age is ${EnterAge}, so you can give vote`);
// } else if (EnterAge < 1) {
//   console.log("Plz Enter the correct age in integer value");
// } else {
//   console.log(
//     `your age is ${EnterAge} which is less than 18 , you better wait for turning 18 so you can vote`
//   );
// }

// ADDING VALUES BUT THE SUM EQAULS TO 0

// console.log(2 + 2 + -4);

//  ---------! TRADITIONAL FUNCTIONS-------!

// function calculator(FirstNumber, SecondNumber) {
//   let result =
//     ((FirstNumber + SecondNumber) / (FirstNumber - SecondNumber)) *
//       (FirstNumber + SecondNumber) +
//     (FirstNumber - SecondNumber) -
//     FirstNumber * SecondNumber;
//   return result;
// }
// let FinalResult = calculator(
//   +prompt("Enter the First Number"),
//   +prompt("Enter the Second Number")
// );
// console.log(FinalResult);

// ---------! ARROW FUNCTIONS-------!

// let calculator = (FirstNumber, SecondNumber) => {
//   let result = FirstNumber + SecondNumber;
//   return result;
// };
// let FinalResult = calculator(
//   +prompt("Enter the First Number"),
//   +prompt("Enter the Second Number")
// );
// console.log(FinalResult);

// ---------! CODING CHALLENGE 4-------!

// let calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };

// // FOR TEST DATA 1

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins wins the trophy ( ${avgDolphins} VS ${avgKoalas} )`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas wins the trophy ( ${avgKoalas} VS ${avgDolphins} `);
//   } else {
//     console.log("No one wins");
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// // FOR TEST DATA 2

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// -----------! PRACTICING ARRAYS -------!

// let CurrentYear = +prompt("Enter the Current year");
// let BirthYear = +prompt("Enter your birth year");
// function calcAge(CurrentYear, BirthYear) {
//   let age = CurrentYear - BirthYear;
//   if (CurrentYear < BirthYear) {
//     console.log("Invalid Date of Birth");
//   } else {
//     console.log(`Your are ${age} right now`);
//   }
//   let Name = "Ahmaryar khan";
//   let Hobbies = ["Coding", "Exploring"];
//   let Profession = ["Full Stack Developer", "Programmer"];
//   let BioData = `My full name is ${Name} , my hobbies are ${Hobbies} , my profession is ${Profession} , and my age is ${age}`;
//   console.log(BioData);
// }
// calcAge(CurrentYear, BirthYear);

// -------------! CODING CHALLENGE 5------------!

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
// console.log(bills, tip, total);

// ------------! PRACTICING OBJECTS --------!

// let details = {
//   FirstName: "Ahmaryar",
//   LastName: "Khan",
//   Profession: "Programmer",
//   Friends: ["Sabir", "Ahmar"],
//   hasDriversLicense: true,
//   getSummary: function () {
//     return `${this.FirstName} has ${
//       this.Friends.length
//     } friends , and his bestfriend name is called ${
//       this.Friends[0]
//     } and he has ${this.hasDriversLicense ? "a" : "no"} drivers license `;
//   },
// };

// console.log(
//   `${details.FirstName} has ${details.Friends.length} friends, and his bestfriend name is called ${details.Friends[0]}`
// );
// console.log(details.getSummary());

/*
let MarksWeight = 78;
let MarksHeight = 1.69;

let JohnsWeight = 92;
let JohnsHeight = 1.95;

let MarksBMI = MarksWeight / MarksHeight ** 2;
let JohnsBMI = JohnsWeight / JohnsHeight ** 2;

if (MarksBMI > JohnsBMI) {
  console.log(`Marks BMI ${MarksBMI} is higher than Johns ${JohnsBMI} BMI`);
} else {
  console.log(`Johns BMI ${JohnsBMI} is higher than Johns ${MarksBMI} BMI`);
}
*/

// ------------! CODING CHALLENGE 6 --------!

// let MarksData = {
//   Fullname: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// MarksData.calcBMI();
// console.log(MarksData.BMI);

// let JohnsData = {
//   Fullname: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// JohnsData.calcBMI();
// console.log(JohnsData.BMI);

// console.log(
//   `${MarksData.Fullname} BMI is (${MarksData.BMI}) ${
//     MarksData.BMI > JohnsData.BMI ? "higher" : "less"
//   } than ${JohnsData.Fullname} BMI (${JohnsData.BMI})`
// );

// ------------! CODING CHALLENGE 7 --------!

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(calcTip(bills[i]) + bills[i]);
// }
// console.log(bills, tips, totals);

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(
//   `The Bill average is (${calcAverage(
//     bills
//   )}) , The Tips average is (${calcAverage(
//     tips
//   )}) and the Total average is (${calcAverage(totals)})`
// );

"use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order: function (starters, mainCourse) {
//     return [this.starterMenu[starters], [this.mainMenu[mainCourse]]];
//   },
//   orderDelivery: function ({ time, location, mainCourse, starters }) {
//     console.log(
//       `Your order ${this.starterMenu[starters]} and ${this.mainMenu[mainCourse]} will be deliverd to your address ${location} on ${time} pm`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with the ${ing1},${ing2} and ${ing3}`
//     );
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// let keys = Object.keys(restaurant.openingHours);
// console.log(keys);
// let values = Object.values(restaurant.openingHours);
// console.log(values);
// let entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const day of properties) {
//   let open = `We are open on ${properties.length} days: `;
//   open += `${day}`;
//   console.log(open);
// }

// DESTRUCTURING ARRAYS

// let [primary, secondary] = restaurant.categories;
// console.log(primary, secondary);
// [secondary, primary] = [primary, secondary];
// console.log(primary, secondary);

// const [starters, mainCourse] = restaurant.order(2, 1);
// console.log(starters, mainCourse);

// let nested = [2, 4, [6, 5]];
// let [i, j, k] = nested;
// console.log(i, j, k);

// DESTRUCTURING OBJECTS

// restaurant.orderDelivery({
//   time: "7:20",
//   location: "Mir Ahmad Khel",
//   starters: 2,
//   mainCourse: 1,
// });

// SPREAD OPERATOR

// const newMenu = [...restaurant.mainMenu, "Burger", "Biryani"];
// console.log(newMenu);
// const copyMenu = [...restaurant.mainMenu];
// console.log(copyMenu);

// const mainMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(mainMenu);

// const str = "Ahmar";
// const letter = [...str];
// console.log(letter, ...str);

// const ingredients = [
//   prompt("Enter Ingredient One"),
//   prompt("Enter Ingredient Second"),
//   prompt("Enter Ingredient Third"),
// ];
// restaurant.orderPasta(...ingredients);

// const newRestaurant = {
//   ...restaurant,
//   Founder: "Ahmar",
//   location: "Kohat",
//   name: "Al Jaleel Kabab House",
// };
// console.log(newRestaurant);

// REST OPERATOR

// const [mainMenu, ...others] = [...restaurant.mainMenu, restaurant.starterMenu];
// console.log(mainMenu, others);

// const { monday, tuesday, wednesday, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// for (const iterator of restaurant.mainMenu) {
//   console.log(iterator);
// }

// const staff = ["chef", "chef", "manager", "cook", "waiter", "waiter"];
// console.log("Original Array:", staff);

// const staffUnique = [...new Set(staff)];
// console.log("Unique Set:", staffUnique);

// console.log(new Set(staff).size)

// console.log(new Set("Ahmar").size)

// const question = new Map([
//   ["question", "What programming language is the best?"],
//   [1, "c++"],
//   [2, "Java"],
//   [3, "Javascript"],
//   ["correct", 3],
//   [4, "Python"],
//   [true, "Correct"],
//   [false, "Try Again"],
// ]);

// console.log(question);
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }
// const Answer = +prompt("Write options for the correct answer");
// console.log(Answer);
// console.log(question.get(question.get("correct") === Answer));

// let array = [2, 4, 5, 8, 9];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     console.log(`these are ${array[i]} even`);
//   } else {
//     console.log(`these are ${array[i]} odd`);
//   }
// }

// let marks = [300, 400, 500,30,70,110];
// function percentage(marks) {
//   let totalMarks = 600;
//   for (let i = 0; i < marks.length; i++) {
//     let obtainedMarks = marks[i];
//     let per = (obtainedMarks / totalMarks) * 100;
//     console.log(per);
//   }
// }
// percentage(marks);

// let marks = [300, 400, 500, 30, 70, 110];
// marks.forEach(function (mark) {
//   let totalMarks = 600;
//   let obtainedMarks = mark;
//   let per = (obtainedMarks / totalMarks) * 100;
//   console.log(per);
// });

// const array = [2, 5, 3, 5, 43];
// const multiplier = array.map(function (arr) {
//   return arr * 2;
// });
// console.log(multiplier);

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaFiltered = dogsJulia.slice();
//   dogsJuliaFiltered.splice(0, 1);
//   dogsJuliaFiltered.splice(-2);
//   const dog = [...dogsJuliaFiltered, ...dogsKate];
//   console.log(dog);
//   dog.forEach(function (age, index) {
//     age >= 3
//       ? console.log(`Dog Number: ${index + 1} is ${age} years old and is adult`)
//       : console.log(
//           `Dog Number: ${index + 1} is ${age} years old and is puppy`
//         );
//     // if (age > 3) {
//     //   console.log(`Dog Number: ${index + 1} is ${age} years old and is adult`);
//     // } else {
//     //   console.log(`Dog Number: ${index + 1} is ${age} years old and is puppy`);
//     // }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 18, 8, 3]);

// WITH ARROW FUNCTION

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(humanAges);
//   const filteredAges = humanAges.filter((age) => age > 18);
//   console.log(filteredAges);
//   const AverageAges =
//     filteredAges.reduce((acc, age) => acc + age, 0) / filteredAges.length;
//   return AverageAges;
// };
// let avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// let avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// WITH REGULAR FUNCTION

// const calcAverageHumanAge = function (dogsAge) {
//   let humanAges = dogsAge.map(function (age) {
//     return age <= 2 ? age * 2 : 16 + age * 4;
//   });
//   console.log(humanAges);
//   let filteredAges = humanAges.filter(function (age) {
//     return age > 18;
//   });
//   console.log(filteredAges);
//   let AverageAges = filteredAges.reduce(function (acc, age) {
//     return acc + age / filteredAges.length;
//   }, 0);
//   console.log(AverageAges);
// };

// let avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// let avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// WITH CHAINING METHOD USING ARROW FUNCTION

// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length,0);

// let avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// let avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// WITH CHAINING METHOD USING REGULAR FUNCTION

// const calcAverageHumanAge = function (ages) {
//   return ages
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((age) => age > 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// };
// let avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// let avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);


