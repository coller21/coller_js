let firstYear = prompt('Введите начальный год');

if (Number(firstYear).toString() != 'NaN' && firstYear != '') {
    firstYear = Number(firstYear);
    let lastYear = prompt('Введите конечный год');
    if (Number(lastYear).toString() != 'NaN' && lastYear != '') {
        lastYear = Number(lastYear);
        if (firstYear < lastYear) {
            let year = 2020;
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                alert('год високосный');
            } else {
                alert('не високосный');
            }
        } else {
            alert('Числа равны');
        }
    } else {
        alert('второе значение не является числом');
        location.reload();
    }
} else {
    alert('Первое значение не является числом');
    location.reload();
}



