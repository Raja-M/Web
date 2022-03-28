import React from 'react';
import { FastField, ErrorMessage} from 'formik'
import TextError from './TextError';

function RadioButtons(props) {
  const { label, name, options, ...rest } = props ;
    
  return (
  <div>
      <label> {label}</label>
      <FastField name={name} {...rest}>
            {
                ({ field }) => {
                    console.log( "Field :", field)
                    return options.map( option => {
                        return( 
                            <React.Fragment key={option.key}>
                                <input type='radio' id={option.value} {...field} value={option.value} checked={field.value === option.value}/>
                                <label htmlFor={option.value}>{option.key}</label>

                            </React.Fragment>
                        )
                    })
                }
            }

      </FastField>
      <ErrorMessage name={name} component={TextError} />

  </div>)
}

export default RadioButtons;
