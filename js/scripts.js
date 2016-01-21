
var valueCheck = function(countBy, countTo){
  if ((countBy > 0) && (countTo > 0) && (countTo < 1001) ) {
    if (countBy < countTo) {
      return true;
    } else {
      return false;
    }
  } else if ((countBy < 0) && (countTo < 0) && (countTo > -1001)) {
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
  $("form.input").submit(function(event){
    var countBy = parseInt($("input#countBy").val());
    var countTo = parseInt($("input#countTo").val());
    var stepOne = valueCheck(countBy, countTo);

    if (stepOne === true) {//IMPORTANT YOU BETTER READ THIS. We assigned stepOne === true so that it can CHECK if it's true. If we wrote stepOne = true, then we literally assigned stepOne to be true. (This is why our program didn't work)
      var stepTwo =  countUpBy(countBy, countTo);
      $("#output").text(stepTwo);
    } else {
      alert("That's not possible, human. Use integers and/or refer to your number line. The countTo must have a range between -1000 & 1000.");

    }
    //$("#result").show();
    event.preventDefault();
  });
});
