
var valueCheck = function(countBy, countTo){
  if ((countBy > 0) && (countTo > 0)) {
    if (countBy < countTo) {
      return true;
    } else {
      return false;
    }
  } else if ((countBy < 0) && (countTo < 0)) {
    if (countBy > countTo) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

var countUpBy = function(countBy, countTo) {
  // it will take any number given in the count by, add it to itself, until it reaches countTo. It will store these numbers in an array.
  var outputArray = [];

  if  ((countBy < 0 ) && (countTo < 0)) {
    for (var index = countBy; index >= countTo; index += countBy) {
      outputArray.push(index);
    }
  } else {
    for (var index = countBy; index <= countTo; index += countBy) {
      outputArray.push(index);
    }//for loop
  }//else
  return outputArray;
}//countUPB



$(document).ready(function() {

});
