// Object: object is collection of key value pairs. It has properties and behaviour.
// const rectangle={
//     length: 1,
//     breadth: 2,

//     // to add behaviour we have to create methods inside the obj
//     draw: function(){
//         console.log('draw');
//     }
// }

// there are two best practices for creating objects
// instead of creating multiple objects of same types we can declear it once inside the function 
// and access it many times witout getting too much errors 
// we can acheive this by creating following two functions

// 1. factory function

// function createRectangle(len, bre){
//     return rectangle = {
//         length:len,
//         breadth: bre,

//     // to add behaviour we have to create methods inside the obj
//         draw: function(){
//         console.log('draw');
//     }
//     };
// }

// // //object creation
// const rectobj1 = createRectangle(5,6);
// const rectobj2 = createRectangle(8,10);
// const rectobj3 = createRectangle(1,2);

// 2. constructor function
// we have to constructor function in pascalcase 
// constructor function is use to intialize or define methods and properties 

// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function(){
//         console.log("draw");
//     }
// }

// //object creation
// //Here new keyword is use to create empty object
// let obj1 = new Rectangle(4,9);
// //dynamic nature of object
// obj1.color="yellow";
// console.log(obj1);

// delete obj1.color;
// console.log(obj1);

// functions are also objects as every function has its properties like length,name,etc and methods like call,bind,appiy 


// Types in javascript
// primitive or value types: Number,string,boolean,undefined,Null
// refrence or ojects: functions,objects,Arrays

// diff bet primitive and reference :In primitives copy of two variables are created indicating two different memory location when we equate each other and
//in objects it creates reference of variable and when we equate two variables it refers to same memory loaction 
// example:

// primitive 
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// reference or object
// let a={ value:10};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// Note:Primitives are copied by their value 
// References are copied by their address

// Another example
// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);/*output =10 as it create another copy of variable while defining function and we are printing 1st memory location value, it also called as pass by value */

// let a = {value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);/*output =11 as it dosenot create another copy of variable while defining function it points same memory location every time */ 

// iterating through objects 
// for-in loop
// for-of loop : we can apply this loop on only iterables like arrays,maps,etc. 
// let square ={
//     length :1,
//     breadth:2
// }
// for-in
// for(let key in square){
//     // keys are reflected through key variable
//     // values are reflected through square[key] 
//     console.log(key,square[key]);
// }
// for-of loop for ojects 
// for(let key of Object.keys(square)){
//     console.log(key);
// }

//Object clonning:
// Iteration
// Assign
// spread
// object clone throgh iteration
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={};

// for(let key in src){
//     dest[key]=src[key]
// };
// console.log(dest);
// src.a++;
// console.log(dest);

// object clone throgh assign
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let src1={value:10};
// // we can copy multiple Object into single Object using assign
// let dest = Object.assign({},src,src1);
// console.log(dest);
// src.a++;
// console.log(dest);

// object clone throgh spread 
let src={
    a:10,
    b:20,
    c:30
};
let dest ={...src};
console.log(dest);
src.a++;
console.log(dest);






// Garbage Collection :
// it finds the var/methods which are not in use and deallocate its memory space
// we have no control over the garbage collection
// It continuously runs in the background
