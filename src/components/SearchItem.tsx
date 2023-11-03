import { Link } from 'react-router-dom';
import { TSearchItem } from '../utils/types';

function SearchItem(props: TSearchItem) {
  return (
    <li className="list-item">
      <Link to={`&details=${props.id}`}>
        <h2>
          <span>title:</span> {props.title}
        </h2>
        <p>
          <span>Description:</span> {props.description}
        </p>
        <img src={props.thumbnail} alt={props.title} />
      </Link>
    </li>
  );
}

export default SearchItem;
