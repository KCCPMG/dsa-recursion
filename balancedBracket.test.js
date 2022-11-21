const balancedBracket = require('./balancedBracket')

describe("balancedBracket", function(){

  it("correctly returns true", function(){
    expect(balancedBracket(`hello`)).toBe(true);
    expect(balancedBracket(`(hi) [there]`)).toBe(true);
    expect(balancedBracket(`(hi [there])`)).toBe(true);
    expect(balancedBracket(`(((hi)))`)).toBe(true);
  })


  it("correctly returns false", function(){
    
    expect(balancedBracket(`(hello`)).toBe(false);
    expect(balancedBracket(`(nope]`)).toBe(false);
    expect(balancedBracket(`((ok) [nope)]`)).toBe(false);
  })

})