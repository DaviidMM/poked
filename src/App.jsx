import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import useLanguage from './hooks/useLanguage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignInUpModalProvider } from './context/SignInUpModal';
import AppRouter from './router/AppRouter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useCheckAuth from './hooks/useCheckAuth';
import { loadPokemonList } from './store/slices/pokemon/thunks';
import useAuth from './hooks/useAuth';
import { loadItems } from './store/slices/items/thunks';
import { loadTradeOffers } from './store/slices/tradeOffers/thunks';

function App() {
  useLanguage();
  useCheckAuth();
  const auth = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user) {
      dispatch(loadTradeOffers())
        .then(() => dispatch(loadItems()))
        .then(() => dispatch(loadPokemonList()));
    }
  }, [auth.user]);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <SignInUpModalProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </SignInUpModalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
