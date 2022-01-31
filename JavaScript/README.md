Var   : Global Scope   Hoisting

let   : Block Scope    let currentResult; 

*****HOSTING

** open browser in cognitive mode.

Const : 

Quotes :

	Singe quotes , Double Quoes, `` 
    template litteral     
	`${var} ${var}`        White Spaces and new lines preserved    in quotes new line should be given like '\n'
    `${var} ${var}`        var replaced with variable value.
    `This is like 
       in new line `;  // white-space : pre  style should be used.
       
*****     
Only applicable for external script files.
<script src="path/script.js"  defer>   Load In parallel to html parsing and waits to execute
<script src="path/script.js"  async>   Load In parallel to html parsing does not wait to execute 
                                        order of script execution not guaranteed even they placed one after other.
if we combine inline script with src= then inline script will be ignored.
    <script src="file.js">
        alert('hi');  // this will be ignored.
    </script>
	

Shawdow variables

Primitive  Data types.
Numbers


Strings


Boolean
			let  test = true;
			let name = "John";
			!name   false   !!name true

Null or undefined or NaN all of them are false

Null

Undefined

typeof

Undefined  (true) datatype. ( type of undefined) default value of undefined variable. You should not assign this value to variable manually.


Null  ( false ) datatype. (type of object) Never assigned by default. Need to assign manually to reset/clear variable.


NaN    ( true)  Not a type. (type of number) Special value. Not a number ex: (3 * 'Hi')

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



<<<<<<< HEAD
typeof

Undefined  (true)


Null  ( false )


NaN    ( true) 
``
<script src="path/script.js"  defer>   Load In parallel to html parsing and waits to execute
<script src="path/script.js"  async>   Load In parallel to html parsing does not wait to execute.



If ( a === b ) {

=======



If ( a === b ) {   // **** compares value and type also == compares only values so '2' == 2 true but '2' === 2 false.
;
>>>>>>> aa54fbb3bc18b91ad0f40d363305dbe7c98a3b98
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

***** Spread operator {...objectname }  copies actual content to object variable.
***** Rest Operator ( numb1, num2, ...numbers) =>  {}  Rest operator is used to take multiple argument values from call.
**  arguments  like rest operator arguments parameter will be always there to capture the remaining arguments . // Dont use.



***** We can manipulate the content of object created with const keyword 
because variable with const keyword only stores the address of the object which we are not changing.
const hobbies = ['workout', 'reading'];
hobbies.push['cooking'];  //works but

hobbies = ['painting', 'music'];  // will not work.

***** Inananomous functions are created multiple times in memory can lead to memormory leak
ex:

addEvntBttn.addEventListner('click', addListner);
function addListner(){
    clickableButton.addEventListner( 'click', function(){

        console.log('adding ananoumous function');

    })
}

const function1 = ( num1, num2 = 20) => num1 + num2;

function1( 10)  // calling function like function1( 10, undefined) then 20 default value will be taken 

call by function

***** bind example. start

let logMessage = ( writeLog, message) => {
    let i = 10;
    writeLog(message);
};    
let printLog = (typ,level, message) => {
    console.log( typ + '  ' + level +' ' + message + ' ' + i);
};
console.log('Starting ..');
logMessage( printLog.bind(this,'warn', '1'), 'log full');
***** bind example. end

***** apply and call executes the function immediately.




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
   
