describe('The greet function', function(){

    it('should greet Rotenda correctly', function(){
        assert.equal('Hello, Rotenda', greet('Rotenda'));
    });
    it('should not greet a number correctly', function(){
        assert.equal(false, greet(10));
    });
    it('should not return false if parameter is not a string', function(){
        assert.equal(false, greet([]));
    });
    
});