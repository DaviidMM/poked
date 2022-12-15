import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import useLanguage from './hooks/useLanguage';
import HomePage from './pages/Home';
import SettingsPage from './pages/Settings';
import TypeCalculatorPage from './pages/TypeCalculator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TradePage from './pages/Trade';
import { AuthProvider } from './context/Auth';
import { SignInUpModalProvider } from './context/SignInUpModal';

function App() {
  useLanguage();
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <BrowserRouter>
          <SignInUpModalProvider>
            <Layout>
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route
                  path="/type-calculator"
                  element={<TypeCalculatorPage />}
                />
                <Route path="/trade" element={<TradePage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </Layout>
          </SignInUpModalProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
