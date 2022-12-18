import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  getIdToken,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getEnvVars } from '../../utils';

const env = getEnvVars();
const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID,
  VITE_FIREBASE_MEASUREMENT_ID,
} = env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
  measurementId: VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

const mapUserFromFirebase = (user) => {
  if (!user) {
    return null;
  }
  const { displayName, email, photoURL, uid } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

const authStatus = {
  authenticated: 'authenticated',
  unauthenticated: 'unauthenticated',
  loading: 'loading',
};

export const checkAuthState = (onChange) => {
  return onAuthStateChanged(auth, async (user) => {
    const normalizedUser = mapUserFromFirebase(user);
    if (normalizedUser) {
      return onChange({
        user: normalizedUser,
        status: authStatus.authenticated,
        token: await getIdToken(user),
      });
    }
    return onChange({
      user: null,
      status: authStatus.unauthenticated,
      token: null,
    });
  });
};

export const logout = () => signOut(auth);
