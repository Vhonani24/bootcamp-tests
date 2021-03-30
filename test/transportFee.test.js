describe('The transportFee function', function(){

    it('returns the right price based on the shift you are working', function(){
        assert.equal('R20', transportFee('morning'));
    });
    
});