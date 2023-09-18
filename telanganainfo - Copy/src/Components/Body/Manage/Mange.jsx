import { Grid, Box, Divider, Stack, styled, Typography, createTheme, useMediaQuery, Paper, FormControl, FromGroup, InputLabel, Select, MenuItem, FormHelperText, FormGroup, FormLabel, TextField, TextareaAutosize } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectAllNews } from '../../../App/Redux/Contents/News/NewsSlice';
 

import { parseISO, formatDistanceToNow, format } from 'date-fns'

import { selectAllStates } from '../../../App/Redux/Contents/Categories/StatesSlice';
import { selectAllDistricts } from '../../../App/Redux/Contents/Categories/DistrictsSlice';
import { selectAllCities } from '../../../App/Redux/Contents/Categories/CitiesSlice';
import { selectAllMenus } from '../../../App/Redux/Contents/Categories/MenusSlice';
import { selectAllSubMenus } from '../../../App/Redux/Contents/Categories/SubMenusSlice';
import { selectAllSubMenusCategories } from '../../../App/Redux/Contents/Categories/SubMenusCategoriesSlice';
import { selectAllCategorySpecialities } from '../../../App/Redux/Contents/Categories/CategorySpecialitiesSlice';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NonceProvider } from 'react-select';
import Author from '../../Common/Author';
import Timeago from '../../Common/Timeago';
import ReactionButton from '../../Common/ReactionButton';

import { useGetPostsQuery } from '../../../App/Redux/Contents/News/NewsSlice';


