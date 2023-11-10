import SearchItem from '../SearchItem/SearchItem';
import './List.scss';

import { TList, TSearchItem } from '../../utils/types';

function List(props: TList) {
  if (props.isError) throw new Error('Error in url');
  const list: JSX.Element[] | null =
    props.data !== null
      ? props.data.map((el: TSearchItem) => (
          <SearchItem
            key={el.id}
            title={el.title}
            description={el.description}
            thumbnail={el.thumbnail}
            id={el.id}
          />
        ))
      : null;

  return (
    <>
      {props.isLoading ? (
        <img src="/loader.svg" alt="loader" className="loader" />
      ) : list !== null && list.length === 0 ? (
        <p className="empty-error-msg">Sorry, nothing is here :(</p>
      ) : (
        <ol className="list">{list}</ol>
      )}
    </>
  );
}

export default List;
