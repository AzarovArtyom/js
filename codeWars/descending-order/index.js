function descendingOrder(n) {
  const str = String(n);
  const arr = str.split('').sort((a, b) => b - a);
  let str2 = '';
  for (const num in arr) {
    str2 += arr[num];
  }
  str2 = Number(str2);
  return str2;
}
