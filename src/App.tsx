import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search/Search';
import List from './components/List/List';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton/ErrorButton';
import { ChooseCount } from './components/ChooseCount/ChooseCount';
import { Outlet, useSearchParams, useNavigate } from 'react-router-dom';
import { TData } from './utils/types';
import errorMaker from './utils/ErrorMaker';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<TData | null>(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageItems, setPageItems] = useState('15');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  function getData(value: string): void {
    setIsLoading(true);

    const url: string =
      value === ''
        ? `https://dummyjson.com/products?skip=${
            (currentPage - 1) * Number(pageItems)
          }&limit=${pageItems}`
        : `https://dummyjson.com/products/search?q=${value}&?skip=${
            (currentPage - 1) * Number(pageItems)
          }&limit=${pageItems}`;
    fetch(url)
      .then((res) => {
        if (res.status === 404) setError(true);
        return res.json();
      })
      .then((data: TData) => {
        setData(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    navigate('/search');
  }, []);

  useEffect((): void => {
    const lsValue: string | null = localStorage.getItem('searchItem');
    if (lsValue !== null) {
      setValue(lsValue);
      getData(lsValue);
    } else {
      getData(value);
    }
    setSearchParams({ page: String(currentPage) });
  }, [pageItems, currentPage]);

  return (
    <div className="container">
      <Search
        value={value}
        setState={(val) => setValue(val)}
        getData={() => getData(value)}
        setCurrentPage={setCurrentPage}
      />
      <ChooseCount
        value={pageItems}
        setValue={(ev) => setPageItems(ev.target.value)}
        setPage={setCurrentPage}
      />
      <ErrorBoundary>
        <ErrorButton onClick={() => errorMaker(setError)} />
        {data !== null && (
          <PaginationButtons
            data={data}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            setCurrentPage={setCurrentPage}
          />
        )}
        <List
          data={data !== null ? data.products : null}
          isError={error}
          isLoading={isLoading}
        />

        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

export default App;
