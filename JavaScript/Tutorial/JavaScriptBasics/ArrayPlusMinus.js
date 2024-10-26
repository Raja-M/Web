'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr, n) {

    // Write your code here
    if ( n <0 && n > 100){
        return ;
    }
    let posCount = 0 ;
    let negCount = 0;
    let zeroCount = 0;


    for (const n of arr) {
        if ( n >= 100 && n <= -100 ){
            continue;
        }
        if ( n > 0){
            posCount++;    
        } else if ( n < 0){
            negCount++;    
        } else {
            zeroCount++;
        }
        
    }
    const posProp = posCount > 0 ? (posCount*1.0/n).toPrecision(6) :(0).toFixed(6);
    const negProp = negCount > 0 ? (negCount*1.0/n).toPrecision(6) : (0).toFixed(6);
    const zeroProp = zeroCount > 0 ? (zeroCount*1.0/n).toPrecision(6) : (0).toFixed(6);
   
    console.log( posProp);
    console.log( negProp);
    console.log( zeroProp);
}
 
function main() {
    const n = parseInt(readLine().trim(), 10);
  
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr, n);
}

 
