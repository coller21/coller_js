let userArray = ['string', 10, 20, 'a', 'b', true, false];
function filterByType () {
  let userArgs = Array.prototype.slice.call(arguments);

  for (let elem of userArgs) {
    console.log(typeof(elem));
  }

}

filterByType(userArray);
