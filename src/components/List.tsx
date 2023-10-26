import React from 'react';
import SearchItem from './SearchItem';

// https://www.omdbapi.com/?apikey=8f38710c&s=game&page=100

import { TList } from '../utils/types';

class List extends React.Component<TList> {
  render() {
    const list = this.props.map((el) => (
      <SearchItem
        key={el.poster}
        title={el.title}
        poster={el.poster}
        year={el.year}
      />
    ));
    return <ul>{list}</ul>;
  }
}

export default List;
