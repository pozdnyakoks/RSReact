import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './slices/searchValue.slice';
import listReducer from './slices/list.slice';
import modalModeReducer from './slices/modalMode.slice';
import { listItemsApi } from '../services/data';
import { setupListeners } from '@reduxjs/toolkit/query';
import pageItemsReducer from './slices/pageItems.slice';
import curPageReducer from './slices/curPage.slice';

const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    list: listReducer,
    modalMode: modalModeReducer,
    pagesItems: pageItemsReducer,
    curPage: curPageReducer,
    [listItemsApi.reducerPath]: listItemsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listItemsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
