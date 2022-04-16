import React from 'react'
import { useLinkClickHandler } from 'react-router-dom'

const  TestFunction = (props) => {
  const { name, heroName} = props

  function clickHandler(){
    console.log('Button Clicked')
  }
  return (
    <div>
       <h1>TestFunction </h1> { name} aka { heroName}
       <button onClick={() => clickHandler()}>Click</button>
    </div>
  )
}

export default TestFunction