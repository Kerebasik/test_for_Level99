import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import {
  StoreServiceInstance
} from './sevices/storeService';
import {NEW_USER_NAME_KEY, USER_NAME_KEY} from './constants/varibles';
import { useAppDispatch } from './hooks/redux';
import { userSlice } from './store/userSlice';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  const dispatch = useAppDispatch();
  const { addName } = userSlice.actions;

  useEffect(() => {

    const newName = StoreServiceInstance.getItem(NEW_USER_NAME_KEY)

    if(!!newName){
      StoreServiceInstance.setItem(USER_NAME_KEY, StoreServiceInstance.getItem(NEW_USER_NAME_KEY)!)
    }


    if (!!StoreServiceInstance.getItem(USER_NAME_KEY)) {
      dispatch(addName(StoreServiceInstance.getItem(USER_NAME_KEY)));
      StoreServiceInstance.deleteItem(NEW_USER_NAME_KEY)
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
