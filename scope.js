//global scope---finction er bayre jeta thake seta  golobal scope
let pi = 3.14;
add(2,5); //age thekeu function call kora jabe
function add (a,b){
    const factor = 0.5;
    const result = (a+b)* factor + pi;
    const total = doubleIt(result);
    const value = addTwo(total);
    function addTwo(num){
        num= num+ pi;
        return num +2 ;

    }
    return value;
}
function doubleIt (num){
    return num *2;
}
add(5,10);
//console.log(factor,pi);
//addTwo(5)---ekhane outside theke call kora jabe mah tayle error dibe 

const multiply = (a,b) => {
    console.log(result);
    const result = a* b;
    return result
}

