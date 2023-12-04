import './Footer.scss';

export const Footer = () => {
  const year = new Date();

  return (
    <footer className="footer">
      <div className="container">
        <p>All right reserved, {year.getFullYear()}</p>
      </div>
    </footer>
  )
}