import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import TextError from './TextError';

function Select(props) {
  const { label, name, options, ...rest} =   props
  return (
    <div>
      <label htmlFor={name}> {label}</label>
      <FastField as='select' id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </FastField>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
