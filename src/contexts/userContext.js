/**
 * 
 * User context
 * @author - NA 
 * @date - 15th March, 2024
 * 
 */
// GENERIC IMPORT
import {createContext, useContext} from 'react';

// Define initial state
export const initialState = {
    user: {
      token: null,
      displayName: null,
      email: null
    }
};

// Define action types
export const ACTION_TYPE = {
    SET_USER: 'SET_USER',
    CLEAR_USER: 'CLEAR_USER'
}

// Define reducer function
export const reducer = (state, action) => {
    console.log("state: ", state);
    console.log("action: ", action);
    switch (action.type) {
      case ACTION_TYPE.SET_USER:
        return { ...state, user: action.payload };
      case ACTION_TYPE.CLEAR_USER:
        return { ...state, user: initialState.user };
      default:
        return state;
    }
};

  // Create context for user state and dispatch
export const UserContext = createContext();  

// Custom hook for using User context
export const useUser = () => useContext(UserContext);