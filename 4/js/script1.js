let rusMonths = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

let rusDays = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let nowTime = new Date();
let thisDay = nowTime.getDate();
let thisMonth = rusMonths[nowTime.getMonth()];
let thisYear = nowTime.getFullYear();
let thisRusDay = rusDays[nowTime.getDay()];

let dateNow = () => {
  let nowTime = new Date();

  let russianEndings = (nowTimeEndings, nowHour) => {
    nowTimeEndings = Math.abs(nowTimeEndings) % 100;
    let nowTimeEndings1 = nowTimeEndings % 10;
    if (nowTimeEndings > 10 && nowTimeEndings < 20) { return nowHour[2]; }
    if (nowTimeEndings1 > 1 && nowTimeEndings1 < 5) { return nowHour[1]; }
    if (nowTimeEndings1 == 1) { return nowHour[0]; }
    return nowHour[2];
  }

  console.log('Сегодня ' + thisDay + ' '
    + thisMonth + ' '
    + thisYear + ' года, '
    + thisRusDay + ', '
    + nowTime.getHours() + ' '
    + russianEndings(nowTime.getHours(), ['час', 'часа', 'часов']) + ' '
    + nowTime.getMinutes() + ' '
    + russianEndings(nowTime.getMinutes(), ['минута', 'минуты', 'минут']) + ' '
    + nowTime.getSeconds() + ' '
    + russianEndings(nowTime.getSeconds(), ['секунда', 'секунды', 'секунд']) + ' '
  );

}
setInterval(dateNow, 1000);

