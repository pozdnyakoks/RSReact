import { createContext } from 'react';
import { IDataContext } from '../utils/interfaces';

export const DataContext = createContext<IDataContext>({
  data: null,
  setData: () => null,
});
