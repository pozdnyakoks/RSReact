import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mainUrl } from '../utils/mainUrl';
import { TData, TLimit, TItem } from '../utils/types';

export const listItemsApi = createApi({
  reducerPath: 'listItems',
  baseQuery: fetchBaseQuery({ baseUrl: mainUrl }),
  endpoints: (builder) => ({
    getItemsNav: builder.query<TData, TLimit>({
      query: ({ skip, limit, value }) =>
        value === ''
          ? `?skip=${skip}&limit=${limit}`
          : `/search?q=${value}&skip=${skip}&limit=${limit}`,
    }),
    getItem: builder.query<TItem, string>({
      query: (product) => `/${product}`,
    }),
  }),
});

export const { useGetItemQuery, useGetItemsNavQuery } = listItemsApi;
