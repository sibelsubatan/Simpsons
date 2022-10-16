import AsyncStorage from '@react-native-async-storage/async-storage';
import { simpsonsReducer } from '@redux/reqres/reducers';
import { persistCombineReducers } from 'redux-persist';

const reducers = {
  simpsons: simpsonsReducer,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: undefined,
  whitelist: ['simpsons'],
};

// Setup Reducers
export const persistedRootReducer = persistCombineReducers(persistConfig, reducers);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
