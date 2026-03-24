const numbers=[1,2,3,4,5];
let sum=0;
for(const num of numbers){
    sum=sum+ num;
}
// console.log(sum);

//reduce line short korar jonno used kora hoy upor r nicer ta 2 vabey kora jay
const total= numbers.reduce((acc,num)=>acc+num,0);
console.log(total); //15