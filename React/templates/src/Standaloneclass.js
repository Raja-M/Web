console.log( "Hellow world");
class Standaloneclass{ 
  
  testArrowInArrow = () => {
    console.log('Arrow 2')
  }

  testArrow = () => {
    console.log('Arrow 1')
    this.testArrowInArrow();
  }

  
  
}

let tstStandaloneclass = new Standaloneclass();

tstStandaloneclass.testArrow();
