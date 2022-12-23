import { getTradeOffers } from '../../../services/firebase/db/index.js';
import { setLoadingOffers, setOffers } from './';

export const loadTradeOffers = () => {
  return async (dispatch) => {
    dispatch(setLoadingOffers());
    const tradeOffers = await getTradeOffers();
    dispatch(setOffers(tradeOffers));
  };
};
