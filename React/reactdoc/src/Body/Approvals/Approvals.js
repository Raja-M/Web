import tesypes from 'prop-types';
import React, { Component } from 'react';

import MainForm from '../Forms/MainForm';

import Menu from  "../../MenuBar"

 

export class Approvals extends Component {

   
  render() {

    return (
    <div>     
      <section className="flex-main">          
        <div className="flex-article">           
          <MainForm/>           
        </div>
      </section>         
    </div>
    );
  }
}


export default Approvals