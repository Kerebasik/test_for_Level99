import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import './Edit.style.scss';
import { useAppDispatch } from '../../../hooks/redux';
import { userSlice } from '../../../store/userSlice';
import {
  setItemInLocalStorage,
} from '../../../sevices/localStorageService';
import { USERNAMEKEY } from '../../../varibles';

interface EditModelsProps {
  handleOnClose: () => void;
}

const EditModals: FC<EditModelsProps> = ({ handleOnClose }) => {
  const [newName, setNewName] = useState<string>('');
  const dispatch = useAppDispatch();
  const { addName } = userSlice.actions;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    new Promise((resolve, reject) => {
      try {
        if (newName === '') {
          dispatch(addName('user'));
          setItemInLocalStorage(USERNAMEKEY, 'user');
          return resolve('user');
        }
        dispatch(addName(newName));
        setItemInLocalStorage(USERNAMEKEY, newName);
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
      });
  };

  useEffect(() => {
    setItemInLocalStorage(USERNAMEKEY, newName);
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
