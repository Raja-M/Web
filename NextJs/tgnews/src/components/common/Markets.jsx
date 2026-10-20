"use client";
import React , { Component} from "react";

class Markets extends Component {

    constructor (props) {
        super (props);
        this.state = {
            marketName: "S&P 500",
            value: 0
        }
    }

  updateStockValue = () => {
        this.setState(
            
            ( prevState, props) => ({  ...prevState, value: 5000   })

            
            , 
            () => {
            console.log("Stock value updated to:", this.state.value);
        }); 
    }     
    componentDidMount () {
        this.updateStockValue();
    }   
  render() {
    return ( 
        <>
            <h1> Markets :   </h1>
            <h2>  {this.state.marketName} </h2> 
 
            <p> Current Value: {this.state.value} </p>
    
        </>
     );
    }
}
export default Markets;