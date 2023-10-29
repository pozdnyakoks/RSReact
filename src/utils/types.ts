export type TSearchItem = {
  name: string;
  birth_year: string;
  gender: string;
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
