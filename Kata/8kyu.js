//String repeat
//Write a function called repeat_string which repeats the given string str exactly count times.*/

/* function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

console.log(repeatStr(4, "*"));
console.log(repeatStr(3, "Go")); */

//////////////////////////////////////////

//Multiply
//This code does not execute properly. Try to figure out why.

/* function multiply(a, b) {
  return a * b;
} */

//////////////////////////////////////////

/*Twice as old
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

/* function twiceAsOld(dadYearsOld, sonYearsOld) {
  let dadYears1 = dadYearsOld;
  let dadYears2 = 0;
  if (dadYears1 / sonYearsOld > 2) {
    while (dadYearsOld / sonYearsOld > 2) {
      dadYearsOld++;
      sonYearsOld++;
    }
    dadYears2 = dadYearsOld - dadYears1;
    return `Через ${dadYears2} лет`;
  } else {
    while (dadYearsOld / sonYearsOld < 2) {
      dadYearsOld--;
      sonYearsOld--;
    }
    dadYears2 = dadYears1 - dadYearsOld;
    return `${dadYears2} лет назад`;
  }
}

console.log(twiceAsOld(30, 15));
 */

//////////////////////////////////////////

//Merge two sorted arrays into one
/* You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result. */

/* function mergeArrays(arr1, arr2) {
  let arrAll = [];
  for (let num in arr1) {
    arrAll.push(arr1[num]);
  }
  for (let num in arr2) {
    arrAll.push(arr2[num]);
  }
  let arrFinal = [];
  for (let num in arrAll) {
    if (!arrFinal.includes(arrAll[num])) {
      arrFinal.push(arrAll[num]);
    }
  }
  arrFinal.sort((a, b) => a - b);
  return arrFinal;
}

console.log(
  mergeArrays([1, 3, 12, 2, 4, 4, 1, 3, 5, 7, 9], [20, 4, 5, 6, 7, 8])
);
 */

//////////////////////////////////////////

/* Difference of Volumes of Cuboids */
/* In this simple exercise, you will create a program 
that will take two lists of integers, a and b. Each list 
will consist of 3 positive integers above 0, representing 
the dimensions of cuboids a and b. You must find the difference 
of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]),
 the volume of a is 12 and the volume of b is 20. Therefore, 
 the function should return 8.

Your function will be tested with pre-made examples as well as
 random ones.

If you can, try writing it in one line of code. */

/* function findDifference(a, b) {
  let volume1 = a.reduce((prev, current) => prev * current);
  let volume2 = b.reduce((prev, current) => prev * current);
 // if (volume1 > volume2) {
 //   return volume1 - volume2;
 //} else if (volume1 < volume2) {
  //  return volume2 - volume1;
 // } else if (volume1 == volume2) {
 //   return 0;
 // }
  return Math.abs(volume1 - volume2);
}

console.log(findDifference([10, 29, 1], [1, 30, 7])); */

//////////////////////////////////////////

/* Sum Mixed Array */
/* Given an array of integers as strings and 
numbers, return the sum of the array values 
as if all were numbers.

Return your answer as a number. */

/* function sumMix(x) {
  let str = String(x);
  let arr = str.split(",");
  return arr.reduce((prev, current) => +prev + +current, 0);
}

console.log(sumMix([2]));
 */

//////////////////////////////////////////

/* Squash the bugs */
/* Simple challenge - eliminate all bugs from 
the supplied code so that the code runs and outputs 
the expected value. Output should be the length of 
the longest word, as a number.

There will only be one 'longest' word. */

/* function findLongest(str) {
  let spl = str.split(" ");
  let longest = 0;

  for (let word in spl) {
    if (spl[word].length > longest) {
      longest = spl[word].length;
    }
  }
  return longest;
}

console.log(findLongest("The quick white fox jumped around the massive dog")); */

//////////////////////////////////////////

/* Find Maximum and Minimum Values of a List */
/* Your task is to make two functions, max and min (maximum and minimum in PHP and Python) 
that take a(n) array/vector of integers list as input 
and outputs, respectively, the largest and lowest number 
in that array/vector. */

/* let min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

let max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

console.log(min([-52, 56, 30, 29, -54, -110]));
console.log(max([-52, 56, 30, 29, -54, -110])); */

//////////////////////////////////////////

/* Regular Ball Super Ball */
/* Create a class Ball. Ball objects should accept one argument 
for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a 
"ball type" of "regular." */

/* let Ball = function (ballType) {
  if (!ballType) {
    this.ballType = "regular";
  } else this.ballType = ballType;
};

let ballSuper = new Ball("super");
let ballRegular = new Ball();

console.log(ballSuper.ballType);
console.log(ballRegular.ballType);
 */

//////////////////////////////////////////

/* A wolf in sheep's clothing */
/* Wolves have been reintroduced to Great Britain.
 You are a sheep farmer, and are now plagued by wolves 
 which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten.
Remember that you are standing at the front of the queue which 
is at the end of the array:
If the wolf is the closest animal to you, return 
"Pls go away and stop eating my sheep". Otherwise, 
return "Oi! Sheep number N! You are about to be eaten by a wolf!" 
where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array. */

/* function warnTheSheep(queue) {
  queue.reverse();
  let prevAnimal = "";
  for (let animal in queue) {
    if (queue[0] == "wolf") {
      return "Pls go away and stop eating my sheep";
    } else if (queue[animal] == "wolf") {
      return `Oi! Sheep number ${animal}! You are about to be eaten by a wolf!`;
    }
  }
}

console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
); */

//////////////////////////////////////////

/* Convert a Boolean to a String */
/* Implement a function which convert the 
given boolean value into its string representation.

Note: Only valid inputs will be given. */

/* function booleanToString(b) {
  if (b == true) {
    return "true";
  } else if (b == false) {
    return "false";
  }
} */

//////////////////////////////////////////

/* Grasshopper - Personalized Message */
/* Create a function that gives a personalized greeting. 
This function takes two parameters: name and owner.

Use conditionals to return the proper message: */

/* function greet(name, owner) {
  return name == owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Artyom", "Artyom"));
 */
