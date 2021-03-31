
//FUNCTION TO CHECK THE MOST PROFITABLE DEPARTMENT
function mostProfitableDepartment(salesData){//define function
    if(salesData == ''){
        return 'please enter an argument';
    }
    if(typeof(salesData) != 'object'){
        return false;
    }
  const departmentMap = {};//create an empty day map
  for(var i = 0;i < salesData.length;i++) {//loop through the data
    const findDepartment = salesData[i];//create a variable that prints out each item
    departmentMap[findDepartment.department] = 0;//add the 3 days to map variable and assign to 0
  }
  //console.log(departmentMap);
  //loop through again to get the sales
  for(var i = 0;i < salesData.length;i++){//loop through the data
    const findDepartment = salesData[i];//create a variable that prints out each item
    var currentDepartmentSalesTotal = departmentMap[findDepartment.department];//total needed for each department
    currentDepartmentSalesTotal += findDepartment.sales;//add sales to each department
    departmentMap[findDepartment.department] = currentDepartmentSalesTotal;//store the new department sale total to each department
  }
  //console.log(departmentMap);
  //find most selling department
  var currentMaxSales = 0;//create a variable to compare the sales with
  var currentDepartment = '';//create a variable to hold the department
  for(const findDepartment in departmentMap){//loop through the department sales map
    //console.log(departmentSales);//prints the departmennts
    //console.log(departmentMap[departmentSales]);//prints the sales total
    const currentDepartmentSales = departmentMap[findDepartment];//creat a new variable and assign to this for all sales
    if(currentDepartmentSales > currentMaxSales) {//check if current is > currentMaxSales
      currentMaxSales = currentDepartmentSales;//assign bigger sale to this
      currentDepartment = findDepartment;//assign the department with more sales
    }
  }
  
  //console.log(currentMaxSales);//current sale that is the highest
  return currentDepartment;//crrent departmnt with more sales
}







