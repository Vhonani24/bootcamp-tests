describe('The totalPhoneBill function', function(){

    it('Calculates the total bill for the data provided', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    
});