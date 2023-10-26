import React from 'react';

import { TSearchItem } from '../utils/types';

class SearchItem extends React.Component<TSearchItem> {
  render() {
    return (
      <li>
        <h2>{this.props.title}</h2>
        <p>{this.props.year}</p>
        <img src={this.props.poster} />
      </li>
    );
  }
}

export default SearchItem;
