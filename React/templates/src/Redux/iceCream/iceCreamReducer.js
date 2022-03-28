
import { BUY_ICE_CREAME } from "./iceCreamTypes";

const initialState = {
    numOfIceCreams: 10
}

const iceCreamReducer = ( state = initialState, action) => {
    console.log( 'Ice cream reducer called')
    switch (action.type) {
        case  BUY_ICE_CREAME:  return {
            ...state, 
            numOfIceCreams: state.numOfIceCreams - action.payload
        }
        default : return state

    }
}

export default iceCreamReducer