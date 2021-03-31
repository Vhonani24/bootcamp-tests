function isWeekday(str){
  if(typeof (str) != 'string'){
    return false;
  }

    return !str.startsWith('S');
  }
  
 