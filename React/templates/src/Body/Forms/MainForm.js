import tesypes from 'prop-types';
import React, { Component } from 'react';

import { connect } from 'react-redux'

import { submitUserForm1 } from '../../Redux/UserForm1/UserForm1Actions';

import "./MainFormStyles.css"

export class MainForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       gender: 'female',
       owns:[],
       comments: '',
       topic: 'react',
 
       
    }
    this.properties2 = new Map([
                            ["stocks", false], 
                            ["crypto", false],
                            ["realestate", false]
    ]
                            )
  }
  
  handlesUserNameChange = (event) => {

    // console.log( " prev state :" + this.props.username)
    this.setState(
      {
        username: event.target.value
      }
      // (prevState, props) => 
      // (
      // {
      
      //   username: event.target.username 
      // }
      // )
    )
  } 
  handlesGenderChange = (event) => {
    this.setState(
      {
        gender: event.target.value
      }
    )
    
  } 

  handleCommentChange = (event) =>{

    this.setState(
      {
        comments: event.target.value
      }
    )

  }

  handleTopic = (event) => {
      this.setState(
      {
        topic: event.target.value
      }
    )
  }

  handleSubmit = (event) => {
      
    alert(  this.state.gender + " " + this.state.topic + "  " + this.state.username , ) 
    const userForm1 = {
      gender: this.state.gender,
      username: this.state.username,
      comments: this.state.comments,
       topic: this.state.topic,
      
    

    }
    alert( "user Form" +  userForm1.gender)
    
    this.props.dispatch( submitUserForm1( userForm1))
    event.preventDefault() 

  }
  
  render() {
    const {username, gender, comments, topic, owns} = this.state
    return (

        <div className="flex-article">
          <form style={{ textAlign: "center"}} onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username"> UserName</label>
              <input type = 'text'  name="username" value={username } onChange={this.handlesUserNameChange} />
            </div>
            <div>
              <h3> Please select Gender below </h3>
              <label htmlFor="gender"> Male</label>
              <input type = "radio"  name="gender" value="male" onChange={this.handlesGenderChange} checked={gender === "male"}/>
              <label htmlFor="gender"> Female</label>
              <input type = "radio"  name="gender" value="female" onChange={this.handlesGenderChange} checked={gender === "female"} />
            </div>
            <h1> Properties</h1>
             

            <div>
              <h3>owns</h3>
             <div>
             
             {/* <p> Hi </p>
              { this.state.properties.forEach((v,k) => {console.log("test")}) }
               
            

              {/* {new Array(3).fill(0).map((k, index) => <div key={index}>content1</div>)}  *
             ({ new Array([
                            ["stocks", false], 
                            ["crypto", false],
                            ["realestate", false]
                            ]
                            ).forEach( (v,k) =>  <div key={k}>content2</div> )} )
              { this.state.properties.forEach( (v,k) => { console.log(k)  }  )} 
 */}


            
            
            </div>
            </div>
            <div>
              <label> Comments</label>
              <textarea name="comments" value={comments} onChange={this.handleCommentChange}></textarea>
            </div>
            <div>
              <label>Topic</label>
              <select name="topic" value={topic} onChange={this.handleTopic}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </form>
          
          
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log ( "UserForm1State", state.userForm1.username  ) 
  return { userForm1: state.userForm1 } 
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch
    }
}

export default connect( mapStateToProps,mapDispatchToProps ) (MainForm)