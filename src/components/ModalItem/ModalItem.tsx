import Close from './../../assets/close.svg';
import { useSearchParams } from 'react-router-dom';
import { TItem } from '../../utils/types';
import { useState, useEffect } from 'react';
import './ModalItem.scss';
import { setModalMode } from '../../store/slices/modalMode.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function ModalItem() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [item, setItem] = useState<TItem | null>(null);

  const dispatch = useDispatch();
  const modalMode = useSelector(
    (state: RootState) => state.modalMode.modalMode
  );

  useEffect(() => {
    const product: string | null = searchParams.get('item');
    product ? dispatch(setModalMode(true)) : dispatch(setModalMode(false));
    if (product) {
      const url = `https://dummyjson.com/products/${product}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
        });
    }
  }, [searchParams]);

  function clickHandler() {
    setItem(null);
    searchParams.delete('item');
    setSearchParams(searchParams);
  }
  0;
  return (
    <div className={`modal ${modalMode ? '' : 'none'}`} onClick={clickHandler}>
      <div className="modal-item" onClick={(e) => e.stopPropagation()}>
        {item ? (
          <>
            <button
              onClick={clickHandler}
              aria-label="close"
              className="close-img"
            >
              <img src={Close} alt="close" aria-label="close" />
            </button>
            <h2 className="title">{item.title}</h2>
            <img src={item.thumbnail} alt={item.title} />
            <p className="desc">{item.description}</p>
            <p className="price">
              Only for <span>{item.price}</span> $
            </p>
          </>
        ) : (
          <img src="/loader.svg" alt="loader" className="loader" />
        )}
      </div>
    </div>
  );
}
