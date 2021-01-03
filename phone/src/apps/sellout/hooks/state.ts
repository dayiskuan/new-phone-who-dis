import { atom } from "recoil";

export const selloutState = {
  listing: atom({
    key: "listing",
    default: [],
  }),
  listingModal: atom({
    key: 'listingModal',
    default: true
  })
};
