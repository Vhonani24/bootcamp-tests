function yearsAgo(year){
    var current = new Date();
    return current.getFullYear() - year;
  }
  
  yearsAgo('2012');