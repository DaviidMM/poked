import { getItems } from '../../../services/firebase/db';
import { setItems, setItemsError, setItemsLoading } from './';

export const loadItems = () => {
  return async (dispatch) => {
    dispatch(setItemsLoading());
    try {
      const items = await getItems();
      dispatch(setItems(items));
    } catch (error) {
      dispatch(setItemsError(error));
    }
  };
};
