/**
 * 
 * API Key List - Kong HQ component
 * @author - NA 
 * @date - 1st April, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState, useEffect} from 'react';
import {Box} from '@mui/material';

// COMPONENT IMPORT
import {FromField, FormModal} from '../../../../../../atom';

// STYLE IMPORT
import useStyles from '../../styles';

const ViewAPIKey = (props) => {
  // DECLARE STYLE
  const classes = useStyles();

  return (
    <FormModal
        title='View API key'
        hidePrimaryBtn
        onClose={props.onClose}
        size='medium'
    >
      <Box>
        <FromField label='API key string' value={props.data.apiKey.apiKeyString}/>
        <FromField label='Service provider' value={props.data.apiKey.serviceProvider}/>
        <FromField label='URL' value={props.data.apiKey.url}/>
        <FromField label='Email' value={props.data.email}/>
        <FromField label='Tier' value={props.data.tier}/>
        <FromField label='Max quota' value={props.data.maxQuota}/>
      </Box>
    </FormModal>
  )
}

export default ViewAPIKey;