import React, { Component } from 'react'

const HighOrderComponent = (OriginalComponet, increment) =>   {
  class NewComponent extends React.Component{
    
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState( (prevState) => {
            return { count: prevState.count + increment }
        })
    }
    render(){
        return <OriginalComponet count={ this.state.count} incrementCount={this.incrementCount} {...this.props}></OriginalComponet>
    }
 }
 return NewComponent
}

export default HighOrderComponent
