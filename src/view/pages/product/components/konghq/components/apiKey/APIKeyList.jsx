/**
 * 
 * API Key List - Kong HQ component
 * @author - NA 
 * @date - 1st April, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import React, {useState, useEffect} from 'react';
import { encode } from 'base-64';
import {Box, Grid} from '@mui/material';
import axios from 'axios';

// COMPONENT IMPORT
import {Paper, Empty} from '../../../../../../atom';
import {LIST_API_KEY_KONGHQ, JSONHeader, originSource, REMOVE_API_KEY_KONGHQ} from '../../../../../../../api/constants';
import {useUser} from '../../../../../../../contexts/userContext';
import ViewAPIKey from './viewAPIKey';

// DATA
import listData from '../../mockdata/apiKeys.json'

// STYLE IMPORT
import useStyles from '../../styles';

const APIKeyList = (props) => {
  // DECLARE STYLE
  const classes = useStyles();
  const widths = [2, 2, 2, 2, 1, 1, 2]

  // DECLARE STATE
  const { state: userState } = useUser();
  const [state, setState] = useState([]);
  const [selectedData, setSelectedData] = useState(listData[0]);
  const [isOpenViewModal, setOpenViewModal] = useState(false);
  const auth = encode(`${userState.user.displayName}:${userState.user.displayName}`);

  const getAllConfig = async () => {
    const response = await axios.get(LIST_API_KEY_KONGHQ, {
      headers: {
      'Content-Type': JSONHeader.headers['Content-Type'],
      'Access-Control-Allow-Origin': originSource,
      'Authorization': `Basic ${auth}`
      }
    });
    setState(response?.data || []);
  };

  const removeAPIKey = async (apiKeyString) => {
    const response = await axios.post(REMOVE_API_KEY_KONGHQ, {
      removedApiKey: apiKeyString
    }, {
      headers: {
      'Content-Type': JSONHeader.headers['Content-Type'],
      'Access-Control-Allow-Origin': originSource,
      'Authorization': `Basic ${auth}`
      }
    });
    console.log("Remove process: ", response);
  }

  useEffect(() => {
   getAllConfig();
  // setState(listData)
  }, [])
  return (
    <Box>
    <Paper  title='All API Keys' icon={<i class="fa-solid fa-list"></i>}>
      <br/>
      <Grid container className={classes.rowHeader}>
        <Grid item xs={widths[0]} className={classes.rowHeaderTitle}>API key string</Grid>
        <Grid item xs={widths[1]} className={classes.rowHeaderTitle}>Service provider</Grid>
        <Grid item xs={widths[2]} className={classes.rowHeaderTitle}>URL</Grid>
        <Grid item xs={widths[3]} className={classes.rowHeaderTitle}>Email</Grid>
        <Grid item xs={widths[4]} className={classes.rowHeaderTitle}><Box textAlign={'center'}>Tier</Box></Grid>
        <Grid item xs={widths[5]} className={classes.rowHeaderTitle}><Box textAlign={'center'}>Max quota</Box></Grid>
        <Grid item xs={widths[6]} className={classes.rowHeaderTitle}><Box textAlign={'center'}>Action</Box></Grid>
      </Grid>
      {state.map((item, index) => 
        <Grid container className={classes.rowDataHeader} key={index}>
          <Grid item xs={widths[0]} className={clsx(classes.rowData)}>
            {item.apiKey.apiKeyString}
          </Grid>
          <Grid item xs={widths[1]} className={classes.rowData}>
            {item.apiKey.serviceProvider}
          </Grid>
          <Grid item xs={widths[2]} className={classes.rowData}>
            <Box component='span' className={classes.link}>{item.apiKey.url}</Box>
          </Grid>
          <Grid item xs={widths[3]} className={classes.rowData}>
            {item.email}
          </Grid>
          <Grid item xs={widths[4]} className={classes.rowData}>
            <Box textAlign={'center'}>{item.tier}</Box>
          </Grid>
          <Grid item xs={widths[5]} className={classes.rowData}>
            <Box textAlign={'center'}>{item.maxQuota}</Box>
          </Grid>
          <Grid item xs={widths[6]} className={classes.rowData} >
            <Box textAlign={'center'}>
              <Box onClick={() => {
                setSelectedData(item);
                setOpenViewModal(true);
              }} component='span' className={classes.link}>Details</Box> | 
              <Box color='error' onClick={() => removeAPIKey(item.apiKey.apiKeyString)} component='span' className={classes.link}>Remove</Box>
            </Box>
          </Grid>
        </Grid>
      )}
      {!state.length && <Empty 
        title='No api key created' 
        subtitle='Please create api key.' 
        icon={<i className="fa fa-ban"></i>}/>
      }
    </Paper>
    {isOpenViewModal && <ViewAPIKey data={selectedData} onClose={() => setOpenViewModal(false)}/>}
    </Box>
  )
}

export default APIKeyList;