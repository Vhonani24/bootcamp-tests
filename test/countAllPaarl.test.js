describe('The countAllPaarl function', function(){

    it('returns the number of registration numbers in the string for Paarl', function(){
        assert.equal(2, countAllPaarl('CJ 666, CJ 777, GP 333'));
    });

    it('should return false if the argument is not a string', function(){
        assert.equal(false, countAllPaarl(['CJ 666, CJ 777, GP 333']));
    });

    it('should return 0 if the registration number is not from Paarl', function(){
        assert.equal(0, countAllPaarl(['CK 666, CK 777, GP 333']));
    });


    
});