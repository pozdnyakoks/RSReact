import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type TSearchItem = {
  title: string;
  description: string;
  thumbnail: string;
  id: number;
};

export type TList = {
  data: TSearchItem[] | null;
  isError: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
};

export type TState = {
  data: null | TSearchItem[];
  value: string;
  isError: boolean;
  isLoading: boolean;
};

export type TLimit = {
  skip: number;
  limit: number;
  value: string;
};

export type TData = {
  limit: number;
  products: TSearchItem[];
  skip: number;
  total: number;
};

export type TItem = {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};
