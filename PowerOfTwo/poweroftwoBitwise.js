// 2
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
// Time Complexity O(1)

module.exports = isPowerOfTwoBitWise;
