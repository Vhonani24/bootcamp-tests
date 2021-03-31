function countAllFromTown(regNum,regStart){//define function
  if(typeof(regNum) != 'string' || typeof(regStart) != 'string'){
    return false;
  }
    
  var reg = regNum.split(',');//convert string into an array
    var result = [];//create an empty variabe to add all reg numbers from town 
    for(var i=0;i < reg.length;i++){//loop thru the array
      var allFromTown = reg[i].trim();//remove spaces at index i
      if(allFromTown.startsWith(regStart)) {//check condition
        result.push(allFromTown);//push in all reg from town into result
        
      }
    }
    return result.length;
  }
  countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');