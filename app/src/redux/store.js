import { legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';

// Configura la persistencia de Redux
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Combina los reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crea el store de Redux
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const persistor = persistStore(store);

export { store, persistor };
