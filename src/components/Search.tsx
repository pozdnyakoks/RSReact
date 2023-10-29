import React from 'react';

class Search extends React.Component<{
  value: string;
  setState: (value: string) => void;
  getData: (value: string) => void;
}> {
  handleClick(e: React.MouseEvent): void {
    e.preventDefault();
    localStorage.setItem('searchItem', this.props.value.trim());
    this.props.getData(this.props.value.trim());
    this.props.setState(this.props.value.trim());
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue: string = e.target.value;
    this.props.setState(newValue);
  }

  render(): JSX.Element {
    return (
      <div className="input-box">
        <input
          value={this.props.value}
          onChange={(e) => this.handleChange(e)}
          type="text"
          className="search-input"
          placeholder="Star Wars Character"
        />
        <button className="search-btn" onClick={(e) => this.handleClick(e)}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
