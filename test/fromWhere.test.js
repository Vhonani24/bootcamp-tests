describe('The fromWhere function', function(){

    it('takes a car registration number as a parameter and returns the town the car is from', function(){
        assert.equal('Cape Town', fromWhere('CA 658 KK'));
    });

    it('should return false if a parameter is not a string', function(){
        assert.equal(false, fromWhere(23));
    });
    it('should return some other place if registratio number is not CA, CY, or CJ', function(){
        assert.equal('Some other place!', fromWhere('GP 658 KK'));
    });
});