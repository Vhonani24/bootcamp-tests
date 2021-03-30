describe('The yearsAgo function', function(){

    it('takes in a year and returns how many years ago that year is from the current year', function(){
        assert.equal('9', yearsAgo('2012'));
    });
    
});