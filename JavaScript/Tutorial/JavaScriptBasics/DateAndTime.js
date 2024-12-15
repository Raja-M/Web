let myDate = new Date( "2017-01-01");

console.log( "myDate : " + myDate );

console.log( "myDate : " + new Date( 2024, 12, 20, 1, 2, 30, 3231) );

let currDate = new Date();

console.log( "myDate : " + new Date().getTime() );
console.log( "myDate : " + currDate.getDate() );
console.log( "myDate : " + currDate.getTimezoneOffset() );

function getWeekDay(pDate){
   let days = ['SU', 'MO','TU','WE','TH','FR','SA'];
    
   return(  days[pDate.getDay() ]);
}

console.log( getWeekDay(currDate));
