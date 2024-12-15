

// Object destructuring 

console.log( " Javascript Objects Topics ");

let showMenu = ( { title = "Menu", width = 100, height = 200 } = {} ) => {

    console.log( `${title} ${width} ${height}` );

}

showMenu();

let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };

  options.rating = 5 ;

  for ( let objProps in options){
    console.log ( objProps);
  }

  let optionsnum = {
    2: "My menu",
    1: ["Item1", "Item2"]       // in loop always order as 1, 2 to change add '+' sign
  };

  for ( let objProps in optionsnum){
    console.log ( objProps);
  }

  // Symbol examples

  let id = Symbol("id");
  console.log(" Symbol id : " + id.toString());
  console.log(" Symbol description : "+ id.description)

  let user = {
    name : "John",
    money: 1000,

    [Symbol.toPrimitive](hint){
        console.log( `Hint : ${hint}`);
        return hint == "String" ? `{name : "${this.name}}` : this.money;
    }
  }

  console.log(user);
  console.log(+user);
  console.log(user + 500);

