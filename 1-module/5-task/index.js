/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
    if (str.length > maxlength) {
    let newstr = str.slice(0, 19) + '…';
    return newstr;
  }
  return str;
}
