/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let finalStr = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age <= age) {
      finalStr += `${arr[i].name}, ${arr[i].balance}\n`;
    };
  };

  return finalStr = `'${finalStr.slice(0, finalStr.length - 1)}'`;
}
