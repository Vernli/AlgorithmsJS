// Czy liczba 'n' jest wynikiem potęgi z 2

//  1
function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
}
// Time complexity O(logn)
module.exports = powerOfTwo;
