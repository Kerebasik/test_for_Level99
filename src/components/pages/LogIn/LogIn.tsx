import './LogIn.style.scss';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { setItemInLocalStorage } from '../../../sevices/localStorageService';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { userSlice } from '../../../store/userSlice';
import { USERNAMEKEY } from '../../../varibles';
import { useAuth } from '../../../hooks/useAuth';

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
          setItemInLocalStorage(USERNAMEKEY, 'user');
          dispatch(addName('user'));
          return resolve('user');
        }
        setItemInLocalStorage(USERNAMEKEY, name);
        dispatch(addName(name));
        login();
        resolve(name);
      } catch (e) {
        reject(e);
      }
    })
      .then(() => {
        navigate('/');
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
      navigate('/');
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

export default LogIn;
