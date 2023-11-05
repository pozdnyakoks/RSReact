import { SetURLSearchParams } from 'react-router-dom';
import './PaginationButton.scss';

export const PaginationButton = ({
  value,
  searchParams,
  setSearchParams,
  setCurrentPage,
}: {
  value: string;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  function changePage() {
    setSearchParams({ page: value });
    setCurrentPage(Number(value));
  }

  const isCurrent = searchParams.get('page') === value;

  return (
    <button onClick={() => changePage()} className={isCurrent ? 'active' : ''}>
      {value}
    </button>
  );
};
