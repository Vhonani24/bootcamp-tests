function findItemsOver20(list) {
    var over20 = [];
    for(var i= 0;i < list.length;i++){
      if(list[i].qty > 20){
       over20.push(list[i]);  
      }
    }
     return over20;   
  }
  findItemsOver20({name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},);