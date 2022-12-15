import { useContext } from 'react';
import { SignInUpModalContext } from '../context/SignInUpModal';

export const useSignInUpModal = () => {
  const {
    closeSignInUpModal,
    handleLoginEmail,
    handleLoginGoogle,
    handleLoginTwitter,
    openSignInUpModal,
    registerUserWithEmail,
  } = useContext(SignInUpModalContext);

  return {
    closeSignInUpModal,
    handleLoginEmail,
    handleLoginGoogle,
    handleLoginTwitter,
    openSignInUpModal,
    registerUserWithEmail,
  };
};
