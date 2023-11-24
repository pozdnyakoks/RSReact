// import { SetURLSearchParams } from 'react-router-dom';
import { setCurPage } from '../../../store/slices/curPage.slice';
import { useDispatch } from 'react-redux';

export const PaginationButton = ({
  value, // searchParams, // setSearchParams,
}: {
  value: string;
  // searchParams: URLSearchParams;
  // setSearchParams: SetURLSearchParams;
}) => {
  const dispatch = useDispatch();
  function changePage() {
    // setSearchParams({ page: value });
    dispatch(setCurPage(value));
  }

  // const isCurrent: boolean = searchParams.get('page') === value;

  return (
    <button onClick={() => changePage()}>
      {/* <button onClick={() => changePage()} className={isCurrent ? 'active' : ''}> */}
      {value}
    </button>
  );
};
