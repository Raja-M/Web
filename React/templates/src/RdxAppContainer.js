import React from 'react'

import CakeContainer from './Redux/Cake/CakeContainer'
import IceCreamContainer from './Redux/iceCream/IceCreamContainer'
import NewCakeContainer from './Redux/Cake/NewCakeContainer'
import UserContainer from './Redux/UserContainer'

// import { connect } from 'react-redux'

 
function RdxAppContainer() {
 
  return ( 
    
      <div>
        {/* <UserContainer></UserContainer> */}
        <CakeContainer></CakeContainer>
        {/* <IceCreamContainer></IceCreamContainer>
        <NewCakeContainer></NewCakeContainer> */}
        
      </div>
 
  )
}



export default  RdxAppContainer
