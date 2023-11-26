import Search from '@/components/Search/Search';
import List from '@/components/List/List';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorButton from '@/components/ErrorButton/ErrorButton';
import { ChooseCount } from '@/components/ChooseCount/ChooseCount';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import errorMaker from './../utils/ErrorMaker';
import PaginationButtons from '@/components/PaginationButtons/PaginationButtons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useGetItemsNavQuery } from '../services/data';
import { setList } from '../store/slices/list.slice';

function Home() {
  const router = useRouter();
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

  const dispatch = useDispatch();
  if (data !== undefined) dispatch(setList(data));

  const { item } = router.query;
  useEffect((): void => {
    if (item !== undefined) {
      router.push({
        query: { page: String(currentPage), item: item },
      });
    } else {
      router.push({
        query: { page: String(currentPage) },
      });
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
          // searchParams={searchParams}
          // setSearchParams={setSearchParams}
          />
        )}
        {/* <Outlet /> */}
      </ErrorBoundary>
      <List
        data={data !== undefined ? data.products : null}
        isError={error}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Home;
