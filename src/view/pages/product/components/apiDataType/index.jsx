/**
 * 
 * API Data Type component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState} from 'react';
import axios from 'axios';
import {Box, Button, Select, MenuItem} from '@mui/material';
import ReactJson from 'react-json-view';

// OTHER IMPORT
import {BAR_STYLE_BY_METHOD, METHOD_STYLE, CONTAINER_STYLE_BY_METHOD, REQUEST_TYPE} from './constants';
import {JSONHeader} from '../../../../../api/constants';

// STYLE IMPORT
import useStyles from './styles';

const APIDataType = (props) => {
  // DECLARE STYLE
  const classes = useStyles();

  // LOCAL VARIABLE
  const {method, host, url, info, requestBody, responseBody} = props.data;

  // DECLARE STATE
  const [isOpen, setOpen] = useState(false);
  const [output, setOutput] = useState(responseBody);
  const [requestContentType, setRequestContentType] = useState(REQUEST_TYPE[0]);

  const onEditRequestData = (dataObject) => {
    requestBody = dataObject.updated_src;
    console.log(requestBody);
  }

  const onExecute = async () => {
    const apiURL = host + url;
    props.setLoading(true);
    try {
      const param = JSON.parse(requestBody);
      const response = await axios.post(apiURL, {...param}, JSONHeader);
      if (response.data) {
        setOutput(JSON.stringify({
          "TransactionId": "string",
          "Transaction": {
            "From": "string",
            "To": "string",
            "RefBlockNumber": 0,
            "RefBlockPrefix": "string",
            "MethodName": "string",
            "Params": "string",
            "Signature": "string"
          }
        }));
      }
    } catch (error) {
      console.log("Error occured: ", error);
    } finally {
      props.setLoading(false);
    }
  }

  return (
    <Box className={classes.container} style={CONTAINER_STYLE_BY_METHOD[method]}>
      <Box className={classes.headContainer} style={BAR_STYLE_BY_METHOD[method]} onClick={() => setOpen((preValue) => !preValue)}>
        <Box className={classes.method} style={METHOD_STYLE[method]}>{method}</Box>
        <Box className={classes.url}>{url}</Box>
        <Box className={classes.info}>{info}</Box>
        <Box className={classes.arrow}>{isOpen ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i>}</Box>
      </Box>
      {isOpen && <Box className={classes.detailsContainer}>
        <Box className={classes.control} mb={1}><Button variant="outlined" size='small' onClick={onExecute}>Execute</Button></Box>
        <Box className={classes.paramContainer}>
          <Box className={classes.paramItem}>
            <Box className={classes.paramBox}>
              <Box className={classes.paramTitleContainer}>
                <Box className={classes.paramTitle}>Request Body</Box>
                <Box flex={1} justifyContent={'flex-end'} display='flex'><Select
                  value={requestContentType}
                  label="Content type"
                  size='small'
                  defaultValue={REQUEST_TYPE[0]}
                  onChange={(event) => setRequestContentType(event.target.value)}
                >
                  {REQUEST_TYPE.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                </Select></Box>
              </Box>
              <Box className={classes.code}>
                {requestBody && <ReactJson 
                  name={null} 
                  src={JSON.parse(requestBody)} 
                  theme="monokai"
                  onEdit={onEditRequestData}/>}
              </Box>
            </Box>
          </Box>
          <Box className={classes.paramItem}>
            <Box className={classes.paramBox}>
            <Box className={classes.paramTitleContainer}>
                <Box className={classes.paramTitle}>Response Body</Box>
                <Box flex={1} justifyContent={'flex-end'} display='flex'><Select
                  value={REQUEST_TYPE[0]}
                  disabled
                  label="Content type"
                  size='small'
                  defaultValue={REQUEST_TYPE[0]}
                >
                  {REQUEST_TYPE.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                </Select></Box>
              </Box>
              <Box className={classes.code}>
              <ReactJson 
                  name={null} 
                  src={JSON.parse(output)} 
                  theme="monokai"/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>}
    </Box>
  )
}

export default APIDataType;