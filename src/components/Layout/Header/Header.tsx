import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <nav>
          <ul className="header__list">
            <li><NavLink to='/'>Main</NavLink></li>
            <li><NavLink to='uncontrolled'>Uncontrolled</NavLink></li>
            <li><NavLink to='controlled'>Controlled</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}