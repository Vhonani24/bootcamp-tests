function fromWhere(reg){
  if(typeof(reg) != 'string'){
    return false;
  }
    if(reg.startsWith('CY')){
      return 'Bellville';
    }else if(reg.startsWith('CJ')){
      return 'Paarl';
    }else if(reg.startsWith('CA')){
      return 'Cape Town';
    }else{
      return 'Some other place!'
    }
  }
  fromWhere('CA 658 KK');