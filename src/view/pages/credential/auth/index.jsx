/**
 * 
 * Auth component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

// COMPONENT IMPORT
import {DarkLoader} from '../../../atom';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

// HOOK
import useRedirect from '../../../../hooks/useRedirect'; 

const Auth = () => {
    // LOCAL STATE
    const [isLoading, setLoading] = useState(false);

    // NAVBAR
    const location = useLocation();
    const {gotoPage} = useRedirect();
    const currentPath = location.pathname;
    console.log("currentPath: ", currentPath);
    
    // LOCAL VARIABLE
    const nonTokenPath = [PATH.LOGIN_PATH];
    console.log("nonTokenPath: ", nonTokenPath);
    
    const checkAuth = () => {
        setLoading(true);
        const token = localStorage.getItem('token');
        console.log("token: ", token);
        // IF USER HAVE TOKEN AND TRY TO VISIT LOGIN SCREEN
        if (token) {
            console.log("Token present");
            if (nonTokenPath.includes(currentPath)) {
                console.log("You clicked login url");
                gotoPage(PATH.HOME_PATH);
            }
        } else {
            console.log("Token not there");
            // IF USER DONT HAVE TOKEN AND TRY TO VISIT AFTER LOGIN SCREEN
            if (!nonTokenPath.includes(currentPath)) {
                console.log("You clicked other url when token not ther");
                gotoPage(PATH.LOGIN_PATH);
            }
        }
        setLoading(false);
    }
    useEffect(() => checkAuth(), []);
    if (isLoading) return <DarkLoader/>;
}

export default Auth;