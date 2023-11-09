import React, { useContext } from 'react';
import './Search.scss';
import { SearchContext } from '../../contexts/searchContext';

function Search({
  getData,
  setCurrentPage,
}: {
  getData: (value: string) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  function handleClick(e: React.MouseEvent): void {
    e.preventDefault();
    localStorage.setItem('searchItem', searchValue.trim());
    getData(searchValue.trim());
    setSearchValue(searchValue.trim());
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue: string = e.target.value;
    setSearchValue(newValue);
    setCurrentPage(1);
  }

  return (
    <div className="search">
      <input
        value={searchValue}
        onChange={(e) => handleChange(e)}
        type="text"
        className="search-input"
        placeholder="Enter product name"
      />
      <button className="search-btn" onClick={(e) => handleClick(e)}>
        Search
      </button>
    </div>
  );
}

export default Search;
