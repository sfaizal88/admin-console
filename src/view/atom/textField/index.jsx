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
    const {name, errors, label, placeholder, register} = props;

    return (
        <Box>
            <MuiTextField label={label} variant="outlined" {...register(name)} 
            fullWidth placeholder={placeholder} size='small' error={errors[name]}/>
            <Box className={classes.errorMessage}>{errors[name] && errors[name].message}</Box>
        </Box>
    )
};
export default TextField;