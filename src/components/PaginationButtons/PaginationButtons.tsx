import { SetURLSearchParams } from 'react-router-dom';
import { PaginationButton } from './PaginationButton/PaginationButton';
import { TData } from '../../utils/types';

export default function PaginationButtons({
  data,
  searchParams,
  setSearchParams,
  setCurrentPage,
}: {
  data: TData;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
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
  );
}
