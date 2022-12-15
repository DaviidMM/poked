import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  inMemoryPersistence,
  browserLocalPersistence,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { createContext, useState } from 'react';
import SignInUpModal from '../../components/SignInUpModal';
import { auth } from '../../services/firebase';

export const SignInUpModalContext = createContext();

export const SignInUpModalProvider = ({ children }) => {
  const [showSignInUpModal, setShowSignInUpModal] = useState(false);

  const openSignInUpModal = () => setShowSignInUpModal(true);
  const closeSignInUpModal = () => setShowSignInUpModal(false);

  const handleLoginEmail = ({ email, password, remember }) => {
    auth.setPersistence(
      remember ? browserLocalPersistence : inMemoryPersistence
    );
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLoginGoogle = () => {
    console.log('handleLoginGoogle');
  };

  const handleLoginTwitter = () => {
    console.log('handleLoginTwitter');
  };

  const registerUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handlePasswordReset = (email) => {
    console.log('handlePasswordReset', email);
    return sendPasswordResetEmail(auth, email);
  };

  return (
    <SignInUpModalContext.Provider
      value={{
        openSignInUpModal,
        closeSignInUpModal,
        handleLoginEmail,
        handleLoginGoogle,
        handleLoginTwitter,
        registerUserWithEmail,
        handlePasswordReset,
      }}
    >
      <SignInUpModal
        closeSignInUpModal={closeSignInUpModal}
        isOpen={showSignInUpModal}
      />
      {children}
    </SignInUpModalContext.Provider>
  );
};
