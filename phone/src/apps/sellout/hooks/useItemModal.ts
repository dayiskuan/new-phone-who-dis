import { useRecoilState } from 'recoil';
import { selloutState } from './state';

export const useItemModal = () => {
  const [itemModal, setItemModal] = useRecoilState(selloutState.itemModal);
  return { itemModal, setItemModal};
}