// Inbuilt objects in Js:

// 1.math :It has some methods like math.abs(),math.max(),math.round(),etc
//2.String : yes, in javascript string is used as primitive as well as object
// string as primitive
let firstName = "ganesh";
// we can convert primitve string into object 
// firstName.length;/*now the string is converted into object */
// syntax for string as objects : 
let lastName = new String('Awate');/*string object is created by using string constructor function*/
// let message = " this is my first message";
// let words = message.split(' ');/*like this we can run many methods of string object*/

//3.Template literal
// By using template literal(back tick) we can modify any sentence according to us like we can use coma, dot,etc.
// we can also use place holders by using dollor sign with curly braces
let message = `Hello ${firstName},

Thanks for the opportunity

Regards
xyz. `;
console.log(message);

//4.Date and time
// let date = new Date();
// console.log(date);

// let date1=new Date("june 20 1998 07:15 ");
// console.log(date1);

// let date2=new Date(2001,10,29,7);

// we can use setter and getter methods to assign for set and receive\fetch data using getter
// date2.setFullYear(2000);
// console.log(date2.getDate());
// console.log(date2);

// Array
let arr=[5,65,5,4,8];
console.log(arr);
// inserting in array
arr.push(9);
console.log(arr);

arr.unshift(22);
console.log(arr);

arr.splice(2,0,"a",'b','c');
console.log(arr);

// searching
console.log(arr.indexOf(65));
console.log(arr.indexOf(55));/*it will print -1 if element is not present in array*/

// we want to check number is present or not
if(arr.indexOf(4)!=-1){
    console.log("present");
}/*this is not good practice*/

// console.log(arr.includes(22));best practice

// array of objects

let courses=[
    {no:1, naam:"Rahul"},
    {no:2, naam:"hemant"},
]
// console.log(courses);
// when we have to search inside array of objects we have to use callback function not indexof and other methods
// let course= courses.find(function(cous){
//     return cous.naam==="Rahul";
// });
// let course = courses.find((cous)=> cous.naam==="hemant");/*using arrow function*/
// console.log(course);

// let numbers=[5,6,8,4,2];

// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.splice(2,1);
// console.log(numbers);

let numbers= [5,8,4,9,10];
let numbers2 =numbers;

// numbers=[];1./*not best practice*/
// numbers.length=0;2.best practice
// numbers.splice(0,numbers.length);another best practice


console.log(numbers);
console.log(numbers2)