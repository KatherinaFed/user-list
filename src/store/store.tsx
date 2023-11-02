import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../service/UsersService';

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
