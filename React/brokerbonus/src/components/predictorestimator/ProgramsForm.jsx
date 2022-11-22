import { TextField, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup, Switch, Grid, Box, Input } from '@mui/material'
import React, { useState } from 'react'
import { Form, useOutletContext } from 'react-router-dom'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import { modalStyles } from './styles'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

export const ProgramsForm = () => {

    const defaultInputValues = {
        userId: '',
        email: '',
        phoneNumber: ''
    };

    const [values, setValues] = useState(defaultInputValues);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const validationSchema = Yup.object().shape({
        userId: Yup.string()
            .required('User ID is required')
            .min(6, 'User ID must be at least 6 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid.'),
        phoneNumber: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid'),
    });
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const handleChange = (value) => {
        setValues(value)
    };

    const obj = useOutletContext()

    const onSubmit = data =>  console.log(data);
    
    return (
        <>

      <form onSubmit={handleSubmit(onSubmit)}>
                <paper sx={{}}>
                    <Grid container  

                        direction="row"
                        rowSpacing={4}
                        columnSpacing={8}
                        >

                        <Grid item xs={12} align="center" >     
                        <h1 > Predictor Estimator</h1>
                        </Grid>
                        <Grid item xs={12} align="center" >     
                        <h1 > </h1>
                        </Grid>
                        
                        <Grid item xs={2}> </Grid>
                        <Grid item xs={7}> 
                                   <TextField  
                                 fullWidth
                                id="bonusprogramname"
                                name="bonusprogramname"
                                label="Bonus Program Name"
                                type="text"
                                InputLabelProps={{ shrink: true }}
                                required
                                error
                                helperText={'This is Bonus program name'}
                            >

                            </TextField>
                        </Grid>
                        <Grid item xs={3}> </Grid>

                        <Grid item xs={2}> </Grid>
                        <Grid item xs={7}> 
                        <TextareaAutosize 
                                    aria-label="textarea"
                                    placeholder="Bonus Program Description"
                                     
                                    style={{width:"100%"}}
                                    minRows={5}
                                    InputLabelProps={{ shrink: true }}
                                  
                                />

                        </Grid>
                        <Grid item xs={3}> </Grid>

                        <Grid item xs={2}> </Grid>
                        <Grid item xs={7}> 
                        <Box sx={modalStyles.inputFields}>
            <TextField
                placeholder="User ID"
                name="userId"
                label="User ID"
                required
                {...register('userId')}
                error={errors.userId ? true : false}
                helperText={errors.userId?.message}
                value={values.userId}
                onChange={(event) => handleChange({ ...values, userId: event.target.value })}
            />
            <TextField
                placeholder="Email"
                name="email"
                label="Email"
                required
                {...register('email')}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                value={values.email}
                onChange={(event) => handleChange({ ...values, email: event.target.value })}
            />
            <TextField
                placeholder="Phone number"
                name="phoneNumber"
                label="Phone number"
                required
                {...register('phoneNumber')}
                error={errors.phoneNumber ? true : false}
                helperText={errors.phoneNumber?.message}
                value={values.phoneNumber}
                onChange={(event) => handleChange({ ...values, phoneNumber: event.target.value })}
            />
        </Box>
        <Box sx={{}}>
                <input type="submit" />
        </Box>
                        </Grid>
                        <Grid item xs={3}> </Grid>

                       
                            
                        <Grid item xs={2}> </Grid>
                        <Grid item xs={8} sm={4}> 
                        <FormControl
                                    component="fieldset"
                                    variant="filled"

                                >
                                    <FormLabel
                                        component="legend"
                                        htmlFor="marketsegmentRadiogroupradio"
                                    >
                                        Market Segment
                                    </FormLabel>
                                    <RadioGroup
                                        aria-label="marketsegment"
                                        id="marketsegmentRadio"
                                        defaultValue="small"
                                        name="marketsegmentRadiogroup"

                                    >
                                        <FormControlLabel
                                            value="small"
                                            control={<Radio />}
                                            label="Small"
                                        />
                                        <FormControlLabel
                                            value="medium"
                                            control={<Radio />}
                                            label="Medium"
                                        />
                                        <FormControlLabel
                                            value="large"
                                            control={<Radio />}
                                            label="Large" />
                                    </RadioGroup>

                                </FormControl>

                        </Grid>
                        <Grid item xs={2} display={{xs:"block", sm:"none"}} ></Grid>
                        <Grid item xs={8} sm={4}> 
                        <FormControl
                                    component="fieldset"
                                    variant="filled"

                                >
                                    <FormLabel
                                        component="legend"
                                        htmlFor="subscribertyperadio"
                                    >
                                        Subscriber Type
                                    </FormLabel>
                                    <RadioGroup
                                        aria-label="subscribertype"
                                        id="subscribertypeRadio"
                                        defaultValue="small"
                                        name="subscribertypeRadiogroup"

                                    >
                                        <FormControlLabel
                                            value="rention"
                                            control={<Radio />}
                                            label="Retention"
                                        />
                                        <FormControlLabel
                                            value="effectivedated"
                                            control={<Radio />}
                                            label="Effectivedated"
                                        />

                                    </RadioGroup>

                                </FormControl>

                        </Grid>
                        <Grid item xs={2}> </Grid>
                                   
                          
                             
                        <Grid item xs={.2} sm={1.9}   > </Grid>
                        
                        <Grid item xs={7}> 
                    
                        <FormControlLabel
                                    label={"General Agent" }
                                    labelPlacement="start"
                                    enable
                               
                                    control={
                                        <Switch
                                             name="GeneralAgentSwith">
                                        </Switch>
                                    }

                                >
                                    </FormControlLabel>    
                           

                        </Grid>
                        <Grid item xs={3}> </Grid>
                          
 
                    </Grid>                   
               
                </paper>

            </form>

        </>
    )
}

