console.log( "Hellow world");

  testArrowInArrow = () => {
    console.log('Arrow 2')
  }
  testArrow = () => {
    console.log('Arrow 1')
    testArrowInArrow();
  }

  testArrow();

