/**
 * 
 * Entry Routes
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import React, { Route, Routes, BrowserRouter } from 'react-router-dom';

// PAGE 
import LoginPage from '../pages/credential/login';

// ROUTER IMPORT
import AppRoutes from './appRoutes';
import * as PATH from './constants';

// ENTRY ROUTER VARIABLE DECLARE
const EntryRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATH.LOGIN_PATH} element={<LoginPage />}/>
      <Route path={PATH.OTHER_PATH} element={<AppRoutes />}/>
    </Routes>
  </BrowserRouter>
);

// EXPORT COMPONENT
export default EntryRoutes;
