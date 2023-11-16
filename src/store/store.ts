import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './slices/searchValue.slice';
import listReducer from './slices/list.slice';

const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    list: listReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
