//double equals does type coercion .
console.log(2==2); //true
console.log(2=='2');// converts the string '2' to number 2 and then compare.returns true.
console.log(1== true); //true
//true is converted to 1 and then compared. returns true.
console.log(0== false); //true
//false is converted to 0 and then compared. returns true.
console.log(true == '1'); //true
//true is converted to 1 and then comapared with '1'. '1' is converted to number 1 and then compared .returns true.
console.log(false == '0'); //true
console.log(null==undefined);
console.log(NaN==NaN); //false
console.log([5] =='5'); //true
console.log({} == {});// false
console.log([] == []);// false

console.log([5].toString())