import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

export default function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
