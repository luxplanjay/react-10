import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tasksReducer from './tasks/tasksReducer';
import authReducer from './auth/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
});

export const persistor = persistStore(store);
