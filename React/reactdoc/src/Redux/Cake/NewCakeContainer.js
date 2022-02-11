import React , {useState} from 'react'

// import { connect } from 'react-redux'

import { buyCake } from './cakeActions'

import { useSelector , useDispatch} from 'react-redux'

function NewCakeContainer() {

  const[ numb, setNumb] = useState(1)
  const numOfCakes = useSelector(state => state.cake.numOfCakes )
  const dispatch = useDispatch()
  console.log( ' Test ' , numb)
  return ( 
    
      <div>
        <h2> Number Of Cake - {numOfCakes}  </h2>
        <input type='text' value={numb} onChange={(e) => setNumb( parseInt(e.target.value)) } />
        <button onClick={ () => dispatch( buyCake(numb))  } > Buy {numb} Cakes </button>
        {}
      </div>
 
  )
}



export default  NewCakeContainer
