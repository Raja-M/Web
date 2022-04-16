import PropTypes from 'prop-types'
import React, { Component } from 'react'

import HighOrderComponent from './HighOrderComponent'

 class ClickCount extends Component {
  static propTypes = {}  

  render() {
    
    const { count, incrementCount } = this.props
    return (
      <div> <button  onClick={ incrementCount}>clicked  { count} times</button> </div>
    )
  }
}

export default  HighOrderComponent (ClickCount  , 10)