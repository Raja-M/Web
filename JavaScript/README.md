    Var   : Global Scope   Hoisting

let   : Block Scope    let currentResult; 

Const : 

Quotes :

	Singe quotes , Double Quoes, ``      
	`${var} ${var}`        White Spaces and new lines preserved    in quotes new line should be given like '\n'
	
	

Shawdow variables

Primitive  Data types.
Numbers


Strings


Boolean
			let  test = true;
			let name = "John";
			!name   false   !!name true
Null

Undefined
d
Objects


Arrays  :
	Are also objects,   

	let weekdays = [ "Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday" ];
	let workdays = [ "Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday" ];
	
     
    const [ holiday , ...workdays ] = workdays;  // array destructering.
    
	If ( weekdays === workdays)   // false
	
	let workdays = weekdays;
	If ( weekdays === workdays)   // true 


	
let workdays = [ …weekdays ];    // for object { …origObject } ;

Array Functions:
    filter, pop, push, slice, splice, size, foreach, sort, min, max, 

Spread Operator :
    const person = { name: 'Max', hobbies: ['sports', 'cooking'] } ;
    const person1 = person  // will copy just reference
    const person2 = { ...pserson} // will copy actual values of high level varialbls and references of low level variables( hobbies)
                                  // if anything changes in person.hobbies like new hobbies its reflected on person2.hobbies also
                                  // if you want to avoid this spread all levels.
    const person3 = {...person , hobbies: [ ...person.hobbies]} // this overrides person3 hobbies reference of person with new array hobbies.


Heap 

    Global variable
    Function definitions


Stack

    Function calls
    And tempvariables



typeof

Undefined  (true)


Null  ( false )


NaN    ( true) 
``
<script src="path/script.js"  defer>   Load In parallel to html parsing and waits to execute
<script src="path/script.js"  async>   Load In parallel to html parsing does not wait to execute.



If ( a === b ) {

} else if (  a === c ) {

} else {

}


'use strict';      
//  cant use variable before defining , Cant use reserved words like undefined as variable name

 switch ( variable ) {
	Case  value1: 
		Expression;
	   Break;
	Case  value1: 
		Expression;
	   Break;
	Case  value1: 
		Expression;
	   Break;
	Case default:
	   Expression;
	   Break;
 }

For( let I = 0 ; I < 3 ; i++ ){
	Console.log( I ) ;
}


let weekdays = [ "Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday" ];

For ( const day of week ){
	Console.log( day );
}

let vehicle =  { make: "Benz" , model: "c100", prince: "100k" };

For ( const key in vehicle ) {
	
	If( vehicle[key] = "done" ){
		Break;
	}
	If( vehicle[key] = "price" ){
		continue;
	}
	
	Console.log( vehicle[key] );
}

While( I < 100 ) {
	Expression;
	i++;
}

Try{
	let num1 = getUserInput();
	
	Result = result/num1;
} catch ( error ) {
	Console.log( " Error " );
	Throw error;
} finally {
	Close all;
}


Object : 

const person = { name: 'Max', hobbies: ['sports', 'cooking'] } ;
const person2 = Object.assign( {}, person);  // but spread operator recommended here

Object destructering :

const Movie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random()
  };

  const { info, ...otherMovieMembers} = Movie;
  const {title: movieTitle } = info;  // this carve out only title prop from info and give it a new named variable movieTitle 
                                       // movieTitle is not a value of title in this case.

  if ( info in mvoies) // if info is part of movies or not
   
