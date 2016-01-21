describe("countUpBy", function() {
  it("count by a given number until a certain number", function() {
    expect(countUpBy(2,22)).to.eql([2,4,6,8,10,12,14,16,18,20,22]);
  });
  it("count by a given number and not go over the specified countTo number when the countBy number is not a multiple of the countTo number", function () {
    expect(countUpBy(3,10)).to.eql([3,6,9]);
  });
});

describe("countByOne", function() {
  it("counts by 1 until a given number", function() {
    expect(countByOne(1,10)).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
});
