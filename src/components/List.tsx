import SearchItem from './SearchItem';

import { TList, TSearchItem } from '../utils/types';

function List(props: TList) {
  if (props.isError) throw new Error('Error in url');
  const list: JSX.Element[] | null =
    props.data !== null
      ? props.data.map((el: TSearchItem) => (
          <SearchItem
            key={el.name}
            name={el.name}
            birth_year={el.birth_year}
            gender={el.gender}
          />
        ))
      : null;

  return (
    <ol className="list">
      {props.isLoading ? (
        <img src="/loader.svg" alt="loader" className="loader" />
      ) : list !== null && list.length === 0 ? (
        'Sorry, nothing is here'
      ) : (
        list
      )}
    </ol>
  );
}

export default List;
