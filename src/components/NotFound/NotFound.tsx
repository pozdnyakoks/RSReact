import { Link } from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404 Page doesn&apos;t exist</h1>
      <p>Please enter correct url</p>
      <Link to="/">Home</Link>
    </div>
  );
}
