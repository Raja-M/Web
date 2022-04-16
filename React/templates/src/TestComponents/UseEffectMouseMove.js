import React, { useState, useEffect} from 'react'

function UseEffectMouseMove() {

  const[ x, setX] = useState(0)
  const[ y, setY] = useState(0)

 const logMouseposition = e => {
      console.log('Mouse event')
      setX( e.clientX)
      setY( e.clientY)
  }

  useEffect ( () => {
      console.log( 'UseEffect called')
      window.addEventListener( 'mousemove' , logMouseposition)

      return () => {
          console.log( 'Component unmounting code')
          window.removeEventListener( 'mousemove', logMouseposition)
      }
      }, []
  ) 


  return (
    <div> Hooks X - {x}  Y - {y} </div>
  )
}

export default UseEffectMouseMove 