const mygcd = (x, y) => (!y ? x : mygcd(y, x % y));

module.exports = { mygcd };

/* const mygcd = (x, y) => {
  if (y > x) return mygcd(y, x);
  if (!y) return x;
  return mygcd(y, x % y);
}; */

/* const mygcd = (x, y) => {
    let res = 0;
    if (x > y) {
         res = x%y;
    } else if (y > x){
        res = y % ;
    }
    if (res === 0){
        res++
    }
    return res
} */

/* console.log(mygcd(10, 25)); */
