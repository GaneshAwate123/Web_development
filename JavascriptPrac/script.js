// console.log("Hello World");
// console.error("This is an error");
// console.warn("This is an warning"); 
//alert('Hey welcome to the page');

//var, let= we can reassign value to the variable,
// const = we cant reassign the values

let score=20;
score=34;
console.log(score);

//data types:String, Numbers, Boolean, null, undefined

const nam='john';
const age = 10;
console.log(nam.length);
console.log(nam.toUpperCase());
// const rating= 4.5;
// const isCool = true;
// const x=null;
// const y=undefined;
// let z;

// console.log(typeof rating);


const s='tech, comp, soft';
console.log(s.split(" "));

//concatination

console.log('My name is ' + nam + ' and I am ' + age);
//Template String
console.log(`My name is ${nam} and I am ${age}`);

//Arrays - Variables that holds multiple values
//type 1
const num= new Array(1,2,3,4);
console.log(num);
//In javascript array can have multiple types of data types
//type 2
const arr = ['apples', 'oranges','pears',10, true ];

const fruits = ['apples', 'oranges','pears' ];
fruits[2]='grapes';
fruits.unshift('strawberry');
fruits.push('mangoes');

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('mangoes'));
console.log(fruits);

//object literals(Key: Value)

const person={
    firstname:'john',
    lastName:'Doe',
    age:30,
    hobbies:['music','cricket'],
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA'
    }
}

person.email ='johndoe@gmail.com';//We can add properties like it
console.log(person);
console.log(person.firstname,person.lastName);
console.log(person.hobbies[1],person.address.street);

//For:
// for(let i=0;i<10;i++){
//     console.log(`For loop numbers: ${i}`);
// }

// //while:
// let i=0;
// while( i<10){
//     console.log(`While loop number: ${i}`);
//     i++;
// }


//Arrays of Objects
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist Apt',
        isCompleted:false
    }
];
// console.log(todos);
// console.log(todos[2].text);

// const todoJSON= JSON.stringify(todos);//In the form of json
// console.log(todoJSON);

//Type1
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}
//Type2
for(let todo of todos){
    console.log(todo.text);
}//Both types gives same output, but  second type is more efficient

//conditional
const x= '10';
if(x ===10){
    console.log('X is 10');
}//always use triple equal to sign to check data type as well

//Turnary operator
const y=8;
const color = y>10 ? 'red' : 'blue';
console.log(color);

//Switch case
switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;    

}

//function
//keyword function
// function addNum(num1,num2){
//     return num1+num2;
// }
// console.log(addNum(5,6));

//Arrow function
//const addNum =(num1,num2) => num1+num2;
//console.log(addNum(5,6));

//constructor function
// function Person(firstame, lastname, dob){
//     this.firstame=firstame;
//     this.lastname=lastname;
//     this.dob=new Date(dob);
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear(); 
// }
// Person.prototype.getfullname = function(){
//     return `${this.firstame} ${this.lastname}`;
// }

// //initialiaze object
// const person1 = new Person('john','doe','5-6-1920');
// const person2 = new Person('marry','smith','11-29-2001');
// console.log(person2.lastname);
// //console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getfullname());

// console.log(person1);


