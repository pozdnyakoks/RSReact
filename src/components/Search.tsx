import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  componentDidMount(): void {
    const lsValue = localStorage.getItem('searchItem');
    if (lsValue !== null) {
      this.setState({
        value: lsValue,
      });
    }
  }

  handleClick(e: React.MouseEvent) {
    e.preventDefault();
    localStorage.setItem('searchItem', this.state.value);
    this.setState({
      value: '',
    });
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    this.setState({
      value: newValue,
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
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
