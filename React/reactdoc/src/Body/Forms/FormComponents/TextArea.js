import React from "react";
import { FastField, ErrorMessage } from "formik";
import TextError  from './TextError'

function TextArea(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}> {label} </label>

      <FastField as="textarea" id={name} name={name}></FastField>

      <ErrorMessage name={name} component={TextError}></ErrorMessage>
    </div>
  );
}

export default TextArea;
