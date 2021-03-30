describe('The countAllFromTown function', function(){

    it('returns the number of registration numbers in the string for Paarl', function(){
        assert.equal('3', countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    
});