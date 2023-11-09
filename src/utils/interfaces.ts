import { TData } from './types';

export interface ISearchContext {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDataContext {
  data: TData | null;
  setData: React.Dispatch<React.SetStateAction<TData | null>>;
}
