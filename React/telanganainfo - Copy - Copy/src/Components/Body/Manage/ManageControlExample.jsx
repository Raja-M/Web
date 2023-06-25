import { TextField } from "@mui/material";
import * as React from "react";
import {Controller,  useForm, useFormState, useWatch } from "react-hook-form"

let renderCount = 0;

const Controller2 = ({ control, register, name, rules, value, render }) => {
    const props=  register(name);
    return render({
        onChange: props.onChange,
        onBlur: props.onBlur,
        name: props.name,
 
        }
    );
}

const Input = (props ) => {
    const [value, setValue ] = React.useState(props.value || "");
    

    return (
        <input
            name={props.name}
            onChange={(e) => {
                setValue( e.target.value);
                props.onChange && props.onChange(e);
            }}
            value={value}
        />
    );
};


export const Manage = () => {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        control,
        formState: { errors }
    } = useForm( {
        defaultValues: {
   
        }
    });

    const onSubmit = ( data ) => console.log(data);
    renderCount++ ;

    const inputValue = "TestValue";

  return (
    <div>
        <div>
            {renderCount}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input
              { ...register("firstName" )}
              placeholder="First Name"
              />

            <Controller2 { ...{
                    control, 
                    register,
                    name: 'lastName',
                    rules: {},
                    value: "test",
                    render: ( props ) => < Input { ...props } />

            }
            

            }
            />
            <Controller
            name={"title"}
            control={control} 
            value='Test2'
            render= { ( {field: {name, value=inputValue, ref, onChange, onBlur,  },
                         fieldState: {inValid, isTouched, isDirty, error},
                         formState,
                        }) => ( 
                        
                        <TextField onBlur={(e) => {onBlur(e) } }  onChange={(e) => {onChange(e) ; } } value={value} /> 
                        
                        )
             }
             />


            <input type="submit" />
        </form>

    </div>
  )
}
