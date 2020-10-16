/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let spamWord1 = '1xBet'.toLowerCase(),
      spamWord2 = 'XXX'.toLowerCase();

  if (str.toLowerCase().indexOf(spamWord1) == -1 && str.toLowerCase().indexOf(spamWord2) == -1) {
    return false
  }
  return true
}
