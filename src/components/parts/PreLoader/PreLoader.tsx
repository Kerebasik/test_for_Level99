import React from 'react';
import Icon from '../../../assets/loader';
import './PreLoader.style.css';

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
