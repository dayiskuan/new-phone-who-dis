import { useRecoilState } from 'recoil';
import { selloutState } from './state';

export const useListingDetails = () => {
  const [details, setDetails] = useRecoilState(selloutState.listingDetails);
  return { details, setDetails };
};
