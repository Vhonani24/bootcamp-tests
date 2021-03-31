describe('The countAllFromTown function', function(){

    it('returns the number of registration numbers in the string for Paarl', function(){
        assert.equal('3', countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });

    it('returns 0 if registration numbers in the string is not for Paarl', function(){
        assert.equal(0, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','GP'));
    });
    
    it('returns false if the parameters passed are not strings', function(){
        assert.equal(false, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 22));
        assert.equal(false, countAllFromTown(11, '22'));
        assert.equal(false, countAllFromTown(11, 8));

    });
});