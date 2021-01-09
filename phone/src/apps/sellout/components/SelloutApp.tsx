import React from 'react';
import { AppWrapper } from '../../../ui/components/AppWrapper';
import { AppContent } from '../../../ui/components/AppContent';
import { SelloutTitle } from './SelloutTitle';
import { SelloutListContainer } from './SelloutList/SelloutListContainer';

import './Sellout.css';
import { ListingForm } from './form/ListingForm';
import ItemModal from './modal/ItemModal';

export const SelloutApp = () => {
  return (
    <AppWrapper id='sellout-app'>
      <AppContent>
        <ListingForm />
        <SelloutListContainer />
      </AppContent>
    </AppWrapper>
  );
};
