import React from "react";
import { AppWrapper } from "../../../ui/components/AppWrapper";
import { AppContent } from "../../../ui/components/AppContent";
import { SelloutTitle } from "./SelloutTitle";
import { SelloutListContainer } from "./SelloutList/SelloutListContainer";

import "./Sellout.css";
import {ListingForm} from "./form/ListingForm";

export const SelloutApp = () => {
  return (
    <AppWrapper id="sellout-app">
      <SelloutTitle />
      <AppContent>
        <ListingForm />
        <SelloutListContainer />
      </AppContent>
    </AppWrapper>
  );
};
