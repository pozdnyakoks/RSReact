import React from 'react';
import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import { SearchContext } from './contexts/searchContext';
import { DataContext } from './contexts/dataContext';
import { TData } from './utils/types';

function App() {
  const ls = localStorage.getItem('searchItem') || '';
  const [searchValue, setSearchValue] = React.useState(ls);

  const [data, setData] = useState<TData | null>(null);
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <DataContext.Provider value={{ data, setData }}>
        <MainPage />
      </DataContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
