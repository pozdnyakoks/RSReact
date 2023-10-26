import React from 'react';
import SearchItem from './SearchItem';

import { TList } from '../utils/types';

class List extends React.Component<TList> {
  render() {
    console.log(this.props.data);
    const list = this.props.data.map((el) => (
      <SearchItem
        key={el.name}
        name={el.name}
        birth_year={el.birth_year}
        gender={el.gender}
      />
    ));

    return (
      <ul>
        {list.length > 0 ? (
          list
        ) : (
          <img src="/loader.svg" alt="loader" className="loader" />
        )}
      </ul>
    );
  }
}

export default List;
