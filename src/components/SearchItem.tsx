import React from 'react';

import { TSearchItem } from '../utils/types';

class SearchItem extends React.Component<TSearchItem> {
  render() {
    return (
      <li>
        <h2>Name: {this.props.name}</h2>
        <p>Birth year: {this.props.birth_year}</p>
        <p>Gender: {this.props.gender}</p>
      </li>
    );
  }
}

export default SearchItem;
