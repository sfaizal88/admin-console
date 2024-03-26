/**
 * 
 * Common useHook component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import React from 'react';

// UTILS
import useNotification from '../utils/notification';

export function useCommonHook() {

    // DECLARE NOTIFICATION
    const setNotification = useNotification();

    const copyToClipboard = (value) => {
        navigator.clipboard.writeText(value);
        setNotification.success("Copied to clipboard");
    };

    return {
        copyToClipboard
    }
}