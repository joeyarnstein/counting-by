describe("valueCheck", function(){
  it("detect if countBy is < countTo for positive numbers", function() {
    expect(valueCheck(5,10)).to.equal(true);
  });
});

describe("countUpBy", function() {
  it("count by a given number until a certain number", function() {
    expect(countUpBy(2,22)).to.eql([2,4,6,8,10,12,14,16,18,20,22]);
  });
  it("count by a given number and not go over the specified countTo number when the countBy number is not a multiple of the countTo number", function () {
    expect(countUpBy(3,10)).to.eql([3,6,9]);
  });
  it("count from a negative number to another specified negative number", function() {
    expect(countUpBy(-5,-20)).to.eql([-5,-10,-15,-20]);
  });

  //it will detect if count by is > than count to for positive
  //it will detect if countby is < than countto for negative
  //for both, return an alert that says u r dum
});

describe("countByOne", function() {
  it("counts by 1 until a given number", function() {
    expect(countByOne(1,10)).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
});
