/**
 * 
 * Kong HQ component
 * @author - NA 
 * @date - 1st April, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState} from 'react';
import {Box, Tabs, Tab} from '@mui/material';

// COMPONENT IMPORT
import {Container} from '../../../../atom';
import PageHeader from '../../../common/header/pageHeader';
import SetConfigForm from './components/setConfigForm';
import AddAPIKeyForm from './components/addAPIKeyForm';

// STYLE IMPORT
import useStyles from './styles';

const KonghqSection = () => {
  // DECLARE STYLE
  const classes = useStyles();

  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <> 
      <PageHeader title={'Konghq'} subtitle={'Konghq admin setup configuration.'} {...{isLoading}}></PageHeader>
      <Container>
        <Tabs value={selectedTab} onChange={(event, newValue) => setSelectedTab(newValue)}>
          <Tab label="Set Configure" />
          <Tab label="Add API Key"  />
        </Tabs>
        <Box>
          {selectedTab === 0 && <SetConfigForm {...{setLoading}}/>}
          {selectedTab === 1 && <AddAPIKeyForm {...{setLoading}}/>}
        </Box>
      </Container>
    </>
  )
}

export default KonghqSection;