import { useSelector } from 'react-redux';

export default function useItem(id) {
  const items = useSelector((state) => state.items.list);
  const item = items.find((item) => item.id === id);
  return item;
}
