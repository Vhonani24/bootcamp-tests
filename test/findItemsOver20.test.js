var over20Results = [{"name":"pears","qty":37},{"name":"bananas","qty":27}];
var over20Results2 = [{"name":"apples","qty":40},{"name":"bananas","qty":23},{"name":"apples","qty":37}];
var over20Data = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
var over20Data3 = [{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}];
var over20Data2 = [{"name":"apples","qty":40},{"name":"pears","qty":20},{"name":"bananas","qty":23},{"name":"apples","qty":37}];

describe('The findItemsOver20 function', function(){

    it('should return all the products that have a quantity higher than 20', function(){
        assert.deepEqual(over20Results, findItemsOver20(over20Data));
        assert.deepEqual(over20Results2, findItemsOver20(over20Data2));
    });
    it('should return 0 if there are no products that have a quantity higher than 20', function(){
        assert.deepEqual([], findItemsOver20(over20Data3));
    });
    
    
});

