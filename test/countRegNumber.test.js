describe('The countRegNumber function', function(){

    it('should return the number of registration numbers in the string', function(){
        assert.equal("3", countRegNumber("CA 182736,CY 523519,CJ 812328"));
    });

    it('should return false if the argument is not a string', function(){
        assert.equal(false, countRegNumber(88));
    });
    it('should return 0 if the argument is an emptystring', function(){
        assert.equal(0, countRegNumber(''));
        assert.equal(0, countRegNumber(' '));
    });



});