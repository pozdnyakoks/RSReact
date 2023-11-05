import React from 'react';
import './Search.scss';

function Search({
  value,
  setState,
  getData,
  setCurrentPage,
}: {
  value: string;
  setState: (value: string) => void;
  getData: (value: string) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  function handleClick(e: React.MouseEvent): void {
    e.preventDefault();
    localStorage.setItem('searchItem', value.trim());
    getData(value.trim());
    setState(value.trim());
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue: string = e.target.value;
    setState(newValue);
    setCurrentPage(1);
  }

  return (
    <div className="search">
      <input
        value={value}
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
