describe('The totalPhoneBill function', function(){

    it('Calculates the total bill for the data provided', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return  the total bill for a call only', function(){
        assert.equal('R2.75', totalPhoneBill('ok, call, tip, love'));
    });

    it('should return  the total bill for sms only', function(){
        assert.equal('R0.65', totalPhoneBill('ok, sms, tip, love'));
    });
    it('should return 0 if there is no sms or call', function(){
        assert.equal('R0.00', totalPhoneBill('ok,tip, love'));
    });


    


    
    
    
    
});