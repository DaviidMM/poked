import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../';

export const db = getFirestore(app);

export const getPokemonList = async () => {
  const pokemonList = [];
  const querySnapshot = await getDocs(collection(db, 'pokemon'));
  querySnapshot.forEach((doc) => {
    pokemonList.push(doc.data());
  });
  return pokemonList;
};

export const getTradeOffers = async () => {
  const tradeOffers = [];
  const querySnapshot = await getDocs(collection(db, 'tradeOffers'));
  querySnapshot.forEach((doc) => {
    tradeOffers.push(doc.data());
  });
  return tradeOffers;
};
