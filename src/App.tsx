import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search/Search';
import List from './components/List/List';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton/ErrorButton';
import { ChooseCount } from './components/ChooseCount/ChooseCount';
import { Outlet, useSearchParams } from 'react-router-dom';
import { TData } from './utils/types';
import { PaginationButton } from './components/PaginationButton/PaginationButton';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<TData | null>(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageItems, setPageItems] = useState('15');
  const [currentPage, setCurrentPage] = useState(1);

  const onOptionChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log(ev.target.value);
    setPageItems(ev.target.value);
  };

  function getData(value: string): void {
    setIsLoading(true);
    console.log(value);
    const url: string =
      value === ''
        ? `https://dummyjson.com/products?skip=${
            (currentPage - 1) * Number(pageItems)
          }&limit=${pageItems}`
        : `https://dummyjson.com/products/search?q=${value}&?skip=${
            (currentPage - 1) * Number(pageItems)
          }&limit=${pageItems}`;
    console.log(url);
    fetch(url)
      .then((res) => {
        if (res.status === 404) setError(true);
        return res.json();
      })
      .then((data: TData) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
      });
  }

  useEffect((): void => {
    const lsValue: string | null = localStorage.getItem('searchItem');
    if (lsValue !== null) {
      setValue(lsValue);
      getData(lsValue);
    } else {
      getData(value);
    }
    console.log(searchParams);
    setSearchParams({ page: String(currentPage) });
  }, [pageItems, currentPage]);

  function changeState(newValue: string): void {
    setValue(newValue);
  }

  function errorMaker(): void {
    try {
      throw new Error('oops');
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className="container">
      <Search
        value={value}
        setState={(val) => changeState(val)}
        getData={() => getData(value)}
        setCurrentPage={setCurrentPage}
      />
      <ChooseCount
        value={pageItems}
        setValue={onOptionChange}
        setPage={setCurrentPage}
      />

      <ErrorBoundary>
        <ErrorButton onClick={errorMaker} />
        <List
          data={data !== null ? data.products : null}
          isError={error}
          isLoading={isLoading}
        />
        {data !== null && (
          <div className="pagination-btns">
            {Array(Math.ceil(data.total / data.limit))
              .fill(1)
              .map((el, index) => (
                <PaginationButton
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  key={index}
                  value={String(index + 1)}
                  setCurrentPage={setCurrentPage}
                />
              ))}
          </div>
        )}
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

export default App;
