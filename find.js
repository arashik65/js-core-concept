//find e  joto gula condition fill up korbe tar modde 1st ta dibe r kono kisu nah pawa gele null undefined dibe
const students =[
    {name:'Ashik', age:22},
    {name:'Zaved', age:31},
    {name:'Naved', age:23},
    {name:'Khaled', age:20},
    {name:'Sajed', age:34},
    {name:'Nahid', age:22},
    {name:'Nasib', age:41},
]
const student = students.find(std=>std.name[0] ==='N');
console.log(student); //{ name: 'Naved', age: 23 }--ekhane 1st  e Naved peyse mane condition 1st peley loop r cole nah 1st er value tay output dey