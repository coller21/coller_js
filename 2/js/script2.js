let firstYear = prompt('Введите начальный год');

if (Number(firstYear).toString() != 'NaN' && firstYear != '') {
    firstYear = Number(firstYear);
    let lastYear = prompt('Введите конечный год');
    if (Number(lastYear).toString() != 'NaN' && lastYear != '') {
        lastYear = Number(lastYear);
        if (firstYear < lastYear) {
            let yearList = [];
            for (i = firstYear; i <= lastYear; i++) {
                if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
                    yearList.push(i);
                }
            }
            alert(yearList);
        } else {
            alert('Конечный год больше первоночального');
            location.reload();
        }
    } else {
        alert('второе значение не является числом');
        location.reload();
    }
} else {
    alert('Первое значение не является числом');
    location.reload();
}



