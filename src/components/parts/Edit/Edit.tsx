import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './Edit.style.css';
import { useAppDispatch } from '../../../hooks/redux';
import { userSlice } from '../../../store/userSlice';
import { StoreServiceInstance } from '../../../sevices/storeService';
import {NEW_USER_NAME_KEY, USER_NAME_KEY} from '../../../constants/varibles';

interface EditModelsProps {
  handleOnClose: () => void;
}

const EditModals = ({ handleOnClose }:EditModelsProps) => {
  const [newName, setNewName] = useState<string>('');
  const dispatch = useAppDispatch();
  const { addName } = userSlice.actions;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    new Promise((resolve, reject) => {
      try {
        if (newName === '') {
          dispatch(addName('user'));
          StoreServiceInstance.setItem(USER_NAME_KEY, 'user');
          return resolve('user');
        }
        dispatch(addName(newName));
        StoreServiceInstance.setItem(USER_NAME_KEY, newName);
        resolve(newName);
      } catch (e) {
        reject(e);
      }
    })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        handleOnClose();
        StoreServiceInstance.deleteItem(NEW_USER_NAME_KEY)
      });
  };

  useEffect(() => {
    StoreServiceInstance.setItem(NEW_USER_NAME_KEY, newName);
  }, [newName]);



  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  return (
    <>
      <div className={'editModals'}>
        <form className={'editModals__form'} onSubmit={handleOnSubmit}>
          <div className={'editModals__form__input'}>
            <p>Имя:</p>
            <input
              type={'text'}
              value={newName}
              onChange={handleOnChange}
              placeholder={'Your new name'}
            />
          </div>
          <div className={'editModals__form__buttons'}>
            <button type={'submit'}>Сохранить</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditModals;
