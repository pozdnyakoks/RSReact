import { TSearchItem } from '../../utils/types';
import { useRouter } from 'next/router';

import { setModalMode } from '../../store/slices/modalMode.slice';
import { useDispatch } from 'react-redux';

function SearchItem(props: TSearchItem) {
  const dispatch = useDispatch();
  const router = useRouter();

  function clickHandler(): void {
    const { page } = router.query;
    if (page !== undefined) {
      router.push({
        query: { page: page, item: String(props.id) },
      });
      dispatch(setModalMode(true));
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
