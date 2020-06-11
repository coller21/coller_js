let doTaskTwo = () => {
  let firstYear = promptInt('Введите начальный год');

  if (firstYear !== null) {
    let lastYear = promptInt('Введите конечный год');
    if (lastYear !== null) {
      if (firstYear < lastYear) {
        let yearList = [];
        for (i = firstYear; i <= lastYear; i = i + 4) {
          if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
            yearList.push(i);
          }
        }
        alert(yearList);
      } else {
        alert('Конечный год больше первоночального');
        setTimeout(doTaskTwo, 0);
      }
    } else {
      alert('второе значение не является числом');
      setTimeout(doTaskTwo, 0);
    }
  } else {
    alert('Первое значение не является числом');
    setTimeout(doTaskTwo, 0);
  }
}
doTaskTwo();

