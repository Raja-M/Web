import { Component } from "react";
import UseContextComponent from "./testcomponents/UsecontextComponent"
import UseReduceComponent from "./testcomponents/UseReduceComponent"
import ContextButtonComponent from "./testcomponents/contextconcepts/Button"
import ContextTestComponent from "./testcomponents/contextconcepts/Text"

class ClassBasedcomponent extends Component{

    render(){

        return (

            <div>
                <h1> Class Based Component</h1>
                <UseContextComponent>
                    <ContextButtonComponent/> 
                    <ContextTestComponent/>
                </UseContextComponent>

                <UseReduceComponent>


                </UseReduceComponent>

               
            </div>
        )


    }
}

export default ClassBasedcomponent;