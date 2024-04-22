function test( initArry , nums){


let newArray = [ ...initArry]

initArryLen = initArry.length

console.log(initArryLen )
loopNum = nums - initArryLen 
console.log(loopNum )
for ( let i =0 ; i < loopNum ; i++){
    console.log( 'In Loop')
    let prevThreeindex = newArray.length - 3

    let lastThreeArry = newArray.slice( prevThreeindex )

    sum = lastThreeArry.reduce((pv, cv) => pv + cv, 0);
    newArray = [ ...newArray , sum  ]
    
    console.log( newArray );
    console.log ( lastThreeArry); 
}    
 return newArray   
}
const initArry = [ 0, 1, 1, 2,4] 

console.log( test(initArry, 3 ))