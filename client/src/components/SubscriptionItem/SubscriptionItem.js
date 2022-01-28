import React from 'react';
import './SubscriptionItem.scss'

export default function SubscriptionItem({id, logo, name, price}) {
  return (
    <div className='sub-item'>
        <img className='sub-item__logo' src={logo} alt="company logo" />
        <span>{name}</span>
        <span>${price}</span>
    </div>
);
}
