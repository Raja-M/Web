import React from 'react'

import { connect } from 'react-redux'

import { buyCake } from './cakeActions'

import { useSelector , useDispatch} from 'react-redux'

function CakeContainer(props) {
  //const numOfCakes = useSelector(state => state.cake.numOfCakes )
  //const dispatch = useDispatch()
  console.log( ' Test 2' , props.numOfCakes)
  return ( 
    
      <div>
        <h2> Number Of Cake - {props.numOfCakes}  </h2>
        <button onClick={ () => { props.dispatch(buyCake(2))}  } > Buy Cake prop2</button>
        {}
      </div>
 
  )
}

const mapStateToProps = state => {
    console.log( "in state to props " , state.cake.numOfCakes)
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
