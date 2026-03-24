const numbers =[1,2,3,4,5];
// const doubled =[];
// for(const num of numbers){
//     doubled.push(num*2);
// }
// console.log(doubled);

//map new array create kore 
// const doubledIt = num=> num*2;
// const doubled = numbers.map(doubledIt);
// console.log(doubled); 

const doubled = numbers.map(num=>num*2);
const squared = numbers.map(num=> num*num);
console.log(squared);


const friends =['zaved','naved','khalid','sajed'];
const friendsLetter = friends.map(frd=> frd[0]);

console.log(friendsLetter);
const product =[
    {name:'Laptop', price:4500},
    {name:'phone', price:1500},
    {name:'table', price:2500},
];
const prices = product.map(pd=>pd.price);
console.log(prices);
const prices2 = product.map(pd=>pd.price*2);
console.log('price 2:',prices2);

const names =product.map((pd,index,productsArray)=>{
    const upperCase=pd.name.toUpperCase();
    // console.log(index,upperCase,productsArray);
    return upperCase;
})

//ekhane forEach use korle output e kisu return kore nah
const result = product.forEach(pd=>console.log(pd.name));
console.log(result); //undefined



