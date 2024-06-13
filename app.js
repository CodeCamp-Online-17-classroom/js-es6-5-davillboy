// write code here
function modifyArray(arr) {
  return [
    ...arr.slice(0, 3),  
    arr[3] ** 2,          
    ...arr.slice(4)      
  ];
}

const array1 = [1, 2, 3, 4, 5];
const modifiedArray = modifyArray(array1);

console.log(array1); 
console.log(modifiedArray); 
