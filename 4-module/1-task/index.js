/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let ul = document.createElement('ul');
  document.body.append(ul);

  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    ul.append(li);
    li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
  }
  return ul;
}
