import { TextField, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup, Switch, Grid, Box } from '@mui/material'
import React from 'react'
import { Form, useOutletContext } from 'react-router-dom'
import TextareaAutosize from '@mui/base/TextareaAutosize';


export const ProgramsForm = () => {

    const obj = useOutletContext()

    return (
        <>



            <form>
                <paper sx={{}}>
                    <Grid container
                        alignItems="center"
                        justify="center"
                        direction="column">
                        <h1> {obj.head}</h1>
                        <Grid item>
                            <TextField
                                id="bonusprogramname"
                                name="bonusprogramname"
                                label="Bonus Program Name"
                                type="text"
                                required
                                error
                                helperText={'This is Bonus program name'}
                            >

                            </TextField>
                        </Grid>
                        <FormControl variernt="filled">
                            <FormLabel component="legent"> Bonus Program Definition</FormLabel>
                            <Box
                                sx={{
                                    width: 1000,
                                    hight: 100,
                                    maxWidth: '100%',
                                }}
                            >
                                <TextareaAutosize
                                    aria-label="textarea"
                                    placeholder=""
                                    minRows={5}
                                    style={{ width: 1000 }}
                                />

                            </Box>
                            <FormGroup>

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

                                <FormControlLabel
                                    label={"General Agent" }
                                    labelPlacement="end"
                        
                               
                                    control={
                                        <Switch
                                            checked={false}
                                            name="GeneralAgentSwith">
                                      

                                        </Switch>
                                    }

                                >

                                </FormControlLabel>



                            </FormGroup>
                        </FormControl>


                    </Grid>
                </paper>

            </form>

        </>
    )
}

