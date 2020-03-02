import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';


// ? Initial State
const initialState = {
  users: [
    {
      id: 1,
      username: 'kanaan', 
      email: 'kanaansci@gmail.com',
      // * we can send the icons from our state as well
      // deleteAction: <FontAwesomeIcon icon={faTrashAlt} />,
      // editAction: <FontAwesomeIcon icon={faUserEdit} />,
    },
    {
      id: 2,
      username: 'kanaan', 
      email: 'kanaansci@gmail.com',
      // * we can send the icons from our state as well
      // deleteAction: <FontAwesomeIcon icon={faTrashAlt} />,
      // editAction: <FontAwesomeIcon icon={faUserEdit} />,
    },
    {
      id: 3,
      username: 'kanaan', 
      email: 'kanaansci@gmail.com',
      // * we can send the icons from our state as well
      // deleteAction: <FontAwesomeIcon icon={faTrashAlt} />,
      // editAction: <FontAwesomeIcon icon={faUserEdit} />,
    },
    {
      id: 4,
      username: 'kanaan', 
      email: 'kanaansci@gmail.com',
      // * we can send the icons from our state as well
      // deleteAction: <FontAwesomeIcon icon={faTrashAlt} />,
      // editAction: <FontAwesomeIcon icon={faUserEdit} />,
    },
    {
      id: 5,
      username: 'kanaan', 
      email: 'kanaansci@gmail.com',
      // * we can send the icons from our state as well
      // deleteAction: <FontAwesomeIcon icon={faTrashAlt} />,
      // editAction: <FontAwesomeIcon icon={faUserEdit} />,
    }
  ],
}

// TODO: Create context
const GlobalContext = createContext(initialState);

// ? Provider component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    });
  }

  const deleteUser = (userId) => {
    dispatch({
      type: 'DELETE_USER',
      payload: userId
    });
  }

  return (
  <GlobalContext.Provider value={{
    users: state.users,
    addUser,
    deleteUser,
  }}>
    {children}
  </GlobalContext.Provider>);
}

export {
  GlobalContext,
  GlobalProvider,
}