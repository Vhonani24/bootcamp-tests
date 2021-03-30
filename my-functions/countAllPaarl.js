function countAllPaarl(str){//define function
    var reg = str.split(',');//convert string into an array
    var result = [];//create an empty variabe to add all reg numbers from paarl 
    for(var i=0;i < reg.length;i++){//loop thru the array
      var allPaarl = reg[i].trim();//remove spaces at index i
      if(allPaarl.startsWith('CJ')) {//check condition
        result.push(allPaarl);//push in all reg from paarl into result
        
      }
    }
    return result.length;
  }
  countAllPaarl('CJ 666, CJ 777, GP 333');
  

  