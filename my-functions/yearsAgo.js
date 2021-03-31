function yearsAgo(year){
  if(typeof(year) != 'number'){
    return false;
  }
    var current = new Date();
    return current.getFullYear() - year;
  }
  
  yearsAgo('2012');