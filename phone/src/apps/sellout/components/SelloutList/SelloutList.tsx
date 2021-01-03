import React from "react";
import { List } from "../../../../ui/components/List";
import { SelloutItem } from "./SelloutItem";

export const SelloutList = ({ listings }) => {
  return (
    <List style={{ backgroundColor: '#F6F6F6' }}>
      {listings.map((listing) => (
        <SelloutItem key={listing.id} {...listing} />
      ))}
    </List>
  );
};
