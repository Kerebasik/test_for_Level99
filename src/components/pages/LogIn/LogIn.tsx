import './LogIn.style.css';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {StoreServiceInstance} from '../../../sevices/storeService';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { userSlice } from '../../../store/userSlice';
import { USER_NAME_KEY } from '../../../constants/varibles';
import { useAuth } from '../../../hooks/useAuth';
import {PrivateRoutes} from "../../../constants/routes";

const LogIn = () => {
  const [name, setName] = useState<string>('');
  const dispatch = useAppDispatch();
  const { auth, login } = useAuth();
  const { addName } = userSlice.actions;
  const navigate = useNavigate();
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    new Promise((resolve, reject) => {
      try {
        if (name === '') {
          StoreServiceInstance.setItem(USER_NAME_KEY, 'user');
          dispatch(addName('user'));
          return resolve('user');
        }
        StoreServiceInstance.setItem(USER_NAME_KEY, name);
        dispatch(addName(name));
        login();
        resolve(name);
      } catch (e) {
        reject(e);
      }
    })
      .then(() => {
        navigate(PrivateRoutes.ROOT);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setName('');
      });
  };

  useEffect(() => {
    return () => setName('');
  }, []);

  useEffect(() => {
    if (auth) {
      navigate(PrivateRoutes.ROOT);
    }
  });

  const handleNameOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className={'login'}>
        <form className={'login__form'} onSubmit={handleOnSubmit}>
          <div className={'login__form__input'}>
            <p>Имя:</p>
            <input
              type={'text'}
              value={name}
              onChange={handleNameOnChange}
              placeholder={'Ваше имя'}
            />
          </div>
          <div className={'login__form__button'}>
            <button type={'submit'}>Сохранить</button>
          </div>
        </form>
      </div>
    </>
  );
};

export {LogIn};
