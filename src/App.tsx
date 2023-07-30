import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { getItemFromLocalStorage } from './sevices/localStorageService';
import { USERNAMEKEY } from './varibles';
import { useAppDispatch } from './hooks/redux';
import { userSlice } from './store/userSlice';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  const dispatch = useAppDispatch();
  const { addName } = userSlice.actions;

  useEffect(() => {
    const name = getItemFromLocalStorage(USERNAMEKEY);
    if (!!name) {
      dispatch(addName(name));
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
