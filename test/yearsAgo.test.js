describe('The yearsAgo function', function(){

    it('takes in a year and returns how many years ago that year is from the current year', function(){
        assert.equal(9, yearsAgo(2012));
    });

    it(' should return false if the argument is not a number', function(){
        assert.equal(false, yearsAgo('2012'));
    });
    
    it(' should return a negative value if the argument is greater than the current year', function(){
        assert.equal(-1, yearsAgo(2022));
    });

    it(' should 0 if the argument is the current year', function(){
        assert.equal(0, yearsAgo(2021));
    });
});