export const Manage = ({ darkMode, setDarkMode }) => {
/*
    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()

    const dispatch = useDispatch();

    const { id } = useParams()

    const columns = [
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'content', headerName: 'Content', width: "100%" },
    ];

    const defaultFormValues = {
        state: 'Telangana',
        district: 'Karimnagar',
        city: 'Karimnagar',
        submenu: 'Politics',
        submenucategory: 'State',
        userId: 1,
        time : new Date(),
        title: 'News Title',
        content: 'News Details',
        
    };

    const [formValues, setFormValues] = useState(defaultFormValues);

    const [ addRequestStatus, setAddRequestStatus] = useState( 'idle');

    const states = useSelector(selectAllStates)
    const districts = useSelector(selectAllDistricts)
    const cities = useSelector(selectAllCities)
    const menus = useSelector(selectAllMenus)
    const submenus = useSelector(selectAllSubMenus)
    const submenuscategories = useSelector(selectAllSubMenusCategories)

    const news = useSelector(selectAllNews);
 

 
    const rows = news;

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required')
            .min(6, 'Title must be least 6 characters'),
    });

    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        control,
        formState: { isSubmitting, isDirty, isValid, errors }
 
    } = useForm({
        defaultValues: {
   
        },
        resolver: yupResolver(validationSchema)

    });

    const handleChangeSelectMenu = (event) => {
        setFormValues({ ...formValues, menu: event.target.value });
    };

    const handleChangeSelectSubMenu = (event) => {
        setFormValues({ ...formValues, submenu: event.target.value });
    };

    const handleChangeSelectSubMenuCategory = (event) => {
        setFormValues({ ...formValues, submenucategory: event.target.value });
    };

    const handleChangeSelectState = (event) => {
        setFormValues({ ...formValues, state: event.target.value });
    };
    const handleChangeSelectDistrict = (event) => {
        setFormValues({ ...formValues, district: event.target.value });
    };

    const handleChangeSelectCity = (event) => {
        setFormValues({ ...formValues, city: event.target.value });
    };

    const handleChangeTextFieldTitle = (event) => {
        setFormValues({ ...formValues, title: event.target.value });
    };

    const handleChangeTextareaContent = (event) => {
        setFormValues({ ...formValues, content: event.target.value });
    };

    const onSubmit = (data )  => {
        setFormValues( { ...formValues, userId: 2 } );
        console.log("Data :" ,data);
        

    };

    const orderedNews = news.slice().sort(  (a,b) =>  new Date(b.time)   -  new Date(a.time) )  ;                  
    let  newsPosts;

    if (  isLoading ){
        newsPosts = <p> " Loading .... "</p> 
    }else if (  isLoading){ 
        newsPosts = <p> " Loading .... "</p> 
    }else if ( isSuccess  ){
        newsPosts =    orderedNews.map( news => (
            <Grid item xs={12}>
                <article  style={{ display:'block' }} key={news.id}>
                <h3>{news.title}</h3> 
                        { <Author userId={news.userId} > </Author>}
                        { formatDistanceToNow(  new Date(news.time)) + " ago" }
                <p> {news.content.substring(0,100)}</p>
                <ReactionButton post={news}> </ReactionButton>
                </article>
            </Grid>
        ))
    } else if ( isError ){
        newsPosts = <p> " Eror .... "</p> 
    }

    return (
        <>
            <Grid container
                direction="row"
                rowSpacing={4}
                columnSpacing={8}

            >
                <Grid item xs={12} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl required sx={{ paddingLeft: "0px", minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-required-label">Menu</InputLabel>
                                <Controller
                                name="Menu"
                                control={control}
                                render={
                                    ({
                                        field : {
                                            name,
                                            value=formValues.menu,
                                            values=menus,
                                            ref,
                                            onChange,
                                            onBlur,
                                        },
                                        fieldState: {
                                            inValid,
                                            isTouched,
                                            isDirty,
                                            error
                                        },
                                        formState,
                                    }) => (
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={ value }
                                    label="Menu"
                                    onChange={(e) => {  onChange(e); handleChangeSelectMenu(e)} }
                                    MenuProps={{
                                        PaperProps: { sx: { maxHeight: 200 } }
                                    }}
                                >
                                         
                                         {values.map((menu) => (
                                        <MenuItem value={menu.Menu}>{menu.Menu}</MenuItem>
                                    ))}
 
                                </Select>
                                    )}
                                    />
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>

                            <FormControl required sx={{ paddingLeft: "0px", minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-required-label">SubMenu</InputLabel>

                                <Controller
                                name="SubMenu"
                                control={control}
                                render={
                                    ({
                                        field : {
                                            name,
                                            value=formValues.submenu,
                                            values=submenus,
                                            ref,
                                            onChange,
                                            onBlur,
                                        },
                                        fieldState: {
                                            inValid,
                                            isTouched,
                                            isDirty,
                                            error
                                        },
                                        formState,
                                    }) => (

                                <Select
                            
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={value}
                                    label="SubMenu"
                                    onChange={ (e) => {  onChange(e); handleChangeSelectSubMenu(e) } } 
                                    MenuProps={{
                                        PaperProps: { sx: { maxHeight: 200 } }
                                    }}
                                >

                                    {values.map((submenu) => (
                                        <MenuItem value={submenu.SubMenu}>{submenu.SubMenu}</MenuItem>
                                    ))}
                                </Select>
                                             )}
                                             />
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>

                            <FormControl required sx={{ paddingLeft: "0px", minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-required-label">SubMenuCategory</InputLabel>
                               
                               
                                <Controller
                                name="Submenucategory"
                                control={control}
                                render={
                                    ({
                                        field : {
                                            name,
                                            value=formValues.submenucategory,
                                            values=submenuscategories,
                                            ref,
                                            onChange,
                                            onBlur,
                                        },
                                        fieldState: {
                                            inValid,
                                            isTouched,
                                            isDirty,
                                            error
                                        },
                                        formState,
                                    }) => (      
                               
                                <Select
                                  
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={value}
                                    label="Submenucategory *"
                                    onChange={ (e) => {  onChange(e); handleChangeSelectSubMenuCategory(e)} }
                                    MenuProps={{
                                        PaperProps: { sx: { maxHeight: 200 } }
                                    }}
                                >

                                    {values.map((submenucategory) => (

                                        <MenuItem value={submenucategory.SubMenuCategory}>{submenucategory.SubMenuCategory}</MenuItem>
                                    ))}
                                </Select>

                                    )}
                                    />
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                     
                            <FormControl required sx={{ paddingLeft: "0px", minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-required-label">State</InputLabel>

                                <Controller
                                name="State"
                                control={control}
                                render={
                                    ({
                                        field : {
                                            name,
                                            value=formValues.state,
                                            values=states,
                                            ref,
                                            onChange,
                                            onBlur,
                                        },
                                        fieldState: {
                                            inValid,
                                            isTouched,
                                            isDirty,
                                            error
                                        },
                                        formState,
                                    }) => (  
                                <Select
                                 
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={value}
                                    label="State *"
                                    onChange={ (e) => {  onChange(e);handleChangeSelectState(e)} }
                                    MenuProps={{
                                        PaperProps: { sx: { maxHeight: 200 } }
                                    }}
                                >

                                    {values.map((state) => (

                                        <MenuItem value={state.Name}>{state.Name}</MenuItem>
                                    ))}
                                </Select>
                                            )}
                                            />
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>


                            <FormControl required sx={{ paddingLeft: "0px", minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-required-label">District</InputLabel>
                                <Controller
                                name="District"
                                control={control}
                                render={
                                    ({
                                        field : {
                                            name,
                                            value=formValues.district,
                                            values=districts,
                                            ref,
                                            onChange,
                                            onBlur,
                                        },
                                        fieldState: {
                                            inValid,
                                            isTouched,
                                            isDirty,
                                            error
                                        },
                                        formState,
                                    }) => ( 
                                <Select
                                  
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={value}
                                    label="District *"
                                    onChange={ (e) => {  onChange(e); handleChangeSelectDistrict(e)} }
                                    MenuProps={{
                                        PaperProps: { sx: { maxHeight: 200 } }
                                    }}
                                >

                                    {values.map((district) => (

                                        <MenuItem value={district.Name}>{district.Name}</MenuItem>
                                    ))}
                                </Select>
                                )}
                                            />
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>

                            <FormControl required sx={{ paddingLeft: "0px", minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-required-label">City</InputLabel>
                                <Controller
                                name="Cities"
                                control={control}
                                render={
                                    ({
                                        field : {
                                            name,
                                            value=formValues.city,
                                            values=cities,
                                            ref,
                                            onChange,
                                            onBlur,
                                        },
                                        fieldState: {
                                            inValid,
                                            isTouched,
                                            isDirty,
                                            error
                                        },
                                        formState,
                                    }) => ( 
                                <Select
                                    
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={value}
                                    label="City *"
                                    onChange={ (e) => {  onChange(e); handleChangeSelectCity(e) } }
                                    MenuProps={{
                                        PaperProps: { sx: { maxHeight: 200 } }
                                    }}
                                >

                                    {values.map((city) => (

                                        <MenuItem value={city.Name}>{city.Name}</MenuItem>
                                    ))}
                                </Select>
                                )}
                                            />
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                            
                        <FormGroup>
                        <Controller
                        name={"title"}
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value=formValues.title, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (                                                    
                            <TextField
                                 
                                id="title"
                                name="title"
                                label="Title"
                                type="text"
                                value={value}
                                onChange={ (e) => { onChange(e); handleChangeTextFieldTitle(e) } }
                                required
                                error
                                helperText={'This is News Title'}
                            />
                            )
                        }
                        />                             
                            <FormControl variernt="filled">
                            <FormLabel component="legent"> News Content</FormLabel>
                            <Box
                                sx={{
                                    width: 1000,
                                    hight: 100,
                                    maxWidth: '100%',
                                }}
                            >
                        <Controller
                        name={"content"}
                        defaultValue=''
                        rules={ {}}
                        control={control} 
                        render= { ( {field: {name, value=formValues.content, ref, onChange, onBlur,  },
                                    fieldState: {inValid, isTouched, isDirty, error},
                                    formState,
                                    }) => (   
                                <TextareaAutosize
                                    aria-label="textarea"
                                    placeholder=""
                                    minRows={5}
                                    value={value}
                                    onChange={ (e) => { onChange(e); handleChangeTextareaContent(e) } }
                                    style={{ width: 1000 }}
                                />
                            )
                        }
                        /> 
                            </Box>
                            </FormControl>  
                            <FormControl> 
                            <input disabled={!isValid && addRequestStatus === 'idle'}  type="submit" />  
                            </FormControl> 
                        </FormGroup>


                        
                    </form>
                </Grid>
                <Grid item xs={12}>
                    <h2> Posts </h2>
                </Grid>
 
                
                {
                    newsPosts
                }


     
                {/*
                    <Grid item xs={12}  >
                        <div style={{ height: 300, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                onSelectionModelChange={null}
                            />
                        </div>
                    </Grid>
                //
                }
            </Grid>
        </>

    )
    */
}