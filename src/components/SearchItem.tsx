import React from 'react';

import { TSearchItem } from '../utils/types';

class SearchItem extends React.Component<TSearchItem> {
  render(): JSX.Element {
    return (
      <li className="list-item">
        <h2>
          <span>Name:</span> {this.props.name}
        </h2>
        <p>
          <span>Birth year:</span> {this.props.birth_year}
        </p>
        <p>
          <span>Gender:</span> {this.props.gender}
        </p>
      </li>
    );
  }
}

export default SearchItem;
