import React from 'react';

import { useFormik } from 'formik'
import * as Yup from 'yup'

function oldEstimationsForm() {

    const initialValues =  {
      prgrname: '',
      prgremail: '',
      prgmname: ''
    }

    const onSubmit =  values => { 
      console.log('Formdata' , values)
    }

    const validate =  values => {
      let errors = {}
      if(!values.prgrname){
        errors.prgrname = 'Required'
      }
      if(!values.prgremail){
        errors.prgremail = 'Required'
      } else if ( !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(values.prgremail) ){
        errors.prgremail = 'Invalid email format'
      }

      if(!values.prgmname){
        errors.prgmname = 'Required'
      }
      return errors
    }

    const validationSchema = Yup.object({
      prgrname: Yup.string().required('Required!'),
      prgremail: Yup.string().email( 'Invalid Email format').required('Required'),
      chnannel: Yup.string().required('Required')

    })
    const formik = useFormik({
    initialValues,
    onSubmit,
    //validate
    validationSchema
  })

  console.log( 'Form toouched', formik.touched)

  return (<div>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='prgrname' > Programer Name </label>
      <input type='text' id='prgrname' name='prgrname' onChange={ formik.handleChange} onBlur={formik.handleBlur} value={formik.values.prgrname } />
      { formik.touched.prgrname && formik.errors.prgrname  ? <div>{formik.errors.prgrname}</div> : null}

      <label htmlFor='prgremail' > Programer Email </label>
      <input type='text' id='prgremail' name='prgremail'  onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.prgremail}/>
      {formik.touched.prgremail &&  formik.errors.prgremail ? <div>{formik.errors.prgremail}</div> : null}
     
      <label htmlFor='prgmname' > Program Name </label>
      <input type='text' id='prgmname' name='prgmname'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.prgmname} />
      {formik.touched.prgmname && formik.errors.prgmname ? <div>{formik.errors.prgmname}</div> : null}

      <button type='submit' > Submit</button>

    </form>
  </div>);
}

export default oldEstimationsForm;
