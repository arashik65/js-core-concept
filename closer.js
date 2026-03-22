function outerFunction(){
    function innerFunction(){
        console.log('This is the inner function');
    }
    return innerFunction;
}
const result = outerFunction(); 
// result(); This is the inner function
// console.log('in the outside',result);  in the outside [Function: innerFunction]

function counter (owner){
    let count = 0;
    function increment(){
        count = count +1;
        console.log('value of count', owner, count);
    }
    return increment;
}
const KarimCounter = counter('karim');
KarimCounter();
KarimCounter();
KarimCounter();
KarimCounter();


const RahimCounter = counter('Rahim');
RahimCounter();
RahimCounter();
RahimCounter();
KarimCounter();
// const count1 = counter();
// count1();   
// count1();   
// count1();   
// count1();   
// console.log(count1);[Function: increment]