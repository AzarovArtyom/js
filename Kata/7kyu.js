/*Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

/* function descendingOrder(n) {
  let str = String(n);
  let arr = str.split("").sort((a, b) => b - a);
  let str2 = "";
  for (let num in arr) {
    str2 += arr[num];
  }
  str2 = Number(str2);
  return str2;
}

console.log(descendingOrder(5473102));
 */

//////////////////////////////////////////

/* Binary Addition */
/* Implement a function that adds two numbers together
 and returns their sum in binary. The conversion can be
  done before, or after the addition.

The binary number returned should be a string. */

/* function addBinary(a, b) {
  let sum = a + b;
  return sum.toString(2);
}

console.log(addBinary(1, 120));
 */

//////////////////////////////////////////

/* Coding Meetup #1 - Higher-Order Functions Series 
- Count the number of JavaScript developers coming from Europe */
/* You will be given an array of objects (hashes in ruby) representing data 
about developers who have signed up to attend the coding meetup that 
you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe. */

/* function countDevelopers(list) {
  let res = list.filter((man) => man.continent == "Europe");
  return res.length;
}

let list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];

var list2 = [
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 19,
    language: "HTML",
  },
  {
    firstName: "Lukas",
    lastName: "R.",
    country: "Austria",
    continent: "Europe",
    age: 89,
    language: "HTML",
  },
];

var list3 = [
  {
    firstName: "Joshua",
    lastName: "O.",
    country: "Isle of Man",
    continent: "Europe",
    age: 39,
    language: "Clojure",
  },
  {
    firstName: "Aya",
    lastName: "D.",
    country: "Libya",
    continent: "Africa",
    age: 39,
    language: "C",
  },
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 38,
    language: "Ruby",
  },
  {
    firstName: "Ximena",
    lastName: "Q.",
    country: "Mexico",
    continent: "Americas",
    age: 28,
    language: "Java",
  },
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Chloe",
    lastName: "K.",
    country: "Guernsey",
    continent: "Europe",
    age: 28,
    language: "Ruby",
  },
  {
    firstName: "Zahra",
    lastName: "S.",
    country: "Azerbaijan",
    continent: "Europe",
    age: 22,
    language: "Java",
  },
  {
    firstName: "Marian",
    lastName: "N.",
    country: "Colombia",
    continent: "Americas",
    age: 55,
    language: "Python",
  },
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
];

console.log(countDevelopers(list1));
console.log(countDevelopers(list2));
console.log(countDevelopers(list3));
 */

//////////////////////////////////////////

/* Billiards pyramid */
/* Remember the triangle of balls 
in billiards? To build a classic triangle (5 levels) 
you need 15 balls. With 3 balls you can build a 2-level triangle, etc. 
Write a function that takes number of balls (≥ 1) and calculates 
how many levels you can build a triangle.*/

/* function pyramid(balls) {
  let res = 0;
  let num = 1;
  let prev;
  while (res < balls) {
    res += num;
    prev = num;
    num++;
  }
  if (res > balls) {
    return prev - 1;
  }
  return prev;
}

console.log(pyramid(4)); */
