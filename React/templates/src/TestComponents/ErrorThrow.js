import React from 'react'

function ErrorThrow({heroname}) {
  
  if( heroname === 'joker'){
      throw new Error('Not a hero!');      
  }
  
  return (
    <div> {heroname }</div>
  )
}

export default ErrorThrow
