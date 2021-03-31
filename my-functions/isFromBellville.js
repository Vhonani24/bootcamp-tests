function isFromBellville(regNumber){
  if(typeof (regNumber) != 'string'){
    return false;
  }
  


    return regNumber.startsWith('CY');
}
  
