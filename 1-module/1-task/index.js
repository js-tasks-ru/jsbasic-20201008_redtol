/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;
  for (var i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}
