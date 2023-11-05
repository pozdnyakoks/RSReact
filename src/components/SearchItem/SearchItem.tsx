// import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { TSearchItem } from '../../utils/types';
import './SearchItem.scss';

function SearchItem(props: TSearchItem) {
  const [searchParams, setSearchParams] = useSearchParams();

  function clickHandler() {
    const curPage = searchParams.get('page');
    if (curPage !== null) {
      setSearchParams({ page: curPage, item: String(props.id) });
    }
  }

  return (
    <li className="list-item">
      <div onClick={clickHandler}>
        <h2>
          <span>title:</span> {props.title}
        </h2>
        <p>
          <span>Description:</span> {props.description}
        </p>
        <img src={props.thumbnail} alt={props.title} />
      </div>
    </li>
  );
}

export default SearchItem;
