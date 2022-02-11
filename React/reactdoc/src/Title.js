import React from 'react';
import { Children } from 'react/cjs/react.production.min';



function Title(props) {
   
  return (
    
  <> 
    
      <h1 style={{ display : 'inline'}}> {props.text} {props.children} </h1>
      <h2 style={{ display : 'inline' , align : 'right'}}>  {new Date().toLocaleDateString()}</h2>
  </>);

}

export default Title;
