import React from 'react';
import './RenewModal.scss'

export default function RenewModal({close, show, cancelSub, logo, renewDate}) {
    const showHideClassName = show ? 'modal modal--display-block' : 'modal modal--display-none';
    
    return (
    <div className={showHideClassName}>
        <main className='modal__container'>
            <h1>Options</h1>
            <p>Do you wish to renew this subscription? Scheduled renew date: {renewDate} </p>
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
