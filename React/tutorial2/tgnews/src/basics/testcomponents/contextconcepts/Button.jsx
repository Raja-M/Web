import {useContext} from "react";
import {GlobalContext} from "../UsecontextComponent"


export function ContextButtonComponent(){
    const {handleChange} = useContext(GlobalContext);
    console.log("Global context from Button");
    
    return <button onClick={handleChange}>change theme</button>
    
}
export default ContextButtonComponent;