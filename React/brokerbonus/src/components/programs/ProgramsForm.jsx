import { FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup, Switch } from '@mui/material'
import React from 'react'
import { Form } from 'react-router-dom'

export const ProgramsForm = () => {
    return (
        <>
            <div>ProgramsForm</div>
            <form>
                <paper sx={{ padding: 4 }}>
                    <FormControl variernt="filled">
                        <FormLabel component="legent"> Bonus Program Definition</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                label={"General Agent"}
                                control={
                                    <Switch
                                        checked={false}
                                        name="GeneralAgentSwith">

                                    </Switch>
                                }

                            >

                            </FormControlLabel>

                            <FormControl
                                component="fieldset"
                                variant="filled"
                                
                            >
                                <FormLabel
                                    component="legend"
                                    htmlFor="residence-type-radio"
                                >
                                    Residence
                                </FormLabel>
                                <RadioGroup
                                    aria-label="residence"
                                    id="residence-type-radio"
                                    defaultValue="homeowner"
                                    name="radio-buttons-group"
                                     
                                >
                                    <FormControlLabel
                                        value="homeowner"
                                        control={<Radio />}
                                        label="Homeowner"
                                    />
                                    <FormControlLabel
                                        value="renter"
                                        control={<Radio />}
                                        label="Renter"
                                    />
                                    <FormControlLabel
                                        value="nomad"
                                        control={<Radio />}
                                        label="Nomad" />
                                </RadioGroup>
                                <FormHelperText>Disabled</FormHelperText>
                            </FormControl>


                        </FormGroup>
                    </FormControl>

                </paper>

            </form>
        </>
    )
}

