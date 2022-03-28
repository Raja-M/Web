import React from 'react';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useSelector , useDispatch } from 'react-redux';
import { buyIceCream } from './iceCreamActions'

function IceCreamContainer(props) {

   const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  console.log(' No of Ice', props.numOfIceCreams)

  return (<div>
      <h2>Number of Ice Creams -    {numOfIceCreams}  </h2>
      <button onClick={( ) => dispatch(buyIceCream())}> Buy Ice Creame </button>
  </div>);

 
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
        
}
 


export default IceCreamContainer;
