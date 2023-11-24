import SearchItem from '../SearchItem/SearchItem';
import Image from 'next/image';

import { TList, TSearchItem } from '../../utils/types';

function List(props: TList) {
  if (props.isError !== undefined) throw new Error('Error in url');
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
        <Image
          src="/loader.svg"
          alt="loader"
          width="100"
          height="100"
          className="loader"
        />
      ) : list !== null && list.length === 0 ? (
        <p className="empty-error-msg">Sorry, nothing is here :(</p>
      ) : (
        <ol className="list">{list}</ol>
      )}
    </>
  );
}

export default List;
