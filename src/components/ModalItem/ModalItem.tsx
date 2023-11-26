import Close from './../../assets/close.svg';

import { TItem } from '../../utils/types';
import { useEffect, useState } from 'react';
import { setModalMode } from '../../store/slices/modalMode.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ModalItem() {
  const [item, setItem] = useState<TItem | null>(null);

  const dispatch = useDispatch();
  const modalMode = useSelector(
    (state: RootState) => state.modalMode.modalMode
  );
  const router = useRouter();

  useEffect(() => {
    const { item } = router.query;
    if (item) {
      dispatch(setModalMode(true));
      const url = `https://dummyjson.com/products/${item}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
        })
        .catch((error) => {
          console.error('Error fetching item data:', error);
          setItem(null);
        });
    } else {
      dispatch(setModalMode(false));
    }
  }, [router.query]);

  function clickHandler() {
    setItem(null);
    delete router.query.item;
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query },
      },
      undefined,
      {}
    );
  }
  0;
  return (
    <>
      {modalMode && item && (
        <div
          className={`modal ${modalMode ? '' : 'none'}`}
          onClick={clickHandler}
        >
          <div className="modal-item" onClick={(e) => e.stopPropagation()}>
            {item ? (
              <>
                <button
                  onClick={clickHandler}
                  aria-label="close"
                  className="close-img"
                >
                  <Image
                    src={Close}
                    alt="close"
                    aria-label="close"
                    width="20"
                    height="20"
                  />
                </button>
                <h2 className="title">{item.title}</h2>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width="100"
                  height="100"
                />
                <p className="desc">{item.description}</p>
                <p className="price">
                  Only for <span>{item.price}</span> $
                </p>
              </>
            ) : (
              <Image
                src="/loader.svg"
                width="100"
                height="100"
                alt="loader"
                className="loader"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
