import { useSelector } from 'react-redux';

export default function useItems() {
  return useSelector((state) => state.items);
}
