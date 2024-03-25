/**
 * 
 * Help Page component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState, useEffect} from 'react';
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// COMPONENT IMPORT
import PageHeader from '../common/header/pageHeader';
import {Container} from '../../atom';

// VIDEO

// STYLE IMPORT
import useStyles from './styles';

const HelpPage = () => {
  const classes = useStyles();
  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState('panel1');
  
  useEffect(() => {
    setTimeout(setLoading(false), 1000);
  })
  return (
    <Container> 
      <PageHeader title='Help' subtitle="Quick assistance for all your queries and concerns. Get help now!" {...{isLoading}}></PageHeader>
      <Accordion expanded={expanded === 'panel1'} onChange={() => setExpanded('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={classes.title}
        >
          Guided Video Tutorial: Dashboard
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}

export default HelpPage;

/**
 * <video controls  className={classes.videoFrame}>
    <source src={video1} type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
*/