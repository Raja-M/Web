
let i  = Symbol( 'iname');

let testObject = {

    0: 'Zero',
    1: 'one',
    2: 'two',
    [i]: 'Symboal variable value', 
    
};


console.log( " Symbol vlaue : " + testObject[i] );
let strName = 'Sujatha';

for ( let char of strName){
    console.log( " value thru for : " + char);

}


let iterator = strName[Symbol.iterator]();

while(true){
    let res = iterator.next();
    if (res.done) break;
    console.log( "Val thru iter : " + res.value + " " + res.done) ;
}



 