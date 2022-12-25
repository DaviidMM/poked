import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { storeUserInDb } from '../services/firebase/db/index.js';
import { auth, mapUserFromFirebase } from '../services/firebase/index.js';
import { logout, setUser } from '../store/slices/auth/index.js';

export default function useCheckAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch(logout());
      const normalizedUser = mapUserFromFirebase(user);
      await storeUserInDb(normalizedUser);
      const token = await user.getIdToken();
      return dispatch(setUser({ user: normalizedUser, token }));
    });
  }, []);
}
