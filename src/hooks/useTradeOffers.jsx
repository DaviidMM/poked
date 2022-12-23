import { useSelector } from 'react-redux';

export default function useTradeOffers() {
  const tradeOffers = useSelector((state) => state.tradeOffers);
  return tradeOffers;
}
