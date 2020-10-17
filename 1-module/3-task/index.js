/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let newstr = '';
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      newstr = str[0].toUpperCase();
    } else {
      newstr = newstr + str[i];
    }
  }
  return newstr;
}
