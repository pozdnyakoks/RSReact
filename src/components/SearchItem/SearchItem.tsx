import { useSearchParams } from 'react-router-dom';
import { TSearchItem } from '../../utils/types';
import './SearchItem.scss';

function SearchItem(props: TSearchItem) {
  const [searchParams, setSearchParams] = useSearchParams();

  function clickHandler(): void {
    const curPage: string | null = searchParams.get('page');
    if (curPage !== null) {
      setSearchParams({ page: curPage, item: String(props.id) });
    }
  }

  return (
    <li className="list-item">
      <div onClick={clickHandler}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

export default SearchItem;
