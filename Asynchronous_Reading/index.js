

// Example 1: Callback (push a function to do parameter for other function):

// function a(callback) {
//     console.log("ha bang");
//     callback();
     
// }
    
// function b() {
//     console.log("duyen");
// }

//a(b); // result: ha bang, duyen

// Example 2: transmission in callback function a argument:
//  function a (callback, argument) {
//     console.log(1);
//     console.log(callback(argument) + 2);
//  }

//  function b(c) {
//     return c = 10;
//  }

//  a(b);

// Example 3: transmission in callback function a argument:

// function a(callback, argument) {
//     console.log(1);
//     callback(argument);
// }

// function b(c) {
//     console.log(c);
// }

// a(b, 4) // result: 1, 4

// Note: Explain example above like: 
// + callback == b;
// + argument == c;

// NOTE: When to use CALLBACK, we must to known exactly the CALLBACK have how many function and argument: 
// Example 4: Using callback with some argument:
// function a(number, callback, argument, args) {
//     console.log(1);
//     console.log(number);
//     callback(argument, args);
// }

// function b(c, d) {
//     console.log(c + d + 1);
// }

// a(2, b, 10, 1) // Result: 1, 2, 10, 1:

// ==== Using CALLBACK to handle ASYNCHRONOUS:====
// Example 1:
// function asyncFunction(callback) {
//     console.log("start");
//     setTimeout(() => {
//         callback();
//     }, 100);
//     console.log("waiting");
// }

// let printEnd = function() {
//     console.log("End");
// }
// asyncFunction(printEnd);
// Result: // start, waiting, End.
// NOTE: + JavaScript to execute statements to following a stream line(đường luồng).
//       + If statements touchs WebAPI, the CALLBACK will be to sent message queue => call stack => and finall output when time up.

// Defect of CALLBACK HELL: When to execute the asynchronous statement, we must to use many CALLBACK, It makes us codes hard to raed
// and debug, also develop code. it is called CALLBACK HELL.


//=========THE PROMISE APPEAR TO RESOLVE THE PROBLEMS OF CALLBACK HELL=====
// PROMISE  to contain two parament is two  callback function to resolve after when synchronous code to perform successful or failure:
// The way to initilization  and action of Promise:

// const promise = new Promise ((resolve, reject) => {
//     const a = 3;
//     if (a % 2 === 0){
//         resolve(a);
//     } else{
//        reject(a);
//     }
// });
// promise
// .then(data => console.log("Data: ", data))
// .catch(err => console.error("Error: ", err));

//========THE END PROMISE==========

//========EVENT LOOP AND CALL STACK========
// Example 1: 

function foo(b) {
    console.log("foo function");
    setTimeout(() => console.log("setTimout foo"), 0);
    const a = 10;
    return a + b + 11;

}

function bar(x) {
    console.log("bar function");
    setTimeout(() => console.log("setTimout bar"),10);
    const y = 3;
    return foo(x * y);
}
console.log("begin");
const baZ = bar(7);
console.log(baZ);

// CALL STACK above the race as follows:
// begin, then.
// bar function. then
// foo function. then
// 42
// setTimeout bar
// setTimeout foo






