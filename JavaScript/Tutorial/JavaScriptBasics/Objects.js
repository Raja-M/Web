

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