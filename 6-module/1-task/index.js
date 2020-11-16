/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: '',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
    constructor(rows) {
        let table = document.createElement('table');
        this.elem = table;
        table.insertAdjacentHTML('afterbegin', '<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody></tbody>');

        for (let i = 0; i < rows.length; i++) {
            let row = document.createElement('tr');
            table.querySelector('tbody').append(row);
            for (let key in rows[i]) {
                let cell = rows[i][key];
                row.insertAdjacentHTML('beforeend', `<td>${cell}</td>`);
            }
            row.insertAdjacentHTML('beforeend', `<td><button>X</button></td>`);
        }
        this.elem.addEventListener('click', function(event) {
            let target = event.target;
            if (target.tagName != 'BUTTON') return;
            target.closest('tr').remove();
        })
    }

}
