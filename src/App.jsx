import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import useLanguage from './hooks/useLanguage';
import HomePage from './pages/Home';
import SettingsPage from './pages/Settings';
import TypeCalculatorPage from './pages/TypeCalculator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
