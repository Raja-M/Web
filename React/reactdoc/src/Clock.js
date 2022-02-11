import React from "react";

 

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
        console.log( " constructor called")    

    }

    componentDidMount(){
        this.timeId = setInterval(
            () => this.tick(), 
            1000
        );
        console.log( " did mount called") 
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
        console.log( " will unmount called") 
    }

    tick(){
 
        this.setState(
            {
                date: new Date()
            }
        );
    }
    render(){
        return(
            
            <> 
                
                <h2 style={{ display : 'inline'}}> {this.state.date.toLocaleTimeString() } .</h2>
            </>
        );
    }

}

export default Clock;
