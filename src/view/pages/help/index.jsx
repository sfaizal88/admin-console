/**
 * 
 * Help Page component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState, useEffect} from 'react';
import {Accordion, AccordionSummary, AccordionDetails, List, ListItem} from '@mui/material';
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
          In Chrome, you can adjust settings to allow mixed content by following these steps:
        </AccordionSummary>
        <AccordionDetails>
        <List>
          <ListItem><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Open Chrome and go to the webpage where mixed content is being blocked.</ListItem>
          <ListItem><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Click on the lock icon 🔒 next to the website's address in the address bar. This will open the Site Information menu.</ListItem>
          <ListItem><i className="fa-solid fa-check"></i>&nbsp;&nbsp;In the Site Information menu, find the "Site settings" option and click on it.</ListItem>
          <ListItem><i className="fa-solid fa-check"></i>&nbsp;&nbsp;This will open the Site settings page. Scroll down to find the "Insecure content" section.</ListItem>
          <ListItem><i className="fa-solid fa-check"></i>&nbsp;&nbsp;In the "Insecure content" section, you'll see an option labeled "Allow". Toggle this option to enable it. This will allow mixed content to be loaded on the current website.</ListItem>
          <ListItem><i className="fa-solid fa-check"></i>&nbsp;&nbsp;After toggling the "Allow" option, you may need to refresh the page for the changes to take effect.</ListItem>
        </List>
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