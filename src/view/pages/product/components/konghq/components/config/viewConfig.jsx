/**
 * 
 * API Key List - Kong HQ component
 * @author - NA 
 * @date - 1st April, 2024
 * 
 */
// GENERIC IMPORT
import React from 'react';
import {Box, TextField} from '@mui/material';

// COMPONENT IMPORT
import {FromField, FormModal} from '../../../../../../atom';

// STYLE IMPORT
import useStyles from '../../styles';

const ViewConfig = (props) => {
  // DECLARE STYLE
  const classes = useStyles();

  return (
    <FormModal
        title='View Config'
        hidePrimaryBtn
        onClose={props.onClose}
        size='medium'
    >
      <Box mt={2}>
        <Box className={classes.formRow}>
          <Box className={classes.formFieldlBlock}>
              <Box className={classes.fieldLabel}>Script Content</Box>
              <TextField  variant="outlined" fullWidth={true} value={props.data.scriptContent} 
                multiline maxRows={10} className={classes.formTextfield} inputProps={{readOnly: true}}/>
          </Box>
        </Box>
        <Box className={classes.formRow}>
          <Box className={classes.formFieldlBlock}>
              <Box className={classes.fieldLabel}>Config Text</Box>
              <TextField  variant="outlined" fullWidth={true} value={props.data.configText} 
                multiline maxRows={10} className={classes.formTextfield} inputProps={{readOnly: true}}/>
          </Box>
        </Box>
        <Box className={classes.formRow}>
          <Box className={classes.formFieldlBlock}>
              <Box className={classes.fieldLabel}>Validation Test Case</Box>
              <TextField  variant="outlined" fullWidth={true} value={props.data.validationTestCase} 
                multiline maxRows={10} className={classes.formTextfield} inputProps={{readOnly: true}}/>
          </Box>
        </Box>
        <FromField label='Validation Ok' value={props.data.validationOk ? 'Success' : 'Failed'}/>
      </Box>
    </FormModal>
  )
}

export default ViewConfig;