import React from 'react';
import './Modal.scss'

export default function Modal({close, show, cancelSub, logo}) {
    const showHideClassName = show ? 'modal modal--display-block' : 'modal modal--display-none';
    
    return (
    <div className={showHideClassName}>
        <main className='modal__container'>
            <h1>Options</h1>
            <p>Do you wish to cancel this subscription? We can arrange it for you.</p>
            <div className='modal__bottom'>
                <img className='modal__logo' src={logo} alt="logo" />
                <div className='modal__buttons'>
                    <button className='modal__button modal__button--cancel' onClick={close} type='button' >No</button>
                    <button className='modal__button modal__button--delete' onClick={cancelSub} type='button' >Yes</button>
                </div>
            </div>
        </main>
    </div>
  );
}
