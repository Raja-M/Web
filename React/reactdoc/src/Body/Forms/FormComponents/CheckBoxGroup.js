import React from "react";
import { FastField, ErrorMessage } from "formik";
import TextError from "./TextError";

function CheckBoxGroup(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div>
      <label> {label}</label>
      <FastField name={name} {...rest}>
        {({ field }) => {
        
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </FastField>
      
    </div>
  );
}

export default CheckBoxGroup;
