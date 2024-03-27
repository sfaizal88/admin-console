/**
 * 
 * Form data Type component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React from 'react';
import {Box} from '@mui/material';

// COMPONENT IMPORT
import {FromField} from '../../../../atom';

const FormDataType = (props) => {
  return (
    <Box> 
        <FromField label={props.data.label} value={props.data.value} canCopy mask/>
    </Box>
  )
}

export default FormDataType;