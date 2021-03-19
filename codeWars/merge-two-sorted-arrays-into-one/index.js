function mergeArrays(arr1, arr2) {
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
