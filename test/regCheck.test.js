describe('The regCheck function', function(){

    it('should return false if registration number is not MP', function(){
        assert.equal(false, regCheck('DV 23 LP GP', 'MP'));
    });
    it('should return if registration number is from MP', function(){
        assert.equal(true, regCheck('DV 23 LP MP', 'MP'));
    });
    it('should return false if the parameters are not strings', function(){
        assert.equal(false, regCheck('DV 23 LP MP', 21));
        assert.equal(false, regCheck(7, 'MP'));



        
    });
    
    
});