import React from 'react';
import './Search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../store/slices/searchValue.slice';
import { RootState } from '../../store/store';

function Search({
  getData,
  setCurrentPage,
}: {
  getData: (value: string) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const searchValue = useSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const dispatch = useDispatch();
  function handleClick(e: React.MouseEvent): void {
    e.preventDefault();
    dispatch(setSearchValue(searchValue.trim()));
    getData(searchValue.trim());
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue: string = e.target.value;
    dispatch(setSearchValue(newValue));
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
