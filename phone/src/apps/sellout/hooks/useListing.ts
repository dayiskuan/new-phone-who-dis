import { useRecoilValue } from 'recoil';
import { selloutState } from './state';

import { ListingProps } from '../../../common/typings/listings';

interface ListingHook {
  listings: ListingProps[];
}

export const useListing = (): ListingHook => {
  const listings = useRecoilValue(selloutState.listing);
  return { listings };
};
