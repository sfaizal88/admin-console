/* eslint-disable react/prop-types */
/**
 * 
 * Text Field component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React from 'react';
import {TextField as MuiTextField, Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

const TextField = (props) => {
    // DECLARE STYLE
    const classes = useStyles();

    // PROPS
    const {name, errors, label, placeholder, register, isRequired, type = 'text', errorState = false, handleChange} = props;

    return (
        <Box>
            <MuiTextField type={type} label={label} variant="outlined" {...register(name)} required={isRequired} 
            {...(handleChange && { onChange: handleChange })} {...(type === 'file' && {accept: "image/*"})}
            fullWidth placeholder={placeholder} size='small' error={errorState || errors[name]} className={classes.texfield}/>
            <Box className={classes.errorMessage}>{errorState && errorState.message || errors[name] && errors[name].message}</Box>
        </Box>
    )
};
export default TextField;