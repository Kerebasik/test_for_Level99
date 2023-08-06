import { useEffect, useState } from 'react';
import './Profile.style.scss';
import userImg from '../../../assets/Ethereum-Logo-PNG-Image.png';
import EditModals from '../../parts/Edit/Edit';
import { StoreServiceInstance } from '../../../sevices/storeService';
import { USER_NAME_KEY } from '../../../constants/varibles';

const Profile = () => {
  const [userName, setUserName] = useState<string>();
  const name = StoreServiceInstance.getItem(USER_NAME_KEY);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    setUserName(name!);
  }, [name]);

  const handleEditOnClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className={'profile'}>
        <div className={'profile__content'}>
          <div className={'profile__content__img'}>
            <img src={userImg} alt={'userImg'} />
          </div>
          <div className={'profile__content__data'}>
            <h1>{userName}</h1>
            <button onClick={handleEditOnClick}>Редактировать</button>
          </div>
        </div>
      </div>
      <div>{openModal && <EditModals handleOnClose={handleEditOnClick} />}</div>
    </>
  );
};

export {Profile};
