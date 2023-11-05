import './ChooseCount.scss';

export function ChooseCount({
  value,
  setValue,
  setPage,
}: {
  value: string;
  setValue: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const changeValue = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev);
    setPage(1);
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
