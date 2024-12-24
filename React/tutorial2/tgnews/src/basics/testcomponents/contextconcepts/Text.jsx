import {useContext} from "react";
import {GlobalContext} from "../UsecontextComponent"

export function ContextTestComponent(){
    const {theme} = useContext(GlobalContext);
    console.log("Global context from Text");
    
    return (
    <h1 
      style ={{fontSize: theme==='light' ? "50Px":"100px",
                backgroundcolor:theme ==="light"? "#fff":"#000",
                color:theme === 'light' ? "blue" :"yellow",

              }}>change text</h1>
    )
    
}
export default ContextTestComponent;