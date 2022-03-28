import React , {useState} from 'react';

import { Formik , Form , FastField, ErrorMessage, Field, FieldArray} from 'formik'
import * as Yup from 'yup'
import TextError from '../../Forms/FormComponents/TextError'


    const initialValues =  {
      prgrname: '',
      prgremail: '',
      prgmname: '',
      prgdesc:'',
      prgaddr: '',
      social: {
        facebook: '',
        twitter: ''
      },
      phonenbrs: ['', ''],
      phNumbers: ['']

    }
    const savedValues =  {
      prgrname: 'Raja',
      prgremail: 'fsdf@cv.c',
      prgmname: 'prg1',
      prgdesc:'prog one',
      prgaddr: '',
      social: {
        facebook: '',
        twitter: ''
      },
      phonenbrs: ['', ''],
      phNumbers: ['']

    }

    const onSubmit =  (values, onSubmitProps)  => { 
      console.log('Formdata' , values)
      onSubmitProps.setSubmitting(false)
      
      
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
      prgmname: Yup.string().required('Required')

    })
    
    const validateComments = (value) => {
      let error;

      if(!value){
        error = 'Required'
      }
      return error
    }

function EstimationsForm() {

  

  const [formValues, setFormValues] = useState(null)


  return (<Formik 
            initialValues = { formValues || initialValues}
            validationSchema = { validationSchema}
            onSubmit={onSubmit} 
            validationOnChange={false}
            //validateOnMount
            enableReinitialize
             >
            {
              formik => {
                return (
                   <Form >
              <div>
                <label htmlFor='prgrname' > Programer Name </label>
                <FastField type='text' id='prgrname' name='prgrname'   />
                <ErrorMessage name='prgrname' >
                  {
                    errorMsg => <div className='error' style={{color:"red"}}>{errorMsg}</div>
                  }
                </ErrorMessage> 
              </div>

              <div>
                <label htmlFor='prgremail' > Programer Email </label>
                <FastField type='text' id='prgremail' name='prgremail'     />
                <ErrorMessage name='prgremail' component={TextError}/>
              </div>

              <div>
                <label htmlFor='prgmname' > Program Name </label>
                <FastField type='text' id='prgmname' name='prgmname'    placeholder='Program created by'   />
                <ErrorMessage name='prgmname' /> 
              </div>

              <div>
                <label htmlFor='prgdesc' > Program Description</label>
                <FastField as='textarea' id='prgdesc' name='prgdesc' validate={validateComments}></FastField>
                <ErrorMessage name='prgdesc' component={TextError} />
              </div>
            
              <div>
                <label htmlFor='prgaddr' > Program Location</label>
                <FastField   name='prgaddr' >
                  {
                    (props) => {
                      const { field, form, meta} = props
                     
                      return (<><input id='prgaddr'  { ...field}></input>
                              {meta.touched && meta.error ? <div>{meta.error}</div>:null}
                              </>
                      )
                    }
                  }
                </FastField>
              </div>
                  <label htmlFor='facebook'>Facebook Profile</label>
                  <FastField type='text' id='facebook' name='social.facebook' />
              <div>
              </div>
                  <label htmlFor='twitter'>Twitter Profile</label>
                  <FastField type='text' id='twitter' name='social.twitter' />
              <div>

              </div>
                  <label htmlFor='phonenbrs1'>Primary Phone nbr</label>
                  <FastField type='text' id='phonenbrs1' name='phonenbrs[0]' />
              <div>
              </div>
                  <label htmlFor='phonenbrs2'>Secondary Phone nbr</label>
                  <FastField type='text' id='phonenbrs2' name='phonenbrs[1]' />
              <div>

              </div>
                  <label htmlFor='phNumbers'>List Of Phone numbers</label>
                  <FieldArray  name='phNumbers' >
                    {
                      (FieldArrayProps) =>{
                        
                        const {push, remove, form} = FieldArrayProps 
                        const { values } = form
                        const { phNumbers } = values
                        return (<div> 
                                {
                                  phNumbers.map( (phNumber, index) => {
                                       return(
                                        <div key={index}>
                                           <FastField name={`phNumbers[${index}]`}  />
                                           {
                                             index > 0 && (
                                              <button type='button' onClick={() => remove(index)}>{' '} - { ' '}</button>
                                             )
                                           }
                                           
                                           <button type='button' onClick={() => push('')}> {' '} + { ' '} </button>
                                        </div>

                                       ) 
                                  }
                                   )

                                }       
                               </div>
                        )
                      }
                    }
                  
                  </FieldArray>
              <div>
                

              </div>
              <div>
                <button type='button' onClick={() => setFormValues(savedValues)} > Load Saved Values </button>
              </div>
              <div>
                <button type='reset' onClick={() => setFormValues(initialValues)}> Reset </button>
              </div>
              <button type='button' onClick={ () => formik.validateField("prgdesc")} >
                Validate Description 
              </button>
              <button type='button' onClick={ () => formik.validateForm()} >
                Validate all
              </button>
              <button type='button' onClick={ () => formik.setFieldTouched("prgdesc")} >
                Visit Description 
              </button>
              <button type='button' onClick={ () => formik.setTouched(
                {
                  prgrname: true,
                  prgremail: true,
                  prgmname: true,
                  prgdesc: true
       
                }
              )} >
                Visit fields 
              </button>
              <button type='submit'  disabled={!formik.isValid /* && formik.dirty} */  || formik.isSubmitting}> Submit</button>

            </Form>
                )
              }
            }
           
          </Formik>);
}

export default EstimationsForm;
