import Close from './../assets/close.svg';
import { useSearchParams } from 'react-router-dom';
import { TItem } from '../utils/types';
import { useState, useEffect } from 'react';

export default function ModalItem() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [item, setItem] = useState<TItem | null>(null);

  useEffect(() => {
    const product = searchParams.get('item');
    console.log(product);
    if (product) {
      const url = `https://dummyjson.com/products/${product}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
        });
    }
    console.log(item);
  }, [searchParams]);

  function clickHandler() {
    setItem(null);
    searchParams.delete('item');
    setSearchParams(searchParams);
  }

  return (
    <div className={`modal ${item ?? 'none'}`}>
      {item && (
        <div className="modal-item">
          <button onClick={clickHandler}>
            <img className="close-img" src={Close} alt="close" />
          </button>
          <h2>{item.title}</h2>
        </div>
      )}
    </div>
  );
}
