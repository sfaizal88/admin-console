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
import axios from 'axios';
import { useForm, useFieldArray } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { yupResolver } from "@hookform/resolvers/yup"

// COMPONENT IMPORT
import {TextField} from '../../../../../atom';
import {JSONHeader, ADD_API_KEY_KONGHQ} from '../../../../../../api/constants';
import {addAPIKeySchema} from '../schema';
import useNotification from '../../../../../../utils/notification';

// STYLE IMPORT
import useStyles from '../styles';

const AddAPIKeyForm = (props) => {
  // DECLARE STYLE
  const classes = useStyles();

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
      apiList: [{ apiKey: '', email: '', tier: 0, maxQuota: 0 }],
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
        const response = await axios.post(ADD_API_KEY_KONGHQ, data.apiList, JSONHeader);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {fields.map((field, index) => (
        <Box mb={0} key={field.id}>
          <Grid container spacing={2} className={classes.row}>
              <Grid item xs={12} sm={4}>
                  <TextField {...commonProps} label="API Key" name={`apiList.${index}.apiKey`} errorState={errors.apiList?.[index]?.apiKey} placeholder="Enter the api Key"/>
              </Grid>
              <Grid item xs={12} sm={3}>
                  <TextField {...commonProps} label="Email" name={`apiList.${index}.email`} errorState={errors.apiList?.[index]?.email}  placeholder="Enter the email"/>
              </Grid>
              <Grid item xs={12} sm={2}>
                  <TextField type="number" {...commonProps} label="Tier" name={`apiList.${index}.tier`} errorState={errors.apiList?.[index]?.tier}  placeholder="Enter the tier"/>
              </Grid>
              <Grid item xs={12} sm={2}>
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
  )
}

export default AddAPIKeyForm;