function regCheck(regNumber, regId){
  if(typeof (regNumber) != 'string' || typeof(regId) != 'string'){
    return false;
  }

    return regNumber.endsWith(regId);
  }
  
  