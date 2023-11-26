// import { SetURLSearchParams } from 'react-router-dom';
import { PaginationButton } from './PaginationButton/PaginationButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function PaginationButtons() {
  const data = useSelector((state: RootState) => state.list.list);
  const pageItems = useSelector(
    (state: RootState) => state.pagesItems.pageItems
  );

  return data && data.products.length !== 0 ? (
    <div className="pagination-btns">
      {Array(Math.ceil(data.total / pageItems))
        .fill(1)
        .map((el, index) => (
          <PaginationButton key={index} value={String(index + 1)} />
        ))}
    </div>
  ) : (
    <></>
  );
}
