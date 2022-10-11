#!/usr/bin/env node

const lib = require("./lib");

if(process.argv.length <= 3){
    console.log("Insufficient parameter!!!");
    process.exit(1);
}

//get parameters
//process.argv[0] => location of node runtime
//process.argv[1] => absolute location of running js file
let command = process.argv[2];

let numbers = process.argv.slice(3, process.argv.length).map((n)=>parseFloat(n));

//.some() ?? => if any element got true from the func inside of some().
if(numbers.some((n)=> isNaN(n))){ // == numbers.some(isNaN)
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch(command){
    case "sum":
        result = lib.sum(numbers); //lib[command](numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);