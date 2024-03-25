/**
 * 
 * Logout useHook component
 * @author - NA 
 * @date - 13th March, 2024
 * 
 */
// GENERIC IMPORT
import {useNavigate} from 'react-router-dom';

// UTILS
import * as PATH from '../../../routes/constants';

// CONTEXT
import { useUser, ACTION_TYPE } from '../../../../contexts/userContext'; 

export function useLogoutHook() {

  // NAVBAR
  const navigate = useNavigate();
  const { dispatch } = useUser();

  const onLogout = () => {
    dispatch({ type: ACTION_TYPE.CLEAR_USER, payload: {} });
    localStorage.clear();
    navigate(PATH.LOGIN_PATH);
  };

  return {
    onLogout
  }
}