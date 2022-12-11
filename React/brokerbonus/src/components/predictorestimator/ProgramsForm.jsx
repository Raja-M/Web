
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Box, Button, Grid, InputLabel, MenuItem, Paper, Typography } from '@mui/material';
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




    const rows: GridRowsProp = [
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


    const columns: GridColDef[] = [
        { field: 'PayeeCode', headerName: 'PayeeCode', width: 200 },
        { field: 'BrokerName', headerName: 'BrokerName', width: "100%" },
    ];

    const Markets = [
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
        formState: { errors },
        control
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const handleChangeSelectMarket = (event ) => {
        setValues({ ...values, Market: event.target.value });
    };

    const handleChangeBrokerSubscriberRange = (event ) => {
        setValues({ ...values, BrokerSubscriberRange: event.target.value });
    };

    const handleChangeEopMedSubs = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues( {...values , eopmedsubs: event.target.value  });  
        }
    };
    

    const handleChangeEopSpecSubs = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues( {...values , eopspecsubs: event.target.value  });  
        }
    };

    

    const handleChangeNetPercent = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues( {...values , netpercent: event.target.value  });  
        }
    };

    const handleChangeNetGrowth = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues( {...values , netgrowth: event.target.value  });  
        }
    };

 


    const handleChangeBcpMedSubs = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues( {...values , bcpmedsubs: event.target.value  });  
        }
    };


    const handleChangeSpecBenRat = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues( {...values , specbenrat: event.target.value  });  
        }
    };


    const handleChangeSpecFact = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValues( {...values , specfact: event.target.value  });  
        }
    };



    const handleRowSelectionBroker = (ids) => {    
             const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
             setValues( {...values , Broker : selectedRowsData[0].BrokerName  });    
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


    const onSubmit = data => console.log(data);

    

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
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={values.Market}
                                    label="Age *"
                                    onChange={handleChangeSelectMarket}
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
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item xs={3}> </Grid>


                        <Grid item xs={2}> </Grid>
                        <Grid item xs={2} align="center"> <strong> Select Producer </strong> </Grid>
                        <Grid item xs={5}   >
                            <div style={{ height: 300, width: '100%' }}>
                                <DataGrid 
                                        rows={rows} 
                                        columns={columns}
                                        onSelectionModelChange={ handleRowSelectionBroker} 
                                          />
                            </div>
                        </Grid>
                        <Grid item xs={3}> </Grid>


                        <Grid item xs={2}> </Grid>
                        <Grid item xs={2} align="center" >

                            <strong> Selected Broker  </strong>
                        </Grid>
                        <Grid item xs={2} align="left" >

                            <div>

                                { values.Broker}
                            </div>
                        </Grid>
                        <Grid item xs={3} align="left" >
                            <FormControl>
                                <FormLabel id="demo-controlled-radio-buttons-group">Brokers Subscriber Range</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={values.BrokerSubscriberRange}
                                    onChange={handleChangeBrokerSubscriberRange}
                                >
                                    <FormControlLabel value="None" control={<Radio />} label="None" />
                                    <FormControlLabel value="100 to 499 enrolled employees" control={<Radio />} label="100 to 499 enrolled employees" />
                                    <FormControlLabel value="500 to 999 enrolled employees" control={<Radio />} label="500 to 999 enrolled employees" />
                                    <FormControlLabel value="1000 to 2000 enrolled employees" control={<Radio />} label="1000 to 2000 enrolled employees" />
                                    <FormControlLabel value="2000 or more enrolled employees" control={<Radio />} label="2000 or more enrolled employees" />

                                </RadioGroup>
                            </FormControl>

                        </Grid>
                        <Grid item xs={3}> </Grid>




                        <Grid item xs={.5}>

                        </Grid>
                        <Grid item xs={1.5}   >
                            <Box sx={{ width: 200 }}>
                                <Typography id="non-linear-slider" gutterBottom>
                                   EOP  Med : {eopmedsubsLabelFormat(eopcalculatValue(values.eopmedsubs))}
                                </Typography>
                                <Slider
                                    value={values.eopmedsubs}
                                    min={1}
                                    step={1}
                                    max={30}
                                    scale={eopcalculatValue}
                                    getAriaValueText={eopmedsubsLabelFormat}
                                    valueLabelFormat={eopmedsubsLabelFormat}
                                    onChange={handleChangeEopMedSubs}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={1.5}   >
                            <Box sx={{ width: 200 }}>
                                <Typography id="non-linear-slider" gutterBottom>
                                    BCP Med : {bcpmedsubsLabelFormat(bcpcalculatValue(values.bcpmedsubs))}
                                </Typography>
                                <Slider
                                    value={values.bcpmedsubs}
                                    min={1}
                                    step={1}
                                    max={30}
                                    scale={bcpcalculatValue}
                                    getAriaValueText={bcpmedsubsLabelFormat}
                                    valueLabelFormat={bcpmedsubsLabelFormat}
                                    onChange={handleChangeBcpMedSubs}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={1.5}   >
                            <Box sx={{ width: 200 }}>
                                <Typography id="non-linear-slider" gutterBottom>
                                    EOP Spec : {eopspecsubsLabelFormat(eopspeccalculatValue(values.eopspecsubs))}
                                </Typography>
                                <Slider
                                    value={values.eopspecsubs}
                                    min={1}
                                    step={1}
                                    max={30}
                                    scale={eopspeccalculatValue}
                                    getAriaValueText={eopspecsubsLabelFormat}
                                    valueLabelFormat={eopspecsubsLabelFormat}
                                    onChange={handleChangeEopSpecSubs}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={1.5}   >

                                                     
                            <Box sx={{ width: 200 }}>
                                <Typography id="non-linear-slider" gutterBottom>
                                    Net Change %: {netPercentLabelFormat(netpercentcalculateValue(values.netpercent))}
                                </Typography>
                                <Slider
                                    value={values.netpercent}
                                    min={1}
                                    step={1}
                                    max={30}
                                    scale={netpercentcalculateValue}
                                    getAriaValueText={netPercentLabelFormat}
                                    valueLabelFormat={netPercentLabelFormat}
                                    onChange={handleChangeNetPercent}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />
                            </Box>
                        </Grid>
                    
                        <Grid item xs={1.5}   >

                                                     
                            <Box sx={{ width: 200 }}>
                                <Typography id="non-linear-slider" gutterBottom>
                                    Net Growth : {netGrowthLabelFormat(netgrowthculateValue(values.netgrowth))}
                                </Typography>
                                <Slider
                                    value={values.netgrowth}
                                    min={1}
                                    step={1}
                                    max={30}
                                    scale={netgrowthculateValue}
                                    getAriaValueText={netGrowthLabelFormat}
                                    valueLabelFormat={netGrowthLabelFormat}
                                    onChange={handleChangeNetGrowth}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />
                            </Box>
                        </Grid>
                    

                        <Grid item xs={1.5}   >

                                                     
                            <Box sx={{ width: 200 }}>
                                <Typography id="non-linear-slider" gutterBottom>
                                    Spec Ben Ratio : {specbenratLabelFormat(netspecbenratculateValue(values.specbenrat))}
                                </Typography>
                                <Slider
                                    value={values.specbenrat}
                                    min={1}
                                    step={1}
                                    max={30}
                                    scale={netspecbenratculateValue}
                                    getAriaValueText={specbenratLabelFormat}
                                    valueLabelFormat={specbenratLabelFormat}
                                    onChange={handleChangeSpecBenRat}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={1.5}   >    
                            <Box sx={{ width: 200 }}>
                                <Typography id="non-linear-slider" gutterBottom>
                                    Spec Factor : {specfactLabelFormat(netspecfactculateValue(values.specfact))}
                                </Typography>
                                <Slider
                                    value={values.specfact}
                                    min={1}
                                    step={1}
                                    max={30}
                                    scale={netspecfactculateValue}
                                    getAriaValueText={specfactLabelFormat}
                                    valueLabelFormat={specfactLabelFormat}
                                    onChange={handleChangeSpecFact}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />
                            </Box>
                            </Grid>
                    

                        <Grid item xs={.5}   >

                            
                        </Grid>



                        <Grid item xs={12}   >

                        </Grid>

                        <Grid item xs={2}> </Grid>
                        <Grid item xs={2} align="center" >

                            <strong> Initial Bonus Amount </strong>
                        </Grid>
                        <Grid item xs={3} align="left" >

                            <div>

                             {"1443.88"} 
                            </div>

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