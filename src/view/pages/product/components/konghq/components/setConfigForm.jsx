/**
 * 
 * Set Config Form - Kong HQ component
 * @author - NA 
 * @date - 1st April, 2024
 * 
 */
// GENERIC IMPORT
import React from 'react';
import {Box, Grid, Button} from '@mui/material';
import axios from 'axios';
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import { yupResolver } from "@hookform/resolvers/yup"

// COMPONENT IMPORT
import {TextField} from '../../../../../atom';
import {JSONHeader, SET_CONFIG_KONGHQ} from '../../../../../../api/constants';
import {setConfigSchema} from '../schema';
import useNotification from '../../../../../../utils/notification';

// STYLE IMPORT
import useStyles from '../styles';

const SetConfigForm = (props) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION
  const setNotification = useNotification();

  // HOOK FORM
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
        identifier: "",
        configText: "",
        scriptContent: "",
        validationTestCase: ""
    },
    resolver: yupResolver(setConfigSchema),
  });
  const commonProps = {register, errors, isRequired: true};

  const onSubmit = async (data) => {
    console.log(data);
    props.setLoading(true);
    try {
        const response = await axios.post(SET_CONFIG_KONGHQ, data, JSONHeader);
        if (response.data) {
          console.log(response.data);
          setNotification.success("Konghq configured successfully.");
        }
      } catch (error) {
        console.log("Error occured: ", error);
        setNotification.error();
      } finally {
        props.setLoading(false);
      }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <br/>
      <Grid container spacing={2} className={classes.row}>
          <Grid item xs={6}>
              <TextField {...commonProps} label="Identifier" name="identifier" placeholder="Enter the identifier"/>
          </Grid>
          <Grid item xs={6}>
              <TextField {...commonProps} label="Config Text" name="configText" placeholder="Enter the config text"/>
          </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.row}>
          <Grid item xs={6}>
              <TextField {...commonProps} label="Script Content" name="scriptContent" placeholder="Enter the script content"/>
          </Grid>
          <Grid item xs={6}>
              <TextField {...commonProps} label="Validation Test Case" name="validationTestCase" placeholder="Enter the validation test case"/>
          </Grid>
      </Grid>
      <Box className={classes.btnContainer}>
          <Button className={classes.btn} startIcon={<SendIcon/>} variant="contained" type="submit">Submit</Button>
      </Box>
    </form>
  )
}

export default SetConfigForm;