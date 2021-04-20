function mergeArrays(arr1, arr2) {
  const arrAll = [];
  for (const num in arr1) {
    arrAll.push(arr1[num]);
  }
  for (const num in arr2) {
    arrAll.push(arr2[num]);
  }
  const arrFinal = [];
  for (const num in arrAll) {
    if (!arrFinal.includes(arrAll[num])) {
      arrFinal.push(arrAll[num]);
    }
  }
  arrFinal.sort((a, b) => a - b);
  return arrFinal;
}

mergeArrays();
