import { useState, useEffect } from 'react';
import Search from './Search/Search';
import List from './List/List';
import ErrorBoundary from './ErrorBoundary';
import ErrorButton from './ErrorButton/ErrorButton';
import { ChooseCount } from './ChooseCount/ChooseCount';
import { Outlet, useSearchParams } from 'react-router-dom';
import { TData } from './../utils/types';
import errorMaker from './../utils/ErrorMaker';
import PaginationButtons from './PaginationButtons/PaginationButtons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setList } from '../store/slices/list.slice';

function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageItems, setPageItems] = useState('15');
  const current = searchParams.get('page') ?? '1';
  const [currentPage, setCurrentPage] = useState(Number(current));

  const dispatch = useDispatch();

  const searchValue = useSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const data = useSelector((state: RootState) => state.list.list);

  function getData(value: string): void {
    setIsLoading(true);

    const mainUrl = 'https://dummyjson.com/products';
    const itemsCounter = (currentPage - 1) * Number(pageItems);

    const url: string =
      value === ''
        ? `${mainUrl}?skip=${itemsCounter}&limit=${pageItems}`
        : `${mainUrl}/search?q=${value}&skip=${itemsCounter}&limit=${pageItems}`;
    fetch(url)
      .then((res) => {
        if (res.status === 404) setError(true);
        return res.json();
      })
      .then((data: TData) => {
        dispatch(setList(data));
        setIsLoading(false);
      });
  }

  useEffect((): void => {
    getData(searchValue);
    const item = searchParams.get('item');
    if (item) {
      setSearchParams({ page: String(currentPage), item: item });
    } else {
      setSearchParams({ page: String(currentPage) });
    }
  }, [pageItems, currentPage]);

  return (
    <div className="container">
      <Search
        getData={() => getData(searchValue)}
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

export default MainPage;
