import React from 'react';

const ModalShroud = ({ children, closeModal, isModalOpen }) => (
  <div className={`modal-shroud ${isModalOpen ? 'show' : ''}`}>
    <div onClick={closeModal} className='modal-close-btn'>
      &times;
    </div>
    {children}
  </div>
);

export default ModalShroud;
