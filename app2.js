var arg = prompt();
var som = arg.split("")
const getAverage = function(numbers)  {
  var sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += +numbers[i]; 
  }
  return +sum / +numbers.length;
}; 

console.log(getAverage(som))