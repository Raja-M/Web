import React from 'react';
import { FastField, ErrorMessage} from 'formik'

import TextError from './TextError';

function Input( props) {
  const { label , name, ...rest } = props 
  return (
    <div>
      <label htmlFor={name}> {label} </label>
      <FastField id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
 
}

export default Input;
