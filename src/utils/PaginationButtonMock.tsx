import { useSearchParams } from 'react-router-dom';
import { PaginationButton } from '../components/PaginationButtons/PaginationButton/PaginationButton';
import { useState } from 'react';

export default function PaginationButtonMock() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [, setCurrentPage] = useState(1);

  return (
    // <BrowserRouter>
    <PaginationButton
      searchParams={searchParams}
      setSearchParams={setSearchParams}
      value="2"
      setCurrentPage={setCurrentPage}
    />
    // </BrowserRouter>
  );
}
