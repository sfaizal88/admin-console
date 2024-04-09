/**
 * 
 * Config List - Kong HQ component
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
import {Paper} from '../../../../../../atom';
import {LIST_CONFIG_KONGHQ, JSONHeader, originSource} from '../../../../../../../api/constants';
import {useUser} from '../../../../../../../contexts/userContext';

// DATA
import listData from '../../mockdata/configList.json'

// STYLE IMPORT
import useStyles from '../../styles';

const ConfigList = (props) => {
  // DECLARE STYLE
  const classes = useStyles();
  const widths = [2, 2, 2, 2, 2, 2]

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
    setState(response.data?.result || []);
  };

  useEffect(() => {
    getAllConfig();
    // setState(listData.result)
  }, [])
  return (
    <Box>
    <Paper  title='All Config' icon={<i class="fa-solid fa-list"></i>}>
      <br/>
      <Grid container className={classes.rowHeader}>
        <Grid item xs={widths[0]} className={classes.rowHeaderTitle}>Identifier</Grid>
        <Grid item xs={widths[1]} className={classes.rowHeaderTitle}>Script content</Grid>
        <Grid item xs={widths[2]} className={classes.rowHeaderTitle}>Config text</Grid>
        <Grid item xs={widths[3]} className={classes.rowHeaderTitle}>Validation test case</Grid>
        <Grid item xs={widths[4]} className={classes.rowHeaderTitle}><Box textAlign={'center'}>Validation</Box></Grid>
        <Grid item xs={widths[5]} className={classes.rowHeaderTitle}><Box textAlign={'center'}>Action</Box></Grid>
      </Grid>
      {state.map((item, index) => 
        <Grid container  className={classes.rowDataHeader} key={index}>
          <Grid item xs={widths[0]} className={clsx(classes.rowData)}>
            <Box component='span'>SD39JSD</Box>
          </Grid>
          <Grid item xs={widths[1]} className={classes.rowData}>
            <Box component='span' className={classes.link}>Script file</Box>
          </Grid>
          <Grid item xs={widths[2]} className={classes.rowData}>
            <Box component='span' className={classes.link}>Config file</Box>
          </Grid>
          <Grid item xs={widths[3]} className={classes.rowData}>
            <Box component='span' className={classes.link}>Validation file</Box>
          </Grid>
          <Grid item xs={widths[4]} className={classes.rowData}>
            <Box textAlign={'center'}>Pass</Box>
          </Grid>
          <Grid item xs={widths[5]} className={classes.rowData} >
            <Box textAlign={'center'}><Box component='span' className={classes.link}>Details</Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Paper>
    </Box>
  )
}

export default ConfigList;