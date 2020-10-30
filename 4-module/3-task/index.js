/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  let rows = table.tBodies[0].rows;

      for (let tr of rows) {
        let tds = tr.cells;

        for (let td of tds) {

          if (tds[1]) {
            if (+tds[1].innerHTML < 18) {
              tds[1].parentElement.style.textDecoration = 'line-through';
            }
          }

          if (tds[2]) {
            if (tds[2].innerHTML == 'm') {
              tds[2].parentElement.className = 'male';
            }
            if (tds[2].innerHTML == 'f') {
              tds[2].parentElement.className = 'female';
            }
          }

          if (tds[3]) {
            if (tds[3].matches('[data-available="true"]')) {
              tds[3].parentElement.classList.add('available')
            } else if (tds[3].matches('[data-available="false"]')) {
              tds[3].parentElement.classList.add('unavailable');
            } else {
              tds[3].parentElement.hidden = true;
            }
          }
        }
      }


}
// td.cellIndex
