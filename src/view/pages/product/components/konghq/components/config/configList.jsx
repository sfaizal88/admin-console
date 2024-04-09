/**
 * 
 * Config List - Kong HQ component
 * @author - NA 
 * @date - 1st April, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState, useEffect} from 'react';
import { encode } from 'base-64';
import {Box} from '@mui/material';
import axios from 'axios';

// COMPONENT IMPORT
import {Paper} from '../../../../../../atom';
import {LIST_CONFIG_KONGHQ, JSONHeader, originSource} from '../../../../../../../api/constants';
import {useUser} from '../../../../../../../contexts/userContext';

// STYLE IMPORT
import useStyles from '../../styles';

const ConfigList = (props) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE STATE
  const { state: userState } = useUser();
  const [state, setState] = useState([]);

  const getAllConfig = async () => {
    const auth = encode(`${userState.user.displayName}:${userState.user.displayName}`);
    const response = await axios.post(LIST_CONFIG_KONGHQ, {
      headers: {
      'Content-Type': JSONHeader.headers['Content-Type'],
      'Access-Control-Allow-Origin': originSource,
      'Authorization': `Basic ${auth}`
      }
    });
    console.log(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getAllConfig();
  }, [])
  return (
    <Box>
    <Paper  title='Set Config' icon={<i class="fa-solid fa-gear"></i>}>
      LIST
    </Paper>
    </Box>
  )
}

export default ConfigList;