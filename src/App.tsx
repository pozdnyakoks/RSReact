import React from 'react';
// import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
// import { SearchContext } from './contexts/searchContext';
// import { DataContext } from './contexts/dataContext';
// import { TData } from './utils/types';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  // const ls = localStorage.getItem('searchItem') || '';
  // const [searchValue, setSearchValue] = React.useState(ls);

  // const [data, setData] = useState<TData | null>(null);
  return (
    // <SearchContext.Provider value={{ searchValue, setSearchValue }}>
    // <DataContext.Provider value={{ data, setData }}>
    <Provider store={store}>
      <MainPage />
    </Provider>
    // </DataContext.Provider>
    // </SearchContext.Provider>
  );
}

export default App;
