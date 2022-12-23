import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';
import SettingsPage from '../pages/Settings';
import TradePage from '../pages/Trade';
import TypeCalculatorPage from '../pages/TypeCalculator';
import LoadingPokeball from '../components/Loading/Pokeball';
import authStatuses from '../store/slices/auth/status';

export default function AppRouter() {
  const auth = useAuth();

  return auth.status === authStatuses.loading ? (
    <LoadingPokeball />
  ) : (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/type-calculator" element={<TypeCalculatorPage />} />

      {auth.status === authStatuses.authenticated && (
        <>
          <Route path="/trade" element={<TradePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </>
      )}

      {auth.status === authStatuses.unauthenticated && (
        <>
          <Route path="/trade" element={<Navigate to="/" />} />
          <Route path="/settings" element={<Navigate to="/" />} />
        </>
      )}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
