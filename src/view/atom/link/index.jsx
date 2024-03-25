/* eslint-disable react/prop-types */
/**
 * 
 * Link component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React  from 'react';
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

const Link = (props) => {
  // DECLASE STYLE
  const classes = useStyles();

  return (
    <Box className={classes.link} onClick={props?.onClick}> 
      {props.label}
    </Box>
  )
}

export default Link;