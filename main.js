//create a function for countBits
var countBits = function(n) {
// create object in order to use toString method with radix of 2 (for binary representation)
//convert n to binary.
  let binaryNum = new Number(n).toString(2);
  let indexBinary = binaryNum.indexOf('1');
//   keep count of value found (to return number of bits equal to one in binary rep.)
   let count = 0;
  //if value is found increment count
  while (indexBinary != -1) {
    count++;
    // start from the next 1 found
    indexBinary = binaryNum.indexOf('1', indexBinary++);
  }
//   once no more values are found
  return count
};
