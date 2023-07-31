import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import {
  deleteItemFromLocalStorage,
  getItemFromLocalStorage,
  setItemInLocalStorage
} from './sevices/localStorageService';
import {NEWUSERNAMEKEY, USERNAMEKEY} from './varibles';
import { useAppDispatch } from './hooks/redux';
import { userSlice } from './store/userSlice';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  const dispatch = useAppDispatch();
  const { addName } = userSlice.actions;

  useEffect(() => {

    const newName = getItemFromLocalStorage(NEWUSERNAMEKEY)

    if(!!newName){
      setItemInLocalStorage(USERNAMEKEY, getItemFromLocalStorage(NEWUSERNAMEKEY)!)
    }


    if (!!getItemFromLocalStorage(USERNAMEKEY)) {
      dispatch(addName(getItemFromLocalStorage(USERNAMEKEY)));
      deleteItemFromLocalStorage(NEWUSERNAMEKEY)
    }
  }, []);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
