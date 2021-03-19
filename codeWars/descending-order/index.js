function descendingOrder(n) {
  let str = String(n);
  let arr = str.split("").sort((a, b) => b - a);
  let str2 = "";
  for (let num in arr) {
    str2 += arr[num];
  }
  str2 = Number(str2);
  return str2;
}
