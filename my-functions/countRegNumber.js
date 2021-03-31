function countRegNumber(str){
  if(typeof(str) != 'string'){
    return false;
  }
  if(str == '' || str == ' '){
    return 0;
  }
    var reg = str.split(',');
    return reg.length;
  }
  
  countRegNumber('CA 182736,CY 523519,CJ 812328');