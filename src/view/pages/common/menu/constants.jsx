/**
 * 
 * Menu constants
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// ROUTER IMPORT
import React from 'react';
import * as PATH from '../../../routes/constants';
   
export const mainMenuItems = [
    {
        id: 'HOME',
        label: 'Overview',
        icon: <i className="fa-solid fa-house"></i>,
        link: PATH.HOME_PATH,
        disabled: false,
    },
    {
        id: 'PRODUCT',
        label: 'Products',
        icon: <i className="fa-solid fa-key"></i>,
        link: PATH.PRODUCT_PATH,
        disabled: false,
    },
    {
        id: 'GRAIN',
        label: 'Grain',
        icon: <i className="fa-solid fa-wheat-awn"></i>,
        link: PATH.SETTINGS_PATH,
        disabled: true,
    },
    {
        id: 'LOGS',
        label: 'Logs',
        icon: <i className="fa-solid fa-database"></i>,
        link: PATH.SETTINGS_PATH,
        disabled: true,
    },
    {
        id: 'USAGE',
        label: 'Usage',
        icon: <i className="fa-solid fa-handshake"></i>,
        link: PATH.SETTINGS_PATH,
        disabled: true,
    },
    {
        id: 'PERFORMANCE',
        label: 'Performance',
        icon: <i className="fa-solid fa-bolt"></i>,
        link: PATH.SETTINGS_PATH,
        disabled: true,
    },
    {
        id: 'SETTINGS',
        label: 'Settings',
        icon: <i className="fas fa-cog"></i>,
        link: PATH.SETTINGS_PATH,
        disabled: false,
    },
];

export const settingsMenuItems = [
    {
        id: 'LOGOUT',
        label: 'Logout',
        icon: <i className="fa-solid fa-right-from-bracket"></i>,
        link: PATH.LOGOUT_PATH,
    },
];

export const helpMenuItems = [
    {
        id: 'HELP',
        label: 'Help',
        icon: <i className="fa-solid fa-suitcase-medical"></i>,
        link: PATH.HELP_PATH,
    },
];