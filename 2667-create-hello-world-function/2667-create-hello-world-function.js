// function  createHelloWorld(){
//     return function (){
//         return "Hello World" 
        
//     }
// }

let createHelloWorld = function(){
    return function(...args){
        return "Hello World"
    }
}