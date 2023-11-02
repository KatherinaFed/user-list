import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../service/UsersService';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;

export default store;
