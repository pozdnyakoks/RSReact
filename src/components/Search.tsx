import React from 'react';

class Search extends React.Component<{
  value: string;
  setState: (value: string) => void;
  getData: (value: string) => void;
}> {
  handleClick(e: React.MouseEvent) {
    e.preventDefault();
    localStorage.setItem('searchItem', this.props.value);
    this.props.getData(this.props.value);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    this.props.setState(newValue);
  }

  render() {
    return (
      <div>
        <input
          value={this.props.value}
          onChange={(e) => this.handleChange(e)}
          type="text"
          className="search-input"
        />
        <button className="search-btn" onClick={(e) => this.handleClick(e)}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
