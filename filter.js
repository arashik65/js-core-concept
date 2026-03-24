//filter joto gula condition fill up hobe toto gula output dibe 
const numbers =[1,2,3,4,5];
const evenNumbers = numbers.filter(num=>num%2==0);
console.log(evenNumbers); //[ 2, 4 ]

const friends =['Ashik','naved','khaled','sajed','nahid','nasib'];
const Nfriends = friends.filter(frd=> frd[0]==='n');
console.log(Nfriends); //[ 'naved', 'nahid', 'nasib' ]

const students =[
    {name:'Ashik', age:22},
    {name:'Zaved', age:31},
    {name:'Naved', age:23},
    {name:'Khaled', age:20},
    {name:'Sajed', age:34},
    {name:'Nahid', age:22},
    {name:'Nasib', age:41},
]
const oldStudents= students.filter(std=>std.age>30);
console.log(oldStudents);   

//output-----> [
//   { name: 'Zaved', age: 31 },
//   { name: 'Sajed', age: 34 },
//   { name: 'Nasib', age: 41 }
// ]
