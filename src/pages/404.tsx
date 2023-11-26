import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404 Page doesn&apos;t exist</h1>
      <p>Please enter correct url</p>
      <Link href="/">Home</Link>
    </div>
  );
}
