import { setCurPage } from '../../../store/slices/curPage.slice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

export const PaginationButton = ({ value }: { value: string }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  function changePage() {
    router.push({
      query: { page: value },
    });
    dispatch(setCurPage(value));
  }
  const { page } = router.query;

  const isCurrent: boolean = page === value;

  return (
    <button onClick={() => changePage()} className={isCurrent ? 'active' : ''}>
      {value}
    </button>
  );
};
