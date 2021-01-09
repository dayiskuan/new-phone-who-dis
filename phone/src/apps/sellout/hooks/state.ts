import { atom } from "recoil";

export const selloutState = {
  listing: atom({
    key: "listing",
    default: [],
  }),
  listingModal: atom({
    key: 'listingModal',
    default: false
  }),
  listingDetails: atom({
    key: 'listingDetails',
    default: null,
  }),
  itemModal: atom({
    key: 'itemModal',
    default: false
  })
};
