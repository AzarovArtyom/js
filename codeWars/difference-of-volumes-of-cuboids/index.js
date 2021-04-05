function findDifference(a, b) {
  const volume1 = a.reduce((prev, current) => prev * current);
  const volume2 = b.reduce((prev, current) => prev * current);
  // if (volume1 > volume2) {
  //   return volume1 - volume2;
  // } else if (volume1 < volume2) {
  //  return volume2 - volume1;
  // } else if (volume1 == volume2) {
  //   return 0;
  // }
  return Math.abs(volume1 - volume2);
}
