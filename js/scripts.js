var countUpBy = function(countBy, countTo) {
  // it will take any number given in the count by, add it to itself, until it reaches countTo. It will store these numbers in an array.
  var outputArray = [];
  for (var index = countBy; index <= countTo; index += countBy) {
    outputArray.push(index);
  }
  return outputArray;
}
var countByOne = function(){
  // it could countby a given number until it reaches another number. It will store these values into an array
  var numberArray = [];
  for (var index = 1; index <= 10; index += 1) {
    numberArray.push(index);
  }
  return numberArray;
}

$(document).ready(function() {

});
