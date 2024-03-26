/* eslint-disable react/prop-types */
/**
 * 
 * Logo component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React  from 'react';
import {Box} from '@mui/material';

// ICON IMPORT
import LogoIcon from '../../../assets/img/aelf-logo.png';

// STYLE IMPORT
import useStyles from './styles';

const Logo = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.logoContainer}> 
      <img src={LogoIcon}  alt="Logo" height={25}/>
      <Box className={classes.logoName}>Admin panel</Box>
      <Box className={classes.mobileMenuIcon} onClick={props.toggleMenu}>
        {props.showMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </Box>
    </Box>
  )
}

export default Logo;