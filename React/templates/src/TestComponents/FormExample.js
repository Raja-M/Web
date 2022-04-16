import { TextareaAutosize } from '@mui/material'
import React, { Component } from 'react'

export class FormExample extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username : '',
       comments : '',
       topic : 'Vue'
    }
  }

  handleusernameChange = (event) => {
    console.log(event.target.value)
    this.setState( {
      username: event.target.value
    })
  }

  handlecommentChange = (event) => {
    console.log(event.target.value)
    this.setState( {
      comments: event.target.value
    })
  }
  handletopicChange = (event) => {
    this.setState( {
      topic : event.target.value
    }
    )
  }
  handleSubmit = (event) => {

    alert(`${this.state.username} ${ this.state.comments} ${ this.state.topic}`)
    event.preventdefault()
  }

  render() {
    const { username, comments, topic} = this.state
    return (
      <div>
          Form Component
          <form onSubmit={this.handleSubmit}>
            <div>
              <label> User Name</label>
              <input type='text' value={ username } onChange={  this.handleusernameChange }></input>
            </div>
            <div>
              <label> Comments</label>
              <textarea value={ comments } onChange = { this.handlecommentChange}> </textarea>
            </div>
            <div>
              <label> Topic</label>
              <select value={ topic } onChange= { this.handletopicChange }>
                <option value="react" >React</option> 
                <option value="angular">Angular</option>
                <option value="vue"> Vue</option>
              </select>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
      </div>
    )
  }
}

export default FormExample