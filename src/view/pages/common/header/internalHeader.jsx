
/**
 * 
 * Internal Header component after login
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState} from 'react';
import {Chip, Box} from '@mui/material';
import moment from 'moment';

// GENERIC COMPONENT
import Logout from '../../credential/logout';

// CONTEXT
import {useUser} from '../../../../contexts/userContext';

// IMAGE
import userImage from '../../../../assets/img/user.png';

// STYLE IMPORT
import useStyles from './styles';

const Header = () => {
    // DECLARE STYLE
    const classes = useStyles();

    // STATE VARIABLE
    const [isLogoutOpen, setLogoutOpen] = useState(false);
    const { state: userState } = useUser();
    console.log('Header: ', state);

    // LOCAL VARIABLE
    const today = moment();

    return (
        <header className={classes.internalHeader}>
            <Box className={classes.user}><img src={userImage} width={24}/>Welcome, {userState.user.displayName}</Box>
            <Box className={classes.logout} onClick={() => setLogoutOpen(true)}><i class="fa-solid fa-right-from-bracket"></i> Logout</Box>
            {isLogoutOpen && <Logout onClose={() => setLogoutOpen(false)}/>}
        </header>
    )
};
export default Header;