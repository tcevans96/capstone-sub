import React from 'react';
import SubscriptionItem from '../SubscriptionItem/SubscriptionItem';
import './SubscriptionList.scss'

export default function SubscriptionList({subs}) {
  return (
    <div className='list'>
        {subs.map(sub => {
            return <SubscriptionItem key={sub.id} logo={sub.logo} name={sub.name} category={sub.category} price={sub.price}/>
        })}
    </div>
  );
}
