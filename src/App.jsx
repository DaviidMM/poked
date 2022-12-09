import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import useLanguage from './hooks/useLanguage';
import HomePage from './pages/Home';
import SettingsPage from './pages/Settings';
import TypeCalculatorPage from './pages/TypeCalculator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TradePage from './pages/Trade';
import { LoginModalProvider } from './context/LoginModal';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: (
      <Layout>
        <div>Oh no!</div>
      </Layout>
    ),
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'type-calculator',
        element: <TypeCalculatorPage />,
      },
      {
        path: 'trade',
        element: <TradePage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

function App() {
  useLanguage();
  return (
    <>
      <ToastContainer />
      <LoginModalProvider>
        <RouterProvider router={router} />;
      </LoginModalProvider>
    </>
  );
}

export default App;
