import { BUY_CAKE } from "./cakeTypes"

export const buyCake = ( numb = 1)  => {
    return {
        type : BUY_CAKE,
        payload: numb
    }
}