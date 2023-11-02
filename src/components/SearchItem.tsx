import { TSearchItem } from '../utils/types';

function SearchItem(props: TSearchItem) {
  return (
    <li className="list-item">
      <h2>
        <span>title:</span> {props.title}
      </h2>
      <p>
        <span>Description:</span> {props.description}
      </p>
      <img src={props.thumbnail} alt={props.title} />
    </li>
  );
}

export default SearchItem;
