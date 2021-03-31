describe('The transportFee function', function(){

    it('returns the right price based on the shift you are working', function(){
        assert.equal('R20', transportFee('morning'));
        assert.equal('R10', transportFee('afternoon'));
        assert.equal('free', transportFee('nightshift'));
    });

   it('returns false if the argument is not a string', function(){
        assert.equal(false, transportFee(11));
    }); 

});