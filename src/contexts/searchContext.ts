import { createContext } from 'react';
import { ISearchContext } from '../utils/interfaces';

export const SearchContext = createContext<ISearchContext>({
  searchValue: '',
  setSearchValue: () => null,
});
