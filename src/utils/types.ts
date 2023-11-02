export type TSearchItem = {
  title: string;
  description: string;
  thumbnail: string;
  id: number;
};

export type TList = {
  data: TSearchItem[] | null;
  isError: boolean;
  isLoading: boolean;
};

export type TState = {
  data: null | TSearchItem[];
  value: string;
  isError: boolean;
  isLoading: boolean;
};

export type TData = {
  limit: number;
  products: TSearchItem[];
  skip: number;
  total: number;
};
