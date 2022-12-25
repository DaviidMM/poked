import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from 'firebase/firestore';
import { app } from '../';

export const db = getFirestore(app);

export const getItems = async () => {
  const items = [];
  const querySnapshot = await getDocs(collection(db, 'items'));
  querySnapshot.forEach((doc) => items.push(doc.data()));
  return items.sort((a, b) => a.id - b.id);
};

export const getPokemonList = async () => {
  const pokemonList = [];
  const querySnapshot = await getDocs(
    query(collection(db, 'pokemon'), orderBy('name'))
  );
  querySnapshot.forEach((doc) => pokemonList.push(doc.data()));
  return pokemonList;
};

export const getTradeOffers = async () => {
  const tradeOffers = [];
  const querySnapshot = await getDocs(collection(db, 'tradeOffers'));
  querySnapshot.forEach((doc) => tradeOffers.push(doc.data()));
  return tradeOffers;
};

export const createTradeOffer = async (tradeOffer) => {
  const docRef = await addDoc(collection(db, 'tradeOffers'), tradeOffer);
  return docRef.id;
};
