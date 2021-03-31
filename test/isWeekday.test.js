describe('The isWeekday function', function(){

    it(' should return true if the parameter passed in is a day of the week (ie. Not a weekend day)', function(){
        assert.equal(true, isWeekday('Friday'));
    });
    it('should return false if the parameter passed in is a day of weekend day)', function(){
        assert.equal(false, isWeekday('Sunday'));
    });

    it('should return false if the parameter passed in is not a string)', function(){
        assert.equal(false, isWeekday(36));
    });
});