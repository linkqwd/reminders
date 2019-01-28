// Дата и время представлены в JavaScript одним объектом: Date. Создать «только время» при этом нельзя, оно должно быть с датой
// Отсчёт месяцев начинается с нуля.
// Отсчёт дней недели (для getDay()) тоже начинается с нуля (и это воскресенье).
// Объект Date удобен тем, что автокорректируется.
// При преобразовании к числу объект Date даёт количество миллисекунд, прошедших с 1 января 1970 UTC. Побочное следствие – даты можно вычитать, результатом будет разница в миллисекундах.
// Для получения текущей даты в миллисекундах лучше использовать Date.now(), чтобы не создавать лишний объект Date (кроме IE8-)
// Для бенчмаркинга лучше использовать performance.now() (кроме IE9-), он в 1000 раз точнее.

console.log(new Date(2011, 0, 1, 0, 0, 0, 0)); // 1 января 2011, 00:00:00
console.log(new Date(2011, 0, 1)); // то же самое, часы/секунды по умолчанию равны 0
console.log(new Date(2011, 0, 1, 2, 3, 4, 567)); // 1.01.2011, 02:03:04.567

// Методы объекта Date. Возвращают результат для местной временной зоны.
let val;
const today = new Date(); // Создает объект Date с текущей датой и временем
val = today.getMonth(); // Получить месяц, от 0 до 11.
val = today.getDate(); // Получить число месяца, от 1 до 31.
val = today.getFullYear(); // Получить год (из 4 цифр)
val = today.getDay(); //  от 0 (воскресенье) до 6(суббота).
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // Возвращает число миллисекунд, прошедших с 1 января 1970 года GMT+0
val = today.getTimezoneOffset(); // Возвращает разницу между местным и UTC-временем, в минутах. Для GMT-1 выведет 60
console.log(val)


let birthday = new Date('9-10-1981 11:25:00');
console.log(birthday)
birthday = new Date('September 10 1981');
console.log(birthday)
birthday = new Date('9/10/1981');
console.log(birthday)

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
console.log(birthday);

// Получение даты, отдаленной от имеющейся на нужный промежуток времени
var d = new Date(2011, 1, 28)
d.setDate(d.getDate() + 2)
console.log(':d: ' + d);

// Примеры

// объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
console.log(new Date(2012, 1, 20, 3, 12))

// функция getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[date.getDay()];
}
var date = new Date(2014, 0, 3); // 3 января 2014
console.log(getWeekDay(date)); // 'пт'

// День недели в европейской нумерации, возвращает день недели для даты date
var date = new Date(2012, 0, 3);  // 3 янв 2012
function getLocalDay(date) {
    return date.getDay() || 7
}
console.log( getLocalDay(date) ); // вторник, выведет 2
