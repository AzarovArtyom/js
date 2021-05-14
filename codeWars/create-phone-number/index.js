const createPhoneNumber = (numbers) => {
  numbers.splice(0, 0, '(');
  numbers.splice(4, 0, ')');
  numbers.splice(5, 0, ' ');
  numbers.splice(9, 0, '-');
  return numbers.join('');
};

module.exports = { createPhoneNumber };

/* console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); */

/*
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
*/

/*
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";

  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }

  return format;
}
*/
