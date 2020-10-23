/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let finalStr = '';

  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      finalStr += `${users[i].name}, ${users[i].balance}\n`;
    };
  };

  return finalStr = `${finalStr.slice(0, finalStr.length - 1)}`;
}
