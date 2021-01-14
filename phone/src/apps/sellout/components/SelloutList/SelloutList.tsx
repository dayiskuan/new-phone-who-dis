import React from 'react';
import { List } from '../../../../ui/components/List';
import SelloutSearch from '../search/SelloutSearch';
import { SelloutItem } from './SelloutItem';

export const SelloutList = ({ listings }) => {
  return (
    <div>
      <SelloutSearch />
      <List style={{ backgroundColor: '#F6F6F6' }}>
        {listings?.map(listing => (
          <SelloutItem key={listing.id} {...listing} />
        ))}
      </List>
    </div>
  );
};
