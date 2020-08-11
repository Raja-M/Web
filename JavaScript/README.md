Var   : Global Scope   Hoisting

Let   : Block Scope    let currentResult; 

Const : 

Quotes :

	Singe quotes , Double Quoes, ``      
	`${var} ${var}`        White Spaces and new lines preserved    in quotes new line should be given like '\n'
	
	

Shawdow variables

Primitive  Data types.
Numbers


Strings


Boolean
			Let  test = true;
			Let name = "John";
			!name   false   !!name true
Null

Undefined
d
Objects


Arrays  :
	Are also objects,   

	Let weekdays = [ "Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday" ];
	Let workdays = [ "Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday" ];
	
	If ( weekdays === workdays)   // false
	
	Let workdays = weekdays;
	If ( weekdays === workdays)   // true 
	
Let workdays = [ …weekdays ];    // for object { …origObject } ;

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

<script src="path/script.js"  defer>   Load In parallel to html parsing and waits to execute
<script src="path/script.js"  async>   Load In parallel to html parsing does not wait to execute.


If ( a === b ) {
;
} else if (  a === c ) {
;
} else {
;
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


Let weekdays = [ "Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday" ];

For ( const day of week ){
	Console.log( day );
}

Let vehicle =  { make: "Benz" , model: "c100", prince: "100k" };

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
	Let num1 = getUserInput();
	
	Result = result/num1;
} catch ( error ) {
	Console.log( " Error " );
	Throw error;
} finally {
	Close all;
}






