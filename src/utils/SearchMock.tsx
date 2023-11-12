import { useState } from 'react';
import Search from '../components/Search/Search';

export default function SearchMock() {
  const [, setCurrentPage] = useState(1);

  function getData(value: string): void {
    console.log(value);
  }

  return (
    <Search getData={() => getData('data')} setCurrentPage={setCurrentPage} />
  );
}
