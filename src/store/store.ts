import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchValueReducer from './slices/searchValue.slice';
import listReducer from './slices/list.slice';
import modalModeReducer from './slices/modalMode.slice';
import { listItemsApi } from '../services/data';
// import { setupListeners } from '@reduxjs/toolkit/query';
import pageItemsReducer from './slices/pageItems.slice';
import { curPageSlice } from './slices/curPage.slice';
import { createWrapper } from 'next-redux-wrapper';

const store = () =>
  configureStore({
    reducer: {
      searchValue: searchValueReducer,
      list: listReducer,
      modalMode: modalModeReducer,
      pagesItems: pageItemsReducer,
      [curPageSlice.name]: curPageSlice.reducer,
      [listItemsApi.reducerPath]: listItemsApi.reducer,
    },
    devTools: true,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(listItemsApi.middleware),
  });

export default store;

export type RootStore = ReturnType<typeof store>;
export type RootState = ReturnType<RootStore['getState']>;

// export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

// setupListeners(store.dispatch);

export const wrapper = createWrapper(store);
