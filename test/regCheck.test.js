describe('The regCheck function', function(){

    it('should check if registration number is from GP, L, EC, MP', function(){
        assert.equal(false, regCheck('DV 23 LP GP', 'MP'));
    });
    
});