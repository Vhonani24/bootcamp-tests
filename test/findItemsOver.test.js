var overData = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
var overResults = [{"name":"pears","qty":37},{"name":"bananas","qty":27}];
var overData1 = [{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}];
var overResults1 = [{"name":"pears","qty":19},{"name":"bananas","qty":17}];
describe('The findItemsOver function', function(){

    it('should return all the products that have a quantity higher than threshold', function(){
        assert.deepEqual(overResults, findItemsOver(overData, 20));
        assert.deepEqual(overResults1, findItemsOver(overData1, 10));
    });
    it('should return 0 if there are no products that have a quantity higher than threshold', function(){
        assert.deepEqual([], findItemsOver(overData1, 100));
    });
    
    
});
