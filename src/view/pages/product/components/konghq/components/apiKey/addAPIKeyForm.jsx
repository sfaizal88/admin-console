/**
 * 
 * add API Key Form - Kong HQ component
 * @author - NA 
 * @date - 1st April, 2024
 * 
 */
// GENERIC IMPORT
import React from 'react';
import {Box, Grid, Button} from '@mui/material';
import { encode } from 'base-64';
import axios from 'axios';
import { useForm, useFieldArray } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { yupResolver } from "@hookform/resolvers/yup"

// COMPONENT IMPORT
import {TextField, Paper} from '../../../../../../atom';
import {JSONHeader, ADD_API_KEY_KONGHQ, originSource} from '../../../../../../../api/constants';
import {addAPIKeySchema} from '../../schema';
import useNotification from '../../../../../../../utils/notification';
import {useUser} from '../../../../../../../contexts/userContext';
import APIKeyList from './APIKeyList';

// STYLE IMPORT
import useStyles from '../../styles';

const AddAPIKeyForm = (props) => {
  // DECLARE STYLE
  const classes = useStyles();
  const { state: userState } = useUser();

  // DECLARE NOTIFICATION
  const setNotification = useNotification();

  // HOOK FORM
  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      apiList: [{ apiKey: {apiKeyString: '', serviceProvider: '', url: ''}, email: '', tier: 0, maxQuota: 0 }],
    },
    resolver: yupResolver(addAPIKeySchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'apiList',
  });
  const commonProps = {register, errors, isRequired: true};

  const onSubmit = async (data) => {
    console.log(data);
    props.setLoading(true);
    try {
        const auth = encode(`${userState.user.displayName}:${userState.user.displayName}`);
        const response = await axios.post(ADD_API_KEY_KONGHQ, data.apiList, {
          headers: {
          'Content-Type': JSONHeader.headers['Content-Type'],
          'Access-Control-Allow-Origin': originSource,
          'Authorization': `Basic ${auth}`
          }
        });
        if (response.data) {
          console.log(response.data);
          setNotification.success("API key added successfully.");
        }
      } catch (error) {
        console.log("Error occured: ", error);
        setNotification.error();
      } finally {
        props.setLoading(false);
      }
  }

  return (
    <Box>
    <Paper title='Add API key' icon={<i class="fa-solid fa-circle-plus"></i>}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {fields.map((field, index) => (
          <Box my={2} key={field.id}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <TextField {...commonProps} label="API Key" name={`apiList.${index}.apiKey.apiKeyString`} errorState={errors.apiList?.[index]?.apiKey?.apiKeyString} placeholder="Enter the api Key"/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField {...commonProps} label="Service Provider" name={`apiList.${index}.apiKey.serviceProvider`} errorState={errors.apiList?.[index]?.apiKey?.serviceProvider} placeholder="Enter the service provider"/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField {...commonProps} isRequired={false} label="URL" name={`apiList.${index}.apiKey.url`} errorState={errors.apiList?.[index]?.apiKey?.url} placeholder="Enter the url"/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField {...commonProps} label="Email" name={`apiList.${index}.email`} errorState={errors.apiList?.[index]?.email}  placeholder="Enter the email"/>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <TextField type="number" {...commonProps} label="Tier" name={`apiList.${index}.tier`} errorState={errors.apiList?.[index]?.tier}  placeholder="Enter the tier"/>
                </Grid>
                <Grid item xs={12} sm={1}>
                    <TextField type="number" {...commonProps} label="Max Quota" name={`apiList.${index}.maxQuota`} errorState={errors.apiList?.[index]?.maxQuota}  placeholder="Enter the max quota"/>
                </Grid>
                <Grid item xs={12} sm={1}>
                  <Button type="button" className={classes.btn} startIcon={<DeleteIcon/>} variant="contained" onClick={() => remove(index)} color="error" fullWidth>Remove</Button>
                </Grid>
            </Grid>
          </Box>
        ))}
        <Box className={classes.btnContainer}>
            <Button className={classes.btn} startIcon={<AddIcon/>} variant="outlined" type="button" onClick={() => append({apiKey: '', email: '', tier: 0, maxQuota: 0})}>Add</Button>
            <Button className={classes.btn} startIcon={<SendIcon/>} variant="contained" type="submit">Submit</Button>
        </Box>
      </form>
      </Paper>
      <APIKeyList/>
      </Box>
  )
}

export default AddAPIKeyForm;