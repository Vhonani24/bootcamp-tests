function transportFee(shift){
    if(typeof(shift) != 'string'){
        return false;
    }
    switch(shift) {
    case 'morning':
        return 'R20';
        break;
    case 'afternoon':
        return 'R10'
        break;
    case 'nightshift':
        return 'free';
        break;
    
   }
  }
  transportFee('morning');