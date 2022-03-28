import { BUY_ICE_CREAME } from  "./iceCreamTypes";

export const buyIceCream = ( numb = 1) => {
    return {
        type: BUY_ICE_CREAME,
        payload: numb
    }
}