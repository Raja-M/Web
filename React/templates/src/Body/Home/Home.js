import tesypes from 'prop-types';
import React, { Component } from 'react';

import MainForm from '../Forms/MainForm';

import Menu from  "../../MenuBar"

 

export class Home extends Component {

   
  render() {

    return (<div> 
      
       

        
         
     
          
     
        <section className="flex-main">
          
        <div className="flex-article">
           
          <MainForm/>
          <article >
            article
          </article>
        </div>
         <aside className="flex-aside"> 
            Side Menu
         </aside>

         </section>
         
       </div>
    );
  }
}


export default Home