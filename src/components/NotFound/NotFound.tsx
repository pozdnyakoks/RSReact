import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>404 Page doesn&apos;t exist</h1>
      <Link to="/">Home</Link>
    </>
  );
}
