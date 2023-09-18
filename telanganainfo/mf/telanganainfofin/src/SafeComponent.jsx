import React from "react";

export default class SafeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { hasError: false };
        console.log( " Defining safeComponent");
    }
    static getDerivedStateFromError(error){
        console.log( " Derived Error : "  );
        return{ hasError : true };
    }

    componentDidCatch( ){
     
         
    }


    render() {
        console.log( " in Render") ;
         console.log( " In Render Error : " + this.state.hasError );
        if ( this.state.hasError){
            return (<h1> Something went Wrong </h1>);
        }

        return this.props.children;
       
    }
}