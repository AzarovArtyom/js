const solution = (string) => string.split(/(?=[A-Z])/).join(' ');

module.exports = { solution };

/* console.log(solution('camelCase')); */
