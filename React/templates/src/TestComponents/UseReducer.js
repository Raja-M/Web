import React , {useReducer} from 'react'

function  FirstCounter () {

  const InitState = {
    firstCounter : 0,
    secondCounter : 0
  }

  const reducer = (state, action) => {

        switch(action.type){
          case('increment') :
            return { ...state, firstCounter : state.firstCounter + 1 } 
          case('decrement') :
            return { ...state, firstCounter: state.firstCounter - 1 }
          default :
            return state

        }

  }
  const [state, dispatch] = useReducer(reducer, InitState)

  return (
    <div>
      <div> FirstCounter : {state.firstCounter} </div>
      <button onClick={ () => dispatch({type:'increment'})}> Increment</button>
    </div>
    
    
  )
}

export default FirstCounter 