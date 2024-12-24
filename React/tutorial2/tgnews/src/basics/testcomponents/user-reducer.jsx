import { useReducer } from "react";
        const initialState={
                showTextFlag : false,
                changeTextFlag : false,
        }
         
        
         const HIDE_TEXT ="HIDE_TEXT";
         const SHOW_TEXT ="SHOW_TEXT";
         const CHANGE_TEXT ="CHANGE_TEXT";

         function reducer(state, action){

                   switch(action.type){

                    case HIDE_TEXT: 
                        return{
                            ...state,
                            showTextFlag :false,
                        }
                        case SHOW_TEXT: 
                        return{
                            ...state,
                            showTextFlag :true,
                        }
                        case CHANGE_TEXT: 
                        return{
                            ...state,
                            showTextFlag :!state.changeTextFlag,
                        }

                   }
         }
    function UseReducerExample(){
        const [state,dispatch] = useReducer(reducer,initialState)
      return(

           <div>
                
                    {state?.showTextFlag? <h3>Use Reducer Hook Example</h3> : null}
                
                
                
                <button onClick={() => dispatch({type:HIDE_TEXT})}>Hide Text</button>
                <button onClick={() => dispatch({type:SHOW_TEXT})}> show text</button>
                <button onClick={() => dispatch({type:CHANGE_TEXT})}> Change Text</button>

           
           </div>

    )



}
export default UseReducerExample





