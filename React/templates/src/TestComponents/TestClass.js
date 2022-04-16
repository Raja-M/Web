import React, { Component } from 'react'

export class TestClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       message: 'Hello',
       parentName : 'Parent'
    }
  }

  increment(){
      /*
      this.setState({
          count : this.state.count + 1
      },
      () => {
          console.log( 'Callback value' , this.state.count)
      }
      )
     
      console.log( this.state.count)
      */
     this.setState( (prevState, props) => ({
         count: prevState.count + 1 ,
         message: 'Hello'
  }) , console.log( 'Callback value' , this.state.count) )
  }

  incrementFive(){
      this.increment();
      this.increment();
      this.increment();
      this.increment();
      this.increment();

  }
  
  testArrowInArrow = () => {
    console.log('Arrow 2')
  }
  testArrow = (st) => {
    console.log('Arrow 1' , st)
    this.testArrowInArrow();
  }

  clickHandler = () => {
    this.setState( {
     message : 'Goodbye !'
  })
}

greetParent = () => {
  alert(`Hello ${this.state.parentName}`);
}

render() {
    this.testArrow( "abc");
    return (
      <div>

          <div> TestClass : Count - {this.state.count}  </div>
          <button  onClick={ () => this.incrementFive()}> Increment </button>
          <div>{this.state.message}</div>
          <div>

            <button onClick={this.clickHandler}>click me</button>
          </div>

      </div>
    )
  }
}

export default TestClass