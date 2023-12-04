import './Main.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Main = () => {
  const list = useSelector(
    (state: RootState) => state.form
  )
  return (
    <section>
      <div className="container">
        <h2>Main</h2>
        <div className="formList">
          {list.length > 0 &&
            list.map(el => (
              <div className="form-item" key={el.picture}>
                <p>Name: {el.name}</p>
                <p>Age: {el.age}</p>
                <p>Email: {el.email}</p>
                <p>Password: {el.password}</p>
                <p>Gender: {el.gender}</p>
                <p>Accept T&C: {el.terms}</p>
                <img src={el.picture} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}