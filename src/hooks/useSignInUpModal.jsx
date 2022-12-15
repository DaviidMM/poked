import { useContext } from 'react';
import { SignInUpModalContext } from '../context/SignInUpModal';

export const useSignInUpModal = () => {
  return useContext(SignInUpModalContext);
};
