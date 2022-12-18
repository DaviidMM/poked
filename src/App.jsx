import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import useLanguage from './hooks/useLanguage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/Auth';
import { SignInUpModalProvider } from './context/SignInUpModal';
import AppRouter from './router/AppRouter';

function App() {
  useLanguage();
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <BrowserRouter>
          <SignInUpModalProvider>
            <Layout>
              <AppRouter />
            </Layout>
          </SignInUpModalProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
