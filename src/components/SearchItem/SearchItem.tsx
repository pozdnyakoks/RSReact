// import { useSearchParams } from 'react-router-dom';
import { TSearchItem } from '../../utils/types';

// import { setModalMode } from '../../store/slices/modalMode.slice';
// import { useDispatch } from 'react-redux';

function SearchItem(props: TSearchItem) {
  // const [searchParams, setSearchParams] = useSearchParams();

  // const dispatch = useDispatch();

  function clickHandler(): void {
    console.log('click');
    //   const curPage: string | null = searchParams.get('page');
    //   if (curPage !== null) {
    //     setSearchParams({ page: curPage, item: String(props.id) });
    //     dispatch(setModalMode(true));
  }
  // }

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
