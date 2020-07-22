// По Китайски с arguments
function filterByType() {
  let [type, ...elements] = [...arguments];
  let newArray = [];
  for (let elem of elements) {
    if (type === typeof (elem))
      newArray.push(elem);
  }
  return newArray;
}

console.log(filterByType('string', 10, 20, 'a', 'b', true, false, 'привет', 'аргументы'));

// Вариант без arguments
function filterByType1(type, ...elements) {
  let newArray1 = [];
  for (let elem of elements) {
    if (type === typeof (elem))
      newArray1.push(elem);
  }
  return newArray1;
}

console.log(filterByType1('number', 10, 20, 'a', 'b', true, false, 123));

// Минутка функциональной наркомании ))

let filterByType2 = (type, ...args) => args.filter(arg => typeof (arg) === type);
console.log(filterByType2('boolean', 10, 20, 'a', 'b', true, false, true, true, false));
