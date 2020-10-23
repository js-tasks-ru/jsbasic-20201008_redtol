/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

  let newStr = str.split(' ')
    .join(',')
    .split(',')
    .filter(item => isFinite(item))
    .sort( (a, b) => a - b );
  return {min: +newStr[0], max: +newStr[newStr.length - 1]};
}
