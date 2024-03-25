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
        icon: <i class="fa-solid fa-house"></i>,
        link: PATH.HOME_PATH
    },
    {
        id: 'PRODUCT',
        label: 'Products',
        icon: <i class="fa-solid fa-key"></i>,
        link: PATH.PRODUCT_PATH,
    },
    {
        id: 'SETTINGS',
        label: 'Settings',
        icon: <i class="fas fa-cog"></i>,
        link: PATH.SETTINGS_PATH,
    },
];

export const settingsMenuItems = [
    {
        id: 'LOGOUT',
        label: 'Logout',
        icon: <i class="fa-solid fa-right-from-bracket"></i>,
        link: PATH.LOGOUT_PATH,
    },
];

export const helpMenuItems = [
    {
        id: 'HELP',
        label: 'Help',
        icon: <i class="fa-solid fa-suitcase-medical"></i>,
        link: PATH.HELP_PATH,
    },
];