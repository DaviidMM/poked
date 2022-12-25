import {
  createTradeOffer,
  listenToTradeOffers,
} from '../../../services/firebase/db/index.js';
import {
  setCreatingOffer,
  setLoadedOffers,
  setLoadingOffers,
  setOffers,
} from './';

export const addTradeOffer = (tradeOffer) => {
  return async (dispatch) => {
    dispatch(setCreatingOffer());
    const newTradeOffer = await createTradeOffer(tradeOffer);
    dispatch(setLoadedOffers());
    return newTradeOffer;
  };
};

export const loadTradeOffers = () => {
  return async (dispatch) => {
    dispatch(setLoadingOffers());
    return listenToTradeOffers((tradeOffers) => {
      dispatch(setOffers(tradeOffers));
    });
  };
};
