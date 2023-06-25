import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { styled } from '@mui/material/styles';

// import news from '../../../Data/News/News.json'

import { selectNewsById, editNews } from '../../../../App/Redux/Contents/News/NewsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, formatDistanceToNow, format } from 'date-fns'

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Author from '../../../Common/Author';
import ReactionButton from '../../../Common/ReactionButton';

import { selectAllStates } from '../../../../App/Redux/Contents/Categories/StatesSlice';
import { selectAllDistricts } from '../../../../App/Redux/Contents/Categories/DistrictsSlice';
import { selectAllCities } from '../../../../App/Redux/Contents/Categories/CitiesSlice';
import { selectAllMenus } from '../../../../App/Redux/Contents/Categories/MenusSlice';
import { selectAllSubMenus } from '../../../../App/Redux/Contents/Categories/SubMenusSlice';
import { selectAllSubMenusCategories } from '../../../../App/Redux/Contents/Categories/SubMenusCategoriesSlice';
import { selectAllCategorySpecialities } from '../../../../App/Redux/Contents/Categories/CategorySpecialitiesSlice';
import { selectAllUsers } from '../../../../App/Redux/Contents/Users/UsersSlice';

import {  Grid, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import { LensRounded } from '@mui/icons-material';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { useGetPostsQuery } from '../../../../App/Redux/Contents/News/NewsSlice';


const NewsEdit = () => {
/*
    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()


    const navigate = useNavigate();
    const { id } = useParams();

    console.log("Id Value : " + id);
 
    const [addRequestStatus, setAddRequestStatus] = useState('idle');
    const dispatch = useDispatch();

    const defaultFormValues = {
        state: 'Telangana',
        district: 'Karimnagar',
        city: 'Karimnagar',
        menu: 'Info',
        submenu: 'Person',
        submenucategory: 'Doctors',
        categoryspeciality: 'FamilyMedicine',
        userid: 1,
        time: new Date(),
        title: 'test',
        content: 'News Details',

    };

    let newsItem = useSelector((state) => selectNewsById(state, (id)));

    const [formValues, setFormValues] = useState({ ...defaultFormValues, ...newsItem });

 

    const states = useSelector(selectAllStates)
    const districts = useSelector(selectAllDistricts)
    const cities = useSelector(selectAllCities)
    const menus = useSelector(selectAllMenus)
    const submenus = useSelector(selectAllSubMenus)
    const submenuscategories = useSelector(selectAllSubMenusCategories)
    const categoryspecialities = useSelector(selectAllCategorySpecialities)
    const users = useSelector(selectAllUsers)

    console.log("NewsItem :" + JSON.stringify(newsItem));

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
        defaultValues: { ...formValues, },
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

    const handleChangeSelectCategorySpeciality = (event) => {
        setFormValues({ ...formValues, categoryspeciality: event.target.value });
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

    const handleChangeSelectUser = (event) => {
        setFormValues({ ...formValues, userid: event.target.value });
    };

    const handleChangeTextFieldTitle = (event) => {
        setFormValues({ ...formValues, title: event.target.value });
    };
    const handleChangeTextareaContent = (event) => {
        setFormValues({ ...formValues, content: event.target.value });
    };

    const handleDelete = () =>{
        try{
            setAddRequestStatus( 'pending')
  
            setFormValues ({  ...defaultFormValues,});
        } catch (err){
            console.error('Failed to delete teh post', err)
        } finally {
            setAddRequestStatus( 'idle')
        }
    }
    const onSubmit = (data )  => {
        setFormValues( { ...formValues } );
        console.log("Data :" ,data);

        console.log("Data :" ,data);
        if (id ){
             

            console.log( "Updating... ");

            try{
                setAddRequestStatus( 'pending ');
                
                
                           
                navigate(`/manage/news/${data.id}`)
            } catch(err){
                console.error( ' Failed to update the Post' , err)
            } finally {
                setAddRequestStatus( 'idle')
            }

        }else {
            console.log( "Adding new ");
            try{
                setAddRequestStatus( 'pending ');
                
            } catch(err){
                console.error( ' Failed to save the Post' , err)
            } finally {
                setAddRequestStatus( 'idle')
            }
        }

    };

    return (
    <>
	{ 
	(
        () => {
            return(
                <>
                { isSuccess ?
                    (
                        <Grid container
                        direction="row"
                        rowSpacing={4}
                        columnSpacing={8}
        
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {
                                (
                                    () => {
                                        return (
                                            <Grid item xs={12} >
                                                {id && newsItem ? (
                                                    <article style={{ display: 'block' }}>
                                                        <h3>{newsItem?.title}</h3>
                                                        <Author userId={newsItem?.userId} > </Author>
                                                        {formatDistanceToNow(new Date(newsItem?.time)) + " ago"}
                                                        <p> {newsItem?.content}</p>
                                                        <ReactionButton post={newsItem ? newsItem : ''}> </ReactionButton>
                                                    </article>
                                                ) :
                                                    (''
                                                    )
                                                }
                                            </Grid>
                                        )
                                    }
                                )()
                            }
        
        
        
                            <Grid item xs={12} >
                                <Controller
                                    name="menu"
                                    control={control}
                                    render={
                                        ({
                                            field: {
                                                name,
                                                value = formValues.menu,
                                                values = menus,
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
                                                value={formValues.menu}
                                                label="Menu"
                                                onChange={(e) => { onChange(e); handleChangeSelectMenu(e) }}
                                                MenuProps={{
                                                    PaperProps: { sx: { maxHeight: 200 } }
                                                }}
                                            >
        
                                                {values.map((menu) => (
                                                    <MenuItem key={menu.Menu} value={menu.Menu}>{menu.Menu}</MenuItem>
                                                ))}
        
                                            </Select>
                                        )}
                                />
        
                                <Controller
                                    name="submenu"
                                    control={control}
                                    render={
                                        ({
                                            field: {
                                                name,
                                                value = formValues.submenu,
                                                values = submenus,
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
                                                value={formValues.submenu}
                                                label="SubMenu"
                                                onChange={(e) => { onChange(e); handleChangeSelectSubMenu(e) }}
                                                MenuProps={{
                                                    PaperProps: { sx: { maxHeight: 200 } }
                                                }}
                                            >
                                                {values.map((submenu) => (
                                                    <MenuItem key={submenu.SubMenu} value={submenu.SubMenu} >{submenu.SubMenu}</MenuItem>
                                                ))}
        
        
                                            </Select>
                                        )}
                                />
                                <Controller
                                    name="submenucategory"
                                    control={control}
                                    render={
                                        ({
                                            field: {
                                                name,
                                                value = formValues.submenucategory,
                                                values = submenuscategories,
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
                                                onChange={(e) => { onChange(e); handleChangeSelectSubMenuCategory(e) }}
                                                MenuProps={{
                                                    PaperProps: { sx: { maxHeight: 200 } }
                                                }}
                                            >
        
                                                {values.map((submenucategory) => (
        
                                                    <MenuItem key={submenucategory.SubMenuCategory} value={submenucategory.SubMenuCategory}>{submenucategory.SubMenuCategory}</MenuItem>
                                                ))}
                                            </Select>
        
                                        )}
                                />
                                <Controller
                                    name="categoryspeciality"
                                    control={control}
                                    render={
                                        ({
                                            field: {
                                                name,
                                                value = formValues.categoryspeciality,
                                                values = categoryspecialities,
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
                                                label="CategorySpeciality *"
                                                onChange={(e) => { onChange(e); handleChangeSelectCategorySpeciality(e) }}
                                                MenuProps={{
                                                    PaperProps: { sx: { maxHeight: 200 } }
                                                }}
                                            >
        
                                                {values.map((categoryspeciality) => (
        
                                                    <MenuItem key={categoryspeciality.CategorySpeciality} value={categoryspeciality.CategorySpeciality}>{categoryspeciality.CategorySpeciality}</MenuItem>
                                                ))}
                                            </Select>
        
                                        )}
                                />
                                <Controller
                                    name="state"
                                    control={control}
                                    render={
                                        ({
                                            field: {
                                                name,
                                                value = formValues.state,
                                                values = states,
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
                                                onChange={(e) => { onChange(e); handleChangeSelectState(e) }}
                                                MenuProps={{
                                                    PaperProps: { sx: { maxHeight: 200 } }
                                                }}
                                            >
        
                                                {values.map((state) => (
        
                                                    <MenuItem key={state.Name} value={state.Name}>{state.Name}</MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                />
                                <Controller
                                    name="district"
                                    control={control}
                                    render={
                                        ({
                                            field: {
                                                name,
                                                value = formValues.district,
                                                values = districts,
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
                                                value={formValues.district}
                                                label="District *"
                                                onChange={(e) => { onChange(e); handleChangeSelectDistrict(e) }}
                                                MenuProps={{
                                                    PaperProps: { sx: { maxHeight: 200 } }
                                                }}
                                            >
        
                                                {values.map((district) => (
        
                                                    <MenuItem key={district.Name} value={district.Name}>{district.Name}</MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                />
                                <Controller
                                    name="city"
                                    control={control}
                                    render={
                                        ({
                                            field: {
                                                name,
                                                value = formValues.city,
                                                values = cities,
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
                                                value={formValues.city}
                                                label="City *"
                                                onChange={(e) => { onChange(e); handleChangeSelectCity(e) }}
                                                MenuProps={{
                                                    PaperProps: { sx: { maxHeight: 200 } }
                                                }}
                                            >
                                                {values.map((city) => (
        
                                                    <MenuItem key={city.Name} value={city.Name}>{city.Name}</MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                />
        
                                <Controller
                                    name="userid"
                                    control={control}
                                    render={
                                        ({
                                            field: {
                                                name,
                                                value = formValues.userid,
                                                values = users,
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
                                                label="User *"
                                                onChange={(e) => { onChange(e); handleChangeSelectUser(e) }}
                                                MenuProps={{
                                                    PaperProps: { sx: { maxHeight: 200 } }
                                                }}
                                            >
                                                {values.map((user) => (
        
                                                    <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                />
        
                            </Grid>
                            <Grid item xs={12} >
        
                                <Controller
                                    name={"title"}
                                    value={formValues.title}
                                    rules={{}}
                                    control={control}
                                    render={({ field: { name, value = formValues.title, ref, onChange, onBlur, },
                                        fieldState: { inValid, isTouched, isDirty, error },
                                        formState,
                                    }) => (
                                        <TextField
                                            id="title"
                                            name="title"
                                            label="Title"
                                            type="text"
                                            value={formValues.title}
                                            onChange={(e) => { onChange(e); handleChangeTextFieldTitle(e) }}
                                            required
                                            error
                                            helperText={'This is News Title'}
                                        />
                                    )
                                    }
                                />
        
                            </Grid>
                            <Grid item xs={12} >
                                <Controller
                                    name={"content"}
                                    rules={{}}
                                    control={control}
                                    render={({ field: { name, value = formValues.content  , ref, onChange, onBlur, },
                                        fieldState: { inValid, isTouched, isDirty, error },
                                        formState,
                                    }) => (
                                        <TextareaAutosize
                                            aria-label="textarea"
                                            placeholder=""
                                            minRows={5}
                                            value={formValues.content}
                                            onChange={(e) => { onChange(e); handleChangeTextareaContent(e) }}
                                            style={{ width: 1000 }}
                                        />
                                    )
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} >
                            </Grid>
                            <Grid item xs={12} >
                                <input disabled={!isValid && addRequestStatus === 'idle'} type="submit" />
                                <Button variant="outlined" startIcon={<DeleteIcon/>} color='error' style={{backgroundColor : 'orange' }} 
                                    onClick={handleDelete}>
                                    Delete
                                </Button>
                            </Grid>
                        </form>
                    </Grid>
        
                    ): ( <h1> Loading..... </h1>)
                }
                </>
            )
        }
	)()
	}
    </>
    )
    */

}

export default NewsEdit