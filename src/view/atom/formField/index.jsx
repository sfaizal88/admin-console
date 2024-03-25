/* eslint-disable react/prop-types */
/**
 * 
 * Form field section component
 * @author - NA 
 * @date - 22nd March, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import React, {useState} from 'react';
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

// HOOKS
import {useCommonHook} from '../../../hooks/useCommonHook';

const FromField = (props) => {
    // DECLARE STYLE
    const classes = useStyles();

    // DECLARE STATE
    const [isMasked, setMasked] = useState(true);

    // LOCAL VARIABLE PROPS
    const {
        label, 
        value,
        canCopy,
        mask,
    } = props;
    const maskedData = "*".repeat(props.value.length);
    const {copyToClipboard} = useCommonHook();

    return (
        <Box className={classes.fromFieldContainer}>
            <Box className={classes.label}>{label}</Box>
            <Box className={classes.value}>
                <Box flex={1}>{mask && isMasked ?  maskedData :  value}</Box>
                <Box className={classes.control}>{isMasked ? <i className={clsx(classes.eyeIcon, "far fa-eye-slash")} onClick={() => setMasked(false)}></i> : <i className={clsx(classes.eyeIcon, "far fa-eye")} onClick={() => setMasked(true)}></i>}</Box>
                <Box className={classes.control}>{canCopy && <i className={clsx(classes.copyIcon, "far fa-copy")} onClick={() => copyToClipboard(value)}></i>}</Box>
            </Box>
        </Box>
    )
};
export default FromField;