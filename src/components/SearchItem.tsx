import { TSearchItem } from '../utils/types';

function SearchItem(props: TSearchItem) {
  return (
    <li className="list-item">
      <h2>
        <span>Name:</span> {props.name}
      </h2>
      <p>
        <span>Birth year:</span> {props.birth_year}
      </p>
      <p>
        <span>Gender:</span> {props.gender}
      </p>
    </li>
  );
}

export default SearchItem;
