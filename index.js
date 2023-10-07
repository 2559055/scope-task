// Write your solution in this file!
const customerName = "zaki";
function getcustomerName(){
    return customerName;
}
console.log(getcustomerName(customerName));
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  
  // Function to set the best customer
  function setBestCustomer() {
    bestCustomer = "Alice"; // This variable is declared in the global scope
  }
  
  // Function to overwrite the best customer
  function overwriteBestCustomer() {
    bestCustomer = "Eve"; // This will overwrite the value of bestCustomer
  }
  
  // Function to unsuccessfully reassign the least favorite customer
  function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = "John";
    leastFavoriteCustomer = "Jane"; 
  }
  
  
  console.log(returnCustomerName()); 
  upperCaseCustomerName(); 
  
  setBestCustomer(); 
  console.log(bestCustomer); 
  overwriteBestCustomer(); 
  console.log(bestCustomer); 
  changeLeastFavoriteCustomer(); 

