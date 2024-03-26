/**
 * 
 * Common useNavigate component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import React from 'react';
import {useNavigate as useMuiNavigate} from 'react-router-dom';

export default function useNavigate() {
    // NAVBAR
    const navigate = useMuiNavigate();

    const gotoPage = (link) => {
        navigate(link);
    };

    return gotoPage
}