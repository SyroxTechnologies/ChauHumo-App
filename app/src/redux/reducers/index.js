import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducer';
// Importa otros reducers que tengas en tu aplicación

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['isUserLoggedIn'], // Lista de propiedades del estado a persistir
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  // Agrega aquí otros reducers
});

export default rootReducer;
