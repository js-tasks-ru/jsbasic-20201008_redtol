/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */


    function highlight(table) {
      let rows = table.rows;

      for (let i = 0; i < rows.length; i++) {
        let row = rows[i].cells;

        for (let j = 0; j < row.length; j++) {
          let cell = row[j];

          if (+cell.innerHTML < 18) {
            cell.parentElement.style.textDecoration = 'line-through';
          }

          if (cell.innerHTML == 'm') {
            cell.parentElement.classList.add('male');
          }
          if (cell.innerHTML == 'f') {
            cell.parentElement.classList.add('female');
          }

          if (j == (row.length - 1) && cell.parentElement.parentElement.tagName !== 'THEAD') {
            if (cell.matches('[data-available="true"]')) {
              cell.parentElement.classList.add('available')
            } else if (cell.matches('[data-available="false"]')) {
              cell.parentElement.classList.add('unavailable');
            } else (cell.parentElement.hidden = true);
          }
        }
      }
    };
