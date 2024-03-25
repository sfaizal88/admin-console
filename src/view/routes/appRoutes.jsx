/**
 * 
 * App Routes
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';


// ROUTER IMPORT
import * as PATH from './constants';

// COMMON PAGE IMPORT 
import Menu from '../pages/common/menu';
import Footer from '../pages/common/footer';
import NoPage from '../pages/error/noPage';
import InternalHeader from '../pages/common/header/internalHeader';

// PAGES 
import DashboardPage from '../pages/dashboard';
import ProductPage from '../pages/product';
import SettingsPage from '../pages/settings';
import ProductDetailsPage from '../pages/product/components/productDetails';
import HelpPage from '../pages/help';
import IdleTimer from '../pages/credential/idleTimer';
import Auth from '../pages/credential/auth';

// STYLE IMPORT
import useStyles from './styles';

const AppRoutes = () => {
    // STYLE DECLARE
    const classes = useStyles();
    // RENDER HTML
    return (
        <Box className={classes.app}>
            <Box className={classes.layout}>
                <Menu/>
                <Box className={classes.bodyContent}>
                    <InternalHeader/>
                    <Box className={classes.routerContainer}>
                        <Routes>
                            <Route path={PATH.HOME_PATH} element={<DashboardPage />}/>
                            <Route path={PATH.PRODUCT_PATH} element={<ProductPage />}/>
                            <Route path={PATH.PRODUCT_DETAILS_PATH} element={<ProductDetailsPage />}/>
                            <Route path={PATH.SETTINGS_PATH} element={<SettingsPage />}/>
                            <Route path={PATH.HELP_PATH} element={<HelpPage />}/>
                            <Route path="*" element={<NoPage />} />
                        </Routes>
                    </Box>
                    <Footer/>
                </Box>
            </Box>
            <IdleTimer/>
            <Auth/>
        </Box>
    );
};

export default AppRoutes;