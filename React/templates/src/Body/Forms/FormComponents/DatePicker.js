import React from 'react';

import { FastField, ErrorMessage } from 'formik';
import DateView from 'react-datepicker'
import TextError from './TextError';

function DatePicker(props) {
  const { label, name, ...rest} = props
  return (
  <div>
      <label htmlFor={name}> {label}</label>
      <FastField name={name} >
          {
              ( { form, field}) => {
                  const { setFieldValue } = form
                  const { value } = field
                  return(
                      <DateView 
                        id={name}
                        {...field}
                        selected={value}
                        onChange={ val => setFieldValue(name, val)}
                      />
                  )
              }
          }
      </FastField>
      <ErrorMessage name={name} component={TextError} />

  </div>   
  )
}

export default DatePicker;
