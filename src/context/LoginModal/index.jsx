import { createContext, useState } from 'react';
import LoginModal from '../../components/LoginModal';

export const LoginModalContext = createContext();

export const LoginModalProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  return (
    <LoginModalContext.Provider value={{ openLoginModal, closeLoginModal }}>
      <LoginModal closeLoginModal={closeLoginModal} isOpen={showLoginModal} />
      {children}
    </LoginModalContext.Provider>
  );
};
