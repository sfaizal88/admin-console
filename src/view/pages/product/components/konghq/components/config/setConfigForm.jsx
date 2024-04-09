/**
 * 
 * Set Config Form - Kong HQ component
 * @author - NA 
 * @date - 1st April, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState} from 'react';
import { encode } from 'base-64';
import {Box, Grid, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import axios from 'axios';
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import { yupResolver } from "@hookform/resolvers/yup"

// COMPONENT IMPORT
import {TextField, Paper} from '../../../../../../atom';
import {JSONHeader, SET_CONFIG_KONGHQ, originSource} from '../../../../../../../api/constants';
import {setConfigSchema} from '../../schema';
import useNotification from '../../../../../../../utils/notification';
import {useUser} from '../../../../../../../contexts/userContext';
import {capitalizeFirstLetter} from '../../../../../../../utils';
import ConfigList from './configList';

// STYLE IMPORT
import useStyles from '../../styles';

const SetConfigForm = (props) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE STATE
  const [fileUpload, setFileUpload] = useState({
    isConfigTextFile: 1,
    isScriptContentFile: 1,
    isValidationTestCaseFile: 1,
  })
  const [fileContent, setFileContent] = useState({
    configTextFile: null,
    scriptContentFile: null,
    validationTestCaseFile: null,
  })
  const { state: userState } = useUser();
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

  const handleFileChange = (event, name) => {
    const { type, files } = event.target;
    const file = files[0];
    console.log(type);
    const reader = new FileReader();
    const fileExtension = file.name.split('.').pop().toLowerCase();
    reader.onload = (e) => {
      if (fileExtension === 'json') {
        setFileContent({...fileContent, [name]: JSON.stringify(JSON.parse(e.target.result))});
      } else {
        setFileContent({...fileContent, [name]: e.target.result});
      }
    };
    reader.readAsText(file);
  };

  const onSubmit = async (data) => {
    props.setLoading(true);
    try {
      const auth = encode(`${userState.user.displayName}:${userState.user.displayName}`);
      const param = {
        ...data,
        ...(fileUpload.isConfigTextFile == 1 && { configText: fileContent.configTextFile }),
        ...(fileUpload.isScriptContentFile == 1 && { scriptContent: fileContent.scriptContentFile }),
        ...(fileUpload.isValidationTestCaseFile == 1 && { validationTestCase: fileContent.validationTestCaseFile }),
      }
        const response = await axios.post(SET_CONFIG_KONGHQ, param, {
          headers: {
          'Content-Type': JSONHeader.headers['Content-Type'],
          'Access-Control-Allow-Origin': originSource,
          'Authorization': `Basic ${auth}`
        }});
        if (response.data) {
          if (response.data?.error) {
            setNotification.error(capitalizeFirstLetter(response.data?.error));
          } else {
            setNotification.success("Konghq configured successfully.");
          }
          console.log(response.data);
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
    <Paper  title='Set Config' icon={<i class="fa-solid fa-gear"></i>}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <br/>
        <Grid container spacing={2} className={classes.row}>
            <Grid item xs={12} sm={12}>
                <TextField {...commonProps} label="Identifier" name="identifier" placeholder="Enter the identifier"/>
            </Grid>
        </Grid>
        <Box className={classes.row}>
          <Box className={classes.rowField}>
            <FormControl>
              <FormLabel>Config Text*</FormLabel>
              <RadioGroup row
                defaultValue={fileUpload.isConfigTextFile}
                name="radio-buttons-group"
                onChange={(event) => setFileUpload({...fileUpload, isConfigTextFile: event.target.value})}
              >
                <FormControlLabel value={1} control={<Radio />} label="File upload" />
                <FormControlLabel value={0} control={<Radio />} label="Content" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box className={classes.rowValue}>
            <TextField {...commonProps} name="configText" placeholder="Enter the config text" 
            {...(fileUpload.isConfigTextFile == 1 && { type: 'file', handleChange: (event) => handleFileChange(event, 'configTextFile')})}/>
          </Box>
        </Box>

        <Box className={classes.row}>
          <Box className={classes.rowField}>
            <FormControl>
              <FormLabel>Script Content*</FormLabel>
              <RadioGroup row
                defaultValue={fileUpload.isScriptContentFile}
                name="radio-buttons-group"
                onChange={(event) => setFileUpload({...fileUpload, isScriptContentFile: event.target.value})}
              >
                <FormControlLabel value={1} control={<Radio />} label="File upload" />
                <FormControlLabel value={0} control={<Radio />} label="Content" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box className={classes.rowValue}>
            <TextField {...commonProps}  name="scriptContent" placeholder="Enter the script content"
            {...(fileUpload.isScriptContentFile == 1 && { type: 'file', handleChange: (event) => handleFileChange(event, 'scriptContentFile')})}/>
          </Box>
        </Box>

        <Box className={classes.row}>
          <Box className={classes.rowField}>
            <FormControl >
              <FormLabel>Validation Test Case*</FormLabel>
              <RadioGroup row
                defaultValue={fileUpload.isValidationTestCaseFile}
                name="radio-buttons-group"
                onChange={(event) => setFileUpload({...fileUpload, isValidationTestCaseFile: event.target.value})}
              >
                <FormControlLabel value={1} control={<Radio />} label="File upload" />
                <FormControlLabel value={0} control={<Radio />} label="Content" />
              </RadioGroup>
            </FormControl>
            </Box>
            <Box className={classes.rowValue}>
            <TextField {...commonProps} name="validationTestCase" placeholder="Enter the validation test case"  
            {...(fileUpload.isValidationTestCaseFile == 1 && { type: 'file', handleChange: (event) => handleFileChange(event, 'validationTestCaseFile')})}/>
          </Box>
        </Box>
        <Box className={classes.btnContainer}>
            <Button className={classes.btn} startIcon={<SendIcon/>} variant="contained" type="submit">Submit</Button>
        </Box>
      </form>
    </Paper>
    <ConfigList/>
    </Box>
  )
}

export default SetConfigForm;