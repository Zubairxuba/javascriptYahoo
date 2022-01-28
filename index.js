// let table = prompt("Enter A Numbere");
// for(let i = 1; i<=20; i++){
//     document.write(`${table} * ${i} = ${table * i } <br>`);
// }


// if statement......
// in If statement the Program will run when Condition becomes true...

// let a = 10;
// let b = 20;
// if(a<b){
//     console.log("a is greate then b");
// }



// if Else Statement ......

// In If  Else Statement first conditon will be checked either it True or False when condion false it skip the if portion and check the else portion when it true it execute....


// let a = 10;
// let b = 5;

// if(a<b){
//     console.log("a is less than b");
// }else{
//     console.log("a is grater then b");
// }


// IF Else Statement.....


// let per = prompt("Enter you Percentage");

// if(per >=80 && per <=100){
//     document.write("You are in Ist Division");
// }else if(per >=60 && per < 80){
//     document.write("You are in 2nd Division");

// }else if(per >= 45 && per < 60){
//     document.write("You are in 3rd Division");

// }else if(per < 40){
//     document.write("You are Fail");

// }    





// Type Conversion.....

// let val = 0;

// alert(typeof val);

// val = Boolean(val);

// alert(val);


// functions in JavaScript...

// A  function allows us to define a block of code, give it a name and  execute it as many times as we want.

// Example _ 01

//  Function Decleration or 

// function functionName(){
//     let a = 10;   //local variables
//     let b = 5;    //Local variables
//     console.log(a+b);
// }
// functionName();


// Example _ 02...
// Global variables or outer Variable

// let a = 10,b = 20;
// function fName(){
//     let c = 5;
//     console.log(a+c);
// }
// // console.log(b+c);  //gives error because c is local variable.. 
// fName();



// Function Parameters ....

// function fName(a, b){
//     console.log(a+b);
// }

// fName(10,20);


// ... Function Expression....

//  Create a Function and Put it into a variable


// let fun = function(a, b){
//     return a + b;

// }
// let add = fun(10, 20);
// console.log(add);


// Arrow Function .....

//  Arrow Function allow us to write a shorter function....

// syntax of Arrow Function
// let myfunction = (a,b) => {
//     return a+b;
// }

// Object....
  //   JavaScript Object is a non-primitive data type that allows to store multiple collection of data..



//   Example

// let obj = {
//     firstName : "Zubair", 
//     lastName : "Akhtar",
//     age : 19,
//     country : "Pakistan",
// };
// console.log(obj.firstName);
// console.log(obj.lastName);
// console.log(obj.age);
// console.log(obj.country);

// We can store an Arry inside of the object......
// Example
// let obj ={
//     name : "Zubair",
//     myData : ["Zubair", "Akhtar", 13],
// };
// console.log(obj.myData[1]);
// console.log(obj.myData[2]);
// console.log(obj.myData[0]);
// console.log(obj.myData.length);
    
//  Also We can store a function inside of the object.....
//  Example...

// let obj = {
//     myFunction : function() {
//         return  10 + 20;
//     }
    
// };
// console.log(obj.myFunction());


// Type of Object...

// let obj = {
//   name : "Zubair",
//   age : 19,

// }
// console.log(typeof obj);


// Accessing Object properties....

// Accessing Object properties by using dot....
// let obj = {
//      name : "Zubair",
//      age : 19,
// }
// console.log(obj.name);

// Accessing Object Properties by using Bracket Notations []

// let obj = {
//   name : "Zubair",
//   age : 19,
// }
// console.log(obj["name"]);



/*
JavaScript Nested Object.....
*/
// let obj = {
//   name : "Zubair",
//    age : 19,
//    moreData : {
//      fName : "Zubair", lName : "Akhtar", class :" JavaScript", Section : "Taqpa",
//    }
//  }
//  console.log(obj.name);
//  console.log(obj.moreData.fName);
//  console.log(obj.moreData.lName);
//  console.log(obj.moreData.class);
//  console.log(obj.moreData.Section);
 
 





/*
J A V A S C R I P T    M E T H O D S
*/
// A JavaScript method is a property containing a function declaration Inside of an object .



// let obj = {
//   name : " Zubair",
//   age : 19,
//   class : "JavaScript",
//   mydetails : function(){
//     console.log(" Hello" + this.name + "Wellcome to" + this.class);
//   }

// };
// obj.mydetails();




// MultiDimentional Arrays....

// let arr = [
//   ["Zubair", 19, true],
//   ["khurram", 18, false],
//   ["Ali", 12, true]
// ];
// for(var a= 0; a<3; a++){

// document.write(arr[a] + "<br> ");
// }

// let  a = [ "Zubair", 19, true, "khurram"];
// a[1] = 18;
// delete a[3];
// document.write(a);

