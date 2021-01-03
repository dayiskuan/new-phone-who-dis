import { useRecoilState } from "recoil";
import {selloutState} from "./state";

export const useListingModal = () => {
	const [ modal, setModal ] = useRecoilState(selloutState.listingModal);
	return { modal, setModal }
}