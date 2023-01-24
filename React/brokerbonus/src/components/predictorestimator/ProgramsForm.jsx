
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Box, Button, Grid, InputLabel, makeStyles, MenuItem, Paper, TextField, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { padding } from '@mui/system';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';

import { useSelector } from 'react-redux';
import { selectAllMarkets } from '../../redux/features/markets/marketsSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";

import { addPost } from '../../redux/features/requests/requestsSlice';

export const ProgramsForm = () => {


    function eopmedsubsLabelFormat(value) {
        const units = ['Subs'];

        let unitIndex = 0;
        let scaledValue = value;

        return `${scaledValue} ${units[unitIndex]}`;
    }

    function bcpmedsubsLabelFormat(value) {
        const units = ['Subs'];

        let unitIndex = 0;
        let scaledValue = value;

        return `${scaledValue} ${units[unitIndex]}`;
    }

    function eopspecsubsLabelFormat(value) {
        const units = ['Subs'];

        let unitIndex = 0;
        let scaledValue = value;

        return `${scaledValue} ${units[unitIndex]}`;
    }

    function eopspecsubsLabelFormat(value) {
        const units = ['Subs'];

        let unitIndex = 0;
        let scaledValue = value;

        return `${scaledValue} ${units[unitIndex]}`;
    }

    function specfactLabelFormat(value) {
        const units = ['%'];

        let unitIndex = 0;
        let scaledValue = value;

        return `${scaledValue} ${units[unitIndex]}`;
    }

    function eopcalculatValue(value) {
        return 2 ** value;
    }

    function netspecfactculateValue(value) {
        return 2 ** value;
    }

    function bcpcalculatValue(value) {
        return 2 ** value;
    }

    function eopspeccalculatValue(value) {
        return 2 ** value;
    }


    function netPercentLabelFormat(value) {
        const units = ['%'];

        let unitIndex = 0;
        let scaledValue = value;



        return `${scaledValue} ${units[unitIndex]}`;
    }

    function netGrowthLabelFormat(value) {
        const units = ['%'];

        let unitIndex = 0;
        let scaledValue = value;


        return `${scaledValue} ${units[unitIndex]}`;
    }


    function netGrowthLabelFormat(value) {
        const units = ['subs'];

        let unitIndex = 0;
        let scaledValue = value;



        return `${scaledValue} ${units[unitIndex]}`;
    }

    function eopspeccalculatValue(value) {
        return 2 ** value;
    }



    function specbenratLabelFormat(value) {
        const units = ['%'];

        let unitIndex = 0;
        let scaledValue = value;



        return `${scaledValue} ${units[unitIndex]}`;
    }

    function eopspeccalculatValue(value) {
        return 2 ** value;
    }


    function netpercentcalculateValue(value) {
        return 2 ** value;
    }


    function netgrowthculateValue(value) {
        return 2 ** value;
    }


    function netspecbenratculateValue(value) {
        return 2 ** value;
    }

    const rows1 = [
        { id: 1, PayeeCode: '0Y9445', BrokerName: 'A C MARMO & SONS INC' },
        { id: 2, PayeeCode: '0AC076', BrokerName: 'AARON B BERG' },
        { id: 3, PayeeCode: 'OTW946', BrokerName: 'AARON PAGLIA' },
        { id: 4, PayeeCode: '0Y9445', BrokerName: 'A C MARMO & SONS INC' },
        { id: 5, PayeeCode: '0AC076', BrokerName: 'AARON B BERG' },
        { id: 6, PayeeCode: 'OTW946', BrokerName: 'AARON PAGLIA' },
        { id: 7, PayeeCode: '0Y9445', BrokerName: 'A C MARMO & SONS INC' },
        { id: 8, PayeeCode: '0AC076', BrokerName: 'AARON B BERG' },
        { id: 9, PayeeCode: 'OTW946', BrokerName: 'AARON PAGLIA' },
        { id: 10, PayeeCode: '0Y9445', BrokerName: 'A C MARMO & SONS INC' },
        { id: 11, PayeeCode: '0AC076', BrokerName: 'AARON B BERG' },
        { id: 12, PayeeCode: 'OTW946', BrokerName: 'AARON PAGLIA' },
    ];

    const dispatch = useDispatch();
    const rows = useSelector(state => state.producers);
    const markets = useSelector(selectAllMarkets)
    const Markets = [];
    markets.forEach(market => Markets.push(market.market))

    console.log(" Rows1 :" + rows1);

    const columns = [
        { field: 'payeeCode', headerName: 'PayeeCode', width: 200 },
        { field: 'Name', headerName: 'BrokerName', width: "100%" },
    ];

    const Markets1 = [
        'Texas - Central',
        'Texas - Dallas',
        'Texas - Huston',
        'New Mexico',
        'New York',
        'Chicago',
        'California',
        'Connecticut',
        'Florida',
        'Minnesota',
        'Massachusetts',
        'Delaware',
    ];

    const defaultInputValues = {
        userId: 'Mike Durbano',
        Market: 'Texas - Central',
        Broker: "None",
        BrokerSubscriberRange: "100 to 499 enrolled employees",
        eopmedsubs: 0,
        bcpmedsubs: 0,
        eopspecsubs: 0,
        netpercent: 0,
        netgrowth: 0,
        specbenrat: 0,
        specfact: 0

    };

    const [values, setValues] = useState(defaultInputValues);
    const [open, setOpen] = React.useState(false);
    const [medsubs, setMedSubs] = React.useState(10);
    const [netGrowth, setNetGrowth] = React.useState(10);


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
        reset,
        setValue,
        control,
        formState: { errors }
 
    } = useForm({
        defaultInputValues: {  
        },
 
    });

    const handleChangeSelectMarket = (event) => {
        setValues({ ...values, Market: event.target.value });
    };

    const handleChangeBrokerSubscriberRange = (event) => {
        setValues({ ...values, BrokerSubscriberRange: event.target.value });
    };

    const handleChangeEopMedSubs = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues({ ...values, eopmedsubs: event.target.value });
        }
    };


    const handleChangeEopSpecSubs = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues({ ...values, eopspecsubs: event.target.value });
        }
    };

    const handlePopulateRequest = (event) => {

        const postGetCurrentBonus = {
            id: nanoid(),
            market: values.Market,
            brokerName: values.Broker
        }

        console.log("Values :" + JSON.stringify(postGetCurrentBonus));
        dispatch(addPost(postGetCurrentBonus));
    }

    const handleChangeNetPercent = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues({ ...values, netpercent: event.target.value });
        }
    };

    const handleChangeNetGrowth = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues({ ...values, netgrowth: event.target.value });
        }
    };




    const handleChangeBcpMedSubs = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues({ ...values, bcpmedsubs: event.target.value });
        }
    };


    const handleChangeSpecBenRat = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues({ ...values, specbenrat: event.target.value });
        }
    };


    const handleChangeSpecFact = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues({ ...values, specfact: event.target.value });
        }
    };



    const handleRowSelectionBroker = (ids) => {
        const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
        setValues({ ...values, Broker: selectedRowsData[0].Name });
        setValue("BrokerName", selectedRowsData[0].Name );
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    function calculateValue(value) {
        return 2 ** value;
    }


    const onSubmit =(data) => console.log(" data : ",data );



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                
            <Paper sx={{}}>
                    <Grid container

                        direction="row"
                        rowSpacing={4}
                        columnSpacing={8}
                    >
                        <Grid item xs={12} align="center" >
                            <h1 > Predictor Estimator</h1>
                        </Grid>
                        <Grid item xs={2}> </Grid>
                        <Grid item xs={2} align="center" justifyContent={"center"}>
                            <strong>Currently Loaded</strong>
                        </Grid>
                        <Grid item xs={5} >
                            <Grid container
                                style={{
                                    borderTop: "2px solid", borderLeft: "2px solid", borderRight: "1px solid", borderBottom: "1px solid",
                                    borderTopColor: "gray", borderLeftColor: "gray",
                                    borderBottomColor: "lightgray", borderRightColor: "lightgray",
                                    padding: 10
                                }}
                                direction="row"
                                rowSpacing={1}
                                columnSpacing={8}
                            >
                                <Grid item xs={5} align="right">
                                    Bonus Year  &nbsp; &nbsp;:
                                </Grid>
                                <Grid item xs={7} align="left">
                                    2023
                                </Grid>
                                <Grid item xs={5} align="right">
                                    Market Data Loaded  &nbsp; &nbsp;:
                                </Grid>
                                <Grid item xs={7} align="left">
                                    USA
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}> </Grid>



                        <Grid item xs={2}> </Grid>
                        <Grid item xs={2} align="center" >

                            <strong> {values.userId} </strong>
                        </Grid>
                        <Grid item xs={5} align="left" >

                            <div>

                                is an authorized user in the following Modeler markets
                            </div>

                        </Grid>
                        <Grid item xs={3}> </Grid>

                        <Grid item xs={2}> </Grid>
                        <Grid item xs={2} align="center">

                            <strong> Select Market </strong>

                        </Grid>

                        <Grid item xs={5} sx={{ padding: "0px" }} align="left"  >


                            <FormControl required sx={{ paddingLeft: "0px", minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-required-label">Market</InputLabel>
                                <Controller
                                name="Market"
                                control={control}
                                render={(
                                    {field: {name, value=values.Market, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }
                                )=>(

                                
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={value}
                                    label="Age *"
                                    onChange={(e) => { onChange(e); handleChangeSelectMarket(e)}}
                                MenuProps={{
                                    PaperProps: { sx: { maxHeight: 200 } }
                                }}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {Markets.map((Market) => (

                                    <MenuItem value={Market}>{Market}</MenuItem>
                                ))}


                            </Select>
                            )}
                            />
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>

                    <Grid item xs={3}> </Grid>


                    <Grid item xs={2}> </Grid>
                    <Grid item xs={2} align="center"> <strong> Select Producer </strong> </Grid>
                    <Grid item xs={5}   >
                        <div style={{ height: 300, width: '100%' }}>
                            <Controller
                            name="BrokerName"
                            control={control}
                            render={(
                                    {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }
                                )=>(
                            <DataGrid
                                value={value}    
                                rows={rows}
                                columns={columns}
                                onChange={onChange}
                                onSelectionModelChange= { handleRowSelectionBroker}
                            />
                            )}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={3}> </Grid>


                    <Grid item xs={2}> </Grid>
                    <Grid item xs={2} align="center" >

                        <strong> Selected Broker  </strong>
                    </Grid>
                    <Grid item xs={5} align="left" >

                        <div>

                            {values.Broker}
                        </div>
                    </Grid>
                  
                    <Grid item xs={3}> </Grid>


                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> </Grid>
                    <Grid item xs={1}> Minimum required</Grid>
                    <Grid item xs={1}> Broker Actual</Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> Status</Grid>
                    <Grid item xs={1}> </Grid>
                    <Grid item xs={1}> Scenario1 </Grid>
                    <Grid item xs={1}> Scenario2</Grid>
                    <Grid item xs={1}> Scenario3</Grid>
                    <Grid item xs={2}>  </Grid>

                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> New Groups</Grid>
                    <Grid item xs={1}> 2</Grid>
                    <Grid item xs={1} align="center"> 12</Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> Met</Grid>
                    <Grid item xs={1}> Estimated Ending Groups</Grid>
                    <Grid item xs={1}> 
                    <Controller
                        name="NewGroupsSCN1"
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (                                                    
                            <TextField
                                 
                                id="NewGroupsSCN1"
                                name={name}
                                label="NewGroupsSCN1"
                                type="text"
                                value={value}
                                onChange={ (e) => { onChange(e); } }
                                required
                                error
                                helperText={''}
                            />
                            )
                        }
                        />  
                    
                     </Grid>
                    <Grid item xs={1}> 
                    <Controller
                        name="NewGroupsSCN2"
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (                                                    
                            <TextField
                                 
                                id="NewGroupsSCN2"
                                name={name}
                                label="New GroupsSCN2"
                                type="text"
                                value={value}
                                onChange={ (e) => { onChange(e); } }
                                required
                                error
                                helperText={''}
                            />
                            )
                        }
                        /> 
                    </Grid>
                    <Grid item xs={1}> 
                    <Controller
                        name="NewGroupsSCN3"
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (                                                    
                            <TextField
                                 
                                id="NewGroupsSCN3"
                                name={name}
                                label="New GroupsSCN3"
                                type="text"
                                value={value}
                                onChange={ (e) => { onChange(e); } }
                                required
                                error
                                helperText={''}
                            />
                            )
                        }
                        /> 
                    </Grid>
                    <Grid item xs={2}>  </Grid>


                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> Medical Enrolled Employees</Grid>
                    <Grid item xs={1}> Starting</Grid>
                    <Grid item xs={1} align="center"> 5098</Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> </Grid>
                    <Grid item xs={1}>Starting </Grid>
                    <Grid item xs={1} > 
                     5098
                    
                     </Grid>
                    <Grid item xs={1}> 
                     5098
                    </Grid>
                    <Grid item xs={1}> 
                     5098
                    </Grid>
                    <Grid item xs={2}>  </Grid>

                  

                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> </Grid>
                    <Grid item xs={1}> Current</Grid>
                    <Grid item xs={1} align="center"> 6825</Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> </Grid>
                    <Grid item xs={1}>Esimated Enrolled Employees </Grid>
                    <Grid item xs={1}> 
                     
                    <Controller
                        name="EnrollEmpsSCN1"
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (                                                    
                            <TextField
                                 
                                id="EnrollEmpsSCN1"
                                name={name}
                                label="EnrollEmpsSCN1"
                                type="text"
                                value={value}
                                onChange={ (e) => { onChange(e); } }
                                required
                                error
                                helperText={''}
                            />
                            )
                        }
                        /> 
                    </Grid>
                    <Grid item xs={1}> 
                    <Controller
                        name="EnrollEmpsSCN2"
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (                                                    
                            <TextField
                                 
                                id="EnrollEmpsSCN2"
                                name={name}
                                label="EnrollEmpsSCN2"
                                type="text"
                                value={value}
                                onChange={ (e) => { onChange(e); } }
                                required
                                error
                                helperText={''}
                            />
                            )
                        }
                        /> 
                    </Grid>
                    <Grid item xs={1}> 
                    <Controller
                        name="EnrollEmpsSCN3"
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (                                                    
                            <TextField
                                 
                                id="EnrollEmpsSCN3"
                                name={name}
                                label="EnrollEmpsSCN3"
                                type="text"
                                value={value}
                                onChange={ (e) => { onChange(e); } }
                                required
                                error
                                helperText={''}
                            />
                            )
                        }
                        /> 
                    </Grid>
                    <Grid item xs={2}>  </Grid>

                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> Gained Subs</Grid>
                    <Grid item xs={1}> 400</Grid>
                    <Grid item xs={1} align="center"> 1727</Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> Met</Grid>
                    <Grid item xs={1}> </Grid>
                    <Grid item xs={1}> 
                     2500
                     </Grid>
                    <Grid item xs={1}> 
                    809
                    </Grid>
                    <Grid item xs={1}> 
                    3149
                    </Grid>
                    <Grid item xs={2}>  </Grid>


                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> </Grid>
                    <Grid item xs={1}> Net Change %</Grid>
                    <Grid item xs={1} align="center"> 133.88%</Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> </Grid>
                    <Grid item xs={1}>  </Grid>
                    <Grid item xs={1}> 
                     149.04%
                    
                     </Grid>
                    <Grid item xs={1}> 
                     115.87%
                    </Grid>
                    <Grid item xs={1}> 
                     161.77%
                    </Grid>
                    <Grid item xs={2}>  </Grid>


                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> </Grid>
                    <Grid item xs={1}> Net Change Factor</Grid>
                    <Grid item xs={1} align="center"> 1 </Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> </Grid>
                    <Grid item xs={1}>  </Grid>
                    <Grid item xs={1}> 
                     1
                    
                     </Grid>
                    <Grid item xs={1}> 
                     1
                    </Grid>
                    <Grid item xs={1}> 
                     1
                    </Grid>
                    <Grid item xs={2}>  </Grid>



                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> Fully Insured Enrolled Employees</Grid>
                    <Grid item xs={1}> Starting</Grid>
                    <Grid item xs={1} align="center"> 1320</Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> </Grid>
                    <Grid item xs={1}>Starting </Grid>
                    <Grid item xs={1}> 
                    1320
                    
                     </Grid>
                    <Grid item xs={1}> 
                    1320
                    </Grid>
                    <Grid item xs={1}> 
                    1320
                    </Grid>
                    <Grid item xs={2}>  </Grid>

                  

                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> </Grid>
                    <Grid item xs={1}> Current</Grid>
                    <Grid item xs={1} align="center"> 2017</Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> </Grid>
                    <Grid item xs={1}>Esimated Ending Enrolled Employees </Grid>
                    <Grid item xs={1}> 
                     
                    <Controller
                        name="ESTEnrollEmpsSCN1"
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (                                                    
                            <TextField
                                 
                                id="ESTEnrollEmpsSCN1"
                                name={name}
                                label="ESTEnrollEmpsSCN1"
                                type="text"
                                value={value}
                                onChange={ (e) => { onChange(e); } }
                                required
                                error
                                helperText={''}
                            />
                            )
                        }
                        /> 
                    </Grid>
                    <Grid item xs={1}> 
                    <Controller
                        name="ESTEnrollEmpsSCN2"
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (                                                    
                            <TextField
                                 
                                id="ESTEnrollEmpsSCN2"
                                name={name}
                                label="ESTEnrollEmpsSCN2"
                                type="text"
                                value={value}
                                onChange={ (e) => { onChange(e); } }
                                required
                                error
                                helperText={''}
                            />
                            )
                        }
                        /> 
                    </Grid>
                    <Grid item xs={1}> 
                    <Controller
                        name="ESTEnrollEmpsSCN3"
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (                                                    
                            <TextField
                                 
                                id="ESTEnrollEmpsSCN3"
                                name={name}
                                label="ESTEnrollEmpsSCN3"
                                type="text"
                                value={value}
                                onChange={ (e) => { onChange(e); } }
                                required
                                error
                                helperText={''}
                            />
                            )
                        }
                        /> 
                    </Grid>
                    <Grid item xs={2}>  </Grid>


                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> Gained Fully Insured Subs</Grid>
                    <Grid item xs={1}> 0</Grid>
                    <Grid item xs={1} align="center"> 697</Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> Met</Grid>
                    <Grid item xs={1}> </Grid>
                    <Grid item xs={1}> 
                     795
                     </Grid>
                    <Grid item xs={1}> 
                    95
                    </Grid>
                    <Grid item xs={1}> 
                    195
                    </Grid>
                    <Grid item xs={2}>  </Grid>


                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> </Grid>
                    <Grid item xs={1}> Net Change %</Grid>
                    <Grid item xs={1} align="center" > 133.88%</Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> </Grid>
                    <Grid item xs={1}>  </Grid>
                    <Grid item xs={1}> 
                     149.04%
                    
                     </Grid>
                    <Grid item xs={1}> 
                     115.87%
                    </Grid>
                    <Grid item xs={1}> 
                     161.77%
                    </Grid>
                    <Grid item xs={2}>  </Grid>


                    <Grid item xs={1}> </Grid>
                    <Grid item xs={2}> </Grid>
                    <Grid item xs={1}> Net Change FI Factor</Grid>
                    <Grid item xs={1} align="center"> 3 </Grid>
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}> </Grid>
                    <Grid item xs={1} >  </Grid>
                    <Grid item xs={1}> 
                     5
                    
                     </Grid>
                    <Grid item xs={1}> 
                     1
                    </Grid>
                    <Grid item xs={1}> 
                     2
                    </Grid>
                    <Grid item xs={2}>  </Grid>


                    <Grid item xs={1}> </Grid>   
                    <Grid item xs={1.8} align="left" >Net Change in Medical Enrolled Employees</Grid>             
                        

                    <Grid item xs={1.4} align="left" >The Annualized New Specialty Benefit Premium
                    </Grid>
                    <Grid item xs={.8} >Net Change Tier  </Grid> 
                      

                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}>  </Grid> 
                    <Grid item xs={1}>Projected </Grid> 
                    <Grid item xs={1}>SCN1 Net Change Tier </Grid>                 
                    <Grid item xs={1}>SCN2 Net Change Tier </Grid>  
                    <Grid item xs={1}>SCN3 Net Change Tier </Grid>  
                    <Grid item xs={2}> </Grid>  

                    <Grid item xs={1}> </Grid>
                    <Grid item xs={1.8} align="left" >
                        <Typography mt={.7} mb={2.3}>
                        Less than 400
                        </Typography>   
                        <Typography  mt={.7} mb={2.3}>
                        400 to 599 enrolled employees
                        </Typography>  
                        <Typography  mt={.7} mb={2.3}>
                        600 to 799 enrolled employees
                        </Typography>   
                        <Typography  mt={.7} mb={2.3}>
                        800 to 1749 enrolled employees
                        </Typography>  
                        <Typography  mt={.7} mb={2.3}>
                        1750 or more enrolled employees
                        </Typography>   
                                 
                    </Grid>
                    <Grid item xs={1.4} align="left" >
                        <Typography mt={.7} mb={2.3}>
                        $40,000
                        </Typography>   
                        <Typography  mt={.7} mb={2.3}>
                        $40,000 to $49,9999
                        </Typography>  
                        <Typography  mt={.7} mb={2.3}>
                        $50,000 to $74,9999
                        </Typography>   
                        <Typography  mt={.7} mb={2.3}>
                        $75,000 to $124,9999
                        </Typography>  
                        <Typography  mt={.7} mb={2.3}>
                        $125,000 or more enrolled employees
                        </Typography>   
                                 
                    </Grid>
                    <Grid item xs={.8} align="left" >
                        <FormControl>
                        <Controller
                                name="NetChangeInMedEnrlEmps"
                                control={control}
                                render={(
                                    {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }
                            )=>( 
                            <RadioGroup
                                aria-labelledby="NetChangeInMedEnrlEmps"
                                name="NetChangeInMedEnrlEmps"
                                value={value}
                                onChange={onChange}
                            >
                                <FormControlLabel value="None" control={<Radio />}  />
                                <FormControlLabel value="100 to 499 enrolled employees" control={<Radio />} />
                                <FormControlLabel value="500 to 999 enrolled employees" control={<Radio />} />
                                <FormControlLabel value="1000 to 2000 enrolled employees" control={<Radio />}  />
                                <FormControlLabel value="2000 or more enrolled employees" control={<Radio />}  />

                            </RadioGroup>
                            )}
                            />
                        </FormControl>

                    </Grid>                        
             
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}} >  </Grid>
                    <Grid item xs={1} >  </Grid>
                    <Grid item xs={1} align="left" >
                        <FormControl>
                             
                        <Controller
                                name="ProjNetChangeInMedEnrlEmpsScn1"
                                control={control}
                                render={(
                                    {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }
                            )=>( 
                            <RadioGroup
                                aria-labelledby="ProjNetChangeInMedEnrlEmpsScn1"
                                name="ProjNetChangeInMedEnrlEmpsScn1"
                                value={value}
                                onChange={onChange}
                            >
                                <FormControlLabel value="None" control={<Radio />}  />
                                <FormControlLabel value="100 to 499 enrolled employees" control={<Radio />} />
                                <FormControlLabel value="500 to 999 enrolled employees" control={<Radio />} />
                                <FormControlLabel value="1000 to 2000 enrolled employees" control={<Radio />}  />
                                <FormControlLabel value="2000 or more enrolled employees" control={<Radio />}  />

                            </RadioGroup>
                            )}
                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={1} align="left" >
                        <FormControl>
                        <Controller
                                name="ProjNetChangeInMedEnrlEmpsScn2"
                                control={control}
                                render={(
                                    {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }
                            )=>( 
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group-scn3"
                                name="ProjNetChangeInMedEnrlEmpsScn2"
                                value={value}
                                onChange={onChange}
                            >
                                <FormControlLabel value="None" control={<Radio />}  />
                                <FormControlLabel value="100 to 499 enrolled employees" control={<Radio />} />
                                <FormControlLabel value="500 to 999 enrolled employees" control={<Radio />} />
                                <FormControlLabel value="1000 to 2000 enrolled employees" control={<Radio />}  />
                                <FormControlLabel value="2000 or more enrolled employees" control={<Radio />}  />

                            </RadioGroup>
                            )}
                        />
                        </FormControl>

                    </Grid>
                    <Grid item xs={1} align="left" >
                        <FormControl>
                            <Controller
                                name="ProjNetChangeInMedEnrlEmpsScn3"
                                control={control}
                                render={(
                                    {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }
                            )=>( 
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group-scn3"
                                name="ProjNetChangeInMedEnrlEmpsScn3"
                                value={value}
                                onChange={onChange}
                            >
                                <FormControlLabel value="None" control={<Radio />}  />
                                <FormControlLabel value="100 to 499 enrolled employees" control={<Radio />} />
                                <FormControlLabel value="500 to 999 enrolled employees" control={<Radio />} />
                                <FormControlLabel value="1000 to 2000 enrolled employees" control={<Radio />}  />
                                <FormControlLabel value="2000 or more enrolled employees" control={<Radio />}  />

                            </RadioGroup>
                            )}
                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={2}>  </Grid>


                    <Grid item xs={1}> </Grid>   
                    <Grid item xs={1.8} align="left" >Net Change in FI Medical Enrolled Employees</Grid>             
                        

                    <Grid item xs={1.4} align="left" >FI Net Growth Factor
                    </Grid>
                    <Grid item xs={.8} >Net Change in FI Tier  </Grid> 
                      
                    <Grid item xs={1} style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}} >  </Grid>
 
                    <Grid item xs={1}>Projected </Grid> 
                    <Grid item xs={1}>SCN1 Net Change FI Tier </Grid>                 
                    <Grid item xs={1}>SCN2 Net Change FI Tier </Grid>  
                    <Grid item xs={1}>SCN3 Net Change FI Tier </Grid>  
                    <Grid item xs={2}> </Grid> 

                    <Grid item xs={1}> </Grid>
                    <Grid item xs={1.8} align="left" >
                        <Typography mt={.7} mb={2.3}>
                        Less than 100
                        </Typography>   
                        <Typography  mt={.7} mb={2.3}>
                        100 to 249 
                        </Typography>  
                        <Typography  mt={.7} mb={2.3}>
                        250 to 749
                        </Typography>     
                        <Typography  mt={.7} mb={2.3}>
                        749 or more FI enrolled employees
                        </Typography>   
                                 
                    </Grid>
                   
                    <Grid item xs={1.4} align="left" >
                        <Typography mt={.7} mb={2.3}>
                        1.0
                        </Typography>   
                        <Typography  mt={.7} mb={2.3}>
                        2.0
                        </Typography>  
                        <Typography  mt={.7} mb={2.3}>
                        3.0
                        </Typography>   
                        <Typography  mt={.7} mb={2.3}>
                        5.0
                        </Typography>  
                        
                                 
                    </Grid>
                    <Grid item xs={.8} align="left" >
                        <FormControl>
                        <Controller
                                name="NetChangeInFIMedEnrlEmps"
                                control={control}
                                render={(
                                    {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }
                            )=>( 
                            <RadioGroup
                                aria-labelledby="NetChangeInFIMedEnrlEmps"
                                name="NetChangeInFIMedEnrlEmps"
                                value={value}
                                onChange={onChange}
                            >
                                <FormControlLabel value="1.0" control={<Radio />}  />
                                <FormControlLabel value="2.0" control={<Radio />} />
                                <FormControlLabel value="3.0" control={<Radio />} />
                                <FormControlLabel value="4.0" control={<Radio />}  />
                                 

                            </RadioGroup>
                            )}
                            />
                        </FormControl>

                    </Grid>                        
             

                    
                    <Grid item xs={1} align="left"  style={{border:'solid green', borderWidth:'0px 4px 0px 0px'}}></Grid>
                    <Grid item xs={1}>  </Grid>
                    <Grid item xs={1} align="left" >
                        <FormControl>
                             
                        <Controller
                                name="ProjNetChangeInFIMedEnrlEmpsScn1"
                                control={control}
                                render={(
                                    {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }
                            )=>( 
                            <RadioGroup
                                aria-labelledby="ProjNetChangeInFIMedEnrlEmpsScn1"
                                name="ProjNetChangeInFIMedEnrlEmpsScn1"
                                value={value}
                                onChange={onChange}
                            >
                                <FormControlLabel value="1.0" control={<Radio />}  />
                                <FormControlLabel value="2.0" control={<Radio />} />
                                <FormControlLabel value="3.0" control={<Radio />} />
                                <FormControlLabel value="4.0" control={<Radio />}  />

                            </RadioGroup>
                            )}
                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={1} align="left" >
                        <FormControl>
                        <Controller
                                name="ProjNetChangeInFIMedEnrlEmpsScn2"
                                control={control}
                                render={(
                                    {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }
                            )=>( 
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group-scn3"
                                name="ProjNetChangeInMedFIEnrlEmpsScn2"
                                value={value}
                                onChange={onChange}
                            >
                                <FormControlLabel value="1.0" control={<Radio />}  />
                                <FormControlLabel value="2.0" control={<Radio />} />
                                <FormControlLabel value="3.0" control={<Radio />} />
                                <FormControlLabel value="4.0" control={<Radio />}  />

                            </RadioGroup>
                            )}
                        />
                        </FormControl>

                    </Grid>
                    <Grid item xs={1} align="left" >
                        <FormControl>
                            <Controller
                                name="ProjNetChangeInFIMedEnrlEmpsScn3"
                                control={control}
                                render={(
                                    {field: {name, value, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }
                            )=>( 
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group-scn3"
                                name="ProjNetChangeInFIMedEnrlEmpsScn3"
                                value={value}
                                onChange={onChange}
                            >
                                <FormControlLabel value="1.0" control={<Radio />}  />
                                <FormControlLabel value="2.0" control={<Radio />} />
                                <FormControlLabel value="3.0" control={<Radio />} />
                                <FormControlLabel value="4.0" control={<Radio />}  />

                            </RadioGroup>
                            )}
                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={2}>  </Grid> 


                     



                    <Grid item xs={12}   >

                    </Grid>

                    <Grid item xs={2}> </Grid>
                    <Grid item xs={2} align="center" >

                        <strong> Initial Bonus Amount </strong>
                    </Grid>
                    <Grid item xs={1} align="left" >

                        <div>

                            {"1443.88"}
                        </div>

                    </Grid>
                    <Grid item xs={2} align="center" >
                        <Button variant="contained"
                           type="submit"
                        >
                            Calculate Projected Bonus
                        </Button>

                    </Grid>
                    <Grid item xs={2} align="center" >

                        <strong> Projectd Bonus Amount </strong>
                    </Grid>
                    <Grid item xs={3} align="left" >

                        <div>

                            {values.eopmedsubs * values.netpercent}
                        </div>

                    </Grid>
                    <Grid item xs={3}> </Grid>

                    <Grid item xs={12}   >

                    </Grid>
                    <Grid item xs={12}   >

                    </Grid>



                </Grid>
            </Paper>

                   
        </form>
        </>
    )
}