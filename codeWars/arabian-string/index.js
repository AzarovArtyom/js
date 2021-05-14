const camelize = (str) => str
  .match(/[a-z0-9]+/gi)
  .map((item) => item[0].toUpperCase() + item.substring(1).toLowerCase())
  .join('');

module.exports = { camelize };

/* const camelize = (str) => {
  if (str === '') {
    return '';
  }
  const str2 = str.replace(/[^a-zа-яё0-9]/gi, ' ').trim();
  const str3 = str2.split(' ').filter((n) => n).join(' ').split(' ');
  const str4 = [];
  str3.forEach((item) => {
    console.log(item);
    if (item[0] !== typeof 0) {
      str4.push(item[0].toUpperCase() + item.slice(1).toLowerCase());
      console.log(str4);
    } else {
      str4.push(item);
      console.log(str4);
    }
  });
  return str4.join('');
}; */

/* str3.forEach((item, index = 1) => {
  if (index > 0) {
    str4.push(str3.splice(0, 1, item[0].toUpperCase()) + item.slice(1));
  }
}); */

/* function camelize(str) {
  return str.match(/[a-z0-9]+/gi)
  .map((s) => s[0].toUpperCase() + s.substr(1).toLowerCase()).join('');
} */
