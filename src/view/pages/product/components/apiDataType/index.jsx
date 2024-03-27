/**
 * 
 * API Data Type component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState} from 'react';
import { encode } from 'base-64';
import axios from 'axios';
import {Box, Button, Select, MenuItem, Chip} from '@mui/material';
import ReactJson from 'react-json-view';
import {useUser} from '../../../../../contexts/userContext';

// OTHER IMPORT
import {BAR_STYLE_BY_METHOD, METHOD_STYLE, CONTAINER_STYLE_BY_METHOD, REQUEST_TYPE} from './constants';

// STYLE IMPORT
import useStyles from './styles';

const APIDataType = (props) => {
  // DECLARE STYLE
  const classes = useStyles();
  const { state: userState } = useUser();

  // LOCAL VARIABLE
  let {method, host, url, info, requestBody, responseBody} = props.data;

  // DECLARE STATE
  const [isOpen, setOpen] = useState(false);
  const [output, setOutput] = useState(responseBody);
  const [requestContentType, setRequestContentType] = useState(REQUEST_TYPE[0]);

  const onEditRequestData = (dataObject) => {
    requestBody = dataObject.updated_src;
  }

  const onExecute = async () => {
    const apiURL = host + url;
    props.setLoading(true);
    try {
      const param = JSON.parse(requestBody);
      const auth = encode(`${userState.user.displayName}:${userState.user.displayName}`);
      const response = await axios.post(
        apiURL, 
        {...param},
        {
          headers: {
          'Content-Type': requestContentType,
          'Access-Control-Allow-Origin': 'https://sfaizal88.github.io',
          'Authorization': `Basic ${auth}`
        }
      });
      if (response.data) {
        setOutput(JSON.stringify(response.data));
      }
    } catch (error) {
      console.log("Error occured: ", error);
      setOutput(JSON.stringify(error));
    } finally {
      props.setLoading(false);
    }
  }

  return (
    <Box className={classes.container} style={CONTAINER_STYLE_BY_METHOD[method]}>
      <Box className={classes.headContainer} style={BAR_STYLE_BY_METHOD[method]} onClick={() => setOpen((preValue) => !preValue)}>
        <Box className={classes.method} style={METHOD_STYLE[method]}>{method}</Box>
        <Box className={classes.url}>{url}</Box>
        <Box className={classes.info}>{info} <Chip label={host} size='small' color="primary" /></Box>
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
                  onEdit={onEditRequestData}
                  onAdd={onEditRequestData}
                  onDelete={onEditRequestData}/>}
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