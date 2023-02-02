import React, { useEffect, useState }  from 'react'
import { useParams } from "react-router-dom"
import { styled } from '@mui/material/styles';


// import news from '../../../Data/News/News.json'

import { selectNewsById } from '../../../../App/Redux/Contents/News/NewsSlice';
import { useSelector  } from 'react-redux';
import { parseISO, formatDistanceToNow, format } from 'date-fns'

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Author from '../../../Common/Author';
import ReactionButton from '../../../Common/ReactionButton';


import { selectAllStates } from '../../../../App/Redux/Contents/Categories/StatesSlice';
import { selectAllNewsStatus } from '../../../../App/Redux/Contents/News/NewsSlice';
import { selectAllDistricts } from '../../../../App/Redux/Contents/Categories/DistrictsSlice';
import { selectAllCities } from '../../../../App/Redux/Contents/Categories/CitiesSlice';
import { selectAllMenus } from '../../../../App/Redux/Contents/Categories/MenusSlice';
import { selectAllSubMenus } from '../../../../App/Redux/Contents/Categories/SubMenusSlice';
import { selectAllSubMenusCategories } from '../../../../App/Redux/Contents/Categories/SubMenusCategoriesSlice';
import { selectAllCategorySpecialities } from '../../../../App/Redux/Contents/Categories/CategorySpecialitiesSlice';
import { Grid, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';


export default function NewsEdit() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { id } = useParams()

  const newsItem = useSelector(  (state) => selectNewsById( state, Number(id)) )

  const defaultFormValues = {
    state: 'Telangana',
    district: 'Karimnagar',
    city: 'Karimnagar',
    menu: 'News',
    submenu: 'Politics',
    submenucategory: 'State',
    userId: 1,
    time : new Date(),
    title: 'News Title',
    content: 'News Details',
    
};

  const [formValues, setFormValues] = useState({...defaultFormValues});

  const [ addRequestStatus, setAddRequestStatus] = useState( 'idle');
 
  const states = useSelector(selectAllStates)
  const districts = useSelector(selectAllDistricts)
  const cities = useSelector(selectAllCities)
  const menus = useSelector(selectAllMenus)
  const submenus = useSelector(selectAllSubMenus)
  const submenuscategories = useSelector(selectAllSubMenusCategories)

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
        defaultValues: { ...formValues , ...newsItem  },
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
        setFormValues( { ...formValues } );
        console.log("Data :" ,data);

    };

 
  return (
    <>
        <Grid container
                direction="row"
                rowSpacing={4}
                columnSpacing={8}

        >
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12} >
                <article  style={{ display:'block'  }}>
                <h3>{newsItem.title}</h3> 
                      { <Author userId={newsItem.userId} > </Author>}
                      { formatDistanceToNow(  new Date(newsItem.time)) + " ago" }
                <p> {newsItem.content}</p>
                <ReactionButton post={newsItem}> </ReactionButton> 
                </article>
            </Grid>
            <Grid item xs={12} >    
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
                                    value={ formValues.menu  }
                                    label="Menu"
                                    onChange={(e) => {  onChange(e); handleChangeSelectMenu(e)} }
                                    MenuProps={{
                                        PaperProps: { sx: { maxHeight: 200 } }
                                    }}
                                >
                                         
                                         {values.map((menu) => (
                                        <MenuItem  key={menu.Menu} value={menu.Menu}>{menu.Menu}</MenuItem>
                                    ))}
 
                                </Select>
                            )}
                />
        
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
                                    value={formValues.submenu}
                                    label="SubMenu"
                                    onChange={ (e) => {  onChange(e); handleChangeSelectSubMenu(e) } } 
                                    MenuProps={{
                                        PaperProps: { sx: { maxHeight: 200 } }
                                    }}
                                >
                                    {values.map((submenu) => (
                                        <MenuItem key={submenu.SubMenu}  value={submenu.SubMenu} >{submenu.SubMenu}</MenuItem>
                                    ))}


                                </Select>
                                             )}
                />
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

                                        <MenuItem key={submenucategory.SubMenuCategory} value={submenucategory.SubMenuCategory}>{submenucategory.SubMenuCategory}</MenuItem>
                                    ))}
                                </Select>

                                    )}
                />
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

                                        <MenuItem key={state.Name} value={state.Name}>{state.Name}</MenuItem>
                                    ))}
                                </Select>
                                            )}
                />
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
                                    value={formValues.district}
                                    label="District *"
                                    onChange={ (e) => {  onChange(e); handleChangeSelectDistrict(e)} }
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
                                    value={formValues.city}
                                    label="City *"
                                    onChange={ (e) => {  onChange(e); handleChangeSelectCity(e) } }
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
            </Grid>
            <Grid item xs={12} >
             
                <Controller
                        name={"title"}
                    
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
            
            </Grid>
            <Grid item xs={12} > 
                <Controller
                        name={"content"}
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
             </Grid>
            <Grid item xs={12} >
            </Grid>
            <Grid item xs={12} >
                    <input disabled={!isValid && addRequestStatus === 'idle'}  type="submit" />  
            </Grid>
            </form>
        </Grid>

    </>
  );


  /*
  const newsItem = news.filter( (newsItem) => { 
  return newsItem.id.toString() == id  }  ); 

  const medias = newsItem[0].Media;
  const thumbNail = medias.filter( (media) =>  { return media.type.trim().toString().toLowerCase().includes("medium")}) ;
  const thumbnailPath = thumbNail[0].path
  const mediumImagePath = `../../../${thumbNail[0].path}` ; 
  console.log( " Thumbnail 3 : " +  mediumImagePath );

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={newsItem[0].title}
        subheader={newsItem[0].time}
      />
      <CardMedia
        component="img"
         
        image={ require( `../../../${thumbnailPath}`  )}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           {newsItem[0].content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
         
      </CardActions>
    </Card>
  );

  */
}