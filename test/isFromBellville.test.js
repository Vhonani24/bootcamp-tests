describe('The isFromBellville function', function(){

    it('should check if registration number is from Bellville', function(){
        assert.equal(true, isFromBellville('CY HDD 58'));
    });

    it('should return false if registration is not from Bellville', function(){
        assert.equal(false, isFromBellville('CJ HPP 66'));
    });
    it('should  return false if parameter is not a string', function(){
        assert.equal(false, isFromBellville([]));
    });
});