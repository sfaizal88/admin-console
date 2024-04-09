/* eslint-disable react/prop-types */
/**
 * 
 * Paper section component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React from 'react';
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

const Paper = (props) => {
    // DECLARE STYLE
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            {props.title && <Box className={classes.titleContainer}>{props.icon}{props.title}</Box>}
            {props.children}
        </Box>
    )
};
export default Paper;