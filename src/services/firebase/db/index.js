import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { app } from '../';
import battleItems from '../../../data/insert/battleItems.json';
import berries from '../../../data/insert/berries.json';
import medicines from '../../../data/insert/medicines.json';
import otherItems from '../../../data/insert/otherItems.json';
import pokeBalls from '../../../data/insert/pokeBalls.json';
import tms from '../../../data/insert/tms.json';
import treasures from '../../../data/insert/treasures.json';
import pokemon from '../../../data/insert/pokemon.json';

// Initialize Firestore
export const db = getFirestore(app);

export const createTradeOffer = async (tradeOffer) => {
  await addDoc(collection(db, 'tradeOffers'), {
    ...tradeOffer,
    createdAt: new Date(),
    postedBy: tradeOffer.postedBy,
  });
  return tradeOffer;
};

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

export const listenToTradeOffers = (callback) => {
  return onSnapshot(collection(db, 'tradeOffers'), (querySnapshot) => {
    const tradeOffers = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      tradeOffers.push({
        ...data,
        createdAt: data.createdAt.toDate().getTime(),
      });
    });
    callback(tradeOffers);
  });
};

export const storeUserInDb = async (user) => {
  const userRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    await updateDoc(userRef, {
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      lastLogin: new Date(),
    });
  } else {
    await setDoc(userRef, {
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      uid: user.uid,
      createdAt: new Date(),
      lastLogin: new Date(),
    });
  }
};

const camelCase = (str) => {
  return str
    .split(' ')
    .map((w, i) =>
      i === 0 && w.length > 1
        ? w.toLowerCase()
        : w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase()
    )
    .join('')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace('.', '');
};

export const setItems = async () => {
  let id = 0;
  const categories = {
    battleItems,
    berries,
    medicines,
    otherItems,
    pokeBalls,
    tms,
    treasures,
  };

  for (const [category, items] of Object.entries(categories)) {
    for (const item of items) {
      const insertData = {
        id,
        name: item.name,
        image: `/assets/items/${category}/${
          item.type || camelCase(item.name)
        }.png`,
        category,
      };
      console.log(category, item.name, id);
      await setDoc(doc(db, 'items', id.toString()), insertData);
      id++;
    }
  }

  console.log('Done');
};

export const setPokemon = async () => {
  console.log({ pokemon });
  for (const poke of pokemon) {
    await setDoc(doc(db, 'pokemon', poke.number), poke);
    console.log(poke.name);
  }
  console.log('Done');
};
