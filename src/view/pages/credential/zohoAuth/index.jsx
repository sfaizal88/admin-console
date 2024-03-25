/**
 * 
 * Auth component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

// COMPONENT IMPORT
import {DarkLoader} from '../../../atom';

// ROUTER IMPORT
import * as PATH from '../../../routes/constants';

const ZohoAuth = () => {
    // LOCAL STATE
    const [isLoading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // After successful authentication, Zoho will redirect back to your website with an authorization code
    // You need to handle this code and exchange it for an access token
    const handleAuthorizationCode = () => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.hash.slice(1));
        const code = '1000.87dffd2f88f64a7ec2578121b23917ac.7a4d0e7928fcd90e61538232aabbbe78'; // params.get('code');
        console.log("Code: ",code);
        console.log("url: ", url);
        console.log("params: ", params);
        if (code) {
        // Make a POST request to exchange the code for an access token
        fetch('https://accounts.zoho.com/oauth/v2/token', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
            code: code,
            client_id: '1000.EL550QWO3I79EANZ409YGYIOVT838M',
            client_secret: '1000.EL550QWO3I79EANZ409YGYIOVT838M',
            redirect_uri: 'http://localhost:3000/#/dashboard',
            grant_type: 'authorization_code'
            })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response, save the access token, etc.
            console.log('Access Token:', data.access_token);
            setIsAuthenticated(true);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        }
    };

    // Call the function to exchange authorization code for access token
    // This should be called when the component mounts
    useEffect(() => {
        handleAuthorizationCode();
    }, []);

    if (isLoading) return <DarkLoader/>;

    return (
        <>
            {isAuthenticated ? 'Success' : 'Not success'}
        </>
    )
}

export default ZohoAuth;