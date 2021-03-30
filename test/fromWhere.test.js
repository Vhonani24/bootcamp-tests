describe('The fromWhere function', function(){

    it('takes a car registration number as a parameter and returns the town the car is from', function(){
        assert.equal('Cape Town', fromWhere('CA 658 KK'));
    });
    
});