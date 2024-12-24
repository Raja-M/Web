 import { createContext } from "react";
 import { useState } from "react";

 export const GlobalContext = createContext(null);

 export function UseContextComponent({children}){
    
    // use context example

    const [theme, setTheme] = useState('light');
    console.log("theme from provider");
    console.log(theme);

    function handleChange(){
        setTheme(theme ==="light" ? "dark" :"light");
    }
    
    return(
        //<>
            //<h1> Usecontext Example</h1>
             
            //<h2> component comes here </h2>
        // </>
       
       <GlobalContext.Provider value ={{theme,handleChange}}>{children}</GlobalContext.Provider>
    )
}
export default UseContextComponent;