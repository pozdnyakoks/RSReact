import React from 'react';

type TSearchItem = {
  name: string;
  desc: string;
};

class SearchItem extends React.Component<TSearchItem> {
  render() {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <p>{this.props.desc}</p>
      </li>
    );
  }
}

export default SearchItem;
