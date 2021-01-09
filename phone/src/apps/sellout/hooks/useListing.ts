import { useRecoilValue } from "recoil";
import { selloutState } from "./state";

import { Listings } from '../../../common/typings/listings';

export const useListing = () => {
  const listings = useRecoilValue(selloutState.listing);
  return listings;
};
