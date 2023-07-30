import React from 'react';
import Icon from '../../../assets/loader';
import './PreLoader.style.scss';

const Preloader = () => {
  return (
    <>
      <div className='preloader'>
        <Icon />
      </div>
    </>
  );
};

export default Preloader;
