import { useEffect } from 'react';
import Search from './Search/Search';
import List from './List/List';
import ErrorBoundary from './ErrorBoundary';
import ErrorButton from './ErrorButton/ErrorButton';
import { ChooseCount } from './ChooseCount/ChooseCount';
import { Outlet, useSearchParams } from 'react-router-dom';
import errorMaker from './../utils/ErrorMaker';
import PaginationButtons from './PaginationButtons/PaginationButtons';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useGetItemsNavQuery } from '../services/data';

function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = useSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const pageItems = useSelector(
    (state: RootState) => state.pagesItems.pageItems
  );

  const currentPage = useSelector((state: RootState) => state.curPage.curPage);
  const itemsCounter = (Number(currentPage) - 1) * Number(pageItems);

  const { data, error, isLoading } = useGetItemsNavQuery({
    skip: itemsCounter,
    limit: pageItems,
    value: value,
  });

  useEffect((): void => {
    const item = searchParams.get('item');
    if (item) {
      setSearchParams({ page: String(currentPage), item: item });
    } else {
      setSearchParams({ page: String(currentPage) });
    }
  }, [pageItems, currentPage]);

  return (
    <div className="container">
      <Search />
      <ChooseCount />
      <ErrorBoundary>
        <ErrorButton onClick={errorMaker} />
        {data !== undefined && (
          <PaginationButtons
            data={data}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        )}
        <List
          data={data !== undefined ? data.products : null}
          isError={error}
          isLoading={isLoading}
        />
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

export default MainPage;
