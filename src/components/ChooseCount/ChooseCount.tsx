import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setPageItems } from '../../store/slices/pageItems.slice';
import { setCurPage } from '../../store/slices/curPage.slice';

export function ChooseCount() {
  const dispatch = useDispatch();
  const value = String(
    useSelector((state: RootState) => state.pagesItems.pageItems)
  );
  const changeValue = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCurPage('1'));
    dispatch(setPageItems(Number(ev.target.value)));
  };

  return (
    <div className="choose-radios">
      <label>
        <input
          type="radio"
          name="count"
          value="5"
          checked={value === '5'}
          onChange={(ev) => changeValue(ev)}
        />
        5
      </label>
      <label>
        <input
          type="radio"
          name="count"
          value="10"
          checked={value === '10'}
          onChange={(ev) => changeValue(ev)}
        />
        10
      </label>
      <label>
        <input
          type="radio"
          name="count"
          value="15"
          checked={value === '15'}
          onChange={(ev) => changeValue(ev)}
        />
        15
      </label>
      <label>
        <input
          type="radio"
          name="count"
          value="30"
          checked={value === '30'}
          onChange={(ev) => changeValue(ev)}
        />
        30
      </label>
    </div>
  );
}
