import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import useLanguage from './hooks/useLanguage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignInUpModalProvider } from './context/SignInUpModal';
import AppRouter from './router/AppRouter';
import { useEffect } from 'react';
import { getPokemonList } from './services/firebase/db/index.js';
import { setPokemonList } from './store/slices/pokemonList/index.js';
import { useDispatch } from 'react-redux';
import useCheckAuth from './hooks/useCheckAuth.jsx';

function App() {
  useLanguage();
  useCheckAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemonList().then((list) => dispatch(setPokemonList(list)));
  }, []);

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
