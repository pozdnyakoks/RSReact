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
import { RootState, wrapper } from '../store/store';
import { useGetItemsNavQuery } from '../services/data';
import { setList } from '../store/slices/list.slice';
import { TData } from '@/utils/types';
import ModalItem from '@/components/ModalItem/ModalItem';
import { mainUrl } from '@/utils/mainUrl';

const Home = ({ data }: { data: TData }) => {
  const router = useRouter();
  const value = useSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const pageItems = useSelector(
    (state: RootState) => state.pagesItems.pageItems
  );
  const currentPage = useSelector((state: RootState) => state.curPage.curPage);
  const itemsCounter = (Number(currentPage) - 1) * Number(pageItems);

  const { error, isLoading } = useGetItemsNavQuery({
    skip: itemsCounter,
    limit: pageItems,
    value: value,
  });

  const dispatch = useDispatch();
  if (data !== undefined) dispatch(setList(data));

  const { item } = router.query;
  useEffect(() => {
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
        {data !== undefined && <PaginationButtons />}
      </ErrorBoundary>
      <List
        data={data !== undefined ? data.products : null}
        isError={error}
        isLoading={isLoading}
      />
      <ModalItem />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const state = store.getState();
    console.log(state);

    const skip = state.curPage ? Number(state.curPage) - 1 : 0;
    const limit = state.pagesItems ? Number(state.pagesItems) : 15;
    console.log(skip);
    console.log(limit);
    const value = state.searchValue.searchValue ?? '';
    let url: string;
    if (value !== '') url = `${mainUrl}?skip=${skip}&limit=${limit}`;
    else url = `${mainUrl}/search?q=${value}&skip=${skip}&limit=${limit}`;

    const res = await fetch(url);

    const data = await res.json();

    return {
      props: data,
    };
  }
);

export default Home;
