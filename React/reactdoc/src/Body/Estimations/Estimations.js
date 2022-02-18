import tesypes from 'prop-types';
import React, { Component } from 'react';

import MainForm from '../Forms/MainForm';

import Menu from  "../../MenuBar"
import EstimationsForm from './Forms/EstimationsForm'; 

export class Estimations extends Component {   
  render() {
    return (<div>       
        <section className="flex-main">          
          <div className="flex-article">            
          <EstimationsForm/>          
          </div>  
         </section>
         
       </div>
    );
  }
}


export default Estimations